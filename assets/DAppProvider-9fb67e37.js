import {
  H as c,
  ae as k,
  af as h,
  ag as De,
  f as d,
  I as G,
  ah as Se,
  X as Re,
  ai as Pe,
  aj as je,
  ak as Me,
} from "./react-fa804298.js";
import {
  q as z,
  f as Be,
  D as te,
  Q as ne,
  T as Le,
  S as Ne,
} from "./priceReference-c8273968.js";
import {
  bI as Ue,
  bJ as me,
  bK as Ve,
  bL as $e,
  bM as Ae,
  bN as pe,
  j as C,
  bO as le,
  aB as qe,
  u as fe,
  b3 as Ke,
  bP as we,
  N as ie,
  aj as Y,
  as as ue,
  bQ as de,
  bR as se,
  l as ee,
  bS as He,
  g as _e,
  C as Fe,
  bT as Ze,
  bU as Xe,
} from "./index-61771442.js";
import { F as ze, D as he } from "./lodash-52c9deff.js";
import { a as ce } from "./index-834edce6.js";
const ye = new Ve($e);
let Ge = 1;
function be(e, t) {
  const a = "Web3LegacyFetcher";
  return function (n, l) {
    const f = { method: n, params: l, id: Ge++, jsonrpc: "2.0" };
    return new Promise((E, D) => {
      this.emit("debug", {
        action: "request",
        fetcher: a,
        request: Ae(f),
        provider: this,
      }),
        t(f, (y, I) => {
          if (y)
            return (
              this.emit("debug", {
                action: "response",
                fetcher: a,
                error: y,
                request: f,
                provider: this,
              }),
              D(y)
            );
          if (
            (this.emit("debug", {
              action: "response",
              fetcher: a,
              request: f,
              response: I,
              provider: this,
            }),
            I.error)
          ) {
            const A = new Error(I.error.message);
            return (A.code = I.error.code), (A.data = I.error.data), D(A);
          }
          E(I.result);
        });
    });
  };
}
function Je(e) {
  return function (t, a) {
    a == null && (a = []);
    const n = { method: t, params: a };
    return (
      this.emit("debug", {
        action: "request",
        fetcher: "Eip1193Fetcher",
        request: Ae(n),
        provider: this,
      }),
      e.request(n).then(
        (l) => (
          this.emit("debug", {
            action: "response",
            fetcher: "Eip1193Fetcher",
            request: n,
            response: l,
            provider: this,
          }),
          l
        ),
        (l) => {
          throw (
            (this.emit("debug", {
              action: "response",
              fetcher: "Eip1193Fetcher",
              request: n,
              error: l,
              provider: this,
            }),
            l)
          );
        }
      )
    );
  };
}
class Ye extends Ue {
  constructor(t, a) {
    t == null && ye.throwArgumentError("missing provider", "provider", t);
    let n = null,
      l = null,
      f = null;
    typeof t == "function"
      ? ((n = "unknown:"), (l = t))
      : ((n = t.host || t.path || ""),
        !n && t.isMetaMask && (n = "metamask"),
        (f = t),
        t.request
          ? (n === "" && (n = "eip-1193:"), (l = Je(t)))
          : t.sendAsync
          ? (l = be(t, t.sendAsync.bind(t)))
          : t.send
          ? (l = be(t, t.send.bind(t)))
          : ye.throwArgumentError("unsupported provider", "provider", t),
        n || (n = "unknown:")),
      super(n, a),
      me(this, "jsonRpcFetchFunc", l),
      me(this, "provider", f);
  }
  send(t, a) {
    return this.jsonRpcFetchFunc(t, a);
  }
}
function Qe(e) {
  const {
    whitelistedDomains: t = [
      /^https:\/\/app\.safe\.global$/,
      /^https:\/\/safe\.global$/,
      /^https:\/\/.*\.blockscout\.com$/,
      /^https:\/\/pilot\.gnosisguild\.org$/,
    ],
  } = e || {};
  return () =>
    window.self !== window.top
      ? {
          label: "Safe",
          getIcon: async () =>
            (await c(() => import("./icon-11a5d515.js"), [])).default,
          getInterface: async () => {
            const { default: n } = await c(
                () => import("./index-f7a2bd5c.js").then((p) => p.i),
                [
                  "assets/index-f7a2bd5c.js",
                  "assets/lodash-52c9deff.js",
                  "assets/react-fa804298.js",
                ]
              ),
              { SafeAppProvider: l } = await c(
                () => import("./index-e494dd81.js").then((p) => p.i),
                [
                  "assets/index-e494dd81.js",
                  "assets/lodash-52c9deff.js",
                  "assets/priceReference-c8273968.js",
                  "assets/react-fa804298.js",
                  "assets/index-61771442.js",
                  "assets/style-829a44f9.js",
                  "assets/index-834edce6.js",
                  "assets/index-69e2d747.css",
                ]
              ),
              { createEIP1193Provider: f } = await c(
                () => import("./react-fa804298.js").then((p) => p.cP),
                ["assets/react-fa804298.js", "assets/lodash-52c9deff.js"]
              ),
              E = n.default || n,
              D = { allowedDomains: t },
              y = new E(D),
              I = await Promise.race([
                y.safe.getInfo(),
                new Promise((p) => setTimeout(p, 200)),
              ]);
            if (!I)
              throw new Error(
                'App must be loaded in a Safe App context, head to <a href="https://app.safe.global/">the Safe</a> and open this website as an app.'
              );
            const A = new l(I, y);
            return {
              provider: f(A, {
                eth_requestAccounts: () => Promise.resolve([I.safeAddress]),
              }),
              instance: y,
            };
          },
        }
      : [];
}
var s;
(function (e) {
  (e.AlphaWallet = "isAlphaWallet"),
    (e.ApexWallet = "isApexWallet"),
    (e.AToken = "isAToken"),
    (e.BifrostWallet = "isBifrost"),
    (e.Binance = "bbcSignTx"),
    (e.Bitpie = "isBitpie"),
    (e.BlockWallet = "isBlockWallet"),
    (e.Coinbase = "isToshi"),
    (e.CoinbaseExtension = "isCoinbaseWallet"),
    (e.Detected = "request"),
    (e.Dcent = "isDcentWallet"),
    (e.Exodus = "isExodus"),
    (e.Frontier = "isFrontier"),
    (e.Frame = "isFrame"),
    (e.HuobiWallet = "isHbWallet"),
    (e.HyperPay = "isHyperPay"),
    (e.ImToken = "isImToken"),
    (e.InfinityWallet = "isInfinityWallet"),
    (e.Liquality = "isLiquality"),
    (e.MeetOne = "wallet"),
    (e.MetaMask = "isMetaMask"),
    (e.MyKey = "isMYKEY"),
    (e.OwnBit = "isOwnbit"),
    (e.Status = "isStatus"),
    (e.Trust = "isTrust"),
    (e.TokenPocket = "isTokenPocket"),
    (e.TP = "isTp"),
    (e.WalletIo = "isWalletIO"),
    (e.XDEFI = "isXDEFI"),
    (e.OneInch = "isOneInchIOSWallet"),
    (e.Tokenary = "isTokenary"),
    (e.Tally = "isTally"),
    (e.BraveWallet = "isBraveWallet"),
    (e.Rabby = "isRabby"),
    (e.MathWallet = "isMathWallet"),
    (e.Bitget = "isBitKeep"),
    (e.Sequence = "isSequence"),
    (e.Core = "isAvalanche"),
    (e.Opera = "isOpera"),
    (e.Bitski = "isBitski"),
    (e.Enkrypt = "isEnkrypt"),
    (e.Phantom = "isPhantom"),
    (e.OKXWallet = "isOkxWallet"),
    (e.Zeal = "isZeal"),
    (e.Zerion = "isZerion"),
    (e.Rainbow = "isRainbow"),
    (e.SafePal = "isSafePal"),
    (e.DeFiWallet = "isDeficonnectProvider"),
    (e.Safeheron = "isSafeheron"),
    (e.Talisman = "isTalisman"),
    (e.OneKey = "isOneKey"),
    (e.Fordefi = "isFordefi"),
    (e.Coin98Wallet = "isCoin98"),
    (e.SubWallet = "isSubWallet"),
    (e.Kayros = "isKayros"),
    (e.FoxWallet = "isFoxWallet"),
    (e.Lif3Wallet = "isLif3Wallet"),
    (e.ZodiacPilot = "isZodiacPilot"),
    (e.StableWallet = "isStableWallet"),
    (e.Echooo = "isEchooo");
})(s || (s = {}));
var j;
(function (e) {
  (e.Binance = "https://www.bnbchain.org/ru/blog/binance-extension-wallet/"),
    (e.Bitget = "https://web3.bitget.com/en/wallet-download"),
    (e.Coinbase = "https://www.coinbase.com/wallet/downloads"),
    (e.MetaMask = "https://metamask.io/download/"),
    (e.OKXWallet = "https://okx.com/download"),
    (e.Phantom = "https://phantom.app/ul/v1/connect"),
    (e.Talisman = "https://www.talisman.xyz/"),
    (e.Trust = "https://link.trustwallet.com"),
    (e.OneKey = "https://onekey.so/download/"),
    (e.RoninWallet = "https://wallet.skymavis.com/"),
    (e.Coin98Wallet = "https://coin98.com/wallet/"),
    (e.SubWallet = "https://www.subwallet.app/"),
    (e.Kayros = "https://www.kayros.games/wallet/"),
    (e.XDEFI = "https://xdefi.io/"),
    (e.FoxWallet = "https://foxwallet.com/download"),
    (e.Lif3Wallet = "https://lif3.com"),
    (e.Rabby = "https://rabby.io"),
    (e.ZodiacPilot = "https://pilot.gnosisguild.org/"),
    (e.Echooo = "https://www.echooo.xyz");
})(j || (j = {}));
var u;
(function (e) {
  (e.AlphaWallet = "AlphaWallet"),
    (e.ApexWallet = "Apex Wallet"),
    (e.AToken = "AToken"),
    (e.BifrostWallet = "Bifrost Wallet"),
    (e.Binance = "Binance Smart Wallet"),
    (e.Bitpie = "Bitpie"),
    (e.Bitski = "Bitski"),
    (e.BlockWallet = "BlockWallet"),
    (e.Brave = "Brave Wallet"),
    (e.Coinbase = "Coinbase Wallet"),
    (e.Dcent = "D'CENT"),
    (e.Detected = "Detected Wallet"),
    (e.Exodus = "Exodus"),
    (e.Frame = "Frame"),
    (e.Frontier = "Frontier"),
    (e.HuobiWallet = "Huobi Wallet"),
    (e.HyperPay = "HyperPay"),
    (e.ImToken = "imToken"),
    (e.InfinityWallet = "Infinity Wallet"),
    (e.Liquality = "Liquality"),
    (e.MeetOne = "MeetOne"),
    (e.MetaMask = "MetaMask"),
    (e.MyKey = "MyKey"),
    (e.Opera = "Opera Wallet"),
    (e.OwnBit = "OwnBit"),
    (e.Status = "Status Wallet"),
    (e.Trust = "Trust Wallet"),
    (e.TokenPocket = "TokenPocket"),
    (e.TP = "TP Wallet"),
    (e.WalletIo = "Wallet.io"),
    (e.XDEFI = "XDEFI Wallet"),
    (e.OneInch = "1inch Wallet"),
    (e.Tokenary = "Tokenary Wallet"),
    (e.Tally = "Taho"),
    (e.Rabby = "Rabby Wallet"),
    (e.MathWallet = "MathWallet"),
    (e.Bitget = "Bitget Wallet"),
    (e.Sequence = "Sequence"),
    (e.Core = "Core"),
    (e.Enkrypt = "Enkrypt"),
    (e.Zeal = "Zeal"),
    (e.Phantom = "Phantom"),
    (e.OKXWallet = "OKX Wallet"),
    (e.Zerion = "Zerion"),
    (e.Rainbow = "Rainbow"),
    (e.SafePal = "SafePal"),
    (e.DeFiWallet = "DeFi Wallet"),
    (e.Safeheron = "Safeheron"),
    (e.Talisman = "Talisman"),
    (e.OneKey = "OneKey"),
    (e.Fordefi = "Fordefi"),
    (e.RoninWallet = "Ronin Wallet"),
    (e.Coin98Wallet = "Coin98 Wallet"),
    (e.SubWallet = "SubWallet"),
    (e.Kayros = "Kayros"),
    (e.FoxWallet = "FoxWallet"),
    (e.Lif3Wallet = "Lif3 Wallet"),
    (e.ZodiacPilot = "Zodiac Pilot"),
    (e.StableWallet = "StableWallet"),
    (e.Echooo = "Echooo");
})(u || (u = {}));
var o;
(function (e) {
  (e.Ethereum = "ethereum"),
    (e.Binance = "BinanceChain"),
    (e.Tally = "tally"),
    (e.Web3 = "web3"),
    (e.Arbitrum = "arbitrum"),
    (e.XFI = "xfi"),
    (e.Bitget = "bitkeep"),
    (e.Avalanche = "avalanche"),
    (e.Bitski = "Bitski"),
    (e.Enkrypt = "enkrypt"),
    (e.Zeal = "zeal"),
    (e.Phantom = "phantom"),
    (e.OKXWallet = "okxwallet"),
    (e.Trust = "trustwallet"),
    (e.Frontier = "frontier"),
    (e.DeFiConnectProvider = "deficonnectProvider"),
    (e.Safeheron = "safeheron"),
    (e.Talisman = "talismanEth"),
    (e.OneKey = "$onekey"),
    (e.RoninWallet = "ronin"),
    (e.Coin98Wallet = "coin98"),
    (e.SubWallet = "SubWallet"),
    (e.Kayros = "kayros"),
    (e.FoxWallet = "foxwallet"),
    (e.Echooo = "echooo");
})(o || (o = {}));
const S = null;
function K(e, t) {
  return async () => ({
    provider:
      window.ethereum.providers && Array.isArray(window.ethereum.providers)
        ? et(e, t)
        : window.ethereum,
  });
}
function et(e, t) {
  return window.ethereum.providers.find((a) =>
    t ? !!a[e] && !Te(e, a) : !!a[e]
  );
}
function Te(e, t) {
  return Object.values(s)
    .filter((n) => n !== e && n !== s.Detected)
    .some((n) => !!t[n]);
}
const tt = {
    label: u.MetaMask,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) =>
      !!e && !!e[s.MetaMask] && !Te(s.MetaMask, e),
    getIcon: async () =>
      (await c(() => import("./metamask-1c685b94.js"), [])).default,
    getInterface: K(s.MetaMask, !0),
    platforms: ["all"],
    externalUrl: j.MetaMask,
  },
  at = {
    label: u.InfinityWallet,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.InfinityWallet],
    getIcon: async () =>
      (await c(() => import("./infinitywallet-c00488d1.js"), [])).default,
    getInterface: K(s.InfinityWallet),
    platforms: ["desktop"],
  },
  nt = {
    label: u.Exodus,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Exodus],
    getIcon: async () =>
      (await c(() => import("./exodus-358b5e9e.js"), [])).default,
    getInterface: K(s.Exodus),
    platforms: ["all"],
  },
  st = {
    label: u.Frontier,
    injectedNamespace: o.Frontier,
    checkProviderIdentity: ({ provider: e }) =>
      !!e && !!e.ethereum && !!e.ethereum[s.Frontier],
    getIcon: async () =>
      (await c(() => import("./frontier-035eb74c.js"), [])).default,
    getInterface: async () => ({ provider: k(window.frontier.ethereum) }),
    platforms: ["all"],
  },
  ot = {
    label: u.Brave,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.BraveWallet],
    getIcon: async () =>
      (await c(() => import("./brave-889178d1.js"), [])).default,
    getInterface: K(s.BraveWallet),
    platforms: ["all"],
  },
  ct = {
    label: u.Binance,
    injectedNamespace: o.Binance,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Binance],
    getIcon: async () =>
      (await c(() => import("./binance-aad6707a.js"), [])).default,
    getInterface: async () => {
      let e = { ...window.BinanceChain };
      window.BinanceChain = e;
      const t = window.BinanceChain.on.bind(window.BinanceChain);
      window.BinanceChain.on = (n, l) => {
        n === "chainChanged"
          ? t(n, (f) => {
              l(`0x${parseInt(f).toString(16)}`);
            })
          : t(n, l);
      };
      const a = k(window.BinanceChain, {
        eth_chainId: ({ baseRequest: n }) =>
          n({ method: "eth_chainId" }).then(
            (l) => `0x${parseInt(l).toString(16)}`
          ),
        eth_selectAccounts: S,
        wallet_switchEthereumChain: S,
      });
      return (a.removeListener = (n, l) => {}), { provider: a };
    },
    platforms: ["desktop"],
    externalUrl: j.Binance,
  },
  lt = {
    label: u.Coinbase,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) =>
      (!!e && !!e[s.Coinbase]) || (!!e && !!e[s.CoinbaseExtension]),
    getIcon: async () =>
      (await c(() => import("./coinbase-8194cd0a.js"), [])).default,
    getInterface: async () => {
      const { provider: e } = await K(s.CoinbaseExtension)(),
        t = e.on.bind(e);
      return (
        (e.on = (a, n) => {
          a === "chainChanged"
            ? t(a, (l) => {
                n(`0x${parseInt(l).toString(16)}`);
              })
            : t(a, n);
        }),
        { provider: e }
      );
    },
    platforms: ["all"],
    externalUrl: j.Coinbase,
  },
  rt = {
    label: u.Detected,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Detected],
    getIcon: async () =>
      (await c(() => import("./detected-641a4aef.js"), [])).default,
    getInterface: async () => ({ provider: window.ethereum }),
    platforms: ["all"],
  },
  it = {
    label: u.Trust,
    injectedNamespace: o.Trust,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Trust],
    getIcon: async () =>
      (await c(() => import("./trust-59d19f99.js"), [])).default,
    getInterface: async () => {
      const e = window.hasOwnProperty(o.Ethereum);
      let t;
      return (
        e && window[o.Ethereum].isTrust
          ? (t = window[o.Ethereum])
          : (t = window[o.Trust]),
        { provider: t }
      );
    },
    platforms: ["all"],
    externalUrl: j.Trust,
  },
  ut = {
    label: u.Opera,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Opera],
    getIcon: async () =>
      (await c(() => import("./opera-02e3a0e8.js"), [])).default,
    getInterface: async () => ({
      provider: k(window.ethereum, {
        eth_requestAccounts: async ({ baseRequest: e }) =>
          e({ method: "eth_accounts" }),
        eth_selectAccounts: S,
      }),
    }),
    platforms: ["all"],
  },
  dt = {
    label: u.Status,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Status],
    getIcon: async () =>
      (await c(() => import("./status-049055fb.js"), [])).default,
    getInterface: async () => ({ provider: window.ethereum }),
    platforms: ["mobile"],
  },
  ht = {
    label: u.AlphaWallet,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.AlphaWallet],
    getIcon: async () =>
      (await c(() => import("./alphawallet-eb2bedab.js"), [])).default,
    getInterface: async () => ({
      provider: k(window.ethereum, {
        wallet_switchEthereumChain: S,
        eth_selectAccounts: S,
      }),
    }),
    platforms: ["mobile"],
  },
  ft = {
    label: u.ApexWallet,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.ApexWallet],
    getIcon: async () =>
      (await c(() => import("./apexwallet-ea5f0b2c.js"), [])).default,
    getInterface: async () => ({ provider: window.ethereum }),
    platforms: ["desktop", "Chrome", "Chromium", "Microsoft Edge"],
  },
  mt = {
    label: u.AToken,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.AToken],
    getIcon: async () =>
      (await c(() => import("./atoken-f422e6b4.js"), [])).default,
    getInterface: async () => ({ provider: window.ethereum }),
    platforms: ["mobile"],
  },
  pt = {
    label: u.BifrostWallet,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.BifrostWallet],
    getIcon: async () =>
      (await c(() => import("./bifrostwallet-b2843d3a.js"), [])).default,
    getInterface: K(s.BifrostWallet),
    platforms: ["all"],
  },
  wt = {
    label: u.Bitpie,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: () => !!window.Bitpie,
    getIcon: async () =>
      (await c(() => import("./bitpie-8ea44eae.js"), [])).default,
    getInterface: async () => ({
      provider: k(window.ethereum, {
        wallet_switchEthereumChain: S,
        eth_selectAccounts: S,
      }),
    }),
    platforms: ["mobile"],
  },
  _t = {
    label: u.BlockWallet,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.BlockWallet],
    getIcon: async () =>
      (await c(() => import("./blockwallet-1235c6b8.js"), [])).default,
    getInterface: K(s.BlockWallet),
    platforms: ["desktop"],
  },
  yt = {
    label: u.Frame,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Frame],
    getIcon: async () =>
      (await c(() => import("./frame-594ec465.js"), [])).default,
    getInterface: async () => {
      const e = window.ethereum;
      if (!e || !e.connected)
        throw new Error(
          "Frame App must be open with a hot wallet connected. If not installed first download the Frame App."
        );
      return { provider: e };
    },
    platforms: ["desktop"],
  },
  bt = {
    label: u.HuobiWallet,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.HuobiWallet],
    getIcon: async () =>
      (await c(() => import("./huobiwallet-c6da4601.js"), [])).default,
    getInterface: async () => ({
      provider: k(window.ethereum, {
        wallet_switchEthereumChain: S,
        eth_selectAccounts: S,
      }),
    }),
    platforms: ["mobile"],
  },
  gt = {
    label: u.HyperPay,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: () => !!window.hiWallet,
    getIcon: async () =>
      (await c(() => import("./hyperpay-75c22b59.js"), [])).default,
    getInterface: async () => ({
      provider: k(window.ethereum, {
        wallet_switchEthereumChain: S,
        eth_selectAccounts: S,
      }),
    }),
    platforms: ["mobile"],
  },
  kt = {
    label: u.ImToken,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.ImToken],
    getIcon: async () =>
      (await c(() => import("./imtoken-4be0a845.js"), [])).default,
    getInterface: async () => ({
      provider: k(window.ethereum, { eth_selectAccounts: S }),
    }),
    platforms: ["mobile"],
  },
  Et = {
    label: u.Liquality,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Liquality],
    getIcon: async () =>
      (await c(() => import("./liquality-0e245cbb.js"), [])).default,
    getInterface: async () => {
      const e = k(window.ethereum, {
        wallet_switchEthereumChain: S,
        eth_selectAccounts: S,
      });
      return (e.removeListener = (t, a) => {}), { provider: e };
    },
    platforms: ["desktop"],
  },
  It = {
    label: u.MeetOne,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) =>
      !!e && e[s.MeetOne] === "MEETONE",
    getIcon: async () =>
      (await c(() => import("./meetone-d2b0ac23.js"), [])).default,
    getInterface: async () => ({ provider: window.ethereum }),
    platforms: ["mobile"],
  },
  Dt = {
    label: u.MyKey,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.MyKey],
    getIcon: async () =>
      (await c(() => import("./mykey-4e0c6565.js"), [])).default,
    getInterface: async () => ({ provider: window.ethereum }),
    platforms: ["mobile"],
  },
  At = {
    label: u.OwnBit,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.OwnBit],
    getIcon: async () =>
      (await c(() => import("./ownbit-fa6734bd.js"), [])).default,
    getInterface: async () => {
      const e = k(window.ethereum, {
        eth_chainId: ({ baseRequest: t }) =>
          t({ method: "eth_chainId" }).then(
            (a) => `0x${parseInt(a).toString(16)}`
          ),
        wallet_switchEthereumChain: S,
        eth_selectAccounts: S,
      });
      return (
        (e.removeListener = (t, a) => {}),
        (e.on = (t, a) => {}),
        { provider: e }
      );
    },
    platforms: ["mobile"],
  },
  Tt = {
    label: u.TokenPocket,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) =>
      !!e && !!e[s.TokenPocket] && !e[s.TP],
    getIcon: async () =>
      (await c(() => import("./tokenpocket-a7e81129.js"), [])).default,
    getInterface: K(s.TokenPocket),
    platforms: ["all"],
  },
  Ot = {
    label: u.TP,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.TP],
    getIcon: async () =>
      (await c(() => import("./tp-4b793710.js"), [])).default,
    getInterface: async () => ({
      provider: k(window.ethereum, {
        wallet_switchEthereumChain: S,
        eth_selectAccounts: S,
      }),
    }),
    platforms: ["mobile"],
  },
  vt = {
    label: u.XDEFI,
    injectedNamespace: o.XFI,
    checkProviderIdentity: ({ provider: e }) =>
      e && e.ethereum && e.ethereum[s.XDEFI],
    getIcon: async () =>
      (await c(() => import("./xdefi-49d53216.js"), [])).default,
    getInterface: async () => ({ provider: window.xfi && window.xfi.ethereum }),
    platforms: ["all"],
    externalUrl: j.XDEFI,
  },
  Wt = {
    label: u.OneInch,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.OneInch],
    getIcon: async () =>
      (await c(() => import("./oneInch-104b3cc4.js"), [])).default,
    getInterface: async () => ({ provider: k(window.ethereum) }),
    platforms: ["mobile"],
  },
  xt = {
    label: u.Tokenary,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Tokenary],
    getIcon: async () =>
      (await c(() => import("./tokenary-f771c254.js"), [])).default,
    getInterface: async () => ({ provider: k(window.ethereum) }),
    platforms: ["all"],
  },
  Ct = {
    label: u.Tally,
    injectedNamespace: o.Tally,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Tally],
    getIcon: async () =>
      (await c(() => import("./tallywallet-a671320d.js"), [])).default,
    getInterface: async () => ({ provider: k(window.tally) }),
    platforms: ["desktop"],
  },
  St = {
    label: u.Zeal,
    injectedNamespace: o.Zeal,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Zeal],
    getIcon: async () =>
      (await c(() => import("./zeal-8b158173.js"), [])).default,
    getInterface: async () => ({ provider: k(window.zeal) }),
    platforms: ["desktop"],
  },
  Rt = {
    label: u.Rabby,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Rabby],
    getIcon: async () =>
      (await c(() => import("./rabby-fc161279.js"), [])).default,
    getInterface: async () => ({ provider: k(window.ethereum) }),
    platforms: ["desktop", "mobile"],
  },
  Pt = {
    label: u.MathWallet,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.MathWallet],
    getIcon: async () =>
      (await c(() => import("./mathwallet-ff05f48e.js"), [])).default,
    getInterface: K(s.MathWallet),
    platforms: ["all"],
  },
  jt = {
    label: u.Bitget,
    injectedNamespace: o.Bitget,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e.ethereum[s.Bitget],
    getIcon: async () =>
      (await c(() => import("./bitget-85ee4ac2.js"), [])).default,
    getInterface: async () => ({
      provider: window.bitkeep && window.bitkeep.ethereum,
    }),
    platforms: ["all"],
    externalUrl: j.Bitget,
  },
  Mt = {
    label: u.Sequence,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Sequence],
    getIcon: async () =>
      (await c(() => import("./sequence-c07eb3ae.js"), [])).default,
    getInterface: async () => ({ provider: window.ethereum }),
    platforms: ["all"],
  },
  Bt = {
    label: u.Core,
    injectedNamespace: o.Avalanche,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Core],
    getIcon: async () =>
      (await c(() => import("./core-1c42229d.js"), [])).default,
    getInterface: K(s.Core),
    platforms: ["desktop", "Chrome", "Chromium", "Microsoft Edge"],
  },
  Lt = {
    label: u.Bitski,
    injectedNamespace: o.Bitski,
    checkProviderIdentity: ({ provider: e }) =>
      !!e && !!e.getProvider && !!e.getProvider().isBitski,
    getIcon: async () =>
      (await c(() => import("./bitski-220980c2.js"), [])).default,
    getInterface: async () => ({
      provider:
        window.Bitski &&
        window.Bitski.getProvider &&
        window.Bitski.getProvider(),
    }),
    platforms: ["all"],
  },
  Nt = {
    label: u.Zerion,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Zerion],
    getIcon: async () =>
      (await c(() => import("./zerion-d2dfe88d.js"), [])).default,
    getInterface: async () => ({ provider: k(window.ethereum) }),
    platforms: ["all"],
  },
  Ut = {
    label: u.Enkrypt,
    injectedNamespace: o.Enkrypt,
    checkProviderIdentity: ({ provider: e }) =>
      !!e && !!e.providers && !!e.providers.ethereum,
    getIcon: async () =>
      (await c(() => import("./enkrypt-b1f25ae2.js"), [])).default,
    getInterface: async () => {
      const e = window.enkrypt.providers.ethereum.on.bind(
        window.enkrypt.providers.ethereum
      );
      window.enkrypt.providers.ethereum.on = (a, n) => {
        a === "chainChanged"
          ? e(a, (l) => {
              n(`0x${parseInt(l).toString(16)}`);
            })
          : e(a, n);
      };
      const t = k(window.enkrypt.providers.ethereum, {
        eth_chainId: ({ baseRequest: a }) =>
          a({ method: "eth_chainId" }).then(
            (n) => `0x${parseInt(n).toString(16)}`
          ),
      });
      return (t.removeListener = (a, n) => {}), { provider: t };
    },
    platforms: ["all"],
  },
  Vt = {
    label: u.Phantom,
    injectedNamespace: o.Phantom,
    checkProviderIdentity: ({ provider: e }) =>
      !!e && !!e.ethereum && !!e.ethereum[s.Phantom],
    getIcon: async () =>
      (await c(() => import("./phantom-9b3bd709.js"), [])).default,
    getInterface: async () => ({ provider: k(window.phantom.ethereum) }),
    platforms: ["all"],
    externalUrl: j.Phantom,
  },
  $t = {
    label: u.SafePal,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.SafePal],
    getIcon: async () =>
      (await c(() => import("./safepal-7fa6b910.js"), [])).default,
    getInterface: async () => ({ provider: k(window.ethereum) }),
    platforms: ["all"],
  },
  qt = {
    label: u.Rainbow,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Rainbow],
    getIcon: async () =>
      (await c(() => import("./rainbow-1fe0d81a.js"), [])).default,
    getInterface: K(s.Rainbow),
    platforms: ["all"],
  },
  Kt = {
    label: u.OKXWallet,
    injectedNamespace: o.OKXWallet,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.OKXWallet],
    getIcon: async () =>
      (await c(() => import("./okxwallet-1c6a2600.js"), [])).default,
    getInterface: async () => ({ provider: k(window.okxwallet) }),
    platforms: ["all"],
    externalUrl: j.OKXWallet,
  },
  Ht = {
    label: u.DeFiWallet,
    injectedNamespace: o.DeFiConnectProvider,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.DeFiWallet],
    getIcon: async () =>
      (await c(() => import("./defiwallet-99978b81.js"), [])).default,
    getInterface: async () => ({ provider: k(window.deficonnectProvider) }),
    platforms: ["all"],
  },
  Ft = {
    label: u.Safeheron,
    injectedNamespace: o.Safeheron,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Safeheron],
    getIcon: async () =>
      (await c(() => import("./safeheron-de7caf3b.js"), [])).default,
    getInterface: async () => ({ provider: k(window.safeheron) }),
    platforms: ["desktop", "Chrome", "Chromium", "Microsoft Edge"],
  },
  Zt = {
    label: u.Talisman,
    injectedNamespace: o.Talisman,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Talisman],
    getIcon: async () =>
      (await c(() => import("./talisman-0ce2f18e.js"), [])).default,
    getInterface: async () => ({ provider: k(window.talismanEth) }),
    platforms: ["desktop"],
    externalUrl: j.Talisman,
  },
  Xt = {
    label: u.RoninWallet,
    injectedNamespace: o.RoninWallet,
    checkProviderIdentity: ({ provider: e }) => !!e,
    getIcon: async () =>
      (await c(() => import("./roninwallet-b1ea937e.js"), [])).default,
    getInterface: async () => ({ provider: k(window.ronin.provider) }),
    platforms: ["all"],
    externalUrl: j.RoninWallet,
  },
  zt = {
    label: u.OneKey,
    injectedNamespace: o.OneKey,
    checkProviderIdentity: ({ provider: e }) =>
      !!e && !!e.ethereum && !!e.ethereum[s.OneKey],
    getIcon: async () =>
      (await c(() => import("./onekey-102b2f4e.js"), [])).default,
    getInterface: async () => ({ provider: k(window.$onekey.ethereum) }),
    platforms: ["all"],
    externalUrl: j.OneKey,
  },
  Gt = {
    label: u.Fordefi,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Fordefi],
    getIcon: async () =>
      (await c(() => import("./fordefi-9b741b3f.js"), [])).default,
    getInterface: K(s.Fordefi, !0),
    platforms: ["desktop"],
  },
  Jt = {
    label: u.Coin98Wallet,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Coin98Wallet],
    getIcon: async () =>
      (await c(() => import("./coin98wallet-3c8352d2.js"), [])).default,
    getInterface: async () => {
      const e = window.hasOwnProperty(o.Ethereum);
      let t;
      return (
        e && window[o.Ethereum].isCoin98
          ? (t = window[o.Ethereum])
          : (t = window[o.Coin98Wallet].provider),
        { provider: t }
      );
    },
    platforms: ["all"],
    externalUrl: j.Coin98Wallet,
  },
  Yt = {
    label: u.SubWallet,
    injectedNamespace: o.SubWallet,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.SubWallet],
    getIcon: async () =>
      (await c(() => import("./subwallet-eb6bfc96.js"), [])).default,
    getInterface: async () => ({ provider: k(window.SubWallet) }),
    platforms: ["all"],
    externalUrl: j.SubWallet,
  },
  Qt = {
    label: u.Kayros,
    injectedNamespace: o.Kayros,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Kayros],
    getIcon: async () =>
      (await c(() => import("./kayros-362d5de7.js"), [])).default,
    getInterface: async () => ({ provider: k(window.kayros) }),
    platforms: ["desktop"],
  },
  ea = {
    label: u.FoxWallet,
    injectedNamespace: o.FoxWallet,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.FoxWallet],
    getIcon: async () =>
      (await c(() => import("./foxwallet-bc08f648.js"), [])).default,
    getInterface: async () => ({ provider: k(window.foxwallet) }),
    platforms: ["mobile"],
  },
  ta = {
    label: u.Lif3Wallet,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Lif3Wallet],
    getIcon: async () =>
      (await c(() => import("./lif3wallet-c8762466.js"), [])).default,
    getInterface: async () => ({
      provider: k(window.ethereum, {
        wallet_switchEthereumChain: S,
        eth_selectAccounts: S,
      }),
    }),
    platforms: ["mobile"],
  },
  aa = {
    label: u.ZodiacPilot,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.ZodiacPilot],
    getIcon: async () =>
      (await c(() => import("./zodiacpilot-faaac71d.js"), [])).default,
    getInterface: async () => ({ provider: k(window.ethereum) }),
    platforms: ["desktop"],
    externalUrl: j.ZodiacPilot,
  },
  na = {
    label: u.StableWallet,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.StableWallet],
    getIcon: async () =>
      (await c(() => import("./stablewallet-e1dad3ee.js"), [])).default,
    getInterface: K(s.StableWallet),
    platforms: ["mobile"],
  },
  sa = {
    label: u.Echooo,
    injectedNamespace: o.Ethereum,
    checkProviderIdentity: ({ provider: e }) => !!e && !!e[s.Echooo],
    getIcon: async () =>
      (await c(() => import("./echooo-b8d84dd4.js"), [])).default,
    getInterface: K(s.Echooo),
    platforms: ["all"],
    externalUrl: j.Echooo,
  },
  oa = [
    St,
    nt,
    st,
    tt,
    pt,
    ct,
    lt,
    rt,
    it,
    ut,
    dt,
    ht,
    ft,
    mt,
    jt,
    wt,
    _t,
    ot,
    yt,
    bt,
    gt,
    kt,
    Et,
    It,
    Dt,
    At,
    Tt,
    Ot,
    vt,
    Wt,
    xt,
    Ct,
    Rt,
    Pt,
    Mt,
    Bt,
    Lt,
    Ut,
    Vt,
    Kt,
    Nt,
    qt,
    $t,
    Ht,
    at,
    Ft,
    Zt,
    zt,
    Gt,
    Xt,
    Jt,
    Yt,
    Qt,
    ea,
    ta,
    aa,
    na,
    sa,
  ],
  ca = h.object({
    label: h.string().required(),
    getIcon: h.function().arity(0).required(),
    getInterface: h.function().maxArity(1).required(),
    injectedNamespace: h.string().required(),
    checkProviderIdentity: h.function().arity(1).required(),
    platforms: h.array().items(h.string()),
    externalUrl: h.string(),
  }),
  la = h.array().items(ca),
  ra = h
    .object()
    .pattern(/\w+/, h.any().allow(h.boolean(), h.array().items(h.string()))),
  ia = h.object({
    custom: la,
    filter: ra,
    displayUnavailable: [h.boolean(), h.array().items(h.string())],
    walletUnavailableMessage: h.function(),
    sort: h.function(),
    externalUrl: h.string(),
    disable6963Support: h.boolean(),
  }),
  ua = (e) => De(ia, e),
  da = h.object({
    uuid: h.string().required(),
    name: h.string().required(),
    icon: h.string().required(),
    rdns: h.string().required(),
  }),
  ha = h.object({ info: da.required(), provider: h.object().required() }),
  fa = (e) => De(ha, e),
  ma = ({ label: e, externalUrl: t }) =>
    t
      ? `Please <a href="${t}" target="_blank">install or switch to</a> ${e} to continue`
      : `Please install or enable ${e} to continue`,
  pa = (e, t, a) => {
    var n;
    return e
      ? t({ provider: e, device: a })
        ? !0
        : !!(
            (n = e.providers) != null &&
            n.some((l) => t({ provider: l, device: a }))
          )
      : !1;
  };
