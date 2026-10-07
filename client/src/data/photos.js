const shot = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const photos = {
  iphoneDark: shot("photo-1695048133142-1a20484d2569", 700),
  iphoneSilver: shot("photo-1510557880182-3d4d3cba35a5", 700),
  iphoneBlue: shot("photo-1592899677977-9c10ca588bbd", 700),
  iphonePurple: shot("photo-1678685888221-cda773a3dcdb", 700),
  samsung: shot("photo-1610945415295-d9bbf067e59c", 700),
  laptop: shot("photo-1517336714731-489689fd1ca8", 1200),
  tablet: shot("photo-1544244015-0df4b3ffc6b0", 900),
  headphones: shot("photo-1583394838336-acd977736f90", 800),
  watch: shot("photo-1434493789847-2f02dc6ca35d", 700),
  watchGold: shot("photo-1523275335684-37898b6baf30", 700),
  buds: shot("photo-1606220945770-b5b6c2c55bf1", 700),
  camera: shot("photo-1516035069371-29a1b244cc32", 800),
  gamepad: shot("photo-1606144042614-b2417e99c4e3", 800),
  drone: shot("photo-1473968512647-3e447244af8f", 800),
  tv: shot("photo-1593359677879-a4bb92f829d1", 900),
  cables: shot("photo-1583863788434-e58a36330cf0", 800),
  smartHome: shot("photo-1558002038-1055907df827", 800),
  lifestyle: shot("photo-1594035910387-fea47794261f", 800),
  seller: shot("photo-1566576912321-d58ddd7a6088", 1000),
  pixel: shot("photo-1511707171634-5f897ff02aa9", 700),
  airdopes: shot("photo-1590658268037-6bf12165a8df", 700),
};
