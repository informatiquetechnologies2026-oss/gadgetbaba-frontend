import { spawn, spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const clientDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const command = process.argv[2] || "dev";

function majorVersion(nodeBin) {
  const result = spawnSync(nodeBin, ["-p", "process.versions.node"], { encoding: "utf8" });
  if (result.status !== 0) return 0;
  return Number.parseInt(result.stdout.trim(), 10);
}

function findNode() {
  if (majorVersion(process.execPath) >= 18) return process.execPath;

  const root = join(homedir(), ".nvm/versions/node");
  if (!existsSync(root)) return null;

  const match = readdirSync(root)
    .map((name) => ({
      bin: join(root, name, "bin/node"),
      major: Number.parseInt(name.slice(1), 10),
    }))
    .filter((item) => item.major >= 18 && existsSync(item.bin))
    .sort((a, b) => b.major - a.major)[0];

  return match?.bin ?? null;
}

const node = findNode();

if (!node) {
  console.error("GadgetBaba needs Node.js 18 or newer. Current Node is too old for Vite.");
  console.error("Run: nvm install 20 && nvm use 20");
  process.exit(1);
}

function freePort(port) {
  const result = spawnSync("lsof", ["-nP", `-iTCP:${port}`, "-sTCP:LISTEN", "-t"], { encoding: "utf8" });
  const pids = (result.stdout || "")
    .split("\n")
    .map((pid) => pid.trim())
    .filter(Boolean);

  for (const pid of pids) {
    spawnSync("kill", ["-9", pid]);
  }
}

if (command === "dev") freePort(5173);

const viteArgs = command === "build" ? ["build"] : command === "preview" ? ["preview"] : [];
const child = spawn(node, [join(clientDir, "node_modules/vite/bin/vite.js"), ...viteArgs], {
  cwd: clientDir,
  stdio: "inherit",
});

child.on("exit", (code) => process.exit(code ?? 1));