function wa(e) {
  if (!e) return !1;
  const t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    a = /\bon[a-z]+\s*=\s*["']?(?:javascript:)?/gi,
    n = /\b(href|xlink:href)\s*=\s*["']?javascript:/gi;
  return !!(t.test(e) || a.test(e) || n.test(e));
}
const Oe = [];
function _a() {
  window.addEventListener("eip6963:announceProvider", (e) => {
    const t = e,
      { detail: a } = t;
    if (!a) return;
    if (t) {
      const D = fa(a);
      if (D && D.error) throw D.error;
    }
    const { info: n, provider: l } = a,
      { name: f, icon: E } = n;
    if (wa(E)) {
      console.error(
        `The icon for injected wallet: ${f} contains executable JavaScript and has been blocked.`
      );
      return;
    }
    Oe.push({
      label: f,
      getIcon: async () => E,
      getInterface: async () => ({ provider: l }),
      platforms: ["all"],
      eip6963Provider: l,
      checkProviderIdentity: ({ provider: D }) => !!D,
    });
  }),
    window.dispatchEvent(new CustomEvent("eip6963:requestProvider"));
}
function ve(e) {
  if (typeof window > "u") return () => null;
  if (e) {
    const t = ua(e);
    if (t && t.error) throw t.error;
  }
  return (
    !(e != null && e.disable6963Support) && _a(),
    (t) => {
      const { device: a } = t,
        {
          custom: n = [],
          filter: l = {},
          displayUnavailable: f,
          sort: E,
          walletUnavailableMessage: D,
        } = e || {},
        I = ze([...n, ...Oe, ...oa], ({ label: A }) => A).reduce((A, O) => {
          const {
              label: p,
              platforms: T,
              injectedNamespace: M,
              checkProviderIdentity: X,
              eip6963Provider: H,
            } = O,
            w = l[p],
            B = w === !1,
            x = H || window[M],
            L = pa(x, X, a);
          let N = !1;
          Array.isArray(w) &&
            (w.includes(a.type) || (a.os && w.includes(a.os.name))) &&
            (N = !0),
            w === "unavailable" && !L && (N = !0);
          const F =
            !T.includes("all") &&
            a.type !== null &&
            !T.includes(a.type) &&
            !T.includes(a.os.name);
          return (
            !B &&
              !N &&
              !F &&
              (L ||
                f === !0 ||
                (Array.isArray(f) && f.length && f.includes(O.label))) &&
              A.push(
                (f === !0 ||
                  (Array.isArray(f) && f.length && f.includes(O.label))) &&
                  !L
                  ? {
                      ...O,
                      getInterface: async () => {
                        throw new Error(D ? D(O) : ma(O));
                      },
                    }
                  : O
              ),
            A
          );
        }, []);
      if (I.length) {
        const A = I.length > 1,
          O = I.filter((p) => {
            const { label: T } = p;
            return !(T === u.Detected && A);
          })
            .map(({ label: p, getIcon: T, getInterface: M }) => ({
              label: p,
              getIcon: T,
              getInterface: M,
            }))
            .sort((p, T) =>
              p.label < T.label ? -1 : p.label > T.label ? 1 : 0
            );
        return E ? E(O) : O;
      }
      return [];
    }
  );
}
const ya = h.object({
    handleUri: h.func().optional(),
    version: h
      .number()
      .optional()
      .custom((e, t) => {
        if (e === 1)
          console.warn(
            "Version 1 of WalletConnect has been fully deprecated. This version of @web3-onboard/walletconnect only supports version 2"
          );
        else if (e !== 2 && e !== void 0)
          return t.error("any.invalid", {
            message:
              "Invalid version number. This version of @web3-onboard/walletconnect only supports version 2",
          });
        return e;
      }, "Custom version validation"),
    projectId: h
      .string()
      .messages({
        "any.required":
          "WalletConnect version 2 requires a projectId. Please visit https://cloud.walletconnect.com to get one.",
      }),
    dappUrl: h
      .string()
      .optional()
      .custom(
        (e, t) =>
          e ||
          t.message({
            message:
              "It is strongly recommended to supply a dappUrl as it is required by some wallets (i.e. MetaMask) to allow connection.",
            type: "any.custom",
          }),
        "Custom dappUrl validation"
      ),
    requiredChains: h.array().items(h.number()).optional(),
    optionalChains: h.array().items(h.number()).optional(),
    qrModalOptions: h.object().optional(),
    additionalRequiredMethods: h.array().items(h.string()).optional(),
    additionalOptionalMethods: h.array().items(h.string()).optional(),
  }),
  ba = (e, t) => {
    const a = e.validate(t);
    return a.error ? a : null;
  },
  ga = (e) => ba(ya, e),
  ge = [
    "eth_sendTransaction",
    "eth_signTransaction",
    "personal_sign",
    "eth_sign",
    "eth_signTypedData",
    "eth_signTypedData_v4",
    "wallet_addEthereumChain",
    "wallet_switchEthereumChain",
  ];
function ka(e) {
  if (!e.projectId)
    throw new Error(
      "WalletConnect requires a projectId. Please visit https://cloud.walletconnect.com to get one."
    );
  e.dappUrl ||
    console.warn(
      "It is strongly recommended to supply a dappUrl to the WalletConnect init object as it is required by some wallets (i.e. MetaMask) to allow connection."
    );
  const {
    projectId: t,
    handleUri: a,
    requiredChains: n,
    optionalChains: l,
    qrModalOptions: f,
    additionalRequiredMethods: E,
    additionalOptionalMethods: D,
    dappUrl: y,
  } = e;
  let I;
  return () => ({
    label: "WalletConnect",
    getIcon: async () =>
      (await c(() => import("./icon-e08798cb.js"), [])).default,
    getInterface: async ({ chains: A, EventEmitter: O, appMetadata: p }) => {
      const { ProviderRpcError: T, ProviderRpcErrorCode: M } = await c(
          () => import("./react-fa804298.js").then((_) => _.cP),
          ["assets/react-fa804298.js", "assets/lodash-52c9deff.js"]
        ),
        { default: X, REQUIRED_METHODS: H } = await c(
          () => import("./index.es-558c972d.js"),
          [
            "assets/index.es-558c972d.js",
            "assets/react-fa804298.js",
            "assets/lodash-52c9deff.js",
            "assets/priceReference-c8273968.js",
            "assets/index-61771442.js",
            "assets/style-829a44f9.js",
            "assets/index-834edce6.js",
            "assets/index-69e2d747.css",
          ]
        ),
        { Subject: w, fromEvent: B } = await c(
          () => import("./index-590c7479.js"),
          [
            "assets/index-590c7479.js",
            "assets/zipWith-c126864b.js",
            "assets/react-fa804298.js",
            "assets/lodash-52c9deff.js",
          ]
        ),
        { takeUntil: x, take: L } = await c(
          () => import("./index-7e12fa5a.js"),
          [
            "assets/index-7e12fa5a.js",
            "assets/zipWith-c126864b.js",
            "assets/react-fa804298.js",
            "assets/lodash-52c9deff.js",
          ]
        ),
        N = () => {
          if (!p) return;
          const _ = y || p.explore || "";
          !_ &&
            !_.length &&
            console.warn(
              "It is strongly recommended to supply a dappUrl as it is required by some wallets (i.e. MetaMask) to allow connection."
            );
          const W = {
            name: p.name,
            description: p.description || "",
            url: _,
            icons: [],
          };
          return (
            p.icon !== void 0 && p.icon.length && (W.icons = [p.icon]),
            p.logo !== void 0 &&
              p.logo.length &&
              (W.icons = W.icons.length ? [...W.icons, p.logo] : [p.logo]),
            W
          );
        },
        F =
          Array.isArray(n) && n.length && n.every((_) => !isNaN(_))
            ? n.map((_) => parseInt(_))
            : [],
        P =
          Array.isArray(l) && l.length && l.every((_) => !isNaN(_))
            ? l.map((_) => parseInt(_))
            : A.map(({ id: _ }) => parseInt(_, 16)),
        J = new Set(E && Array.isArray(E) ? [...E, ...H] : H),
        U = Array.from(J),
        i = D && Array.isArray(D) ? [...D, ...ge] : ge,
        r = await X.init({
          projectId: t,
          chains: F,
          methods: U,
          optionalChains: P,
          optionalMethods: i,
          showQrModal: !0,
          rpcMap: A.map(({ id: _, rpcUrl: W }) => ({
            id: _,
            rpcUrl: W,
          })).reduce(
            (_, { id: W, rpcUrl: Q }) => ((_[parseInt(W, 16)] = Q || ""), _),
            {}
          ),
          metadata: N(),
          qrModalOptions: f,
        }),
        m = new O();
      class v {
        constructor({ connector: W, chains: Q }) {
          (this.emit = m.emit.bind(m)),
            (this.on = m.on.bind(m)),
            (this.removeListener = m.removeListener.bind(m)),
            (this.connector = W),
            (this.chains = Q),
            (this.disconnected$ = new w()),
            B(this.connector, "accountsChanged", (g) => g)
              .pipe(x(this.disconnected$))
              .subscribe({
                next: (g) => {
                  const Z = Array.isArray(g) ? g : [g];
                  this.emit("accountsChanged", Z);
                },
                error: console.warn,
              }),
            B(this.connector, "chainChanged", (g) => g)
              .pipe(x(this.disconnected$))
              .subscribe({
                next: (g) => {
                  const Z = re(g) ? g : `0x${g.toString(16)}`;
                  this.emit("chainChanged", Z);
                },
                error: console.warn,
              }),
            B(this.connector, "session_delete", (g) => g)
              .pipe(x(this.disconnected$))
              .subscribe({
                next: () => {
                  this.emit("accountsChanged", []),
                    this.disconnected$.next(!0),
                    typeof localStorage < "u" &&
                      localStorage.removeItem("walletconnect");
                },
                error: console.warn,
              }),
            (this.disconnect = () => {
              this.connector.session &&
                (this.connector.disconnect(), (I = null));
            }),
            e &&
              a &&
              B(this.connector, "display_uri", (g) => g)
                .pipe(x(this.disconnected$))
                .subscribe(async (g) => {
                  try {
                    a && (await a(g));
                  } catch (Z) {
                    throw `An error occurred when handling the URI. Error: ${Z}`;
                  }
                }),
            (() => {
              const g = this.connector.session;
              (I = g),
                g &&
                  (this.emit("accountsChanged", this.connector.accounts),
                  this.emit("chainChanged", this.connector.chainId));
            })(),
            (this.request = async ({ method: g, params: Z }) => {
              if (g === "eth_chainId")
                return re(this.connector.chainId)
                  ? this.connector.chainId
                  : `0x${this.connector.chainId.toString(16)}`;
              if (g === "eth_requestAccounts")
                return new Promise(async (b, V) => {
                  if (
                    (B(this.connector, "connect", (q) => q)
                      .pipe(L(1))
                      .subscribe({
                        next: ({ chainId: q }) => {
                          this.emit("accountsChanged", this.connector.accounts);
                          const R = re(q) ? q : `0x${q.toString(16)}`;
                          this.emit("chainChanged", R),
                            b(this.connector.accounts);
                        },
                        error: V,
                      }),
                    !this.connector.session)
                  )
                    await this.connector.connect().catch((q) => {
                      console.error("err creating new session: ", q),
                        V(
                          new T({
                            code: 4001,
                            message: "User rejected the request.",
                          })
                        );
                    });
                  else {
                    const q = this.connector.accounts,
                      R = this.connector.chainId;
                    I = this.connector.session;
                    const Ce = `0x${R.toString(16)}`;
                    return this.emit("chainChanged", Ce), b(q);
                  }
                });
              if (g === "eth_selectAccounts")
                throw new T({
                  code: M.UNSUPPORTED_METHOD,
                  message: `The Provider does not support the requested method: ${g}`,
                });
              if (g == "wallet_switchEthereumChain") {
                if (!Z)
                  throw new T({
                    code: M.INVALID_PARAMS,
                    message:
                      "The Provider requires a chainId to be passed in as an argument",
                  });
                const b = Z[0];
                if (!b.hasOwnProperty("chainId") || typeof b.chainId > "u")
                  throw new T({
                    code: M.INVALID_PARAMS,
                    message:
                      "The Provider requires a chainId to be passed in as an argument",
                  });
                return this.connector.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: b.chainId }],
                });
              }
              return this.connector.request({ method: g, params: Z });
            });
        }
      }
      return { provider: new v({ chains: A, connector: r }), instance: I };
    },
  });
}
const re = (e) => !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/));
function Ea(e) {
  if (!e)
    throw new Error(
      "WalletConnect requires an initialization object to be passed - see the official docs for an example: https://onboard.blocknative.com/docs/wallets/walletconnect"
    );
  if (e) {
    const t = ga(e);
    if (t) throw t;
  }
  return ka(e);
}
const ke = "/assets/logo_gradient-acf9c12b.svg";
var oe, Ie;
typeof window < "u" &&
  ((Ie =
    (oe = window == null ? void 0 : window.indexedDB) == null
      ? void 0
      : oe.deleteDatabase) == null ||
    Ie.call(oe, "WALLET_CONNECT_V2_INDEXED_DB"));
