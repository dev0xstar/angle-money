import { ab as A, f as g, I as n } from "./react-fa804298.js";
import { j, m as c } from "./style-829a44f9.js";
import { i as r, a as x } from "./index-834edce6.js";
const U = ({
    children: a,
    wordsMargin: t = "mr-2",
    delayParent: s = 0,
    delayChildren: m = 0.2,
    staggerChildren: d = 0.05,
    dataUseEffect: u,
  }) => {
    const i = j(),
      { ref: y, inView: o } = A({ threshold: 0.5, triggerOnce: !0 });
    g.useEffect(() => {
      o && i.start("visible"), o || i.start("hidden");
    }, [i, o, u]);
    const h = { hidden: {}, visible: {} },
      f = {
        hidden: { opacity: 0, y: "0.25em" },
        visible: {
          opacity: 1,
          y: "0em",
          transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] },
        },
      };
    return n.jsx(n.Fragment, {
      children: a
        .split(" ")
        .map((b, l) =>
          n.jsx(
            c.span,
            {
              className: `${t} inline-block whitespace-nowrap`,
              ref: y,
              "aria-hidden": "true",
              initial: "hidden",
              animate: i,
              variants: h,
              transition: { delayChildren: s + l * m, staggerChildren: d },
              children: b
                .split("")
                .map((v, k) =>
                  n.jsx(
                    c.span,
                    {
                      className: "inline-block",
                      "aria-hidden": "true",
                      variants: f,
                      children: v,
                    },
                    k
                  )
                ),
            },
            l
          )
        ),
    });
  },
  E = {
    title: "Merkl",
    site: "Merkl",
    description:
      "Merkl simplifies streaming incentives onchain, offering tools to maximize your incentive budget or enhance earnings from liquidity.",
    appleTouchIcon: "https://app.merkl.xyz/images/merkl-apple-touch-icon.png",
    favicon32: "https://app.merkl.xyz/images/merkl-favicon-32x32.png",
    favicon16: "https://app.merkl.xyz/images/merkl-favicon-16x16.png",
    maskIcon: "https://app.merkl.xyz/images/merkl-safari-pinned-tab.svg",
    image: "https://app.merkl.xyz/images/merkl-sharing-visual.jpg",
    url: "https://app.merkl.xyz/",
    className: "merkl",
    safaryTag:
      "<script>var script=document.createElement('script');script.src='https://tag.safary.club/stag-0.1.11.js';script.async=true;script.setAttribute('data-name','safary-sdk');script.setAttribute('data-product-id','prd_TVgmBVFAGB');script.integrity='sha256-FcvJgRCaJFszFBKv8MGIbUcmHlVuHp7LX8zGgjfvvGs=';script.crossOrigin='anonymous';var target=document.head||document.body;target.appendChild(script);</script>",
  },
  T = {
    title: "Buy and Swap Stablecoins - Earn interest | Angle App",
    site: "Angle App",
    description:
      "Buy, exchange, bridge, or deposit stablecoins and earn passive yield — all in one place.",
    appleTouchIcon:
      "https://app-angle-money.vercel.app/images/app-apple-touch-icon.png",
    favicon32:
      "https://app-angle-money.vercel.app/images/app-favicon-32x32.png",
    favicon16:
      "https://app-angle-money.vercel.app/images/app-favicon-16x16.png",
    maskIcon:
      "https://app-angle-money.vercel.app/images/app-safari-pinned-tab.svg",
    image: "https://app-angle-money.vercel.app/images/app-sharing-visual.jpg",
    url: "https://app-angle-money.vercel.app/",
    className: "app",
    safaryTag:
      "<script>var script = document.createElement('script'); script.src = 'https://tag.safary.club/stag-0.1.10.js'; script.async = true; script.setAttribute('data-name', 'safary-sdk'); script.setAttribute('data-product-id', 'prd_IPfeuRrAwN'); script.integrity = 'sha256-TP/lQj1IzU9EojxJpHW+PuTRh88TBBM6IbrDJNQWR1E='; script.crossOrigin = 'anonymous'; var target = document.head || document.body; target.appendChild(script);</script>",
  },
  P = {
    title: "USD Stablecoin & Euro Stablecoin | Angle Protocol",
    site: "Angle Protocol",
    description:
      "Angle offers secure & decentralized stablecoins that generate yield for users, accessible to everyone.",
    appleTouchIcon: "https://angle.money/images/apple-touch-icon.png",
    favicon32: "https://angle.money/images/favicon-32x32.png",
    favicon16: "https://angle.money/images/favicon-16x16.png",
    maskIcon: "https://angle.money/images/safari-pinned-tab.svg",
    image: "https://angle.money/images/sharing-visual.jpg",
    url: "https://angle.money/",
    className: "landing",
    safaryTag:
      "<script>var script = document.createElement('script'); script.src = 'https://tag.safary.club/stag-0.1.10.js'; script.async = true; script.setAttribute('data-name', 'safary-sdk'); script.setAttribute('data-product-id', 'prd_IPfeuRrAwN'); script.integrity = 'sha256-TP/lQj1IzU9EojxJpHW+PuTRh88TBBM6IbrDJNQWR1E='; script.crossOrigin = 'anonymous'; var target = document.head || document.body; target.appendChild(script);</script>",
  },
  I = {
    title: "Angle Stablecoins Analytics: Market Cap, TVL & Collateral",
    site: "Angle Analytics",
    description:
      "Check the Protocol’s reserves in real-time, see which assets back the stablecoins, and get access to the balance sheet.",
    appleTouchIcon:
      "https://analytics.angle.money/images/analytics-apple-touch-icon.png",
    favicon32:
      "https://analytics.angle.money/images/analytics-favicon-32x32.png",
    favicon16:
      "https://analytics.angle.money/images/analytics-favicon-16x16.png",
    maskIcon:
      "https://analytics.angle.money/images/analytics-safari-pinned-tab.svg",
    image: "https://analytics.angle.money/images/analytics-sharing-visual.jpg",
    url: "https://analytics.angle.money/",
    className: "analytics",
    safaryTag: "",
  },
  w = {
    title: "Angle Labs Media",
    site: "Angle Labs Media",
    description: "Media generation for Angle Labs applications",
    appleTouchIcon:
      "https://analytics.angle.money/images/analytics-apple-touch-icon.png",
    favicon32:
      "https://analytics.angle.money/images/analytics-favicon-32x32.png",
    favicon16:
      "https://analytics.angle.money/images/analytics-favicon-16x16.png",
    maskIcon:
      "https://analytics.angle.money/images/analytics-safari-pinned-tab.svg",
    image: "https://analytics.angle.money/images/analytics-sharing-visual.jpg",
    url: "https://analytics.angle.money/",
    className: "media",
    safaryTag: "",
  },
  z = {
    merkl: E,
    app: T,
    landing: P,
    "merkl-landing": {
      title: "Merkl",
      site: "Merkl",
      description:
        "Merkl simplifies streaming incentives onchain, offering tools to maximize your incentive budget or enhance earnings from liquidity.",
      appleTouchIcon:
        "https://merkl.xyz/images/merkl-landing-apple-touch-icon.png",
      favicon32: "https://merkl.xyz/images/merkl-landing-favicon-32x32.png",
      favicon16: "https://merkl.xyz/images/merkl-landing-favicon-16x16.png",
      maskIcon: "https://merkl.xyz/images/merkl-landing-safari-pinned-tab.svg",
      image: "https://merkl.xyz/images/merkl-landing-sharing-visual.jpg",
      url: "https://merkl.xyz/",
      className: "merkl-landing",
      safaryTag:
        "<script>var script=document.createElement('script');script.src='https://tag.safary.club/stag-0.1.11.js';script.async=true;script.setAttribute('data-name','safary-sdk');script.setAttribute('data-product-id','prd_TVgmBVFAGB');script.integrity='sha256-FcvJgRCaJFszFBKv8MGIbUcmHlVuHp7LX8zGgjfvvGs=';script.crossOrigin='anonymous';var target=document.head||document.body;target.appendChild(script);</script>",
    },
    analytics: I,
    media: w,
  },
  e = {
    "/eura": {
      title: "EURA: Euro Stablecoin | Angle Protocol",
      description:
        "EURA is the most traded Euro stablecoin, designed as a permissionless digital currency for seamless global payments and decentralized financial services.",
      image: "/images/preview-eura.jpg",
    },
    "/usda": {
      title: "USDA: Stablecoin Dollar | Angle Protocol",
      description:
        "USDA is the most robust Dollar stablecoin, designed as a permissionless digital currency for seamless global payments and decentralized financial products.",
      image: "/images/preview-usda.jpg",
    },
    "/steur": {
      title: "stEUR: Yield-Bearing Euro Stablecoin | Angle Protocol",
      description:
        "stEUR is the easiest way to earn passive income in Euros. It’s a transparent, permissionless, onchain savings product that offers yield on your deposits.",
      image: "/images/preview-steur.jpg",
    },
    "/stusd": {
      title: "stUSD: Yield-Bearing Stablecoin | Angle Protocol",
      description:
        "stUSD is the easiest way to earn passive income in Dollars. It’s a transparent, permissionless, onchain savings product that offers yield on your deposits.",
      image: "/images/preview-stusd.jpg",
    },
    "/about-angle-labs": {
      title: "About Angle Labs | Angle Protocol",
      description:
        "Angle Labs is a software development company building the foundations of a permissionless, and open financial ecosystem powered by the blockchain.",
      image: "/images/preview-angle-labs.jpg",
    },
    "/labs-project": {
      title: "DeFi Tracker & Crypto Wallet Tools | Angle Protocol",
      description:
        "Calculate the yield you could earn on your stablecoins, track the carbon impact of your wallet, or simulate the impermanent loss from a liquidity position.",
      image: "/images/preview-angle-labs-projects.jpg",
    },
    "/fleeced": {
      title:
        "APY Losses Calculator for Non-yielding Stablecoins | Angle Protocol",
      description:
        "Check how much you've missed out on by holding USDC and USDT in your wallet instead of Angle's yield-bearing stablecoin.",
      image: "/images/fleeced-preview.jpg",
    },
    "/releases": {
      title: "Angle Timeline & Product Releases | Angle Protocol",
      description:
        "Explore the key milestones of the Angle Protocol, from its creation to the launch of the Euro savings solution (stEUR).",
      image: "/images/releases.jpg",
    },
    "/terms": {
      title: "Terms & Conditions | Angle Protocol",
      description:
        "Review the terms and conditions for using the Angle Protocol and its app, including services, risks, and acknowledgements.",
      image: "https://angle.money/images/sharing-visual.jpg",
    },
    "/privacy": {
      title: "Privacy and Cookies policy | Angle Protocol",
      description:
        "Check how Angle Protocol collects and uses information about users connecting to the website and app.",
      image: "https://angle.money/images/sharing-visual.jpg",
    },
    "/labs-projects/carbon-impact": {
      title: "Crypto Wallet Carbon Footprint Calculator | Angle Protocol",
      description:
        "Estimate your Ethereum address's carbon footprint based on your transactions, gas usage, and block hashrate.",
      image: "/images/preview-angle-labs-projects.jpg",
    },
    "/labs-projects/portfolio-simulation": {
      title: "Impermanent Loss Calculator | Angle Protocol",
      description:
        "Compare liquidity strategies, from simply holding ETH or stablecoins to supplying tokens to a liquidity pool.",
      image: "/images/preview-angle-labs-projects.jpg",
    },
  },
  p = z[x];
function B(a, t) {
  g.useEffect(() => {
    var s;
    return (
      a && !r
        ? (document.title = a)
        : t &&
          e != null &&
          e[t] &&
          !r &&
          (document.title =
            ((s = e == null ? void 0 : e[t]) == null ? void 0 : s.title) ??
            p.title),
      () => {
        r || (document.title = p.title);
      }
    );
  }, [a]);
}
export { U as A, B as u };
