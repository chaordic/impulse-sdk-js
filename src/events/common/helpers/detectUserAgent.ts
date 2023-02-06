type UserAgent = {
  webkit?: string;
  chrome?: string;
  safari?: string;
  firefox?: string;
  opera?: string;
  desktop?: string;
  mobile?: string;
  tablet?: string;
  bot?: string;
  postman?: string;
  insomnia?: string;
  curl?: string;
  wget?: string;
  userAgent: string;
}

export function detectUserAgent(req: any): any {
  const userAgent = req.headers["user-agent"];

  const regexWebkit = /AppleWebKit\/([\d.]+)/;
  const regexChrome = /Chrome\/([\d.]+)/;
  const regexSafari = /Safari\/([\d.]+)/;
  const regexFirefox = /Firefox\/([\d.]+)/;
  const regexOpera = /Opera\/([\d.]+)/;

  const regexDesktop = /Windows NT|Mac OS X|Linux\/([\d.]+)/;
  const regexMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini\/([\d.]+)/;
  const regexTablet = /iPad\/([\d.]+)/;
  const regexBot = /Googlebot|bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|Exabot|facebot|ia_archiver\/([\d.]+)/;

  const regexPostman = /Postman\/([\d.]+)/;
  const regexInsomnia = /insomnia\/([\d.]+)/;
  const regexCurl = /curl\/([\d.]+)/;
  const regexWget = /Wget\/([\d.]+)/;

  const regex = regexWebkit.exec(userAgent);
  const regex2 = regexChrome.exec(userAgent);
  const regex3 = regexSafari.exec(userAgent);
  const regex4 = regexFirefox.exec(userAgent);
  const regex5 = regexOpera.exec(userAgent);

  const regexDesktop2 = regexDesktop.exec(userAgent);
  const regexMobile2 = regexMobile.exec(userAgent);
  const regexTablet2 = regexTablet.exec(userAgent);
  const regexBot2 = regexBot.exec(userAgent);

  const regexPostman2 = regexPostman.exec(userAgent);
  const regexInsomnia2 = regexInsomnia.exec(userAgent);
  const regexCurl2 = regexCurl.exec(userAgent);
  const regexWget2 = regexWget.exec(userAgent);

  const dados: UserAgent = {
    webkit: regex ? regex[1] : undefined,
    chrome: regex2 ? regex2[1] : undefined,
    safari: regex3 ? regex3[1] : undefined,
    firefox: regex4 ? regex4[1] : undefined,
    opera: regex5 ? regex5[1] : undefined,
    desktop: regexDesktop2 ? regexDesktop2[1] : undefined,
    mobile: regexMobile2 ? regexMobile2[1] : undefined,
    tablet: regexTablet2 ? regexTablet2[1] : undefined,
    bot: regexBot2 ? regexBot2[1] : undefined,
    postman: regexPostman2 ? regexPostman2[1] : undefined,
    insomnia: regexInsomnia2 ? regexInsomnia2[1] : undefined,
    curl: regexCurl2 ? regexCurl2[1] : undefined,
    wget: regexWget2 ? regexWget2[1] : undefined,
    userAgent
  }

  return validateUndefineds(dados);
}

// Valida undefineds
function validateUndefineds(obj: any) {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }
}