const Ia = !1,
  Da = [
    "MetaMask",
    "Rabby Wallet",
    "Trust Wallet",
    "Coinbase Wallet",
    "Exodus",
    "OKX Wallet",
    "Bitget Wallet",
    "Phantom",
    "XDEFI Wallet",
    "Frame",
    "BlockWallet",
    "SafePal",
  ].filter((e) => e),
  Aa = ve({
    displayUnavailable: !0,
    sort: (e) =>
      Da.map((t) => e.find(({ label: a }) => a === t)).filter((t) => t),
    walletUnavailableMessage: (e) => `${e.label} is unavailable!`,
  }),
  Ta = ve({
    displayUnavailable: !1,
    walletUnavailableMessage: (e) => `${e.label} is unavailable!`,
  }),
  Oa = Ea({
    projectId: "26c912aadd2132cd869a5edc00aeea0f",
    dappUrl: ce === "merkl" ? "https://merkl.xyz" : "https://angle.money",
  }),
  va = Qe(),
  Wa = Ia,
  xa = [Wa, Oa, Aa, Ta, va].filter((e) => e),
  Ca = [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl: "https://rpc.ankr.com/eth",
    },
    {
      id: "0xa",
      token: "ETH",
      label: "Optimism",
      rpcUrl: "https://rpc.ankr.com/optimism",
    },
    {
      id: "0x2105",
      token: "ETH",
      label: "Base",
      rpcUrl: "https://mainnet.base.org",
    },
    {
      id: "0xa4b1",
      token: "ETH",
      label: "Arbitrum One",
      rpcUrl: "https://arb1.arbitrum.io/rpc",
    },
    {
      id: "0xfa",
      token: "FTM",
      label: "Fantom",
      rpcUrl: "https://rpc.fantom.network",
    },
    {
      id: "0x38",
      token: "BNB",
      label: "Binance Smart Chain",
      rpcUrl: "https://bsc-dataseed.binance.org",
    },
    {
      id: "0x89",
      token: "MATIC",
      label: "Matic Mainnet",
      rpcUrl: "https://matic-mainnet.chainstacklabs.com",
    },
    {
      id: "0xa86a",
      token: "AVAX",
      label: "Avalanche Mainnet",
      rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
    },
    {
      id: "0xa4ec",
      token: "CELO",
      label: "Celo Mainnet",
      rpcUrl: "https://rpc.ankr.com/celo",
    },
    {
      id: "0x64",
      token: "XDAI",
      label: "Gnosis Chain",
      rpcUrl: "https://rpc.gnosischain.com/",
    },
    {
      id: "0x44d",
      token: "ETH",
      label: "Polygon zkEVM",
      rpcUrl: "https://zkevm-rpc.com",
    },
    {
      id: "0xe708",
      token: "ETH",
      label: "Linea",
      rpcUrl: "https://linea.drpc.org",
    },
    {
      id: "0x1388",
      token: "MNT",
      label: "Mantle",
      rpcUrl: "https://rpc.mantle.xyz",
    },
    {
      id: "0x343B",
      token: "IMX",
      label: "Immutable zkevm",
      rpcUrl: "https://immutable-zkevm.drpc.org",
    },
    {
      id: "0x6c",
      token: "TT",
      label: "ThunderCore",
      rpcUrl: "https://mainnet-rpc.thundercore.com",
    },
    {
      id: "0x45c",
      token: "CORE",
      label: "Core Blockchain",
      rpcUrl: "https://rpc.coredao.org/",
    },
    {
      id: "0x13e31",
      token: "ETH",
      label: "Blast",
      rpcUrl: "https://rpc.blast.io",
    },
    {
      id: "0xa9",
      token: "ETH",
      label: "Manta",
      rpcUrl: "https://1rpc.io/manta",
    },
    {
      id: "0x868b",
      token: "ETH",
      label: "Mode",
      rpcUrl: "https://mainnet.mode.network/",
    },
    {
      id: "0x82750",
      token: "ETH",
      label: "Scroll",
      rpcUrl: "https://rpc.scroll.io",
    },
    {
      id: "0x250",
      token: "ASTR",
      label: "Astar",
      rpcUrl: "https://astar-rpc.dwellir.com",
    },
    {
      id: "0xec0",
      token: "ETH",
      label: "Astar zkevm",
      rpcUrl: "https://rpc.startale.com/astar-zkevm",
    },
    {
      id: "0x144",
      token: "ETH",
      label: "ZKSync era",
      rpcUrl: "https://mainnet.era.zksync.io",
    },
    { id: "0x7A", token: "FUSE", label: "Fuse", rpcUrl: "https://rpc.fuse.io" },
    {
      id: "0xC4",
      token: "OKB",
      label: "X Layer",
      rpcUrl: "https://xlayerrpc.okx.com",
    },
    {
      id: "0x1e",
      token: "RBTC",
      label: "Rootstock",
      rpcUrl: "https://rpc.rootstock.io/",
    },
    {
      id: "0x28c58",
      token: "TAIKO",
      label: "Taiko",
      rpcUrl: "https://rpc.mainnet.taiko.xyz",
    },
    {
      id: "0x531",
      token: "SEI",
      label: "Sei",
      rpcUrl: "https://evm-rpc.sei-apis.com/",
    },
    {
      id: "0x504",
      token: "GLMR",
      label: "Moonbeam",
      rpcUrl: "https://moonbeam-rpc.publicnode.com",
    },
    {
      id: "0x79f99296",
      token: "sFUEL",
      label: "Skale",
      rpcUrl: "https://mainnet.skalenodes.com/v1/elated-tan-skat",
    },
    {
      id: "0xfc",
      token: "frxETH",
      label: "Fraxtal",
      rpcUrl: "https://rpc.frax.com",
    },
    {
      id: "0xed88",
      token: "ETH",
      label: "Bob",
      rpcUrl: "https://rpc.gobob.xyz",
    },
    {
      id: "0x1e0",
      token: "ETH",
      label: "World Chain",
      rpcUrl: "https://worldchain-mainnet.g.alchemy.com/public",
    },
    {
      id: "0xa729",
      token: "XTZ",
      label: "Etherlink",
      rpcUrl: "https://node.mainnet.etherlink.com",
    },
    {
      id: "0x46f",
      token: "ETH",
      label: "Lisk",
      rpcUrl: "https://rpc.api.lisk.com",
    },
  ],
  Sa = {
    wallets: xa,
    chains: Ca,
    accountCenter: { desktop: { enabled: !1 }, mobile: { enabled: !1 } },
    appMetadata: {
      name: "Angle Dapp",
      icon: ce === "merkl" ? pe : ke,
      logo: ce === "merkl" ? pe : ke,
      description: "Angle Protocol Dapp",
      explore: "https://angle.money",
      recommendedInjectedWallets: [
        { name: "MetaMask", url: "https://metamask.io" },
      ],
    },
    connect: { showSidebar: !1 },
    theme: "dark",
  },
  Ra = (e, t) => {
    var a, n, l, f, E, D, y, I, A, O, p, T, M, X, H, w, B, x, L, N, F, P, J, U;
    switch (t.type) {
      case "allowances": {
        const i =
          e != null && e.allowances
            ? { ...(e == null ? void 0 : e.allowances) }
            : {};
        if (t.callData)
          for (const r of Object.keys(t.callData)) {
            const m = {},
              v = (a = t.callData[r]) == null ? void 0 : a.decimals;
            for (const _ of Object.keys(t.callData[r])) {
              const W = t.callData[r][_];
              _ !== "decimals" &&
                (m[_] = {
                  ...W,
                  allowance: C.from(W == null ? void 0 : W.allowance, v),
                }),
                (i[r] = m);
            }
          }
        return { ...e, allowances: i };
      }
      case "balances": {
        const i =
          e != null && e.balances
            ? { ...(e == null ? void 0 : e.balances) }
            : {};
        if (t.callData)
          for (const r of Object.keys(t.callData)) {
            const m = t.callData[r];
            i[r] = {
              ...m,
              symbol: m.symbol,
              balance: C.from(m.balance, m.decimals),
            };
          }
        return { ...e, balances: i };
      }
      case "dao": {
        const i =
          (n = e == null ? void 0 : e.gauges) != null && n.list
            ? {
                ...e,
                ANGLE: t.callData.ANGLE,
                veANGLE: t.callData.veANGLE,
                rewardsData: t.callData.rewardsData,
                gauges: { ...t.callData.gauges, list: e.gauges.list },
              }
            : {
                ...e,
                ANGLE: t.callData.ANGLE,
                veANGLE: t.callData.veANGLE,
                rewardsData: t.callData.rewardsData,
                gauges: { ...t.callData.gauges, list: {} },
              };
        if (
          (f = (l = t.callData) == null ? void 0 : l.gauges) != null &&
          f.list
        )
          for (const r of Object.keys(t.callData.gauges.list))
            i.gauges.list[r] = {
              ...i.gauges.list[r],
              ...t.callData.gauges.list[r],
            };
        return i;
      }
      case "incentives": {
        const i =
          e != null && e.incentives ? { ...e } : { ...e, incentives: {} };
        if (t.callData)
          for (const r of Object.keys(t.callData)) {
            const m =
              (D = (E = t.callData[r]) == null ? void 0 : E.underlyingToken) ==
              null
                ? void 0
                : D.base;
            i.incentives[r] = {
              ...i.incentives[r],
              ...t.callData[r],
              underlyingToken: {
                ...((y = t.callData[r]) == null ? void 0 : y.underlyingToken),
                balance: C.from(
                  (A =
                    (I = t.callData[r]) == null ? void 0 : I.underlyingToken) ==
                    null
                    ? void 0
                    : A.balance,
                  m
                ),
                allowance: C.from(
                  (p =
                    (O = t.callData[r]) == null ? void 0 : O.underlyingToken) ==
                    null
                    ? void 0
                    : p.allowance,
                  m
                ),
              },
              deposit: {
                ...((T = t.callData[r]) == null ? void 0 : T.deposit),
                amount: C.from(
                  (X = (M = t.callData[r]) == null ? void 0 : M.deposit) == null
                    ? void 0
                    : X.amount,
                  m
                ),
              },
            };
          }
        return i;
      }
      case "merkl": {
        const i = t.callData,
          r = e.merkl;
        if (r)
          if (i) {
            if (Object.keys(i).length > 1) le(r, i);
            else for (const m of Object.keys(i)) i[m] && (r[m] = i[m]);
            return { ...e, merkl: r };
          } else return e;
        else return { ...e, merkl: t.callData };
      }
      case "campaigns": {
        const i = t.callData,
          r = e.campaigns;
        if (r)
          if (i) {
            if (Object.keys(i).length > 1) le(r, i);
            else for (const m of Object.keys(i)) i[m] && (r[m] = i[m]);
            return { ...e, campaigns: r };
          } else return e;
        else return { ...e, campaigns: t.callData };
      }
      case "rewards":
        return t.callData ? { ...e, rewards: t.callData } : e;
      case "updates":
        return t.callData ? { ...e, updates: t.callData } : e;
      case "overview":
        return t.callData ? { ...e, overview: t.callData } : e;
      case "merkl-bg": {
        const i = t.callData,
          r = e.merkl;
        if (r)
          if (i) {
            if (Object.keys(i).length > 1) le(r, i);
            else for (const m of Object.keys(i)) i[m] && (r[m] = i[m]);
            return { ...e, merkl: r };
          } else return e;
        else return { ...e, merkl: t.callData };
      }
      case "vaultManagers": {
        const i =
          e != null && e.vaultManagers ? { ...e } : { ...e, vaultManagers: {} };
        if (t.callData)
          for (const r of Object.keys(t.callData))
            i.vaultManagers[r] = {
              ...i.vaultManagers[r],
              ...t.callData[r],
              collateralAllowance: C.from(
                (H = t.callData[r]) == null ? void 0 : H.collateralAllowance,
                (w = t.callData[r]) == null ? void 0 : w.decimals
              ),
              debtCeiling: C.from(
                (B = t.callData[r]) == null ? void 0 : B.debtCeiling
              ),
            };
        return i;
      }
      case "vaults": {
        const i = e != null && e.vaults ? { ...e } : { ...e, vaults: {} };
        if (t.callData) {
          for (const r of Object.keys(i.vaults))
            ((x = Object.keys(t.callData)) != null && x.includes(r)) ||
              delete i.vaults[r];
          for (const r of Object.keys(t.callData))
            i.vaults[r] = {
              ...i.vaults[r],
              ...t.callData[r],
              collateralAmount: C.from(
                (L = t.callData[r]) == null ? void 0 : L.collateralAmount,
                (N = t.callData[r]) == null ? void 0 : N.collatBase
              ),
            };
        }
        return i;
      }
      case "layerZero": {
        const i =
          e != null && e.bridges
            ? e == null
              ? void 0
              : e.bridges
            : { layerZero: {} };
        if (t.callData)
          for (const r of Object.keys(t.callData))
            for (const m of Object.keys(t.callData[r])) {
              const v = (F = t.callData[r]) == null ? void 0 : F[m];
              i.layerZero[Number.parseInt(r)] ||
                (i.layerZero[Number.parseInt(r)] = {}),
                (i.layerZero[Number.parseInt(r)][m] = {
                  ...v,
                  limit: C.from(v.limit),
                  hourlyLimit: C.from(v.hourlyLimit),
                  usage: C.from(v.usage),
                  totalHourlyLimit: C.from(v.totalHourlyLimit),
                  totalUsage: C.from(v.totalUsage),
                  fromLimit: C.from(v.fromLimit),
                  toLimit: C.from(v.toLimit),
                  credit: C.from(v.credit),
                  balance: C.from(v.balance),
                  allowance: C.from(v.allowance),
                });
            }
        return { ...e, bridges: i };
      }
      case "savings": {
        if ((e.savings || (e.savings = {}), t.callData)) {
          const i = t.callData,
            r = Object.keys(i),
            m = Object.assign({}, e.savings);
          r.forEach((v) => {
            const _ = i[v];
            m[_.chainId] || (m[_.chainId] = {}),
              (m[_.chainId][v] = {
                totalAssets: C.from(_.totalAssets),
                totalSupply: C.from(_.totalSupply),
                paused: _.paused,
                lastUpdate: _.lastUpdate,
                apy: _.apy,
              });
          }),
            (e.savings = m);
        }
        return { ...e };
      }
      case "governance":
        return (
          t.callData &&
            (e.governance = {
              user: (P = t.callData) == null ? void 0 : P.user,
              proposals: (J = t.callData) == null ? void 0 : J.proposalsInfo,
              parameters: (U = t.callData) == null ? void 0 : U.parameters,
            }),
          { ...e }
        );
      case "switchAddress":
        return {
          ...e,
          balances: {},
          allowances: {},
          vaults: {},
          vaultManagers: {},
          gauges: { ...(e == null ? void 0 : e.gauges), list: {} },
        };
      case "switchChain":
        return {
          ...e,
          balances: {},
          allowances: {},
          vaults: {},
          vaultManagers: {},
          gauges: { ...(e == null ? void 0 : e.gauges), list: {} },
        };
    }
  };
