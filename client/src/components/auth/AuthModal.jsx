import { useEffect, useState } from "react";
import { useStore } from "../../context/StoreContext";
import Icon from "../ui/Icons";

const empty = { name: "", identity: "", password: "", remember: true, showPassword: false };

export default function AuthModal() {
  const { authOpen, authMode, setAuthMode, closeAuth, login, user, logout, notify } = useStore();
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!authOpen) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") closeAuth();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [authOpen, closeAuth]);

  if (!authOpen) return null;

  const update = (key) => (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setForm((current) => ({ ...current, [key]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    if (!form.identity.trim() || !form.password.trim()) {
      setError("Enter your email or mobile number and password.");
      return;
    }
    if (authMode === "signup" && !form.name.trim()) {
      setError("Enter your full name.");
      return;
    }
    const name = form.name.trim() || form.identity.trim().split("@")[0];
    login({ name, identity: form.identity.trim() });
    setForm(empty);
    setError("");
  };

  return (
    <div className="modal" role="presentation" onClick={closeAuth}>
      <div
        className="modal__card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal__close" type="button" aria-label="Close" onClick={closeAuth}>
          <Icon name="close" />
        </button>

        {user ? (
          <div className="auth__done">
            <h2 id="auth-title">You're signed in</h2>
            <p>
              Welcome back, <strong>{user.name}</strong>
            </p>
            <button className="btn btn--block" type="button" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 id="auth-title">Welcome Back!</h2>
            <p className="modal__lead">Login to your GadgetBaba account</p>

            <div className="auth__tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={authMode === "login"}
                className={authMode === "login" ? "is-active" : ""}
                onClick={() => setAuthMode("login")}
              >
                Login
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={authMode === "signup"}
                className={authMode === "signup" ? "is-active" : ""}
                onClick={() => setAuthMode("signup")}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={submit}>
              {authMode === "signup" ? (
                <label className="field">
                  <Icon name="user" />
                  <input
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                </label>
              ) : null}

              <label className="field">
                <Icon name="mail" />
                <input
                  value={form.identity}
                  onChange={update("identity")}
                  placeholder="Enter your email or mobile number"
                  autoComplete="username"
                />
              </label>

              <label className="field">
                <Icon name="lock" />
                <input
                  value={form.password}
                  onChange={update("password")}
                  type={form.showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete={authMode === "login" ? "current-password" : "new-password"}
                />
                <button
                  className="field__eye"
                  type="button"
                  aria-label={form.showPassword ? "Hide password" : "Show password"}
                  onClick={() => setForm((current) => ({ ...current, showPassword: !current.showPassword }))}
                >
                  <Icon name={form.showPassword ? "eye-off" : "eye"} />
                </button>
              </label>

              {error ? <p className="auth__error">{error}</p> : null}

              <div className="auth__row">
                <label className="check">
                  <input type="checkbox" checked={form.remember} onChange={update("remember")} />
                  Remember me
                </label>
                <button
                  className="text-link"
                  type="button"
                  onClick={() => setError("Password reset link sent if this account exists.")}
                >
                  Forgot Password?
                </button>
              </div>

              <button className="btn btn--block auth__submit" type="submit">
                {authMode === "login" ? "Login" : "Create Account"}
                <Icon name="arrow" />
              </button>
            </form>

            <p className="auth__or">OR</p>

            <button className="social" type="button" onClick={() => notify("Continue with Google")}>
              <span className="social__g">G</span>
              Continue with Google
            </button>
            <button className="social" type="button" onClick={() => notify("Continue with Apple")}>
              <span className="social__apple"></span>
              Continue with Apple
            </button>

            <p className="auth__switch">
              New to GadgetBaba?{" "}
              <button type="button" onClick={() => setAuthMode("signup")}>
                Create an Account
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