function $(e, t, a, n, l = !0) {
  const f = qe(),
    { address: E, chainId: D } = fe(),
    [y, I] = d.useState(() => he.debounce(() => {}, 50)),
    [A, O] = d.useState(""),
    [p, T] = d.useState(null),
    [M, X] = d.useState(null),
    H = p && M === E,
    [w, B] = d.useState(null),
    [x, L] = d.useState(!1),
    [N, F] = d.useState(null);
  Ke();
  const [P, J] = d.useState();
  return (
    d.useEffect(() => {
      J(document);
    }, [P]),
    d.useEffect(() => {
      if (!P) return;
      const U = P.hidden;
      N && clearTimeout(N),
        U !== x &&
          (U
            ? F(
                setTimeout(() => {
                  L(U);
                }, 20 * 1e3)
              )
            : L(U));
    }, [P == null ? void 0 : P.hidden]),
    d.useEffect(() => {
      y == null || y.cancel(),
        T(null),
        O(""),
        I(() =>
          he.debounce(() => {
            if (a != null && a.includes(t) && !x) {
              if (A === E) return;
              we(`👀 Fetching ${t} on ${ie[D]} for ${E}`),
                O(E),
                e().then((U) => {
                  f.setDataContext({ type: t, callData: U }),
                    T(!0),
                    X(E),
                    O(""),
                    we(`✅ Fetched ${t} on ${ie[D]} for ${E}`);
                });
            }
          }, 50)
        );
    }, [a, e, t, x, E, l && D]),
    d.useEffect(
      () => (
        w && clearInterval(w),
        y(),
        B(
          setInterval(() => {
            y();
          }, n)
        ),
        () => clearInterval(w)
      ),
      [y]
    ),
    H
  );
}
const We = d.createContext(null),
  Pa = ({ children: e }) => {
    const { address: t, chainId: a, userTokens: n } = fe(),
      [l, f] = d.useState([]),
      [E, D] = d.useState(null),
      y = d.useCallback(async () => {
        if (t)
          return await (
            await fetch(
              `${Y}/allowances?${z.stringify({
                chainId: a,
                spenders: Be(a),
                user: t,
                additionalTokenAddresses:
                  n != null && n[a]
                    ? Object.keys(n == null ? void 0 : n[a]).filter((R) =>
                        ue(R)
                      )
                    : [],
              })}`
            )
          ).json();
      }, [a, t, n]),
      I = $(y, "allowances", l, 4 * 1e3),
      A = d.useCallback(async () => {
        if (t)
          return await (
            await fetch(
              `${Y}/balances?${z.stringify({
                chainId: a,
                user: t,
                additionalTokenAddresses:
                  n != null && n[a]
                    ? Object.keys(n == null ? void 0 : n[a]).filter((R) =>
                        ue(R)
                      )
                    : [],
              })}`
            )
          ).json();
      }, [a, t, n]),
      O = $(A, "balances", l, 12 * 1e3),
      p = d.useCallback(async () => {
        if (!(!a || !t))
          return await (
            await fetch(`${Y}/dao?${z.stringify({ user: t })}`)
          ).json();
      }, [a, t]),
      T = $(p, "dao", l, 12 * 1e3),
      M = d.useCallback(async () => {
        if (!a || !t) return;
        const R = await (
          await fetch(`${Y}/vaults?${z.stringify({ chainId: a, user: t })}`)
        ).json();
        if ((R == null ? void 0 : R[0]) !== "error") return R;
      }, [a, t]),
      X = $(M, "vaults", l, 12 * 1e3),
      H = d.useCallback(
        async () =>
          !a || !t
            ? void 0
            : await (
                await fetch(
                  `${Y}/vaultManagers?${z.stringify({ chainId: a, user: t })}`
                )
              ).json(),
        [a, t]
      ),
      w = $(H, "vaultManagers", l, 12 * 1e3),
      B = d.useCallback(async () => {
        if (!(!a || !t))
          return await (
            await fetch(`${Y}/incentives?${z.stringify({ user: t })}`)
          ).json();
      }, [a, t]),
      x = $(B, "incentives", l, 12 * 1e3),
      L = d.useCallback(
        async () =>
          await (
            await fetch(
              `${Y}/layerZero?${z.stringify({
                user: t,
                chainId: a,
                toChainId: E ?? void 0,
              })}`
            )
          ).json(),
        [t, a, E]
      ),
      N = $(L, "layerZero", l, 12 * 1e3, !1),
      F = d.useCallback(
        async () => await (await fetch(`${de}/merkl`)).json(),
        []
      ),
      P = $(F, "merkl-bg", l, 600 * 1e3, !1),
      J = d.useCallback(async () => {
        const R = a ?? 0;
        if (t !== te && R)
          return await (
            await fetch(`${de}/merkl?${z.stringify({ user: t, chainIds: R })}`)
          ).json();
      }, [t, a]),
      U = $(J, "merkl", l, 20 * 1e3),
      i = P || U,
      r = d.useCallback(
        async () =>
          await (
            await fetch(
              `${se}/campaigns?${z.stringify({
                types: [
                  ee.ERC20,
                  ee.ERC20_SNAPSHOT,
                  ee.JSON_AIRDROP,
                  ee.SILO,
                  ee.RADIANT,
                  ee.DOLOMITE,
                ],
              })}`
            )
          ).json(),
        []
      ),
      m = $(r, "campaigns", l, 600 * 1e3, !1),
      v = d.useCallback(
        async () => await (await fetch(`${se}/overview`)).json(),
        []
      ),
      _ = $(v, "overview", l, 120 * 1e3, !1),
      W = d.useCallback(
        async () => await (await fetch(`${se}/updates`)).json(),
        []
      ),
      Q = $(W, "updates", l, 600 * 1e3, !1),
      ae = d.useCallback(
        async () =>
          await (
            await fetch(`${se}/rewards?${z.stringify({ user: t })}`)
          ).json(),
        [t]
      ),
      g = $(ae, "rewards", l, 3 * 1e3, !0),
      Z = d.useCallback(
        async () =>
          await (
            await fetch(`${He}/savings?${z.stringify({ chainId: a })}`)
          ).json(),
        [a]
      ),
      b = $(Z, "savings", l, 20 * 1e3, !1),
      V = d.useCallback(
        async () =>
          await (
            await fetch(
              `${Y}/governance?${z.stringify({ chainId: a, user: t })}`
            )
          ).json(),
        [a, t]
      ),
      q = $(V, "governance", l, 20 * 1e3, !1);
    return G.jsx(We.Provider, {
      value: {
        allowancesLoaded: I,
        balancesLoaded: O,
        daoLoaded: T,
        incentivesLoaded: x,
        layerZeroLoaded: N,
        merklLoaded: i,
        merklBackgroundLoaded: P,
        rewardsLoaded: g,
        campaignsLoaded: m,
        overviewLoaded: _,
        updatesLoaded: Q,
        vaultManagersLoaded: w,
        vaultsLoaded: X,
        savingsLoaded: b,
        governanceLoaded: q,
        fetch: (R) => f(R),
        toChainId: E,
        setToChain: D,
      },
      children: e,
    });
  },
  Ga = () => d.useContext(We),
  ja = async (e) => {
    const t = { tokens: [] },
      a = {};
    for (const n of Object.values(t.tokens))
      n.address &&
        ue(n.address) &&
        (a[_e(n.address)] = { ...n, address: _e(n.address) });
    return a;
  },
  Ma = async (e) => {
    var l;
    const t = ja(),
      a = await (await fetch(`${de}/app`)).json(),
      n = { prices: {}, tokens: a == null ? void 0 : a.tokens };
    return (
      (l = a == null ? void 0 : a.prices) == null ||
        l.forEach((f) => (n.prices[f.token] = f.rate)),
      (n.userTokens =
        !!localStorage.getItem("MY_TOKENS") &&
        JSON.parse(localStorage.getItem("MY_TOKENS"))),
      (n.oneInchTokens = await t),
      n
    );
  },
  Ja = async (e, t, a) => {
    const n = { ...a };
    n[t] || (n[t] = {}),
      (n[t][e.address] = e),
      localStorage.setItem("MY_TOKENS", JSON.stringify(n));
  },
  Ya = (e, t, a) => {
    const n = { ...a };
    n[t][e] &&
      (delete n[t][e], localStorage.setItem("MY_TOKENS", JSON.stringify(n)));
  };
d.createContext(null);
const xe = "connectedWallets",
  Ba = (e) =>
    window.localStorage.setItem(xe, JSON.stringify(e.map(({ label: t }) => t))),
  La = () => {
    const e = JSON.parse(window.localStorage.getItem(xe) ?? "[]");
    return e != null && e.length ? e : [];
  },
  Na = ce === "merkl";
function Ua(e = !0) {
  const t = Se(),
    [{ wallet: a }, n, l, , , f] = Re(),
    [{ connectedChain: E }, D] = Pe(),
    [y, I] = d.useState(te),
    [A, O] = d.useState(!1),
    [p, T] = d.useState(null),
    [M] = d.useState(null),
    [X, H] = d.useState(!1),
    [w, B] = d.useState(null),
    [x, L] = d.useState(Fe.MAINNET),
    [N, F] = d.useState(null),
    [P, J] = d.useState(null),
    [U, i] = d.useState(null),
    [r, m] = d.useState(null),
    v = d.useCallback(
      async () => y && (w == null ? void 0 : w.getBalance(y).then(J)),
      [y, w]
    ),
    _ = d.useCallback(async () => {
      const b = await (w == null ? void 0 : w.getGasPrice());
      b && m(b.toNumber());
    }, [w]);
  d.useEffect(() => {
    async function b() {
      const V = La();
      window.self !== window.top
        ? await n({ autoSelect: { label: "Safe", disableModals: !0 } })
        : V.length > 0 &&
          (await n({ autoSelect: { label: V[0], disableModals: !0 } })),
        A || ne.Wallet.initialized(),
        O(!0);
    }
    e && b();
  }, [e]),
    d.useEffect(() => {
      a != null &&
        a.provider &&
        B(new Ye(a == null ? void 0 : a.provider, "any"));
    }, [a == null ? void 0 : a.provider]),
    d.useEffect(() => {
      t.length > 0 && Ba(t);
    }, [t]),
    d.useEffect(() => {
      var b, V;
      p
        ? I(p)
        : (b = a == null ? void 0 : a.accounts) != null &&
          b.length &&
          (V = a == null ? void 0 : a.accounts[0]) != null &&
          V.address &&
          I(a == null ? void 0 : a.accounts[0].address);
    }, [a == null ? void 0 : a.accounts, p]),
    d.useEffect(() => {
      !y || !w || (v(), (async () => H((await w.getCode(y)) !== "0x"))());
    }, [y, w]),
    d.useEffect(() => {
      var b;
      (b = a == null ? void 0 : a.chains) != null &&
        b.length &&
        L(Number.parseInt(a == null ? void 0 : a.chains[0].id));
    }, [a == null ? void 0 : a.chains]),
    d.useEffect(() => {
      if (!w) return;
      (async () => {
        v(), await _();
      })();
    }, [w, U, y, x]),
    d.useEffect(() => {
      const b = () => (w == null ? void 0 : w.removeAllListeners());
      if (w) b();
      else return;
      return w == null || w.on("block", (V) => i(V)), b;
    }, [y, w]);
  const W = d.useCallback(
    he.debounce(async (b) => {
      F(await Ma());
    }, 100),
    []
  );
  d.useEffect(() => {
    W(x);
  }, [W, y, x, w]),
    d.useEffect(() => {
      y === te ? ne.Wallet.disconnect() : y && ne.Wallet.connect(`${y}`);
    }, [y]);
  function Q() {
    n();
  }
  async function ae(b) {
    if (Na && p) return L(Number.parseInt(b == null ? void 0 : b.toString()));
    (await D({ chainId: `0x${b.toString(16)}` })) &&
      ne.Wallet.chain(`${ie[b]} (${b})`);
  }
  function g(b) {
    var V;
    ((V = a == null ? void 0 : a.accounts) != null && V.length) ||
      (a != null && a.accounts.find(({ address: q }) => q === b) && f(a, b));
  }
  function Z() {
    l({ label: (a == null ? void 0 : a.label) ?? "" }), I(te), T(null);
  }
  return {
    address: y,
    accounts: a == null ? void 0 : a.accounts,
    spy: p,
    setSpy: T,
    ens: M,
    chainId: x,
    provider: w,
    ethBalance: P,
    blockNumber: U,
    wallet: a,
    gasPrice: r,
    setGasPrice: m,
    initialized: A,
    isContract: X,
    refreshUserToken: () => {
      F({
        ...N,
        userTokens:
          !!localStorage.getItem("MY_TOKENS") &&
          JSON.parse(localStorage.getItem("MY_TOKENS")),
      });
    },
    connect: Q,
    connectAddress: g,
    disconnect: Z,
    switchChain: ae,
    ...N,
  };
}
function Ee({ children: e, ready: t } = { ready: !0 }) {
  const a = Ua(t ?? !0);
  return G.jsx(Ze.Provider, { value: a, children: e });
}
const Va = "onboard";
function $a(e) {
  switch (Va) {
    case "onboard":
      return G.jsx(Ee, { ...e });
    default:
      return G.jsx(Ee, { ...e });
  }
}
const qa = je(Sa);
function Ka({ children: e }) {
  const { address: t, chainId: a } = fe(),
    n = {
      ANGLE: null,
      balances: null,
      gauges: null,
      incentives: null,
      pool: null,
      rewardsData: null,
      tokens: null,
      veANGLE: null,
      vaultManagers: null,
      vaults: null,
      governance: void 0,
      merkl: void 0,
    },
    [l, f] = d.useReducer(Ra, n);
  return (
    d.useEffect(() => {
      t !== te && f({ type: "switchAddress", callData: null });
    }, [t]),
    d.useEffect(() => {
      f({ type: "switchChain", callData: null });
    }, [a]),
    d.useEffect(() => {
      (localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)) &&
        document.documentElement.classList.add("dark");
    }),
    G.jsx(Xe.Provider, {
      value: { ...l, setDataContext: f },
      children: G.jsx(Pa, { children: e }),
    })
  );
}
function Qa({ children: e, ready: t = !0 }) {
  return G.jsx(Me, {
    web3Onboard: qa,
    children: G.jsx($a, {
      ready: t,
      children: G.jsxs(Le, {
        children: [G.jsx(Ne, {}), G.jsx(Ka, { children: e })],
      }),
    }),
  });
}
export { Qa as D, ke as L, Ja as a, Ya as r, Ga as u };
