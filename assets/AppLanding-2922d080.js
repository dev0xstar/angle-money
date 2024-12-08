import {
  f as l,
  I as e,
  S as q,
  U as R,
  N as K,
  R as ya,
  H as O,
  Q as We,
  a8 as Ya,
  a9 as Ga,
  M as qa,
  Y as Ka,
  Z as X,
  $ as ke,
} from "./react-fa804298.js";
import { D as Je } from "./lodash-52c9deff.js";
import {
  C as Ba,
  a as Ue,
  P as za,
  H as Za,
  L as _a,
  e as $a,
  f as es,
  D as as,
  F as ss,
} from "./PageHeader-990598b1.js";
import {
  ap as Qe,
  aq as Se,
  b3 as va,
  b4 as ts,
  b5 as As,
  b6 as is,
  b7 as ns,
  b8 as ls,
  b9 as os,
  ba as rs,
  bb as cs,
  bc as ds,
  bd as gs,
  be as ms,
  bf as ps,
  bg as xs,
  bh as us,
  bi as ne,
  z as C,
  R as S,
  B as k,
  m as ie,
  as as oe,
  n as M,
  g as be,
  h as W,
  s as fs,
  i as la,
  T as se,
  r as ks,
  C as bs,
  au as oa,
  aL as Le,
  bj as de,
  ak as Me,
  bk as Te,
  a1 as ue,
  a2 as L,
  aK as G,
  I as m,
  a0 as Ca,
  X as Ee,
  aw as hs,
  bl as ws,
  aj as ja,
  u as ys,
  L as Bs,
  F as ra,
  bm as ca,
  bn as vs,
  bo as Cs,
  ah as js,
  bp as Ds,
  ai as Es,
} from "./index-61771442.js";
import { h as Is, H as Da, T as Os } from "./holyheld-07ade875.js";
import {
  m as x,
  C as Qs,
  b as Ss,
  L as Ns,
  c as Hs,
  X as Ps,
  Y as Us,
  d as Rs,
  e as Js,
  f as Ls,
  u as Ms,
  h as Ye,
  g as Fs,
} from "./style-829a44f9.js";
import { D as Vs, u as da, c as Xs, S as Ws } from "./Styles-fc791c6c.js";
import { u as Ge, e as Ts } from "./priceReference-c8273968.js";
import { M as qe, B as Ie, T as Ys, C as Gs } from "./Chain-f943efe1.js";
import { g as Ke, a as ge, S as me } from "./overview-a3c7cfac.js";
import { A as ce, u as Ne } from "./useTitle-cf527bf3.js";
import { F as pe, P as qs } from "./index-9fe1a3c0.js";
import { u as ze } from "./useInterval-19b83cbd.js";
import { C as He } from "./Composable-1e593e27.js";
import { T as Ks } from "./Token-ab8c5de6.js";
import { D as zs } from "./DAppProvider-9fb67e37.js";
import { a as Zs } from "./index-834edce6.js";
var Ze = {},
  _s = Se;
Object.defineProperty(Ze, "__esModule", { value: !0 });
var Fe = (Ze.default = void 0);
at(l);
var $s = _s(Qe()),
  et = e;
function Ea(a) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    i = new WeakMap();
  return (Ea = function (s) {
    return s ? i : t;
  })(a);
}
function at(a, t) {
  if (!t && a && a.__esModule) return a;
  if (a === null || (typeof a != "object" && typeof a != "function"))
    return { default: a };
  var i = Ea(t);
  if (i && i.has(a)) return i.get(a);
  var s = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var A in a)
    if (A !== "default" && Object.prototype.hasOwnProperty.call(a, A)) {
      var n = o ? Object.getOwnPropertyDescriptor(a, A) : null;
      n && (n.get || n.set) ? Object.defineProperty(s, A, n) : (s[A] = a[A]);
    }
  return (s.default = a), i && i.set(a, s), s;
}
Fe = Ze.default = (0, $s.default)(
  (0, et.jsx)("path", {
    d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
  }),
  "LinkedIn"
);
const st = "/assets/about-blob-12890353.svg",
  tt = "/assets/angle-blob-68ab9e2b.svg",
  At = "/assets/angle-dapp-logo-b1ac812b.svg",
  it = "/assets/angle-ok-8bb1f422.svg",
  nt = "/assets/angle-protocol-logo-6b2cfd2f.svg",
  lt = "/assets/badge-merkl-logo-5956c426.svg",
  ot = "/assets/pps-baptiste-76ca4194.jpg",
  rt = "/assets/pps-gnervo-80fee9e6.jpg",
  ct = "/assets/pps-greedythib-022a4a58.jpg",
  dt = "/assets/pps-picodes-78a1ab23.jpg",
  gt = "/assets/pps-saza-27cdd02a.jpg",
  mt = "/assets/pps-sogipec-2b826719.jpg",
  pt = "/assets/pps-viande-bd89f2be.jpg",
  xt = "/assets/public-goods-logo-75597822.svg",
  ut = "/assets/rotate-angle-d4ef134c.svg",
  Ia = () => {
    const [a, t] = l.useState({ x: null, y: null }),
      { ssr: i } = va();
    return (
      l.useEffect(() => {
        const s = (o) => {
          t({ x: i ? o.clientX : o.pageX, y: i ? o.clientY : o.pageY });
        };
        return (
          window.addEventListener("mousemove", s),
          () => {
            window.removeEventListener("mousemove", s);
          }
        );
      }, []),
      a
    );
  },
  Oa = "(prefers-reduced-motion: no-preference)",
  ft = typeof window > "u",
  kt = () => (ft ? !0 : !window.matchMedia(Oa).matches),
  Qa = () => {
    const [a, t] = l.useState(kt);
    return (
      l.useEffect(() => {
        const i = window.matchMedia(Oa),
          s = (o) => {
            t(!o.matches);
          };
        return (
          i.addEventListener
            ? i.addEventListener("change", s)
            : i.addListener(s),
          () => {
            i.removeEventListener
              ? i.removeEventListener("change", s)
              : i.removeListener(s);
          }
        );
      }, []),
      a
    );
  },
  Sa = "/assets/chain-security-2c01f784.svg",
  bt = "/assets/aave-dedb134d.svg",
  ht = "/assets/celo-ab85c780.svg",
  wt = "/assets/convexfinance-324f5d14.svg",
  yt = "/assets/curve.fi-e0f9cf38.png",
  Bt = "/assets/gamma-5dfea3ca.svg",
  vt = "/assets/1inch-cddc8cbb.svg",
  Ct = "/assets/odos-387b5324.png",
  jt = "/assets/re7-68fd9b2e.png",
  Dt = "/assets/liquity-e325503f.svg",
  Et = "/assets/paraswap-f3273fa8.svg",
  It = "/assets/pcs-e38ccec4.png",
  Ot = "/assets/pyth-f587365e.svg",
  Qt = "/assets/steakhouse-9b6ae78d.svg",
  St = "/assets/sushiswap-d7bde5b9.svg",
  Nt = "/assets/thegraph-bc48b51f.svg",
  Ht = "/assets/uniswap-1d2156ee.svg",
  Pt = "/assets/yearn-bba74c45.svg",
  Na = "/assets/immunefi-073c97ee.svg",
  Ut = "/assets/Alven-65d64f59.png",
  Rt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAAAlCAMAAABYr9TIAAAC+lBMVEVHcEz///b/////7Nr//+736OT88PD/9O/////88vD/6en97uL//fH58/D4697z3dr//+3/9+/77+j88un78en+8ur78en68OT////67uf98eb77+f58+n/8Oj78uj57OP98OX68eb/9uX68Of98+n47+f68ef98+r/8uX68eP67ef78un68eb38On68Oj78+j58eX68ef68eb68eb48OX38Ob58Ob68eb48Of68ef58Ob67+b68uj67+b/+Ov58ef68uf68ef68ef58Of78uj78+f68eb68ub58Ob78ef68ef58ef68ef78OT/9Kr58Of58Ob58Of27ub///358ef68Of58eb37+f68ef68ef/8er58uf58Ob68Of58Ob57+b48ef68ef68eb68+f68ef57+X58ef58Of79Of68eb57+b58ej78eb58Ob68eb58Of58ef68ef68Ob68eb48Of78ej78+f58OX68ef58Ob58eb68uf+9ur58eX68ej58ef68ef68Of77+f78+f28uX68Of58ef78OP68ef68ej58ej6+O357+b68Ob68Ob68ef68eb68Of68Of68ej68ej58OT68Of68eb68Ob57eL88+f78ef68ef58eb48ej48Ob68eb67+X78uj68eb68uj58ef78ej68Of67+f68uf88Oj78Oj68eb48Ob68Ob57+b68ej68eb//+v48uj/1NT68Of68OX78+P78ub58uf68Oj86+v48eT58OX57ub68ef58uf58ub27t/88uf58Of68eb88ej58Of959X68ef58eb68ef/8+f68ej///D68Of68eb78ef68ub58eb/+OP57+T58eb29un58eX68eb68uf28Ob58Ob68ef58Of58ej48eb68ef58ej67OL58ej68uf68ef78ub78eb68un27uX68ef58ej68uj78ef68Ob17OP58ej68uf/8OH48eb/9ej78ef67+X58Of78ef68ef88+v88OT16+tbgOTUAAAA/nRSTlMACBAOAgoRCgMPDBAOBAkOBiFDQi8oRCQBPTlAMSAsEig8HUU0GTYaFDgTKz8jRkOA//+zJiKXhZDu/dzuuih9pZnm7HChv2HrzGlL0EQD9v74HwXx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",
  Jt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASYAAAAcCAMAAAD7jOKXAAAC8VBMVEVHcEzq5uH36uDa2tj68Ob68ef58Ob58ef48Ob57+f58Ob57+b58eb68eb58Of68ef568z68ef78ef68Of58Of78Oj68ef48ub57d398ub78Of68uf78uj68Of78uj58eb58uj99Oj////68uf////57uX68ef48ef48Ob68ef68Of68ef/8ub////68uf58ef58OX58OX58Ob57+X68ef48ebw6N/67uf58ef88uf68Of88+n/9+348+T48+n68ej///X58eb47uX58Of78uf68Ob68ef78uj/+O368uf88uf68ef68ef78ef58ef78ef99On68Of68ef68eb68ef58ef58Ob58ej78un78+r68uj68ef58Ob68ef48+r68eb58Ob////68eb78uf78uf48Ob58ef68+f48Ob68uf58Oj68Ob47+n68Of87OL68ej68Of88en58eb58ef78uj68Of68ef68Of58Ob68uf68eb78uf68uf68Of68uf68eb78ef68Of58Of68ej58+T68eb68uf58ef68ef67uf99Oj58eb68eb68ef68efkv7/58eX68uf68eb68eb68ef///D68ur68Ob/////9u738ur58Of////68ef68uf57+f68ej37uP99+n67+b/9Oj78+j58ef68ef58ef58Of68Ob98+X58OX78+f68eb/69r58OX78ej68ef68uj58Ob57uf68Of99e358eb99Or58Ob68Oj//+368ef98en88On68ef//wD68ef68ef68ef68ef47+b68ef78ef68eby4+L+8uT88un78ej57+j58Ob359/68uj/56r57eT79On48Oj68ef/8ur68eb58Ob58ef57ef78un56ub78ej68ef68Ob57+X68uf/7tT38OX/8uf68ub68uf58ebkyI768ef68uf68uj78ef68Oj68eb68ej58Ob68Of78ef68+j68ej68ej78+j68uf78Oj68uaGsMNXAAAA+3RSTlMADBcHYpWXmJqYlpSTb6PABUaakI+McjwID6CgnZOLbUISBYUCWcPQ08mwdSoBZYmNjkuNh1AWNGQxazoLMS98BH9NjYF+eFsrdl1nudG+iSyv/+j4gP7LUCDsrD7m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",
  Lt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAABMCAMAAAAcEAZKAAAC8VBMVEVHcEz//97//9//////8ub68Ob68ef78uf68uf58ef68Of58Ob68ef68Of78ej68ef58Ob57+b58Of58eb//9/96ur58+b57+X68Ob78uf68ef68ef68eb68uf58ef48ef88eP//8L68eb58Oj68ef68eb58ef38ef////58ef68Ob58uX68ef58ub58Ob68Of68eb88+j88+T68ej58Of57+X09O777+f/8OL78eb68Of68uj17OL58Of68ef68uf86Oj/79/58Ob58uf58OX68Of68Ob68eT58ef68Of48OX77+X58ef/4uL57uf78ef/7+f68Oj68ef58Ob68eb59ej////48ef68ef68ef68ub67+b78uf/6+v68uf58Ob68eb58uf58Ob46+X68ef68Ob58ef68ef58ef68uf68eb78Of78Ob48ub58Of78ef48Ob//+n68eb58OX48Ob47+b58eX58Ob68eb57+f68eb58Ob58ef67ub/8eT58ub58OX48Ob48uf79OX57+f58Ob38OX78Ob58ef58Ob59On47+b78en68ef68Of58OX48eX57+T77ef57+T48OX57+b48eX68ub58Ob78ef28eb//+v67+X58Ob/7uX57+X//9357ub78ef58ef58OX68+j58Ob48eb77+T68Of57+f68ef/f3/58OT/8+z68OX68Of68uX58ef48eb/9On57uX48eX68ej58OX58eX68eX58eX67+f/8uX47+b18Of47OP38Of68ef48OX77+f48eb58eX78ef58ej58OX68un28ub39+f48OX/8+H//9T68Of48uX68uf78uf58ef78uT/8OH48uf68efw8On78uf58OT88+j68ef57+b77+P37+P09ODz6Oj78ej58ef/zMz68eb68Ofy8uX58eb78ej78Of58OX78ub59eL58Ob/9+748eb58Ob48Of68uX48uX58OT58Ob58Ob68uf48ObfkAQSAAAA+3RSTlMAAwgEFDVukKW81/T/6My6o4dWMBAZRICcsfDy06OATSUCU5Ht58FBCO83MYTJ/Ni0XB2o9WUOQBJo2nwbdeG8CxCNx1rrM3Tt5X1Q5QktwhayiWbfGgFV+bBsSKAN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",
  Mt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAAA3CAMAAACy/piiAAAC8VBMVEVHcEz/9uT97Oj48ub58ef58eb68en78eb58OX78Or68eb68ef58eX68ef57OP68ef68ef68ub47OL68eb58eb88Oj58Ob68Ob68ef58OX68eb58eX68eb58ef58Ob57ub78ef28Ob///D88eb88Oj58Ob/7+768ub58ef68Ob///r98Oz48OX68un88uf68ef78efq4uL68er68OX37+f58ef//+T68ub99+f68ef68Ob////69On78ef+79/58OX58ub68eb78ej58uf48uX79Oj78uj68eft7e367+f68ef58ef27eT58eT68ef68ub/7+f57+T67ub98+T77uj57ub//+/58eb68uf78ub78ub28uT/6N358ef38eb48Of68ej/+ej78en78ef78eb68Of78+j78ef58ef67+f68eb65ub57+f58Ob58Ob58Ob98+/58ef27eD78ef58OT58Ob68uX58Ob/9+n////58Of48eb68ef68ef78ef47+b68uf6+uP68ef68ej78ef68eb56+X68ef58ef68ef67+b68ub68uX37+f58Ob58eb68+j58eb58ej58eb88eb57uf78Oj47ub68eb88uf58Ob68ef58Ob68Of68+f68Of//+zw8OH78ef68eb58Or/8PD78eb48OT78uf68uj78eX88+f58eb58OX58ef37+X68ef58Of48OX78ebXf3//////7+/99ef///768uf78Ob48ef68ef58ef58Of78ej19eH78un88OX58ej49O368ef78uf57+f68ub78+j68eb58OX////46uT78ef98+b78ef68Of78ejk5I768ef68ef78ef47+f58ef88ef68ef68ub67+X38Ob58uf78ufw8O758Ob68uf77eL78eb58ef58Of68eX68eX68OP48OX68ufy8ub59N/68ef48er07uX68Ob78+n88+j68eb57+X68uf/8uz25+f58Oj68ec5uVJhAAAA+3RSTlMAHRhU+/UiT/st0/+AuC7dt1M43Lc42d+sW9+BbO9fXoBcEV9Z3g/dYH8BEjV5XL3OCU1KIHgHZCBxdAM7cxCWyb9VVyhgk/IEPKlhKpL2aSCtnD8qXRDN259SHhfx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",
  Ft =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABCCAMAAADnnS2WAAAC91BMVEVHcEz98un78ef58Ob////68eX78eb58ub78ef68ub48ef68Ob68ef68eb//uX58Ob68ef58Ob68uf//+X58Of68uf68Of//6r58Ob68ef68eb/8Oj58Ob68ef68eb77eP58Of48ef57+X68ef/69z98uj68ef68eb58Ob////78ef58Ob68ef68ej58ef98uj68Of68ej58eb89e7/6ef68eX//9r78uf68ef68eX/9+X68ef68ef29uT58Ob58Ob58ef28Oj47eP68eb68ej68Oj58Of///Dz89n68eb58Of68ef68ef58eb58eb58+n68ef58ef68eb58Ob////57+f68Of58uj68uf68ef68Ob58Ob68Ob58ef68OX58Ob68Ob58eb/9On68eb78ub68ub68ef57+b/9dT57+b68ef58Ob77+f67+j68Of/9eT09O717+b68eb88Ob/7+/78Ob58OX/9Of57+X/8Ob68ej58Ob68Ob77+f/7+f37+X58eb68ef58OX58ef78ub58eb68ef78uX/f3/57uX77+X68eb58Of68Of+8+f68ub68OX68eb58eX68Ob67+b78uj68Of88ej88un18eP58Of68uf78Of67+b68Oj/8+f68ef68eb78ef59OT68ub98Ob58eb//3/58Ob58ef58Ob78Of68eb/7N/78eX58Of58ef/7ef78ef68ef68ef78ef58Ob68ub68ef87+b68ef58uT57+f58OX58eb/8ej58ef58ej78ef68eb////57+b58Ob58eb/79/47+b58eb67+f48eT68Of48eb88OX68uf57+f58ef58Ob48OX99+f68Oj69eb68ej68eb48OT58ef58Of78Of69eP58ef48er58OX48ej68ef58ef58ef48un57+T68Of68ef78uf68eT58ef68uX68ub/7+j78ej/8eT48eb68ef68ej58ef58uj88ej68eb58Of48eb78ej58OdwPFMoAAAA/XRSTlMAJIFpAjZujz0pqPj/3ghDpenbEI7u2gPU+aQSfuTQCVrQ/nINFHff/gpEyNJQWx6u9YgODG8HbO85CtW6HLT9lRFKvrc1jwQFPrb36/WDMKr2N/sBhXwi7eOixHT8euKdWBiyn2rzuQbrzYpCTtccFxvpSBCIlguYNTjHoIEgIJKcLGyQhvAvAi6Cv+XbFl76woBo3N9BRjIa6qA/UbUa5vPEMHw0pwLyo47HXg6DZPkrzma7S8G851jyMZjgyjnky8+oA7qQ8BBTuNgTdSVaeMuX/Dwg6TS+sE7G7VkhwxmsU9bAmShii95VOrmfnRvNJ9LX02BkLZrgzobEU9VLcAAAB3tJREFUeAHc1FObY0EUheE11opt22Pbto1M29Zfb5w6sZqVPP3eFvZ3tbGfHTh4CJt2+MjRY8ch04mTp6jB5mh1egNJI+QxmS0krdgM21G7gxuckMXl9nCDF535/AFuCNpDYcgRicbi3GRgIpkSd9MZLeTQZjUUNhGYy1NROH0Gcpw9F2NFAG2dv3CRCvslyHHZf4XVrqKda9fj3HDj5i3IcftOkDXuoo17dgr3H0CGh48ePyE3H5h5SsWz55chw4uXN8gtBB56RcENGV7n35BbCHz7Tr3veA8ZPnyk4sanO5+/xFmmR3OJr9+oiH+HFFojyeCPn79+A9o/LPuL5v4VKfzvgxzv+wcGj6i7dqhj4PAzCiOjkOTBGMrGix0CP0xQKEyiG6Zi7QNv2amaftuLgW9nqLLPotuBc2g0f4PCqQV0PXAaDcYWqVp625OBy3EKT1bQi4Fr1dYDnCPZAoXxM0bONMZGZtKTNxnbtm0z3cvBWmOjrbFtrW3btu3dh+pU3Vu3Kql0V/fT/n+Mv6jq3OKhYSn+LwOX0TBsOfIVhGvdFq8YvnLlylWlY9sWKnDCahq6j0V+1iTFdYhtsRYFNXDd+g0bPdQN27RqcyECh1PYgnwtJZkc3zil5bWXpI5PC3cFVAPqT0mmRfr1rgNrZdCQOBshm9dkZmXnrEUEs3MZ3VY1b0U6wwzZ5jZwu5eGHWsxdueK7rsYsntPwl7Y7WN0PTpBGLt/Sg+S/iqNAw02eih1yXEZOIdCB2TPWU3FsAOlDkK1WTzNoQYHeqYaDtN0BNKWQ9QcPdYNQOfRMyn02Ocu8HgyhbInWtFmyNJGUJxkyKllpyHF7KB0ppJcl2eHkfSPXwJdcDKFc2NdBZ6ndMHPcDfWgxS8yDy3lugM021DKNx+B4QONaiZYbbsXETDpjauAu+k1V13b5jkpcm/YwCEUmOomXQPFC0yKPgbQsiexjz3wrSBhnifm8AB91Fx/xYfNJvHLaKpdXvLEb1CMageoLSgMwwPPsSQHp0hPUzDI7PdBLZYTanHtY/CMLoLpR7bofMdIhm/F6rHplFYZN5SzEOd0tKwcIHnaXp8AKRyEyk98SRCniK5OwuqzemUEiCdpOFKSGmFCxxOqcbTUDzjp+B/FnnaP0eOSYDqwecp7YEplboh1Yoc2JLSOajaByhVrQVN2Wn02/birBcoHOoH03jq4lDkwCRKK2DxopdSFjStye5toXppEgX/WShivfobu6LogRspJA+C1Q2UlkLjax3XAqqY8pQOlIQieHY+mfv8lVDMo2HMzW4Cx1DYVQ5WCZSSEMksSnUWwirm5p1jLcmXvUzBVSAF+X1Ir5jxtz6KcE/eSiH5GUR32at+FjXwfntEmzoUdhdDmAdnUnptLKIIvv4GpfwDZzoE3tcWNs9RGDICYZqdovCmD85qvXVfD5Jv3l3QwLkOgRtgdyBa4ITqFF5oDkeVGtahZvfSl9IKF7g6SuDDjoHWkTW5Ghz0mppIjf+1nUAhAzdFCUylsLoYbE5Sql4PkQ2Yl8E89x4LQg18203gqwUKHJoDyT6yRjVBZOtuYMg77wKWwOvdBC6lkNTWOXBGDOA0svojsia3MuS9tihK4PsUPvA5B34IOI2s6rUQ0fXDGJLbBgUJ9N3qELjwdhrii8GmNYWlcBpZPcoionJPqGf4/ANnP+IQOHAPDWM6weZGCu9D9eBkSqtgFVx6JAaaj6jb/XERAzGdwjHYPE7D7bdAtfgFCnddCatPyE8B5Eyj7vKDrgPnwOLpF5x+7QM+o6HrQIeR5dkW4fSyFEAHGvrAdWBfWH1Iw3OwKtaRulOfO42sp2B1fhHZcafYwU6BXyDcQo9j4PlTosMHi9fliwxwGFkXYmAxaBjJ8QBKynXwxIPh6+0xhLuFjoElv6ShBCy+om7YOig2d6QQfzMsXk8kOWkhgJj7aVjdAjrf/RQaItx+50C8OIa6KfWgaPsIdV87jaxVsMiaSM04aGKS7HdamELp1bVAcOSZNVDcRukMbEp+Sp3/LSgqi+ygw8h65yAUB6dPo+YzH/IMpjCq/oNAr3l1yBo0vPDUhMcesn5SAw5TOrUQNo3upy79bUjbWjEkkAPFN9UpTFwORb8va6h/m+KUxmzov6wCyQalaVUbwvF+H1HxTu/NsHpaFH7rg+G7eOOaFlDExDHiL2n0160YEh80er20Kd9rwAdUfR9Eox8YzahLIXzzI3WLmocS25RexDze19pClUZpyIa+wrl7KfwEXckbaNHqknrAz2NoOpQJPHoro7oN0i/fU9cj6deEhKV1qevZHqqFFRjdbz4Y7qhI0wuHP4ZmbIKHQuIguArEkp5VaOP/PQtWJZiPTEgvBbwM8Xz2cKkgQsZedoNXz7u6HDQxIwOBD1/T1LxW83Bqauof12q+ek3zYSDwZycoxpY7USGZpjcfb9YZNr/UTrUYfrX2dO+91jXQpfGticO87FMSpmCT2jOXta7904ggTNeUbVf513H130Wh/K1f2tU7fq9bt25gZOvP3T1HyeOzy2XOewV/Ef8C3tyGW87EozIAAAAASUVORK5CYII=",
  Vt =
    "data:image/png;base64,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",
  Xt = "/assets/stakecapital-387001ab.svg",
  Wt = "/assets/backed-5fa5639d.jpg",
  Tt = "/assets/circle-5393a9c6.png",
  Yt = "/assets/code4rena-a43e626d.svg",
  Gt = "/assets/coingecko-c6f44ded.svg",
  qt = "/assets/debank-53087d32.svg",
  Kt = "/assets/defi-llama-8bc7ff62.png",
  zt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAA+CAMAAACIqqDYAAAC9FBMVEVHcEz57+T48Ob68uj/9e348OP68eX58eb/8+v/0cv78ej68ef68eb////x6+T78uf68ef99+f68eb68OX76+v68Of68eP37ej78ef48eX58Ob58eb68uj78OX68uf/4+P58ej68ef//+/79un68eb68ef58un87+H58eX58ef68uj78eb78uv///T15+f68eb68uf28OX37uT//9r25t378Oj78Of67+T58ef68eb58Ob68ef57uP//+n37uX58Ob38Ob68ef68Ob57+X68Ob57eT////78uX86OD58Of68Of78ef68Of58Ob68ef68uf58eX68ef58ef27+X58Ob58Ob68Ob58ef68ej37+f////99On37+j/+vr58Ob58Ob/9e768ef58ef78uj88Oz57+b68uf58ef68ej68ef58OH68Of58Ob68eb68OX77+P58eb78Of68ef/8uD68ef68ef48Or/++j/8uX38eT38Ob68On58eT////48Ob57+b68ef88Oj68Of68uf68eX68Ob78ef/9Oj68eb68eb58OX58Ob67+b68uf78ef57+b58eX58Ob68ef68ef68ej57+b37+b68Of58ef68ub68eX68Ob58ef86+v78ub78ub35+f78ef58OX68ef/4X/78On68ef68uX//+768ef57+b48OX18uj68Oj68ef68ef68ef68ef58Of88+f48OX48Ob68uf68uf58Oj68uf38OX68ef58ef77+f66+b58ub67+X////78Oj78en77eT48eT68ef35+f78uj78+j//8/68ef68Ob58Ob68Ob16uT58Ob48Of68Of58efz8+T78eb88uL28OX68+b88ej58eX68uf58eb68ub78en58Of/9Or38Ob87Of78+j68ef18+n68Ob68+r78ej78uf58Of68ef58Ob68uX48un/9ez68eb78ef68ef/5eX88ub68uf57+n58Oj78ej78ej58ef/8uySPY09AAAA/HRSTlMAWnhuGjduc0MFh//fCBOkziAxog/XOEJmdqd6qEZ8BsLoEB3W5DMQU5CSaBMBGzRRWUcHF05ZSJnq/r9eDmuGaoba/rNYA2QI7KKBNS2t3EOwuQ2M/NCUoCEC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",
  Zt = "/assets/hats-3e445ba9.svg",
  _t = "/assets/insurace-3f9b56ea.png",
  $t = "/assets/mt-pelerin-21f6fde1.svg",
  eA = "/assets/nexus-mutual-white-69d10ac8.png",
  aA = "/assets/ramp-e6bcb590.svg",
  sA = "/assets/superfluid-d48e7770.svg",
  tA =
    "data:image/png;base64,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",
  AA = "/assets/unblock-fa0fa196.svg",
  iA = "/assets/zapper-820fa572.svg",
  nA = "/assets/zerion-6a676e6e.svg",
  Ha = "/assets/sigma-prime-bc48f3fd.svg",
  lA = "/assets/zksync-5779f3e9.svg",
  oA = "/assets/layerZero-3b542378.svg",
  rA = "/assets/59144-f6562b77.svg",
  cA = "/assets/GAUNTLET-1c5d3d50.svg";
var _ = ((a) => (
  (a[(a.DEFI = 0)] = "DEFI"),
  (a[(a.PARTNERS = 1)] = "PARTNERS"),
  (a[(a.INVESTORS = 2)] = "INVESTORS"),
  (a[(a.CHAINS = 3)] = "CHAINS"),
  a
))(_ || {});
const Ve = {
    a16z: {
      name: "",
      logo: Ft,
      link: "https://a16zcrypto.com/",
      category: 2,
      className: "w-1/2 invert",
    },
    fabric: {
      name: "",
      logo: Jt,
      link: "https://www.fabric.vc/",
      category: 2,
      className: "invert",
    },
    alven: {
      name: "",
      logo: Ut,
      link: "https://alven.co/",
      category: 2,
      className: "invert",
    },
    wintermute: {
      name: "",
      logo: Mt,
      link: "https://www.wintermute.com/",
      category: 2,
      className: "invert",
    },
    stakeCapital: {
      name: "Stake Capital",
      logo: Xt,
      link: "https://www.stake.capital",
      category: 2,
      className: "",
    },
    divergence: {
      name: "",
      logo: Rt,
      link: "https://www.div.vc/",
      category: 2,
      className: "w-2/3 invert",
    },
    fredMontagnon: {
      name: "",
      logo: Vt,
      link: "https://twitter.com/Angle0xProtocol",
      category: 2,
      className: "invert",
    },
    GFC: {
      name: "",
      logo: Lt,
      link: "https://www.globalfounderscapital.com/",
      category: 2,
      className: "w-1/2 invert",
    },
    aave: {
      name: "Aave",
      logo: bt,
      link: "https://app.aave.com/reserve-overview/?underlyingAsset=0xe0b52e49357fd4daf2c15e02058dce6bc0057db4&marketName=proto_polygon_v3",
      category: 0,
    },
    uniswap: {
      name: "Uniswap",
      logo: Ht,
      link: "https://uniswap.org/",
      category: 0,
    },
    circle: {
      name: "Circle",
      logo: Tt,
      link: "https://www.circle.com/en/",
      category: 0,
    },
    morpho: {
      name: "Morpho",
      logo: ts,
      link: "https://morpho.org/",
      category: 0,
    },
    steakhouse: {
      name: "Steakhouse Financial",
      logo: Qt,
      link: "https://www.steakhouse.financial/",
      category: 0,
    },
    gauntlet: {
      name: "Gauntlet",
      logo: cA,
      link: "https://www.gauntlet.xyz/",
      category: 0,
    },
    re7: {
      name: "Re7",
      logo: jt,
      link: "https://www.re7.capital/",
      category: 0,
    },
    odos: {
      name: "Odos",
      logo: Ct,
      link: "https://www.odos.xyz/",
      category: 0,
    },
    one1nch: {
      name: "1inch",
      logo: vt,
      link: "https://1inch.io/",
      category: 0,
    },
    paraswap: {
      name: "Paraswap",
      logo: Et,
      link: "https://www.paraswap.io/",
      category: 0,
    },
    curve: { name: "Curve", logo: yt, link: "https://curve.fi", category: 0 },
    sushi: {
      name: "SushiSwap",
      logo: St,
      link: "https://www.sushi.com/",
      category: 0,
    },
    layerzero: {
      name: "",
      logo: oA,
      link: "https://layerzero.network",
      category: 0,
      className: "invert",
    },
    pyth: {
      name: "Pyth",
      logo: Ot,
      link: "https://pyth.network/",
      category: 0,
      className: "invert",
    },
    backed: {
      name: "Backed Finance",
      logo: Wt,
      link: "https://backed.fi",
      category: 0,
    },
    gamma: {
      name: "",
      logo: Bt,
      link: "https://app.gamma.xyz",
      category: 0,
      className: "invert",
    },
    liquity: {
      name: "",
      logo: Dt,
      link: "https://www.liquity.org/",
      category: 0,
    },
    yearn: {
      name: "Yearn Finance",
      logo: Pt,
      link: "https://yearn.finance/vaults",
      category: 0,
    },
    convexfinance: {
      name: "",
      logo: wt,
      link: "https://www.convexfinance.com/",
      category: 0,
    },
    pancakeSwap: {
      name: "PancakeSwap",
      logo: It,
      link: "https://pancakeswap.finance/farms",
      category: 0,
    },
    arrakis: {
      name: "Arrakis",
      logo: As,
      link: "https://www.arrakis.finance/",
      category: 0,
    },
    thegraph: {
      name: "TheGraph",
      logo: Nt,
      link: "https://thegraph.com/en/",
      category: 0,
    },
    ethereum: {
      name: "Ethereum",
      logo: is,
      link: "https://ethereum.org/en/",
      category: 3,
    },
    Polygon: {
      name: "Polygon",
      logo: ns,
      link: "https://polygon.technology/",
      category: 3,
    },
    Optimism: {
      name: "Optimism",
      logo: ls,
      link: "https://www.optimism.io",
      category: 3,
    },
    Arbitrum: {
      name: "Arbitrum",
      logo: os,
      link: "https://arbitrum.io",
      category: 3,
    },
    Base: {
      name: "Base",
      logo: rs,
      link: "https://www.base.org/",
      category: 3,
    },
    gnosisChain: {
      name: "Gnosis Chain",
      logo: cs,
      link: "https://www.gnosis.io",
      category: 3,
    },
    blast: {
      name: "Blast",
      logo: ds,
      link: "https://blast.io/en",
      category: 3,
    },
    linea: {
      name: "Linea",
      logo: rA,
      link: "https://linea.build/",
      category: 3,
    },
    mode: {
      name: "Mode",
      logo: gs,
      link: "https://www.mode.network/",
      category: 3,
    },
    polygonzkevm: {
      name: "Polygon zkEVM",
      logo: ms,
      link: "https://polygon.technology/polygon-zkevm",
      category: 3,
    },
    zkSync: { name: "", logo: lA, link: "https://zksync.io/", category: 3 },
    avax: {
      name: "Avalanche",
      logo: ps,
      link: "https://www.avax.network/",
      category: 3,
    },
    BSC: {
      name: "BNB Chain",
      logo: xs,
      link: "https://www.bnbchain.world/en/smartChain",
      category: 3,
    },
    celo: { name: "", logo: ht, link: "https://celo.org/", category: 3 },
    solana: {
      name: "Solana",
      logo: us,
      link: "https://solana.com/",
      category: 3,
    },
    chainSecurity: {
      name: "",
      logo: Sa,
      link: "https://angrybird4837s-organization.gitbook.io/angle-money/resources/audits",
      category: 1,
      className: "invert",
    },
    immunefi: {
      name: "",
      logo: Na,
      link: "https://immunefi.com/bounty/angleprotocol/",
      category: 1,
      className: "invert",
    },
    sigmaPrime: {
      name: "",
      logo: Ha,
      link: "https://angrybird4837s-organization.gitbook.io/angle-money/resources/audits",
      category: 1,
      className: "invert",
    },
    code4rena: {
      name: "Code4rena",
      logo: Yt,
      link: "https://code4rena.com",
      category: 1,
    },
    ramp: {
      name: "Ramp Network",
      logo: aA,
      link: "https://ramp.network/buy",
      category: 1,
    },
    transak: { name: "", logo: tA, link: "https://transak.com/", category: 1 },
    holyheld: {
      name: "Holyheld",
      logo: Is,
      link: "https://holyheld.com",
      category: 1,
    },
    unblock: {
      name: "",
      logo: AA,
      link: "https://angle.getunblock.com/",
      category: 1,
    },
    mtPelerin: {
      name: "",
      logo: $t,
      link: "https://www.mtpelerin.com/buy-crypto?rfr=angle",
      category: 1,
    },
    defiLlama: {
      name: "",
      logo: Kt,
      link: " https://defillama.com/protocol/angle",
      category: 1,
    },
    nexusMutual: {
      name: "",
      logo: eA,
      link: "https://app.nexusmutual.io/cover/buy/get-quote?address=0xfdA462548Ce04282f4B6D6619823a7C64Fdc0185",
      category: 1,
      className: "invert",
    },
    coingecko: {
      name: "",
      logo: Gt,
      link: "https://www.coingecko.com/en/coins/ageur",
      category: 1,
    },
    gateIo: {
      name: "",
      logo: zt,
      link: "https://www.gate.io/",
      category: 1,
      className: "invert",
    },
    insurace: {
      name: "",
      logo: _t,
      link: "https://app.insurace.io/Insurance/Cart?id=138&referrer=1448040553005986898609829929687459727992711545221",
      category: 1,
      className: "invert",
    },
    debank: { name: "", logo: qt, link: "https://debank.com/", category: 1 },
    zerion: { name: "", logo: nA, link: "https://zerion.io/", category: 1 },
    zapper: { name: "", logo: iA, link: "https://zapper.fi", category: 1 },
    hats: {
      name: "",
      logo: Zt,
      link: "https://hats.finance/",
      category: 1,
      className: "invert",
    },
    superfluid: {
      name: "",
      logo: sA,
      link: "https://www.superfluid.finance/",
      category: 1,
      className: "invert",
    },
  },
  dA = () => {
    const { t: a } = q(),
      t = Ia(),
      s = Qa() ? null : `translate(${t.x}px,${t.y - 60}px)`;
    ne("section");
    const o = {
        1: {
          title: a("Angle dApp"),
          description: a(
            "A <strong>front-end application</strong> for users to get access to most of the features of the Angle Protocol."
          ),
          image: At,
          link: C.angleApp,
          externalLink: !0,
        },
        2: {
          title: a("Angle Protocol"),
          description: a(
            "Angle Labs develops advanced open-source systems and concepts for decentralized stablecoin protocols, like <strong>the Angle Protocol.</strong>"
          ),
          image: nt,
          link: C.angleOpenSource,
          externalLink: !0,
        },
        3: {
          title: a("Merkl"),
          description: a(
            "<strong>Merkl</strong> is a mechanism to incentivize Uniswap V3-type liquidity positions in a flexible and efficient way. It is built and maintained by Angle Labs, but is separate from the Angle Protocol."
          ),
          image: lt,
          link: C.angleMerklApp,
          externalLink: !0,
        },
        4: {
          title: a("Angle Public Goods"),
          description: a(
            "We develop <strong>public goods</strong> to help the crypto-community and make our ecosystem thrive with and around us. Check out our Carbon Impact Calculator or our Impermanent Loss Simulator."
          ),
          image: xt,
          link: S.labsProjects,
          externalLink: !1,
        },
      },
      A = {
        1: {
          image: mt,
          name: "Pablo Veyrat",
          coFounder: !0,
          jobTitle: "Co-Founder Angle Labs",
          studies: "Polytechnique - Stanford University",
          twitterLink: "https://twitter.com/Angle0xProtocol",
        },
        2: {
          image: rt,
          name: "Guillaume Nervo",
          coFounder: !0,
          jobTitle: "Co-Founder Angle Labs",
          studies: "Polytechnique - Stanford University",
          twitterLink: "https://twitter.com/Angle0xProtocol",
        },
        3: {
          image: dt,
          name: "Picodes",
          coFounder: !0,
          jobTitle: "Co-Founder Angle Labs",
          twitterLink: "https://twitter.com/Angle0xProtocol",
        },
        5: {
          image: pt,
          name: "Viande",
          coFounder: !1,
          jobTitle: "Front-end developer",
        },
        6: {
          image: gt,
          name: "saza",
          coFounder: !1,
          jobTitle: "Creative Director",
        },
        7: {
          image: ct,
          name: "Thibaud Bruyelle",
          coFounder: !1,
          jobTitle: "Blockchain engineer",
          studies: "ENSAE - Stanford University",
        },
        8: {
          image: ot,
          name: "Baptiste",
          coFounder: !1,
          jobTitle: "Back-end developer",
        },
      },
      n = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.5,
            duration: 1,
          },
        },
      },
      r = { hidden: { opacity: 0 }, show: { opacity: 1 } },
      c = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
            duration: 0.3,
          },
        },
      },
      h = {
        hidden: { opacity: 0, y: "-100px" },
        show: {
          opacity: 1,
          y: "0",
          transition: { type: "spring", damping: 10, stiffness: 50 },
        },
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("section", {
          className: "intro-about my-8 md:my-16",
          children: e.jsxs("div", {
            className: "container flex flex-wrap items-center",
            children: [
              e.jsx("img", {
                className: "w-3/5 md:w-1/3 lg:w-1/3",
                src: ut,
                alt: "angle",
              }),
              e.jsxs("div", {
                className: "w-full md:w-2/3 lg:w-2/3",
                children: [
                  e.jsxs(x.h1, {
                    initial: { opacity: 0, y: "-100px" },
                    animate: { opacity: 1, y: 0 },
                    transition: {
                      delay: 0.5,
                      duration: 1,
                      type: "spring",
                      damping: 10,
                      stiffness: 50,
                    },
                    className: "display1 mb-2 lg:mb-4",
                    children: [
                      "Angle ",
                      e.jsx("span", {
                        className: "text-gradient-purple500-blue500",
                        children: "Labs",
                      }),
                    ],
                  }),
                  e.jsx(x.h2, {
                    initial: { opacity: 0, y: "50px" },
                    animate: { opacity: 1, y: 0 },
                    transition: {
                      delay: 1,
                      duration: 1.5,
                      type: "spring",
                      damping: 10,
                      stiffness: 50,
                    },
                    className:
                      "leading-tight dark:text-sand-500 lg:w-11/12 lg:leading-snug xl:w-2/3",
                    children: a(
                      "We’re building the foundations for a permissionless and open financial ecosystem on blockchains."
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsxs("section", {
          className: "video relative my-20 md:my-32 lg:my-40",
          children: [
            e.jsx("img", {
              src: st,
              alt: "About blob",
              className:
                "absolute top-0 z-[-1] md:inset-0 xl:left-1/4 xl:top-1/2 xl:w-1/2 xl:-translate-y-1/2",
            }),
            e.jsxs("div", {
              className: "container flex flex-wrap items-center",
              children: [
                e.jsxs("div", {
                  className: "mb-8 w-full lg:mb-0 lg:w-1/2 lg:pr-24",
                  children: [
                    e.jsx(x.h5, {
                      initial: { opacity: 0, y: "100px" },
                      whileInView: { opacity: 1, y: "0" },
                      viewport: { once: !0, amount: 0.5 },
                      transition: { duration: 0.6, ease: "easeInOut" },
                      className: "mb-2 dark:text-sand-500",
                      children: "Stablecoins",
                    }),
                    e.jsx(x.h3, {
                      initial: { opacity: 0, y: "100px" },
                      whileInView: { opacity: 1, y: "0" },
                      viewport: { once: !0, amount: 0.5 },
                      transition: {
                        delay: 0.2,
                        duration: 0.6,
                        ease: "easeInOut",
                      },
                      className:
                        "strong-gradient-purple500-blue500 dark:text-sand-500",
                      children: e.jsx(R, {
                        children: a(
                          "We contribute to the <strong>Angle Protocol</strong>, an over-collateralized and capital-efficient stablecoin protocol, behind <strong>EURA</strong> - the biggest decentralized Euro stablecoin."
                        ),
                      }),
                    }),
                  ],
                }),
                e.jsx(x.div, {
                  initial: { opacity: 0, y: "50px" },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0, amount: 0.5 },
                  transition: { delay: 0.4, duration: 0.5, ease: "easeInOut" },
                  className: "w-full lg:w-1/2 lg:pl-24",
                  children: e.jsx("iframe", {
                    className: "z-1 aspect-video w-full",
                    src: "https://www.youtube.com/embed/DDoY_CUrd7M",
                    title: "YouTube video player",
                    frameBorder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    allowFullScreen: !0,
                  }),
                }),
              ],
            }),
          ],
        }),
        e.jsxs("section", {
          className:
            "values my-20 overflow-x-hidden md:my-32 lg:my-44 lg:overflow-x-visible",
          children: [
            e.jsx("div", {
              className: "container flex flex-wrap items-center",
              children: e.jsxs("div", {
                className: "mb-6 w-full md:mb-8",
                children: [
                  e.jsx(x.h3, {
                    initial: { opacity: 0, letterSpacing: "0.3em" },
                    whileInView: { opacity: 1, letterSpacing: "0.1em" },
                    viewport: { once: !0, amount: 0.5 },
                    transition: { duration: 1.5 },
                    className:
                      "text-gradient-multiple w-max font-light uppercase tracking-widest",
                    children: a("What we believe in"),
                  }),
                  e.jsx("div", { className: "absolute" }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "container-lg",
              children: e.jsxs(x.section, {
                variants: n,
                initial: "hidden",
                whileInView: "show",
                viewport: { once: !0, amount: 0.5 },
                className:
                  "relative z-5 flex grid-cols-3 gap-4 overflow-x-scroll md:gap-6 lg:grid lg:overflow-x-auto",
                children: [
                  e.jsxs(x.div, {
                    variants: r,
                    className:
                      "gradient-purple500-blue500 min-w-[70vw] whitespace-normal rounded-lg p-8 md:min-w-[50vw] md:p-10 lg:min-w-min",
                    children: [
                      e.jsx("h6", {
                        className: "mb-4 dark:text-black-500",
                        children: a("Sobriety"),
                      }),
                      e.jsx("p", {
                        className: "dark:text-black-500",
                        children: a(
                          "We're focused on our long term goals, and are mindful in all aspects of our operations to make choices that align with our values and vision. We are not going after everything that is shiny in the ecosystem."
                        ),
                      }),
                    ],
                  }),
                  e.jsxs(x.div, {
                    variants: r,
                    className:
                      "gradient-coral500-purple500 min-w-[70vw] whitespace-normal rounded-lg p-8 md:min-w-[50vw] md:p-10 lg:min-w-min",
                    children: [
                      e.jsx("h6", {
                        className: "mb-4 dark:text-black-500",
                        children: a("Impact"),
                      }),
                      e.jsx("p", {
                        className: "dark:text-black-500",
                        children: a(
                          "We're constantly striving to find the actions that will produce the biggest outcome in the least amount of time. Efficiency is our main driver."
                        ),
                      }),
                    ],
                  }),
                  e.jsxs(x.div, {
                    variants: r,
                    className:
                      "gradient-sand500-peach500 min-w-[70vw] whitespace-normal rounded-lg p-8 md:min-w-[50vw] md:p-10 lg:min-w-min",
                    children: [
                      e.jsx("h6", {
                        className: "mb-4 dark:text-black-500",
                        children: a("Reliability"),
                      }),
                      e.jsx("p", {
                        className: "dark:text-black-500",
                        children: a(
                          "We develop the most reliable stablecoin algorithms with the highest security standards. We try to be irreproachable both internally as a team and externally with the people we interact with."
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx("section", {
          className:
            "work my-20 flex flex-wrap overflow-x-hidden md:my-32 lg:my-44 lg:overflow-x-visible",
          children: e.jsxs("div", {
            className:
              "container-lg relative flex w-full flex-wrap items-stretch justify-between",
            children: [
              e.jsx("div", {
                className: "w-full lg:w-1/3",
                children: e.jsxs("div", {
                  className: "top-24 mb-8 mt-8 self-start lg:sticky lg:mb-0",
                  children: [
                    e.jsx("h5", {
                      className: "mb-3 dark:text-sand-500",
                      children: a("Our work"),
                    }),
                    e.jsx("h3", {
                      className: "mb-6 dark:text-sand-500",
                      children: a(
                        "We're deep into DeFi, so besides stablecoins we also build products to push the ecosystem further."
                      ),
                    }),
                    e.jsx(K, {
                      to: S.releases,
                      children: e.jsx(k, {
                        type: "button",
                        look: "secondary",
                        className: "w-max",
                        children: a("Check our releases timeline"),
                      }),
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className:
                  "excluded w-full md:px-12 lg:w-2/3 lg:px-0 lg:!pl-24 xl:w-3/5",
                children: e.jsxs("div", {
                  className: "custom-cursor-section",
                  children: [
                    e.jsx("div", {
                      className:
                        "cursor-box gradient-purple500-blue500 pointer-events-none fixed -left-10 -top-10 z-9999 hidden h-20 w-20 items-center justify-center rounded-full will-change-transform lg:flex",
                      style: { transform: s },
                      children: e.jsx("p", {
                        className: "font-bold dark:text-black-500",
                        children: a("Discover"),
                      }),
                    }),
                    e.jsx("ul", {
                      className:
                        "flex list-none items-start gap-4 overflow-x-scroll !px-4 pl-0 md:grid md:gap-0 md:overflow-x-auto md:!px-0",
                      children: Object.values(o).map((d, p) => {
                        const u = (g) =>
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsxs("div", {
                                className: "order-2 md:order-1 md:w-3/4",
                                children: [
                                  e.jsx("h4", {
                                    className: "mb-4 dark:text-sand-500",
                                    children: g.title,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "strong-purple pr-2 dark:text-sand-500",
                                    children: e.jsx(R, {
                                      children: g.description,
                                    }),
                                  }),
                                ],
                              }),
                              e.jsx("img", {
                                src: g.image,
                                className:
                                  "order-1 mb-4 max-h-[80%] w-32 transform md:absolute md:right-0 md:top-1/2 md:order-2 md:mb-0 md:w-40 md:-translate-y-1/2 md:px-4 lg:max-h-full lg:w-1/4 xl:h-4/5 xl:w-auto",
                                alt: "work logo",
                              }),
                            ],
                          });
                        return e.jsx(
                          "li",
                          {
                            className:
                              "hover-image-grow border-gradient-multiple relative min-w-[70vw] overflow-hidden whitespace-normal !rounded-none before:!rounded-none before:!px-0 before:!pb-0.5 before:!pt-0 md:min-w-min",
                            children: d.externalLink
                              ? e.jsx("a", {
                                  className:
                                    "flex flex-col pb-8 transition-all duration-500 md:flex-row md:items-center md:justify-between md:py-8 lg:cursor-none hover:lg:py-16",
                                  href: d.link,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: u(d),
                                })
                              : e.jsx(K, {
                                  to: S.labsProjects,
                                  className:
                                    "flex flex-col pb-8 transition-all duration-500 md:flex-row md:items-center md:justify-between md:py-8 lg:cursor-none hover:lg:py-16",
                                  children: u(d),
                                }),
                          },
                          p
                        );
                      }),
                    }),
                  ],
                }),
              }),
              e.jsx(x.div, {
                className: "absolute inset-0 z-999 dark:bg-black-500",
                initial: { inset: 0 },
                whileInView: { inset: "0 0 0 100%" },
                viewport: { once: !0 },
                transition: { duration: 1.5 },
              }),
            ],
          }),
        }),
        e.jsxs("section", {
          className:
            "contributors relative flex flex-wrap py-20 dark:bg-black-700 md:my-32 md:overflow-x-visible md:py-0 dark:md:bg-transparent lg:my-44 xl:my-56",
          children: [
            e.jsx("img", {
              src: tt,
              alt: "Angle blob",
              className:
                "absolute inset-[4.1667%] top-1/2 z-[-1] mb-8 w-11/12 -translate-y-1/2 transform xl:inset-1/4 xl:w-1/2",
            }),
            e.jsxs("div", {
              className:
                "container-lg relative flex w-full flex-wrap items-center justify-between",
              children: [
                e.jsxs("div", {
                  className:
                    "top-24 mb-8 w-full self-start lg:sticky lg:mb-0 lg:w-5/12 lg:!pr-24",
                  children: [
                    e.jsxs("h2", {
                      className: "mb-6 flex flex-col font-bold",
                      children: [
                        e.jsx(x.span, {
                          initial: { opacity: 0 },
                          whileInView: { opacity: 1 },
                          viewport: { once: !0, amount: 0.5 },
                          transition: {
                            delay: 0,
                            duration: 0.4,
                            ease: "easeInOut",
                          },
                          className:
                            "leading-none dark:text-purple-500 lg:text-[2.2vw] xl:text-4xl",
                          children: a("Angle Labs Contributors"),
                        }),
                        e.jsx(x.span, {
                          initial: { opacity: 0 },
                          whileInView: { opacity: 1 },
                          viewport: { once: !0, amount: 0.5 },
                          transition: {
                            delay: 0.2,
                            duration: 0.4,
                            ease: "easeInOut",
                          },
                          className:
                            "leading-none dark:text-peach-500 lg:text-[2.2vw] xl:text-4xl",
                          children: a("Angle Labs Contributors"),
                        }),
                        e.jsx(x.span, {
                          initial: { opacity: 0 },
                          whileInView: { opacity: 1 },
                          viewport: { once: !0, amount: 0.5 },
                          transition: {
                            delay: 0.4,
                            duration: 0.4,
                            ease: "easeInOut",
                          },
                          className:
                            "leading-none dark:text-blue-500 lg:text-[2.2vw] xl:text-4xl",
                          children: a("Angle Labs Contributors"),
                        }),
                      ],
                    }),
                    e.jsx(x.h3, {
                      initial: { opacity: 0, y: "10px" },
                      whileInView: { opacity: 1, y: "0" },
                      viewport: { once: !0, amount: 0.5 },
                      transition: {
                        delay: 0.6,
                        duration: 0.6,
                        ease: "easeInOut",
                      },
                      className: "h4 dark:text-sand-500",
                      children: a(
                        "The team is made of engineers, developers, blockchain experts and creative people, specializing in the research and development of financial applications on blockchains."
                      ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "excluded w-full lg:w-7/12 xl:pr-24",
                  children: [
                    e.jsxs("ul", {
                      className:
                        "mb-8 flex list-none grid-cols-12 gap-4 overflow-x-scroll !px-4 pl-0 md:grid md:overflow-x-auto md:!px-12 lg:!px-0",
                      children: [
                        Object.values(A)
                          .filter((d) => d.coFounder === !0)
                          .map((d, p) => {
                            var g, B;
                            const u = { transitionDelay: `${p * 0.2}s` };
                            return e.jsxs(
                              "li",
                              {
                                style: u,
                                className:
                                  "contributor delay relative col-span-3 min-w-[50vw] overflow-hidden whitespace-normal md:min-w-min",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "contributor-overlay absolute inset-0 hidden flex-col justify-end p-3 lg:flex",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text font-bold dark:text-sand-500",
                                        children: d.name,
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-xs font-bold dark:text-sand-500",
                                        children: d.jobTitle,
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-sm font-bold dark:text-black-200",
                                        children: d.studies,
                                      }),
                                      e.jsxs("div", {
                                        className: "mt-1 flex gap-2",
                                        children: [
                                          ((g = d.twitterLink) == null
                                            ? void 0
                                            : g.length) > 0 &&
                                            e.jsx("a", {
                                              className:
                                                "dim inline-flex items-center",
                                              href: d.twitterLink,
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              "aria-label": "X/Twitter account",
                                              children: e.jsxs("svg", {
                                                className:
                                                  "w-3 fill-current dark:text-purple-500",
                                                viewBox: "0 0 33 31",
                                                fill: "none",
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                children: [
                                                  e.jsx("title", {
                                                    children: "X",
                                                  }),
                                                  e.jsx("path", {
                                                    d: "M0.423559 0.581665L12.6799 16.8912L0.346313 30.1517H3.12233L13.9206 18.5417L22.6451 30.1517H32.0913L19.1451 12.9249L30.6252 0.581665H27.8492L17.9049 11.2739L9.86981 0.581665H0.423559ZM4.50582 2.61652H8.84538L28.0085 28.1168H23.6689L4.50582 2.61652Z",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ((B = d.linkedinLink) == null
                                            ? void 0
                                            : B.length) > 0 &&
                                            e.jsx("a", {
                                              className:
                                                "dim inline-flex items-center",
                                              href: d.linkedinLink,
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              "aria-label": "Linkedin account",
                                              children: e.jsx(Fe, {
                                                className:
                                                  "small dark:text-purple-500",
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("img", {
                                    src: d.image,
                                    className: "rounded-md",
                                    alt: d.name,
                                  }),
                                ],
                              },
                              p
                            );
                          }),
                        e.jsx("li", {
                          className: "col-span-3 hidden md:block",
                        }),
                        Object.values(A)
                          .filter((d) => d.coFounder === !1)
                          .map((d, p) => {
                            var g, B;
                            const u = { transitionDelay: `${p * 0.2}s` };
                            return e.jsxs(
                              "li",
                              {
                                style: u,
                                className:
                                  "contributor delay relative col-span-2 min-w-[50vw] overflow-hidden whitespace-normal md:min-w-min",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "contributor-overlay absolute inset-0 hidden flex-col justify-end p-3 lg:flex",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-sm font-bold dark:text-sand-500",
                                        children: d.name,
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-xs font-bold dark:text-sand-500",
                                        children: d.jobTitle,
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-sm font-bold dark:text-black-200",
                                        children: d.studies,
                                      }),
                                      e.jsxs("div", {
                                        className: "mt-1 flex gap-2",
                                        children: [
                                          ((g = d.twitterLink) == null
                                            ? void 0
                                            : g.length) > 0 &&
                                            e.jsx("a", {
                                              className:
                                                "dim inline-flex items-center",
                                              href: d.twitterLink,
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              children: e.jsxs("svg", {
                                                className:
                                                  "w-3 fill-current dark:text-purple-500",
                                                viewBox: "0 0 33 31",
                                                fill: "none",
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                children: [
                                                  e.jsx("title", {
                                                    children: "X",
                                                  }),
                                                  e.jsx("path", {
                                                    d: "M0.423559 0.581665L12.6799 16.8912L0.346313 30.1517H3.12233L13.9206 18.5417L22.6451 30.1517H32.0913L19.1451 12.9249L30.6252 0.581665H27.8492L17.9049 11.2739L9.86981 0.581665H0.423559ZM4.50582 2.61652H8.84538L28.0085 28.1168H23.6689L4.50582 2.61652Z",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ((B = d.linkedinLink) == null
                                            ? void 0
                                            : B.length) > 0 &&
                                            e.jsx("a", {
                                              className: "dim inline-block",
                                              href: d.linkedinLink,
                                              target: "_blank",
                                              rel: "noopener noreferrer",
                                              children: e.jsx(Fe, {
                                                className:
                                                  "small dark:text-purple-500",
                                              }),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("img", {
                                    src: d.image,
                                    className: "rounded-md",
                                    alt: d.name,
                                  }),
                                ],
                              },
                              p
                            );
                          }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "px-4 md:px-12 lg:px-0",
                      children: [
                        e.jsx(x.h3, {
                          initial: { opacity: 0, y: "20px" },
                          whileInView: { opacity: 1, y: 0 },
                          transition: {
                            type: "spring",
                            damping: 10,
                            stiffness: 100,
                            duration: 0.3,
                          },
                          viewport: { once: !0, amount: 0.5 },
                          className: "mb-4 dark:text-sand-500",
                          children: a("Contribute and join us"),
                        }),
                        e.jsx(x.p, {
                          initial: { opacity: 0, y: "20px" },
                          whileInView: { opacity: 1, y: 0 },
                          transition: {
                            delay: 0.2,
                            type: "spring",
                            damping: 10,
                            stiffness: 100,
                            duration: 0.3,
                          },
                          viewport: { once: !0, amount: 0.5 },
                          className:
                            "mb-4 dark:text-sand-500 lg:w-4/5 xl:w-2/3",
                          children: a(
                            "Join us in our mission to shape the future of finance. We're a small and agile team consistently building at the forefront of DeFi. Check our open positions, or apply spontaneously: we're always looking for the most talented individuals to come build with us."
                          ),
                        }),
                        e.jsxs(x.div, {
                          initial: { opacity: 0, y: "20px" },
                          whileInView: { opacity: 1, y: 0 },
                          transition: {
                            delay: 0.4,
                            type: "spring",
                            damping: 10,
                            stiffness: 100,
                          },
                          viewport: { once: !0, amount: 0.5 },
                          className: "relative flex gap-4 lg:w-4/5 xl:w-2/3",
                          children: [
                            e.jsx("a", {
                              className:
                                "flex cursor-none items-center justify-between",
                              href: C.angleJobs,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: e.jsx(k, {
                                type: "button",
                                look: "primary",
                                children: a("See open positions"),
                              }),
                            }),
                            e.jsx("a", {
                              className:
                                "z-1 flex cursor-none items-center justify-between dark:bg-black-700",
                              href: C.angleLinkedin,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: e.jsx(k, {
                                type: "button",
                                look: "secondary",
                                children: a("Connect on Linkedin"),
                              }),
                            }),
                            e.jsx(x.img, {
                              initial: { opacity: 0 },
                              whileInView: { opacity: 1 },
                              transition: {
                                delay: 0.8,
                                type: "spring",
                                damping: 10,
                                stiffness: 100,
                              },
                              viewport: { once: !0, amount: 0.3 },
                              src: it,
                              alt: "OK",
                              className:
                                "absolute right-8 top-8 w-24 rotate-12",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs("section", {
          className:
            "backers my-28 overflow-x-hidden md:my-32 lg:my-44 lg:overflow-x-visible",
          children: [
            e.jsx("div", {
              className: "container flex flex-wrap items-center",
              children: e.jsxs("div", {
                className: "mb-6 w-full md:mb-8",
                children: [
                  e.jsx(x.h2, {
                    initial: { opacity: 0, y: "50px" },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { type: "spring", damping: 10, stiffness: 100 },
                    viewport: { once: !0, amount: 0.3 },
                    className: "h5 mb-2 dark:text-peach-500",
                    children: a("Investors"),
                  }),
                  e.jsx(x.h3, {
                    initial: { opacity: 0, y: "50px" },
                    whileInView: { opacity: 1, y: 0 },
                    transition: {
                      delay: 0.2,
                      type: "spring",
                      damping: 10,
                      stiffness: 100,
                    },
                    viewport: { once: !0, amount: 0.3 },
                    className: "h1 dark:text-sand-500",
                    children: a("Backed by the best"),
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "container-lg",
              children: e.jsx(x.div, {
                variants: c,
                initial: "hidden",
                whileInView: "show",
                viewport: { once: !0, amount: 0.5 },
                className:
                  "mb-4 flex gap-3 overflow-x-scroll md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6 lg:overflow-x-auto xl:grid-cols-8",
                children: Object.values(Ve)
                  .filter((d) => d.category === _.INVESTORS)
                  .map((d, p) =>
                    e.jsxs(
                      x.a,
                      {
                        variants: h,
                        href: d.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "dim partner--link relative flex h-28 min-w-[40%] items-center justify-center rounded-md bg-black-700 p-6 md:h-36 md:w-auto md:min-w-min",
                        children: [
                          e.jsx("img", {
                            className: `${
                              d == null ? void 0 : d.className
                            } partner-logo max-h-[80%] w-auto min-w-[60px] max-w-[80%]`,
                            src: d.logo,
                            alt: "partner logo",
                          }),
                          (d == null ? void 0 : d.name) &&
                            e.jsx("p", {
                              className:
                                "ease absolute bottom-0 left-1/2 w-full -translate-x-1/2 transform px-4 text-center font-bold opacity-0",
                              children: d == null ? void 0 : d.name,
                            }),
                        ],
                      },
                      p
                    )
                  ),
              }),
            }),
          ],
        }),
        e.jsx("section", {
          className: "get-in-touch my-20 md:my-32 lg:my-44",
          children: e.jsxs("div", {
            className: "container flex flex-col items-center",
            children: [
              e.jsx("div", {
                className: "mb-8 h-20 overflow-hidden",
                children: e.jsxs(x.svg, {
                  initial: { opacity: 0, y: "-75%" },
                  whileInView: { opacity: 1, y: "0" },
                  transition: { duration: 2 },
                  id: "arrow-touch",
                  width: "24",
                  height: "69",
                  viewBox: "0 0 24 69",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    e.jsx("title", { children: "Arrow" }),
                    e.jsx("path", {
                      d: "M10.9393 68.0607C11.5251 68.6464 12.4749 68.6464 13.0607 68.0607L22.6066 58.5147C23.1924 57.9289 23.1924 56.9792 22.6066 56.3934C22.0208 55.8076 21.0711 55.8076 20.4853 56.3934L12 64.8787L3.51472 56.3934C2.92893 55.8076 1.97918 55.8076 1.3934 56.3934C0.807609 56.9792 0.807609 57.9289 1.3934 58.5147L10.9393 68.0607ZM10.5 -6.55671e-08L10.5 67L13.5 67L13.5 6.55671e-08L10.5 -6.55671e-08Z",
                      fill: "url(#paint0_linear_7322_74477)",
                    }),
                    e.jsx("defs", {
                      children: e.jsxs("linearGradient", {
                        id: "paint0_linear_7322_74477",
                        x1: "11.5",
                        y1: "0.000502195",
                        x2: "11.5",
                        y2: "67",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          e.jsx("stop", { stopColor: "#FAF1E7" }),
                          e.jsx("stop", {
                            offset: "0.26021",
                            stopColor: "#FDCEAA",
                          }),
                          e.jsx("stop", {
                            offset: "0.61201",
                            stopColor: "#F4837D",
                          }),
                          e.jsx("stop", {
                            offset: "0.9999",
                            stopColor: "#B9AAFD",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              e.jsx(x.h3, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { delay: 0.3, duration: 2, ease: "easeOut" },
                viewport: { once: !0, amount: 0.3 },
                className: "h5 mb-2 text-center dark:text-sand-500",
                children: a("Get in touch"),
              }),
              e.jsx(x.h2, {
                initial: { opacity: 0, transform: "scale(0.75)" },
                whileInView: { opacity: 1, transform: "scale(1)" },
                transition: { delay: 0.6, duration: 2, ease: "easeOut" },
                viewport: { once: !0, amount: 0.3 },
                className:
                  "display0 mb-4 ml-3 text-center uppercase !tracking-widest text-stroke dark:text-sand-500",
                children: a("Let's build together!"),
              }),
              e.jsx(x.h6, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { delay: 1, duration: 2, ease: "easeOut" },
                viewport: { once: !0, amount: 0.3 },
                className: "h6 dark:text-sand-500",
                children: e.jsxs(e.Fragment, {
                  children: [
                    a("Send us "),
                    e.jsx("a", {
                      href: "mailto:contact@angle.money",
                      className: "dim dark:text-purple-500",
                      target: "_blank",
                      rel: "noreferrer noopener",
                      children: a("a mail "),
                    }),
                    a("or simply "),
                    e.jsx("a", {
                      className: "dim dark:text-purple-500",
                      href: C.angleDiscord,
                      target: "_blank",
                      rel: "noreferrer noopener",
                      children: a("join our Telegram"),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  gA = "/assets/angle-tools-217febdb.svg",
  mA = "/assets/boilerplate-39457faf.svg",
  Pa = "/assets/carbon-neutral-impact-7fb45b1a.svg",
  Ua = "/assets/fleeced-76d7ab26.svg",
  Ra = "/assets/portfolio-simulation-cf8358dc.svg",
  pA = ({
    title: a,
    description: t,
    image: i,
    route: s,
    gridDisplay: o = !1,
    btnText: A,
    style: n,
    external: r = !1,
  }) =>
    r
      ? e.jsxs("a", {
          href: s,
          target: "_blank",
          rel: "noopener noreferrer",
          style: n,
          className: `lab-project-card hover:border-gradient-multiple border-gradient-blue500-green500 grid min-h-[250px] min-w-[80vw] grid-cols-1 overflow-hidden !rounded-3xl border-transparent before:rounded-3xl before:!p-[3px] after:rounded-3xl after:!p-[3px] md:min-h-[300px] md:min-w-[60vw] md:grid-cols-3 ${
            o ? "" : "lg:w-1/2"
          } lg:min-w-0`,
          children: [
            e.jsx("div", {
              className:
                "col-span-1 flex flex-col items-center justify-center p-8 dark:bg-black-700",
              children: e.jsx("img", {
                src: i,
                className: "mx-auto h-20 w-auto md:h-auto",
                alt: "Lab project",
              }),
            }),
            e.jsxs("div", {
              className:
                "flex flex-col items-start justify-center whitespace-normal p-8 md:col-span-2",
              children: [
                e.jsx("h3", {
                  className: "mb-3 dark:text-purple-500",
                  children: a,
                }),
                e.jsx("p", {
                  className: "mb-6 dark:text-black-200",
                  children: t,
                }),
                e.jsx("div", {
                  className:
                    "border-gradient-peach500-purple500-blue500 inline-block pb-1 before:!rounded-none before:!px-0 before:!pt-0",
                  children: A,
                }),
              ],
            }),
          ],
        })
      : e.jsxs(K, {
          to: s,
          style: n,
          className: `lab-project-card hover:border-gradient-multiple border-gradient-blue500-green500 grid min-h-[250px] min-w-[80vw] grid-cols-1 overflow-hidden !rounded-3xl border-transparent before:rounded-3xl before:!p-[3px] after:rounded-3xl after:!p-[3px] md:min-h-[300px] md:min-w-[60vw] md:grid-cols-3 ${
            o ? "" : "lg:w-1/2"
          } lg:min-w-0`,
          children: [
            e.jsx("div", {
              className:
                "col-span-1 flex flex-col items-center justify-center p-8 dark:bg-black-700",
              children: e.jsx("img", {
                src: i,
                className: "mx-auto h-20 w-auto md:h-auto",
                alt: "Lab project",
              }),
            }),
            e.jsxs("div", {
              className:
                "flex flex-col items-start justify-center whitespace-normal p-8 md:col-span-2",
              children: [
                e.jsx("h3", {
                  className: "mb-3 dark:text-purple-500",
                  children: a,
                }),
                e.jsx("p", {
                  className: "mb-6 dark:text-black-200",
                  children: t,
                }),
                e.jsx("div", {
                  className:
                    "border-gradient-peach500-purple500-blue500 inline-block pb-1 before:!rounded-none before:!px-0 before:!pt-0",
                  children: A,
                }),
              ],
            }),
          ],
        }),
  xA = [
    {
      title: "Solidity Boilerplate",
      description:
        "Start building Solidity projects in a sec with all the necessary tools and dependencies already installed.",
      image: mA,
      route: "https://github.com/AngleProtocol/boilerplate",
      featured: !1,
      external: !0,
      btnText: "Check the repository",
    },
    {
      title: "Impermanent Loss Simulator",
      description:
        "Compare what would happen after investing your portfolio in an AMM or simply holding your liquidity.",
      image: Ra,
      route: S.portfolioSimulation,
      featured: !0,
      btnText: "Learn more",
    },
    {
      title: "Carbon Impact Calculator",
      description:
        "A simple page to estimate the environmental impact of your Ethereum addresses.",
      image: Pa,
      route: S.carbonImpact,
      featured: !0,
      btnText: "Learn more",
    },
    {
      title: "Lost Yield Calculator",
      description:
        "A page to estimate the yield an address could have received by holding Angle's stUSD instead of USDC and USDT.",
      image: Ua,
      route: S.savingsLossAnalyzer,
      featured: !0,
      btnText: "Learn more",
    },
  ].reverse(),
  uA = () => {
    const { t: a } = q();
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("section", {
          className:
            "container flex flex-wrap items-center pt-16 md:pt-24 lg:pt-28",
          children: [
            e.jsxs("div", {
              className: "mb-8 mt-8 w-full md:mb-0 md:w-1/2",
              children: [
                e.jsx("h1", {
                  className: "display1 mb-4 dark:text-sand-500 md:mb-8",
                  children: a("labsprojects.title"),
                }),
                e.jsx("h2", {
                  className: "dark:text-sand-500",
                  children: a("labsprojects.headerdescription"),
                }),
              ],
            }),
            e.jsx("div", {
              className: "w-full md:w-1/2",
              children: e.jsx("img", {
                className: "mx-auto w-1/2 xl:w-2/5",
                src: gA,
                alt: "angle tools",
              }),
            }),
          ],
        }),
        e.jsx("section", {
          className: "container-lg mb-12 mt-16",
          children: e.jsx("div", {
            className:
              "flex w-full gap-4 overflow-x-scroll whitespace-nowrap lg:grid lg:grid-cols-2 lg:overflow-x-visible lg:whitespace-normal",
            children: Object.values(xA).map((t, i) =>
              e.jsx(
                pA,
                {
                  description: t.description,
                  image: t.image,
                  route: t.route,
                  title: t.title,
                  gridDisplay: !0,
                  btnText: t.btnText,
                  external: t == null ? void 0 : t.external,
                },
                i
              )
            ),
          }),
        }),
      ],
    });
  };
var _e = {},
  fA = Se;
Object.defineProperty(_e, "__esModule", { value: !0 });
var $e = (_e.default = void 0),
  kA = fA(Qe()),
  bA = e;
$e = _e.default = (0, kA.default)(
  (0, bA.jsx)("path", {
    d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z",
  }),
  "ArrowBackSharp"
);
const hA = "/assets/american-28b157ed.svg",
  wA = "/assets/plane-114b4ce3.svg",
  yA = "/assets/router-babafea1.svg",
  BA = () => {
    var d;
    l.useEffect(() => {
      let p = 0;
      const u = [];
      for (var g = 0; g <= 300; g++) u.push(g);
      function B() {
        const D =
            "M" +
            u
              .map((N) => {
                const E = 10 * Math.cos((N - p) / 10) + 30;
                return [N, E];
              })
              .map((N) => N[0] + "," + N[1])
              .join(" L"),
          w = document.querySelector(".animated-wave path");
        w && (w.setAttribute("d", D), (p -= 0.2), requestAnimationFrame(B));
      }
      B();
    }, []);
    const a = 16,
      t = 0.82,
      i = 150,
      { t: s } = q(),
      [o, A] = l.useState(null),
      [n, r] = l.useState(null),
      [c, h] = l.useState(null);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("section", {
          className: "container mb-8 pt-20 md:pt-24",
          children: [
            e.jsx(K, {
              to: S.labsProjects,
              className:
                "font-bold border-gradient-peach500-purple500-blue500 dim mb-4 mt-2 inline-flex items-center pb-1 before:!rounded-none before:!px-0 before:!pt-0 md:mb-6",
              children: e.jsxs(e.Fragment, {
                children: [
                  e.jsx($e, { className: "small mr-1" }),
                  s("labsprojects.back"),
                ],
              }),
            }),
            e.jsxs("div", {
              className: "flex flex-wrap items-center",
              children: [
                e.jsx("div", {
                  className: "order-2 flex w-full md:order-1 md:w-1/3",
                  children: e.jsx("img", {
                    className: "w-1/3 md:mx-auto md:w-1/2 xl:w-1/3",
                    src: Pa,
                    alt: "carbon impact",
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "order-1 mb-4 w-full md:order-2 md:mb-8 md:w-2/3 lg:mb-0",
                  children: [
                    e.jsxs("h1", {
                      className: "display1 dark:text-green-500",
                      children: [
                        s("labsprojects.carbonimpact.title"),
                        " ",
                        e.jsx("span", {
                          className: "dark:text-sand-500",
                          children: s("labsprojects.carbonimpact.title2"),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "animated-wave w-96 md:mt-4",
                      children: e.jsx("svg", {
                        className: "stroke-current dark:text-green-500",
                        children: e.jsx("path", { d: "", strokeWidth: "3" }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs("main", {
          children: [
            e.jsxs("section", {
              className: "container mb-12",
              children: [
                e.jsxs("div", {
                  className:
                    "relative z-1 mx-auto w-full rounded-md p-6 dark:bg-black-400 md:rounded-full md:px-12 md:py-8 lg:w-2/3 lg:px-20 lg:py-12 xl:w-1/2",
                  children: [
                    e.jsx("h5", {
                      className: "mb-3 dark:text-green-500",
                      children: s("labsprojects.carbonimpact.estimate"),
                    }),
                    e.jsxs("div", {
                      className: "flex flex-wrap items-stretch",
                      children: [
                        e.jsx(ie.Address, {
                          className:
                            "large mr-4 flex-1 text-sm font-bold tracking-wider dark:bg-black-500 dark:text-black-100",
                          onChange: (p) => {
                            oe(p) ? A(p) : A(null);
                          },
                        }),
                        e.jsx(k, {
                          type: "button",
                          size: "large",
                          look: "primary",
                          disabled: !o || n === "loading",
                          onClick: async () => {
                            r("loading");
                            try {
                              const p = await M.get(
                                `${
                                  {
                                    REACT_APP_PAGE: "landing",
                                    npm_package_dependencies__web3_onboard_walletconnect:
                                      "2.6.1",
                                    npm_package_devDependencies__types_node:
                                      "^16.7.10",
                                    npm_package_dependencies__vitejs_plugin_react:
                                      "^4.1.0",
                                    npm_package_dependencies__types_react_router:
                                      "^5.1.18",
                                    npm_package_dependencies__layerzerolabs_scan_client:
                                      "^0.0.0-beta.6",
                                    npm_package_devDependencies__types_qs:
                                      "^6.9.7",
                                    npm_package_dependencies_react_dnd_html5_backend:
                                      "^16.0.1",
                                    npm_package_dependencies_hex_to_rgba:
                                      "^2.0.1",
                                    npm_package_dependencies__web3_onboard_metamask:
                                      "2.1.2",
                                    npm_package_dependencies__svgr_rollup:
                                      "^8.1.0",
                                    npm_package_devDependencies_rc_pagination:
                                      "^4.0.4",
                                    npm_config_version_commit_hooks: "true",
                                    npm_config_user_agent:
                                      "yarn/1.22.19 npm/? node/v21.7.1 linux x64",
                                    npm_package_dependencies_graphql_request:
                                      "^4.3.0",
                                    npm_package_dependencies_glslCanvas:
                                      "^0.2.6",
                                    npm_package_dependencies__rollup_plugin_inject:
                                      "^5.0.5",
                                    npm_package_devDependencies_graphql:
                                      "^15.6.1",
                                    npm_package_devDependencies_copy_to_clipboard:
                                      "^3.2.0",
                                    npm_package_devDependencies_buffer:
                                      "^6.0.3",
                                    npm_config_bin_links: "true",
                                    npm_node_execpath: "/usr/local/bin/node",
                                    npm_package_scripts_deploy_preview:
                                      "chmod +x ./scripts/publishAndDeploy.sh && ./scripts/publishAndDeploy.sh",
                                    npm_config_init_version: "1.0.0",
                                    SHLVL: "3",
                                    npm_package_dependencies_keccak256:
                                      "^1.0.6",
                                    npm_package_dependencies__web3_onboard_gnosis:
                                      "^2.3.1",
                                    npm_package_dependencies__web3_onboard_core:
                                      "^2.22.2",
                                    REACT_APP_ANALYTICS_API:
                                      "https://exporter.angle.money",
                                    PORT: "3000",
                                    npm_package_browserslist_production_0:
                                      ">0.2%",
                                    npm_package_dependencies_url: "^0.11.0",
                                    npm_package_dependencies__types_bun:
                                      "^1.1.3",
                                    npm_package_devDependencies_sass: "^1.69.5",
                                    npm_package_browserslist_production_1:
                                      "not dead",
                                    npm_package_scripts_notion:
                                      "node src/pages/blog/index.tsx",
                                    npm_package_dependencies_react_syntax_highlighter:
                                      "^15.5.0",
                                    npm_package_devDependencies_stream_browserify:
                                      "^3.0.0",
                                    npm_package_devDependencies_jazzicon:
                                      "^1.5.0",
                                    npm_package_devDependencies__mui_icons_material:
                                      "^5.5.1",
                                    npm_package_browserslist_production_2:
                                      "not op_mini all",
                                    npm_package_dependencies_framer_motion:
                                      "10.18.0",
                                    npm_package_devDependencies__emotion_styled:
                                      "^11.10.5",
                                    npm_config_init_license: "MIT",
                                    NODE_OPTIONS: "--max-old-space-size=8912",
                                    YARN_WRAP_OUTPUT: "false",
                                    npm_package_devDependencies__biomejs_biome:
                                      "^1.8.1",
                                    npm_config_version_tag_prefix: "v",
                                    npm_config__angleprotocol_registry:
                                      "https://npm.pkg.github.com",
                                    npm_package_scripts_serve:
                                      "bun run start.config.ts serve",
                                    npm_package_dependencies_react_icons:
                                      "^4.3.1",
                                    npm_package_devDependencies_util: "^0.12.4",
                                    npm_package_devDependencies_os_browserify:
                                      "^0.3.0",
                                    npm_package_dependencies_moment: "^2.29.4",
                                    npm_package_dependencies_dayjs: "^1.10.6",
                                    npm_package_devDependencies__pinata_sdk:
                                      "^1.1.26",
                                    npm_package_dependencies_apollo_cache_inmemory:
                                      "^1.6.6",
                                    npm_package_dependencies_antd: "^4.24.6",
                                    npm_package_dependencies__apollo_client:
                                      "^3.4.11",
                                    npm_package_devDependencies_typescript:
                                      "^5.2.2",
                                    npm_package_devDependencies_tailwindcss:
                                      "3.4.1",
                                    npm_package_description: "Angle DApp",
                                    npm_package_scripts_check_format:
                                      "biome format ./src",
                                    npm_package_dependencies_jsbi: "^4.3.0",
                                    npm_package_dependencies_ipfs_http_client:
                                      "^60.0.1",
                                    npm_package_devDependencies_react:
                                      "^18.2.0",
                                    npm_package_devDependencies__types_react_dom:
                                      "18.0.8",
                                    npm_package_homepage: "http://.",
                                    npm_package_scripts_start_https:
                                      "HTTPS=true vite --open",
                                    npm_package_dependencies_react_dnd:
                                      "^16.0.1",
                                    npm_package_dependencies_numbro: "^2.3.6",
                                    npm_package_dependencies_echarts_for_react:
                                      "^3.0.2",
                                    npm_package_devDependencies_prettier:
                                      "^2.6.2",
                                    npm_package_devDependencies_i18next_fs_backend:
                                      "^2.3.0",
                                    npm_package_devDependencies__playwright_test:
                                      "^1.46.1",
                                    npm_package_dependencies_idb_keyval:
                                      "^6.2.1",
                                    npm_package_type: "module",
                                    npm_package_devDependencies_vite_plugin_node_polyfills:
                                      "^0.21.0",
                                    npm_package_devDependencies_autoprefixer:
                                      "^10.4.16",
                                    npm_package_private: "true",
                                    REACT_APP_MERKL_API:
                                      "https://api.merkl.xyz",
                                    npm_package_scripts_lint:
                                      "biome check --apply ./src",
                                    npm_package_devDependencies_postcss_import:
                                      "^14.0.2",
                                    npm_config_registry:
                                      "https://registry.yarnpkg.com",
                                    npm_package_dependencies_cli: "^1.0.1",
                                    npm_package_devDependencies_stream_http:
                                      "^3.2.0",
                                    npm_package_devDependencies_i18next_xhr_backend:
                                      "^3.2.2",
                                    npm_package_devDependencies__types_testing_library__cypress:
                                      "5.0.9",
                                    npm_package_scripts_start:
                                      "bun run start.config.ts start",
                                    npm_package_include_0: "src",
                                    npm_package_devDependencies_vite_bundle_visualizer:
                                      "^0.11.0",
                                    npm_package_devDependencies_react_parallax_tilt:
                                      "^1.7.81",
                                    npm_package_devDependencies_process:
                                      "^0.11.10",
                                    npm_config_ignore_scripts: "",
                                    npm_package_browserslist_development_0:
                                      "last 1 chrome version",
                                    npm_package_include_1: "types/svg.d.ts",
                                    npm_package_dependencies_recharts:
                                      "^2.1.16",
                                    npm_package_dependencies_axios: "^0.27.2",
                                    npm_package_dependencies__angleprotocol_sdk:
                                      "v2.34.1",
                                    npm_package_devDependencies_tsc_silent:
                                      "^1.2.2",
                                    npm_package_devDependencies_prettier_plugin_tailwindcss:
                                      "^0.1.10",
                                    npm_package_devDependencies_ethers:
                                      "^5.7.2",
                                    PATH: "/tmp/yarn--1733135353041-0.9796200937120694:/app/node_modules/.bin:/usr/local/share/.config/yarn/link/node_modules/.bin:/usr/local/bin:/usr/local/libexec/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/lib/node_modules/npm/bin/node-gyp-bin:/usr/local/bin/node_modules/npm/bin/node-gyp-bin",
                                    NODE: "/usr/local/bin/node",
                                    npm_package_browserslist_development_1:
                                      "last 1 firefox version",
                                    npm_package_dependencies_unimported:
                                      "^1.31.1",
                                    npm_package_name: "@angleprotocol/app",
                                    npm_package_browserslist_development_2:
                                      "last 1 safari version",
                                    npm_package_scripts_integration_test:
                                      "start-server-and-test 'serve build -l 3000' http://localhost:3000 'cypress run'",
                                    npm_package_scripts_analyze:
                                      "ANALYZE_BUNDLE=1 yarn build",
                                    npm_package_dependencies__safe_global_safe_apps_provider:
                                      "^0.18.0",
                                    npm_package_scripts_eject:
                                      "react-app-rewired eject",
                                    npm_package_dependencies_echarts: "^5.4.3",
                                    npm_package_dependencies_react_intersection_observer:
                                      "^9.5.3",
                                    npm_package_devDependencies_react_i18next:
                                      "^11.11.4",
                                    RAW: "",
                                    npm_package_dependencies_react_markdown:
                                      "^8.0.2",
                                    npm_package_devDependencies_rollup_plugin_auto_external:
                                      "^2.0.0",
                                    npm_package_devDependencies_node: "^21.1.0",
                                    npm_package_main: "src/entry.client.tsx",
                                    npm_package_scripts_test:
                                      "react-app-rewired test --env=jsdom",
                                    npm_package_dependencies_chalk: "^5.3.0",
                                    npm_package_devDependencies_react_scripts:
                                      "5.0.1",
                                    npm_package_devDependencies_react_router_dom:
                                      "^6.11.2",
                                    npm_package_devDependencies_react_latex:
                                      "^2.0.0",
                                    npm_package_devDependencies_qs: "^6.9.4",
                                    npm_package_devDependencies_i18next:
                                      "^21.2.0",
                                    npm_package_devDependencies_flat: "^5.0.2",
                                    npm_config_version_git_message: "v%s",
                                    npm_lifecycle_event: "vite",
                                    npm_package_version: "",
                                    npm_package_dependencies_unstorage:
                                      "^1.10.1",
                                    npm_package_dependencies__types_react_router_hash_link:
                                      "^2.4.5",
                                    npm_package_dependencies__shopify_react_web_worker:
                                      "^5.0.15",
                                    npm_package_dependencies__esbuild_plugins_node_globals_polyfill:
                                      "^0.2.3",
                                    npm_package_devDependencies_react_router_hash_link:
                                      "^2.4.3",
                                    npm_package_devDependencies_assert:
                                      "^2.0.0",
                                    npm_package_devDependencies__types_react:
                                      "^18.0.24",
                                    BUILD_DIRECTORY: "build/landing",
                                    npm_config_argv:
                                      '{"remain":[],"cooked":["run","vite"],"original":["run","vite","build","--mode","ssr","--outDir","build/landing/client","--ssrManifest"]}',
                                    npm_package_scripts_generate_types:
                                      "typechain --target ethers-v5 --out-dir src/constants/contracts 'src/constants/*.abi'",
                                    npm_package_scripts_build:
                                      "bun run start.config.ts build",
                                    npm_package_devDependencies_crypto_browserify:
                                      "^3.12.0",
                                    npm_package_config_commitizen_path:
                                      "./node_modules/cz-conventional-changelog",
                                    npm_package_dependencies_vite: "^4.5.0",
                                    npm_package_dependencies_puppeteer:
                                      "13.5.0",
                                    npm_package_dependencies_lodash: "^4.17.21",
                                    npm_package_dependencies__web3_onboard_react:
                                      "2.9.2",
                                    npm_package_dependencies__web3_onboard_injected_wallets:
                                      "2.11.1",
                                    npm_package_devDependencies_tailwindcss_cli:
                                      "^0.1.2",
                                    npm_package_devDependencies_cypress:
                                      "^8.3.0",
                                    npm_package_devDependencies__safe_global_safe_apps_sdk:
                                      "^8.1.0",
                                    npm_package_dependencies_bnc_onboard:
                                      "1.39.1",
                                    npm_package_dependencies__lottiefiles_react_lottie_player:
                                      "^3.5.3",
                                    npm_package_devDependencies_react_app_rewired:
                                      "^2.2.1",
                                    npm_package_devDependencies_polished:
                                      "^4.1.3",
                                    npm_package_devDependencies_i18next_browser_languagedetector:
                                      "^6.1.2",
                                    npm_package_devDependencies__emotion_react:
                                      "^11.10.5",
                                    npm_config_version_git_tag: "true",
                                    npm_config_version_git_sign: "",
                                    npm_package_license: "GPL-3.0-or-later",
                                    npm_package_dependencies_immutability_helper:
                                      "^3.1.1",
                                    npm_package_devDependencies_start_server_and_test:
                                      "^1.11.0",
                                    npm_config_strict_ssl: "true",
                                    npm_package_scripts_serve_media:
                                      "REACT_APP_PAGE=media tsx ./src/utils/serve",
                                    npm_package_dependencies_vite_plugin_static_copy:
                                      "^0.17.0",
                                    npm_package_dependencies_commander:
                                      "^12.1.0",
                                    npm_package_devDependencies_tsx: "^4.1.1",
                                    npm_package_devDependencies_netlify_cli:
                                      "~6.9.6",
                                    PWD: "/app",
                                    npm_execpath:
                                      "/opt/yarn-v1.22.19/bin/yarn.js",
                                    npm_package_dependencies_object_hash:
                                      "^3.0.0",
                                    npm_package_dependencies_rebass: "^4.0.7",
                                    npm_package_dependencies__naerth_commander_autocomplete:
                                      "^0.0.9",
                                    npm_package_dependencies__mui_x_charts:
                                      "^7.7.0",
                                    npm_package_devDependencies_serve:
                                      "^12.0.0",
                                    npm_package_devDependencies_react_ga:
                                      "^3.3.0",
                                    npm_package_devDependencies_postcss:
                                      "^8.4.31",
                                    npm_package_devDependencies_https_browserify:
                                      "^1.0.0",
                                    npm_package_devDependencies__mui_material:
                                      "^5.5.3",
                                    npm_package_devDependencies__actions_core:
                                      "^1.6.0",
                                    npm_config_save_prefix: "^",
                                    npm_config_ignore_optional: "",
                                    REACT_APP_ANGLE_API:
                                      "https://api.angle.money",
                                    npm_package_devDependencies_rollup_plugin_visualizer:
                                      "^5.9.2",
                                    npm_package_devDependencies_react_redux:
                                      "^7.2.6",
                                    npm_package_scripts_check_bundle:
                                      "vite-bundle-visualizer --open",
                                    npm_package_scripts_check_lint:
                                      "biome lint ./src",
                                    npm_package_dependencies_react_use:
                                      "^17.4.0",
                                    npm_package_devDependencies__tailwindcss_line_clamp:
                                      "^0.4.2",
                                    INIT_CWD: "/app",
                                    npm_package_devDependencies_react_dom:
                                      "^18.1.0",
                                    NODE_ENV: "production",
                                  }.REACT_APP_ANGLE_CARBON
                                }?address=${o}`
                              );
                              h(p.data);
                            } catch {}
                            r(o);
                          },
                          children:
                            n === "loading"
                              ? e.jsx(Vs, { children: s("Computing") })
                              : s("labsprojects.carbonimpact.compute"),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: `border-gradient-blue500-green500 z-0 mx-4 -mt-28 flex flex-wrap px-8 pb-12 transition-all duration-1000 ease-out before:!p-3 md:mx-8 md:px-16 lg:mx-0 lg:px-24 ${
                    c && oe(o) && oe(n) && be(o) === be(n)
                      ? "max-h-[9999px] pt-32 opacity-100 md:pt-36"
                      : "max-h-0 pt-16 opacity-0 md:pt-20"
                  }`,
                  children:
                    !!c &&
                    !!oe(o) &&
                    !!oe(n) &&
                    be(o) === be(n) &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs("div", {
                          className: "w-full pr-8 lg:w-2/3 lg:pr-12",
                          children: [
                            e.jsx("h5", {
                              className: "mb-6 dark:text-black-200",
                              children: s("labsprojects.carbonimpact.result"),
                            }),
                            e.jsxs("p", {
                              className:
                                "h4 mb-6 flex flex-wrap items-center dark:text-sand-500 md:mb-8",
                              children: [
                                e.jsx("svg", {
                                  className:
                                    "mr-4 inline fill-current dark:text-green-500",
                                  width: "38",
                                  height: "24",
                                  viewBox: "0 0 38 24",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: e.jsx("path", {
                                    d: "M37.0607 13.0607C37.6464 12.4749 37.6464 11.5251 37.0607 10.9393L27.5147 1.3934C26.9289 0.807611 25.9792 0.807611 25.3934 1.3934C24.8076 1.97919 24.8076 2.92893 25.3934 3.51472L33.8787 12L25.3934 20.4853C24.8076 21.0711 24.8076 22.0208 25.3934 22.6066C25.9792 23.1924 26.9289 23.1924 27.5147 22.6066L37.0607 13.0607ZM0 13.5H36V10.5H0V13.5Z",
                                  }),
                                }),
                                e.jsx("span", {
                                  className: "mr-1 dark:text-peach-500",
                                  children: c.powData.tx,
                                }),
                                s("PoW transactions, using"),
                                e.jsx("span", {
                                  className: "mx-1 dark:text-peach-500",
                                  children: W(c.powData.gas, 2),
                                }),
                                s("gas and leading to"),
                                e.jsx("span", {
                                  className: "mx-1 dark:text-peach-500",
                                  children: W(c.powData.impact, 2),
                                }),
                                s("tCO₂."),
                              ],
                            }),
                            e.jsxs("p", {
                              className:
                                "h4 flex flex-wrap items-center dark:text-sand-500",
                              children: [
                                e.jsx("svg", {
                                  className:
                                    "mr-4 inline fill-current dark:text-green-500",
                                  width: "38",
                                  height: "24",
                                  viewBox: "0 0 38 24",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: e.jsx("path", {
                                    d: "M37.0607 13.0607C37.6464 12.4749 37.6464 11.5251 37.0607 10.9393L27.5147 1.3934C26.9289 0.807611 25.9792 0.807611 25.3934 1.3934C24.8076 1.97919 24.8076 2.92893 25.3934 3.51472L33.8787 12L25.3934 20.4853C24.8076 21.0711 24.8076 22.0208 25.3934 22.6066C25.9792 23.1924 26.9289 23.1924 27.5147 22.6066L37.0607 13.0607ZM0 13.5H36V10.5H0V13.5Z",
                                  }),
                                }),
                                e.jsx("span", {
                                  className: "mr-1 dark:text-peach-500",
                                  children: c.posData.tx,
                                }),
                                s("PoS transactions, using"),
                                e.jsx("span", {
                                  className: "mx-1 dark:text-peach-500",
                                  children: W(c.posData.gas, 2),
                                }),
                                s("gas and leading to"),
                                e.jsx("span", {
                                  className: "mx-1 dark:text-peach-500",
                                  children: W(c.posData.impact, 2),
                                }),
                                s("tCO₂."),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "mt-8 flex w-full flex-col justify-center border-t pt-8 dark:border-blue-500 lg:mt-0 lg:w-1/3 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0",
                          children: [
                            e.jsxs("p", {
                              className: "h4 mb-4",
                              children: [
                                e.jsx("span", {
                                  className: "mb-4 dark:text-peach-500",
                                  children: oe(n) && fs(n),
                                }),
                                s(" is linked to"),
                              ],
                            }),
                            e.jsxs("h4", {
                              className: "h1 text-sand-500",
                              children: [
                                e.jsx("span", {
                                  className: "dark:text-green-500",
                                  children: la(
                                    c.powData.impact + c.posData.impact
                                  ),
                                }),
                                s("tCO₂"),
                                e.jsx(se, {
                                  overlayClassName: "text-sm",
                                  placement: "right",
                                  title: `${la(
                                    c.powData.impact + c.posData.impact
                                  )} tCO₂ is the equivalent of ${Math.floor(
                                    (c.powData.impact + c.posData.impact) / a
                                  )} years ${Math.floor(
                                    ((((c.powData.impact + c.posData.impact) /
                                      a) *
                                      365) /
                                      30) %
                                      12
                                  )} months ${Math.floor(
                                    (((c.powData.impact + c.posData.impact) /
                                      a) *
                                      365) %
                                      30
                                  )} days of the average American lifestyle.`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                }),
              ],
            }),
            e.jsx("div", {
              className: "container-lg mb-10 md:mb-20",
              children: e.jsxs("div", {
                className:
                  "flex w-full gap-4 overflow-x-scroll whitespace-nowrap lg:overflow-x-visible lg:whitespace-normal",
                children: [
                  e.jsxs("div", {
                    className:
                      "border-gradient-blue500-green500 flex min-h-[170px] min-w-[70vw] flex-wrap items-center overflow-hidden !rounded-md border-transparent p-8 before:rounded-md before:!p-[3px] md:min-w-[65vw] md:p-4 lg:w-1/3 lg:min-w-0",
                    children: [
                      e.jsx("img", {
                        className:
                          "w-full max-w-[120px] px-4 md:mx-auto md:w-1/3",
                        src: wA,
                        alt: "Plane",
                      }),
                      e.jsxs("div", {
                        className: "w-full md:w-2/3",
                        children: [
                          e.jsx("p", {
                            className: "mb-2 text-lg dark:text-black-100",
                            children: s("labsprojects.carbonimpact.seat"),
                          }),
                          e.jsx(se, {
                            overlayClassName: "text-sm",
                            placement: "right",
                            title: s("labsprojects.carbonimpact.seat.tooltip"),
                            children: e.jsx("h4", {
                              className: "h1 dark:text-sand-500",
                              children: `${t} tCO₂`,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "border-gradient-blue500-green500 flex min-h-[170px] min-w-[70vw] flex-wrap items-center overflow-hidden !rounded-md border-transparent p-8 before:rounded-md before:!p-[3px] md:min-w-[65vw] md:p-4 lg:w-1/3 lg:min-w-0",
                    children: [
                      e.jsx("img", {
                        className:
                          "w-full max-w-[120px] px-4 md:mx-auto md:w-1/3",
                        src: hA,
                        alt: "american flag",
                      }),
                      e.jsxs("div", {
                        className: "w-full md:w-2/3",
                        children: [
                          e.jsx("p", {
                            className: "mb-2 text-lg dark:text-black-100",
                            children: s("labsprojects.carbonimpact.american"),
                          }),
                          e.jsx(se, {
                            overlayClassName: "text-sm",
                            placement: "right",
                            title: s(
                              "labsprojects.carbonimpact.american.tooltip"
                            ),
                            children: e.jsx("h4", {
                              className: "h1 dark:text-sand-500",
                              children: `${a} tCO₂`,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "border-gradient-blue500-green500 flex min-h-[170px] min-w-[80vw] flex-wrap items-center overflow-hidden !rounded-md border-transparent p-8 before:rounded-md before:!p-[3px] md:min-w-[65vw] md:p-4 lg:w-1/3 lg:min-w-0",
                    children: [
                      e.jsx("img", {
                        className:
                          "w-full max-w-[120px] px-4 md:mx-auto md:w-1/3",
                        src: yA,
                        alt: "Router",
                      }),
                      e.jsxs("div", {
                        className: "w-full md:w-2/3",
                        children: [
                          e.jsx("p", {
                            className: "mb-2 text-lg dark:text-black-100",
                            children: s("labsprojects.carbonimpact.router"),
                          }),
                          e.jsx(se, {
                            overlayClassName: "text-sm",
                            placement: "right",
                            title: `Smart contract address: ${
                              (d = ks(bs.MAINNET)) == null
                                ? void 0
                                : d.AngleRouter
                            }`,
                            children: e.jsx("h4", {
                              className: "h1 dark:text-sand-500",
                              children: `${i} tCO₂`,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "container-lg mb-10 md:mb-20",
              children: e.jsxs("div", {
                className:
                  "flex w-full gap-4 overflow-x-scroll lg:overflow-x-visible",
                children: [
                  e.jsxs("div", {
                    className:
                      "gradient-purple500-blue500 flex min-h-[170px] min-w-[70vw] flex-col items-start overflow-hidden !rounded-md border-transparent p-8 md:min-w-[65vw] md:px-12 md:py-10 lg:w-1/2 lg:min-w-0",
                    children: [
                      e.jsx("h3", {
                        className: "mb-2 dark:text-black-500",
                        children: s(
                          "labsprojects.carbonimpact.calculate.title"
                        ),
                      }),
                      e.jsx("p", {
                        className: "mb-6 text-lg dark:text-black-500",
                        children: s(
                          "labsprojects.carbonimpact.calculate.description"
                        ),
                      }),
                      e.jsx(k, {
                        type: "button",
                        look: "primary",
                        onClick: () => window.open(C.angleCarbonCode, "_blank"),
                        children: s("labsprojects.carbonimpact.calculate.btn"),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "gradient-purple500-blue500 flex min-h-[170px] min-w-[70vw] flex-col items-start overflow-hidden !rounded-md border-transparent p-8 md:min-w-[65vw] md:px-12 md:py-10 lg:w-1/2 lg:min-w-0",
                    children: [
                      e.jsx("h3", {
                        className: "mb-2 dark:text-black-500",
                        children: s("labsprojects.carbonimpact.code.title"),
                      }),
                      e.jsx("p", {
                        className: "mb-6 text-lg dark:text-black-500",
                        children: s(
                          "labsprojects.carbonimpact.code.description"
                        ),
                      }),
                      e.jsx(k, {
                        type: "button",
                        look: "primary",
                        onClick: () => window.open(C.angleCarbonCode, "_blank"),
                        children: s("labsprojects.carbonimpact.code.btn"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  xe = ({ className: a, legend: t, value: i, setValue: s, tooltip: o }) => {
    const A = l.useCallback(
      (n) => {
        s(n);
      },
      [s]
    );
    return e.jsxs("div", {
      className: `${a} my-2 flex w-full items-center gap-2`,
      children: [
        e.jsx("p", {
          className: "flex flex-1 items-center dark:text-sand-500",
          children: o
            ? e.jsx(se, {
                className: "flex items-center",
                overlayClassName: "text-sm",
                placement: "right",
                title: o,
                children: t,
              })
            : t,
        }),
        e.jsx(ie, { type: "number", size: "s", onChange: A }),
      ],
    });
  },
  re = ({ className: a, legend: t, value: i, setValue: s }) => {
    const o = l.useCallback(
      (A) => {
        s(A);
      },
      [s]
    );
    return e.jsxs("div", {
      className: `${a} mr-2 flex items-center justify-between last:mr-0`,
      children: [
        e.jsx("p", {
          className: "mr-1 whitespace-nowrap dark:text-black-100",
          children: t,
        }),
        e.jsx(ie, { type: "number", size: "s", onChange: o }),
      ],
    });
  },
  ga = ({ className: a, legend: t, value: i, setValue: s }) => {
    const o = l.useCallback(
      (A) => {
        s(A.target.value);
      },
      [s]
    );
    return e.jsxs("div", {
      className: `${a} flex w-full items-center gap-4 last:justify-end`,
      children: [
        e.jsx("p", { children: t }),
        e.jsx(ie, { className: "w-24", onChange: o, state: [i, s] }),
      ],
    });
  },
  vA = (a, t, i, s, o) => {
    const A = Math.sqrt(t),
      n = Math.sqrt(i),
      r = Math.sqrt(s),
      c = Math.sqrt(o);
    if (r > c) return 0;
    let h, d;
    t <= s
      ? ((d = 0), (h = a / t))
      : t >= o
      ? ((d = a), (h = 0))
      : ((h = a / (A ** 2 + (A * c * (A - r)) / (c - A))),
        (d = (h * (A * c) * (A - r)) / (c - A)));
    let p;
    if (t <= s) p = (h * (r * c)) / (c - r);
    else if (t >= o) p = d / (c - r);
    else {
      const u = (h * (A * c)) / (c - A),
        g = d / (A - r);
      p = Math.min(u, g);
    }
    return n <= r
      ? ((p * (c - r)) / (c * r)) * i
      : n <= c
      ? p * (n - r) + (p * (c - n) * i) / (n * c)
      : p * (c - r);
  },
  CA = (a, t, i) => {
    const s = Math.sqrt(t),
      o = Math.sqrt(0),
      A = 1e10,
      n = a / (s ** 2 + (s * A * (s - o)) / (A - s)),
      r = (n * (s * A) * (s - o)) / (A - s),
      c = (n * (s * A)) / (A - s),
      h = r / (s - o);
    return (
      ((Math.min(c, h) * (A - s * Math.sqrt(1 - i))) /
        (A * s * Math.sqrt(1 - i)) -
        n) *
      t
    );
  },
  jA = (a, t, i, s, o) => {
    const A = Math.sqrt(i / 2 + s / 2),
      n = Math.sqrt(i),
      r = Math.sqrt(s),
      c = a / (A ** 2 + (A * r * (A - n)) / (r - A)),
      h = (c * (A * r) * (A - n)) / (r - A);
    let d;
    const p = (c * (A * r)) / (r - A),
      u = h / (A - n);
    d = Math.min(p, u);
    let g =
      ((d * (r - A * Math.sqrt(1 - o))) / (r * A * Math.sqrt(1 - o)) - c) *
      A ** 2;
    return t <= i ? (g = (g * t) / i) : t >= s && (g = (g * s) / t), g;
  },
  DA = Object.keys(Ba),
  EA = () => {
    const { t: a } = q(),
      [t, i] = l.useState("EURA"),
      [s, o] = l.useState("ETH"),
      [A, n] = l.useState(1e3),
      [r, c] = l.useState(1e3),
      [h, d] = l.useState(0.25),
      [p, u] = l.useState(500),
      [g, B] = l.useState(2e3),
      [v, D] = l.useState(0.25),
      [w, N] = l.useState(500),
      [E, V] = l.useState(2e3),
      [b, U] = l.useState(365),
      [Q, j] = l.useState(100),
      [I, H] = l.useState(5),
      P = l.useMemo(
        () => ({
          holdA: { name: `Hold ${t}`, value: (y) => r },
          holdB: { name: `Hold ${s}`, value: (y) => (y / A) * r },
          betB: {
            name: `Strat ${s}`,
            value: (y) =>
              y > E ? (E / A) * r : y < w ? (w / A) * r : (y / A) * r,
            setters: e.jsxs("div", {
              className: "flex",
              children: [
                e.jsx(re, { legend: "Stop Loss at:", value: w, setValue: N }),
                e.jsx(re, { legend: "Take Profit at:", value: E, setValue: V }),
              ],
            }),
          },
          mixed: {
            name: `50% ${t}, 50% ${s}`,
            value: (y) => r / 2 + ((y / A) * r) / 2,
          },
          uniV2: {
            name: `Uniswap V2 ${t}/${s}`,
            value: (y) =>
              r * Math.sqrt(y / A) +
              (b * Q * h) / 100 +
              (b * CA(r, A, I / 100) * h) / 100,
            setters: e.jsx(re, {
              legend: "Pool Fees (%):",
              value: h,
              setValue: d,
            }),
          },
          uniV3: {
            name: `Uniswap V3 ${t}/${s} - range ${p}/${g}`,
            value: (y) =>
              vA(r, A, y, p, g) +
              (b * Q * v) / 100 +
              (b * jA(r, y, p, g, I / 100) * v) / 100,
            setters: e.jsxs("div", {
              className: "flex w-full gap-2",
              children: [
                e.jsx(re, { legend: "Lower:", value: p, setValue: u }),
                e.jsx(re, { legend: "Upper:", value: g, setValue: B }),
                e.jsx(re, { legend: "Pool Fees (%):", value: v, setValue: D }),
              ],
            }),
          },
        }),
        [t, s, w, E, h, p, g, v, r, A, b, Q, I]
      ),
      [f, J] = l.useState(() => {
        const y = {};
        return (
          Object.keys(P).forEach((F) => {
            ["uniV2", "uniV3", "mixed"].includes(F) ? (y[F] = !0) : (y[F] = !1);
          }),
          y
        );
      }),
      z = l.useMemo(() => {
        const y = [];
        for (let F = 0; F <= 300; F++) {
          const $ = (F / 100) * A,
            le = { price: $ };
          Object.values(P).forEach((ee) => (le[ee.name] = ee.value($))),
            y.push(le);
        }
        return y;
      }, [P, A]);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("section", {
          className: "container mb-12 pt-20 md:mb-16 md:pt-24",
          children: [
            e.jsx(K, {
              to: S.labsProjects,
              className:
                "font-bold border-gradient-peach500-purple500-blue500 dim mb-4 mt-2 inline-flex items-center pb-1 before:!rounded-none before:!px-0 before:!pt-0 md:mb-8",
              children: e.jsxs(e.Fragment, {
                children: [
                  e.jsx($e, { className: "small mr-1" }),
                  a("labsprojects.back"),
                ],
              }),
            }),
            e.jsxs("div", {
              className: "flex flex-wrap items-center",
              children: [
                e.jsx("div", {
                  className: "order-2 w-full md:order-1 md:w-1/3",
                  children: e.jsx("img", {
                    className: "w-1/2 md:mx-auto md:w-2/3 lg:w-1/2 ",
                    src: Ra,
                    alt: "Portfolio Simulation",
                  }),
                }),
                e.jsxs("div", {
                  className: "order-1 mb-8 w-full md:order-2 md:w-2/3 lg:mb-0",
                  children: [
                    e.jsxs("h1", {
                      className:
                        "display1 mb-4 !leading-none dark:text-purple-500",
                      children: [
                        a("labsprojects.amm.title"),
                        e.jsx("span", {
                          className: "dark:text-sand-500",
                          children: a("labsprojects.amm.title2"),
                        }),
                      ],
                    }),
                    e.jsx("h2", {
                      className: "h3 dark:text-sand-500",
                      children: a("labsprojects.amm.description"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx("main", {
          className: "container mb-8 md:mb-16",
          children: e.jsxs("section", {
            className:
              "grid w-full grid-cols-12 gap-4 lg:mx-auto lg:w-10/12 lg:gap-6",
            children: [
              e.jsxs("div", {
                className:
                  "border-gradient-peach500-purple500-blue500 col-span-12 flex w-full flex-col rounded-md p-6 md:mb-6 lg:col-span-6",
                children: [
                  e.jsx("p", {
                    className: "h4 mb-2",
                    children: "Parameters: ",
                  }),
                  e.jsx("p", {
                    className: "mb-6 dark:text-black-200",
                    children:
                      "Try different parameters to get a real simulation:",
                  }),
                  e.jsxs("div", {
                    className:
                      "mb-2 flex justify-between gap-8 border-b pb-4 dark:border-blue-500",
                    children: [
                      e.jsx(ga, { legend: "Token A:", value: t, setValue: i }),
                      e.jsx(ga, { legend: "Token B:", value: s, setValue: o }),
                    ],
                  }),
                  e.jsx(xe, {
                    legend: `Start price of ${s} in ${t}:`,
                    value: A,
                    setValue: n,
                  }),
                  e.jsx(xe, {
                    legend: `Initial ${t} liquidity:`,
                    value: r,
                    setValue: c,
                  }),
                  e.jsx(xe, {
                    legend: "Duration (days):",
                    value: b,
                    setValue: U,
                  }),
                  e.jsx(xe, {
                    legend: 'Daily "Spot" Volume (without arbs):',
                    value: Q,
                    setValue: j,
                    tooltip:
                      'Daily "spot" volume used to estimate the volume independant of liquidity concentration',
                  }),
                  e.jsx(xe, {
                    legend: "Mean Daily Price Volatility (%):",
                    tooltip:
                      "Daily price volatility, in both direction, used to estimate the arbitrage volume that depends on liquidity concentration",
                    value: I,
                    setValue: H,
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "col-span-12 mb-6 flex w-full flex-col rounded-md bg-black-700 p-6 lg:col-span-6",
                children: [
                  e.jsx("p", {
                    className: "h4 mb-2",
                    children: "Strategies: ",
                  }),
                  e.jsx("p", {
                    className: "mb-6 dark:text-black-200",
                    children:
                      "Choose a strategy and discover what could happen",
                  }),
                  Object.keys(P).map((y, F) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "flex w-full flex-wrap items-center gap-y-2 border-b py-2 last:border-b-0 dark:border-blue-500",
                        children: [
                          e.jsx(Qs, {
                            className: "mr-2",
                            checked: f[y],
                            onChange: () => {
                              const $ = { ...f };
                              ($[y] = !$[y]), J($);
                            },
                            children: e.jsx("p", {
                              className: "mr-2 dark:text-sand-500",
                              children: P[y].name,
                            }),
                          }),
                          !!P[y].setters && P[y].setters,
                        ],
                      },
                      F
                    )
                  ),
                ],
              }),
              e.jsx("p", {
                className: "h4 mb-2 w-full whitespace-nowrap",
                children: `Value of liquidity depending on the final price of ${s}: `,
              }),
              e.jsx("div", {
                className: "col-span-12 h-[30rem]",
                children: e.jsx(Ss, {
                  children: e.jsxs(Ns, {
                    data: z,
                    margin: { top: 5, right: 30, left: 20, bottom: 5 },
                    children: [
                      e.jsx(Hs, { strokeDasharray: "3 3" }),
                      e.jsx(Ps, { dataKey: "price" }),
                      e.jsx(Us, {}),
                      e.jsx(Rs, {
                        formatter: (y, F) => [
                          `${oa(Number.parseFloat(y), 4)} ${t}`,
                          F,
                        ],
                        labelFormatter: (y) =>
                          `Final price of ${s}: ${oa(y, 4)} ${t}`,
                      }),
                      e.jsx(Js, {}),
                      Object.keys(P).map((y, F) =>
                        f[y]
                          ? e.jsx(
                              Ls,
                              {
                                type: "monotone",
                                dataKey: P[y].name,
                                dot: !1,
                                stroke: Ba[DA[F]],
                                strokeWidth: 3,
                              },
                              F
                            )
                          : e.jsx(ya.Fragment, {}, F)
                      ),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  IA = "/assets/angle-gold-animated-805cf529.svg",
  OA = "/assets/code4rena-9c7c30f0.svg",
  QA = "/assets/hats-landscape-6ce7e3ec.jpg",
  SA = "/assets/three-angles-7d223ad6.svg",
  NA = "/assets/landing-borrow-4b5c9e52.svg",
  HA = "/assets/arrow-scroll-7da07509.svg",
  Oe = ({ pageData: a, currency: t, className: i }) => {
    const { t: s } = q(),
      o = Ge();
    return e.jsxs("div", {
      className: `${i}`,
      children: [
        e.jsxs("div", {
          className: "flex min-h-[275px] flex-1 gap-2",
          children: [
            e.jsxs("div", {
              className: "flex w-1/2 flex-col",
              children: [
                e.jsx("p", {
                  className:
                    "mb-2 text-center text-lg font-bold dark:border-black-500 dark:text-black-500",
                  children: s("Assets"),
                }),
                e.jsx("div", {
                  className:
                    "ease gradient-purple500-blue500 flex h-full w-full flex-1 items-center justify-center text-lg font-bold dark:text-black-500",
                  children: o(a.totalAssets, { overrideCurrency: t }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex w-1/2 flex-col",
              children: [
                e.jsx("p", {
                  className:
                    "mb-2 text-center text-lg font-bold dark:border-black-500 dark:text-black-500",
                  children: s("Liabilities & Equity"),
                }),
                e.jsxs("div", {
                  className: "flex h-full flex-1 flex-col",
                  children: [
                    e.jsx("div", {
                      style: {
                        height: `${
                          (a.totalLiabilities /
                            (a.totalLiabilities + a.equity)) *
                          100
                        }%`,
                      },
                      className:
                        "ease gradient-blue300-blue500 flex h-full w-full items-center justify-center text-lg font-bold dark:text-black-500",
                      children: o(a.totalLiabilities, { overrideCurrency: t }),
                    }),
                    e.jsx("div", {
                      style: {
                        minHeight: "50px",
                        height: `${
                          (a.equity / (a.totalLiabilities + a.equity)) * 100
                        }%`,
                      },
                      className:
                        "ease gradient-sand500-peach500 flex h-full w-full items-center justify-center text-lg font-bold dark:text-black-500",
                      children: o(a.equity, { overrideCurrency: t }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "mt-4 flex flex-col w-full gap-2",
          children: [
            e.jsx("span", {
              className: "gradient-sand500-peach500 h-1.5 w-10",
            }),
            e.jsx("p", {
              className: "text-sm dark:text-black-300",
              children: s(
                `Surplus Buffer: This is what would be left in the protocol if all stakeholders redeemed or repaid their ${t}A debt.`
              ),
            }),
          ],
        }),
      ],
    });
  },
  PA = "4.8.0",
  UA = 0,
  RA = 150,
  JA = 29,
  LA = 820,
  MA = 1020,
  FA = "l",
  VA = [
    {
      h: 139,
      w: 402,
      id: "image_0",
      p: "data:image/webp;base64,UklGRmoEAABXRUJQVlA4WAoAAAAQAAAAkQEAigAAQUxQSOUCAAABkFZrW1BZJwIRiEAEIhCBCEYgAhGIYAQjEIEINHhn5l45iix8v6U/IgKS20aSJPvYM+PZA1AZfsBHFLYhR0m8Zpa1AshSkPapYGclAbmYsXNNXvP/LzJs2HtbDP//Iv8drJ1ztPS/ppoHqyTH/82yzYO1SuBgLc2DFQRwsHz7YDn+D5ZrHywvgIMVmgdrMRKAMs2DZSUAZdoHS/F/sGIRBZSxTSgjgoPVhjJBGFAmOiUKmr8+HTT/cYAysQ1l3k40P7YPln430XxhQBnlYn4waL6WDM1PDwfNFweUeVXRfHFUHd9NNL8NZd5ONN9IhubHh4PmSwPKvKtovjSqji8nmt+EMk8HzX82qo6PDM3PWhxQxmOVBs1XFbDCoPkBQKYayqgOvzX4Zy+KquP2/2epBEHzLf53FATNb/xn1WKoOi6tP2euaf7JiIatEGh+QktFBlVHg7aDCGj+9kVVCYDmO3xzEgDNL/hqQ3/VMeC7NvarjrrigB35HfmEIyqKLSgz2t87jjlQX3XcDqpq4gcEPI468d6RVwWHbWmvOgYc18b6gIDGGXvSO/LrKVVFedXR4pwD5QMCGSetCe/Ie5zVyndHXlWctqV7QCDivDLbAwIaPbyQPSCw7XX/CWZZJ7E8Y9HHkeoBgYJO1kQPCAT00sbzLK+q6GZH84BAQj8VlgcEDHo6kDzLu3VVVRQPCDj0dWJ4QEAVdLa5w1neeUTcYIKd5fKMruhuf2OzvJOMuIlq5WRneS12vreEfH6Wd6oRd1GtjFOd5fXY+eYS7EzXFVXFRbYfXh1wlTKv0rjOnlat33SLWG2eEdckkKqMS60p1YJLNdf1yBlHyCEh4moVuiNuqFo5VZAmhwSHERzJVMEQNmSCtDG08R8x/+2cST5ClkOCwTgOfEbIIcFjJCcS36dgKFsuI+SQoCsGs2cyYpwExeMjZEEk5AFVNX0RI3plEaTJISFgTGUOHyHLIcGGUT05fQAAVlA4IF4BAACwHQCdASqSAYsAPm0wlUekIqIhKP84AIANiWlu4WxOKP5esgD8AP0A/gCf2lR/gD+AfgB+gH8Y/f3v8E4Apw6HV5jfLoOiVKpNVPblbG+XQdydCbzxhIDx3omDzodytjfLoOb3hT+wWF0Qg7iHnmjZPotjfLoO5WxlyEDXgMMQPm/wA8pCvMb5dB3Kx2TU5cw95xdoE6ZyVP4Q44dDq8xu6tln/Dqfu8Ic9ymQ/BRyvxt30HcrY3gRD9glkTey3TUGhJaHE/FZCijmyAOWsEab5dBBD8uudI03y0/cFxS3HDodXmN8ug55SvROh281lafXl0V5jKAA/ptKbgLNp70Ag2LogVHiAPdi2eIqvUk4wPD9Xh4Z8SLeIdKDw/l4exAX1w/DxDqP8Pz8SEnPQg/iSbw6TC8QB7sWzxG51/nE8Ols+IMR8fEpjtH4h258Ok9XqCztfCXkwx4dIAAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 1,
      w: 1,
      id: "image_1",
      p: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4WAoAAAAQAAAAAwAAAwAAQUxQSAkAAAABBxAREYiI/gcAVlA4IBgAAAAwAQCdASoEAAQAAUAmJaQAA3AA/v02aAA=",
      u: "",
      e: 1,
    },
    {
      h: 103,
      w: 103,
      id: "image_2",
      p: "data:image/webp;base64,UklGRj4FAABXRUJQVlA4WAoAAAAQAAAAZgAAZgAAQUxQSMkBAAABkJZtT14xr4RKiAQkIOFIQEIlRAISImESkBAJlYCD7KPtaeFl28+ImAAMnD5a282qnwy6UqrHo25FeCT1eNVrYrDtHgP6vk0mFsOaTCQWQ7c8iVgMbzKD9piw63DJY9Ijj6UxsQ60tZjaZZTUY/KexihBsIxQguL+Xg2S9lYNmvZOCaL7GyWoludSkE1PbZ1Nl4da0PVnNAjrEyko5wec0/GdBmn9RjqrkC8saNs9CeL5ljFrdySopxvGza62IL9d7Oz2C2d3nKWgn06UXz1xfv6HxAIFQFlBAVBXYAB8BQ4glgikNWR81lCga1DUNRjaGtr/mQ5fQ6yjraGvov1z1DUYdA2KzxoK8hoysAYAvgIHYCswAGUFBYCsQADA+Tn+rPzqSeKXTuDsDpzv7PaLjZ1cwLgZroVbuoHGrOFuZpZvwXj9wH3hJV9AWSm+Pjgd23eZU8aDyqjiUefjeFY6my4PIbHJeLxwKXhxZ6J41XgYXjYWhtd3DooBC4OCIVOfrWcMKj6XC8bVmSqGzscsR8boOoduGF9svB+COXMbq2XMm2wcS5h7248Rjl1AMFV/x2sCTSnmz7gVAd1c1FprPaK31kxLxl8oAFZQOCBOAwAAEBgAnQEqZwBnAD5tMJFGJCMhoS5Wi0CADYlkCJAlMFmP0nYngh9Lvlxm727TgPMA/VHpN/tL6gPOu9In+V9QDpKfQA/YDrMP7b/1vS59QD//8CF1G+gD7X5esT/vaPu7vVUC0G+6c/dP24syQdYykdNbTfb4r3H3aoqpLLfGw+clURB038a1jpUwAUwjq3zb9AyjjyO5OioMpwlVKUszfJqYRj38j0zpZV4GL6LNiCAfyX1ryuk/Uil9cnG79bmyYHE+hWiZkCRQAP7S3B+cKsiNznSnklF8Hv8ptsT+lIYxNmJ6RJUJ7NfY320DtPRiTV8k6Men+2Et6xxB4z94HQg9v9n6Hf+d5x309f0wUt+c8PP1jMtfjdZ6hxYbZ/I/s/Bme3lDQm55DBpsSskJkArqVuO9l9wxefOyh0h/Pe4/OQAHwk5hi8jXQa+M8iz3KjX+58YsNvlv5FY4aM8w8z/IYXoyi8Qj4+AfKEYH+ff/+6Mlkfztol5b3+RDeSMnnn2Y/s3+CHvEbzTddfgL7ghWy3WEYQA+jFnVl//BDkool6bd/oOaWavaxYY8UnaMQrbSuV4Mz+k8hJYcf7yaPvzIB++sCaQXHfw7LmPGFQEzkjlhJtskHvdxHrXem8fG72qz1+vAw1zvd3E255YhKjNeBlH0/U1PTgO5OmVfzhOMxRQAfTruGavawq/2DPDS3in3GGqZlEi5s2bRiYsGpNpH8zqqO1+VbqrwARbyY+uuuHfU11hSzo6uEghnrTITkdFbyAGrLibSbB0fyLtFFyO9z1WrTIuHEGcfCZqvnTkTTJrrOP7rphQ4GVCTYkiqfT1vCe2n+mz9mA4Zvajdho3qDhL6rZ/ZrA3NT3Xq1BKeSH06ufzN9LCKW0VYarzVnL9jSxHKbaKFmo05vsCsJmcJjs18XrGr5wRtCRJhs0jTUQHPleuh827V7k9mFCZvUyYfiM7nTuR2EXra8iw8FQLUyLmmfdNyBNQXwNORIhKSInfuiEXNagVrDuYl63UKv6VKB1OcvP4mqcG9/+7AnY8gDwBL8k4vQj3cqJ41U6KX8BKw/wNYi0ouBcCS1mPHkqdQSTzSuvuf/bcj7wxPyOsFpkGEmof/EnsWAAAA",
      u: "",
      e: 1,
    },
    {
      h: 48,
      w: 33,
      id: "image_3",
      p: "data:image/webp;base64,UklGRvYAAABXRUJQVlA4WAoAAAAQAAAAIAAALwAAQUxQSIgAAAABZ0AQQLLBIYSwP98QEZHhJxZuI0l2lf3/o0wZCL5WJkGQBymQwDdRWUhLb1Tv9g5cvIj+K0zbhnGHfoFMrywLxDMhK/9ok0Ue1Vx0cWM/astl6lT4mm+Jfc1MrZiQTDaAe0IyN4BiORVLdczJrupYk0fRYfMRA0gxRgxwRjhDxBjzy8wX+HkAVlA4IEgAAACQBACdASohADAAPlUgi0WjoiEeNAA4BUS0gACDwaB0AwPMTnHy8pgpz4s8vgAA/bP//SKEp//9HwLn/6NACd/3IRM//9FKAAA=",
      u: "",
      e: 1,
    },
    {
      h: 185,
      w: 147,
      id: "image_4",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 65,
      w: 66,
      id: "image_5",
      p: "data:image/webp;base64,UklGRq4CAABXRUJQVlA4WAoAAAAQAAAAQQAAQAAAQUxQSCgBAAABYE5tW54X4UUIIYQXYQghhPAiDCGEIYQQQggZPD/aZ88AImIC5POchT0AdPYDCTA2/4EdcLb6Aw2obOBTACCzSbnyZFxlcq4xVSrDaWAqZ5lIcd6J/AKJJuC6K0u9gZ0k47ZRRNwfShDHAzRdLjQ8brpYHHix6VJp4NVh6+iB13ddQ33gw54WCD7wcc/6ScwNSx4pPlPb3GvF0vVwN9Npqx3UrUYHfVZLXmrjaHX3ZHKttvkxVhmHm8nbWxnfjT3Kx+rjm55kRfUPRpZVY3urBllXyzsua5c3kqxeniVZvzxJwtjuFaEM405XDsl3TFjbVRFauwo80s+KEOezjSmcDKFuU+HyKXFtU+SKk5AD6GwDqGwVKGwH4GwOpB8wNgPCDwg9Op/qd1ZQOCBgAQAAMAoAnQEqQgBBAD5pLJBFpCKhmjqE5EAGhKAuAD6AP4Al7nLU+pMYcx17eH9k9QG2A8wHnHf5DUSfQA6XMGAmTIxupJO5r+gq5wh3vQkqsHBHTZtBE7OgXoagAP78rTP/5sCKx69wC1LhocSf8k0OAP6k//+h2dTYZvPuguWTsY8B+OT0HiObtu2J1/ggfCetkpKaU5SRbd+cP0AINXdv+0MatZDUDDgkXcK9SR6wxPOW9p2vBP9MFHRVjUuCqKsfExmtKseNsTxmVroDY/vp/cuDe9yhHHMK+dR9UWfTdM7aD2/do7Q+68RrFZ7P7Ayp0G51OWBwk78olftyFJXwlAJE//daj4xsAqPPnxi81DxDskYnJi8TB+a3Ze0hv5Ow83LCnaMTyIkXRUdR3e1CywJDjv6Vn//3MToL9/sv5Yw73ZQtajaYEdjjdUfGSUBKzAAD8FWOXDZwSRDEFAAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 112,
      w: 113,
      id: "image_6",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 206,
      w: 216,
      id: "image_7",
      p: "data:image/webp;base64,UklGRq4DAABXRUJQVlA4WAoAAAAQAAAA1wAAzQAAQUxQSH8AAAABb0CkbRs7++AkLCJiaZVygJvatuXkMPnAQtY1gAnKSGAeroAYiIFUiEBCFKT8bmjvovs/ov8TAMDhmHHz41oy7uqilpLyz+mBsVlusj3HKCnzdJI0pADgWvXV/NdJ0pBiKSkDTbbnGD0wNpWdJH1ilJR5nrb9TQHAtdprr4wrAFZQOCAIAwAAEB0AnQEq2ADOAD5tMpRGpCMiIS9xSACADYllbvKfHcPfAaJZftvueA/ED3RaYB0vmAO/3AAVNUoO8ptU4BS+ZqBFkjM8TIL8vs7qnUEnwVZ6CTapwCl5YAqxlTaU8H4oUFjS4HncSwsg5SlVgpoqRporPP/E9w0Dd1rYKheWresAGvC/7a6eCFesdZzQCodgMfbrCOuHORF4ziezkYC28GQZQjR2ESuvQGb3LmRTCJYIDuN8of6c+CHmtHA3EUFioBtB46W8p5kKdTnwX8dQUvmagRZIdP8D2eAwoNdcfWW24Z8ACmFcFMK4KXh8UH8yAAD+zVzwUBsW3VGr+F2KfY9MWQ/f+7vGeOrtBo8KKghElWh9KfbMjRZoZeKClAbN4rJFNWmtDInVbdexxUqJZ4DHZjkNqF8zGKf5/p7Ye/R4OluVawOmo2yEekYhuWyQmFmk3aLbFFTuf+PE/b2RkWs+MkKLTi98+Sb/iLHGxCboKeE0FM3zssCnj2DG58ExECcsd9G5HJAOACNtqE4BdoCqidzEacPWoj1yOop4kBVQUs0qoDVLbVp2OcHINXSRcPKAG4kdGmGgkdDgVToi5mzbNhZFxgSMDF3PGrBErdAZCojhlafszayslsCN93QqIa8bRef+lhZnv+lbY9RCb6PRKB7rXF9rc8shCVbG+cbT6n5AM8QTRD60s5xXJhHPXdQKcQNQfdWIb44ZcxtCsCXAHBhpwP90phaAkDzsNzWrsD693/g8rGtfIyZ80GixnGHcWAK9SQ8CpbfCixbgdTt6VBX7q3dN8Stzn4D4UoPiYIsnZflwgaMJzdr26lF9jA86GG6h9QAKIB5EwMtRcBCAHADUSQGdFXwtBY5eNoiW8eOcZeU6patrUchf3rr4HWH8iInSBD6qakzDCjMHH8ozty0Ss7MVMBoIrYCgqZl1FbAGOvz+3ncLnpB8mrlUqWToniZHxh/999huX+urKBVDeuCZ2lIbhK/76KbJC+mXXkmLcatSJeIa0VvRa3ucAZBNPcAAAAA=",
      u: "",
      e: 1,
    },
    {
      h: 181,
      w: 178,
      id: "image_8",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 107,
      w: 108,
      id: "image_9",
      p: "data:image/webp;base64,UklGRmAFAABXRUJQVlA4WAoAAAAQAAAAawAAagAAQUxQSOoBAAABkFXbThxQV0IkIAEJSEACEioBCZWAhEqIBCQgIQ7yho6QvOEvIiYAU4e01YNv1pojTKZcWfTVvpdgS9hYv+17tIJK1xnHHgwITXRazosl1rlHWSiwzj/yIrTrmhxXyKLL7jQbHbrySHMl0cXrTFXXZ5qFDrVwxDmoq42SZohDzSzfRVFDy1dR1NTyDYkaW76grtZK/IDVXgmv7Wpxp5ey2tzeCWKU5ldYrZbwwqZ2H89IDNP8qKnlgx4ktb0+YOOEbiW1vt1i85RuJLW/3mgOyFVQD8vF5gJfDBc0nET1cTupTvST7oQGAKReFgDZjQZgd2MAYDeUAPUzITpSkRxpqI6wKwPsiP4bSv9doivwpblSHWFsriRHKsiRAogfCWA/AFQ3GEByYwcA8SL9djgh+L04cZyQE+UEhwtCZ9mFhsvhQbyqDnRck9hXbqCZN3A3mFduoRo3cJ/EtvQAm2mMx2yYhGfRsA0vVrMYr7JREt4hsSnj5WTSjteLQQc+3M3p9AWaMZ3wbTOlE75uhnTC982MTphxM+IgzJnFgh3Txr6cFExMbbEeMXeWlSqmp30Zjlgx8hKjYNU0ppNKWDjzVGMjLB6bzMIFFlI5JuhbgJlU2vhAji3A2pArj0fC+xZhd0xpq6cpJUwPVlA4IFADAADQGACdASpsAGsAPmkqkkWkIqGX3K48QAaEsYMUAfoB+gH8A0AD+AQIB+ADZvMENsB5gOg//rvRm6jvn3vZX/aXKj/I/2AfoBb42g3Y3KCCDMhT9FYvT0nfI/i0N33qodZsnzYrAUElJWNBqSwZFi5AAjGfNMp4iLhAy4uEvyEzPPDOaU35EVtm0D8LUga0QcG00QyPB1ppBITy3p21g6CFk2nDJMYEgDoZ+Zwus6rIsYZqwtN2T8Wa/76H/AO9CaFbWIThmwagd/Rh/YrjpAAA/vak9rl/fRTN9UfXjgBmaf7xJC/hR5FMb6K/QS3ihMIqUnw1UdmbZvKeTzTNFHIv8bFVBKV52Lj/XdHgrZC/0IZXwfp4fVIgRvWoS6bJ/WfoI0/lqpA6P2mi8NWr7ZHAlKa/Uml4esvDKbN8Rrn2et91rgCO05gY3whpEK3LRL6JUZc9ggDP71wRv2cVGPOvkBizFXfK/P27kUMLxF4Oh0XlwjECwjbtOJY/S/cS53r+1NfAX4G/jBhVXeRz8btshZS+HQmevUhh9MDxEMrBbCAUQcZJT0nARmfJf//28EnHCIN0FUjTlcrXxDMg5XCXA/En6nbS8sOL/q7Z+k1vMpt9/6NhybqOOu+83bHK1GQ3fWmCHUBqYrPZFYpPOji1CaLg3oFutLnwZiQN/+wzDME2SQQrFCnzVFC+tgSoJqmGUPPcJQ8VjjW+XgGN3Q0HJLiRZ97FLP5FCy/xabZw5BkGE8Syg0JVbNwRwPxPY5Zjhr0yQ9TjsHckQZxHQNxkFsvj7KVi8lz6Ow3XLsOvbjVpgc85NAmxhLfVaOiZP7AHZRv375z8vovb0CJQSiehRtx2sljukhr8JRF3n7WP93qRcpJNkqHlf49CSQ2dz51f+cUdpblHjUcDY+wCLkTb6M5PhMqPsSDup4ZiZZ5wbk1jyKsHvn7lE+h3MrxV0G3OPJzfVYh+1grFlKGT7R3edSW0HAIn7WdKWsbTG+DFe0VhGzAAt/IvhJm7u4GH+xxuQqkq+kXPrEfS8Jw/bX3bsfauAPYMa63A8s/CZU6dIebZj6HLiyFa/Gf0CuL6npkPgj/6yrpR/5xR2lii8NfveULdnAHZ/qnQf/qnIAAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 55,
      w: 57,
      id: "image_10",
      p: "data:image/webp;base64,UklGRgwCAABXRUJQVlA4WAoAAAAQAAAAOAAANgAAQUxQSAgBAAABkFDbTh1YkRAJSEBCJFQCEpAQCZWABCQgAQmVgIM7M6/f3CcgIiZAvixNWAcyy4KxAIUkAU5iQCMpwCBx4CBpAEgmgEyhAFApyj+dov+DRJBw6gTtbGm4jEsPN6+Qg+24OTVUwe0eqeBhi1PwuGsMbXhx5gh24F3Xr7aB15frB7Yf+HS1TR+ZVW8DIY/hvpmeTFAeWQSkJiJi5t7HCjKG+2ZJ7qfS1kezZnldy/FBS/JxXS/1JN/reGNtEnN/NlWilidTJW69N1UitztLJbQeN0yC21WT8O1sabx0tgvhOEkM5Z8pjOmfSiEHAOPoAITTgUVSgUFiQCfJgJMIUFkWjGUgs2ST/zNWUDgg3gAAAJAIAJ0BKjkANwA+YSiPRaQioZz7tABABgSxgGcwgQ9nQhtm9v/3yWfAPoAp/01LZ6AKvouWEAH/VwZD1ngLmHu+wFdBEoS4ajBJh3AAAP78+GKudD/gopdiofGJxF0cHgvXE0W/v1//+NA//jaz//xoXgYseAc++lb/KUvzZSwEbDkqDeEHR9Ip4ilKQwRDjZsn653FCVR/fBb1nua98J98syVjaa6kPD9K0CHGmP/sX9lvfARvdPVDujWfXOWqI/wOMS/8MNwSZlffb0o2U0NoaDJomABT2tD8ZgAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 103,
      w: 103,
      id: "image_11",
      p: "data:image/webp;base64,UklGRhwFAABXRUJQVlA4WAoAAAAQAAAAZgAAZgAAQUxQSMkBAAABkJZtT14xr4RKiAQkIOFIQEIlRAISImESkBAJlYCD7KPtaeFl28+ImAAMnD5a282qnwy6UqrHo25FeCT1eNVrYrDtHgP6vk0mFsOaTCQWQ7c8iVgMbzKD9piw63DJY9Ijj6UxsQ60tZjaZZTUY/KexihBsIxQguL+Xg2S9lYNmvZOCaL7GyWoludSkE1PbZ1Nl4da0PVnNAjrEyko5wec0/GdBmn9RjqrkC8saNs9CeL5ljFrdySopxvGza62IL9d7Oz2C2d3nKWgn06UXz1xfv6HxAIFQFlBAVBXYAB8BQ4glgikNWR81lCga1DUNRjaGtr/mQ5fQ6yjraGvov1z1DUYdA2KzxoK8hoysAYAvgIHYCswAGUFBYCsQADA+Tn+rPzqSeKXTuDsDpzv7PaLjZ1cwLgZroVbuoHGrOFuZpZvwXj9wH3hJV9AWSm+Pjgd23eZU8aDyqjiUefjeFY6my4PIbHJeLxwKXhxZ6J41XgYXjYWhtd3DooBC4OCIVOfrWcMKj6XC8bVmSqGzscsR8boOoduGF9svB+COXMbq2XMm2wcS5h7248Rjl1AMFV/x2sCTSnmz7gVAd1c1FprPaK31kxLxl8oAFZQOCAsAwAAcBcAnQEqZwBnAD5tMJJGpCMhqa2z2tkwDYliCJGMAC9KQ1O18fylPVMy4A90yfMB9gHYM9AD+odRH6AH6gemz+3fwL/uR+1XtDY5X9zcriZycf7+u7uj2Y9fWbZuQZrQzr8GVn5oKotm8TGu0Z7f5k7C/otNazpGOsParDlFlMOl7K79Rz4j1G+G6CQJjTF2OaFHNADHWWXuI0mQoOFTpvac6keIzuBd7WdC41b0z5BGx1HbcOY7QV2PrKE0ZjLGjS38AAD+9iCT/kAqHERwdM3gKjRw6+uym5v38BgMl1MtUx1LBzwMj77qF2zIW0fwDTCWdHm0H3+/qnPnziObbEZL4MjvYzwQE//+LDzl0nJAY7tlb/QuKLSGwf/8xn0+jTW9JK1tHW/3nfEx082ejnWJboPnuQqGlma7nTm93xFzXGoiqSE+3dXdx8doB1EFlknKMBCxnGI4eCDe92//g1/6taetHPztBojcPfeCeuSsqBDLVEUiAyAXtKBtZQvQVM2VD6LiidlpvkouDCozwsWa0xZp/cPTvFvImLPT9r855Ecswm7Axcu5cZ08LUL/Cb07lhA3JtchJA9WoVldnw9smgjlx/gCqO5Hc0Fy2Q9hwTOQ5z+v5kWi32Pqy1aYTN7SaTZUbKgNdous3N/UG+7tWsj3OPDoa9CJhme9FJxFDnOwmFFyer5nRbZglPSAsmoJvy2GshUSo4rzAauUmrJHXFXslmGz9rAWcghLJAFOJ+xdPzlU/iM22aYX7/v2jemiqN4TNJjGdK3bT7wNTG3+gj/r8cqdDJGxcBaYW2mC5vZDLEaweNCID2PCbmxx63BrazAwpsCjmLqO+GIQ9sx0K6Lge4iZWPCVQ7BWBOjDvQM35QC8c8+36T85gQXvn88H7SVlhmX7+mwL3c6xtqrT17mTqwaU/odETP/HPJ+AtX2h+viyBNrPQjfkB24IM2HwQh6O0iwz+hv/2JmfgpoDjBU+UXnt7UpgfVYTPC7/3Ih9EPTLyBm28zFJQ8EevJDFssmTGjUzoLurDoYQBIsHYeBPHJbNHEPwEHHFoXjsJH/y+FhA666AAAA=",
      u: "",
      e: 1,
    },
  ],
  XA = [
    {
      ind: 1,
      ty: 2,
      nm: "b",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [430.801, 370.022, 0] },
        a: { a: 0, k: [200.573, 69.273, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_0",
    },
    {
      ind: 2,
      ty: 2,
      nm: "u",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [0, 1020, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_1",
    },
    {
      ind: 3,
      ty: 2,
      nm: "e",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [270.456, 211.191, 0] },
        a: { a: 0, k: [51.012, 51.012, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_2",
    },
    {
      ind: 4,
      ty: 2,
      nm: "f",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.44, y: 1 },
              o: { x: 0.35, y: 0 },
              t: 0,
              s: [270.456, 96.745, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.44, y: 1 },
              o: { x: 0.35, y: 0 },
              t: 70,
              s: [270.456, 125.745, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 149, s: [270.456, 96.745, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [16.059, 23.656, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_3",
    },
    {
      ind: 5,
      ty: 2,
      nm: "p",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [536.219, 203.318, 0] },
        a: { a: 0, k: [73.346, 92.484, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_4",
    },
    {
      ind: 6,
      ty: 2,
      nm: "e",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [641.728, 114.674, 0] },
        a: { a: 0, k: [32.918, 32.257, 0] },
        s: { a: 0, k: [81.399, 81.399, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_5",
    },
    {
      ind: 7,
      ty: 2,
      nm: "p",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [360] },
          ],
        },
        p: { a: 0, k: [288.499, 815.615, 0] },
        a: { a: 0, k: [56.209, 55.846, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_6",
    },
    {
      ind: 8,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [282.724, 816.057, 0] },
        a: { a: 0, k: [107.546, 102.883, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_7",
    },
    {
      ind: 9,
      ty: 2,
      nm: "p",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [601.086, 739.014, 0] },
        a: { a: 0, k: [88.592, 90.413, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_8",
    },
    {
      ind: 10,
      ty: 2,
      nm: "g",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [288, 818.732, 0],
              ti: [-51, -43.268, 0],
              to: [162, 16.268, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 76,
              s: [504, 728.732, 0],
              ti: [147, 17.732, 0],
              to: [51, 43.268, 0],
            },
            { t: 149, s: [288, 818.732, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [53.648, 53.301, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_9",
    },
    {
      ind: 11,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [429.288, 675.768, 0] },
        a: { a: 0, k: [28.186, 27.168, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_10",
    },
    {
      ind: 12,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [270.456, 322.04, 0] },
        a: { a: 0, k: [51.012, 51.012, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_11",
    },
  ],
  WA = [],
  TA = {
    v: PA,
    ip: UA,
    op: RA,
    fr: JA,
    w: LA,
    h: MA,
    nm: FA,
    assets: VA,
    layers: XA,
    markers: WA,
  },
  YA = "4.8.0",
  GA = 0,
  qA = 150,
  KA = 29,
  zA = 820,
  ZA = 1020,
  _A = "f",
  $A = [
    {
      h: 198,
      w: 198,
      id: "image_0",
      p: "data:image/webp;base64,UklGRlAKAABXRUJQVlA4WAoAAAAQAAAAxQAAxQAAQUxQSJwDAAABoFXbVhwBuhKQgAQkICESkICEJyESkIAEJCABCc/B66GGVAKXHn4iYgIw6RCTSG2fV5EcA0h2MZ9N7ZfaSo6OmpDLsLuOmgMlPle1u2vNgYtwDnvqOA8Wwjns2Vri+rwMm+E4/dKOavNsaVUuD5vrELcgJ2rzVfGLcaI26eIX4kRt4uJWkdXmrrKEOGz+45ier7bG5ueW1ZYpE/PNVtrDrLLaYmVKrtl6m59PVFuxHrMRW/U5Fdds3d3NI3RbuYZZRLW1a5pDsvXnGYgxWJ5XjMPytGIslmcV47E8qRiT5TnFuCxPKcZmeYYYn+UJyRjN94vGabpbUFI03Mt1Y1XdrZrx2u8kxux5n2jcHndxSo76mzRjt98jG79yB68EWbhBM4b777JxLL/ySpL5H1Vjuf0mGs/pJ4Oo4X6QjWm5zilV6i4T47pc5ZQs8xeJsV2ucUqX+UvE+C5XOCXM3AXZGJcLBmX63WGcp68qaf0bb6yHL4S284tBm34WjPfjo5O48tEgTj8JxvzxwUld+WBQp++8cR/eZPLkTSWvvVHy7FUw9uOLTJ+8KPS1F4M+/Zsz/j2AuAEHgLwBAuDcgAqgbUAHoBtgAGwHPcIWRMQtOJC2QCD/IlTULWho/zkZm2Db0DfBNqH9T2FsQtuGugmyBXUTBHkT4hYcCFsQgS3wgO4AgLYBHUDZgAogb4AAiBtwAHAb4AFg0Kf4e6Wvvcj0yYtAX3wBZc+9quR1vM7kyZtAXnyDQZ3i/Uld+eCgLn0AZc59Uoir+DQSd3yEQZvi85O28oWnLXyBRlrHt4m09BUGZeq+E8oE3ztlzF8AIazgSk+YvwSFroJrPV3+IghZBVc75cpfBqFK8MNBlLpfHEQl/LTR1PBbT1P4EYSkEz/vFA33u0BRxA2FoBO3bPR03NMrORpugoOchNue1BTcuBPT3Z2c0qIetw7KSsTNEykJt8+UnHhgIaTgkYWOiocWMrp7CioV3eGxrhLRHZ5caOgOzy4kVIenFwoKJpgJODHFpKtLmGTQpWnENF1fWPeY6bms4jDXpEvShOn6vqAeMGNZzukw59CXMiLmLQs5HWbu2yJ6wOzTWIAmLNCJzk4c1ujK1IrHOn2ZVvFYqy9TKh7rdaKT0dNj0alPpCeHhYdTp6AlYPlH0afVBBKPoo/RkhyYDNIe0CWC0ShNb6NNogOx/pDaf9SrHB4c+3iI1NbaeDNaa1XkiB7/aAJWUDggjgYAAPApAJ0BKsYAxgA+bTSVSCQjIiEoUjmIgA2JTdvjgBZNs/fr/7BsUHc/6xyn+3krF+X4n+984D+D+oB+qHSF8wnnp+lH/A+oB/ZuoR9ADy7fZB/t3/p6gD//8Cv0P+jn7TehPkEpvzv7Clmcf8f9V3UHqpSEtGYdPho7izWq4eDV/LhaoimlX+qYaPfmUcW7Uz33qHSya/ZlmiOabi5fiMNbFkF2qgj5qtdX3NMR6CCxwwp5dGeACPhz9oWyjeIhlh8SlYzjYIQIcWeWRMtdHni4Jcp/2OJnbIJxXBkHsRWPjfp8ChTT/700xIYi+x+XyMR0sWPNbpI3m/F5105RiJzYBn7KgePN7LWjVc4OGwzc0pbE0/5eolDE5eq9Fclg7lc2ldJ+oc/hpCn9EMflmGJcFNv8O/UFIaxwSaRq0rlnr0Wn0P0RI6IsiQBl6mqzIZ7RWJZ1bjIAAP78+EJXzkeGYfsLy2LsQqUSwDKaLq8fkSvTQX9rv2toK/epqVZOOy5lefv8V2gb5r+f+ZNoCHjf6Wn88tOha/Fgwoe3VOsaB95/3OOW5+Tv5uKeuqur4rmsROb9Nz8nVABuuKy5/DsVgNdMWf1YteLAAjmmEs7vxY1YJ5FKSk+egF5YNO/ilDe5+Ta4/dRPRusngZr9FEEf6NwspRqY8aea/XA9fhwvI2+bO7MNJaOYXSAao3/DbGLv/lp2wBpGb71JhATD4bX0jZIIuoSF+72Ef8th0SLPDVW/rffzDa4nnMKwq1h5BkbsXBd9l9nrNeyHaZm/aVbe7mvD6daQkTRkRZLlyOXdRJE0sBrsoGQO6bb85h9ScULmcOzLLWriLQpOjWNXumU+kn3CoFK3xYgMIz5uIvcmOka5dnC3bHzaCIom2KEc4KqtCGhSxpnPei20OpJFJQLKGUR4gJj74+c32uDtmuQK+HmKLrEoKATCCdpx99pgJl/LTLO2IIYLQJ5TpwGt5vVxM85SNriLs0Vf7+5NAOSirAaaoPPYe4kKT+4vmSkva83CjyhU7mM5JSS0h5/dCG5zmZDYnw0fZoWxx1Ra2CsLfhJ+g54H2M+Gg0kniOda/eHvnPALEp10eKA6ysDSnoX23GwBJOFcvuvc9VFDklryQa3J9N9lLRS8CNSyhJ5yCHjvjklORGg0dKhlLs0l8ZsVu4m2TShh1XmxeBNP1VZwOu6TMJVvjsp7nijZcR602Wp41cl8QZSwQxrH/8MZt+swP9Ti8CzSsyak43e//vuHBlxr48k5Ji26MM//nWZ/fE5rdd+OytOnRseQeageEn+DPuBSlsYSkfhuxzxlDtwRM97fgB+TFa7VpYhhvTI8wGS2u2FZt5dqdoRvst87H49dNBmH8RVz3vKrzvlLr6eGI8VBoOIfrj3iW6Fe8C4PFsHu+T46vDgUyBjwIubRqNixcrY1/kywFZ9CDkbS4w3Br59wqpI2DClCdV5tinvoOL+U4yHa5CEv/XHp1KAMGe9VPfN6I0dGP9fVcZ6eEh0uKtrsxEjiFJFJkCKpeoZxpWcBn+5zfenOwAI50wacVPyxGnriRnwoPkGsyApZySOJdgH7zkg3tmTqngaOPg2Ap+GXeJ/f/QL3qb/9FK3bv6/TLcJHub9LDgsftRCR6MdbyVlY8CDcv6bauR6RGjo90+3yIYsBoGFN2E0pOesWzi4KzPCPLzTDm5jSJpWuAf3R1b0MONe95/YBI3k+ulnm0kY5SLzYxnVai2uqC3Scu1eSXNuKU28hrlxLRvO07gpy8BD0MhgRpfN/Z0K5mNw7w+SSuUZ1eLWo1OO/o6VQ59WT3Kg0W8sEsNqeObUQt6XUqt5/hkBKqj+GvDWsnmWzjnH//7Th+957yPKXniuGfn9uDRJ+eYYi7N/MnMeKE1dxuiSdn45fp8/itWhKD2p5DPS5YYXF+wggXvMHhJPI6YV17jVuGSFPvqbEU3FkLb7WUC4hE8uB7RiraaHqX0dpEZKgusKy8UhcstxBln2tVBP8BN/2vW6qUXHxwYn7HZzjv1fytTfbTaMZu442ABicvsSlEiwsVuSqRVE4RwGKafFHqet2DtorFxqy/iX+3rGEjS2qI3Oj+PMkscQr7jIYbEktgkr6/UDO+AJiD45E1lLG2wAAAGzUYL0nwHrGyfapmeWWK3HrUWNRVwGH1ZTnDbEfOC/wQM1CtfFQrfaiD/QwJL7i4IfQD/zuv//iOGLGRW1A8yQItoejKwgAAAA=",
      u: "",
      e: 1,
    },
    {
      h: 198,
      w: 198,
      id: "image_1",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 193,
      w: 194,
      id: "image_2",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 193,
      w: 194,
      id: "image_3",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 189,
      w: 189,
      id: "image_4",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 189,
      w: 189,
      id: "image_5",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 48,
      w: 71,
      id: "image_6",
      p: "data:image/webp;base64,UklGRuIBAABXRUJQVlA4WAoAAAAQAAAARgAALwAAQUxQSGIBAAABkEhbWy5hD0IIIYQQQgghhBBCCCGEEEIIIbwGz/fTvLe57wBExATgzakG/EC3SE5vr/N/Keb4cfofQVZbU8EVLIWtIKuzA9c03NEOEJaCbM4OUDXcyRD8VJDD2QGKKCjZEPxUkNPbAZIoKMUQ3FCQM9gB0laQ1RBc07AZCmVrxIjPffOhAZf65vP9Mpfa4t30plgnrw+8NZTJb4p7RShDeFk+FHzd5755effs1mniuy71zcvSswdQeBT/jdQWL8soAUcvp4LbsU7enjVAOXlcuBrK4O1VI/SF5/DMlyG8vFpyeOrkVKH3uW9e3j073Bw8LihdapuXpWePy4nnqMjCuzJKwH0np4bPnldnDfhu53E7RXu2WsTXI88RyqFbLTm80O3TgLZ82j17vLTxKE6FRVJG9nhv4DnhYYwB716nAeOVR/HGAs8FxudpwnjgUby1eKqwHg4L9jtJCT8AuRaH3w1WUDggWgAAAJAEAJ0BKkcAMAA+YSSORaQiIRu0AEAGBLSEOALAA+gD+AAB4Pic/zDngQ/zAAD+zXZ1//8bX5J9DOezPmyEH++a5N39eCl/5wf//n/f/8/Mf/+eLS+kvwAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 48,
      w: 71,
      id: "image_7",
      p: "data:image/webp;base64,UklGRtABAABXRUJQVlA4WAoAAAAQAAAARgAALwAAQUxQSFYBAAABkFXbVhhJV8KTgAQkIAEJkYAEJCABCUhAAhKQ8Bzc7h5Chbya/4iYADzp0yX4gpmkenuR/zZzooturvM7JK6jMa+rBuODSxVjhesA24HrAtsyVwPGG9f+VSG3Sc1bF9cJb/WpDt7GDaerjje6WDr320bnUuWUhNyUn29kriNOhlQnH75uPNcVT/urdB6sWMtcTXlCYu7Kk6NcuC1ce3waUps8OVsK2I1cZ+z6qw6e1J6D4EPR1cDaxdx5tJfL4cnGpTpAQm7Kk6Mmj6cT1yXVwZPachAc9HpztOfocHrw8KiXxxszD86WAt7q+LD2HAVvzk/0cnm8/pNZU4BNt5UFhi/dYLYENzY4vCEgb1CTJYR5RzYxBKkb1GgIiHpHFjEE1zc4vCEgbZDZEvzYYHeGIGWDGg0BQe/IJoYgbYPdEpD0jrbgxpcA8mqaQ5j/RHuQ3GvAfxhWUDggVAAAALAEAJ0BKkcAMAA+XSKNRaOiIRzEADgFxLSAAHVPu9/RxzZCHRPOMWpiuXlK7gAA/bP//L3Gp//8uQav//OKa3K/9FUUH//OnwxXP/wtev880AAAAA==",
      u: "",
      e: 1,
    },
  ],
  ei = [
    {
      ind: 1,
      ty: 2,
      nm: "e",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.944] },
              o: { x: [0], y: [0] },
              t: 0,
              s: [100],
            },
            {
              i: { x: [0.833], y: [31.556] },
              o: { x: [0], y: [0] },
              t: 20,
              s: [0],
            },
            {
              i: { x: [0.833], y: [1] },
              o: { x: [0], y: [0] },
              t: 130,
              s: [0],
            },
            { t: 149, s: [100] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [215.206, 608.028, 0] },
        a: { a: 0, k: [98.537, 98.538, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_0",
    },
    {
      ind: 2,
      ty: 2,
      nm: "u",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [214.793, 607.962, 0] },
        a: { a: 0, k: [98.538, 98.538, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_1",
    },
    {
      ind: 3,
      ty: 2,
      nm: "u",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.23], y: [1] },
              o: { x: [0.15], y: [0] },
              t: 0,
              s: [100],
            },
            {
              i: { x: [0.23], y: [1] },
              o: { x: [0.15], y: [0] },
              t: 20,
              s: [0],
            },
            {
              i: { x: [0.23], y: [1] },
              o: { x: [0.15], y: [0] },
              t: 130,
              s: [0],
            },
            { t: 149, s: [100] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [601.793, 419.962, 0] },
        a: { a: 0, k: [98.538, 98.538, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_1",
    },
    {
      ind: 4,
      ty: 2,
      nm: "e",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [601.206, 420.028, 0] },
        a: { a: 0, k: [98.537, 98.538, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_0",
    },
    {
      ind: 5,
      ty: 2,
      nm: "d",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [216, 451.445, 0] },
        a: { a: 0, k: [96.687, 96.337, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 70,
      op: 150,
      st: 72.0000029326201,
      refId: "image_2",
    },
    {
      ind: 6,
      ty: 2,
      nm: "e",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [600, 574.677, 0] },
        a: { a: 0, k: [96.687, 96.337, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 70,
      op: 150,
      st: 72.0000029326201,
      refId: "image_3",
    },
    {
      ind: 7,
      ty: 2,
      nm: "d",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [600, 574.445, 0] },
        a: { a: 0, k: [96.687, 96.337, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 70,
      st: 0,
      refId: "image_2",
    },
    {
      ind: 8,
      ty: 2,
      nm: "e",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [216, 451.677, 0] },
        a: { a: 0, k: [96.687, 96.337, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 70,
      st: 0,
      refId: "image_3",
    },
    {
      ind: 9,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [215.207, 297.143, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 70,
              s: [215.207, 313.143, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 149, s: [215.207, 297.143, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [94.448, 94.098, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_4",
    },
    {
      ind: 10,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [605.257, 725.654, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 70,
              s: [605.257, 707.654, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 149, s: [605.257, 725.654, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [94.449, 94.098, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_5",
    },
    {
      ind: 11,
      ty: 2,
      nm: "s",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [425.243, 451.384, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 34,
              s: [456.743, 435.884, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 70,
              s: [427.743, 449.384, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 109,
              s: [456.743, 436.384, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 149, s: [424.743, 451.384, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [35.289, 23.565, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_6",
    },
    {
      ind: 12,
      ty: 2,
      nm: "s",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [400.596, 502.688, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 34,
              s: [376.096, 514.688, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 70,
              s: [400.096, 502.688, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 109,
              s: [374.096, 515.688, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 149, s: [403.096, 504.688, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [35.5, 23.646, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_7",
    },
  ],
  ai = [],
  si = {
    v: YA,
    ip: GA,
    op: qA,
    fr: KA,
    w: zA,
    h: ZA,
    nm: _A,
    assets: $A,
    layers: ei,
    markers: ai,
  },
  ti = "/assets/landing-forex-4fe7096e.svg",
  ea = ({ src: a, title: t, className: i, visible: s, setVisible: o }) => {
    const A = l.useRef(null),
      n = a.indexOf("?") > -1 ? "&" : "?";
    return (
      (a += n + "autoplay=1"),
      e.jsx(qe, {
        wrapClassName: "no-padding",
        visible: s,
        onCancel: () => {
          var r;
          if ((o(!1), A.current)) {
            const c =
              (r = A == null ? void 0 : A.current) == null
                ? void 0
                : r.src.replace("autoplay=1", "autoplay=0");
            A.current.src = c;
          }
        },
        children: e.jsx("iframe", {
          ref: A,
          className: `${
            i || ""
          } z-1 aspect-video w-full overflow-hidden rounded-xl`,
          src: a,
          title: t,
          allow:
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowFullScreen: !0,
        }),
      })
    );
  };
function ma(a, t) {
  for (const i of a) if (i.token === t) return i.rate;
  return 1;
}
const Ai = ({ Volume: a, setVolume: t, rate: i, globalData: s }) => {
  const [o, A] = l.useState(1);
  l.useEffect(() => {
    if (
      !s.utilisationData ||
      !s.pricesData ||
      !s.savingsData ||
      !s.supplyData ||
      !s.collateralsData
    )
      return;
    const r = {
        holders: 0,
        transactions: 0,
        volume: 0,
        supply: 0,
        marketCap: 0,
      },
      c = {},
      h = s.utilisationData;
    Object.values(Le).forEach((d) => {
      c[d] = ma(s.pricesData, d);
    }),
      Object.values(Le).forEach((d) => {
        h[d] &&
          Object.entries(h[d]).forEach(([, p]) => {
            const u = c[d],
              g = Number.parseFloat(p.volume) * u,
              B = Number.parseFloat(p.supply);
            (r.holders += p.holders),
              (r.transactions += p.transactions),
              (r.volume += g),
              (r.supply += B),
              (r.marketCap += B * u);
          });
      }),
      t(r.volume / o),
      A(ma(s.pricesData, "EUR"));
  }, [s.utilisationData, t, s.pricesData, s.savingsData, s, o]);
  const n = 25;
  return (
    ze(() => {
      a !== null && t((r) => Math.floor(r + i / (1e3 / n)));
    }, n),
    de(a)
  );
};
function ii() {
  return e.jsx("div", {});
}
function fe(a = {}) {
  const [t, i] = l.useState(e.jsx(ii, {}));
  return (
    l.useEffect(() => {
      async function s() {
        const o = await O(
          () => import("./react-fa804298.js").then((A) => A.cQ),
          ["assets/react-fa804298.js", "assets/lodash-52c9deff.js"]
        );
        i(e.jsx(o.Player, { ...a }));
      }
      typeof window < "u" && s();
    }, []),
    t
  );
}
const ni = ({ texts: a, textClassName: t }) =>
    e.jsx("ul", {
      className: "list-gradient",
      children: a.map((i, s) =>
        e.jsx(
          x.li,
          {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0, amount: 0.5 },
            transition: { delay: s * 0.2, duration: 0.4, ease: "easeInOut" },
            className: t,
            children: i,
          },
          s
        )
      ),
    }),
  li = () => {
    const a = Ia(),
      i = Qa() ? "translate(0,0)" : `translate(${a.x - 18}px,${a.y}px)`;
    return e.jsx("div", {
      className:
        "cursor-box pointer-events-none fixed -left-14 -top-14 z-2 hidden h-36 w-36 items-center justify-center rounded-full mix-blend-difference will-change-transform dark:bg-peach-500 lg:flex",
      style: {
        transform: i,
        clipPath: "polygon(50% 0, 100% 50%, 75% 75%, 50% 50%, 25% 75%, 0% 50%)",
      },
    });
  },
  ae = ({
    wrapperClassName: a,
    background: t,
    gradientClassName: i,
    animationClassName: s,
    animation: o,
  }) => {
    const A = fe({
      src: o,
      loop: !0,
      autoplay: !0,
      className: `${s || ""} col-start-1 row-start-1`,
    });
    return e.jsxs("div", {
      className: `${
        a || ""
      } custom-cursor-section relative grid aspect-[4/5] max-h-[80vh] w-3/5 md:w-2/5 place-content-center place-items-center overflow-hidden rounded-3xl mx-auto lg:w-2/3 xl:w-3/5`,
      children: [
        e.jsx(li, {}),
        A,
        e.jsx("figure", {
          className: `${
            i || "before:gradient-multiple"
          } col-start-1 row-start-1 w-full overflow-hidden rounded-3xl`,
          children: e.jsx("img", {
            src: t,
            alt: "Gradient with Angle Logo + Tokens",
          }),
        }),
      ],
    });
  },
  T = ({
    wrapperClassName: a,
    invert: t,
    image: i,
    textarea: s,
    framerContainer: o,
    framerItem: A,
  }) =>
    e.jsxs("div", {
      className: `${a || ""} flex flex-wrap items-center gap-8 lg:gap-0`,
      children: [
        e.jsxs(x.div, {
          variants: o,
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: !0 },
          className: `${s.className ? s.className : ""} ${
            t ? "order-1 lg:order-2" : "order-2 lg:order-1"
          } w-full items-center justify-center px-4 lg:w-1/2 lg:px-12`,
          children: [
            !!s.title &&
              e.jsx(x.h3, {
                variants: A,
                className: "mb-4 dark:text-black-500",
                children: s.title,
              }),
            s.list.picto
              ? s.list.picto.map((n, r) =>
                  e.jsxs(
                    x.div,
                    {
                      variants: A,
                      className: "mb-4 flex items-start gap-4",
                      children: [
                        !!n.icon && n.icon,
                        e.jsx("p", {
                          className: "w-fit text-xl dark:text-black-500",
                          children: n.text,
                        }),
                      ],
                    },
                    r
                  )
                )
              : e.jsx(ni, {
                  textClassName: "text-xl dark:text-black-500",
                  texts: s.list.texts,
                }),
            !!s.button &&
              e.jsx(x.div, {
                variants: A,
                className: "mt-6 flex flex-wrap items-center gap-4",
                children: s.button,
              }),
          ],
        }),
        e.jsx("div", {
          className: `${i.className ? i.className : ""} ${
            t ? "order-2 lg:order-1" : "order-2"
          } flex w-full items-center justify-center px-4  lg:w-1/2`,
          children: !!i.node && i.node,
        }),
      ],
    }),
  pa = "/assets/arrow-69223c14.svg",
  oi = (a) => {
    const [t, i] = l.useState(!1);
    return (
      l.useEffect(() => {
        const s = (A) => {
          i(A.map((n) => n.complete).every((n) => n === !0));
        };
        if (!a.current) return;
        const o = Array.from(a.current.querySelectorAll("img"));
        if (o.length === 0) {
          i(!0);
          return;
        }
        o.forEach((A) => {
          A.addEventListener("load", () => s(o), { once: !0 }),
            A.addEventListener("error", () => s(o), { once: !0 });
        });
      }, [a]),
      t
    );
  },
  ri = () => {
    const [a, t] = l.useState(_.INVESTORS),
      [i, s] = l.useState(0),
      { t: o } = q(),
      A = l.useRef(null),
      n = oi(A);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className: "container-padding mb-6 flex flex-wrap gap-2 lg:px-0",
          children: [
            e.jsx(k, {
              type: "tag",
              look: "white",
              onClick: () => {
                t(_.DEFI), s(0);
              },
              enabled: a === _.DEFI,
              children: "DeFi",
            }),
            e.jsx(k, {
              type: "tag",
              look: "white",
              onClick: () => {
                t(_.CHAINS), s(0);
              },
              enabled: a === _.CHAINS,
              children: o("Chains"),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "partners-slider",
          children: [
            e.jsx("div", {
              className:
                "overflow-section mb-4 flex grid-cols-2 grid-rows-3 gap-4 overflow-x-scroll md:grid md:grid-cols-3 md:grid-rows-2 md:overflow-x-visible lg:px-0",
              ref: A,
              children: Object.values(Ve)
                .filter((r) => a === r.category)
                .slice(i, i + 6)
                .map((r, c) =>
                  e.jsx(
                    "span",
                    {
                      className:
                        "dim partner--link relative flex aspect-square h-36 items-center justify-center rounded-md p-6 dark:bg-white dark:bg-opacity-25 md:aspect-auto",
                      children: n
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("img", {
                                className: `${
                                  r == null ? void 0 : r.className
                                } partner-logo max-h-[80%] w-auto min-w-[60px] max-w-[80%]`,
                                src: r.logo,
                                alt: "partner logo",
                              }),
                              (r == null ? void 0 : r.name) &&
                                e.jsx("p", {
                                  className:
                                    "ease absolute bottom-0 left-1/2 w-full -translate-x-1/2 transform px-4 text-center font-bold opacity-0 dark:text-black-500",
                                  children: r == null ? void 0 : r.name,
                                }),
                            ],
                          })
                        : e.jsx(Me, {
                            variant: "rectangular",
                            sx: { bgcolor: "#fff" },
                            width: 150,
                            height: 75,
                            className: "w-full rounded-lg",
                            animation: "wave",
                          }),
                    },
                    c
                  )
                ),
            }),
            e.jsxs("div", {
              className: "hidden items-center justify-end gap-x-2 md:flex",
              children: [
                e.jsx("button", {
                  className:
                    "ease h-10 w-10 rounded-full bg-transparent p-2 hover:bg-white",
                  disabled: i < 6,
                  onClick: () => s(i - 6),
                  children: e.jsx("img", {
                    src: pa,
                    alt: "arrow",
                    className: "invert filter",
                  }),
                }),
                e.jsx("button", {
                  className:
                    "ease h-10 w-10 rounded-full bg-transparent p-2 hover:bg-white",
                  disabled:
                    i + 6 >
                    Object.values(Ve).filter((r) => a === r.category).length -
                      1,
                  onClick: () => s(i + 6),
                  children: e.jsx("img", {
                    className: "rotate-180 transform invert filter",
                    src: pa,
                    alt: "arrow",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  xa = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  },
  ci = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.8, staggerChildren: 0.3 },
    },
  },
  De = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  di = {
    hidden: { x: -10, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  },
  ua = ({ title: a, description: t, token: i, buttons: s, className: o }) =>
    e.jsxs(x.div, {
      initial: { opacity: 0, y: "-50px", filter: "blur(20px)" },
      whileInView: { opacity: 1, y: 0, filter: "blur(0)" },
      viewport: { once: !0, amount: 0.5 },
      transition: { duration: 0.6, ease: "easeInOut" },
      className: `relative flex w-full lg:w-5/12 ${o} rounded-lg border-t-8 px-8 pb-6 pt-10 dark:bg-white md:px-10 md:pb-12 md:pt-16`,
      children: [
        e.jsx("figure", {
          className: "absolute -top-1 left-8 -translate-y-1/2 md:left-10",
          children: e.jsx(Ca, { token: i, className: "w-12 md:w-16" }),
        }),
        e.jsxs("div", {
          children: [
            e.jsx("h3", {
              className: "h4 mb-4 dark:text-black-500",
              children: a,
            }),
            e.jsx("p", {
              className: "mb-6 text-xl dark:text-black-500",
              children: t,
            }),
            e.jsx("div", {
              className: "flex flex-wrap items-center gap-4",
              children: s.map((A, n) => e.jsx(ya.Fragment, { children: A }, n)),
            }),
          ],
        }),
      ],
    }),
  fa = ({ stablecoin: a, token: t, apy: i, button: s }) => {
    const [o, A] = l.useState(),
      [n, r] = l.useState();
    return (
      l.useEffect(() => {
        async function c(u, g, B) {
          try {
            const v = await (
              await fetch(`${G}savingsApr?from=${u}&to=${g}`)
            ).json();
            v && B(v);
          } catch (v) {
            console.error("Could not fetch average APR", v);
          }
        }
        const h = Math.floor(Ye().unix()),
          d = h - 30 * 86400,
          p = h - 30 * 2 * 86400;
        c(d, h, (u) => A(u)), c(p, h, (u) => r(u));
      }, []),
      e.jsxs("div", {
        className:
          "flex flex-wrap items-center justify-between gap-2 md:gap-4 border-b last:border-b-0 dark:border-blue-500 pb-4 last:pb-0",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2 md:gap-4",
            children: [
              e.jsx(Ca, { token: t, className: "w-10 md:w-12" }),
              e.jsx("p", {
                className: "h2 dark:text-black-500 flex items-end",
                children: e.jsxs(se, {
                  dark: !0,
                  title: e.jsxs("ul", {
                    className: "list-none pl-0",
                    children: [
                      e.jsx("li", {
                        children: e.jsxs("p", {
                          className: "font-bold flex items-center gap-2",
                          children: [
                            "30 Day Average APY:",
                            " ",
                            e.jsx(Ie, {
                              color: "blue",
                              children:
                                (o == null ? void 0 : o[a]) === void 0
                                  ? "..."
                                  : Ee(o == null ? void 0 : o[a], 2, "percent"),
                            }),
                          ],
                        }),
                      }),
                      n &&
                        e.jsx("li", {
                          children: e.jsxs("p", {
                            className: "font-bold flex items-center gap-2",
                            children: [
                              "60 Day Average APY:",
                              " ",
                              e.jsx(Ie, {
                                color: "blue",
                                children:
                                  (n == null ? void 0 : n[a]) === void 0
                                    ? "..."
                                    : Ee(
                                        n == null ? void 0 : n[a],
                                        2,
                                        "percent"
                                      ),
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                  children: [
                    i,
                    "%",
                    e.jsx("span", {
                      className: "h5 ml-1 md:ml-2",
                      children: "APY",
                    }),
                  ],
                }),
              }),
            ],
          }),
          !!s && s,
        ],
      })
    );
  },
  gi = [
    {
      title: e.jsxs(e.Fragment, {
        children: [
          "Infinite ",
          e.jsx("span", { className: "h5", children: "liquidity" }),
        ],
      }),
      content:
        "USDA is <strong>as liquid as USDC.</strong> Holders can swap from USDC to USDA, and vice versa, instantly, anytime. No fees, no slippage.",
    },
    {
      title: e.jsxs(e.Fragment, {
        children: [
          "Unwavering ",
          e.jsx("span", { className: "h5", children: "stability" }),
        ],
      }),
      content:
        "USDA & EURA are multi-audited stablecoins designed to withstand adverse market conditions. They rely on innovative <strong>price stability mechanisms</strong> based on cutting-edge stablecoin research.",
    },
    {
      title: e.jsxs(e.Fragment, {
        children: [
          "Enhanced ",
          e.jsx("span", { className: "h5", children: "solvency" }),
        ],
      }),
      content:
        "USDA & EURA are fully collateralized. They can instantly, and at any time, be redeemed for any token used as collateral in the reserves. They're both fortified by a large equity buffer for an added layer of protection.",
    },
  ];
function mi(a, t) {
  return Fs(a, [0, 1], [-t, t]);
}
const pi = ["yield", "transparency", "stability", "accessibility"],
  ka = ({ pageData: a, className: t }) => {
    const i = l.useMemo(
      () => [
        {
          key: "1",
          label: e.jsx("p", {
            className: "text-xl font-bold",
            children: "USDA",
          }),
          children: e.jsx(Oe, {
            pageData: {
              totalAssets: a.totalAssetsUSDA,
              totalLiabilities: a.totalLiabilitiesUSDA,
              equity: a.equityUSDA,
            },
            currency: "USD",
          }),
        },
        {
          key: "2",
          label: e.jsx("p", {
            className: "text-xl font-bold",
            children: "EURA",
          }),
          children: e.jsx(Oe, {
            pageData: {
              totalAssets: a.totalAssetsEURA,
              totalLiabilities: a.totalLiabilitiesEURA,
              equity: a.equityEURA,
            },
            currency: "EUR",
          }),
        },
      ],
      [a]
    );
    return e.jsx(x.div, {
      variants: De,
      className: `hover:lg:outline-white flex items-center justify-between px-7 py-5 bg-white lg:!outline-1 lg:outline lg:!outline-offset-0 lg:outline-transparent ease overflow-hidden flex-col gap-2 dark:border-white border row-span-2 rounded-2xl ${t}`,
      children: e.jsx(Ys, { defaultActiveKey: "1", items: i }),
    });
  },
  xi = () => {
    var H, P;
    const { t: a } = q(),
      { prices: t } = Te(),
      [i, s] = l.useState(1),
      [o, A] = l.useState("0"),
      [n, r] = l.useState(0),
      [c, h] = l.useState(0),
      [d, p] = l.useState(0),
      [, u] = l.useState(0),
      [g, B] = l.useState(!1),
      [v, D] = l.useState(!1),
      [w, N] = l.useState({}),
      [E, V] = l.useState({}),
      [b, U] = l.useState(null),
      Q = async () => {
        const f = "https://paragraph.xyz/api/blogs/rss/@angleprotocol";
        try {
          const z = await (await fetch(f)).text(),
            $ = new DOMParser()
              .parseFromString(z, "text/xml")
              .querySelectorAll("item"),
            le = Array.from($).map((ee) => ({
              id: ee.querySelector("guid").textContent,
              title: ee.querySelector("title").textContent,
              url: ee.querySelector("link").textContent,
              pubDate: ee.querySelector("pubDate").textContent,
              cover: ee.querySelector("enclosure").getAttribute("url"),
            }));
          U(le);
        } catch (J) {
          console.error("Error fetching or parsing Paragraph RSS feed:", J);
        }
      };
    l.useEffect(() => {
      Q();
    }, []),
      l.useEffect(() => {
        M.get(`${ue}utilisation`).then((f) => {
          L(N, { utilisationData: f.data });
        }),
          M.get(`${G}savings`).then((f) => {
            L(N, { savingsData: f.data });
          }),
          M.get(`${G}collaterals`).then((f) => {
            L(N, { collateralsData: f.data });
          }),
          M.get(`${G}supply?agTokens=EURA&agTokens=USDA`).then((f) => {
            L(N, { supplyData: f.data });
          });
      }, []),
      l.useEffect(() => {
        if (
          !w.utilisationData ||
          !w.savingsData ||
          !w.supplyData ||
          !w.collateralsData ||
          !t
        )
          return;
        const f = {
            holders: 0,
            transactions: 0,
            volume: 0,
            supply: 0,
            marketCap: 0,
          },
          J = {},
          z = w.utilisationData;
        for (const Y of Object.values(Le)) {
          if (z[Y])
            for (const [, Z] of Object.entries(z[Y]))
              (f.holders += Z.holders),
                (f.transactions += Z.transactions),
                (f.volume += Number.parseFloat(Z.volume) * t[Y]),
                (f.supply += Number.parseFloat(Z.supply)),
                (f.marketCap += Number.parseFloat(Z.supply) * t[Y]);
          w.savingsData[Y] &&
            (J[Y] = Number((w.savingsData[Y][1].apr * 100).toFixed(1)));
        }
        const y = Ke(
            t,
            w.collateralsData,
            w.supplyData,
            z,
            w.savingsData,
            void 0,
            void 0,
            void 0,
            !0
          ),
          F = y.reduce((Y, Z) => Y + Z.tvl, 0);
        y.pop();
        const $ = y.reduce((Y, Z) => Y + Z.supply, 0),
          le = y.reduce((Y, Z) => Y + Z.holders, 0),
          ee = y.reduce((Y, Z) => Y + Z.marketCap, 0),
          Ta = F / 1e6 / i,
          { totalAssets: ta, totalLiabilities: Aa } = ge(
            w.collateralsData,
            w.savingsData,
            me.EURA,
            t.EURA ? t.EURA : 1
          ),
          { totalAssets: ia, totalLiabilities: na } = ge(
            w.collateralsData,
            w.savingsData,
            me.USDA,
            t.USDA ? t.USDA : 1
          );
        A(Ta.toFixed(0)),
          r(f.volume / i),
          u(Number.parseFloat((ee / 1e6).toFixed(0)) / i),
          h(f.volume / (Math.floor(Date.now() / 1e3) - 1635721200)),
          p(Number.parseFloat(($ / 1e6).toFixed(0))),
          s(t.EUR),
          L(V, {
            totalAssetsEURA: ta,
            totalAssetsUSDA: ia,
            totalLiabilitiesEURA: Aa,
            totalLiabilitiesUSDA: na,
            equityEURA: ta - Aa,
            equityUSDA: ia - na,
            holders: le,
            savingsApys: J,
          });
      }, [w.utilisationData, w.savingsData, w, i, t]),
      ne("section,.observe");
    const j = l.useRef(null),
      { scrollYProgress: I } = Ms({ target: j });
    return (
      mi(I, 300),
      e.jsxs(e.Fragment, {
        children: [
          e.jsx(qe, {
            title: a("Where does the yield come from?"),
            titleIcon: e.jsx(m, { mui: "Toll" }),
            wrapClassName: "modal-50",
            visible: v,
            onCancel: () => {
              D(!1);
            },
            children: e.jsxs("ul", {
              className: "pl-0",
              children: [
                e.jsx("li", {
                  className: "py-1.5 list-none",
                  children: e.jsxs(R, {
                    children: [
                      e.jsx("strong", { children: "Real yield" }),
                      e.jsx("br", {}),
                      "Yield stems from returns generated by ",
                      e.jsx("strong", {
                        children: "assets backing USDA and EURA",
                      }),
                      " (e.g. RWAs), and interest paid by stablecoin borrowers.",
                    ],
                  }),
                }),
                e.jsx("li", {
                  className: "py-1.5 list-none",
                  children: e.jsxs(R, {
                    children: [
                      e.jsx("strong", { children: "Booster effect" }),
                      e.jsx("br", {}),
                      "The ",
                      e.jsx("strong", {
                        children:
                          "Angle savings solution receives yield from the entire USDA & EURA backing.",
                      }),
                      " However, not all stablecoins are deposited into the savings product, and therefore eligible for this yield. The fewer stablecoins deposited, the more boosted the savings yield.",
                    ],
                  }),
                }),
                e.jsx("li", {
                  className: "py-1.5 list-none",
                  children: e.jsxs(R, {
                    children: [
                      e.jsx("strong", { children: "Infinite liquidity" }),
                      e.jsx("br", {}),
                      "The Angle savings solution is liquid and ",
                      e.jsx("strong", { children: "permissionless." }),
                      " Users can enter or leave without any cost, anytime.",
                    ],
                  }),
                }),
                e.jsx("li", {
                  className: "py-1.5 list-none",
                  children: e.jsxs(R, {
                    children: [
                      e.jsx("strong", { children: "Enhanced Solvency" }),
                      e.jsx("br", {}),
                      "USDA & EURA are ",
                      e.jsx("strong", { children: "fully backed" }),
                      " — anyone can redeem their stablecoins for collateral in the reserves. Additionally, USDA & EURA are reinforced by an ",
                      e.jsx("strong", { children: "equity buffer" }),
                      " as an added layer of protection.",
                    ],
                  }),
                }),
              ],
            }),
          }),
          e.jsx("section", {
            className: "intro pt-24 md:pt-28",
            children: e.jsxs("div", {
              className: "container flex flex-wrap gap-8 lg:gap-0 items-center",
              children: [
                e.jsxs("div", {
                  className: "w-full lg:w-7/12 lg:pr-24",
                  children: [
                    e.jsx("h1", {
                      className: "h4 md:mb-4 !font-normal dark:text-black-500",
                      children: e.jsx(ce, {
                        wordsMargin: "mr-1",
                        children: a("USDA and EURA stablecoins"),
                      }),
                    }),
                    e.jsxs("h2", {
                      className: "display1 my-3 md:mb-4 dark:text-black-500",
                      children: [
                        e.jsx(ce, {
                          wordsMargin: "mr-3",
                          children: a("Ask more"),
                        }),
                        e.jsx("br", {}),
                        e.jsx(ce, {
                          wordsMargin: "mr-3",
                          children: a("from your money"),
                        }),
                      ],
                    }),
                    e.jsxs(x.div, {
                      initial: "hidden",
                      whileInView: "visible",
                      viewport: { once: !0 },
                      variants: ci,
                      className: "mb-8 flex items-center gap-2 flex-wrap",
                      children: [
                        e.jsx("div", {
                          className: "w-full md:w-auto flex justify-start",
                          children: e.jsx(x.div, {
                            variants: De,
                            className:
                              "h5 !text-base bg-black-500 text-white py-1 px-4",
                            children: "MORE",
                          }),
                        }),
                        pi.map((f, J) =>
                          e.jsx(
                            x.div,
                            {
                              variants: di,
                              children: e.jsx(k, {
                                type: "tag",
                                className: "h5 !text-base",
                                look: "white",
                                children: f,
                              }),
                            },
                            J
                          )
                        ),
                      ],
                    }),
                    e.jsxs(x.div, {
                      className: "flex gap-2",
                      initial: { opacity: 0, y: "-30px" },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 2.3 },
                      children: [
                        e.jsx(k, {
                          type: "button",
                          look: "primary",
                          onClick: () => window.open(C.angleApp, "_blank"),
                          children: a("Get started"),
                        }),
                        e.jsx(k, {
                          type: "button",
                          look: "secondary",
                          onClick: () => B(!0),
                          leftIcon: e.jsx(m, {
                            mui: "PlayCircleFilledOutlined",
                          }),
                          children: a("Learn more"),
                        }),
                        e.jsx(ea, {
                          src: "https://www.youtube.com/embed/DDoY_CUrd7M",
                          title: "Introduction to Angle",
                          visible: g,
                          setVisible: B,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(x.div, {
                  initial: { opacity: 0, y: "30px", scale: 0.95 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: { delay: 0.4, duration: 0.3 },
                  className:
                    "flex flex-col overflow-x-hidden w-full lg:w-5/12 dark:bg-white dark:bg-opacity-50 rounded-2xl relative",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex flex-col justify-center px-6 py-8 md:px-8 md:py-12 gap-4",
                      children: [
                        e.jsx(fa, {
                          stablecoin: "USDA",
                          token: "stUSD",
                          apy:
                            (H = E.savingsApys) != null && H.USDA
                              ? E.savingsApys.USDA
                              : e.jsx(Me, { className: "min-w-12" }),
                          button: e.jsx(k, {
                            type: "button",
                            look: "underlined",
                            onClick: () =>
                              window.open(C.angleSavingsUSDA, "_blank"),
                            rightIcon: e.jsx(m, { mui: "CallMade" }),
                            children: a("Earn a Dollar yield"),
                          }),
                        }),
                        e.jsx(fa, {
                          stablecoin: "EURA",
                          token: "stEUR",
                          apy:
                            (P = E.savingsApys) != null && P.EURA
                              ? E.savingsApys.EURA
                              : e.jsx(Me, { className: "min-w-12" }),
                          button: e.jsx(k, {
                            type: "button",
                            look: "underlined",
                            onClick: () =>
                              window.open(C.angleSavingsEURA, "_blank"),
                            rightIcon: e.jsx(m, { mui: "CallMade" }),
                            children: a("Earn a Euro yield"),
                          }),
                        }),
                      ],
                    }),
                    e.jsxs(k, {
                      look: "text",
                      className:
                        "h6 !justify-between !w-full hover:dark:!text-black-500 dim bg-white !p-6 md:!p-8 !rounded-t-none",
                      onClick: () => {
                        D(!v);
                      },
                      children: [
                        a("Where does the yield come from?"),
                        e.jsx(m, { svg: "tooltip", size: "l" }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "w-full bg-gradient-to-t from-white from-10% to-transparent to-90%",
                  children: [
                    e.jsxs("div", {
                      className:
                        "observe mx-auto my-8 flex w-full flex-col items-center md:w-2/3 lg:mt-24",
                      children: [
                        e.jsx(x.img, {
                          initial: { y: "-20px" },
                          whileInView: { y: "0" },
                          viewport: { once: !0, amount: 0.5 },
                          transition: { duration: 1, delay: 0.3 },
                          src: HA,
                          alt: "arrow",
                          className: "h-28 pb-4",
                        }),
                        e.jsx("h3", {
                          className: "h2 mb-8 text-center dark:text-black-500",
                          children: e.jsx(ce, {
                            delayChildren: 0.15,
                            children: a(
                              "Earn yield, buy, borrow and trade the most reliable Euro and U.S. Dollar stablecoins"
                            ),
                          }),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "container-lg",
                      children: e.jsxs("div", {
                        className:
                          "mb-8 flex w-full flex-wrap justify-center gap-12 px-4 md:px-8 lg:mb-16 lg:gap-8 lg:px-0",
                        children: [
                          e.jsx(ua, {
                            title: "The DeFi Superconductor",
                            description:
                              "Explore USDA, the most complete and reliable U.S. Dollar stablecoin",
                            className: "dark:border-green-500",
                            token: "USDA",
                            buttons: [
                              e.jsx(K, {
                                to: S.USDA,
                                children: e.jsx(k, {
                                  type: "button",
                                  look: "primary",
                                  children: a("Discover USDA"),
                                }),
                              }),
                              // e.jsx(k, {
                              //   type: "button",
                              //   look: "underlined",
                              //   onClick: () =>
                              //     window.open(C.angleSwap, "_blank"),
                              //   rightIcon: e.jsx(m, { mui: "CallMade" }),
                              //   children: a("Get USDA"),
                              // }),
                            ],
                          }),
                          e.jsx(ua, {
                            title: "Onchain Euro, Endless possibilities",
                            description:
                              "Discover EURA, the most liquid and scalable Euro stablecoin",
                            token: "EURA",
                            className: "dark:border-blue-500",
                            buttons: [
                              e.jsx(
                                K,
                                {
                                  to: S.EURA,
                                  className: "dark:text-black-500",
                                  children: e.jsx(k, {
                                    type: "button",
                                    look: "primary",
                                    children: a("Explore EURA"),
                                  }),
                                },
                                "eura-explore"
                              ),
                              // e.jsx(
                              //   k,
                              //   {
                              //     type: "button",
                              //     look: "underlined",
                              //     onClick: () =>
                              //       window.open(C.angleApp, "_blank"),
                              //     rightIcon: e.jsx(m, { mui: "CallMade" }),
                              //     children: a("Get EURA"),
                              //   },
                              //   "eura-get"
                              // ),
                            ],
                          }),
                        ],
                      }),
                    }),
                    e.jsx("section", {
                      className: "container-lg my-12 lg:my-40",
                      children: e.jsxs(x.div, {
                        variants: xa,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: { once: !0 },
                        className:
                          "overflow-section lg:!grid grid-cols-10 gap-4",
                        children: [
                          gi.map((f, J) =>
                            e.jsxs(
                              x.div,
                              {
                                variants: De,
                                className:
                                  "overflow-element col-start-1 lg:col-span-6 hover:lg:outline-white lg:!outline-1 lg:outline lg:!outline-offset-0 lg:outline-transparent ease md:!min-w-[45vw] lg:!min-w-fit flex flex-col gap-2 p-5 dark:border-white border row-span-1 rounded-2xl",
                                children: [
                                  e.jsx("h6", { children: f.title }),
                                  e.jsx("p", {
                                    className: "dark:text-black-500",
                                    children: e.jsx(R, { children: f.content }),
                                  }),
                                ],
                              },
                              J
                            )
                          ),
                          e.jsx(ka, {
                            pageData: E,
                            className:
                              "hidden lg:grid col-span-4 row-span-3 row-start-1 col-start-7",
                          }),
                        ],
                      }),
                    }),
                    e.jsx("div", {
                      className: "container",
                      children: e.jsx(ka, {
                        pageData: E,
                        className: "lg:hidden w-full",
                      }),
                    }),
                    e.jsx("section", {
                      className: "container my-12 md:my-20 lg:my-40",
                      children: e.jsx("div", {
                        className:
                          "flex flex-wrap items-center gap-8 rounded-2xl drop-shadow lg:gap-0",
                        children: e.jsx(T, {
                          invert: !0,
                          image: {
                            node: e.jsxs(x.div, {
                              variants: xa,
                              initial: "hidden",
                              whileInView: "visible",
                              viewport: { once: !0 },
                              className: "lg:px-6",
                              children: [
                                e.jsx(x.h4, {
                                  variants: De,
                                  className: "h3 mb-4",
                                  children: a(
                                    "The best of DeFi and TradFi yields"
                                  ),
                                }),
                                e.jsxs("div", {
                                  className: "mt-4 flex gap-4",
                                  children: [
                                    e.jsx(K, {
                                      to: S.stUSD,
                                      children: e.jsx(k, {
                                        type: "button",
                                        look: "secondary",
                                        leftIcon: e.jsx(m, {
                                          mui: "AttachMoney",
                                          className: "-mr-0.5",
                                        }),
                                        children: a("Earn Dollars"),
                                      }),
                                    }),
                                    e.jsx(K, {
                                      to: S.stEUR,
                                      children: e.jsx(k, {
                                        type: "button",
                                        look: "secondary",
                                        leftIcon: e.jsx(m, {
                                          mui: "Euro",
                                          className: "-mt-0.5",
                                        }),
                                        children: a("Earn Euros"),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            className:
                              "!order-1 min-h-[100px] lg:min-h-[400px]",
                          },
                          textarea: {
                            className: "!order-2 !px-4",
                            list: {
                              picto: [
                                {
                                  icon: e.jsx(m, {
                                    mui: "GppGoodOutlined",
                                    size: "xl",
                                    className: "dark:text-blue-500",
                                  }),
                                  text: e.jsxs(R, {
                                    children: [
                                      e.jsx("strong", {
                                        children:
                                          "Maximize your low-risk returns",
                                      }),
                                      " from both traditional and decentralized finance by holding stUSD or stEUR.",
                                    ],
                                  }),
                                },
                                {
                                  icon: e.jsx(m, {
                                    mui: "Balance",
                                    size: "xl",
                                    className: "dark:text-blue-500",
                                  }),
                                  text: e.jsxs(R, {
                                    children: [
                                      e.jsx("strong", {
                                        children:
                                          "Angle automatically rebalances its backing",
                                      }),
                                      " (DeFi lending and tokenized securities) to offer the most competitive and secure yield.",
                                    ],
                                  }),
                                },
                                {
                                  icon: e.jsx(m, {
                                    mui: "Animation",
                                    size: "xl",
                                    className: "dark:text-blue-500",
                                  }),
                                  text: e.jsxs(R, {
                                    children: [
                                      e.jsx("strong", {
                                        children:
                                          "Earn yield effortlessly, no action required.",
                                      }),
                                      " ",
                                      e.jsx("br", {}),
                                      "Access traditional finance yields without selling your crypto for fiat!",
                                    ],
                                  }),
                                },
                              ],
                            },
                          },
                        }),
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "md:w-2/3 lg:w-1/2 grid-stack justify-center items-center mx-auto",
                      children: [
                        e.jsx(x.img, {
                          src: IA,
                          alt: "Angle Dotted",
                          className:
                            "mx-auto opacity-50 w-4/5 md:w-2/3 lg:w-4/5 xl:w-2/3",
                        }),
                        e.jsxs("div", {
                          className:
                            "flex flex-col gap-4 md:gap-6 justify-center items-center mx-auto",
                          children: [
                            e.jsx("h3", {
                              className: "h2 text-center",
                              children: a(
                                `Join over ${de(
                                  E.holders
                                )} users already leveraging Angle stablecoins`
                              ),
                            }),
                            e.jsx(k, {
                              look: "primary",
                              onClick: () => {
                                window.open(C.angleApp);
                              },
                              children: a("Launch app"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex translate-y-1/2 grid-flow-col flex-wrap items-center gap-8 gap-x-8 border-y-2 px-8 py-8 dark:border-blue-500 md:grid md:translate-y-1/2 md:grid-cols-2 md:grid-rows-2 md:py-12 lg:grid-cols-none lg:grid-rows-none lg:gap-4 lg:px-12 lg:py-16",
                      children: [
                        e.jsx("div", {
                          className: "w-full lg:pr-4",
                          children: e.jsxs("div", {
                            className: "lg:mx-auto lg:w-min",
                            children: [
                              e.jsxs(x.p, {
                                initial: { opacity: 0, y: "100%" },
                                whileInView: { opacity: 1, y: 0 },
                                transition: { duration: 1 },
                                className: "h2 mb-2 dark:text-black-500",
                                children: [
                                  // e.jsx(Ai, {
                                  //   Volume: n,
                                  //   setVolume: r,
                                  //   globalData: w,
                                  //   rate: c,
                                  // }),
                                  0, "€"
                                ],
                              }),
                              e.jsx(x.p, {
                                initial: { opacity: 0, y: "-100%" },
                                whileInView: { opacity: 1, y: 0 },
                                transition: { duration: 1 },
                                className:
                                  "whitespace-nowrap text-lg dark:text-black-500",
                                children: a("Stablecoin Volume"),
                              }),
                            ],
                          }),
                        }),
                        e.jsx("div", {
                          className: "w-full lg:pr-4",
                          children: e.jsxs("div", {
                            className: "lg:mx-auto lg:w-min",
                            children: [
                              e.jsxs(x.p, {
                                initial: { opacity: 0, y: "100%" },
                                whileInView: { opacity: 1, y: 0 },
                                transition: { duration: 1 },
                                className: "h2 mb-2 dark:text-black-500",
                                children: [0, "M+€"],
                              }),
                              e.jsx(x.p, {
                                initial: { opacity: 0, y: "-100%" },
                                whileInView: { opacity: 1, y: 0 },
                                transition: { duration: 1 },
                                className:
                                  "whitespace-nowrap text-lg dark:text-black-500",
                                children: a("Stablecoin Market Cap"),
                              }),
                            ],
                          }),
                        }),
                        e.jsx("div", {
                          className: "w-full",
                          children: e.jsxs("div", {
                            className:
                              "md:text-right lg:mx-auto lg:w-min lg:text-left",
                            children: [
                              e.jsxs(x.p, {
                                initial: { opacity: 0, y: "100%" },
                                whileInView: { opacity: 1, y: 0 },
                                transition: { duration: 1 },
                                className:
                                  "h2 mb-2 !w-auto dark:text-black-500",
                                children: [0, "M+€"],
                              }),
                              e.jsx(x.p, {
                                initial: { opacity: 0, y: "-100%" },
                                whileInView: { opacity: 1, y: 0 },
                                transition: { duration: 1 },
                                className:
                                  "whitespace-nowrap text-lg dark:text-black-500",
                                children: a("Total Value Locked"),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx("section", {
            className: "my-4 mt-56 dark:bg-white md:mb-8 md:mt-44 lg:my-16",
            children: e.jsxs("div", {
              className: "container",
              children: [
                e.jsx(T, {
                  wrapperClassName: "my-12 md:my-16 lg:my-32",
                  invert: !0,
                  image: {
                    node: e.jsx("h4", {
                      ref: j,
                      className:
                        "display2 text-gradient-purple500-blue500 lg:text-right !w-full",
                      children: e.jsxs(R, {
                        children: [
                          "True ownership, ",
                          e.jsx("br", {}),
                          "total transparency",
                        ],
                      }),
                    }),
                    className: "!order-1 min-h-[100px] lg:min-h-[400px]",
                  },
                  textarea: {
                    className: "!order-2",
                    list: {
                      texts: [
                        a(
                          "With Angle, your assets are always yours to use as you please, on your terms, at any time"
                        ),
                        a(
                          "The Protocol's reserves are transparently available for public scrutiny at any moment, every day"
                        ),
                      ],
                    },
                    // button: e.jsx(k, {
                    //   type: "button",
                    //   look: "secondary",
                    //   onClick: () => {
                    //     window.open(C.angleAnalytics, "_blank");
                    //   },
                    //   leftIcon: e.jsx(m, { mui: "QueryStats" }),
                    //   children: a("Check reserves"),
                    // }),
                  },
                }),
                e.jsx(T, {
                  invert: !0,
                  image: {
                    node: e.jsx(ae, {
                      background: ti,
                      gradientClassName: "before:gradient-sand500-peach500",
                      animation: si,
                    }),
                  },
                  textarea: {
                    title: a("Unlock onchain forex"),
                    list: {
                      picto: [
                        {
                          icon: e.jsx(m, {
                            mui: "Toll",
                            size: "xl",
                            className: "dark:text-blue-500",
                          }),
                          text: a(
                            "Exchange USDA and EURA stablecoins at the same price as traditional forex platforms"
                          ),
                        },
                        {
                          icon: e.jsx(m, {
                            svg: "swapHoriz",
                            alt: "Swap Horizontal",
                            size: "xl",
                          }),
                          text: a(
                            "Thanks to Angle's deep liquidity, swap any EUR/USD stablecoins onchain at competitive rates"
                          ),
                        },
                      ],
                    },
                    button: [
                      e.jsx(
                        k,
                        {
                          type: "button",
                          look: "primary",
                          onClick: () => {
                            window.open(C.angleSwap, "_blank");
                          },
                          children: a("Exchange currencies"),
                        },
                        "exchange-currencies"
                      ),
                    ],
                  },
                }),
                e.jsx(T, {
                  wrapperClassName: "my-16 lg:my-32",
                  image: {
                    node: e.jsx(ae, {
                      gradientClassName: "before:gradient-sand500-peach500",
                      background: NA,
                      animation: TA,
                    }),
                  },
                  textarea: {
                    title: a("Borrow, leverage, amplify"),
                    list: {
                      picto: [
                        {
                          icon: e.jsx(m, {
                            mui: "Cached",
                            size: "xl",
                            className: "dark:text-blue-500",
                          }),
                          text: a(
                            "Borrow stablecoins from USDC, wstETH, and more at the lowest market rates"
                          ),
                        },
                        {
                          icon: e.jsx(m, {
                            mui: "TouchAppOutlined",
                            className: "dark:text-blue-500",
                            size: "xl",
                          }),
                          text: a(
                            "Get leverage on your collateral exposure in one click, no upfront fees"
                          ),
                        },
                      ],
                    },
                    button: e.jsx(k, {
                      type: "button",
                      look: "primary",
                      onClick: () => {
                        window.open(C.angleBorrow, "_blank");
                      },
                      children: a("Borrow"),
                    }),
                  },
                }),
              ],
            }),
          }),
          e.jsx("section", {
            className: "partners py-12 md:py-16 lg:py-36",
            children: e.jsxs("div", {
              className: "container-lg flex flex-wrap items-center",
              children: [
                e.jsxs(x.div, {
                  initial: { opacity: 0, x: "-50px" },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  transition: { delay: 0.5 },
                  className:
                    "mb-12 w-full lg:mb-8 lg:w-1/2 lg:!pr-24 xl:!pr-32",
                  children: [
                    e.jsx("h3", {
                      className: "h2 mb-3 dark:text-black-500",
                      children: a("We work with the best"),
                    }),
                    e.jsx("p", {
                      className:
                        "mb-6 text-xl dark:text-black-500 md:w-2/3 lg:w-full",
                      children: a(
                        "Angle empowers individuals and businesses all around the world to make the most of their assets onchain. Explore apps and services integrated with Angle."
                      ),
                    }),
                    e.jsx(k, {
                      type: "button",
                      look: "primary",
                      onClick: () => window.open(C.angleDevelopers, "_blank"),
                      className: "ml-auto md:ml-0",
                      rightIcon: e.jsx(m, { mui: "CallMadeOutlined" }),
                      children: a("Integrate Angle"),
                    }),
                  ],
                }),
                e.jsx(x.div, {
                  initial: { opacity: 0, x: "50px" },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  transition: { delay: 0.5 },
                  className: "excluded w-full lg:w-1/2",
                  children: e.jsx(ri, {}),
                }),
              ],
            }),
          }),
          e.jsx("section", {
            className:
              "latest-news bg-gradient-to-tr from-white from-0% to-blue-100 to-100%",
            children: e.jsx("div", {
              className: "container-lg",
              children: e.jsxs("div", {
                className:
                  "excluded w-full bg-gradient-to-b  from-white from-10% to-transparent to-50% py-12 md:pb-16 md:pt-24 lg:pt-32",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex w-full flex-wrap items-center gap-4 px-4 pb-16 md:gap-0 md:pb-24 lg:pb-32",
                    children: [
                      e.jsx("div", {
                        className: "w-full px-12 md:w-1/3",
                        children: e.jsx("img", {
                          src: SA,
                          alt: "Three angles",
                          className: "mx-auto max-w-[270px]",
                        }),
                      }),
                      e.jsxs("div", {
                        className: "w-full md:w-2/3 md:pl-2 md:pr-24",
                        children: [
                          e.jsx("h4", {
                            className: "h2 mb-4 text-center md:text-left",
                            children: a(
                              "Angle is a DAO, governed by the community of ANGLE token holders"
                            ),
                          }),
                          e.jsxs("div", {
                            className:
                              "flex justify-center gap-3 md:justify-start",
                            children: [
                              e.jsx(k, {
                                type: "button",
                                look: "primary",
                                onClick: () =>
                                  window.open(C.angleSnapshot, "_blank"),
                                rightIcon: e.jsx(m, {
                                  mui: "CallMadeOutlined",
                                }),
                                children: a("Vote"),
                              }),
                              e.jsx(k, {
                                type: "button",
                                look: "primary",
                                onClick: () =>
                                  window.open(C.angleGovernance, "_blank"),
                                rightIcon: e.jsx(m, {
                                  mui: "CallMadeOutlined",
                                }),
                                children: a("Discuss"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "mb-6 flex w-full flex-wrap items-center justify-between gap-4 lg:mb-12",
                    children: [
                      e.jsx("h2", {
                        className: "h1 apr-stars dark:text-black-500",
                        children: a("Angle news"),
                      }),
                      e.jsx("a", {
                        href: C.angleBlog,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: e.jsx(k, {
                          type: "button",
                          look: "secondary",
                          children: a("Read all"),
                        }),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "overflow-section flex w-full gap-6 overflow-x-scroll whitespace-nowrap lg:overflow-x-visible lg:whitespace-normal",
                    children:
                      !!b &&
                      b.slice(0, 3).map((f, J) => {
                        const z = { transitionDelay: `${J * 0.3}s` };
                        return e.jsx(
                          "a",
                          {
                            href: f.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "gradient-frame-template min-w-[70vw] whitespace-normal md:min-w-[50vw] lg:w-1/3 lg:min-w-0",
                            children: e.jsxs(
                              "article",
                              {
                                style: z,
                                children: [
                                  e.jsxs("div", {
                                    className: "relative mb-4",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "border-gradient-blue500-green500 !absolute inset-0 h-full w-full before:rounded-xl",
                                      }),
                                      e.jsx("img", {
                                        className:
                                          "ease relative z-1 aspect-[2/1] rounded-xl",
                                        src: f == null ? void 0 : f.cover,
                                        alt: "Medium article cover",
                                      }),
                                    ],
                                  }),
                                  e.jsx("h6", {
                                    className: "mb-1 dark:text-black-500",
                                    children: f == null ? void 0 : f.title,
                                  }),
                                  e.jsx("p", {
                                    className: "mb-3 dark:text-black-300",
                                    children: Ye(
                                      f == null ? void 0 : f.pubDate
                                    ).format("MMM DD, YYYY"),
                                  }),
                                  e.jsx(k, {
                                    type: "button",
                                    look: "underlined",
                                    children: a("Read"),
                                  }),
                                ],
                              },
                              f.id
                            ),
                          },
                          J
                        );
                      }),
                  }),
                ],
              }),
            }),
          }),
          e.jsx(pe, {
            embedded: !1,
            faqs: [
              "What is a stablecoin?",
              "How does a stablecoin work?",
              "What are the different types of stablecoins?",
              "Why choose Angle's stablecoins?",
              "How to get Angle's stablecoins?",
            ],
            docUrl: C.angleSavingsDocs,
          }),
        ],
      })
    );
  },
  ui = "/assets/eura-bankruptcy-92eb030c.jpg",
  fi = "4.8.0",
  ki = 0,
  bi = 150,
  hi = 29,
  wi = 820,
  yi = 1020,
  Bi = "e",
  vi = [
    {
      h: 232,
      w: 219,
      id: "image_0",
      p: "data:image/webp;base64,UklGRiwFAABXRUJQVlA4WAoAAAAQAAAA2gAA5wAAQUxQSCcEAAABoJ5a293GeuBjdECggw6CXDQIBAL9EAg+eBtwAynADaSBacANTAFuYBpIA9NGGkgDLmAutj9dvvd93vMvEQFRkqS6zexN6REJquwkgPQHuKboZvEkYxNwn07cyVzfEibxKN0NPiny8JdWvEqJQtxidGwr8mVyjP/EMb56RvfpP5/+8+k//585nE4Hrzhdfv26HH3i9OuajzwQ9DZ54GdWWPojDyR9kzywNBMkdYe3lNmgaD4YmhGC5oSdJ8kKPfPCzsyQ0xsO7ymzQ838MFMBxNQAKS9HUQEtdcBKJTimfOXB8UOd0vDwklIPIyE1wUdVcPH9RTTx78jFg6iibMmoDb+Uf+xz0qugsv9oOqVC/HJGkWsydjnTU0YgBy+Xm4euul6UaFQGIGbg+93noElRmRYYM3C+/yS4KQ9An+Mg8VlQUyqgtfpp/FCvlEAjNutNvwKgyv4/lZbzX5B/JCSljFdi/srpd1FMe2WU/JXzFZBmmiudhrUCI6W60qhY4RFScKUUU3X4acXpBoilOrxbUfpbJiVFRnm4pRMV9XHkolS3NGqeyu75ouSb6Ae4u1BN7fwKyMaVQNRTPJTunkEy5yX1YdFQ6nseZJ9k/riOxpQCiR/or+PFmDMSiaqKgtKlGERTvTJQ6hSNaKpfpy1TJTNKSFGIstrwCsiME5KZtZV1pU3TibYyrpRJ9LwneltR30w6YyFRa51+WVS6JXrRV4aVeolaFJZdIxYTFdY54U9bSr9MLwor/Wja2vHyoaYy7owVmVWVaaVbQyeacraslGsoRFVOhp2wKpOyMqs8rKMRZWVVCesIUXTl9Xx+tWiPlenEg5RrKTxgwuqMDtCsp+JPxIbM9Gm30NDfBvi16bCJB/IU2wiROj02pmW/3brxaws88N+61EiHHWiYj6VubVrsQsWZOewDRh+WGo6sF0fslpbxon4/wky4ix1Ts+7CpVtq7EoRmd/jyhQ2FlecOvWA3Ski13NOnYpFDjBwb9GFhf6ATKmcWGjwfmVUIl8mpn3l6IrjRS5dM6UvcmZUjSVyp6c2kmYnTCwfnbkyY+ihIiWnmqAkNanWtaSh1LqetNx0pr8KcKsaQFs5JjA5JsLEQ53FQqU1cFFfYwzUXPb1qmIF7XngNKtjP0efLAhU0erqyUbK2eJa3opAmKw/f/Gkx7g42HjS47zQvi/Nj8k2DDXBsQ1m78ZiDaupo/7LCthNMTK6jOPjw7mC9ZST5omP/YRObW8cUmmcyw4BLBJa3Wd9abILIJMHPWPrVIFPikHJXSvGUD/67JPTHmduGjfdRX5wnRuwS9Hn6ySAYKox4x7HnUz/tXjuZNjzaCd2BQin6vP+bRP8Lx03DzMBxBMe5i0Tgxr0Uw87/WnTbrqdl69v4Eiq5F/73BbwJs0Qr2e6EmYCAFZQOCDeAAAAcBUAnQEq2wDoAD5tNphIpCMioSQIAIANiWlu4XJ+AP4ANPN3b9AP4B+AH6Afn73+BLH+lb38r0NJGLoaSMXQ0kYuhpIxdDSRi6GkjF0NJGLoaSMXQ0kYuhpIxdDSRi6GkjFzKKREj3oVwmkjF0MwCz+B9iaSKlqSWxNJGLO0/B2f0XAhHIfA+wKKRJBH/ouBCOQ+B4pvoTbyl6R7hKXKzJp7TfQVh+xIYFaLi3ptfgku0+kAAP6y6AAAAO/xJHDtnyyf4yHa+Id5fiWu4OTnxLXcHC2+Ja7g4+fEOgAA",
      u: "",
      e: 1,
    },
    {
      h: 76,
      w: 140,
      id: "image_1",
      p: "data:image/webp;base64,UklGRq4FAABXRUJQVlA4WAoAAAAQAAAAiwAASwAAQUxQSPcBAAABkBsAcNtGNwI2AEfgAA4cgR1ajoAR2LHlAArYwKpdYQNhAKVO3wGfnI37yADcsY6ICYCsdWetH7q3Ky2BY22v7zht9LaTnCjrce6nfcdDd4iY6HUliVOHiEkfOrrk6gnTf7c3JN0cImZ60OSoA+bsNSnaY+5ek3FzQAq9JkEekEp/k99DREL3Mi/9hLTGVUbygPT6m1y6iCTbLOQVqX5S6XURCX9ITO6Rdi9TUk9IfdTprCIyaFM5II9epiCfkMuo5lMR+YyruVYRWd3PY5Hbg5zhgPw+yamkR46f1DTyCXmOagr5hFxHNU69I99Rj1ERWV8NUxGZXw1REdlf/U9FXID6X/IJl2BUf8knXIafCkB+x6X4fgOPuBy/QLMgDIBZDA4AwCwEJ/4CswicgH8KtwCcgP8Kx14oYaBwzIUSBgvHmitgrGHMCRhv2HICpjRMOQHTapYMTN4wZGDGMnDTwKylYyVUMLOwjLgS5u/Z2AlIsQ48tJBo4RgIFaTbk2cFpFwH2lpIXFjCXAnp60BVLyDHwpLkKsi1DvS0kLHoibEF5F1aQi415F9fiAgaaGwuBIRWAJnNJbPQCiC1uWQUWgHk1jaTSwM0F31Iz1RAeL1LyjYCiBeNCWnsmgJ4rFo7k+tr4LXSvQ1TWNNWwHVV6XZgVQnIHABWUDggkAMAALAXAJ0BKowATAA+bS6TRaQioZZpXoRABsSxhDgAyBcz5pM69e71N/nreTeYDz8vP/vmbAM/sd/QDwISIHcMktEAco9/h+bP6bQBwvsgSla+zvXl9Z3tQK9gSFnfRQQ3Z8MzmcN19IdRvplzQXAqrtyD2C7uO0CYJXTpw089ryQNirk6XpMg/f8QkNMUq3Z4uWwW7x/SLHNcRc706qGRiWsfi8J3Goz3E+uDfYYpJddBqZrrjfvqhcCI0ZEugWxGEnUfzi9WIAD+2R9fflJAr/+WLDE13ITwuJvYazfTPrHcacZg+1NDJtwsnT7ovYRBbL/FvXMAJBgTHD3EtBKAIZ/Dg40U1asP7W8q+e6ae/UVaVpoc0eHXpKyVy8vbP/oZedb4URJ+5PzGY32c3oudYJPF+wIX+Mmdo8t9hP2N0AqxFk/TieAbawmyJ9jl4+9vP/pdulgES1ievHY8QjUazbxmQDmz44gaXSZ+EuY0Ke7nYsteO9/JgA0NGgJOZ903BH/43UYtWUjeBWPj9nhgfsVu3VlOv8TSuWfSzTF9dYkiddMM9BXptoa5pQHBgQLHOPqWtBSYkNsp94uQYoT96Nd1TgnvE3E82DP4iQ3w4ZbmjoU+mCtnMoaaw7dXoP/kX57+n7yLX07eSGGhk/pYCcq/zuz5paeQbZTJmUj09pA/P6Oqqxbotr83luRxMRuQfZt2jaMaWJgZK2Or2V12akN4hKT0eAtQyHJLt4a3vV9HegLJ5bMjEUl4sxLnU72I0qA9zPIUuAthYohQ93jcaYNgAIOLTOxAjudEC0++pQleYUMob2dAatttBpd2coRWzIGG3HT0NI5GtkxAKJY3Tk6Iuf1sTIHCg9kSZZ1UJOzz1nf8r2+USrkP48mZtPnPoNZ+cKtwpVAmUfxhDnl5feU/j6weACZJZTASS62RkE4t98LKZfBfVg1qigYYiK89ox5Ez7gU5c1Z02TEg6fj5goq8+44AMtkATeVVTqvL1zJSXOtWyyCvlsW9vcTVTehEjcPNAE29IFAjBag2qhSWN7dZFHNxSYX7rAe/Rww/nw2RWvjHnYeBgUnHE7jxP55t//zmJQI3rbG/Mn9QFukUrP9SEgzf9U5AAA7PA1GvC56nl63cRsGSFyc1ic7xT/sCHnTEFIGeUxElTsOVI51hSzWJKFk9mwz4rYGum8wAv7CweSI///9jKe//PhAAAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 321,
      w: 303,
      id: "image_2",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 237,
      w: 237,
      id: "image_3",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 18,
      w: 196,
      id: "image_4",
      p: "data:image/webp;base64,UklGRkgCAABXRUJQVlA4WAoAAAAQAAAAwwAAEQAAQUxQSM4AAAABgKTadhvpg6HChwcCdXwgqPgGgora/+qcK6imETEB9pQN2pGdG/Xm8uBZvRt2RrTtdTsQSG4kqbxFSUokA+DP1QA/pKRSgZLIH6B5HMcP9zqVSj1pzx/4HIjUqVTySYwYtYibXCo8b+Kix9OpVPwpuZmrVL/8Wj7A62fgqj8tzBYp11xOC+texKQaU4oLG+uB+1xL2jO4zdggMinXSlZiRGOP6wjkRjq9v5O0IQPcnrsBEEluJOV3kCVtSEYA9srRDuzWwAe6aiC7A9r2pFZQOCBUAQAAUAkAnQEqxAASAD5tMJNHJCKhoSsY6WiADYlAGnoI+Ev1/8luIt8AP8B/AMUB+mX/D/wHv/9H/pOv7SfCoA4kkDiy5chh93voipFRYtZOWRzL5AAA/tqcP/d9OZ59xIOgVlJ6dUB4ES5GDrPw5uLOf3C0Le61FIOBTeEQ6/6RSEf3lwTouOhq5DBDvGy2094mGzAHeJJR19ZUTf8HwoKBOcERha/ExHpU2ApQBMG/45J9HKknkFtanreYlGsnxU0oLXY/4EAyH4Ct1W0fT0Z1+/kBaKdrdORe2FGArKGmxJa2uTOnRNlE8q2O0oDBoJ5xOofwkR0NWxKhmFm5EgtBdxNPQcmTy1X/2j9P/qjLcLH8H/j1roHWP/j1roQY7GVS1csx2xanQ9Zr10GSlMGWQmmX3In6ALV0IzkKiuq/9wKfJx8nH0m+0VOwDF8IVoUKKgAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 447,
      w: 447,
      id: "image_5",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 642,
      w: 619,
      id: "image_6",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 858,
      w: 711,
      id: "image_7",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
  ],
  Ci = [
    {
      ind: 1,
      ty: 2,
      nm: "s",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [168.65, 828.721, 0] },
        a: { a: 0, k: [109.325, 115.989, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_0",
    },
    {
      ind: 2,
      ty: 2,
      nm: "o",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [529.002, 674.434, 0] },
        a: { a: 0, k: [69.611, 37.866, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_1",
    },
    {
      ind: 3,
      ty: 2,
      nm: "l",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [-8],
            },
            { t: 80, s: [8] },
          ],
        },
        p: { a: 0, k: [529.904, 686.563, 0] },
        a: { a: 0, k: [151.361, 160.313, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_2",
    },
    {
      ind: 4,
      ty: 2,
      nm: "s",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [410, 510, 0] },
        a: { a: 0, k: [118.435, 118.435, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_3",
    },
    {
      ind: 5,
      ty: 2,
      nm: "s",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [410, 652.058, 0] },
        a: { a: 0, k: [97.989, 8.976, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_4",
    },
    {
      ind: 6,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [50] },
          ],
        },
        p: { a: 0, k: [410, 510, 0] },
        a: { a: 0, k: [223.473, 223.473, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_5",
    },
    {
      ind: 7,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [-50] },
          ],
        },
        p: { a: 0, k: [410, 509.942, 0] },
        a: { a: 0, k: [309.223, 320.778, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_6",
    },
    {
      ind: 8,
      ty: 2,
      nm: "a",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [46],
            },
            { t: 76, s: [100] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [409.012, 510.001, 0] },
        a: { a: 0, k: [355.203, 428.861, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_7",
    },
  ],
  ji = [],
  Di = {
    v: fi,
    ip: ki,
    op: bi,
    fr: hi,
    w: wi,
    h: yi,
    nm: Bi,
    assets: vi,
    layers: Ci,
    markers: ji,
  },
  Ei = "/assets/eura-coins-6613a81f.jpg",
  Ii = "4.8.0",
  Oi = { g: "LottieFiles AE 3.5.1", a: "", k: "", d: "", tc: "" },
  Qi = 29.9700012207031,
  Si = 0,
  Ni = 120.0000048877,
  Hi = 400,
  Pi = 600,
  Ui = "eura-money",
  Ri = 0,
  Ji = [
    {
      id: "image_0",
      w: 299,
      h: 284,
      u: "",
      p: "data:image/png;base64,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",
      e: 1,
    },
    {
      id: "image_1",
      w: 34,
      h: 44,
      u: "",
      p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAsCAYAAAAATWqyAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAENElEQVRYha2Yz28bRRTHv29sb51GxEkIoo1ou6Rq2igSrkSjIhypjlSEVFGpOTQSt91DSg6g5tALEhIGcYjSSzggoV6Ibxz9Jzj/Qf0HAO4FyIXGXELs7jwOa8c7s7O/bD9ptdHM2PPx571565gwwbB3Tm3BuV1mVAGUA1MdAA0WXq3981Tb9FqaCMB29zYRDgDci1u3OE/48x+um4DGArEdnhUXejVmPDXNT1nA+orA6lXg8txwq9+PGYLx0423c99sbtDJWCB9C4dQU6AA3C9Hv71kgBmt/zxRdTfoJD8SxE6vSpIbAEr63NIlwlZFYG7a/FrmcwhIRjkPWQOwm9mIvd11iPCLae6TcrQF7kNoIP6dxPu5SUFsVQTWVyIgTJtzAMyTrdQgURBTFvDlA4HlxTDEwIKyqekO6qQC6RfmrwCKOsQXnwrlRKSxEAIDdxKL1XZ4lqjXhKEwH66FIaI+eRJYIghZPePp2KoIfHhdhUi7qb7GSwJZenJWY0O3vHOdFIikzdOARYLY293bDHyrjy/OEx6uiZCFUW3IpNT0u6YSUxawVSEUrdE3Dd8ZLPmlEcR+0t2FoXXfL/vFOU4KggDncxDtEIjt8CyhV9PHly4RKrcInpyEDVbWvPFk2Ej/aRo6JZ/dofN8ZrVhtBC4f/240FRA7J1Tm2X4kV65RXi3lM5GWguBuSNAK1aSuVBKihaw8YEYw4bZQqC9NxQQ2+FZoPdIB/n4poCVw4g2whD6Gk8KFQRWz4HWQYsWcPemuTbii5VTFjS1ap9TWwEhYFe38dGyb0PKEY9lAjx42KvygN9FAVzTQe4uZ7HBmXuKOBMqiBBwmFWIsk0opLLBqTY1jNW/d/0vzucgzAgV6doNMkLEWchiw3ujntC8vXNqQ6ppKU0D78zENbDInpAODKjvuX6RDo14uar+T8Xy5Tgb8alIAwZDv8oToaoPrl412UjuCanAJOr7mo1BjdjBgQsFYOGtYTsfsyDV4wp0BMI2BiD3ggNXFoI20veEpDUAAOYDvTaCIEq8Nz+wMWZBDi34QdTad/JGG0aQhZnJFKTel1h6ThSEEWS6qDaxUWyEgvm75671MjvIiDZ0Cz4EjvbdQi0Owggyqg1jEF51ORfq2qYQ8H9WGoLw8PK0e9QVER2W8tFB4HkSD8LUDA54sm/FcOlzxlQMguEk1YUCwuBGcGCQGo+Hf2ew4DMw3H0334hfpYGgV2ggkJ5/TwOfmocWvDQW+hDP3fxhFggAEO1DOmGgNhj46zUb05MEAKADxuYoEIBfrGi/sA4A1AHgt7/DxZrIQNRiltWs6QiBAMAfLyyHwZvHJ/zq+HVqCyDmH7tSVLMUpvF9TIOrX53tra/knpUuIvoXJcaRANf23EJzHIBYEAB48ANfuzInH89c5PX+d5YSiFokZVOCD8c1oMf/qVjnoNU1Hr0AAAAASUVORK5CYII=",
      e: 1,
    },
  ],
  Li = [
    {
      ddd: 0,
      ind: 1,
      ty: 2,
      nm: "people",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [202, 468, 0], ix: 2 },
        a: { a: 0, k: [149.5, 142, 0], ix: 1 },
        s: { a: 0, k: [53.521, 53.521, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 2,
      nm: "Illustration 48",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [1000.186],
            },
            { t: 119.000004846969, s: [1360.186] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [108, 66, 0], ix: 2 },
        a: { a: 0, k: [17, 22, 0], ix: 1 },
        s: { a: 0, k: [121.974, 121.974, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 2,
      nm: "Illustration 48",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [887.665],
            },
            { t: 119.000004846969, s: [527.665] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [307, 170, 0], ix: 2 },
        a: { a: 0, k: [17, 22, 0], ix: 1 },
        s: { a: 0, k: [121.974, 121.974, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 4,
      ty: 2,
      nm: "Illustration 48",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [925.482],
            },
            { t: 119.000004846969, s: [1285.482] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [193, 239, 0], ix: 2 },
        a: { a: 0, k: [17, 22, 0], ix: 1 },
        s: { a: 0, k: [121.974, 121.974, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 5,
      ty: 2,
      nm: "Illustration 48",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [887.665],
            },
            { t: 119.000004846969, s: [527.665] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [130, 294, 0], ix: 2 },
        a: { a: 0, k: [17, 22, 0], ix: 1 },
        s: { a: 0, k: [121.974, 121.974, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 6,
      ty: 2,
      nm: "Illustration 48",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [826.957],
            },
            { t: 119.000004846969, s: [1186.957] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [262, 291, 0], ix: 2 },
        a: { a: 0, k: [17, 22, 0], ix: 1 },
        s: { a: 0, k: [121.974, 121.974, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 7,
      ty: 2,
      nm: "Illustration 48",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [91.462],
            },
            { t: 119.000004846969, s: [811.462] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [271, 73.5, 0], ix: 2 },
        a: { a: 0, k: [17, 22, 0], ix: 1 },
        s: { a: 0, k: [84.282, 84.282, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 8,
      ty: 2,
      nm: "Illustration 48",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [91.462],
            },
            { t: 119.000004846969, s: [451.462] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [216.25, 137, 0], ix: 2 },
        a: { a: 0, k: [17, 22, 0], ix: 1 },
        s: { a: 0, k: [61.794, 61.794, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 9,
      ty: 2,
      nm: "Illustration 48",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [91.462],
            },
            { t: 119.000004846969, s: [451.462] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [207, 300, 0], ix: 2 },
        a: { a: 0, k: [17, 22, 0], ix: 1 },
        s: { a: 0, k: [61.794, 61.794, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 10,
      ty: 2,
      nm: "Illustration 48",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [193.677],
            },
            { t: 119.000004846969, s: [553.677] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [191, 86, 0], ix: 2 },
        a: { a: 0, k: [17, 22, 0], ix: 1 },
        s: { a: 0, k: [61.794, 61.794, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 11,
      ty: 2,
      nm: "Illustration 48",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [114.419],
            },
            { t: 119.000004846969, s: [474.419] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [125, 154, 0], ix: 2 },
        a: { a: 0, k: [17, 22, 0], ix: 1 },
        s: { a: 0, k: [76.471, 76.471, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 12,
      ty: 2,
      nm: "Illustration 48",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [114.419],
            },
            { t: 119.000004846969, s: [474.419] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [245, 365, 0], ix: 2 },
        a: { a: 0, k: [17, 22, 0], ix: 1 },
        s: { a: 0, k: [76.471, 76.471, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
  ],
  Mi = [],
  Fi = {
    v: Ii,
    meta: Oi,
    fr: Qi,
    ip: Si,
    op: Ni,
    w: Hi,
    h: Pi,
    nm: Ui,
    ddd: Ri,
    assets: Ji,
    layers: Li,
    markers: Mi,
  },
  Vi = "4.8.0",
  Xi = { g: "LottieFiles AE 3.5.1", a: "", k: "", d: "", tc: "" },
  Wi = 29.9700012207031,
  Ti = 0,
  Yi = 120.0000048877,
  Gi = 300,
  qi = 300,
  Ki = "composable-eura",
  zi = 0,
  Zi = [
    {
      id: "image_0",
      w: 495,
      h: 495,
      u: "",
      p: "data:image/png;base64,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",
      e: 1,
    },
    {
      id: "image_1",
      w: 120,
      h: 71,
      u: "",
      p: "data:image/png;base64,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",
      e: 1,
    },
    {
      id: "image_2",
      w: 52,
      h: 71,
      u: "",
      p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABHCAYAAABIzmSEAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAEFElEQVRogd1bQXLUQAxsucwZfsATSH4ALyBUceEUfgA/ID8AfpBrkgO8gCIPCCEnrjlAFUc4b9bi4LU9o5Fm5ABZz06Vy9l1T4+knpHkrQqtvl8xwABvLqR30r43sDEG5jNS+Bh8Th1/ZXSf2/3nH3GLQZFD1uLRdzCMdzgosGmgogD8BvNxg9U72n9x7XfoxxVHRFtWScV2/L5p7h3R/rNfJYcagISLxj0BEUDirl0ZPtZoNV6iVx2vrm8uTw4cDilEysXRIoajpvGao1ZQTN77xPRhfXFyVHBIIVqiSsMkojfrL2fHtkNZo2PjWZJb0CKfMD65MrwAAD60nGrSaBqRyRmdQDxbK4x6iU8bfLi+OHutOFQgGp9pKlnBcBgWYLjIJ87vyMFv+fJ0TzjkIFqsSkDHOI4d8hAtWSXg0c3l6cvJIS/RglUixlHgkHNidhEjGC5rpj+TFD4AysF9OKjU2EZrUZyuBRTaaDSMAwBoQdSHhiBCFHwYnsm7tkoWM0DZ5Bs+xmuTwTstwMBTAKDVz29sN5eYPi+xaR26/83oiJ60Y0baAZWarnvc6ouFEylrGFNvW49hHWsGw8icKlYxIFmLHog6pCUAQeAduRQ+JoIZvA4ME/baGMmZCAlyBoaEMqpkGcJIt1gWCzCTXSES+ybCNgVlUmVm/9qLSYAX6wyuGG2qZd0qtfrDelVSFBJEueFJ4RJbJMVfqVTu5WQWvMt2CGRg7REr5NkCbmxggWe7/KNCm54hdbEQQ1nstgttO80qEYwmz8AG3HeiEqFlEGhmOl2ySk3yTcg5JALtoEqsZyRYhXtGAtAwmfehYVRUaBvuz1C0P1XjjXCpDm630Bbeh/xEsUFbUgljltsdldIzVLNKEFnOClp+EPR2SDHIyxttFYPb4FPehwTKswXc2IC7uCOQKhdg9ULbpN12v1tqLbTm+5Agqkgl9X2oXpXYOEMVqxT8LqdFge1FLONNkEzhBtjFF2Jju4M6FBtfa6EVv5ySg0AnWkqhFb1c/Sopv23XqxJAWi9XsUqNqpBlkGF4qFJueFK4xBZJUz7X+1C/W+Ztga0UWrChkIfIswXc2IDbU4cyhdb9PlSFSphzhipRadPL7Y5K+u9yIVFpUHgn5ZrJZ2IVbkqxbYRXo6hkQRO7/UKbdtuJQTUVWhJJYQdUSrvtiACVqaQV1spV0rvtiGCYGM9WVSoOK4UXVCpQhincLqzWxFwtKKry/wut0ctRtYXWr1CBqIwZTZ6BDbidKmV6uTpVmqdQhmgZKtFtezlKLxOr8GWxPd9t/y2hoFBlhRa5MyQJtQcLLLSOM1SXSr6kUItKDdCCce7zaJgYOMGdMJljlTrNks1kDj4TxVxMALp4Tri1OhmJPnkQrT/9Aa9jhaB2FCb3AAAAAElFTkSuQmCC",
      e: 1,
    },
    {
      id: "image_3",
      w: 51,
      h: 60,
      u: "",
      p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAYAAADL94L/AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAADaUlEQVRogdWZvW7bMBCA7xQ5Sx/RdVF3LArU6dKOfQT3BQp36Zwps/sGfoT6DeI1QMUOEeUTdX9UHJk6QIBN8X5Inu472fjz978QAKC7AvkMQRhPLuleO96M0ImXWxAeahwOEivkS2/8WUxnrc7Ah0PH7SNKA2+Gi9GMJI5QGNd06HjI1TGklowhdzqakGneONBp2mtPPJnEbWcyOALQU9eW0OpgZrrVKO1oayw1glpwjqADJItl0g3J3BzppVm6oyEj3boglc2JxYDdIE4yi0Gt7rRiPU03V5CZJxqUe5ycnxljRzn/ojjTzdLhfGhm2WqmF4Vy2dOvZkYaXJU9DukW49nRq7LHcTo1ncspKW67iaWwh4fmmGLwQvZ0dtoPY9gz4ExeebXZA9BPHYk96b0x7OmdTI/Oxo6e5+rsMYO8IHtqtdkb0+pIMgF7aq+jObDH7ppnxB62nYkyJ/YgSC9nZG6qZLjtJk7Jnqjja2eSe6WxJ84flOZRxaAQ9qgvZ5KSGeg12FM52hmqkKYOxx4zUE/QaaCGTvRRcw65dHO1OpLXCdiD0HYA2oOlOZLGr8UeHZozYs+5mmVQtmT2nF/OxjDhSuyhtughmL3ZlOyhdjT20Pt0rN/OOFtuS4cL1MMeutO57HmuZplKbKCFsIdNM+4IJfZkBfqK7Omq2QCGDC/mwB62A1ClYPbIvwHMkD36y9nM2JP5lwYxMCF72NlMMRhUs5yWWxQne6gtjT2xgGibE4CmmdZyvxJ7ABBCe/el7AHI+A2gdPZUoLw2z409oQn7HmfoTs+NPYjV4/D/Gc120expDipnWCNlsuf0bbXYyz81zYA9RO4BmA5A66L5AGQ9S0fzgWCzh+jyi+ECuBR7aEAae6Clj5M9x6+rWl5MLnsGQSo7Kr5JCpGamxPge/xsFgAPe+i9SdkD8OfLu3oXv4iLKZ09CHBqqmZDx3z/z2i2r8SeBmFzt7w90NnZnGFdTsyegOHH3XKxS+dkPTOFsOfX5+Vik6oAOE+mFPYAwPrT2/MDn0p+mr0Ce9gppBgg4LFpmvcfV4u9Fpp7MWPY05tq0FyA5CkAbG+fqu16ffNoxTi6ALAkh2ExMEkejfUNHSHA7uap2q7XaC4iStZiegC9LHuOAOFvCLgHqO4/LPGQqnrkP118O7RAew/OAAAAAElFTkSuQmCC",
      e: 1,
    },
    {
      id: "image_4",
      w: 104,
      h: 31,
      u: "",
      p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAfCAYAAAALO4jYAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAA8UlEQVRoge2RuxKCMBBF7xp6+f+fs7QUWmeyaxHUEAhid4t7CthXNgzHnvM9EA54BsKBcFiTwx2IXMUOa3JEruKSW52/93kAHgj/xrt5bvtR9v+VL7Xc5FU/AghLcBsQlpY4rWp+sh42/J5FOrhvu+MCQY0EkSNB5EgQORJEjgSRI0HkSBA5EkSOBJEjQeRIEDkSRI4EkSNB5EgQORJEjgSRI0HkSBA5EkSOBJEjQeRIEDkSRI4EkSNB5EgQORJEjsXjNvbbEzAd9A7L3YMndveOT93+ZvxTmPf375avq1dh3PmU3i9bZsd1rTt3tHMsjxcIo8cWSXgi7wAAAABJRU5ErkJggg==",
      e: 1,
    },
    {
      id: "image_5",
      w: 120,
      h: 120,
      u: "",
      p: "data:image/png;base64,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",
      e: 1,
    },
  ],
  _i = [
    {
      ddd: 0,
      ind: 1,
      ty: 2,
      nm: "eura",
      refId: "image_0",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 42,
              s: [0],
            },
            { t: 60.0000024438501, s: [100] },
          ],
          ix: 11,
        },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [76, 225, 0], ix: 2 },
        a: { a: 0, k: [247.5, 247.5, 0], ix: 1 },
        s: { a: 0, k: [18.788, 18.788, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 2,
      nm: "Illustration 41",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 17,
              s: [119, -79, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 47.0000019143492, s: [119, 95, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [60, 35.5, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      ip: 17.0000006924242,
      op: 137.000005580124,
      st: 17.0000006924242,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 2,
      nm: "Illustration 43",
      refId: "image_2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 12,
              s: [370, 95, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 42.0000017106951, s: [215, 95, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [26, 35.5, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      ip: 12.00000048877,
      op: 132.00000537647,
      st: 12.00000048877,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 4,
      ty: 2,
      nm: "Illustration 44",
      refId: "image_3",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 8,
              s: [215.5, 351, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 38.0000015477717, s: [215.5, 212, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [25.5, 30, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      ip: 8.00000032584668,
      op: 128.000005213547,
      st: 8.00000032584668,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 5,
      ty: 2,
      nm: "Illustration 45",
      refId: "image_4",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 3,
              s: [402, 157, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 33.0000013441176, s: [189, 157, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [52, 15.5, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      ip: 3.00000012219251,
      op: 123.000005009893,
      st: 3.00000012219251,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 6,
      ty: 2,
      nm: "Illustration 46",
      refId: "image_5",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 0,
              s: [-108, 182, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 30.0000012219251, s: [119, 182, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [60, 60, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
  ],
  $i = [],
  en = {
    v: Vi,
    meta: Xi,
    fr: Wi,
    ip: Ti,
    op: Yi,
    w: Gi,
    h: qi,
    nm: Ki,
    ddd: zi,
    assets: Zi,
    layers: _i,
    markers: $i,
  },
  an = "/assets/eura-intro-580f8554.jpg",
  sn = "4.8.0",
  tn = { g: "LottieFiles AE 3.5.1", a: "", k: "", d: "", tc: "" },
  An = 29.9700012207031,
  nn = 0,
  ln = 120.0000048877,
  on = 410,
  rn = 510,
  cn = "eura-intro",
  dn = 0,
  gn = [
    {
      id: "image_0",
      w: 156,
      h: 156,
      u: "",
      p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACcCAYAAACKuMJNAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAASb0lEQVR4nO2dQW8jyXXH/69Iadcn6RuI+QSiz4vsUocE8MFZKQjGWQfBUgcH8MExF4GdteMkdBbxTnZhjBaGs4BtQFwsYGXHQSRjkcwhAYaajc/L+QbSJ4h4mjHZ7JcDSam72NVd3V3Nfk31/zDTTRarX1X/+lXVv5sUoRbePZ12CLTL4DbALYBaAMBAG8BOmroIuJxv8RVAV8v/X6I5OjmmG3dRV1NUdgDr1o8+nXZ8Hx0A7TlgtAcGOFCG2fDh/BoTMAIw9EGjCRrD+wbhxgP3o0+nHQCHzOgA2AcWcC2gumVrfdDpeg5gyKDhfQBw44Drn/LubHt6CKZDMDocGBKDEAmDLqjfEvjiJbYuNhG+jQGu/+vfH/qsumB+EwhCREaIBEO31MbBV2ng+mcvWuBmD4zuPJPxKlBAGDodqEDByDJa+ZI0JvDFDDj58Hh7VHYweVRJ4N47m3ZmQA+MeTYL0BEE6HaTCaGXY7KYTdYrU/NVMA8eHm8Pyo4liyoF3D+dTboM6gJ4gxjwA++ZoLMZWvV96dABAIGvAfSrBl4lgHvvbNph4gEx7QF3oLmEzgSZvi8JOqB64IkG7r2zaQdAnwhvAHO4aHHG1wldCDKB0AFz8Hyo3gfHzYuyY4mTSODeP3vRmqlGn0BvA2EoJEBX8so1VgRczsA9qYsLccD95DeTHpj6zOFbSjV06UTAj1+ieSLNThED3D8/nrQVaMCLuwGAGTJ9v4YuWvP5HXUfHm8Ny45lKRHAvf+baR/APwKIPak2kNXQReqj36PZl5DtSgXu/fMXLfjNAfnzRYHNSU2X2cLQWBnDMZ+PjE/oIkIXga9nwGHZcztV1oH/5d+9QzVrjhTPYQPC9Ju2VcrtlSuKot/LvE1ChokEMWhPgb78/umkV2YcpfTVB/8xPYGP77oayoqYz1X5bkSSCPzJS2z1yhhi1wrco3Pe9XzvgrHIajlPqoSVa1x8wvWc4B0+PP7K1ToPujbg3j9/0Wpy8wKM/bhJdxWhi8uMwjX2wZ11zuvWMof74HzS3uLmCMC+PuchHXl9jkXayzGfV8DyPv1tw5i0OV2gouj62Vi/TTyVmNDdaUeBhu+eTrrrOmDhwH14Pu0o0BDAjg00wZMafjG8Lxm6lYtItnYYdLou6AoF7qfnk64CnhKwk+YkZckkXEOXS+uCrjDgfno+6RLR6XI/7UnKM5wuFbVfQ2fWOqArBLhHAdjynKQi5nA6hCgaOlRLRUPnvD8enU/aRPQlkP5OgM1KdJ0r17vjkdP4qiACHxfxjJ3TDPfofNKGomHS0CYt65mG1rsCGi55558VUFGZzlk/PDrnllKzEYAdf3E9Z8ls+r6ETHdPjWEAgA/+qkufzkmGe3TOu42Gf8E0f4ZNLTg2ZxJzJgjJYWYsa+Wqt6dqmU6Bht87nbTd1edAjcbsAuD98EnNDl3sSq+C0IWaUDXi5ubwoHfKuy4qyw3czz6fniy/c7CssEjooudYq/uSoauaXQJg/xV4AxcV5QLuZ597hwB9F4g7qcVCZ5tJamM4t9508WhT5mZ//IRbs9lsZP/dg+wLiXUuHOonhuOVdxGROcN5/mwAYEe/Us2ZpJxMVxvDbtUALvLM5zIB9/PPp33Tk7q2Fdo8oVvEdu4nhl3HpE8FhItBe3nmc6nb+vP/nLQB9WX2oSx5aNX3JQy19RPDYTHoKMuXrlNnOEJjkG8oSx5awxWH98saatMuIuJW0laLHuEicCarJBVw//pfsx7A+/MDolDoTPWHpO1Lgy6vnSNcO6/A66f9kHX7Pn7CLfD81pW74avYlWv++JAQX71yJeAgzRet7TMcz/pY/Hypu0ySPdO5zCS1MZxdDJykKW8F3MdPph0ifjv0Yo45lgS7RI+/NoYzaz/NUyW2Ga4PABR4TCfvHEsCdPUTw87Ut11AJAL38ZNpRyHguVlAF9dptTGcPT6pYtDeq/CsbnslAqeIByudAA26FNu1MZxvW6oY6Nlkudjz/4snky5h/jOngH4VBqBzllXuslxQ9RPDlYBuxybLxSccRV0grhOKha42hqsFnU2WMwL3yyfTDkG7XyoIOlP9ITnMjLUxbKWdVzE9jCtgznAK8/RolUlkQWeqX2+PZOiMmU04cVg4GiZFAnf65EULmP/RjXIziXvosmQSadBJXrkyaO/7p54xy0UCN2s0e+k7YXViHLUvDTrbTFIbw/YicNf0nmlI7QJZOqE2hmvoAABvvnv6ohX1xgpwv/of75ACf/KxCOjiOq02hrPHJ0k+GpHD6mqG43k6DDUqaVvvhNoYjvysriLikyIFRHpyoVhPn/Iue97/uXvCllKWj66/fmI4fXwSFPWFm1BC8acBDyViaEif+mtjeLX8/TGGFeY3DsKvBUSKDoGYRmgtkgydqf5wA7K0xyY+JMR3b4zhjv6C0nY6qSepVplEFnS27ZEMnW1SKFn7+mr1ti9O/3vaAbCjACfDT0iFZRL30GXJJNKgk7Ry1Vert/2gFA5DLzqALlzebAxLhs42k9TGcLQI1AnuB/ugo5/UIqGzzSShXWHQ2RrD9xy6TnBHAXM7BKD51/9Kgs6206poDJvi1yveUOh2gr8vpwCg6XmhH5xbgW75umlb7wR9W++E2hiO/KyuIuIrQxTIcgoAfIUOLd+KkEq6qvRtKwDrJ4ZXy2/mE8MKCGc4ImrfBbX415j6zfvpO0GGMSwZOtPQGnc+pEHHIA24JYEx0NnM5/QWSYYuOpPE70uDzrY9AqC7/bPyy/burQaVDbraGJYBHYVejI5/nXr3dNoBAPXp02mHjZ2WH7osnSAZOtvMKA262ItoLeIWACgFagU7YZ3QhcvXxvBmQ0ctAFD+kjzIgs42k4R2hUFXG8N34sU6QRGoFXpDKHS2nVYbw9njK1IE7AKAIoUWEjph5cNJ0Onbeifo23onJBnDK+W1eCxUG8N2x3Cnu5HU2CGmLKdr5TNOAIxZuRrjWy1fG8Pp4ytCvPjJEAWej62mTjBBl83+CLxt1Qm1MbxavtrGMP166LHp2fngs/qrz85zZPm0Pycq+bsRVt8dEP7dCEl/8ZDg/YGyvfJsMt19NIbzZhIJHp0pfvdqttTyIGVBl6UTpEFXG8P2UjYHlebRhQvKhs42M94XYzjsIsRkEmnQuc0k5UB3H43h2DlcOJq5pEKXP5PIgs7WGK4adIlzuGBQRmM4ITOuNErf1o+nb+vx1cawlYqIL69Ung5ZLRMdWm0MZy+/acbwXQLK2Amr5WmlfLhgeD/fSaqN4dXyso3h25iLhs40nwspUyYp36MzxS8dOtv2uIROueqEPNCZ6g8XDO9Lg854UhxmxqobwzPwjbI9aFnQZekEadDVxvBcHx5vjxSAy3DtwSPLhi5cvjaGqwBd4hwupJhMIg06t5mkHOg2zBgez2NlXOU6iKETpEGXP5PIgq5qxjABo3ncxFfaG5k7TYwxrEOXVD6wXRvD+bZNYuAGABQxXbkMRIQxDKA2hqPKl2cM32a4mZbhsh6kNobN7ZEM3d3LRRvDc87Uq15zZCoiwS4JB5QlvvI9OlP80qFzawzPR1J1dEA3oPkKIrKYAOhM9YcLhvelQWc8KQ4zo2Rj+CWao7u4GMYsZ3vQsqDL0gnSoNt0Y5jA1yfHdBOIiYdIUsp0KgG6cPnaGC4LOgbdJrRFhqPYDBd3kNVC0QeVBp3bTFIOdFUxhgkIA7c9awxhoSzp1HQlSoMufyaRBZ0wY3gYjBFHB3QD0HNYKE+nJRvDltDp23mhiwjDdKwoU3WlPVq5+24MPzzeGq4cm+EPYSlXHWIqoyu1MWy17c4Yvtu+y3JB3WtjmBcPhwTiWdRJQ6RQbQxHt6c2hvX4+CJY7PaYtvO40DHWCJ2tMVwV6KIziYv22MSHhPjcGcMUmL8Fj42jA7ohwm+RUhKgs73ygvvSoMvSHsnQLVp//ZO4v5cKH6H0Zytp0NXGsBToaIWnEHBbs0Ym4MLRhPclQxcuXxvDzqHzeQBNIeCyDquhgyDcCXqhqkDnNpOUA125xvDqcBo81p0yDqu3gaS88kxXojTobNtTFeiKNoaZV4fT4HFvtTVrXCDm6ZEk5ek0Z8awa+giwoh83aD7aAz7vncS9ZmVuo8O6CZPlksKJGnbiTHsZLs2hlfLWxvDlw+Pv3KFCEXCTA0/ks40qo3h6PbcB2OYeHWxEIotSp994Q0BvGF631aufvPW1W8MZ/tNXkpZPrk9G/wbw+P3/nJrFwYZh2tiDEzvpZE0j86UCfV9CZnOpv649pSR6Qjxo6MRuAevNwcMXMd92FbSoKuN4cKgGytvOxtwAKAY/bj3U8kqkwTeFgBduHxtDCdCx3zSXzxKblIscE6z3O0/8ZmkKtC5zSTlQOfSGFYW2S1Yl7mAwyyX5cqDoVOkQWfbnqpAl8EYTsxuwXqNcpnlgHydtlTljGE9Xk06dLdxR2xHHk/f1tuTYjuLMUzAGJOmlZVmZSoTo2dTzlZpO8HUIaYyuko3hvVt/YLQlNsYjjmeq6ynxW2V3fS4YuXKlwtKgkdnezzJHl2W47nz6Pi6/83tFixle9sMpHynWQ5wd+Xlmc+FA8qSGcr36MIv5m2PTXy4ja8BlYoLa+AevLY9AvjHaSq3kQToQucp5iRKhs5te2ziAwBc/v03m6nuu1sDBwDbXvPE5QJiKWnQZckkoV1h0Nm2J2V8Y4bXRUqlAu7ogG4YnPogVnLTCYVDZy5ffWPYFP/y+OH4uN9/K/qJkDilAg4A3vrDrSGDP0r7uSTZdkJVoLPNjNKgs4mHGZf/8OfJJm+UUgMHAK94zX4hQ+vtP+ZOiDuJkqGzbU8FoBs3MwylwTpS6+iAbpTyD7MeNE55Om0pccZwivqjlNoY1o+nb+vtSbHdAHV/kGEoXSoTcMB81cpE72T9fJzSdkJwW6QxnPaz+gWhKdEY1rfTAmi6QBgf/fAb6ValuhKurWR99swbgPB23nqiVBvD0e0pyRh+/sMHW23kVOYMt9T2rNGD5S8vpZUEuyQcUJbMUL5HF34xU3vGk61mBw6UG7ijA7rxPXWIHN/0ipME6ELnKeYkSoYuT3t8cKd/ZHevNEm5gQOAtw7oisjv3BfosmUSudDFtof5+O8erH6hOaucAAfMFxHku32qJCTDSZUGndvMmNyeIqFj5uMfPNgewKH0bsitx8+8LhNOXdcL2E1817GQyPcEBqUqX9RCIrk9/Mnf/tl2F47lLMMt9eD15oAYx67rBfJnEgmZrhrGcDGwzeMsQGVDl8UYlgzdOo1houJg02NxqsKhy7htMnnjtAnGcGwblgASf/K9Py0ONqBA4ICCoXM06bYZWsMFw/v5st76Vq7m233L4xUPm3bY4lToQkLA3QjbSb7UuxFEfPw3R25XoyatBTgAePy7SZtZDcHYcV23NOiy3WIqBzpgfbABBQ+pQT14bXtE5HdQwG2w2hiObk/CynWswF9dJ2zAGjPcUudPeXe6NRsw402X9Zoygb4vIdOl9ejsPx/dnpVMR3hOfrPzjqPbVWm0duCW+rf/nfWI+ZHLOm1OSlWhy9ueJXTw8dE7R1vF3RFKUGnAAfN5ne+rCwL2XNWZNhPomaSK0IXnZEboxr5C952v53ueLa/WNoeL0oPXtkeveI02Zfzl9CilnfNEzbE2zRj2CZe+32iXDRtQcoYL6rNn3iEUBq5WsetcuQKAn+N45vI5V66EMZj6f/0njdw/oetKpWa4oL7xevNie9poufpGWG0M43LmNdqSYAMEZbigzr6YdhTUCcD7eeuS5tGtIdNdM9D7joDhM0oigVvq8TOv6xP6eRcV0qAryBge+8wn3/n6Vh+CJRo4YO7bTZpeD0S9PPO7qkAXnxkjoRsz+GQyaZ6U4aullXjglsoLnumk6vuSodPskjFzdUBbqjLALXX+lHenjdlhlqHWPpMEduVBNwbzycuKgbZU5YAL6rNn3iEpdNPcJks7nOpzrLKg84FLgAff/tp67326VqWBW+rsKbdoyz8Ec88m6+WBLvjrj9GZ0SV0fO2DLpi9k29/LfvPK0jSRgAX1Px2GXUJqoMYW0WsMUx8TT5d+IoHf/XH7r6eJ0UbB1xQy8ynwB0GOvpiQ8LKdfHepSK+mDGGmwhZUBsNnK7Hv5u0fW50yOc2iNoA768fOr4GaMTAyAeG3/qjrWHuhlVI9wq4KJ19Me2AqQXmFhG1GdgF0AJjLwd0YwZGYL4BYeSDr+DTFZrN0fFB9VaWLnXvgUvS2VNuAV4LALyYcgp88xcHmz0cutD/A5XyOJhS6ddzAAAAAElFTkSuQmCC",
      e: 1,
    },
    {
      id: "image_1",
      w: 495,
      h: 495,
      u: "",
      p: "data:image/png;base64,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",
      e: 1,
    },
    {
      id: "image_2",
      w: 133,
      h: 133,
      u: "",
      p: "data:image/png;base64,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",
      e: 1,
    },
  ],
  mn = [
    {
      ddd: 0,
      ind: 1,
      ty: 2,
      nm: "circle-blue",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [327, 442, 0], ix: 2 },
        a: { a: 0, k: [78, 78, 0], ix: 1 },
        s: { a: 0, k: [28.205, 28.205, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 2,
      nm: "circle-blue",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [349, 88, 0], ix: 2 },
        a: { a: 0, k: [78, 78, 0], ix: 1 },
        s: { a: 0, k: [28.205, 28.205, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 2,
      nm: "circle-blue",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [109, 38, 0], ix: 2 },
        a: { a: 0, k: [78, 78, 0], ix: 1 },
        s: { a: 0, k: [28.205, 28.205, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 4,
      ty: 2,
      nm: "circle-blue",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [45, 350, 0], ix: 2 },
        a: { a: 0, k: [78, 78, 0], ix: 1 },
        s: { a: 0, k: [28.205, 28.205, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 5,
      ty: 2,
      nm: "eura",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [203, 199.071, 0], ix: 2 },
        a: { a: 0, k: [247.5, 247.5, 0], ix: 1 },
        s: { a: 0, k: [35.354, 35.354, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 6,
      ty: 2,
      nm: "Illustration 24",
      refId: "image_2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.48, y: 1 },
              o: { x: 0.4, y: 0 },
              t: 30,
              s: [203, 675.071, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 55.0000022401959, s: [203, 328.071, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [66.5, 66.5, 0], ix: 1 },
        s: { a: 0, k: [128.571, 128.571, 100], ix: 6 },
      },
      ao: 0,
      ip: 30.0000012219251,
      op: 150.000006109625,
      st: 30.0000012219251,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 7,
      ty: 2,
      nm: "Illustration 24",
      refId: "image_2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.48, y: 1 },
              o: { x: 0.4, y: 0 },
              t: 25,
              s: [203, 675.071, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 50.0000020365418, s: [203, 293.071, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [66.5, 66.5, 0], ix: 1 },
        s: { a: 0, k: [128.571, 128.571, 100], ix: 6 },
      },
      ao: 0,
      ip: 25.0000010182709,
      op: 145.000005905971,
      st: 25.0000010182709,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 8,
      ty: 2,
      nm: "Illustration 24",
      refId: "image_2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.48, y: 1 },
              o: { x: 0.4, y: 0 },
              t: 20,
              s: [203, 675.071, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 45.0000018328876, s: [203, 257.071, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [66.5, 66.5, 0], ix: 1 },
        s: { a: 0, k: [128.571, 128.571, 100], ix: 6 },
      },
      ao: 0,
      ip: 20.0000008146167,
      op: 140.000005702317,
      st: 20.0000008146167,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 9,
      ty: 2,
      nm: "Illustration 24",
      refId: "image_2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.48, y: 1 },
              o: { x: 0.4, y: 0 },
              t: 15,
              s: [203, 675.071, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 40.0000016292334, s: [203, 226.071, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [66.5, 66.5, 0], ix: 1 },
        s: { a: 0, k: [128.571, 128.571, 100], ix: 6 },
      },
      ao: 0,
      ip: 15.0000006109625,
      op: 135.000005498663,
      st: 15.0000006109625,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 10,
      ty: 2,
      nm: "Illustration 24",
      refId: "image_2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.48, y: 1 },
              o: { x: 0.4, y: 0 },
              t: 10,
              s: [203, 675.071, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 35.0000014255792, s: [203, 199.071, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [66.5, 66.5, 0], ix: 1 },
        s: { a: 0, k: [128.571, 128.571, 100], ix: 6 },
      },
      ao: 0,
      ip: 10.0000004073083,
      op: 130.000005295009,
      st: 10.0000004073083,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 11,
      ty: 2,
      nm: "Illustration 24",
      refId: "image_2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.48, y: 1 },
              o: { x: 0.4, y: 0 },
              t: 5,
              s: [203, 675.071, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 30.0000012219251, s: [203, 199.071, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [66.5, 66.5, 0], ix: 1 },
        s: { a: 0, k: [128.571, 128.571, 100], ix: 6 },
      },
      ao: 0,
      ip: 5.00000020365417,
      op: 125.000005091354,
      st: 5.00000020365417,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 12,
      ty: 2,
      nm: "Illustration 24",
      refId: "image_2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.48, y: 1 },
              o: { x: 0.4, y: 0 },
              t: 0,
              s: [203, 675.071, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 25.0000010182709, s: [203, 199.071, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [66.5, 66.5, 0], ix: 1 },
        s: { a: 0, k: [128.571, 128.571, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
  ],
  pn = [],
  xn = {
    v: sn,
    meta: tn,
    fr: An,
    ip: nn,
    op: ln,
    w: on,
    h: rn,
    nm: cn,
    ddd: dn,
    assets: gn,
    layers: mn,
    markers: pn,
  },
  Ja = "/assets/arrow-curved-87db9649.svg",
  La = "/assets/ellipse-99bd8ee5.svg";
var aa = {},
  un = Se;
Object.defineProperty(aa, "__esModule", { value: !0 });
var Ma = (aa.default = void 0),
  fn = un(Qe()),
  kn = e;
Ma = aa.default = (0, fn.default)(
  (0, kn.jsx)("path", { d: "M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" }),
  "CallMade"
);
const he = 0,
  Pe = ({
    className: a,
    illuAnim: t,
    illuBg: i,
    title: s,
    description: o,
    gradientClassName: A,
    figures: n,
    button: r,
    cta: c,
  }) =>
    e.jsxs("div", {
      className: `${a} mt-12 flex flex-wrap gap-6 md:my-24 lg:my-28 lg:gap-0 xl:items-center`,
      children: [
        e.jsx("div", {
          className: "order-2 w-full lg:order-1 lg:w-1/3 xl:w-1/4",
          children: e.jsx(ae, {
            wrapperClassName: "mx-auto !w-2/3 md:!w-1/3 lg:mr-12 lg:!w-auto",
            background: i,
            gradientClassName: `${A || ""} before:gradient-peach500-coral500 `,
            animation: t,
          }),
        }),
        e.jsxs("div", {
          className: "order-1 w-full lg:order-2 lg:w-2/3 lg:pr-4 xl:w-3/4",
          children: [
            e.jsx(x.h1, {
              initial: { opacity: 0, y: "20px" },
              animate: { opacity: 1, y: 0 },
              transition: { delay: he },
              className: "display2 mb-4 dark:text-black-500",
              children: s,
            }),
            !!o &&
              e.jsx(x.h2, {
                initial: { opacity: 0, y: "20px" },
                animate: { opacity: 1, y: 0 },
                transition: { delay: he + 0.3 },
                className: "dark:text-black-500",
                children: o,
              }),
            e.jsx(x.hr, {
              initial: { width: 0 },
              animate: { width: "100%" },
              transition: { duration: 1, delay: he + 0.5 },
              className: "my-4 border-y dark:border-white",
            }),
            e.jsxs("div", {
              className: "grid grid-cols-12 gap-4",
              children: [
                !!n &&
                  n.map((h, d) =>
                    e.jsxs(
                      x.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: he + 0.7 + d * 0.2, duration: 1 },
                        className: h.className,
                        children: [
                          e.jsx("p", {
                            className: "h3 dark:text-black-400",
                            children: h.figure,
                          }),
                          e.jsx("p", {
                            className: "text-lg dark:text-black-500",
                            children: h.description,
                          }),
                        ],
                      },
                      d
                    )
                  ),
                !!r &&
                  e.jsxs(x.button, {
                    initial: { opacity: 0, x: "-10px" },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { delay: 1.05 },
                    className: `button primary dark:text-black-500 ${r.className}`,
                    onClick: () => window.open(r.link, "_blank"),
                    children: [
                      r.title,
                      e.jsx(Ma, {
                        className: "small ml-1 dark:text-black-500",
                      }),
                    ],
                  }),
              ],
            }),
            !!c &&
              e.jsx(x.div, {
                initial: { opacity: 0, y: "10px" },
                whileInView: { opacity: 1, y: 0 },
                transition: { delay: 1.15 },
                className:
                  "mt-6 flex justify-center gap-4 md:mt-8 md:justify-start",
                children: c,
              }),
          ],
        }),
      ],
    }),
  we = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  },
  te = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  ba = [
    "earn a yield",
    "pay their contributors",
    "get a foot in crypto without being exposed to volatility",
  ],
  bn = () => {
    const { t: a } = q(),
      { prices: t } = Te();
    Ne(void 0, "/eura");
    const i = fe({
        src: en,
        loop: !0,
        autoplay: !0,
        className:
          "!ml-0 max-w-[150px] md:max-w-[200px] lg:!ml-auto lg:max-w-[300px]",
      }),
      [s, o] = l.useState(0),
      [A, n] = l.useState(0),
      [r, c] = l.useState(0),
      [h, d] = l.useState("1.000"),
      [p, u] = l.useState({}),
      [g, B] = l.useState({
        totalAssets: 0,
        totalLiabilities: 0,
        equity: 0,
        holders: 0,
        volume: 0,
        supply: 0,
        supportedChains: 11,
      }),
      [v, D] = l.useState(0),
      w = l.useCallback(() => {
        D((b) => (b + 1) % ba.length);
      }, []);
    l.useEffect(() => {
      const b = setInterval(() => {
        w();
      }, 2e3);
      return () => {
        clearInterval(b);
      };
    }, [w]),
      l.useEffect(() => {
        M.get(`${G}collaterals`).then((b) => {
          L(u, { collateralsData: b.data });
        }),
          M.get(`${G}savings`).then((b) => {
            L(u, { savingsData: b.data });
          }),
          M.get(`${G}supply?agTokens=EURA&agTokens=USDA`).then((b) => {
            L(u, { supplyData: b.data });
          }),
          M.get(`${ue}utilisation`).then((b) => {
            L(u, { utilisationData: b.data });
          });
      }, []);
    const N = 25;
    ze(() => {
      (() => {
        s !== null && o((U) => Math.floor(U + A / (1e3 / N)));
      })();
    }, N);
    const [E, V] = l.useState(!1);
    return (
      l.useEffect(() => {
        const b =
          "https://api.coingecko.com/api/v3/simple/price?ids=ageur&vs_currencies=eur";
        E ||
          (V(!0),
          fetch(b)
            .then(
              (U) => (
                V(!1),
                U.json().then((Q) => {
                  d(Q.eura.eur.toFixed(3));
                })
              )
            )
            .catch((U) => {
              V(!1), console.error("EURA price not fetched", U);
            }));
      }, []),
      l.useEffect(() => {
        if (
          !p.collateralsData ||
          !p.savingsData ||
          !p.utilisationData ||
          !p.supplyData
        )
          return;
        const { totalAssets: b, totalLiabilities: U } = ge(
            p.collateralsData,
            p.savingsData,
            me.EURA,
            t.EURA ? t.EURA : t.EUR
          ),
          Q = b - U,
          j = { holders: 0, transactions: 0, volume: 0, supply: 0 },
          I = p.utilisationData;
        let H = 3;
        for (const [, f] of Object.entries(I.EURA ?? I.EURA))
          (j.holders += f.holders),
            (j.transactions += f.transactions),
            (j.volume += Number.parseFloat(f.volume)),
            (j.supply += Number.parseFloat(f.supply)),
            H++;
        o(j.volume), n(j.volume / (Math.floor(Date.now() / 1e3) - 1635721200));
        const P = Ke(
          t ?? {},
          p.collateralsData,
          p.supplyData,
          p.utilisationData,
          p.savingsData
        );
        for (const f of P)
          f.symbol === "EURA" &&
            c(Number.parseFloat((f.supply / 1e6).toFixed(0)));
        L(B, {
          totalAssets: b,
          totalLiabilities: U,
          equity: Q,
          holders: j.holders,
          volume: j.volume,
          supply: j.supply,
          supportedChains: H,
        });
      }, [p.collateralsData, p.savingsData, p.utilisationData, t]),
      ne("section"),
      e.jsxs(e.Fragment, {
        children: [
          e.jsx("section", {
            className: "product-intro",
            children: e.jsx("div", {
              className: "container",
              children: e.jsxs("div", {
                className: "gradient-in-container pb-1 pt-12 md:pt-4",
                children: [
                  e.jsx(Pe, {
                    illuAnim: xn,
                    illuBg: an,
                    gradientClassName: "before:gradient-blue300-blue500",
                    title: e.jsxs(R, {
                      children: [
                        e.jsx("span", {
                          className: "h2",
                          children: "Euro stablecoin",
                        }),
                        e.jsx("br", {}),
                        "Onchain Euro, endless possibilities",
                      ],
                    }),
                    description: a(
                      "Discover EURA, the most liquid and scalable Euro stablecoin"
                    ),
                    figures: [
                      {
                        figure: `${h}€`,
                        className: "col-span-4 xlg:col-span-2",
                        description: "EURA price",
                      },
                      {
                        figure: `${de(s)}€`,
                        className: "col-span-8 xlg:col-span-4",
                        description: "EURA volume",
                      },
                      {
                        figure: `${r}M+`,
                        className: "col-span-4 xlg:col-span-3",
                        description: "EURA supply",
                      },
                      {
                        figure: g.supportedChains,
                        className: "col-span-8 xlg:col-span-3",
                        description: "Chains supported",
                      },
                    ],
                    cta: e.jsx(k, {
                      type: "button",
                      look: "primary",
                      onClick: () => window.open(C.angleSwap),
                      rightIcon: e.jsx(m, { mui: "CallMadeOutlined" }),
                      children: a("Get EURA"),
                    }),
                  }),
                  e.jsxs(x.div, {
                    variants: we,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: { once: !0 },
                    className:
                      "mx-auto my-12 px-4 md:my-24 md:w-10/12 md:px-0 lg:my-36",
                    children: [
                      e.jsx(x.h2, {
                        variants: te,
                        className: "mb-6 md:mb-10",
                        children: a("Your gateway to open finance"),
                      }),
                      e.jsxs("div", {
                        className:
                          "grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2",
                        children: [
                          e.jsxs(x.div, {
                            variants: te,
                            className: "flex items-start gap-4",
                            children: [
                              e.jsx(m, {
                                svg: "globe",
                                size: "xl",
                                alt: "earth",
                              }),
                              e.jsx("p", {
                                className: "text-2xl dark:text-black-500",
                                children: a(
                                  "EURA is an unbiased global currency available to anyone across many different chains."
                                ),
                              }),
                            ],
                          }),
                          e.jsxs(x.div, {
                            variants: te,
                            className: "ml-12 md:ml-0",
                            children: [
                              e.jsxs("p", {
                                className: "mb-4 text-2xl dark:text-black-500",
                                children: [
                                  a(
                                    "Individuals and institutions from all around the world are using EURA to:"
                                  ),
                                  e.jsx(x.button, {
                                    whileTap: { scale: 0.9 },
                                    className: "ml-4 inline-block align-middle",
                                    onClick: w,
                                    children: e.jsx("img", {
                                      src: La,
                                      className:
                                        "dim w-8 overflow-hidden rounded-full duration-1000 hover:animate-spin",
                                      alt: "Ellipse",
                                    }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-4",
                                children: [
                                  e.jsx("img", {
                                    src: Ja,
                                    className: "w-8",
                                    alt: "Arrow curved",
                                  }),
                                  e.jsx("div", {
                                    className: "relative w-full",
                                    children: ba.map((b, U) =>
                                      e.jsx(
                                        x.p,
                                        {
                                          initial: "hidden",
                                          whileInView:
                                            v === U ? "visible" : "hidden",
                                          variants: te,
                                          className:
                                            "absolute left-0 top-0 -mt-2 w-4/5 text-xl dark:text-black-500",
                                          children: b,
                                        },
                                        U
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(T, {
                    framerContainer: we,
                    framerItem: te,
                    wrapperClassName: "md:px-8 lg:px-16 my-16",
                    textarea: {
                      title: a("Don’t compromise on security "),
                      list: {
                        picto: [
                          {
                            icon: e.jsx(m, {
                              svg: "air",
                              size: "xl",
                              alt: "air",
                            }),
                            text: a(
                              "EURA is an all-weather, multi-audited stablecoin able to withstand adverse market conditions"
                            ),
                          },
                          {
                            icon: e.jsx(m, {
                              svg: "lock",
                              size: "xl",
                              alt: "lock",
                            }),
                            text: a(
                              "It is backed by secured debt and Euro stable assets"
                            ),
                          },
                          {
                            icon: e.jsx(m, {
                              svg: "centerFocus",
                              size: "xl",
                              alt: "center focus",
                            }),
                            text: a(
                              `EURA isn't just stable, it is fortified with a ${W(
                                g.equity
                              )}€ equity buffer for an added layer of holder protection`
                            ),
                          },
                        ],
                      },
                    },
                    image: {
                      node: e.jsx("div", {
                        className: "w-full md:w-2/3",
                        children: e.jsx(Oe, { pageData: g, currency: "EUR" }),
                      }),
                      className: "mx-auto flex w-full flex-col",
                    },
                  }),
                  e.jsxs("div", {
                    className:
                      "mx-auto my-12 px-4 md:my-24 md:w-10/12 md:px-0 lg:my-36",
                    children: [
                      e.jsx("h2", {
                        className: "mb-6 text-center",
                        children: e.jsx(ce, {
                          delayChildren: 0.15,
                          staggerChildren: 0.03,
                          dataUseEffect: g.holders,
                          children: a(
                            `Join a global network of ${de(g.holders)} holders`
                          ),
                        }),
                      }),
                      e.jsx(k, {
                        className: "mx-auto",
                        onClick: () => window.open(C.angleApp, "_blank"),
                        type: "button",
                        look: "primary",
                        rightIcon: e.jsx(m, { mui: "CallMade" }),
                        children: a("Get EURA"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          e.jsx("section", {
            className: "container py-6 dark:bg-white md:py-12 lg:py-20",
            children: e.jsx(T, {
              framerContainer: we,
              framerItem: te,
              wrapperClassName: "md:px-8 lg:px-16 my-16",
              textarea: {
                title: a("Harness the reliability of the Euro"),
                list: {
                  picto: [
                    {
                      icon: e.jsx(m, {
                        svg: "build",
                        size: "xl",
                        alt: "build",
                      }),
                      text: a(
                        "EURA design incorporates robust anti-depeg mechanisms based on cutting-edge stablecoin research"
                      ),
                    },
                    {
                      icon: e.jsx(m, {
                        svg: "design_services",
                        size: "xl",
                        alt: "design services",
                      }),
                      text: a(
                        "Every EURA can be trustlessly and instantly redeemed for collateral"
                      ),
                    },
                    {
                      icon: e.jsx(m, {
                        svg: "loupe",
                        size: "xl",
                        alt: "loupe",
                      }),
                      text: e.jsx(R, {
                        children: a(
                          "Track the collateral reserves behind EURA in real-time. With Angle, <strong>transparency isn't a feature, it's a foundation</strong>"
                        ),
                      }),
                    },
                  ],
                },
                button: e.jsx(k, {
                  type: "button",
                  look: "primary",
                  onClick: () => window.open(C.angleAnalytics, "_blank"),
                  children: a("Check Analytics"),
                }),
              },
              image: {
                node: e.jsx(ae, {
                  background: ui,
                  gradientClassName: "before:gradient-purple500-blue500",
                  animation: Di,
                }),
                className: "flex w-full flex-col",
              },
            }),
          }),
          e.jsx("section", {
            className: "container py-6 dark:bg-white md:py-12 lg:py-20",
            children: e.jsx(T, {
              invert: !0,
              image: {
                node: e.jsx(ae, {
                  background: Ei,
                  animation: Fi,
                  gradientClassName: "before:gradient-purple500-blue500",
                  animationClassName: "w-10/12",
                }),
              },
              textarea: {
                title: a("Get onboard easily"),
                list: {
                  texts: [
                    a(
                      "EURA is liquid and available to buy in few clicks with little to no fees, with a simple credit card or bank transfer or with your crypto assets"
                    ),
                    a(
                      "Seamlessly borrow EURA thanks to your crypto assets. No need to sell you crypto to get EURA"
                    ),
                    a(
                      "With stEUR, the Angle savings solution, earning a yield from your EURA has never been this easy"
                    ),
                  ],
                },
                button: e.jsx(K, {
                  to: S.stEUR,
                  children: e.jsx(k, {
                    type: "button",
                    look: "primary",
                    children: a("Learn about Angle savings"),
                  }),
                }),
              },
            }),
          }),
          e.jsx(He, {
            framerContainer: we,
            framerItem: te,
            title: a("Unfold the future, grounded in the Euro"),
            description: a(
              "EURA is composable by nature and any integration can be permissionlessly built on top."
            ),
            text: a(
              "Get in touch if you're looking to build around Angle and EURA."
            ),
            buttons: [
              e.jsx(k, {
                type: "button",
                look: "primary",
                onClick: () => window.open(C.angleDiscordInvitation, "_blank"),
                children: a("Contact us"),
              }),
            ],
            animation: i,
          }),
          e.jsx(pe, {
            embedded: !1,
            faqs: [
              "What is a stablecoin?",
              "How does a stablecoin work?",
              "What are the different types of stablecoins?",
              "Why choose EURA?",
              "How to get EURA?",
              "How to secure EURA tokens?",
            ],
            docUrl: C.angleSavingsDocs,
          }),
        ],
      })
    );
  },
  Fa = "/assets/eura-tokens-06d503f0.svg",
  hn = "4.8.0",
  wn = { g: "LottieFiles AE 3.5.1", a: "", k: "", d: "", tc: "" },
  yn = 29.9700012207031,
  Bn = 0,
  vn = 120.0000048877,
  Cn = 400,
  jn = 600,
  Dn = "steur-cochon",
  En = 0,
  In = [
    {
      id: "image_0",
      w: 130,
      h: 75,
      u: "",
      p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAABLCAYAAAC85F+BAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAMjElEQVR4nO2dT4wbVx3HP7/n3STbkKxDihDhEAchEEIi3h6QEIIYIQ4VQnUOBBBC3RwQQhy6OXBCSBYIRQWkbg+IY7cnBEXqBqlwKAgHDgWksBtS/pWW7JKKqmnp7irZf7bn/TjM2J6xZzwz/rNru/4d1vNm3sz7/d77vO9788bjFYbA9PYLuRrkBHJqyYFFRAqgYAHRC15O0MZZ3ocSPBaSVq43z9JVVDe9ZBlgam9qVeY+Vd/3tjQ5yML09kq2Ri2PsQVFcqKaAy4ASJIGDaR9+xKf25K3PX0dBVVbFsOawtr0hx4udx3wCNlAQdDbK9lqxhZFyKNaQDnfqZGGBAZfunH+OrCq2FWsLU/Vaqsyd3GsFKTvIFReXcmLUgQtAueTNehBwRCRt2M65HrusXXQssCqESnLhz+7GlYfo2J9AWH3tZVcxjFF0AWBsx0rcbxgANStRNUtESkrtmyqzrLMXVxjhKwnEKp3bhUwugA8El1R3r63Bwz+vOsgy6qUpz7yuWWG3LoCofbfvxUVXQB7oWMjHRgMdG7Qw4OhnncLWFZsOeOwPIzzi1QgVF+7VQBTQrmQuEGHFYbGx4HB4Evr0yosT33k4tAoRSIQdGMlW9s9WkJ4LLQS3zYwJIkxKQzgKcWSsSzJ3MVDnWzGglB97e8FFZaCk8CDgqG5b4xhqJ97U1UWp+YuLnEI1hGEyt2X5sXap9xUFxUzgSEtDABbqC4azNJB3nlEglB5/aUlQR8FequYkYChk5+HAoNrwtPGSukggAgFoXr35UWwj/WtYuIaaQJD584iMnAg2kCo3H1pXpCnOjs4gaE7GJLEGAGDu+9pQ2YgQARAqNx9KS9iVpLeKoWnfduHDkNCv0cLBoAnPSD6th5h/AkRs+ht+Pd6uAjBY2Hplryx6ZbzE53b3Kex5yb0u9WnVDHT2W9fXo3LG3lu277HLM5abeVn8/TJGiVV3rw9j9qnvCp2d3alDCF5x14ZEvg9GGVA0esZdEHmLvW0DtFUBNEFROpV6+3rppeE5O27MgTLPnxlSOB3r8oQUbYgFyyy4tx4pkQPJgC7G7dzGYfbftqCyuDbHhplaC+7ozK0xjGKyhDrt9404hRl7ktrpDQDkLEU3WSTtqAy+LaHRhnay+6oDK1xJFKGAcTcizLE+i3nrU6t1lZ+WiSleUODyYcVcPAwxMn1QcMwoJgHCgOzouZZ58bPFklhAlBd/+ur+o7j7wVCpUcCad/2QIaJiOsd6jAxoJh9eaXXYTTEb0GviUzPJ7nNNABaq57uRPrBKkPE9fqqDEn9Pihl8GYM/VUGFHnEarWsK89miTEXBFs7FhdcTzD4K3MoYEjotz/foDrAgGEAOZ8EBrP71A8KaEgD9xOG1gYeRRjSxiwSnXcIYTDUgDffCA92AkOPMCSJsVcYEvjtg4EIM1Ykq1sb0QFMYBhyGBL67cHg/PmZJULMGNW83r3bOYAJDGMEA486N55ZoMUMkKNSQdfXJjAMEwze5kBgEEq68pOcL3AMVnMo6Nq/4wOYwHBwMPhiHgAMs45OLfmC9hRBFX39dfSNN+IDiIBBkwQ7gWFoYBDhQm3l542laKNWz3otia7cSBZARAETGEYMBmypntu4D60URdGNDfRf/0wWwASGMYDBnK+uPFMAMN7jS+pA2BdvoZsbyQKYwDDyMBhk3v203sOMOgz7+9g/vQDVarIAwgqQMYDBdxs35jAUwRsa6hC4n4r+bwPnjy8kDzaiQUcahsDxBH6PLgyzuvJszjQeb2pziABF7/wH+6c/JA92AsPIwlCjljMo15uKAP5t+8rL2D9OYBh3GAwmb1S13AAgRB3sv1/GToaJMYeBrFHLcqPhLYSpg33lFZzfX+9+ApkWhk4BjCsMkjDvAGCwmLJ5x5VvrarqeuNrUKoBRWhMIO/cwfnN87C9nSzYXmCIC2AcYWi7Voq8PcIgxr7f/fKq1SUNnScEgdC33qL2q+fQu68nC3YCw0jAkMH+0wBUjLOIsqWqqO/OIQgEYBX293F+/Tz2xb8kC3YCw3DDoIqc//zvDcCpK6VNVBcbzxyi1ME3mbQ3b+L86jl0czM+2AkMwwsDdg98r7y5qqDr/uXmjuqgoG+9hfPL57C3bsUHO4FhKGFQ69wAHwinrpQ2rWW+dW6QSB3+chPn2jVSf9NpmGDo9LxhXGFQB0FehpbX4k9889tlxT7Z2vvVJlCH+/dwfv08zu9+Bzs70cEOKwyt6XGHQRWcGqhdgxYQAKoZLaHcDOv9qooGHlJpmzronf9Qu7aMXflzy7pDh4qYwHDAMABO1d1nZA1CQDh1pbRparaIshXZ+1uHi5CFKPuPf1D7xTXsi7egWmsPYALD4cHgVEBtPb3WEmHQ7n+/lBcxZWC2cVHxOdCIxVex0hKgeNtHj2DOvQ/zgQ/A8ePNIQZoe3/PUxdpHG8/Fp/uIm+YL51ele/0rmXgeMj5/fz5oZT1I9V9sLWGZ0acczL3pbVIEADuXS0VTEZ+S0xji7RQGgJM/Rrm3PuQD34Qmc3GBjDWMMTCkSLmRHktUtltKEHdMg9datW8cLv//e/MC7oIzAbWxLtVh/op7343JncOyeU6BjCBoQ8wqBMKAbCeeehSDhKAAN4woVJGPBgaZ0p7A6dQBwCOHMWcyyG5c0h2dgJDP2GwCrV9pLZHcG7kmsA189CloredzAIwAJHDRRfqUHdSTmVdlTjzXnhgJhDsBIaUMNQqSGUHrA1vK0CFy1Nzl5YgBQgAG0+UskcqUgbORzVm9HCRQB2864kIks0iubNNKCYwJIu5VoW9Hff2UEBCVLte/0amT9V/RCMVCHXbfry0BPJop8aMHC4SqoM/CMlmkTNn4D1nMLMn01VMIN1FXhgNGPZ3YHcHrBPasdyN5j4MT2ce+sJ83ZOuQADYfrxUBFmifnuZSh3wwROvDoEgpqcxZ96DPPgu5MEHYSY4hHTdwKMIQ63iNv7ebnNfgo4FYKb0nP/X17oGAWD3ainnwJIYudCVOoQBkyCIwFzk+HHk9IMuFLMnkRMniazUcYChWkF3tmFvFwnp/W31H96xnsx89IuBN6J7AqFuO4+XFhRKILORPT5OHQKfHYPoCAzTR5DZk8jp08jJWeTkCTg2w8jCUKvC/i66t+v2/Prkrx52+o61njmyl5e5y4Ef2OoLCOCqgxUWEXmkceWYuUG6W814deg0/5DTp5EHZpCZGXjnOyEzhZw4wVDBsL/nPp+p7LkNv79P496/T2s4NqNzRz765baf6+0bCHW7d7VUMIYlkLORjdVlEP7zEqlD1HDi9+GBGeTYMZie9sAAslm3nUSbK6D9gGH7nvvpOLC3B6KwvYNax4Wg1ccE9ZBOHbg89bEvLxFifQehbvevlubFSAk4m6SxUi9E+YeLlOoQUJXOMtoO7bEZZOYovozNfFr3wW14vX+/6WOID+GNFeNjpzg7d6zLUx8Ph8AXyWDMXXdgAWSBuIUoz5tu1CFYaV2oQ1gZcT52KiPlhDdujpRcHZrbAR/VXJ76ZDQEjcsM2ryFqAVgHuHsIBeiGtdNsXYR3/PifIwvI9WEN8SH1OrgZtvCSHH6E18pE2MHAoLfvIdYJfCASN3z4iuyY8/rUJEDGZcjfOhmwhssL7YebtbUFmc+dXmNBHbgINTNe8S9ELjLSNvzulGHsDIGNy7H+tCXIS14fAvVxelPXy6Rwg4NhLrtXi3lrJF5jMwjnAVSqIN/uwt1aCmjr+NyCqDaoE2qDu1lXKtlWEiqAn47dBD8du8HpYIhM49okfriVFJ18LL1rA40r9HluNy7OgTKSKQO1xEpTX/mcrm9VpPZUIHgt+0ffreI+2seRVq+BzHE43LAh748W2nb9vvFNVQXpx/+ajm0ElPY0ILgt+0ffreohoIoRaS5UDVE43KkDwOY8G6BLDkmszjzcPohIMpGAgS/7T5RyqmdKqpQQCiIiLc+4f1JKOV9HJe7U4ewMqJ8NGyBWVbs8tHPfW05RXUltpEDodXuP/G9vEELCnkxUgD/OkW3PS+lOvjLSK0OUWXITYGygy7PXPx6ubvaSW4jD0KrbTxRyh4jk7fGFETII5IDOd+vcbmrW80E6qBGrhuVVUXLRzL7Zbl4pW//5TWJjR0IUXb/R9/Li5UcSF6MZEHziGQbkHQel8P3xalDfTs4hFxHdFNEVoFVEbN25NI3evrnnf2wtw0Icbb746sFAGtM1ljy7jtg9X+CR6GRsb7f39i4EIlhzcJaPZ+BVQubADNfuVIedAy92P8Bx6XfWNcSt3kAAAAASUVORK5CYII=",
      e: 1,
    },
    {
      id: "image_1",
      w: 139,
      h: 123,
      u: "",
      p: "data:image/png;base64,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",
      e: 1,
    },
  ],
  On = [
    {
      ddd: 0,
      ind: 1,
      ty: 2,
      nm: "pièce-fine",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [91.462],
            },
            { t: 119.000004846969, s: [811.462] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [294.75, 214.5, 0], ix: 2 },
        a: { a: 0, k: [65, 37.5, 0], ix: 1 },
        s: { a: 0, k: [17.86, 18.806, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 2,
      nm: "pièce-fine",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [91.462],
            },
            { t: 119.000004846969, s: [811.462] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [98.75, 221.5, 0], ix: 2 },
        a: { a: 0, k: [65, 37.5, 0], ix: 1 },
        s: { a: 0, k: [17.86, 18.806, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 2,
      nm: "pièce-fine",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [91.462],
            },
            { t: 119.000004846969, s: [811.462] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [198, 325.5, 0], ix: 2 },
        a: { a: 0, k: [65, 37.5, 0], ix: 1 },
        s: { a: 0, k: [17.86, 18.806, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 4,
      ty: 2,
      nm: "pièce-fine",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [230.987],
            },
            { t: 119.000004846969, s: [950.987] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [190, 141, 0], ix: 2 },
        a: { a: 0, k: [65, 37.5, 0], ix: 1 },
        s: { a: 0, k: [27.994, 27.789, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 5,
      ty: 2,
      nm: "pièce-fine",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [91.462],
            },
            { t: 119.000004846969, s: [631.462] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [180, 55, 0], ix: 2 },
        a: { a: 0, k: [65, 37.5, 0], ix: 1 },
        s: { a: 0, k: [42.051, 41.744, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 6,
      ty: 2,
      nm: "pièce-fine",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [968.564],
            },
            { t: 119.000004846969, s: [1328.564] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [152, 312, 0], ix: 2 },
        a: { a: 0, k: [65, 37.5, 0], ix: 1 },
        s: { a: 0, k: [31.709, 31.477, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 7,
      ty: 2,
      nm: "pièce-fine",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [1031.531],
            },
            { t: 119.000004846969, s: [1391.531] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [298, 107, 0], ix: 2 },
        a: { a: 0, k: [65, 37.5, 0], ix: 1 },
        s: { a: 0, k: [42.051, 41.744, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 8,
      ty: 2,
      nm: "pièce-fine",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [945.385],
            },
            { t: 119.000004846969, s: [39.231] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [172, 241, 0], ix: 2 },
        a: { a: 0, k: [65, 37.5, 0], ix: 1 },
        s: { a: 0, k: [28.327, 28.12, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 9,
      ty: 2,
      nm: "pièce-fine",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [826.957],
            },
            { t: 119.000004846969, s: [466.957] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [256, 299, 0], ix: 2 },
        a: { a: 0, k: [65, 37.5, 0], ix: 1 },
        s: { a: 0, k: [42.051, 41.744, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 10,
      ty: 2,
      nm: "pièce-fine",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [117.922],
            },
            { t: 119.000004846969, s: [477.922] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [230, 198, 0], ix: 2 },
        a: { a: 0, k: [65, 37.5, 0], ix: 1 },
        s: { a: 0, k: [37.731, 37.455, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 11,
      ty: 2,
      nm: "pièce-fine",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [114.419],
            },
            { t: 119.000004846969, s: [834.419] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [236, 364, 0], ix: 2 },
        a: { a: 0, k: [65, 37.5, 0], ix: 1 },
        s: { a: 0, k: [29.408, 29.193, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 12,
      ty: 2,
      nm: "pièce-fine",
      refId: "image_0",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [39.231],
            },
            { t: 119.000004846969, s: [399.231] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [120, 142, 0], ix: 2 },
        a: { a: 0, k: [65, 37.5, 0], ix: 1 },
        s: { a: 0, k: [42.051, 41.744, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 13,
      ty: 2,
      nm: "Illustration 38",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [190, 444, 0], ix: 2 },
        a: { a: 0, k: [69.5, 61.5, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
  ],
  Qn = [],
  Sn = {
    v: hn,
    meta: wn,
    fr: yn,
    ip: Bn,
    op: vn,
    w: Cn,
    h: jn,
    nm: Dn,
    ddd: En,
    assets: In,
    layers: On,
    markers: Qn,
  },
  Nn = "/assets/steur-cochon-d9316da0.svg",
  Hn = "4.8.0",
  Pn = { g: "LottieFiles AE 3.5.1", a: "", k: "", d: "", tc: "" },
  Un = 29.9700012207031,
  Rn = 0,
  Jn = 120.0000048877,
  Ln = 300,
  Mn = 300,
  Fn = "Composition 1",
  Vn = 0,
  Xn = [
    {
      id: "image_0",
      w: 145,
      h: 145,
      u: "",
      p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAYAAADD2FojAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAgAElEQVR4nO19eZQcxZnnLzKzrr6rJbXUOlALkJA4pEZcBgxqDAM24GfpPY+ZwbNWYyPbMzv2E96dHbOeN9bM2PvsN2Mjc6zXj/GqZ7ys8TG2bBgvl5EAMUjCkhphXaCjQUe11N2qru7quitj/6jKqsjMyDurq1rmx6NVmfnlF19G/OL7voiMzCT4A8K+ffGOgoReEPTKFB2UVv7toBSrZBBQiur/AGRKKr+V/TIloMB7oBiiFONFmQ7KBOOgwiAKhcF1t0XH632t0wlSbwNqibcPjfQVIPQBpE+W0UuB9hIRCGQNMSgFHJIIsszuJ2UdAKVIUGBQlrFdBrZnUBh84AIm1gVFogPvxHtB5bUypX0UZE2pgcuNS9UN7pREMrPPSCdDomo51e23qEy3gpKtn76zZbB+teQ/ZjyJjhwdXQtgrUzRR0EW221wLYlYjyMzJFBkXJOIrzNBKbbKFFsfuKt5a73qzi/MSBKdOBHvKcrFjZRgrUyxuOo5rL2GzDS4utHdk8ijzgRABwgVNz/wschQnarUE2YUiU68f66fyqSfUrJG3zh6EsnMPrXncE8imdmn1uGLzldAycDn74kM1KeG3aHhSXTiRLxDEAr9ADbKULwO0XgGowTYOYlYvWZJtWMSyRqdWtsZnaB4r0DJQK6Q2fzQusZPyBuWRCdOxDskKbeRUmEjrYyqlEYyaAibJJJlHhGcjcx4JFJ5RXVSrddpQiLGnoQsY3NBbmwyCfU2gIfYqXP9oUB+iIB8HUC7e00EYBoMAEB96DcsCRSd1OIcxzoBULSD4OuiEB569JepjR5LqBkayhPFYiN9kDFAQReb93yNd2E8jpuRGc8TyZzcxUynOoxZeyI3OmVK3gPIxofWhRpqRNcQJIrFYj0SlTYXQT9hFD5UiWmlQdgGck4ic53uSSTXQKcmZL+SI7T/4XWNMZqrezgbGx7eKBFhkBL6CWVf1a2XOe41VKh0Kju86wSjkzLb3nUSdViDTu8aSSaD//hvmYYIcXXzRPFYrKdIyABA1ngfiuvDnl/De7My2KTakU7mdolVuFbr4F77K3KB9j/8p/XzSnXxRPGzZ9dSURgkhKxxem6l51N2n7e+oNLJ9Hy2DNd6a6qTgIKsgSgMfvOnuX5vmt1jWj1RPB7vEPK5zTKw3tJr2Oml0OUKFjr9ufGqS8ApHCXVOtt59sh6nVrPSKGeVpCBfykEgxs3rSPTOh0wbZ4oHo/1iHJ2OyVYD6grFxpieAGrUze896KX+aHLr/zW6VIxAdZL2dz2TU/lej2a5gjTQqJk/FyvWCSDVMYqv3Syvbeyz49QgVKvZ3X6E4KIZtsPnfptCrJKELB904/zfd5KsI+akygZj/VTWd4Ht5OGTA+l8GFSb1p0oqKTp/rahRNY1JF1olpFGhvmthNKt216anrypJqSKB2P9RNKtpjJaMONbnjvEmy48Sv8KHqVHyrSOMCithRWdCUNdOqH925BgS1/+6PsJm9arFEzEqXjsQGqIVAl0fWxHJ5Ov0KFWifxJ1+jQHMgB1Dqq07tdmUXIV//m/+TG/BYjClqQqJsIjZAQSojMM8od02tW/ddpy96CVenoro5WAAoRWfYfjhTmVzR6YSAZP3XflQ7IvlOomwiNkBpaQTmBKreU5MREHGsUxIJJFEfVqvhhqiIaEdxSyAPUBkBocC3lUtujzMxJR3rH64RkXwlUS4RG4ANAvGG916h1akQ0S0kkeDa5U24bkVTlUg+jNSCQhGgMkBldEZyqg7jBcq8kXpbo5eS9V/9F/+J5BuJchOxfqA6B8S6cT+GyRVltdSJUu4jiQTXLG9Ca5OI1iYR11/ehIDk3BuwOhV0hDMVEgXFogedukuwCbL+q1vymxwXbAJfSJSbiPWDYotf4Ye98Uq1+zzotatz5aUlAilobRJxA4dIbBijmm0jRENVEs1rThvbqiO3ycXZRVmHTMjX/2pLod8HjQB8IFEufqoXFFvcnOv3qIrVSTXbdrFiSQTRVlG3v7VJqBLJZfgJCkUsak6U78DKWNQ2yR3ee4Eut2SnDNTY8l+3+DMh6YlE6XisB4K43ei49ibpdAzvPSjDip4IumcFDEXamgXceEWTG9WgFFjYnAApeyFQGZ2hNFqCeRfGatZkK+U4rQhKtv7VFu+3SFyTiMZPdIgi3Qp2Jrrign3oUYo63mjFo16ezuU9EcybFbQ8v61ZQO/SsIFO/vBewcrOGEBlFZGu7hoztpUZmRnpdIVqqGwvyuLAxi20w4s61yTKC+HNoMTjvTDOjVc/EmadTnOPtXyxPQIpWNQVwOqlEUdh7eKWUTSL1XyIyDJAKS7tiKMzkuWS2wvsd0K6ihSLm72U5YpE2YkzawH7c0GmM6o+QDe8d4DLFkcw1wGBFCzqkrB6WdhaEECzlMW10aFKLqT9/9aFZxAUZcc2AFViaIf3DrF+4w/dJ9qOSZSOx3oIJQPa/Tw37lf4YW+S8nIBd3oJll0UwdxO5wRScNFcCdcwROKNqgKkiFtnHUSA5HTkIXKxnBulcOP8YWNbazBS060AkMnmjd+nPW50OSaRSDAAT4/x8KG78eqDt9JNuDHbXgmkYPFcCddeFubaGiQF3N45iKg0WTZG64VoOazJWNoRx5pFZ7hE9AJVWINpvtoui7Krp0gckSiXOLMRBGvcFASoK8T3xWLgkMYASxc1ocsHAilYPFfCdcvVoS0qTeL26B5EpQk1cTghTUm0l0XP464lpxByEdq4uaXTuTWCVV/+QXGT07Jtl5KOx3pEAYMw8EKKmzVcAspsl/YBThbS+/XY9MWLmtAV9Y9ALIaGC9h1KIvLw+9iWeR9BAQZIAJARFBBKP8WAKG0T70tgJb35aiE10/Nw8HRdqgW58ul61MvkTWpD7Nlv8Y6EwVZ6P1ff06G7F63ZFtQoJspiHEY88mtqLwJM7LwpLas45JFTZhTIwIhN4XFdAjzZw1BKqZQun8nlP6FDMJeh0wAgfE2MgABIOVQEyQF3Lb4DK6dP4bdp+fgaLwFmby3eWEH+Wq7JBQHAPTZ1W3LE+XjsT4qYJupkQZM5/US1aJ5nTdxtziffaSG97DixQt9IlBuCjSXAnJTQHYKyKVA0+NAmrM2npCKJ6p6G8X7MJ5I450o452UfaPpME5ONCFblHA2GUKmIODsRACZgqCqDztP5pbaifVQeu8mg677/hckWzmSLU9EBQzYrmTlHMbwyj7Nthu40blwbtgzgeR3twPJEWcn0VJzAKTibaoKiWYbgFDq0wTsNZX2zW7KYHZzTkVKhZCvH2/Da0dbnF8Uz2SlbCJsBmCLRJY+snx3frFlwUrhfoW1il718N4pZkeDWNBlbz7HDGRWD8i8y4GWOaX/RePbIypoRmWkPCrjjdTUw39juYmMgJPngzg6EsLrx5rx/nn7HUQbxgzDGsXiL37fXpJtGs5o/ERHXggPwWJIrw4/fHdZDTmKfNWFunni1Y7OWR1BLFnQbKce3CM9Xgpn46dBE2eM5TRhi2qS6kqizSTgVBCRkwM4lmjH0Xgbzk2FkcgENSG8WhfsPjtJtSoN4OtMZDKkZ+Ah8+fYTMNZTghvJB7nhIzWQHt1WFY6Z3cE0VNrAgFApAMk0gF09oAU86Dn3gEdeRcoam6s0nIiTcuJNsDM35T2obINTOZD2HV2AQ6Odao6UEUdJ6T7EQQ0OtuDQXkjgE1msoaeyK4XqhSIGgzvZXdPvHa2B7F4/jQQyAjFPOh7u/meSZNQU+2QXxDw5ugi7Dq3UD34KF+fX8N72b7ORC5r7o0Mc6K8GF6LGsxMa0GZH7rhvQvUnUAAIAZALr4ZZAFnlYVcXR6rvaOfKwr41XuXY/e5hfDtZVxg8h5a2e0EijcyhHFiTc1dmFOoXW61R/iit6yzs60BCMSAdC0FWXyd/oBm1prItESgU1fhdMpZvzVcV+1TbCt7tX4zGS6J7IzI+CVW//GLJKxq3vBeQWd7EBc1EIEUkM4ejkei0I7Knh++EqNZ42F6xZsYbLuBkU7O7ZLFn32C9hvp4XsiGYYncA2BHxdksK7aht5oewiLuhuPQApI19LStAALZvi+Z3wJzqSj6k6Iap360Rcry2RdKiMUhiFNR6J0PNbj5SarFfweqUXbQ1g0r3EJpEDghTVKMVkIYf/kYu+jVeaHn49iV3RSrOp/gnKX0upIJArUt1e41XpddbQthIUzgEAAgGAzSGePbvcZ8TJkZZsTl+CH9FrdBdCqJQYRihPOyFpnFij/eHOXKnXlbmQWKjvaQlgwUwhUBulaqt4hBrDiqouwfJHm6RLuumrv69ZZndSdzn7eThWJystenSfULqBiugHzjdDaEsSCuTOLQACASAcQrD4tQtoXAGIAH1kVwPJFYm07oT8MbO9/jOqcjIpEhDr0QnbL5gzv3SIcEmcmgcogLV3VjUj1IYvbewNYofVIJtCOovy7C8CbMlCN1sxJBAdrSLSF+z28562rDgUlLF7QBkFoiNdvuwPjidCkflLnjqsDuKRbTSReSPczrDnWSU1IlIuf6oXDUOaHl1QxnRrrDIUkXDTTCQQArVVPRCL6x73uuDqA2e3eX3LBjsz8ylfLaO9/jPaxOyokooJYk1DGgje8t4NQUMJF8y8AAmnBWU4SCgCf/HAQc9qtr1U3imKG915glK9W9slqb1QhEaHuQhlTlsY9+jO8DwYkLLqACESUSUeOF1IQCgB/fAtLJP5j0x4tsbwLYHJqH7spMAecTzAy7tILdPd8ytvBoISFFxCBVLBY1BYKAJ+6JYguGx7JDLXIVwGs6n+k+ui1AJTWUHtWawv8x6Z5CAUlLOi+QAnUMgckaD3CDAWA+24NoqvDvA6MOqHf+aoKUtUbCQAgC95Cmapgm7OfZggGJcyfd4ESCICwtI9/d5+DUAD4k1sDFSJVvImPH0Pg6bT0VjIqt0CE0h/+PRHLgqF3l15AAQSCErrntV+wBHKDUAC4f00Acy08khn8XgHA5kVCSSmZ1tf4A5yJLFryQN1zPyAQD6EAcH+fOZH4n7jy8TU/alQ9EY2f6EANbnU4vVsfDEqY1/UBgcwQCgB/dluJSHZzSyfgThkY623vf6T0AgihgLAnL8SbyHIaryVJRNcHBLKFUAD4Tx8JYF7UXV2xN149j9Qk9ACAQAXn+VDJGg+FMzqS2SDaoh8QyAlCAeAzH5GwaA5/TaFRvurnSlMAgFzKiyQK4iFdswZ74zVfJBhPBzCeDmAqJyKRCaCjGbgkUPeviHIRnyr9G23A+72EAK1NBHOjIvJFilweyOSAbI4qDx+5Bi9fNYMkgPb6MVzkucd8keB8KoB4OoDxVADJnP4xt/EpYPvbMvquEhCwfxO75ohPAb8dlEEB3LFKQNSfp5R9w693yxidKP2WBAIpBDSFSg2fzwOZPEUmD2SyQNGEBJ6mDIjiiSjpcHo+z10qmMxKGEsFcW4yiHja3oq9RiNSPAm89JaMXPnLCS8Oyvij3sYh0ra3KUYn9MN2pS0kCWiRCFrCAG0FcgUglQWmMiVi+R3WJAi0w+szTsOTIQxPBHE+FUA6744FCpH+qLe+oU1LIEpLjfDCoIw7G4BI296mOHyqygL1cL66k+VJQALaRaCtqfSg4lSm9H8qV3oMjgvejVc9egGA5BIxx7zMFQliiRBiEyEMT4acnm6Kni6C65bWJ8lmCcTr5QEJuOvq+hFp236Kw6epyibmHx15eDKUEaYokSmZJpjIEBSL6rSEfc2PEQa+TIjtl1zliwSxiVDl/1ph6FzJ4ukmkkKgLPMIvbYRcgXgub0y7lotoHOaiaQQiEseGIc2PcHUOppCQFOIootSTGYIkhlgMk1QcPDZEUsSvR8P15w4Wkw3kfKFUt5TCWGVP/pGUIj00Wkk0rb9FIdOVw1ySx4jeWVXS5iiOQzMbadIZggSaWAyRVCwiFXccJbISDg22oTYRAj5Yv3mb6YjtOXL+U486SxEBCTgY9fUnkgvKyHMb/KoZIx1FGVgIkOQmCKYynLaguC2ConyRYL34xEcG40g5TI5rgVqSSSFQOeTcBUiAiKw9kMCWry/Q4uLl/eXkmhP5DGVUeu0Op4vAuMpgsSUgLwS7ghuIyNnR+ix0Sa8H69RTfiAWhCpQqDJ0ra7hgI6W4G7rxEQtJ1d2oOWQE5s0uY9VuRgddqth0SKYCJNkMqR28hPd5hNRTUGKEpEut4nIrEEckseVr6zFbjnWv+I9PJ+ikOnqoWbeg2V3e7Jw8pbhT5WZmxS3NCY9xvKoEBlQvPEWYrd73rne74AvLBPxtikutLYxlHKLP9T+k2N5ccmgX9/s5qYe8FvFQJpy0R1W28HLf3n0G6dPDTH7Vz7FI42JImMGvL4MMWud9wTKV8Ant8nY6z8SXrH5IFxJY9OAs96JNJvlRDGK5P1BF7JA408RwaaMo3qCqjRJ829wKpCjg9T7DrinEgKgc4nPZDHoqFGJ4Bndrsj0o5DFIdOUpt2lfZ4Ib1d72R1fOBLZHvDkIjXE4wq5NhZip0OiJRTCDRpQR4YlOmgl49OlG6OOiHS4VMUg8epjTKr5LFVVw7sNpIHI28U+oTZzW4+H+kfzFxtZR/nAo8NU7xhg0i5AvDCXk0OVPnjvFLtyDsh0uFTFC+9RV2Rx25duSEPr/PydACAUKRIWl+q/9AaZ3TBZhd4LEZxfNiYSLkC8PxeJgcy0Wl13LARoJEvy4wkgF/tMifS4VMUL75lFpbK5PGhruwm1XYIqRzP5kkRAARKiQ9jCvtw01Bmx18/THGMQySFQOeT9st00iPt2D2SALbu5BPp0CmKFwepSUNaeSfndWVGeqcdqXx8EgCEaCR/Vn+J/sNNhbDy3OPlH68f0hNJ8UCeG8Gj3SMTwC/fUBPp0CmKlwZpVZ9Kh/fhOhgZbV15Cm1aeRkFABByRcH4u5E+wGsjqNjP6NTq2HGQ4lj5NuCOQxRjkw7LRFXeN7vLx0cmgF+UicQSSK3D37keR97JaZnlH/kiPQAAUmdz9venE6E18Bm08ofpHQY9xZGMRid7/LVDFAdOUvVMtFafA7vc2sSTGUkAP35VRiKl1elyltmFXZZ2O6wrGUIGAKRiURyEz7BsBAvjWB125NnjY5PudNiR99qQiRQrT1Xy9agrtzoUeSrT5wBAuGL22M/hE2qdXxjJq4671GEmbxj6XNld2lOXuoLmuMe6SsvCy0D5AzHP/S5bmMhIrtd/WPVQv3uTkYzfnsdIxp3dlC9vorOR60qWQb/xZ5IAlFc2NgeLoxMZaS4cwknhfjekkU5X5HFhl7NGcJb3zIS6yhdJQtkUACAoyo7yIqooLxdY6aGsgVRTKRbH2V5uKGOjTNPjMCjTzC4DnYbHwepzN+ICI9+odVWU6Vtl0RKJmoOyrbzIDXlYeTAyRsa5rRBtL65vflG/pRlu6kpFWJs6snnyknK6AABXzB77eUBkm1kNV41gWsn+NaRRJYPR6UdDGlWyWkdtl2b4SR4jGbs6ZEH4kVLHlaWC2wbT4yPJoOpjW7Tyh8/aSsFwKKPR6UeiaKdMJzY5s2vmzvUY6TQ7Xigg/e1+qfJC7spSkKZAcSe0J5qxklFum/0GOg2Pw6BMJz2OkeceB/hl2rBbu64HuuMXZl3litgPBhUStYaLj/JOVH74ZZxRJbtvSJvygG8NWe+lGfWuq1xB/GcwUK18//XOXDGdFwUeebSKzY6zF6uSt5AZemcPho7s5R5nQQ02KICVH7oX7Z3dhmW+vetZJMZiOh1X3MCcx7nOk0f34OTRPTpbVlx3L9o6u03r6tCbz2LyfIx3KYbX2RrtRvfF16A12q2T4dW/1XHWJkcymuOyDPqt9ZJqMaPq+YRoU/5IKiGucKrYr/xi6MhevPLsk/CCi5auLjWqQZm/2/ZjnDv9ruqc5tZZWLh0NdrYBtPYffLoHux8XtUB0dQ6CwsuqTa0UZlvvfY0Rs+oy7RCpKUTlMpo61yA6z/6l5h/8WrLhjc8zhx07QAUL1Qkx7W2qhg1qzn3ZP3yC/9gZbcWYiBoYndpxMU9TwrariunSCfPIzM1jnMnD+Cl//swjux5VldXutRDe1xjB1fGYfsUiviZ1lYViS6/JPpIJCAXpje/0Mt7gWWZRufp7NAP141OtKorrz0kMzWOnf/+PQwdfEVjI//aakEeilIoe3SD+LDWPt1C/e627H/wjLPNfhfG+UEeBWakNy3GhDyK3aZlAvwyfbq2bHoCO7Z+y1bn9UQegN8+FMgWyGGebfpvwEry15wWbss4I/Joe61XWJHe4mQju02Ks6wrHiKts7j7Q5E2RFr4xwQxgLHYO/bKtGo/RQYmMpq6KFD6dzy7dA/+XntZ244XfpcePZcMzlYUK2B7JGV2UrPjDnQYVfiH796AW+7eoO5trD6NHWZlGoHbCOxxs/MsyuSdK0lB3Pv572P+ktWq4xPnY3h377M48rtnMJVQr1wmREDs+F5E5y1TlW9VpudRNQVyRZJ8fIP4E86l8B9enNeW/6Ebz6It3HFSbdXjAX5vMutxnDLNytASqKLDBHZChFGBWrtbo924+vYNEDlfIUqOx5DNTNouU5HxUleKfFEGl0CAAYlWLmv7aiQgF0yNq9aDaQiwRUBG3gh+5WKG+g10anstzy7DMmFcJttxeDou6f2o7pxQpFUvr+jQlKmtKx5hDe3W1ENRhvzoBvFBozowfAJ2YUf2Z1bG2SGHlffSVQgHZrmYJWHBlmncolaNYIuABjoMzzOpq+P7X9DJi4EIOruXefYshsc1NikoFvGa2XUYvgzlhgUjf3FyfMF9qZwoOMmLFEO08qrjBjqM8PauZ/H+u/rZYhYUwG3rvoI5C3j5gvoGqaEOq+u0c56BDrtl5jKTGDrwCnKZKZ1sIZ/B3CWrbdW3qmiD+jfSobGP5om43uwaDElEokvGdx6YfObwcNMnbBunvRiNjB0dPEycj2HifMxCCsikq/mCotwOGXQyNsnDyjglYDGfw2u/+CakUER14vnhdxFpmYV0ckwlH4q0oefKOxAItToq00rGylvmC3j1iQ3kPTMZ09cy3TB/tP+98wvGUllRUBln07PwLsbsuNUFWaKiw97SDM2pjnooe1yXf2jK5CGdHEPaQCePQPMv/RBu+Phf62xySx47ndeOFwIsXi1DokvGF7bnfmIUM6liLNU0AtXIayvZ4Lg/sF4UZnCadX6hP0V9nC0TNsq0AUEMoGtxL27543/Q26TYrS1Ta7fTuigjX8CrTzxo7oUAG+8nunlly/2zm/MZN0m13ZELu88LdIQFdKQ3PNfCbtPzrBrSwTVoIRfzGD11AL967D7kMpPu69sBeQBABgrjSXufubf1lsE5rflvjiQD/2DHLbp1tWaV3dbZXbkzr1PGIBRpsWUXD5ZhiXuSuhynSbVdpJNjEEQJh954Giv7Njirb5feMJcn/zTwEBm3I2uLRDde2fqN53an/vLUeGiubfLYkeFcMA9XXH8vbvzoBo0+l4/hmMCM9FZkUnk7G9fV0tGNYLgFgXCrWpVcQDIeQ2pyRLV/KnEWseO7cVXfhopNpna7JA8AFIpknHej1Qi233faMztz5/BkcDBfIERVwZU/3shjdcGWIy6bZRJB/4wmpbKljmx6Ejzo5no0ZZpd13V3fwXzelbryjx5+BW8+Zvv6G57FHJpa8Jq7HAKSoFMQfi4k3Nsv25v+cWd+5fNyWxhL8BzXqSVNyi7OuLy/hjO/CWrdPrzuRROH9tjquPYoH7yD+XP05klvGYwsnvh8jUA4TSNBYH8GKRkCsLz//MLZIeTcxy9s/GmlS2f62rJj/qVVOsIaQj/HsNp6ZiPppZOlfZsahJvv/5TjJ5+h2v3268/zW3UfDaNeUtW68s08E7cKzOoK+Oa0NenXyPcfJEkH9sg6O+3WMDx67svmZW6/XyqbTBXJMRx2LIpo8XB3c/i5NG9JhJVLL/2Hqy49l7DMpdcuQZvvqhfgptNT+CZJ/8zlq7+GHou7wMATMbP4NCuX2Bi7BQyqYTunNkLVtgKpzxQ7W8b9aArx4a3swtKQVN54T435zom0VXLO/dv3zv1+OGz4S/xepudSuVWmklvmogPYyJu711c7FpkXpmtHd24aPlNGDrwCgr5rOrcbHoCh3dvxdCBVyv7kuP8mfJIyyys7Ou3fZ08GIU+o3pwEiqdIpMnT//gi+Q3bs519QrivtXNX14YzRwCDEKIk9BWkbfw4w5gVeYNd/0FpAD/WyaFfBbJ8Vjlfx6C4RbMnn+ZKim2E8L1hhrXlem1mYs4Rq5ATj72efF+t+e7fo/1zZflboo2FZKAP+Txu2KMGpJSoCXajXsffBzhpnZjBQYIN3Ug0tKJWz/19xV9VrmYmY1cHX5XhgmKMtJ5CLd40eGaRNFodHzp3KmbIwFZhhPyKDJlCa2MVxg1pNauzu5luOfBx9E++yK0dFi/VUcKhBAMt6Dnyo/g3i/+bwTCrY68sBbFQlYVwrX1UCxk+Sf6CEpBMznxk3ZubZjB03dxrlneuf/Vtya+cCjW9GS+QLhxnR/r+XM9bdFuLLhktXGBHJ1atHZ0q/MS9rdGR2f3MnzqKz/D0MFXcHDnv+Hse28h3BxV6SsWspCCTVh02c244qY/RXO0u8Ia5nJM86K5PasRDLeq5AEgEG5RybM6Wmf1oHVWj8qW6NylJlfuHJk8+dsnXOZBLHz59tPzb049+s7Z8JcAfUMB1uRxnISDU/FOdZjInzlRGgm2tneXSONChy15jsx0hbJsnvzweyarFZ3Aty/RPf/m5NYj7Nqj8g82bDluBDsyJo3gtiGNyvSD9HbLrCWyebz6vQ3SGr/0+fo5w9/undzx+9NNN7PkAWw0AnPQj17uV0Na3cbwbWoD04dCgRz77oPipX7q9P3jqj9/LX3wVBDz5RoAAAPKSURBVDywArDRCJU//ocIv8mjkmdkZgp5gNoQCKgBiQDg569OHTwZD5WIpOy08hQ+kYeV+YA8VRRkcuy7n/WfQECNSAQAL+ye3PH7WORmo0r2oyENZbwS1oVdjUoeoLYEAmr45cU7r2/98LI56V+xlawiUHnb6DgblgxlqEaGo9P0OAzKNLPLQKfhcaj1TTcKRbxaSwIBNf585703ta5dOif7mFR+bZa2khX4d+uEL1/ZB/c67BDSjPT1QKGIH373c/6NwoxQs3DG4rldEw8eHQn/IJ0TBLZOHY9+LEKEVVhypUMrb0OmnsRRTMgXyH955EHxkekobFpIBAC73jp/y/5Y82/iKbGlnnM9rLzf5Kln3lMxgSJdBD753QckzzPRdjFtJAKAEyfiHa8fD//H6fHACqtG8KshHRPWhY5GIA8AyBQnaVG85Tse74U5xbSSSMGv30h+653h0H/LF0mpfAPPUkvysDIznTwAaFHGlu98VvpcPQqvC4kA4KU9yZVDI9Kr5yalynoMX0Kby7A0Q8kDGUgSivv+cRrDlxZ1I5GCrTuSTx85F/pUoVDySr4lxHZkPBK23pApnv+nByTHa6L9Rt1JBAD/b2dy5emE+MJwIjDXcUJc+eNPWLLjvRoAo0Sg6779mYCjpzJqhYYgkYKfbJv6m5Gk9LV4SgxPy3DdBiEbjDwFAvJ33+4Xv1FvQ1g0FIkUPPVSauuZhPTxVF4oTYYakMPvvMhMZz1BABkEz0RksX/TA/YebZ5ONCSJAGDfvnjHgbHQwOlx6ePpMpn+UOZ6FBBAJgSvhWVxbSOSR0HDkkjBvn3xjv3nQgNnJgL3ZPJEspUQl3/MWPIQyCKhzwSLUkN6Hi0ankQsnnop9a3RKfGLo0mxOi3gc15UT4gCTRCQf/0fn5G+XG9bnGBGkUjBUy9P3Z3KCH99dlL6cCZPhJk81yMQyKJA3yYC+e/f+HT95nq8YEaSiMW/vph6KJ4WNiRS4mWZPBFmwnBdIJAlkR4RCH3y7z8dnJabpLXEjCcRi6deSv3JeIr8+VReWDWREtoLMv8xpnogINKkJNC9hOBHm+4P/rP1GTMHFxSJWGzbF+84Nhx6IJkV7srlhd50AbOnspyXE9UAAZEWBYK4KMh7BCLsaA1Ljz+0rvETZLe4YEnEwy/fiPecHg3fIcvCjekcvYQI5NJ0ljQTAS25ApFyBXvVERApJAEFmSIZlDAlU3o0KNLhokx2NoeKWx9aFxmq7ZU0Fv6gSGQXT21L9soF2qFsFwCAkvEH7mwZrJ9VjYv/D36rjqnbPNp1AAAAAElFTkSuQmCC",
      e: 1,
    },
    {
      id: "image_1",
      w: 120,
      h: 71,
      u: "",
      p: "data:image/png;base64,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",
      e: 1,
    },
    {
      id: "image_2",
      w: 52,
      h: 71,
      u: "",
      p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABHCAYAAABIzmSEAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAEFElEQVRogd1bQXLUQAxsucwZfsATSH4ALyBUceEUfgA/ID8AfpBrkgO8gCIPCCEnrjlAFUc4b9bi4LU9o5Fm5ABZz06Vy9l1T4+knpHkrQqtvl8xwABvLqR30r43sDEG5jNS+Bh8Th1/ZXSf2/3nH3GLQZFD1uLRdzCMdzgosGmgogD8BvNxg9U72n9x7XfoxxVHRFtWScV2/L5p7h3R/rNfJYcagISLxj0BEUDirl0ZPtZoNV6iVx2vrm8uTw4cDilEysXRIoajpvGao1ZQTN77xPRhfXFyVHBIIVqiSsMkojfrL2fHtkNZo2PjWZJb0CKfMD65MrwAAD60nGrSaBqRyRmdQDxbK4x6iU8bfLi+OHutOFQgGp9pKlnBcBgWYLjIJ87vyMFv+fJ0TzjkIFqsSkDHOI4d8hAtWSXg0c3l6cvJIS/RglUixlHgkHNidhEjGC5rpj+TFD4AysF9OKjU2EZrUZyuBRTaaDSMAwBoQdSHhiBCFHwYnsm7tkoWM0DZ5Bs+xmuTwTstwMBTAKDVz29sN5eYPi+xaR26/83oiJ60Y0baAZWarnvc6ouFEylrGFNvW49hHWsGw8icKlYxIFmLHog6pCUAQeAduRQ+JoIZvA4ME/baGMmZCAlyBoaEMqpkGcJIt1gWCzCTXSES+ybCNgVlUmVm/9qLSYAX6wyuGG2qZd0qtfrDelVSFBJEueFJ4RJbJMVfqVTu5WQWvMt2CGRg7REr5NkCbmxggWe7/KNCm54hdbEQQ1nstgttO80qEYwmz8AG3HeiEqFlEGhmOl2ySk3yTcg5JALtoEqsZyRYhXtGAtAwmfehYVRUaBvuz1C0P1XjjXCpDm630Bbeh/xEsUFbUgljltsdldIzVLNKEFnOClp+EPR2SDHIyxttFYPb4FPehwTKswXc2IC7uCOQKhdg9ULbpN12v1tqLbTm+5Agqkgl9X2oXpXYOEMVqxT8LqdFge1FLONNkEzhBtjFF2Jju4M6FBtfa6EVv5ySg0AnWkqhFb1c/Sopv23XqxJAWi9XsUqNqpBlkGF4qFJueFK4xBZJUz7X+1C/W+Ztga0UWrChkIfIswXc2IDbU4cyhdb9PlSFSphzhipRadPL7Y5K+u9yIVFpUHgn5ZrJZ2IVbkqxbYRXo6hkQRO7/UKbdtuJQTUVWhJJYQdUSrvtiACVqaQV1spV0rvtiGCYGM9WVSoOK4UXVCpQhincLqzWxFwtKKry/wut0ctRtYXWr1CBqIwZTZ6BDbidKmV6uTpVmqdQhmgZKtFtezlKLxOr8GWxPd9t/y2hoFBlhRa5MyQJtQcLLLSOM1SXSr6kUItKDdCCce7zaJgYOMGdMJljlTrNks1kDj4TxVxMALp4Tri1OhmJPnkQrT/9Aa9jhaB2FCb3AAAAAElFTkSuQmCC",
      e: 1,
    },
    {
      id: "image_3",
      w: 51,
      h: 60,
      u: "",
      p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAYAAADL94L/AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAADaUlEQVRogdWZvW7bMBCA7xQ5Sx/RdVF3LArU6dKOfQT3BQp36Zwps/sGfoT6DeI1QMUOEeUTdX9UHJk6QIBN8X5Inu472fjz978QAKC7AvkMQRhPLuleO96M0ImXWxAeahwOEivkS2/8WUxnrc7Ah0PH7SNKA2+Gi9GMJI5QGNd06HjI1TGklowhdzqakGneONBp2mtPPJnEbWcyOALQU9eW0OpgZrrVKO1oayw1glpwjqADJItl0g3J3BzppVm6oyEj3boglc2JxYDdIE4yi0Gt7rRiPU03V5CZJxqUe5ycnxljRzn/ojjTzdLhfGhm2WqmF4Vy2dOvZkYaXJU9DukW49nRq7LHcTo1ncspKW67iaWwh4fmmGLwQvZ0dtoPY9gz4ExeebXZA9BPHYk96b0x7OmdTI/Oxo6e5+rsMYO8IHtqtdkb0+pIMgF7aq+jObDH7ppnxB62nYkyJ/YgSC9nZG6qZLjtJk7Jnqjja2eSe6WxJ84flOZRxaAQ9qgvZ5KSGeg12FM52hmqkKYOxx4zUE/QaaCGTvRRcw65dHO1OpLXCdiD0HYA2oOlOZLGr8UeHZozYs+5mmVQtmT2nF/OxjDhSuyhtughmL3ZlOyhdjT20Pt0rN/OOFtuS4cL1MMeutO57HmuZplKbKCFsIdNM+4IJfZkBfqK7Omq2QCGDC/mwB62A1ClYPbIvwHMkD36y9nM2JP5lwYxMCF72NlMMRhUs5yWWxQne6gtjT2xgGibE4CmmdZyvxJ7ABBCe/el7AHI+A2gdPZUoLw2z409oQn7HmfoTs+NPYjV4/D/Gc120expDipnWCNlsuf0bbXYyz81zYA9RO4BmA5A66L5AGQ9S0fzgWCzh+jyi+ECuBR7aEAae6Clj5M9x6+rWl5MLnsGQSo7Kr5JCpGamxPge/xsFgAPe+i9SdkD8OfLu3oXv4iLKZ09CHBqqmZDx3z/z2i2r8SeBmFzt7w90NnZnGFdTsyegOHH3XKxS+dkPTOFsOfX5+Vik6oAOE+mFPYAwPrT2/MDn0p+mr0Ce9gppBgg4LFpmvcfV4u9Fpp7MWPY05tq0FyA5CkAbG+fqu16ffNoxTi6ALAkh2ExMEkejfUNHSHA7uap2q7XaC4iStZiegC9LHuOAOFvCLgHqO4/LPGQqnrkP118O7RAew/OAAAAAElFTkSuQmCC",
      e: 1,
    },
    {
      id: "image_4",
      w: 104,
      h: 31,
      u: "",
      p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAfCAYAAAALO4jYAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAA8UlEQVRoge2RuxKCMBBF7xp6+f+fs7QUWmeyaxHUEAhid4t7CthXNgzHnvM9EA54BsKBcFiTwx2IXMUOa3JEruKSW52/93kAHgj/xrt5bvtR9v+VL7Xc5FU/AghLcBsQlpY4rWp+sh42/J5FOrhvu+MCQY0EkSNB5EgQORJEjgSRI0HkSBA5EkSOBJEjQeRIEDkSRI4EkSNB5EgQORJEjgSRI0HkSBA5EkSOBJEjQeRIEDkSRI4EkSNB5EgQORJEjsXjNvbbEzAd9A7L3YMndveOT93+ZvxTmPf375avq1dh3PmU3i9bZsd1rTt3tHMsjxcIo8cWSXgi7wAAAABJRU5ErkJggg==",
      e: 1,
    },
    {
      id: "image_5",
      w: 120,
      h: 120,
      u: "",
      p: "data:image/png;base64,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",
      e: 1,
    },
  ],
  Wn = [
    {
      ddd: 0,
      ind: 1,
      ty: 2,
      nm: "Illustration 36",
      refId: "image_0",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 42,
              s: [0],
            },
            { t: 60.0000024438501, s: [100] },
          ],
          ix: 11,
        },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [75, 225, 0], ix: 2 },
        a: { a: 0, k: [72.5, 72.5, 0], ix: 1 },
        s: { a: 0, k: [65.517, 65.517, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 2,
      nm: "Illustration 41",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 17,
              s: [119, -79, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 47.0000019143492, s: [119, 95, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [60, 35.5, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      ip: 17.0000006924242,
      op: 137.000005580124,
      st: 17.0000006924242,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 2,
      nm: "Illustration 43",
      refId: "image_2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 12,
              s: [370, 95, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 42.0000017106951, s: [215, 95, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [26, 35.5, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      ip: 12.00000048877,
      op: 132.00000537647,
      st: 12.00000048877,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 4,
      ty: 2,
      nm: "Illustration 44",
      refId: "image_3",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 8,
              s: [215.5, 351, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 38.0000015477717, s: [215.5, 212, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [25.5, 30, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      ip: 8.00000032584668,
      op: 128.000005213547,
      st: 8.00000032584668,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 5,
      ty: 2,
      nm: "Illustration 45",
      refId: "image_4",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 3,
              s: [402, 157, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 33.0000013441176, s: [189, 157, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [52, 15.5, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      ip: 3.00000012219251,
      op: 123.000005009893,
      st: 3.00000012219251,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 6,
      ty: 2,
      nm: "Illustration 46",
      refId: "image_5",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 0,
              s: [-108, 182, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 30.0000012219251, s: [119, 182, 0] },
          ],
          ix: 2,
        },
        a: { a: 0, k: [60, 60, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 120.0000048877,
      st: 0,
      bm: 0,
    },
  ],
  Tn = [],
  Yn = {
    v: Hn,
    meta: Pn,
    fr: Un,
    ip: Rn,
    op: Jn,
    w: Ln,
    h: Mn,
    nm: Fn,
    ddd: Vn,
    assets: Xn,
    layers: Wn,
    markers: Tn,
  },
  Gn = "/assets/steur-intro-1f8c261f.jpg",
  qn = "4.8.0",
  Kn = 0,
  zn = 150,
  Zn = 29,
  _n = 820,
  $n = 1020,
  e0 = "s",
  a0 = [
    {
      h: 238,
      w: 238,
      id: "image_0",
      p: "data:image/webp;base64,UklGRmQSAABXRUJQVlA4WAoAAAAQAAAA7QAA7QAAQUxQSN4EAAABoOv+n+M2+j3CvIHmCRb7ACawNS9tJ5Z7STXZG8R0ZkmodphSJUtB1agzLk51OaxzFDiA0wkm+b/AsNyd+f8vFRExAUhlURgzc83OjCkKBSnqwlhHbXTWFJp3qjQuULuDM6VimSqnnrrqp6XiVW48dd1Pcy6VtqY4Blvyp7CBYhpsyRltaopvPdVMqRzF2lX8UKammAejWaEtxd9qNhSW0jgrWFA4SqcrkqctpdXppClL6bU6XSZQioNRaSprSnVdJkg7SrnTqRkGSnswSck9pd/n6TDEQ5MI7YiLXqegDMTHUEVPWeKlVXHTnrjp85iVgfgZyngNiacmVpa4alWMlCe+ehWf3BNn6zw2eSDehjwueSDuhjImFXG4ikdFPK5iURGXqzhUxOcqBhVxuupeTrwuu5YHZoW8W3kgboe8S8oTv2vVIU8c96ozlnhuuzIkrptulMT3sgs6MC7k7VOeOO9V6yzx3ratJO5X7dKBfUG3yhH/fZsMSdC0JycZ5q3xQvBtGZIUTTt0EAPpVjiSo2tDSZKs9qdqUdRqb4ZkafalgjBI78mSNO1+NMkz38tMIG4fBUm02IMTiWuuIJkWjVmhuKY0STVvyIrFNqNIrroRIxjTSC2Y0ERFkq0acKLxu2mSrd7JCGe6Uy2csEtB0i13sOKxOwTxhO1Kkm+5lRWQ3aoWUNgmJwkXWxgRTbfwIvKbFMlYbyiFVG2YCslu8EKq1ymSsl5TiqlcY8Q0XePE5NYEMdFfNMk5B1AIqgRgBGUAWEHNADhBeQAkaUCJSqMQVSGsCkZURlwzUTm4f43R/6UU/2zVwpr/Vwv/jzJHLazvRHUfp6JysMK6KqoJClENoUSlAVEBeCaoFwC8oO4COBGUA/CJoK4C0ILqA8BbOeGv98U0XzMT0+01IzFdW6PElK1BENIl1n8mpG82jIR0vEEJKduAIKJLbD4T0e0t+iIabYGFgFbY9jMB/bTVkYCubYWleFbY/jPx/LTDkXiu7YBL4Syx65lwvt4pE05/JzwWzQvsPhHN9QawEMxKNTETzG00qQVzpRF4sfyEZjOxDBrCY6E8Q9MDoQwbw2ORzNH8QCTDPeCxQObYZyaQwV7gxXEX+81W0riyJ8yE4bBv9UYUy4O94aoojtHC+4KYo42ZIPqtwIkYHFoahPAabe0J4bA1OBGBQ4uDAF6gzdmSfat+qzBh3w203DPvLtquXrDu8qB16C0Zt+qjgyPGHaOTM7ado6PfMO0uuqouWPZadQYHlwxbZOhwb8Gu1SE63V9x6xAdHzFrjM6PWXUdERwz6jqiOGbTdURyzKTriOaYRceI6HjFnzGi2l8wZ3WIyPYWrFn0Ed2DC8a8zhBh9R1b7irEecaUc0R7tGTIaoKI9wI7LvuIuvqMGT8rxH68ZMTqBhKYXbDhRQ9pPGHCKZLZCwx40UdKT5J3isRm95P2uIf0jt8mazFBktUsUacKqc58gr7LkPJ368Q8HiD1g8cJeTwAB9+tE/F4AC72fAL8AJzUs0XUlmcZ2Dm+iNbFRIGlvbO3EVqc98DYo88WUVl+cwT2Hn22iMTCjxR4/O7ZRedenR2B1Xr82avOvPETDY7r0dn91j0+H2mwPh+dfBdaEb6bjXJIURcTe1rX8wbm92tnJ+9qCLZYjyQDVlA4IGANAACwSACdASruAO4APm0ylEckP6khKtIqW/ANiU3cGBzkiHMLjCgBXAH6Af27VSfwA/QC0//JrrgH4AWH88/6rtmQQ+Q5ojveY0/Q8n/efJD6oP1H7Af619KnzDfuD61HpL/xvqPf2/+7dad6CHl4eyr/Xv/T6YmY0/Rzx761ctd2Zyu4gDJN/AGOA853s3zZsiktuD7eks35AsAnXr5mK0OeAg9SvX51iLPfzq/BHLRoaYPRU40oQX+aNcDukM27lwGr7E6IHCcSHT7g8sGa384eh1E6M9N0w2atMFT55/UBD9KAd/DlFb4GPhPYya/+W1vJf8ImmdNqC6w7tjYJJ0FlOrArD2330GhwMqjsbXOvnCAYd1gxh/TBJ96XIdNgc21UdDzXZCtgFt6uR/m8UVcF9s8C3zrM5M5Q0RPpteyz0QNUyetQIzmt6HoDctntGuHt99eYGsgSFbYPvEtU/2eQPvy6zG+VR0hRYCyHSEZUiK007cRHWTY+e+IKEfSPTKq3Sy5+IHP5XCt2OaRyH2O6EHvGh7/QwYQe5GOUIUURwtbfNYCEh9d5TrnKDBEri1erO9rKQx4EwPI4Wgtkf04wPMiT1XDq2lUrsJumQ5fmHATH2BWP1ki3rxzXbeeSpXgWsds1+bnjblXe+fa15dJRiZIS3if3nyjg/aCeRsuPiPff60gmofURm6XH7ibAAMbilWSRShkiB/aX2gh/pn6YRXXTGw3ZzjdaxaDp+N1u371RKtNa/ONqtco/fIhOv/9tqSc1cnHU/RHeGh/jMAD+3uqAFD/yUAjeiEMwmQotcUMey3V9BLXW9mldquwHL2OUYkfhNAuzxm+kZG7iueSF9x3fHhd1xvvFczeOrZ1ZAi3xAyjTje80F5R+AbiDkRPfTh3Q2ny/Fx/F3P2+0QAdEXIEIWp8YU4AMTRaxg8dPB64AEf7BDz9rF7RPphZzYZ/hHkIJ3UP+AS0+KRRo8cV90Xao69A5QgUTnvmZcLJSnqZYAun7wcohTM4PzCJMDKIFc/T2nOE7UyEHov1cBOpwy8VgdKrZLL7DkWVm/jxUtoAgf+adF/804iXTXvPucFQyGwIvdF6RD4HLMM7zvEczRaBCPnpPtLkqxDmX9N9yBBJW6/sCdemCepyN2KSGc73wwJBPlOFJRWSAYkkgdunUavfZlXmPRDdFi6d9iW5/jDSHQbzT9mNMrSkAGY7Oj64pnEtgGOQIiZ/cMKFN5eKw5aiA1Q1JrEmHiBsJvS+FrJvwwPbCJTf8041mOG8rDrN61/8Nil3PwlNjyHjcYCc7+CXS4YGiIGPLz+j6B4P2Z4FNTuwlzHrbPrXKit3xAJspS5a55BzerUmX5pM2KyiWkCh/qKboK8yJNrcaufgsF74bpaaMnBsBballtccDhjt9U7JwGXbqdPCgYF17PST6UDygnah4MQecpDQhcpwOS4H0OgZC1xyOP65KlJwAwKSIwK7q/JpaslAWWhSWGHSKGjGZBIaGr4SWpAu6aOnW470AdDNTk+yR5iAaYi4hmTq8Kofnbk9Mai2wE86c/8vsLRQxNbRmzwB79NEk7RlpJLwEmyuK5hVfOxak3wJwUUyGb9Hxls/Wj1OVarNAASZmU8cD3Et/9TwUFCMI1OWRzex2lZqKXD/8RsQbnA/xpZFdnGkIOyZy5MX9G0Ju6UWxYCvy/dnLu6lj6uGRzeccJ07ZAdyBnR+kl6mGEm1lWJnh+NuQXDZgM4TiJ9zrKf1lAuWmDUpvG2DrktsPVNh+93hM/lKHDxAl/ZiQfB3pQAk9Z9tIuCbUITOMyb2+j4LsPelUrkHF2PTRhOaMMOx0V1QrmyyC9PIacJpuH6H0AB6IQWKmNO1+Kt85CIt1mZcqftlaeZOu4XKJe9O9nE92MPGC/paVzXxdXe7vzzfnJk1gNPCa2M+hCHOvHrpduRZPwXRoH3+8DEpwTu31lS9fXU5NNaUKXQAEMxCMY/f/g4G5Cp1q3vvMfRDyoGHVOVFtE8MbBJw5uUZgb9L0qG8c1JLRFzm0E/JhMFCG0Y7nWE1saC5Lv0oABVf6fjNy62NsjbAB7PeFCgftEYxhH199YYgzJGRD2al5wpWhHogXc1zX/BhVw+9EDO0h1R9MDXV3lPssINmliZbf0Tth3oqh/rAYvoDSfLBoIDlvN7Z1tzndcLHE/8XqhS1juymEk/GMmn5Ap3ALrS2MpbkLMNr6iTjALsw7WxNeqAw/oh7d6WjL2PiTUAMrr7FDdS4q25/K2h7zPQ+WUH2BdyBnQGeAeUDwMfhVjfzO1G/EuZN6YqTAKS6NzsEs2g/DAGiB/IkMQy1gPiV4PgyuMUX+1HvXxJ2Jm0qXI/4iaiz1gITz9gCLy7bUJSOpG6P2HkTgQTN+JuwYqMHNwZzkwme6Nw5QUctuh7Gwu4bFTek6AhuKYj75ZkjjP071dK7Lqu2YIDJXhPfym4x7nEtC1Sjv7oNuS9LVqoUq4SFeaAMLn4RkomrFQ7JcKm8SJQpYapOMWTfX8XBgfxHauRGlxWo4JD+pFNf6w4vdDSO1BUmuapu9vJJ8a0bvB01e2Rxpf/vzzMzozzqQOxqxRWxnbK7wPpL8HtaquKvoeDFrPw+VUF9xYXiZMHtQq0ugrpk/6ljdxtFzGT+4Ms6O1ybJUsxLuzFhtKTzj7vsn6VEO3svlaHMHwep/QMSC/VcWn0/k7ZMuxxx43oXUIC/mZCA6EGfpTg/XLMNnmNVg5m6Z+0/5mm4R78O1ioHIeFfxhul8j4gN/fTCAJVlwNaIsC7fPWJouujxxvsvds7MpYnoPiXxQGTcQ7kMeytc5AtdK1vE3nM9rNJ8UK7+ev1EdFUrKRMZzUjwSVOVdGQDVKG/YOpUgaWwUAI4ac+esTRhgmJ4U1sS59Sx8RP0qCOBPK3Ab/9aeZ0YnYLd3GI5QTEx498rZFJ3tlgYEEopRPbYzJ1dettUpywsjLLctTH965GtSu3y2hrtc6fustqUvHYx7ZnkFm1UzxNJsN9+RUSaz+zo7WYqPS9l0CzkDdw1qsRcoyZUNXN+vTWsM2x0/G0wLq3GKdL1ht9XhfxPfYWaer5Gd/Yjj//aYmRvdCqsZmGlMkWmVMy9wjGH8e/MxE49upN0rcg1fGaIzjAJwBTECCBC73PDP/dWTR4C2/vRMrtHnMni97vcud8vsGyOmlpdCHtUBoX3Pl3mR49bt5mKvFy8UkLMOf2abFIdsugbgfX6bFoBMHtNxqCnCTVKZHffnJ06HD3lqT38w4dmEf8qIZKIRayz/PvH2d323KPjIlPUnLZpyVRIl4CzsebdFWnbKRwuxEX7WH4RM33GEqB5MgDYJqvFwRhM+7KONhW4PqcM1x61Yv/HEzzXjwMISCaYozTlbwK/c4IzNLwloOV7W3yMPkwE3dVkhlJ7BtnRrUn0W1JYnxjU+VnVnSK8kizpwqNgVyjDqZTK+cPHRXlA0C7Erjla6Jx5/NeUV6MjELN30lx+ur3G2yOPyRJ6FVAAKVXFNDQOZxCpkYeF3lydV3MyFKw9hm77cNWe3Euu+VnlhKywc8/L5Joz7qzXGuTLOB92DO0rgMmu0af7Jyk34fXnUvgb5ie4PzvVaiWRIfQpLJ6tFD+gLaiGkGg7sRSiNMWxCpiuh0u5DFet95RZum/gPMwJOhd0Z3LubvA94+MkV4UwraPGYRwtNH8t/y4qOvEqi1U2eIl9u775J3otaE3DdnLC6NYfYGPhU0dJD+6DDG8UTV1ar/09sg42EjK6g9K/YGbp12iDhwN5PMBhzHoy74SBUV1/GdlZR/Wmbs2cVX4KJLsTDA+geVY13FmLvDSS0rOp43dcXfTLGAR71OcqKevU/oXUwmIyhbp9MDXOUnnB9/Er72KNLn6cAtyK3vL8zPdng6lx8urRiRJf+5XnF92anNpTCuYLb8Lhr43NzruWLD/vm5P7y+G44+ccsVJMIgts2PFfhCYqv1uwWVedE2+uycXBTT9vYjwqwPqoK0l+ROYMJhGKsqAfJaOiHLBN2gOv3XcufWxoe3AJmutMtNfS7JfqTxVQfktYpdKncehfFRA3Y9NHWtePYQsGB3XxNMi87fVA+XKJ8PXA+CinFeV3vqY2H0aAKXf5ub+9+8vLfdsU6NKKAAFQKwkZlf4otNCcxr1cyfxhz37jIuN/ifLokBDhN4z6lXAlaDHxBaI2sSkcRVlBlzkSEmBLIH6I3+YadRJzK4NlGd9NAUfy3EuXfZU+qBKfxuVvhnDYgdofZK2CVmqRd9tm9WT3i1eBy6i8tqet949hLcgeFjxIwAAAAE0utohRWQTCIShCBxoIByWJ8vCGI3kKzgULud7GYzlGAzFQnHCIaCv2qYORZ4m//Kbp+TPRnw0IVvchU5TCi9kx0TzNCfs91mv+kKW7cLyYW23/5XvV66mFZ5N5yNunEsRJ7v2UavC12JFh1G2ha7jkvd4eZ1e8ub+Qno9QKVkzq5F1oWeJ3FLrsMf6rU9eDrkRKc0qHAtX3AJ//+4lkN8TjkColGYGue3FLQvgtIroyU3HxH5QJx59h/hn1BsAAA",
      u: "",
      e: 1,
    },
    {
      h: 62,
      w: 62,
      id: "image_1",
      p: "data:image/webp;base64,UklGRpYBAABXRUJQVlA4WAoAAAAQAAAAPQAAPQAAQUxQSB4BAAABkFXbTiVIV0IkIAEJSEACEkoCEpCABCQgAQmREAfp7qkHJGvNd0RMAHZTqm3ej5oDTIe69Cv3bKYs3SstWLhYD/ZwKrEernSChp7ntC+ymrx2FVGjfU9Ru4s2FLW86FNR2+NLFGPa3hGr+fxqqH2hF0k9jhfsQtNDUZ/8wE603BT1Om+WG40AgvptAKojBrAcaQSp5wvJ1UB1tdBcKaav4Cx5Y2fz/y0OX6iuBNnVRHBVAfaUge6JgOxoAID4Kf80N4J/g5t6g+5E6C44qXisLpieiD1kvEwOOl5Xc4veoRuTiI+0TEnEZ1qGJGIjTTMSsbcZWRG7s1johP1hHuOMs5mPSCUcL2ubVILJ2GXHKDAcr8EvZLZMsB/TLY4CVlA4IFIAAAAQBQCdASo+AD4APm00lkekIyIhKAgAgA2JaQAVIABakzkWbURERbKFZSAuUGk7J0hAAP7xRH/+QV//j+T//x58r+O0ADC+3icv/xDy7/4h0AAA",
      u: "",
      e: 1,
    },
    {
      h: 74,
      w: 74,
      id: "image_2",
      p: "data:image/webp;base64,UklGRtQDAABXRUJQVlA4WAoAAAAQAAAASQAASQAAQUxQSP0BAAABkFTbVh1ITwISkIAEJEQCEpCABCQgIRKQgAQkPAd3ciF8qqp7GBETIP/y9kmlDlPw9zyl43ON9gJfFItbOMxX7NRkznEVuzUeYjJObO4E1zGvNSf6tjkg7QuYfoOVaZ/7DF6zqWCyByMLfZlAM1sKxt3LaltGULehYKhRdro2gLplGcNqZXMaoJlFAcMs+70ytDUOwyAnusaQV5g+CHKmaQzPggwe5FSrTM0nB57lXKcE+VNlVU4ODPaDB1V7lLysfKgsytlGCeyUA+1yemJlqrDnOOlEzYySLudHgjDxgIYLjJJ3ojBzgRSCiU5eufFhz8CChiuEpcHD7B2V1EEiKncm0geF1EsegkEl+RLP7Fy6RJj/n2aXvJd4JjyRdkn8EAguKaQOPPN3dFIGwvIVFjSMKulXRGZHkcDf0EmXsWXlAg+aJ6QR2PMqczOBleM8aJNZowTutMrClCRWD4ugXeaNEqSjrLLwQSKDO6mBNvncmNpzCrj/5hiaOaWAZ1mYGJo5o4A3s0Iqg7oTCrg6WWoag4ZttmEYZLFVBrxmT1QMgyx3OoDGDb5iHGSj6wOgB7PGv5gMstW0EaDFf7KxYVKD7C4TAPRN3hHrY+mYbk72PzqzMxs50ZQDupdTXd3Ug5zsyoYW5HQT6pKenVxpnlR1ppVo5W7nqZF/fQBWUDggsAEAANALAJ0BKkoASgA+YSaLRaQiIR4K7VRABgSxgGQqXuiV116I4d6sdtl5gPtA94Dzqt8d9ADpbf9FdgH59IQQCt7z/Xextg/j1wlQPTwOqOKTBaVxddd4xye9CsqFwInEBvyybMeOrKAA/vQqN/+adpnb/toqGX61m/rTqrUmysl/zjfpeqSsKkkl8c8nfPzrPDmtfDmsFquwIDVnvk8mjwiCHkGcu9b1kCCnSumymlLXhznbBpCf/HlZmud8OcfCyHptkRRATM8aGFTfBfyvaLbGaj/5cy60f8DrkqNEeh+b6QrP/3RX//kWv/5D7//8gz02AdOZslvABm+dKYbM+fnXAR82C0wgsyoQ//+vS8e91wf2axaoQmvpp9LgStLHiDK775kjxalSzOwHRTEADq4Q/Zi9oBexrzlipkrmWZPSsLFSr0U+f9zDe2p2w6RR233kKcCkaH1ZOP8n+Ynegi573Jtnaz648MoO7ste7jHEL2F198e+uc7dL299BNpY40Xxp/+rAl0n//9MtxcEFUDOzwC5UFVWQ+QG1i1g8LppavOHs58iRh//hhmaNgAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 74,
      w: 74,
      id: "image_3",
      p: "data:image/webp;base64,UklGRuYDAABXRUJQVlA4WAoAAAAQAAAASQAASQAAQUxQSP4BAAABoFXbViBJehKQgAQkICEkIAEJSAgJSEgJSEACEp6D+3Mh4NHdM58RMQHyX94/pbZpSfGepw58btlfEKtic0/GYsNJLc5OaDit2Yh7YbEHC2FgXdtb6K+vAeVcwvIveVmO71jBzx2qWBzJycZYF9DdkYr5iLLb1xk0HKiYapaToU+gYduLafNyuEzQ3aaE6SvnozL0PQHTJBZDZ3h3uDFJYtN1hmfDC57Eqlem7lMAf8VuUIL3U2NNLCcG/yGCqjclP1Y/NJbFtlMCvxRAh1gvrC5V9piTQdStKBliPxOkhQc0XeCU/BYqcxdIJVgY5Cc3PuyZeNB0hbAyeZi/o5E2KUTlzkLGpJJ2yUMwaeS9JDK/Vi4RFv9PC1t+l0QmvJB+Sf6QCC6ppE0ii3cMUifC3is8aJo1Mq7IzM8yQbxhkCFzz+oFEfRdkE7g7TUWVhKr5iJol1WnBMFaY2lJCmvGMuiQdacExZRXlj5IZgiWOmiXz52pt1PB47fA0J2VCv7KxsLQnY0K3t0OaQwaLFRwDbLVdQZNx3zHNMlmrwz4uTNZMU2yPegEmg/EhnmSg2FMgJHcntiwmOSo6zNAa/zkc8eiJjldFwDor8RAfMx1YLkHOf/oysnXiUVXDYwoVkM7NJJYDvVAT2LdpbZlvEGudE9putJr9nJ3iNTJf31WUDggwgEAALANAJ0BKkoASgA+ZSiSRb+isResr2H4BkSgZ685X/AIJL+Kv6Af0DQAIAA/ACuISiPeTfK7ATgmbdLzAebr6Hd5E9ADpQHT+LID9riJiq6OKT9w7iiCTDAbauotaGW6Lqn0/24Zufv6Iv5FxXZsnjnpBrwPRqAA/veLoPf5NYyPZFFzRbMIRaFrFpKLIjDL7qrms7wps3uUMAZEyRzcE8HKvy6vcmtCdNfejVsXTi7T+arO+eaIB0e3T3r5YVCdWyAvd5zoeDW9ZYYlhLD/+aP/7P2nDtKGAjBWRXlc1Z1Wd1CFcg4a5vURk7P20fZ9zip2cWO12jVaF3G493XPf/X/gXMYOosOae8AhDw1TO7iZSO9r9CzYdN58G9t5tHBhwbHdxW06Hz6kTbWzG+XHUD/6f8jY1p4tmHNZ//mR3PDWEpr4Z7cxS9TO4dS/is36DzjIchtuT3HomZl0qOXT/g+ezZVb950SMNe2E3pUWAOcH5gKqeCqRNxHU/chvyW5L9JjVV8IYsreKXiP4IcbN02Z+Go5eN9X/6W0ENRQF+h3JQir36MB8QOE59aoZbc/JFDpvV0HljJxNvrOAAxOIdAAA==",
      u: "",
      e: 1,
    },
    {
      h: 62,
      w: 62,
      id: "image_4",
      p: "data:image/webp;base64,UklGRpYBAABXRUJQVlA4WAoAAAAQAAAAPQAAPQAAQUxQSB0BAAABkFXbTiVIV0IkIAEJSEACEkoCEpCABCQgAQmREAfp7qkHJGvNd0RMAHZTqm3ej5oDTIe69Cv3bKYs3SstWLhYD/ZwKrEernSChp7ntC+ymrx2FVGjfU9Ru4s2FLW86FNR2+NLFGPa3hGr+fxqqH2hF0k9jhfsQtNDUZ/8wE603BT1Om+WG40AgvptAKojBrAcaQSp5wvJ1UB1tdBcKaYvcpa8sbP5/xaHL1RXguxqIriqAHvKQPcEIDsaACB+yj/NjeDf4KbeoDsRugtOKh6rC6YnYg8ZL5ODjtfV3KJ36MYk4iMtUxLxmZYhidhI04xE7G1GVsTuLBY6YX+YxzjjbOIjUgnHy9omlWAydtkxCgzHa/ALmS0T7Id0i6MAVlA4IFIAAAAQBQCdASo+AD4APm00lkekIyIhKAgAgA2JaQAVIABakzkWbURERbKFZSAuUGk7J0hAAP7xRH/+QV//j+T//x58r+O0ADC+3icv/xDy7/4h0AAA",
      u: "",
      e: 1,
    },
    {
      h: 74,
      w: 74,
      id: "image_5",
      p: "data:image/webp;base64,UklGRuYDAABXRUJQVlA4WAoAAAAQAAAASQAASQAAQUxQSP0BAAABkFTbVh1ITwISkIAEJEQCEpCABCQgIRKQgAQkPAd3ciF8qqp7GBETIP/y9kmlDlPw9zyl43ON9gJfFItbOMxX7NRkznEVuzUeYjJObO4E1zGvNSf6tjkg7QuYfoOVaZ/7DF6zqWCyByMLfZlAM1sKxt3LaltGULehYKhRdro2gLplGcNqZXMaoJlFAcMs+70ytDUOwyAnusaQV5g+CHKmaQzPggwe5FSrTM0nB57lXKcE+VNlVU4ODPaDB1V7lLysfKgsytlGCeyUA+1yemJlqrDnOOlEzYySLudHgjDxgIYLjJJ3ojBzgRSCiU5eufFhz8CChiuEpcHD7B2V1EEiKncm0geF1EsegkEl+RLP7Fy6RJj/n2aXvJd4JjyRdkn8EAguKaQOPPN3dFIGwvIVFjSMKulXRGZHkcDf0EmXsWXlAg+aJ6QR2PMqczOBleM8aJNZowTutMrClCRWD4ugXeaNEqSjrLLwQSKDO6mBNvncmNpzCrj/5hiaOaWAZ1mYGJo5o4A3s0Iqg7oTCrg6WWoag4ZttmEYZLFVBrxmT1QMgyx3OoDGDb5iHGSj6wOgB7PGv5gMstW0EaDFf7KxYVKD7C4TAPRN3hHrY+mYbk72PzqzMxs50ZQDupdTXd3Ug5zsyoYW5HQT6pKenVxpnlR1ppVo5W7nqZF/fQBWUDggwgEAALANAJ0BKkoASgA+ZSiSRb+isResr2H4BkSgZ685X/AIJL+Kv6Af0DQAIAA/ACuISiPeTfK7ATgmbdLzAebr6Hd5E9ADpQHT+LID9riJiq6OKT9w7iiCTDAbauotaGW6Lqn0/24Zufv6Iv5FxXZsnjnpBrwPRqAA/veLoPf5NYyPZFFzRbMIRaFrFpKLIjDL7qrms7wps3uUMAZEyRzcE8HKvy6vcmtCdNfejVsXTi7T+arO+eaIB0e3T3r5YVCdWyAvd5zoeDW9ZYYlhLD/+aP/7P2nDtKGAjBWRXlc1Z1Wd1CFcg4a5vURk7P20fZ9zip2cWO12jVaF3G493XPf/X/gXMYOosOae8AhDw1TO7iZSO9r9CzYdN58G9t5tHBhwbHdxW06Hz6kTbWzG+XHUD/6f8jY1p4tmHNZ//mR3PDWEpr4Z7cxS9TO4dS/is36DzjIchtuT3HomZl0qOXT/g+ezZVb950SMNe2E3pUWAOcH5gKqeCqRNxHU/chvyW5L9JjVV8IYsreKXiP4IcbN02Z+Go5eN9X/6W0ENRQF+h3JQir36MB8QOE59aoZbc/JFDpvV0HljJxNvrOAAxOIdAAA==",
      u: "",
      e: 1,
    },
    {
      h: 74,
      w: 74,
      id: "image_6",
      p: "data:image/webp;base64,UklGRtQDAABXRUJQVlA4WAoAAAAQAAAASQAASQAAQUxQSP0BAAABkFTbVh1ITwISkIAEJEQCEpCABCQgIRKQgAQkPAd3ciF8qqp7GBETIP/y9kmlDlPw9zyl43ON9gJfFItbOMxX7NRkznEVuzUeYjJObO4E1zGvNSf6tjkg7QuYfoOVaZ/7DF6zqWCyByMLfZlAs1sKxt3LaltGULehYKhRdro2gLplGcNqZXMaoJlFAcMs+70ytDUOwyAnusaQV5g+CHKmaQzPggwe5FSrTM0nB57lXKcE+VNlVU4ODPaDB1V7lLysfKgsytlGCeyUA+1yemRlqrDnOOlEzYySLudHgjDxgIYLjJJ3ojBzgRSCiU5eufFhz8CChiuEpcHD7B2V1EEiKncm0geF1EsegkEl+RLP7Fy6RJj/n2aXvJd4JjyRdkn8EAguKaQOPPN3dFIGwvIVFjSMKulXRGZHkcDf0EmXsWXlAg+aJ6QR2PMqczOBleM8aJNZowTutMrClCRWD4ugXeaNEqSjrLLwQSKDO6mBNvncmNpzCrj/5hiaOaWAZ1mYGJo5o4A3s0Iqg7oTCrg6WWoag4ZttmEYZLFVBrxmT1QMgyx3OoDGDb5iHGSj6wOgB7PGv5gMstW0EaDFf7KxYVKD7C4TAPRN3hHrY+mYbk72PzqzMxs50ZQDupdTXd3Ug5zsyoYW5HQT6pKenVxpnlR1ppVo5W7nqZF/fQBWUDggsAEAANALAJ0BKkoASgA+YSaLRaQiIR4K7VRABgSxgGQqXuiV116I4d6sdtl5gPtA94Dzqt8d9ADpbf9FdgH59IQQCt7z/Xextg/j1wlQPTwOqOKTBaVxddd4xye9CsqFwInEBvyybMeOrKAA/vQqN/+adpnb/toqGX61m/rTqrUmysl/zjfpeqSsKkkl8c8nfPzrPDmtfDmsFquwIDVnvk8mjwiCHkGcu9b1kCCnSumymlLXhznbBpCf/HlZmud8OcfCyHptkRRATM8aGFTfBfyvaLbGaj/5cy60f8DrkqNEeh+b6QrP/3RX//kWv/5D7//8gz02AdOZslvABm+dKYbM+fnXAR82C0wgsyoQ//+vS8e91wf2axaoQmvpp9LgStLHiDK775kjxalSzOwHRTEADq4Q/Zi9oBexrzlipkrmWZPSsLFSr0U+f9zDe2p2w6RR233kKcCkaH1ZOP8n+Ynegi573Jtnaz648MoO7ste7jHEL2F198e+uc7dL299BNpY40Xxp/+rAl0n//9MtxcEFUDOzwC5UFVWQ+QG1i1g8LppavOHs58iRh//hhmaNgAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 74,
      w: 74,
      id: "image_7",
      p: "data:image/webp;base64,UklGRtQDAABXRUJQVlA4WAoAAAAQAAAASQAASQAAQUxQSP0BAAABkFTbVh1ITwISkIAEJEQCEpCABCQgIRKQgAQkPAd3ciF8qqp7GBETIP/y9kmlDlPw9zyl43ON9gJfFItbOMxX7NRkznEVuzUeYjJObO4E1zGvNSf6tjkg7QuYfoOVaZ/7DF6zqWCyByMLfZlAM1sKxt3LaltGULehYKhRdro2gLplGcNqZXMaoJlFAcMs+70ytDUOwyAnusaQV5g+CHKmaQzPggwe5FSrTM0nB57lXKcE+VNlVU4ODPaDB1V7lLysfKgsytlGCeyUA+1yemJlqrDnOOlEzYySLudHgjDxgIYLjJJ3ojBzgRSCiU5eufFhz8CChiuEpcHD7B2V1EEiKncm0geF1EsegkEl+RLP7Fy6RJj/n2aXvJd4JjyRdkn8EAguKaQOPPN3dFIGwvIVFjSMKulXRGZHkcDf0EmXsWXlAg+aJ6QR2PMqczOBleM8aJNZowTutMrClCRWD4ugXeaNEqSjrLLwQSKDO6mBNvncmNpzCrj/5hiaOaWAZ1mYGJo5o4A3s0Iqg7oTCrg6WWoag4ZttmEYZLFVBrxmT1QMgyx3OoDGDb5iHGSj6wOgB7PGv5gMstW0EaDFf7KxYVKD7C4TAPRN3hHrY+mYbk72PzqzMxs50ZQDupdTXd3Ug5zsyoYW5HQT6pKenVxpnlR1ppVo5W7nqZF/fQBWUDggsAEAANALAJ0BKkoASgA+YSaLRaQiIR4K7VRABgSxgGQqXuiV116I4d6sdtl5gPtA94Dzqt8d9ADpbf9FdgH59IQQCt7z/Xextg/j1wlQPTwOqOKTBaVxddd4xye9CsqFwInEBvyybMeOrKAA/vQqN/+adpnb/toqGX61m/rTqrUmysl/zjfpeqSsKkkl8c8nfPzrPDmtfDmsFquwIDVnvk8mjwiCHkGcu9b1kCCnSumymlLXhznbBpCf/HlZmud8OcfCyHptkRRATM8aGFTfBfyvaLbGaj/5cy60f8DrkqNEeh+b6QrP/3RX//kWv/5D7//8gz02AdOZslvABm+dKYbM+fnXAR82C0wgsyoQ//+vS8e91wf2axaoQmvpp9LgStLHiDK775kjxalSzOwHRTEADq4Q/Zi9oBexrzlipkrmWZPSsLFSr0U+f9zDe2p2w6RR233kKcCkaH1ZOP8n+Ynegi573Jtnaz648MoO7ste7jHEL2F198e+uc7dL299BNpY40Xxp/+rAl0n//9MtxcEFUDOzwC5UFVWQ+QG1i1g8LppavOHs58iRh//hhmaNgAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 74,
      w: 74,
      id: "image_8",
      p: "data:image/webp;base64,UklGRuYDAABXRUJQVlA4WAoAAAAQAAAASQAASQAAQUxQSP0BAAABkFTbVh1ITwISkIAEJEQCEpCABCQgIRKQgAQkPAd3ciF8qqp7GBETIP/y9kmlDlPw9zyl43ON9gJfFItbOMxX7NRkznEVuzUeYjJObO4E1zGvNSf6tjkg7QuYfoOVaZ/7DF6zqWCyByMLfZlAM1sKxt3LaltGULehYKhRdro2gLplGcNqZXMaoJlFAcMs+70ytDUOwyAnusaQV5g+CHKmaQzPggwe5FSrTM0nB57lXKcE+VNlVU4ODPaDB1V7lLysfKgsytlGCeyUA+1yemJlqrDnOOlEzYySLudHgjDxgIYLjJJ3ojBzgRSCiU5eufFhz8CChiuEpcHD7B2V1EEiKncm0geF1EsegkEl+RLP7Fy6RJj/n2aXvJd4JjyRdkn8EAguKaQOPPN3dFIGwvIVFjSMKulXRGZHkcDf0EmXsWXlAg+aJ6QR2PMqczOBleM8aJNZowTutMrClCRWD4ugXeaNEqSjrLLwQSKDO6mBNvncmNpzCrj/5hiaOaWAZ1mYGJo5o4A3s0Iqg7oTCrg6WWoag4ZttmEYZLFVBrxmT1QMgyx3OoDGDb5iHGSj6wOgB7PGv5gMstW0EaDFf7KxYVKD7C4TAPRN3hHrY+mYbk72PzqzMxs50ZQDupdTXd3Ug5zsyoYW5HQT6pKenVxpnlR1ppVo5W7nqZF/fQBWUDggwgEAALANAJ0BKkoASgA+ZSiSRb+isResr2H4BkSgZ685X/AIJL+Kv6Af0DQAIAA/ACuISiPeTfK7ATgmbdLzAebr6Hd5E9ADpQHT+LID9riJiq6OKT9w7iiCTDAbauotaGW6Lqn0/24Zufv6Iv5FxXZsnjnpBrwPRqAA/veLoPf5NYyPZFFzRbMIRaFrFpKLIjDL7qrms7wps3uUMAZEyRzcE8HKvy6vcmtCdNfejVsXTi7T+arO+eaIB0e3T3r5YVCdWyAvd5zoeDW9ZYYlhLD/+aP/7P2nDtKGAjBWRXlc1Z1Wd1CFcg4a5vURk7P20fZ9zip2cWO12jVaF3G493XPf/X/gXMYOosOae8AhDw1TO7iZSO9r9CzYdN58G9t5tHBhwbHdxW06Hz6kTbWzG+XHUD/6f8jY1p4tmHNZ//mR3PDWEpr4Z7cxS9TO4dS/is36DzjIchtuT3HomZl0qOXT/g+ezZVb950SMNe2E3pUWAOcH5gKqeCqRNxHU/chvyW5L9JjVV8IYsreKXiP4IcbN02Z+Go5eN9X/6W0ENRQF+h3JQir36MB8QOE59aoZbc/JFDpvV0HljJxNvrOAAxOIdAAA==",
      u: "",
      e: 1,
    },
    {
      h: 322,
      w: 467,
      id: "image_9",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
  ],
  s0 = [
    {
      ind: 1,
      ty: 2,
      nm: "s",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [409.686, 228.27, 0] },
        a: { a: 0, k: [118.648, 118.65, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_0",
    },
    {
      ind: 2,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.4, y: 1 },
              o: { x: 0.13, y: 0 },
              t: 83,
              s: [472.682, 183.265, 0],
              ti: [-96.682, -67.265, 0],
              to: [0, 0, 0],
            },
            { t: 103, s: [470.682, 665.265, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [30.697, 30.709, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_1",
    },
    {
      ind: 3,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.4, y: 1 },
              o: { x: 0.13, y: 0 },
              t: 71,
              s: [414.036, 167.745, 0],
              ti: [-172.036, 2.255, 0],
              to: [0, 0, 0],
            },
            { t: 94, s: [568.036, 719.745, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [36.699, 36.712, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_2",
    },
    {
      ind: 4,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.4, y: 1 },
              o: { x: 0.13, y: 0 },
              t: 65,
              s: [382.313, 188.401, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 85, s: [364.313, 712.401, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [36.698, 36.712, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_3",
    },
    {
      ind: 5,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.4, y: 1 },
              o: { x: 0.13, y: 0 },
              t: 50,
              s: [393.613, 182.401, 0],
              ti: [186.387, -174.401, 0],
              to: [0, 0, 0],
            },
            { t: 69, s: [273.613, 712.401, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [30.696, 30.708, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_4",
    },
    {
      ind: 6,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.4, y: 1 },
              o: { x: 0.13, y: 0 },
              t: 45,
              s: [422.682, 190.204, 0],
              ti: [-112.682, -132.204, 0],
              to: [0, 0, 0],
            },
            { t: 63, s: [470.682, 750.204, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [36.699, 36.712, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_5",
    },
    {
      ind: 7,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.4, y: 1 },
              o: { x: 0.13, y: 0 },
              t: 33,
              s: [416.931, 207.122, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 54, s: [378.931, 811.122, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [36.699, 36.712, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_6",
    },
    {
      ind: 8,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.4, y: 1 },
              o: { x: 0.13, y: 0 },
              t: 18,
              s: [406.786, 228.211, 0],
              ti: [123.214, -70.211, 0],
              to: [0, 0, 0],
            },
            { t: 41, s: [236.786, 810.211, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [36.699, 36.712, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_7",
    },
    {
      ind: 9,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.4, y: 1 },
              o: { x: 0.13, y: 0 },
              t: 0,
              s: [429.531, 213.465, 0],
              ti: [-163.531, -91.465, 0],
              to: [0, 0, 0],
            },
            { t: 29, s: [545.531, 825.465, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [36.699, 36.712, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_8",
    },
    {
      ind: 10,
      ty: 2,
      nm: "p",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [410, 717.801, 0] },
        a: { a: 0, k: [233.311, 160.61, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_9",
    },
  ],
  t0 = [],
  A0 = {
    v: qn,
    ip: Kn,
    op: zn,
    fr: Zn,
    w: _n,
    h: $n,
    nm: e0,
    assets: a0,
    layers: s0,
    markers: t0,
  };
var sa = {},
  i0 = Se;
Object.defineProperty(sa, "__esModule", { value: !0 });
var Va = (sa.default = void 0),
  n0 = i0(Qe()),
  l0 = e;
Va = sa.default = (0, n0.default)(
  (0, l0.jsx)("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41zm-6.78.66h5v1.5h-5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2zm6.5 1.25h-5v-1.5h5zm0-2.5h-5v-1.5h5z",
  }),
  "Calculate"
);
const Xa = ({
    inLanding: a = !1,
    agToken: t = "EURA",
    savings: i,
    chainId: s,
    agTokenPrice: o,
    defaultAmount: A = 0,
  }) => {
    const { t: n } = q(),
      r = Ge(),
      [c, h] = l.useState(!1),
      [d, p] = l.useState(A),
      u = l.useMemo(() => {
        var v, D, w;
        return (
          ((v = i == null ? void 0 : i[t]) == null ? void 0 : v.apy) ??
          ((w = (D = i == null ? void 0 : i[t]) == null ? void 0 : D[s]) == null
            ? void 0
            : w.apr) ??
          0
        );
      }, [i, s, t]),
      g = l.useMemo(
        () => ({ yearly: d * o * u, monthly: (d * o * u) / 12 }),
        [d, u, o]
      ),
      B = hs(t);
    return e.jsx(e.Fragment, {
      children: a
        ? e.jsxs("div", {
            className: "overflow-hidden rounded-md dark:bg-peach-100",
            children: [
              e.jsxs("header", {
                className: "flex items-center gap-4 p-4 pt-6",
                children: [
                  e.jsx("img", { src: ws, alt: "savings", className: "w-12" }),
                  e.jsx("h4", {
                    className: "text-lg md:text-2xl",
                    children: n("Calculate your potential savings rewards"),
                  }),
                ],
              }),
              e.jsx("hr", {
                className: "border-gradient-multiple before:!pt-0",
              }),
              e.jsxs("main", {
                className:
                  "flex items-center justify-center gap-2 p-4 md:gap-6 md:p-8",
                children: [
                  e.jsx("p", {
                    className: "h6 dark:text-black-500",
                    children: n("Enter your amount"),
                  }),
                  e.jsx(ie, { type: "number", state: [d, p], suffix: t }),
                ],
              }),
              e.jsxs("footer", {
                className:
                  "grid grid-cols-1 gap-2 p-4 dark:bg-sand-600 md:grid-cols-5 md:gap-4",
                children: [
                  e.jsxs("div", {
                    className: "col-span-1",
                    children: [
                      e.jsx("p", {
                        className: "mb-0.5 dark:text-black-300",
                        children: n("APY"),
                      }),
                      e.jsxs("p", {
                        className: "h4 dark:text-black-500",
                        children: [Ee(u * 100), "%"],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "col-span-1 md:col-span-2",
                    children: [
                      e.jsx("p", {
                        className: "mb-0.5 dark:text-black-300",
                        children: n("Est. 30 days Earnings"),
                      }),
                      e.jsx("p", {
                        className: "h4 dark:text-black-500",
                        children: r((g == null ? void 0 : g.monthly) ?? 0, {
                          overrideCurrency: B,
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "col-span-1 md:col-span-2",
                    children: [
                      e.jsx("p", {
                        className: "mb-0.5 dark:text-black-300",
                        children: n("Est. Yearly Earnings"),
                      }),
                      e.jsx("p", {
                        className: "h4 dark:text-black-500",
                        children: r((g == null ? void 0 : g.yearly) ?? 0, {
                          overrideCurrency: B,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : e.jsxs(e.Fragment, {
            children: [
              e.jsxs("button", {
                className: "gradient-box dark:gradient-blue500-green500 dim",
                onClick: () => h(!0),
                children: [
                  e.jsxs("div", {
                    className: "mb-1.5 flex items-center gap-2",
                    children: [
                      e.jsx(Va, { className: "dark:text-black-500" }),
                      e.jsx("h6", {
                        className: "dark:text-black-500",
                        children: n("Savings Calculator"),
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-sm font-bold dark:text-black-500",
                    children: n(
                      `Estimate your future ${t} savings rewards with our simple calculator tool.`
                    ),
                  }),
                ],
              }),
              e.jsxs(qe, {
                visible: c,
                onCancel: () => {
                  h(!1);
                },
                wrapClassName: "modal-medium",
                titleIcon: e.jsx(m, { mui: "Calculate" }),
                title: n("Savings Calculator"),
                children: [
                  e.jsx("p", {
                    className: "mb-4 dark:text-black-200",
                    children: n(
                      `Estimate your future ${t} savings rewards with our simple calculator tool.`
                    ),
                  }),
                  e.jsxs("div", {
                    className:
                      "border-gradient-multiple my-4 flex items-center gap-4 pb-4 before:!rounded-none before:!px-0 before:!pt-0",
                    children: [
                      e.jsx("p", {
                        className: "dark:text-black-200",
                        children: n("Enter your amount:"),
                      }),
                      e.jsx(ie, { type: "number", state: [d, p], suffix: t }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-1 gap-2 md:grid-cols-5 md:gap-4",
                    children: [
                      e.jsxs("div", {
                        className: "col-span-1",
                        children: [
                          e.jsx("p", {
                            className: "mb-0.5 dark:text-black-200",
                            children: n("APY"),
                          }),
                          e.jsxs("p", {
                            className: "h6 dark:text-sand-500",
                            children: [Ee(u * 100), "%"],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "col-span-1 md:col-span-2",
                        children: [
                          e.jsx("p", {
                            className: "mb-0.5 dark:text-black-200",
                            children: n("Est. 30 days Earnings"),
                          }),
                          e.jsx("p", {
                            className: "h6 dark:text-sand-500",
                            children: r((g == null ? void 0 : g.monthly) ?? 0, {
                              overrideCurrency: B,
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "col-span-1 md:col-span-2",
                        children: [
                          e.jsx("p", {
                            className: "mb-0.5 dark:text-black-200",
                            children: n("Est. Yearly Earnings"),
                          }),
                          e.jsx("p", {
                            className: "h6 dark:text-sand-500",
                            children: r((g == null ? void 0 : g.yearly) ?? 0, {
                              overrideCurrency: B,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
    });
  },
  ye = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  },
  Be = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  o0 = () => {
    const { t: a } = q(),
      [t, i] = l.useState(!1);
    Ne(void 0, "/steur");
    const [s, o] = l.useState({}),
      [A, n] = l.useState({
        totalAssets: 0,
        totalLiabilities: 0,
        equity: 0,
        holders: 0,
        stEURapy: 0,
        EURAstaked: 0,
        EURAPrice: 1,
        equityBuffer: 0,
      });
    l.useEffect(() => {
      M.get(G + "collaterals").then((c) => {
        L(o, { collateralsData: c.data });
      }),
        M.get(G + "savings").then((c) => {
          L(o, { savingsData: c.data });
        }),
        M.get(ue + "utilisation").then((c) => {
          L(o, { utilisationData: c.data });
        }),
        M.get(ja + "/prices").then((c) => {
          L(o, { pricesData: c.data });
        });
    }, []),
      l.useEffect(() => {
        if (
          !s.collateralsData ||
          !s.savingsData ||
          !s.utilisationData ||
          !s.pricesData
        )
          return;
        const c = {};
        for (const b of s.pricesData) c[b.token] = b.rate;
        const h = c.EUR,
          d = c.EURA,
          { totalAssets: p, totalLiabilities: u } = ge(
            s.collateralsData,
            s.savingsData,
            me.EURA,
            c.EURA ? c.EURA : c.EUR
          ),
          g = p / h,
          B = u / h,
          v = g - B,
          D = { holders: 0, transactions: 0, volume: 0, supply: 0 },
          w = s.utilisationData;
        for (const [, b] of Object.entries(w.EURA))
          (D.holders += b.holders),
            (D.transactions += b.transactions),
            (D.volume += Number.parseFloat(b.volume)),
            (D.supply += Number.parseFloat(b.supply));
        const N = Number((s.savingsData.EURA[1].apr * 100).toFixed(2));
        let E = 0;
        for (const b of Object.values(s.savingsData.EURA))
          E += Number.parseFloat(b.totalAssets);
        const V = ((v / u) * 100).toFixed(2);
        L(n, {
          totalAssets: g,
          totalLiabilities: B,
          equity: v,
          holders: D.holders,
          stEURapy: N,
          EURAstaked: W(E),
          EURAPrice: d,
          equityBuffer: V,
        });
      }, [s.collateralsData, s.savingsData, s.utilisationData, s.pricesData]),
      ne("section");
    const r = fe({
      src: Yn,
      loop: !0,
      autoplay: !0,
      className:
        "!ml-0 max-w-[150px] md:max-w-[200px] lg:!ml-auto lg:max-w-[300px]",
    });
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("section", {
          className: "product-intro",
          children: e.jsx("div", {
            className: "container",
            children: e.jsxs("div", {
              className: "gradient-in-container pb-1 pt-12 md:pt-4",
              children: [
                e.jsx(Pe, {
                  illuAnim: A0,
                  illuBg: Gn,
                  gradientClassName: "before:gradient-blue300-blue500",
                  title: e.jsxs(R, {
                    children: [
                      e.jsx("span", {
                        className: "h2",
                        children: "stEUR yield-bearing stablecoin",
                      }),
                      e.jsx("br", {}),
                      "The easiest way to save and earn Euros",
                    ],
                  }),
                  description: a(
                    "Start earning Euro yields passively & securely with stEUR, a trustless savings solution for all"
                  ),
                  figures: [
                    {
                      figure: `${A.stEURapy} %`,
                      className: "col-span-6 lg:col-span-3",
                      description: "APY",
                    },
                    {
                      figure: A.EURAstaked,
                      className: "col-span-6 lg:col-span-3",
                      description: "EURA Staked",
                    },
                  ],
                  cta: e.jsx(k, {
                    type: "button",
                    look: "primary",
                    onClick: () => window.open(C.angleApp),
                    rightIcon: e.jsx(m, { mui: "CallMadeOutlined" }),
                    children: a("Get stEUR"),
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "my-12 flex flex-wrap items-center gap-4 md:my-24 lg:my-32 lg:gap-0",
                  children: [
                    e.jsxs(x.div, {
                      initial: { opacity: 0, filter: "blur(20px)", scale: 0.8 },
                      whileInView: { opacity: 1, filter: "blur(0)", scale: 1 },
                      viewport: { once: !0, amount: 0.2 },
                      transition: { duration: 0.5 },
                      className: "w-full px-4 md:px-12 lg:w-1/2",
                      children: [
                        e.jsx("img", {
                          src: Fa,
                          alt: "EURA tokens",
                          className: "mb-6 w-20",
                        }),
                        e.jsx("h3", {
                          className:
                            "h2 strong-gradient-purple500-blue500 font-normal",
                          children: e.jsx(R, {
                            children: a(
                              `stEUR is a <strong>transparent and permissionless Euro savings solution</strong> offering a ${A.stEURapy}% yield on your EURA deposit.`
                            ),
                          }),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "w-full px-4 md:px-8 lg:w-1/2 lg:px-0",
                      children: e.jsxs("div", {
                        className:
                          "rounded-3xl p-4 drop-shadow dark:bg-white md:p-8 md:pb-4 lg:rounded-r-none",
                        children: [
                          e.jsx("p", {
                            className:
                              "mb-4 text-right text-xl dark:text-black-500",
                            children: a("stEUR Historical Performance"),
                          }),
                          e.jsx(Da, { stablecoin: "EURA" }),
                          e.jsx("p", {
                            className:
                              "mx-auto mt-2 text-center font-bold dark:text-black-300 md:w-2/3",
                            children: a(
                              "Evolution of the value of 100€ invested in the stEUR contract over time"
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsx(T, {
                  framerContainer: ye,
                  framerItem: Be,
                  invert: !0,
                  wrapperClassName: "py-8 md:py-12 lg:py-16 md:px-8",
                  textarea: {
                    className:
                      "px-4 md:px-8 lg:order-2 lg:w-1/2 lg:pl-0 lg:pr-24",
                    title: a("Generate passive income effortlessly"),
                    list: {
                      picto: [
                        {
                          icon: e.jsx(m, {
                            svg: "key",
                            size: "xl",
                            alt: "key",
                          }),
                          text: a(
                            "Deposit EURA into the savings product, receive stEUR in exchange, and watch your assets grow effortlessly"
                          ),
                        },
                        {
                          icon: e.jsx(m, {
                            svg: "notificationsOff",
                            size: "xl",
                            alt: "Notifications Off",
                          }),
                          text: e.jsxs(R, {
                            children: [
                              "Enter freely with ",
                              e.jsx("strong", {
                                children: "any deposit amount, no fees,",
                              }),
                              " on the blockchain of your choice",
                            ],
                          }),
                        },
                        {
                          icon: e.jsx(m, {
                            svg: "time",
                            size: "xl",
                            alt: "time",
                          }),
                          text: a(
                            "Exit instantly at any time. There is no lockup period and no withdrawal fees"
                          ),
                        },
                      ],
                    },
                  },
                  image: {
                    node: e.jsx("div", {
                      className: "lg:pr-8",
                      children: e.jsx(Xa, {
                        inLanding: !0,
                        savings: s.savingsData,
                        chainId: 1,
                        agTokenPrice: A.EURAPrice,
                        agToken: "EURA",
                        defaultAmount: 1e3,
                      }),
                    }),
                  },
                }),
              ],
            }),
          }),
        }),
        e.jsx("section", {
          className: "bg-white",
          children: e.jsx("div", {
            className: "container my-12 md:my-20 lg:my-24",
            children: e.jsx(T, {
              framerContainer: ye,
              framerItem: Be,
              invert: !1,
              wrapperClassName: "py-8 md:py-12 lg:py-16",
              textarea: {
                className: "px-4 md:px-8 lg:order-2 lg:w-1/2 lg:pl-0 lg:pr-24",
                title: a("Earn yield from assets in stablecoin reserves"),
                list: {
                  picto: [
                    {
                      icon: e.jsx(m, {
                        svg: "rings",
                        className: "!h-auto",
                        size: "xl",
                        alt: "rings",
                      }),
                      text: a(
                        "With stEUR, get yield from EURA's yield-bearing assets in reserves, as well as interest rate paid by EURA borrowers"
                      ),
                    },
                    {
                      icon: e.jsx(m, {
                        svg: "loupe",
                        size: "xl",
                        alt: "loupe",
                      }),
                      text: a(
                        "stEUR yield is non dilutive: earn the same regardless of whether you deposit 1€ or 100M€"
                      ),
                    },
                  ],
                },
                button: e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(k, {
                      type: "button",
                      look: "secondary",
                      onClick: () => i(!0),
                      leftIcon: e.jsx(m, { mui: "PlayCircleFilledOutlined" }),
                      children: a("Learn more"),
                    }),
                    e.jsx(ea, {
                      src: "https://www.youtube.com/embed/9LKDbLzNYdU",
                      title: "Introduction to stEUR",
                      visible: t,
                      setVisible: i,
                    }),
                    e.jsx(k, {
                      type: "button",
                      look: "underlined",
                      onClick: () =>
                        window.open(C.angleAnalyticsCollaterals, "_blank"),
                      children: a("Where's the yield from?"),
                    }),
                  ],
                }),
              },
              image: {
                node: e.jsx(ae, {
                  background: Nn,
                  gradientClassName: "before:gradient-blue300-blue500",
                  animationClassName: "w-10/12",
                  animation: Sn,
                }),
              },
            }),
          }),
        }),
        e.jsx("section", {
          className: "bg-white",
          children: e.jsx("div", {
            className: "container my-12 md:my-20 lg:my-24",
            children: e.jsx(T, {
              framerContainer: ye,
              framerItem: Be,
              invert: !0,
              wrapperClassName: "my-8",
              textarea: {
                title: a("Save Euros with peace of mind"),
                list: {
                  picto: [
                    {
                      icon: e.jsx(m, {
                        svg: "lightning",
                        size: "xl",
                        alt: "lightning",
                      }),
                      text: a(
                        "The risks associated with participating in Angle's audited savings solution are the same as those involved with owning EURA"
                      ),
                    },
                    {
                      icon: e.jsx(m, {
                        svg: "shield",
                        size: "xl",
                        alt: "shield",
                      }),
                      text: a(
                        `With stEUR, take advantage of EURA anti-depeg mechanisms, stable collateral backing as well as of the ${A.equityBuffer}% equity buffer for every EURA in circulation`
                      ),
                    },
                  ],
                },
                button: e.jsx(k, {
                  type: "button",
                  look: "primary",
                  onClick: () => window.open(C.angleDocsRisks, "_blank"),
                  children: a("Check EURA risks"),
                }),
              },
              image: {
                node: e.jsxs("div", {
                  className: "w-full md:w-2/3",
                  children: [
                    e.jsxs("div", {
                      className: "flex min-h-[275px] flex-1 gap-2",
                      children: [
                        e.jsxs("div", {
                          className: "flex w-1/2 flex-col",
                          children: [
                            e.jsx("p", {
                              className:
                                "mb-2 border-b pb-1 text-center text-lg font-bold dark:border-black-500 dark:text-black-500",
                              children: a("Assets"),
                            }),
                            e.jsxs("div", {
                              className:
                                "ease gradient-purple500-blue500 flex h-full w-full flex-1 items-center justify-center text-lg font-bold dark:text-black-500",
                              children: [W(A.totalAssets), "€"],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex w-1/2 flex-col",
                          children: [
                            e.jsx("p", {
                              className:
                                "mb-2 border-b pb-1 text-center text-lg font-bold dark:border-black-500 dark:text-black-500",
                              children: a("Liabilities & Equity"),
                            }),
                            e.jsxs("div", {
                              className: "flex h-full flex-1 flex-col",
                              children: [
                                e.jsxs("div", {
                                  style: {
                                    height:
                                      (A.totalLiabilities /
                                        (A.totalLiabilities + A.equity)) *
                                        100 +
                                      "%",
                                  },
                                  className:
                                    "ease gradient-blue300-blue500 flex h-full w-full items-center justify-center text-lg font-bold dark:text-black-500",
                                  children: [W(A.totalLiabilities), "€"],
                                }),
                                e.jsxs("div", {
                                  style: {
                                    minHeight: "50px",
                                    height:
                                      (A.equity /
                                        (A.totalLiabilities + A.equity)) *
                                        100 +
                                      "%",
                                  },
                                  className:
                                    "ease gradient-sand500-peach500 flex h-full w-full items-center justify-center text-lg font-bold dark:text-black-500",
                                  children: [W(A.equity), "€"],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "mt-2 flex w-full gap-4",
                      children: [
                        e.jsx("span", {
                          className:
                            "gradient-sand500-peach500 mt-1.5 h-1.5 w-20",
                        }),
                        e.jsx("p", {
                          className: "text-sm dark:text-black-300",
                          children: a(
                            "Surplus Buffer: This is what would be left in the protocol if all stakeholders redeemed or repaid their EURA debt"
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                className: "mx-auto flex w-full flex-col",
              },
            }),
          }),
        }),
        e.jsx(He, {
          framerContainer: ye,
          framerItem: Be,
          title: a("Built to be composable"),
          description: a(
            "Your savings deposits with Angle are tokenized. Leverage stEUR across the entire DeFi ecosystem."
          ),
          text: a("Wondering if stEUR is for you or your protocol?"),
          buttons: [
            e.jsx(k, {
              type: "button",
              look: "primary",
              onClick: () => window.open(C.angleDiscordInvitation, "_blank"),
              children: a("Contact us"),
            }),
          ],
          animation: r,
        }),
        e.jsx(pe, {
          embedded: !1,
          faqs: [
            "What is stEUR?",
            "Where does the stEUR yield come from?",
            "What are the stEUR risks?",
            "How much does stEUR cost?",
            "How does stEUR work?",
            "Where is my EURA capital?",
            "When will I start earning EURA?",
            "Do I need to manage my stEUR position?",
            "How to secure stEUR tokens?",
          ],
          docUrl: C.angleSavingsDocs,
        }),
      ],
    });
  },
  r0 = "4.8.0",
  c0 = 0,
  d0 = 120,
  g0 = 29,
  m0 = 300,
  p0 = 300,
  x0 = "c",
  u0 = [
    {
      h: 201,
      w: 201,
      id: "image_0",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 71,
      w: 120,
      id: "image_1",
      p: "data:image/webp;base64,UklGRowBAABXRUJQVlA4WAoAAAAQAAAAdwAARgAAQUxQSGgAAAABZ0AQCBrb4BBGOCIisMMKN7VtOxESkICEKCAKwQQ9EmgpkUBJm9N1Rea0M2tF9H8CjEMrW0U8CGYxd8EijjkKVAlkb6RaIHMlpSL1qIUUiJyjWtSAmlAr6r97+dHmIeOjxU8OO3nUB1ZQOCD+AAAA8AcAnQEqeABHAD5tNpdJJCKiISWySACADYllAMzh//ZMeRIAQ+8t4AnFYOotOmIcj5l/A/Nom1KUzSI9HXl8xM9bmAff67wAAP7vtFNxz7Ybxptsv+/7q1NyE/3/sPU3IT/fW5tilFtnS/bJQvPIzC0YcVK6tLeNPOCqapcQP0v4QSA8wdZoNJvtdCM8H8+UIngaDff4p7FXfGGT51BwTpNrvTPfRZgI3D/p/wHp//+I7lKxvPB2nc+xO8PKiix9glLxVtgmBN4BisZir3N+s22lincHe6KpDKQ2f3gsFWwiI6bh6flJaoH7ZRyQFP6OaMdhyQUia9nGGv5hAAA=",
      u: "",
      e: 1,
    },
    {
      h: 71,
      w: 52,
      id: "image_2",
      p: "data:image/webp;base64,UklGRhQBAABXRUJQVlA4WAoAAAAQAAAAMwAARgAAQUxQSFAAAAABYI1te5YhhBBCCCEMYQgRdA3hQxhCCEMIIYQZPIf9POddETEBfLFHTjc/AYyYBUBMBkY2QFXQFDQFm4JFcSooiktBURwKHKuiKkLR/y0pd1ZQOCCeAAAAsAQAnQEqNABHAD5tNpdJJCKiISNIAIANiWcAybiSgILT8tw/4CrfEil9OzbQAAD++Rlq8H1VDpsXfVk/JrTUHt+TR63aHXOtqlR8AFJJ8v3cqCltCfSi+o/Ocf//nKCPUzWvEQsFNIPOPMXcsYiDtdRna203aCtUqFS4mvX52dy2xDOV/MySoB+E7Uod9C+xEIfPt04z5xM+sWwAAAA=",
      u: "",
      e: 1,
    },
    {
      h: 60,
      w: 51,
      id: "image_3",
      p: "data:image/webp;base64,UklGRjQBAABXRUJQVlA4WAoAAAAQAAAAMgAAOwAAQUxQSF0AAAABd6CmbSTm9u9tP/44H0REJJL5T5gBNpFtO7mfnPqvAitIwAgekIAUJHwJXwIq0rk9RUT/J+DiB8P4o9AaGkPJZXGHYTFMhpo7xc2GmtvF9dwqLJVYjqJSFJS2QvcAVlA4ILAAAABwBQCdASozADwAPm0ylkikIqIhJhqoAIANiWMAwrOc0tYUABDsmyslooDu2sfuJcmHCPAAAP7u+CtvW//JT/lF9u/HvsJsHJM724OHOfzoTfozzsDL1EOqrutpoFN8y5z+4H4iH5LAy32Qj1NdKqjhfn+fy6f+f+cliy3fZp8b/s5MR5p4y+MRNt8qa89BDXyHMhCxd1voyyjj/oqHCcDXoiF/ucGFNrzGtDSRJiXAAA==",
      u: "",
      e: 1,
    },
    {
      h: 31,
      w: 104,
      id: "image_4",
      p: "data:image/webp;base64,UklGRuoAAABXRUJQVlA4WAoAAAAQAAAAZwAAHgAAQUxQSBQAAAABD/CI/4iIICQg/D+t6VpE/5MJNlZQOCCwAAAAkAYAnQEqaAAfAD5tLpRIJDShoSb1WuqQDYljAYSt9wPsQUqRwboMdlAKb1v1qWPn1MKiqPIqKq9AGdpuwAD++XrTgb4u1KbBF2WeQM/RWdjUW060+D+bOsLjmU39X8H82dYJMx2Ex9sGxKpig3T2ykrxOexK/nzPYtq0i3r8CFiZUA5kc63TEt4w8bsLYuwgHGzEO7MaLpAV8aK2En0/cpTpk58sTE4G0dISAE2AAAA=",
      u: "",
      e: 1,
    },
    {
      h: 120,
      w: 120,
      id: "image_5",
      p: "data:image/webp;base64,UklGRkIBAABXRUJQVlA4WAoAAAAQAAAAdwAAdwAAQUxQSCEAAAABFyAQSFLbH2qNiAgHAkmbl1zJF12CQUT/JwA7mza3VDAAVlA4IPoAAABQCQCdASp4AHgAPm02mEikIyKhJAgAgA2JaW7fck5zr//dT/8cAadSWTss5ysy766SSH4v1I6KdVs6hzqjt5F5h0+CbwdSRduh//Z710IZzdNmgAD++S8V+qtLZsu/VlqIcjE3nd+v0f1wpELm3RvZsXSxj+hPQHuNlYWqf/F0YPM6FMDc1oN1YW2Ol5B15gNkmTS5wHVMar2C1MDHBcI/Gg4ZcL/6qzzQKd9xbUU7q///9HC7APnAHF8D1+B+VFpMEJNWHTawOgyaUPCv9oWBvNOnkyGjBHveduTKJXt7sdCAL1f+J4hzyqyg9lgAcNyYLH580LP+kAAA",
      u: "",
      e: 1,
    },
  ],
  f0 = [
    {
      ind: 1,
      ty: 2,
      nm: "a",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 42,
              s: [0],
            },
            { t: 60, s: [100] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [75, 225, 0] },
        a: { a: 0, k: [100.5, 100.5, 0] },
        s: { a: 0, k: [48.602, 48.602, 100] },
      },
      cl: "ai",
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_0",
    },
    {
      ind: 2,
      ty: 2,
      nm: "b",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 17,
              s: [119, -79, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 47, s: [119, 95, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [60, 35.5, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 17,
      op: 137,
      st: 17.0000006924242,
      refId: "image_1",
    },
    {
      ind: 3,
      ty: 2,
      nm: "b",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 12,
              s: [370, 95, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 42, s: [215, 95, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [26, 35.5, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 12,
      op: 132,
      st: 12.00000048877,
      refId: "image_2",
    },
    {
      ind: 4,
      ty: 2,
      nm: "b",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 8,
              s: [215, 351, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 38, s: [215, 212, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [25.5, 30, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 8,
      op: 128,
      st: 8.00000032584668,
      refId: "image_3",
    },
    {
      ind: 5,
      ty: 2,
      nm: "b",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 3,
              s: [402, 157, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 33, s: [189, 157, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [52, 15.5, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 3,
      op: 123,
      st: 3.00000012219251,
      refId: "image_4",
    },
    {
      ind: 6,
      ty: 2,
      nm: "b",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 0,
              s: [-108, 182, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 30, s: [119, 182, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [60, 60, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_5",
    },
  ],
  k0 = [],
  b0 = {
    v: r0,
    ip: c0,
    op: d0,
    fr: g0,
    w: m0,
    h: p0,
    nm: x0,
    assets: u0,
    layers: f0,
    markers: k0,
  },
  h0 = "/assets/usda-bankruptcy-0b549c6c.jpg",
  w0 = "4.8.0",
  y0 = 0,
  B0 = 150,
  v0 = 29,
  C0 = 820,
  j0 = 1020,
  D0 = "u",
  E0 = [
    {
      h: 76,
      w: 140,
      id: "image_0",
      p: "data:image/webp;base64,UklGRq4FAABXRUJQVlA4WAoAAAAQAAAAiwAASwAAQUxQSPcBAAABkBsAcNtGNwI2AEfgAA4cgR1ajoAR2LHlAArYwKpdYQNhAKVO3wGfnI37yADcsY6ICYCsdWetH7q3Ky2BY22v7zht9LaTnCjrce6nfcdDd4iY6HUliVOHiEkfOrrk6gnTf7c3JN0cImZ60OSoA+bsNSnaY+5ek3FzQAq9JkEekEp/k99DREL3Mi/9hLTGVUbygPT6m1y6iCTbLOQVqX5S6XURCX9ITO6Rdi9TUk9IfdTprCIyaFM5II9epiCfkMuo5lMR+YyruVYRWd3PY5Hbg5zhgPw+yamkR46f1DTyCXmOagr5hFxHNU69I99Rj1ERWV8NUxGZXw1REdlf/U9FXID6X/IJl2BUf8knXIafCkB+x6X4fgOPuBy/QLMgDIBZDA4AwCwEJ/4CswicgH8KtwCcgP8Kx14oYaBwzIUSBgvHmitgrGHMCRhv2HICpjRMOQHTapYMTN4wZGDGMnDTwKylYyVUMLOwjLgS5u/Z2AlIsQ48tJBo4RgIFaTbk2cFpFwH2lpIXFjCXAnp60BVLyDHwpLkKsi1DvS0kLHoibEF5F1aQi415F9fiAgaaGwuBIRWAJnNJbPQCiC1uWQUWgHk1jaTSwM0F31Iz1RAeL1LyjYCiBeNCWnsmgJ4rFo7k+tr4LXSvQ1TWNNWwHVV6XZgVQnIHABWUDggkAMAALAXAJ0BKowATAA+bS6TRaQioZZpXoRABsSxhDgAyBcz5pM69e71N/nreTeYDz8vP/vmbAM/sd/QDwISIHcMktEAco9/h+bP6bQBwvsgSla+zvXl9Z3tQK9gSFnfRQQ3Z8MzmcN19IdRvplzQXAqrtyD2C7uO0CYJXTpw089ryQNirk6XpMg/f8QkNMUq3Z4uWwW7x/SLHNcRc706qGRiWsfi8J3Goz3E+uDfYYpJddBqZrrjfvqhcCI0ZEugWxGEnUfzi9WIAD+2R9fflJAr/+WLDE13ITwuJvYazfTPrHcacZg+1NDJtwsnT7ovYRBbL/FvXMAJBgTHD3EtBKAIZ/Dg40U1asP7W8q+e6ae/UVaVpoc0eHXpKyVy8vbP/oZedb4URJ+5PzGY32c3oudYJPF+wIX+Mmdo8t9hP2N0AqxFk/TieAbawmyJ9jl4+9vP/pdulgES1ievHY8QjUazbxmQDmz44gaXSZ+EuY0Ke7nYsteO9/JgA0NGgJOZ903BH/43UYtWUjeBWPj9nhgfsVu3VlOv8TSuWfSzTF9dYkiddMM9BXptoa5pQHBgQLHOPqWtBSYkNsp94uQYoT96Nd1TgnvE3E82DP4iQ3w4ZbmjoU+mCtnMoaaw7dXoP/kX57+n7yLX07eSGGhk/pYCcq/zuz5paeQbZTJmUj09pA/P6Oqqxbotr83luRxMRuQfZt2jaMaWJgZK2Or2V12akN4hKT0eAtQyHJLt4a3vV9HegLJ5bMjEUl4sxLnU72I0qA9zPIUuAthYohQ93jcaYNgAIOLTOxAjudEC0++pQleYUMob2dAatttBpd2coRWzIGG3HT0NI5GtkxAKJY3Tk6Iuf1sTIHCg9kSZZ1UJOzz1nf8r2+USrkP48mZtPnPoNZ+cKtwpVAmUfxhDnl5feU/j6weACZJZTASS62RkE4t98LKZfBfVg1qigYYiK89ox5Ez7gU5c1Z02TEg6fj5goq8+44AMtkATeVVTqvL1zJSXOtWyyCvlsW9vcTVTehEjcPNAE29IFAjBag2qhSWN7dZFHNxSYX7rAe/Rww/nw2RWvjHnYeBgUnHE7jxP55t//zmJQI3rbG/Mn9QFukUrP9SEgzf9U5AAA7PA1GvC56nl63cRsGSFyc1ic7xT/sCHnTEFIGeUxElTsOVI51hSzWJKFk9mwz4rYGum8wAv7CweSI///9jKe//PhAAAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 321,
      w: 303,
      id: "image_1",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 237,
      w: 237,
      id: "image_2",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 18,
      w: 196,
      id: "image_3",
      p: "data:image/webp;base64,UklGRloCAABXRUJQVlA4WAoAAAAQAAAAwwAAEQAAQUxQSMEAAAABcKXaVt1cIpcjhoMSjhic/0zzTlv7GxETYB85YZu4W3RY+8urDgt3E7b2vR2IJIsk9Z8oSZlkBPyzJmAmJfUBlETOwPQex8xFrQ9q08IZ/gQS1fogNzHhUkil9gGvJYUDz60PfMtu5urDL1/7H7j+B67xUzALuY5czcH2Q8oaMeUU7KpHLnWUtDC6PTghMauOSlVmwmTvdUSySO33NamQEW6fPQFIJIuk+guqpEIyAbBvjm3kvk6+aNVJ7kds7UMBAFZQOCByAQAAEAkAnQEqxAASAD5tLpRHJCIiISsaqWiADYlNvQvNTTgQ+pSYD/AfwDFAfpT/t/9V7//R/6UR+sXw3AQCI6yIgZZQ46kYXgvErD4eH6trM1AQAP7ee4AWs/7V/tsGJQLVdNsId9PNN9X/kN4AZ/0aMHNv5YQRVTx2uvDc4Fw+V/6OvFqldV+03Mvk+8NBSd3hoK/eC9tCqCPOs5EiaBXb/qjDr7D8KuXKWCRb/6xy8gIlKMYFymwFmWpTAzGYsgmPvwvAF6sIL7Ejo+XPGnty5Y5ScEyzCprf90dBLy7Ne5nvIi5/IAKWNXOcUzF/1eaBoIN9kkdKMBwPQDNS9Wn0menoeYMCE1TE6e9xOd2zef+npUciDXgq/tCiSc25r/yGhH4RSDO8WeMv/9GBOgfv//RgToQDvE0iy1Kx+eyGrdCZx57eEkJ/GNpx6iPctOndF6tu6mKO7qudNM3/cb3/PR/z0f5/v4sNtzNVdRI+wgAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 832,
      w: 711,
      id: "image_4",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 232,
      w: 219,
      id: "image_5",
      p: "data:image/webp;base64,UklGRiwFAABXRUJQVlA4WAoAAAAQAAAA2gAA5wAAQUxQSCcEAAABoJ5a293GeuBjdECggw6CXDQIBAL9EAg+eBtwAynADaSBacANTAFuYBpIA9NGGkgDLmAutj9dvvd93vMvEQFRkqS6zexN6REJquwkgPQHuKboZvEkYxNwn07cyVzfEibxKN0NPiny8JdWvEqJQtxidGwr8mVyjP/EMb56RvfpP5/+8+k//585nE4Hrzhdfv26HH3i9OuajzwQ9DZ54GdWWPojDyR9kzywNBMkdYe3lNmgaD4YmhGC5oSdJ8kKPfPCzsyQ0xsO7ymzQ838MFMBxNQAKS9HUQEtdcBKJTimfOXB8UOd0vDwklIPIyE1wUdVcPH9RTTx78jFg6iibMmoDb+Uf+xz0qugsv9oOqVC/HJGkWsydjnTU0YgBy+Xm4euul6UaFQGIGbg+93noElRmRYYM3C+/yS4KQ9An+Mg8VlQUyqgtfpp/FCvlEAjNutNvwKgyv4/lZbzX5B/JCSljFdi/srpd1FMe2WU/JXzFZBmmiudhrUCI6W60qhY4RFScKUUU3X4acXpBoilOrxbUfpbJiVFRnm4pRMV9XHkolS3NGqeyu75ouSb6Ae4u1BN7fwKyMaVQNRTPJTunkEy5yX1YdFQ6nseZJ9k/riOxpQCiR/or+PFmDMSiaqKgtKlGERTvTJQ6hSNaKpfpy1TJTNKSFGIstrwCsiME5KZtZV1pU3TibYyrpRJ9LwneltR30w6YyFRa51+WVS6JXrRV4aVeolaFJZdIxYTFdY54U9bSr9MLwor/Wja2vHyoaYy7owVmVWVaaVbQyeacraslGsoRFVOhp2wKpOyMqs8rKMRZWVVCesIUXTl9Xx+tWiPlenEg5RrKTxgwuqMDtCsp+JPxIbM9Gm30NDfBvi16bCJB/IU2wiROj02pmW/3brxaws88N+61EiHHWiYj6VubVrsQsWZOewDRh+WGo6sF0fslpbxon4/wky4ix1Ts+7CpVtq7EoRmd/jyhQ2FlecOvWA3Ski13NOnYpFDjBwb9GFhf6ATKmcWGjwfmVUIl8mpn3l6IrjRS5dM6UvcmZUjSVyp6c2kmYnTCwfnbkyY+ihIiWnmqAkNanWtaSh1LqetNx0pr8KcKsaQFs5JjA5JsLEQ53FQqU1cFFfYwzUXPb1qmIF7XngNKtjP0efLAhU0erqyUbK2eJa3opAmKw/f/Gkx7g42HjS47zQvi/Nj8k2DDXBsQ1m78ZiDaupo/7LCthNMTK6jOPjw7mC9ZST5omP/YRObW8cUmmcyw4BLBJa3Wd9abILIJMHPWPrVIFPikHJXSvGUD/67JPTHmduGjfdRX5wnRuwS9Hn6ySAYKox4x7HnUz/tXjuZNjzaCd2BQin6vP+bRP8Lx03DzMBxBMe5i0Tgxr0Uw87/WnTbrqdl69v4Eiq5F/73BbwJs0Qr2e6EmYCAFZQOCDeAAAAcBUAnQEq2wDoAD5tNphIpCMioSQIAIANiWlu4XJ+AP4ANPN3b9AP4B+AH6Afn73+BLH+lb38r0NJGLoaSMXQ0kYuhpIxdDSRi6GkjF0NJGLoaSMXQ0kYuhpIxdDSRi6GkjFzKKREj3oVwmkjF0MwCz+B9iaSKlqSWxNJGLO0/B2f0XAhHIfA+wKKRJBH/ouBCOQ+B4pvoTbyl6R7hKXKzJp7TfQVh+xIYFaLi3ptfgku0+kAAP6y6AAAAO/xJHDtnyyf4yHa+Id5fiWu4OTnxLXcHC2+Ja7g4+fEOgAA",
      u: "",
      e: 1,
    },
    {
      h: 447,
      w: 447,
      id: "image_6",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 642,
      w: 619,
      id: "image_7",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 1,
      w: 1,
      id: "image_8",
      p: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4WAoAAAAQAAAAAwAAAwAAQUxQSAkAAAABBxAREYiI/gcAVlA4IBgAAAAwAQCdASoEAAQAAUAmJaQAA3AA/v02aAA=",
      u: "",
      e: 1,
    },
  ],
  I0 = [
    {
      ind: 1,
      ty: 2,
      nm: "o",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [529.002, 674.434, 0] },
        a: { a: 0, k: [69.611, 37.866, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_0",
    },
    {
      ind: 2,
      ty: 2,
      nm: "l",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [-8],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 80,
              s: [8],
            },
            { t: 149, s: [-8] },
          ],
        },
        p: { a: 0, k: [529.904, 686.563, 0] },
        a: { a: 0, k: [151.361, 160.313, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_1",
    },
    {
      ind: 3,
      ty: 2,
      nm: "s",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 80,
              s: [81],
            },
            { t: 149, s: [100] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [410, 510, 0] },
        a: { a: 0, k: [118.435, 118.435, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_2",
    },
    {
      ind: 4,
      ty: 2,
      nm: "s",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [410, 652.058, 0] },
        a: { a: 0, k: [97.989, 8.976, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_3",
    },
    {
      ind: 5,
      ty: 2,
      nm: "a",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [46],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 76,
              s: [100],
            },
            { t: 149, s: [46] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [407.012, 522.898, 0] },
        a: { a: 0, k: [355.203, 415.964, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_4",
    },
    {
      ind: 6,
      ty: 2,
      nm: "s",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [153.503, 244.385, 0] },
        a: { a: 0, k: [109.325, 115.988, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_5",
    },
    {
      ind: 7,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [50] },
          ],
        },
        p: { a: 0, k: [410, 510, 0] },
        a: { a: 0, k: [223.473, 223.473, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_6",
    },
    {
      ind: 8,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [-50] },
          ],
        },
        p: { a: 0, k: [410, 509.942, 0] },
        a: { a: 0, k: [309.223, 320.778, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_7",
    },
    {
      ind: 9,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [0, 1020, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_8",
    },
  ],
  O0 = [],
  Q0 = {
    v: w0,
    ip: y0,
    op: B0,
    fr: v0,
    w: C0,
    h: j0,
    nm: D0,
    assets: E0,
    layers: I0,
    markers: O0,
  },
  S0 = "/assets/usda-coins-122ae5a9.jpg",
  N0 = "4.8.0",
  H0 = 0,
  P0 = 150,
  U0 = 29,
  R0 = 820,
  J0 = 1020,
  L0 = "u",
  M0 = [
    {
      h: 58,
      w: 98,
      id: "image_0",
      p: "data:image/webp;base64,UklGRmgDAABXRUJQVlA4WAoAAAAQAAAAYQAAOQAAQUxQSEMBAAABkJRtUyRGv4SSgAQkIAEJSGgJdcwRCUjgnBMCsrQE7snM1POMgJqlV6gsx4iYAFxPITLXdpyZQyCY6FNuemerHN1MlIromI0jTZGqjt1zpLGIRWdsixuGWHTadXFDRNG5W6K7qOj8kt0ttKqNNVxHq5rZwlVFLW3ukqjGZrqgW6MST3k1uNIJtki7P/Zkkmo69Nso5SNqdvkAlHeCYZo+APEbbJm2jWyapv+abf0DUP8B5A+gAWDjOoBonAKA2Lb+V2x7+8/Z9vgfsmkPGySWxQ0Ey8IW2DDslw8Axap2BMWocgjZpnQMSQwSOgG/2sM4n60RugB+tSXg2kUMSbiaWKxIuJFYTEi4l7hP1z3uT20uJgzplj5NcRjX53UCKQ6Du6XKUDURpvRL7UNITYSZKXBpd7ScPIwMgZnb4cqcAuEbGABWUDgg/gEAAJAOAJ0BKmIAOgA+bS6SRqQioaEu07qogA2JZAZYF0ADz5W3BV5Llpst84B5/+mAc+N7GvlKhCj6gffIrlno4eL09BVIkSsZ4d3Tf/xQ2PigPj+jEwLiIRSseVPFDrfjDa7K2ydHy5LJ+lbk7unEodX9SKu1KvzXDtThvBUAAP78MKTnRIJM+d7PMMDrtReA3RiLQ39MZ5T8o9ibVRAtmTP0icB7SUy/eGCVXsfqtBYif6j/+pd/vwz4vEd+IZabDg9n1HyVGED+obgo1gJvsi5bN4A3Zhx4EEP3oGj0WZsFY/BJlLsjH/jVr17fHk8QOTuaL9OTIfQ0YAQqVLBkuzx/Xz+GT2gWTbrjJtZ+CaE/qBM0P79E9b21lX+hS3NILdx6agtOFdNg/XVbr5QDxtsfxWI2H4iedl3KyliONTIUjTnYknex65lmaTSKZR3l9JwfODONoXh+qta/sHOQ4DguGT0dUYeOmZEJnnr1f19XP+FeR0AVWXBHCjuyTzlpao9/ZWOKjkvmmz0BTeSNOZqiMLfYqN4s5e3ZG2jNIjw5AM2Z8kJUbpJ0U14hxyqPtTVNb34zmNNDPKcRhcSiSGGbqCVuSFXVodpH9a/9X8jMxwcwoGAII+mTPvk04n30vfRYFNXmtEP3/9EiKj//WW4AEJBu752mcTrMAAAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 82,
      w: 93,
      id: "image_1",
      p: "data:image/webp;base64,UklGRsgDAABXRUJQVlA4WAoAAAAQAAAAXAAAUQAAQUxQSI4BAAABoBSBTrWxOhIiAQlIQMInAQlsu0PCv+sWCUhAAgL6wEBnMlMB6bshSdt7dxExAdBM9bV+PHpJCJXakd88o1IYjUV1N4qApujPxx1tuXoa+Zpymzs56mKQO3mpYpObj/zZiMgpDojF8EzmPolpbsbeivWVLBWxz4+h5UBkkJUkPnc20pwIPzaGF5FuYvmRQaHJptBkp9CEc2jC+VJ3JpzvVG/C+UpyJ5xv4LgTphvDn2y68AQg+wJOADIuvCKQppdCkKKGEQKTWglBlhpWCNLUcgyStTBi2GqJQ5CuhR4DJy3sEGSq5RikaKHHsNSwQ5CiljiEpYYaghQ1vEKYetgRSNKjE0HXQ+YAzgWUACRfQA2g30D1t66gu5M7GO7yHQxv9RK6s34LNTbU2PBwaMgcGmiHBhpeHhtAc5KsIB8PG3ZpOmiGgMbWmEwhLWMPrDe2NGA/TTubHADPMcIJTjubyHBLne+9gWfqfGnDOfVz4x0CrEttUwRAalvlRQgztcm/MQuCzbXP9cP+EP4PB1ZQOCAUAgAA0A4AnQEqXQBSAD5tMpNGP6MhoSq6q6vwDYlAGaasrO6GAc9VpmfoAeWR7GoCrx9qNzxSX4Yc7hY3FkGkVzWqStNC2uSoLlDeYdHXSTvk3CIJI7npwM1j/z1hSq8+e7YBANHLkXmWw2WcPbygMaVuaCO4+xz73Zx4qmQHKZWlAAD+/ofT/xIYBYm/ztdmAUwfWWV9HqQCJT8LxzCqezZfLu/MzjTNFr5iNQAuS5s5UaMjiFOadDHjJNW1j+ZHWnACBIC/BIlf9Hh/7a3NZyBJ3TezNp5mKAYv53v4DKOG4WuXjfwvo55oAsthPHS3yeZBxOQtw9u0hLnIWGRZmSA39hhWyJmXrAfV0+0IZZS+hZDqe07TPqmeHVTEC0l2KPd3+DKWFw3C5wAPxY93/9y+rvrMPMBm/8OXmC5r7BC68gz6rHZsXJ8N1uPp3neFyWyGL91BYQSNlY7oerx4HW2lAuAdKyHqovt/vn1Ead1TPEeSBUgXQf//0ob2Ya+spX6dSD3pOX9rF33/fuaf+Lmn1yxNSXIx/w2xivwBi0MUeCfdFKoA7FxdWaYubEk36RiTQm3pW2bFzQm7E27L/PcgrMDwz4Kh44yKru+4hl43V4zPuA9ME0YjEuGgkCIR7DFPn55BtE8WbC3tcDhwxJBoTq8Rd9Bb4vsvGbab/3R0bjZwf/754/6X/9hc575pAQAAAAAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 72,
      w: 58,
      id: "image_2",
      p: "data:image/webp;base64,UklGRhQDAABXRUJQVlA4WAoAAAAQAAAAOQAARwAAQUxQSDwBAAABgJPtb99IEATBCO4xhEAIBEMwhEDocwg03WwIhmAIHm/s31nTWdKv7d2NETEBBMhFeu/9lAl9E/35+wMqdV3/SjiH2iVh5KGe54JQzuoscSf1L1GigecUIxoqIaLBHCAaXfxEw5tb1fiz166I7JPPEJsLD30aUczisSvo4ZDOz9MVdbcVhd1MfH4eUVy2ZAUmawcalk2BxTKRqqEocjZMpDOt74rcDB2qrm0KndYEatAyK3Rdq1hpbUA1Wk4Kva8dUJPWB1RdS4p85rUCddB6Qzqz4Yx00HpS4DMbdqRKxgNokrUBbaaO08issGd+np2eptHTTH6eTE9T6GmEfCdCJ+cGMNjriBtM3jlsMPnPoMEUWGIGU2iPEKZYHn6Vwrk7zUyInw+PExNomZaeCLjMFckEXtpU1S6F6R8RVlA4ILIBAAAwCwCdASo6AEgAPm0skEWkIqGYzF3EQAbEsgBhsjZXl/QNBd6lXnxfYp/aj0gMxd+gAL6HnoAqfk4itEP/FVdoImckLHrJSzupHNwsAo1JAUtTfKzS0Fr5lmRHVZPRpJwAAAD+/bTsNgLXfebPSfvHFVf1pJ+5bUstr3KItCm/svW3S59CueH4izfEsZHe12rx+xeZ8P5cf/+dsnHADSJ6RaGI9FVk5XgHf/ocQ7/HQodyDv4LyqcBOoykZ/XUjgcBWLZjOM69jZsDmBEuJjf9j/t/+SrWOdQsQrJSVgWl1SCFqcPnzUXAoHlvPUNATdQtwdddiK+Zv2Dahv9t99X+PaUL1f/DnjKQz9XQfQkNqRktQLNVDcxldu9c8WOwSMgADUrhi3h5VlmTWTpyMJMMdLBM7rCT7HM1YptFpvSp3FFrMnJJ6hXPnj41gJ0uLh2krAP5H7RrFuNxXoQ4+fHimHyz3k0DlNYown29BYt6vUvC7/yB+VZf/1Cf//0Kso5N/S8t38RZ/O61+DwSlBNbvBrLemHBrn8Dk0b/Y2tcsbfzLDz7nCb/r/2G/nDjzQAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 48,
      w: 50,
      id: "image_3",
      p: "data:image/webp;base64,UklGRlICAABXRUJQVlA4WAoAAAAQAAAAMQAALwAAQUxQSOcAAAABgFNte93mgyAIgiAIgmAImjMJgiH0FMEPwWNHMaggGMLP4Jvi/9LLHBETgPdlXGutJbMh61C+v8+aYtAoNW7QLjXok556hrzovJtfpbsON/EjxeuO4C4+jN0tH7Xlo7Z81GrbYdzFJHHcpiMBxVIycBggGbQZegZuA1YGnoaegvUZVorL0FOwP4OkWIaiGdie4UghBkgGFkPZGYYBTRNcFhwJ1IQRx2qCxHUbJGw6QKJOD0jQdMGM6T4YGlGc0G6/BfdyuXU/YKrPB0Lr8hBEH7fpCwnH/ewbObvouxN5+ylrXbPi3wsAVlA4IEQBAABQCACdASoyADAAPmUqkEWkIqWZWk8wWAZEswBeXeAJkA8r72LvsABPn8kuVlt2l2s2rfcL9L/lHsWSxBqOFLkp4x2ny5H+mqtnFgAA/vlxTo2+g7wbGqDzj0KrIljb5y6+rSP//7FokqD/fs1tD4jq3erMcMCK4V6a+++3QcMGe7aG8px+jgD7ap/XkL9BdTF/fkP/9oI//aPf//aDFZVKrp/vvwGt5lHDcLlelwAUibL6odJVFB+C/PFR4ogtmk0tPGqNjyNRznBou0KiD7mvciDNrSoYcT6Z1TM8/MIrbetNyqIY+Fkk69I6rbhX/+pD4jp2tyQS2lvppL7i/trw+OAXv/+0JlIUDwbzRZZmE5XUSSYJ9S60DYzdBo7PZd72C0zXz+ELihmYHlcqLKvarjnfV637zfoz9gqe1DjHA3AAAAA=",
      u: "",
      e: 1,
    },
    {
      h: 645,
      w: 626,
      id: "image_4",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 268,
      w: 365,
      id: "image_5",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 181,
      w: 181,
      id: "image_6",
      p: "data:image/webp;base64,UklGRlAPAABXRUJQVlA4WAoAAAAQAAAAtAAAtAAAQUxQSMoDAAABoCNte9tI+o+AGwgnUPEAYxh3pEwKEfAA7HwMslHYLhzDqGOECjHZ+kW0vqu4XlXjsFbdPaL+QBJFgsC3JoqICaDIylxpbWz7SutJLglUOdHWcZ/O6FxikWvrOczalBkGsjQcuDdKJi47qXmYrpTJkrrmIbtSpEhZHr6ZJEZqz3GsS5EOWXFEvZZpkBXHtpLxkxXHWIu4iROOtNcxKz3Hu57EKnccdytjJE44+l7HJ685hS6LzAkn0pcxyRyn04hoKM8p9VkkTji1ZQyE4/RWw8tqTrETA8s8p9llg1KcbJ8NSHHCfTYYxWlXA1GcejUIxelXA1AMoM+CUwyhzwLLGESfBZV5FNiJgETNOLqAHCNZBXPCWKpAFKOZBZF5OGoRgmM8TQAnjKjqLWdIvexJ1Jiw7emEUS17yRlWL/pwuHDVQ8nI5p0JD43r7ISxVR1JBrcW3VTosO5EMrxedFHhw7oDyQB7cViFEJcHSYa4PkhjxOoQD5I9QDHKsp2F6aSVZJh9K40TT9rUQJkWGSMt9p1ApfbVUJk9kqH2e0qsON9lwDrZxWC7HTlaLLY0XJMtC5fe8nBZIpKMNxFNAMuINGATIguYJnKAGSIG3JJEjCnHTEGW63/PlIFM2/85GMzsv2k1ZPU7yN5h9gqzGjP3CjJbY+YgW1jI5hVk5QPIZjPISGBGiL0j+gOwL4i+AmxBZAAriQrAxkQSr4aIaAXXq60ruBZbz+Aqt47gop0NWO92XYG12HUG1nSXxKqhvR6qL/ZdQvVk3xipDbX0QH3X5hKooo3A6T21/gGmRbsCpnE7WoH0Ax14CVJ5iGgg+oMOXkD09LARQu+pQwfQ0y7G+LynTi08T7sRDTgr6tiAU3ZFK2heUecPoLnTHS2BsdTjeAPLe9EHPYOlpH49KJ9Tz3c3kLwf9UXPICmo/ytALAU4WsPxBwU5RWMzDoOegVFQqA6KSwr3DRDfUcCjv2F4RUHfXYPw9ygsmm4guBlR6NMNAM1dCv9R+jZTGuKj1G2mNMxHm6StpzTU6SZhN3dpuEfrZP09oiHf/TtRyxENWyyT9AUN/6MEXVIM56lpCorj0U1S/JhiKb5KyIJiOm8ScVNQXMc/JeEDQdG9aKJ3U1CMRy5yC0GRnvmILccU8fkqUquC4i5ME6HVnOIvTBOZ1ZzSKJ6tIvLHnBL6aBmJH2aU2PHL9eBuzJhSfHw1pMbNKNni0VUziLU7ptTPXvrAluaIMBTHi2UY66WZEZjZA/PVu+7ev3KmkIRrXswra7+qdzu7qOZFTtEFVlA4IGALAACQOgCdASq1ALUAPm0wk0akIyGhLVHq8IANiWJu/Dp7K8oh1i6OZ4TwB+gH8A8gD6AP4BGoIuBzuxXDB6P8pPbls7+C/Ff9Z6m5IHY/52/LH4g/7D2SeYB+l/61dePzC/s/+2fvAekn+6eoB/af+T1kfoG/uB6aP7c/Bz+5/7j+0P///YA///qAcEjrttDMs92UyxYeLJ6Vntwz5n0VUQYs3qayLZA9LiusSdVqeKrHThfem6oOIXGQ9KKixqNKHginBT1kEcR1PDpdL5esIjzxX0t1Dws0Di3u63ioCkUgDPW5TA2BUwn5Dm4CLj2xvaoRek73Vj/s4V//QNfDp3SG7Wx17iuBTrM/zJBZVKHpymrihY4xAXcgUxUZ+WlpqFs2Vhi9wVQwzN1Fu58gT1alynlnqmfjsmJaUagGVF3gUWc9SPsRAKtqK4tRSOiWv8oNkGxcs4dtRzZxZXMMjat3OAq8DHwUih6llwzRh20/UTun/2OYUTVIBbOlj7BrLWOjizBNppjrvRhuxQdP6NfOE7c/0jXDD1d1AtlfdDl95elweR0BtRT1kZh3Nufq34FZhvFYKvTRmc2O9NmrAgXZ/1GUsWl18OvMUkv4WMR403xfb74imhgs0LZ6TAAA/t8GnXWo5//DUSUX7sagVq58enOLdTk82jyUb/R7F+jL3eeac/SRbyliQqTB6SuxyxVDp/uCdO0vO8iYG9hZ0HMsiHiZUn+sXiaQ7hd+9z5rEwVd3G3sqFtToVTeeA4PCmAA3HP/qigpzGv/qeq+GRXGvaiuuQtQuoQ398f//RE64EdbtvIIrkWoxfYBHTxYZu0zPdSOeyPOso8x2IwOsDJZW47zQKjMOy/EhVRjzieyjM3SJ8w1MY4xM5hftJmWc96z8P1BOBZsWjJosbEwtch4gP8s3JZ0hqKyUeKH9XeIf3+3W4ewAAajVDQJi/E2ap3zBiJev+QXyk21ija95jS/ggJNixJIfVbFYK1epKpX67e8Z4ZPAnBOHEs3oeJzLjZ1tgedNceenkfXT8IHpqHS+0Ow0VCglGg+ub1MfdG1uyadJdeM5HwfmHXvVpocONORahCLDb38+B3s4Nal2qCkGeUHtkA04BeULXrJL97FYXCMkliOCFQOrzXRakFZ7va8vii0ayVC7wkeMqZXlspP3WG1HF6lE4448obXoMOWznhKAzWQk/eA0rnLRFSTOxQ6c/6gB+O/NzE3mG/GFRBNN7zqbWrEpyuxXp7r59RnHY285wBWvV2hGZjLkBuXeGoyTE//1LC+iwGZfgCkSCleUnemwQ2iEhwvGL5mvEmj+bCQ9AmdXYyFiJmYFbZ24rpSEaLlOFj2If0R4Ae+VGtui6bsyAr7BOGYPzgzkGqwqFCDeDunOwNhqgbPUd0IuscJXLwHHwHd9JSx6LWLzeJQa1TxtPPHqETn4B/MZOS2+QQFMkBBwHEQ4tbi0AIXRopTSMAzgHgGQ8YOP19HlhMW8+xppeB+p2qLnVS8fak5IoyLunADNL1HOmF/3t+4kqPLu7ZqkkLEAR1Pl3YwNc/wxk+Ql+OIa941dKJcdM25xhEOUZP0kUPnIK5RDjDZ+0mctSGrzPJunhIBJ0YDDiT+JFSxYzRAPwwBKSN5/XDr03VkU7k2nQse8DY+8yOgwNWTGBs61rf9S5ETbLO0LTtrNyoZDVx9d49eHje9HJBZtVHtVl0geX8AMY41xYUrE6K6A/VY3nYhApCAtBatT4yP4luvC4H9qkdb7w8PBhJQWoyF2czqoqiEBIIdgaiWA4WJtH8/UZ99g6ltg16HBeuCZptHyxPMvUmXx08G6F7sw+cXfaoS3YrZaFiDUkl39bXDKrt688sw5T8MWPVXq5H9faDykREOAV3D+oEHNDSdivUR7nUG7ErH7e8/fOcA79FAmnD0R+7hDtQrIq5/d2dOz3spx/qbLWPf17XXBWSVDs3OtOJ1e3VEfFHRDUV0lriOY6va1S3h/JmqhwF0jjk8DSXxpzNTieaLFrEvFU+VMeYCETXxupNJYYG0BZgORlQhQaddqqXPEc35NAdJZ/JOCSmtD/8gRzhkq9WZdsr7EYIyEjEchE1VCGa113xXsAtCmX9bWQqaBO8IJb2nlwo5jgerDpBMD7TYXx04YbcO2x2NzPPR4pp34J1daf7Vnsb5FAe9bcF1U8VDiVYZRL9z99TPgUQj/d9nY3b8O2/1d+Cq/AyvqsYkrd5iZzo6/2+BVuxGc8yL3WsIPZXeN7GJFy164ZxcgwIy6ssn2SIHHSGlyR5kkRlshg6A3Ngldq6Yq4nGPka1fzpNOkoXRrUZRsrL0w7Sqq/eSAVO6npZPZvFGxDsKY04ni6nowYMm97no3bb4gHjuiyKN7v09+gfKArLfql9uYuMVNDqsy05wWnfExJ32XuI8ok1rXlWRvC4lqQRDx5jh1271Aouh3cU1Z+31a3o3DjHTF3Ge/aKTNAvGLB3EWOe2e8gNzCmwg6TLmrcuzqGrAwNp5yIV+Nexwz+az2va/C2Ea1GDPhwZ2hIjKlk2PPRnfG9m0G2cG4cvo4kw2mIjXB03bpGJOv01yuKkuxyH9oaUmMshvfV+8v86PyKuKipy+Z+6ciZKxSQDxqTKbysw+ZfsN1r++YYsLs5iFvW0AUQHBO6y5km00lzo8Zl3FPeCBXWiUP0A+VUS++yTpb1kiJNj5dSxfV3cgtOOBxb9wh4zb/sU16hThPv4ODHa8sKrQfxOxxzqg7VGrPd90VLiUx2HDrLSFMqoGFfbcwphNLNf6i+2Fr0Sld1KP+4IaaNWFAdlrAOPzxGuuNzXELmBtPdzuDP+pE3c+taB9r94mT+UAH/ER8iE8qFDWJ0Hlhe4+WcmDfm+yiwrKBPSxjFsfSaLTwb5/zPZndhX3REFTWxN3EShfAmVb+7wiOb4COHcS3z+Jvmb+joZ/3rXPkSKFFWmeLKdo3sClkFtwNVZC3+iFEPJ5axrOgc7YF7hZFfPbxtSISEVa61KqF7indjVVXSZEQeJs4IG51Gopa4z0jwTdKPDxbg017xhUbPeoM3Q8za2ZLslAMHxmOEl8CkRCyC84mXz4XXtgFymy66Yez+V870vZegVzQq60hGruMc1f7SezG1TpWdvgPPmkx/0C/BZtkMNFw9elJcW9qB4kEryrYSWWACiqq2P+vvbd5c7OH200Fn0IjEVSgFoI7XNg2BO4XNLXGjCBt0zUxeOYw/lGpQwCRmY6rBydlohyXT6Gx8Uy1IXsiBgGrvqg6eOhfy36pans+cE9f0UX4gABgwE+dfElN732ixXzOCqlBZafq9clVDfjEeuvvyqcRuH5/4jNmX3lVGl+3hoOg8yx5thEcsOlXBR1CE2kZRRpLNd7G7VIj2AAxgp9IGfSys7QXpFgilsCI4gb0/mxG6KKBjtlSb/C2a9r/VQgCYMUFpCBLjtx8/+h5rrK8TF2SVa/nZWf/pALyibpm9NpPm+7adGAAiIsHVcGgkf2J260ejPdTMQ1uZCpeAzGaSuacNlIYt13gwlEwMwwynLIyCTBysnbkuhiD3yh/pVO9TRChwrdlqu/1BwOY2vBtJOvlwvobT3XdSl8nF/bMJ65tot7jdH3tINzkZMubXSLY2GtlLqn9rjZ9vAy2KAzThVb4KHM89GN7zVPy7UF1HBJXdCsgCq/4oWr/1gsz1OzsDJQInCkd4TFXSAAKVQE6uoDrzgbfxB9led/+mC2AUbWI4stuiZ9Ao9D1WZBC29h7U00RrIPgBD8IfqEujfSelOf77mqh0us9sjvNIA68D6SQHbgq1yIXUvuHtu3Ng6dO5DBuVpz/MKc4+/pn1Zsl9LKSfo8/3OT6UHj/ldcPCcnerCNGhTgWAAAAAAA==",
      u: "",
      e: 1,
    },
  ],
  F0 = [
    {
      ind: 1,
      ty: 2,
      nm: "p",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [360] },
          ],
        },
        p: { a: 0, k: [560.16, 427.64, 0] },
        a: { a: 0, k: [48.854, 28.9, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_0",
    },
    {
      ind: 2,
      ty: 2,
      nm: "p",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [-360] },
          ],
        },
        p: { a: 0, k: [222.607, 591.617, 0] },
        a: { a: 0, k: [46.352, 40.954, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_1",
    },
    {
      ind: 3,
      ty: 2,
      nm: "p",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [360] },
          ],
        },
        p: { a: 0, k: [367.832, 371.555, 0] },
        a: { a: 0, k: [28.569, 35.664, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_2",
    },
    {
      ind: 4,
      ty: 2,
      nm: "p",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [-360] },
          ],
        },
        p: { a: 0, k: [282.699, 88.06, 0] },
        a: { a: 0, k: [24.635, 23.83, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_3",
    },
    {
      ind: 5,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [406.269, 418.503, 0] },
        a: { a: 0, k: [312.955, 322.224, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_4",
    },
    {
      ind: 6,
      ty: 2,
      nm: "p",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [333.859, 816.043, 0] },
        a: { a: 0, k: [182.347, 133.512, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_5",
    },
    {
      ind: 7,
      ty: 2,
      nm: "s",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [394.332, 555.846, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 37,
              s: [394.332, 545.846, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 76,
              s: [394.332, 555.846, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 113,
              s: [394.332, 545.846, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 149, s: [394.332, 555.846, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [90.42, 90.419, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_6",
    },
  ],
  V0 = [],
  X0 = {
    v: N0,
    ip: H0,
    op: P0,
    fr: U0,
    w: R0,
    h: J0,
    nm: L0,
    assets: M0,
    layers: F0,
    markers: V0,
  },
  W0 = "/assets/usda-intro-3bd89a89.jpg",
  T0 = "4.8.0",
  Y0 = 0,
  G0 = 150,
  q0 = 29,
  K0 = 820,
  z0 = 1020,
  Z0 = "u",
  _0 = [
    {
      h: 92,
      w: 92,
      id: "image_0",
      p: "data:image/webp;base64,UklGRqYEAABXRUJQVlA4WAoAAAAQAAAAWwAAWwAAQUxQSKgBAAABf0AQCLLBIezvuUNEZGC+gFtt2/LkjePn34BsQEqcDkrYwCvXym0AMkFCFcrQubMAVVrcqrgHXuz/v/d70DKi/2zcNnIkFXN7qZr0BhLond7ae3e2w04AfaEXNhkddGiz+syWXtTrYURY6YhNA+8TCwzY5dd5FhkUXz6w0AUhZyy2WcQ4a+iRvFTS4cim5oa1bFXSxZq6VKR16VZHaEjr062K0JD8DOonxguCqM3MMUOsNJPFsGguagbpgJ6ZqyzOoKPl17iP/Qyz/IMEjroP8jiCpifIBz0M1E10jqSaKImkjSiHZI3oGckF+RiqoweLex1LxSWWmgSW2hSWziyWMTCLRSxhMEf/bsLojENnM7pS0FWIrnB090B3JnTXA3dUdLdGTwL0lEFPMPR0BE/eL5jq5MdRht5GsJvOGHqLQm9oX7P90SZos0RvreCNGL1twzd5ywCJ1gEQFeFF8y+qSHSj+xclRlFruNjU0LgOHpJ4JqeZZD5IGSUhRl7YGG1SyPskIWAnuUZEzYiNtFx9VjTzetLVF3qxyJxBBwE0Bjb23p1pl3xFVlA4INgCAADQFACdASpcAFwAPm0ukkWkKiqosBR7GVANiWYIcAFs9a6dr6Tk9exCheoV9L3zAdCn0AOkA9ADpJ/3J/bn2gNUtpSft1oACsPl2Q2DpzYJJWM7Qs2rltFUMhejUxftSLwCLS1P4XGlRvAZywOTZf3c+fdmTrFM4W+VAtpaHtW22c058pdEbMqnGaeIWlToQdqteG0xsHwmFhkyvYRQGbZ+8OzWBJUnD3FTRpvK2qAAAP7/jkR//eBmr+qWsEP/cUWZWHRXtxPBD2m6lgTupFQxSlGT/E78RsOClrrVlxbVpyJy8OOHYwyr+hwTfKZ4u/W4nzr/nG0xyuxs/637U8Vta4+IdyvI+3/yw4VFcX+QfHuIY7j5ii+5pb13mOZi3y0GWtLDKkjbEYC38udtZFKNhfU3Dmphm1zH12wkK44O23lTE3QbPrsoTPbr+SoLw4RXAQ9f6ACiJbk//VFDCGvh+u69dzaqM1/5kEABmlULYNNay+LL3dzpYHUNysRkiB5EE93zjvYfsEuRPphkcjIkwVWlID8fi6rUQo4MyGQWE1kTPi8SJKAVtYAp1Wkx3b35PcCB6at5TekMK7Bsjzuo9RUA+EpW4cjdJSihs3ow3P4BIyGzTEEaqAAMopelLwYnaMwEIa2t7dDViN7JPZ9c2/QZLDQQ0ToNyhvsYGxZwxU2QwYYKB9JU3n+N2sW0EHlxwdrGgv5NotKarpQw1YTdv4WPUc/POPY1ypfZ6WeefsoX1bzWpKgJnwKOnHka97BFVTb/5n/X+v/Okt/WYxuM//9YLxti8h2A+cOe0P9NM81g4ufBv/cD5YG18sC5pIe/1Y/NiBqEZurQpJTVoLOgD/0PCyve3CkxKAvUWkGGJtu/H4SkXGHAu3lwcnF91maApWgn8hiPsmiSyCuuOoAIYLLyluw//EBAUqtvbf/ujyvlm1rOeLpfNS6fHM2blD+y7f2QAAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 108,
      w: 108,
      id: "image_1",
      p: "data:image/webp;base64,UklGRkAEAABXRUJQVlA4WAoAAAAQAAAAawAAawAAQUxQSO0BAAABkFXbbh1JF4IgCIIhGIIhFARDMARDCIRAEARDKAhioJ6ZPG1pVn9GxARgas6t7XK+t5YZLlPpYs9KL+QLV7F3R2UvqA6bcVRygDebd0uLZbG5JS/EYvNLXoS6rbnRCkVtVa3T0W4rC8+V1dbWMlOz9fs0tJuHQnPQMB8HzZCGeanpvaTmp6a3kpqnmt6hYb4qv0HDvB30wm7+ynPNPO5PZfO5PEPqlPIju3ktTxTzu94jdUzpVjfPtztsvucb4pxcy+Z9viTuyRU2//OFLYDtjCxCPqkh1JMRwveILcZ0UIPoBxLE+IcsSgZQwvgAaGF0ABLGAGBxAhxIQg6koAXSQunYAxHIL5AF8w1FfoEkmD2UFkgPpSEHUsCBZCAQABLGANDD2ACUMD4AKAwGgBHEwL81iH7AQaQDjBC+OK4htBMKgU+wBbDjPAWQL0DcE1zN7uVLEOcE15Nz+QY213bcJXVM+RaqYxUPiluCJ1mdUn4ExakPHu4ubXhcHBp4noY7g14AqTOa8GpSVzTh5aSOaMLrSd3QhAl5ODESpiRxYRBm7Q5smLjoYvrB1CxLCWP2qstoxYK0LbIz1syygGSsm2UyyVg7bxPtGetz/U7xbQwnUx8vjZ7gKn/6eGhsH4bLqbQuIgci0lvJ+H8FAFZQOCAsAgAA0BIAnQEqbABsAD5tMpRHpCMiI6ibGZCADYlAGQtJ6/vWL8xvuxEnYKemB5gN0A/arrAPQA8s79lfgY/bv0o9VJ6AfQB+B9ADS/z/Rxes2xMzunq0iBifSESLib3QWuOYBu4du+7j/1YWeoLiW0nrUrb9F7f+///jyL9p6353yfjQHwtCCgZo8483/uRXxx1Jiq8lYTIWMQDBclsh3DUAAP6tXfFc1yPgpmLK3WnvnAvZWjhkE/5xPDQscIFZc6YOLhscomMU2tf01YoFFjjIeBuvGcaTSBantXGnfxwM81Wx+p9PT+8Zyeq8+0HPJHq+JXG1sVbL/me3ile+tp2RDD/nwf/+6J5mQVqNuRFnZQ4ayBjuY4bQi8yVn2aNS7rhJeFCCbFIvFKUgOre1QD9dPWJ5uJyKMIcvpr/v15xM14M958xkcqZhvejOhKWbqlQpQyJei/b5q+ZKnbe/Vc3N2z/ivg3jnj7DxD0p8w04ErMftyhMFZHo0KNNrNogBqy6CQ4jDAWqyKKEvNzjmIKFR4F4t6osYeSe/C9z6wbB53ndXu50TvSx7HqROJMSIb2L7/5MAk86H1HM71uHpQ7ikhTcoCLz1cVYUN1WqOHbeBWyMLh5G85RQ6QBjCJ4w/IpivPuawra/Xwn6aocP+5E+lxmqqkrdrQ0ONueJJmNWTtuhMEUu+hXLXu2DeX9qNehTuchZlCfhs88w+8V8oXMG/DFUcCcZugAAAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 45,
      w: 45,
      id: "image_2",
      p: "data:image/webp;base64,UklGRhQCAABXRUJQVlA4WAoAAAAQAAAALAAALAAAQUxQSMwAAAABgFXbdtzmQhCEB8EQBEEQHoRAMARBEARBMARBEAQxeGmr8Xb6jYgJwLJofLr59jgssdp8Dgck2caqm1y0zcXvuKrtv9e02cnsFtQOFzeldrzMXO2cpZGrxqiDaJTNdcRIUyexmAAQo00AIk8DUHksQIw4QZkqIpPhofL/oEwlNxU80wMwvYBMJEDgKQBQafSLslR0C0noeY6M4c3Q3Aj5XLsw6coxxbQrZ5piNZ1oF9ZD25Yddrq0pwbsltSWiuJoSHXUnpeA0HcFOwFWUDggIgEAALAKAJ0BKi0ALQA+bS6SRb+ioZVWqfgGxLUAWX+oZW/+RjbKQOsA56L9pPgf8kCO0FMfwKJQRH1pc5B2W/VvHkKb5ytjp2DPESUE6oHtnzSmE/FzOR+J4AOZQnLrSQgA/v27KZLDbXM67JcLnB3YIVi2cHuX0Z7yRG+3ribttSTt/7q20YTERoam9G8nuvgXbNjtoeQ5Jaj6459ySGswaznGlHIWCDkSEqFbdJbwPstRL2/69Qv4wiv/l+MQgCSSt54/85Azfl3zepjyF/+wnWJ0gHu3qLgKV8dX0yHjRYD03JnwR6bxY2WGBGOYR/mXjB+MEaCqlVjP7+z+sf5u6600twP960eykAVCZxVuO4NQn78vDB+pQf1yua6ZQvMAAAAA",
      u: "",
      e: 1,
    },
    {
      h: 79,
      w: 79,
      id: "image_3",
      p: "data:image/webp;base64,UklGRmQDAABXRUJQVlA4WAoAAAAQAAAATgAATgAAQUxQSGsBAAABkFXbbh1JF4IgGEIgGIIhGIIhGIIhGIIhFARBKAhioO6ZvCxp9XdETAB2p9zH53L1luE51SX6nEfxQY31dZnZXJq6+VtNpakGpZqhoUa/xUYRtbtoH001LWXXwWp97Mmi9hdtqOqS6bWqTplequqW6ZWsjpleOMSTzmfE6rs9mur9eFDUPd8j8af91tAI042kIa4bMwbNF0mDXBczCk0npGHOkxaHnHAcWgAkDXQCqJEIgBWJHoCE0pA01IUcC6PHohjBHJ9g8h+nRdMlms/fpkSTVzQ9GGrBIMfyAWIZAIdSgRFKAkokDAASSP9vBpL+y3EwTr9h1LMaheBSguhXNQahK3xDaLhZImDcXgHkeyTuBh4Wb4zHw5ccz7BcFbxI7KjiVWI3FS8TO6l4ndhFxUaa9iRjb7PGB3YfbGrAYrfDGTbTsiENdvPaJ51gOk3ZwhUOy5SXuCd4PdriB59RE7wfObfee8mZYBAAVlA4INIBAAAQDgCdASpPAE8APm0wkUasIy4mp71eScANiWIAvJw9l6yhNAfrpkjvoAeWP7B/7UekxmEH4AfpLe/8PwZfMP7Zp6e/gcDPn39BF0Z/+p6Rc8uLCbHRVU18xc15Jzf9nRFUSUuHtXFepZhwAfeJ5mQL1SsAU9xusSIAAPqMC2WOACIGGhzjVi/qQ1TcK/9JcKS0ytepUFJu1als2/9+e18gxR8FzY4PkV1mkqnNlz+P2mP4lQPdgTSky3E+GsD7fU7HRP/vaXlaw8pdSav0YJXe9azB7rl1gd2wAXEnohDKxRRRvkERnnRD3+3+mfsuLkb+pbhYThHUdzHXlz+OMLJ1JRrraHPw+llaZ7jL3u/Q7tFwKZk5Rz52qWPuTTWWyzML8ezgtyphfczUsfxMEGw2/XOa62fGLPzr4o4Zc8enoIWseZmmUeY/yX/Pu4ZVb6dKEu5HhHYDvoZW40T+P8h/74/YTv/3X9GtC4puGWDP1k5f38D2ZZUtyIy+WWcT6IJC7iLsXW0uHuL+McmrIcqUaNEApur76bKy67jscZOdxmBZrqtf1mtKpoG/wS/59y3doEC/+Yv+KbixvjJyB8QAfAIdqPUxrVpyYcJTJdMZPoAA",
      u: "",
      e: 1,
    },
    {
      h: 72,
      w: 72,
      id: "image_4",
      p: "data:image/webp;base64,UklGRu4DAABXRUJQVlA4WAoAAAAQAAAARwAARwAAQUxQSEwBAAABkFZbbxxJHwRBMARDMIRAMIRAMARDKAiGYAiGIAhioF6y2JZm+RkRE4ClMZfWb8uZYDOcTfT1qHE3ykNncw0bURFd2tImVESX97DDwbploVXUdFeOayLrxueKrHt/5mXdfdCkrPsPmpLV4qAJWW22d1Gt1jfEZvR40dSu0KNDLbcnxKY0PShqm+9IjGm+KWqdr0jMab7Iar9fDAc0AAjq4QngdGEAaC4oAeLDgag+FmQnOooTjOaEontBbqT/ZsENFCcEpxMdyYkKOJGB4UMAqgsMILpQAYA9SL+qA4zfwYFygWZO6CqZ++C2GxO6C8YKHhZTjKfEltIjREMVL08zA68/RoTeYZiQiIk0DEjEVBrbScRkaptJxPy61SCsPGSfisXUNuGE9Yk3kII9My+SD2Hb3BdwIWwdzjGFa4JBOkrnB9JrDrBM6XfAelZQOCB8AgAAkA8AnQEqSABIAD5tLpFFv68hlw0VtfgGxLMAXfQAROfnfyA56fpDdL8S3p0+YDoH7wB6AHg3fBD+5Ppc5ibH0lnmnlsEAWunHs+oYf4c0LyKSFU8z8AkfrUJVX16GCyCNaIkvi7TVwuhlAtJrCpeBQSYA2uHHY06CcR0cocWCayRTHGjYAD+9D6fSpy+UiJ7uh9+BMMnx/ujXfggMfLP7I2fBPkrzSzYWXxO/CRk9BOSdHd9qMHHPOGLkeX7fsQjrf8W5O1LcNNX9oFEPP3K8yLtSQRtcN+vtf//3Z7QW9p3+GGs+ZO/y+Pp5GNMqfo7dO116ZepL4R4XVbl80Dp8OP4+z8X/IaDaX9VFFWLxdK/R9cRny0PNA3vo6kcB1qm2mbSwQNUrfDV5hhN2YjSgeJn5ZDtpJ960gyn7X/sQ47UP/2qLbccu0V8kaoxVxFvLsfZu/UP8qLW6AZ2YRdwOHURG9O0knM58CINRWJwjuqAAVLKVhq6UD/UafgyljC/quFDheBBpg+UECrKfqtggx3eiXmR1iAkrtjLpCo9jMJ5AqgXpTtGe35aOMLIAvrS7a1t1XfGA0xpRx8+dPYMVnV0fN05XjmIcbb6KU7fH9zaLjRB/7/9CjXtDJW91HfcqvAzpOzSO38zTqVJwHsRSyKvpHETGcA65TEVj9BUaaGDiLvksW+V7aO15RqRGGbBwlm4dpI8Wfpd/Y/5uxz+8BqQP223XnvG3vn/xp8uZv3F//+qUjnai/2mKwIQMma8U/7aXFkMQf/charxq4Gq9mYEVhNLndS9f9v+RqSFjEBlQxv+VNyfGnER0f+vW4u+Rf1s//pNzZHuAAAA",
      u: "",
      e: 1,
    },
    {
      h: 349,
      w: 349,
      id: "image_5",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 344,
      w: 344,
      id: "image_6",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 344,
      w: 344,
      id: "image_7",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 344,
      w: 344,
      id: "image_8",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
  ],
  $0 = [
    {
      ind: 1,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.42], y: [1] },
              o: { x: [0.27], y: [0] },
              t: 37,
              s: [0],
            },
            {
              i: { x: [0.42], y: [1] },
              o: { x: [0.167], y: [0] },
              t: 57,
              s: [100],
            },
            {
              i: { x: [0.833], y: [1] },
              o: { x: [0.167], y: [0] },
              t: 120,
              s: [100],
            },
            { t: 141, s: [0] },
          ],
        },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [360] },
          ],
        },
        p: { a: 0, k: [157.37, 808.34, 0] },
        a: { a: 0, k: [45.995, 45.995, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_0",
    },
    {
      ind: 2,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [360] },
          ],
        },
        p: { a: 0, k: [677.15, 907.361, 0] },
        a: { a: 0, k: [53.527, 53.526, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_1",
    },
    {
      ind: 3,
      ty: 2,
      nm: "p",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.42], y: [1] },
              o: { x: [0.27], y: [0] },
              t: 0,
              s: [0],
            },
            { t: 20, s: [100] },
          ],
        },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [360] },
          ],
        },
        p: { a: 0, k: [182.264, 151.549, 0] },
        a: { a: 0, k: [22.233, 22.232, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_2",
    },
    {
      ind: 4,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [-360] },
          ],
        },
        p: { a: 0, k: [111.625, 94.142, 0] },
        a: { a: 0, k: [39.271, 39.271, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_3",
    },
    {
      ind: 5,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.42], y: [1] },
              o: { x: [0.27], y: [0] },
              t: 12,
              s: [0],
            },
            {
              i: { x: [0.42], y: [1] },
              o: { x: [0.27], y: [0] },
              t: 32,
              s: [100],
            },
            {
              i: { x: [0.42], y: [1] },
              o: { x: [0.27], y: [0] },
              t: 135,
              s: [100],
            },
            { t: 149, s: [0] },
          ],
        },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 149, s: [-360] },
          ],
        },
        p: { a: 0, k: [677.149, 129.567, 0] },
        a: { a: 0, k: [35.675, 35.675, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_4",
    },
    {
      ind: 6,
      ty: 2,
      nm: "U",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [432.534, 384.399, 0] },
        a: { a: 0, k: [174.068, 174.068, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_5",
    },
    {
      ind: 7,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.31, y: 1 },
              o: { x: 0.35, y: 0 },
              t: 81,
              s: [431.388, 457.005, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.4, y: 1 },
              o: { x: 0.19, y: 0 },
              t: 100,
              s: [431.388, 384.715, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 110, s: [431.388, 457.005, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [171.687, 171.687, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_6",
    },
    {
      ind: 8,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.31, y: 1 },
              o: { x: 0.19, y: 0 },
              t: 60,
              s: [431.388, 520.715, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.4, y: 0.4 },
              o: { x: 0.167, y: 0.167 },
              t: 81,
              s: [431.388, 384.715, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.4, y: 1 },
              o: { x: 0.55, y: 0 },
              t: 110,
              s: [431.388, 384.715, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 120, s: [431.388, 520.715, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [171.687, 171.687, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_7",
    },
    {
      ind: 9,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.31, y: 1 },
              o: { x: 0.35, y: 0 },
              t: 40,
              s: [431.388, 602.145, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.4, y: 0.4 },
              o: { x: 0.19, y: 0.19 },
              t: 60,
              s: [431.388, 384.715, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.4, y: 1 },
              o: { x: 0.55, y: 0 },
              t: 120,
              s: [431.388, 384.715, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 130, s: [431.388, 602.145, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [171.687, 171.687, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_8",
    },
    {
      ind: 10,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.31, y: 1 },
              o: { x: 0.19, y: 0 },
              t: 20,
              s: [431.388, 674.715, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.4, y: 0.4 },
              o: { x: 0.19, y: 0.19 },
              t: 40,
              s: [431.388, 384.715, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.4, y: 1 },
              o: { x: 0.55, y: 0 },
              t: 130,
              s: [431.388, 384.715, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 140, s: [431.388, 674.715, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [171.687, 171.687, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_7",
    },
  ],
  el = [],
  al = {
    v: T0,
    ip: Y0,
    op: G0,
    fr: q0,
    w: K0,
    h: z0,
    nm: Z0,
    assets: _0,
    layers: $0,
    markers: el,
  },
  sl = "/assets/usda-onboarding-bf507a17.jpg",
  tl = "4.8.0",
  Al = 0,
  il = 150,
  nl = 29,
  ll = 820,
  ol = 1020,
  rl = "U",
  cl = [
    {
      h: 158,
      w: 158,
      id: "image_0",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 217,
      w: 265,
      id: "image_1",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 161,
      w: 139,
      id: "image_2",
      p: "data:image/webp;base64,UklGRr4DAABXRUJQVlA4WAoAAAAQAAAAigAAoAAAQUxQSOQCAAABgBaBbt7GEAwhEAJBEALBEALBEAzBEAxBEAzBEMRAd4vlZL3qXffxIyIcSJIaN4squ5LwWTYg5wcBq+04QKyEQ6kyBCTWyxBQGmqMQShDCBQAinmlRnNNMctKpRDlQnOverrOJOtlm2/FFEIWKTNVb9iq3qhw6JclQ67VF6aDZUNOVTXv6anTj7dpWitzreZAPQRXtPOdMsiLSFb90CZ3asGL+L6pG8pmRPJ1v5+wJYkOcBq1vsLlg7mi7CGe9icqhNM+l84oEj25uGEqgRvyWp3YQuCOfIJNeYSANhPgAwIqU5V0kwj8kjy5Xp7IIQ6TYZ5Q8odqitcnNNwh2huPgNKEGB6S1z4EEnOpCIjm/vMHxllc/cbib/j76RfOhyXv0LE73OsWINjx3RDqcKaCAE85DgSmmR0DaC5CMCBdYCSe+fPwlAuEZMsAZMuBBAwCGUm6yUj2VeGEM/rRYK5ioQT5/yiQKbRCyX2fCj6Pki27xrN/5drnsejZp28pH0iYH3ACWkKyq/J5fHjb8VRKOxLHE8sH/Y/jb44IZaJDmYBTn2gE0QRJ+qtIusdH02Uo3Q1JNyOJrgMENkXizEickyJZ+wwkkf5EsuMoUP4xxEMMhehToYQkpklEEuoLkgyohOTDSodRLwGp3eJAsnCnCSMiGapQhhKSIQHhk6H48NQYSWmgFUmw1xNFPkay8zK3A8TnFSTHi/3TaYTheGKO83m0MbeKZANtEUnrO4TW5iYHingPZIWYFIkXifGCUK1s3QzyBqRYUYGwYD3E7pIwRBNjDcFGp1iRI5JBQSBoQBFZFqL4P9xWdWGN/Iu2EiO7dyfWlXGKQHaj2s7NuSiyHhjlcL3bmLreWK9pf8XZUm7ylvl8v9xvXVtOFB+eJJ2F7Xm298zPVfSRCTOXbIyZu94Zv+2LXIa+3uo7vzypvniK47u/y0dheQVGy+QltlAu3B9CuOXkMkXtRJStJSKK4dfYAlZQOCC0AAAA0A4AnQEqiwChAD5tMJRHJCMiISsIAIANiWlu4MAACx6BpPznn3rSH8pVST07rH6hVnr8qBmBOMKWzsZH+9ydHmqA4vQAd70BC+NqV1z+NUaaUfLbZCjXXPwUydrO18V1l1z+Nbhy5oVZdSAlr38qCyfxVyvruA1rC4+1ZbqEkADm7//9wE3/hVq//jvi/4YUELf//27fT///EOhr///xDoAAXPUVwDFzcAx8owFr1FcAAAAA",
      u: "",
      e: 1,
    },
    {
      h: 1,
      w: 1,
      id: "image_3",
      p: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4WAoAAAAQAAAAAwAAAwAAQUxQSAkAAAABBxAREYiI/gcAVlA4IBgAAAAwAQCdASoEAAQAAUAmJaQAA3AA/v02aAA=",
      u: "",
      e: 1,
    },
    {
      h: 100,
      w: 100,
      id: "image_4",
      p: "data:image/webp;base64,UklGRjgFAABXRUJQVlA4WAoAAAAQAAAAYwAAYwAAQUxQSMcBAAABkE5tW6VtF0IIIYQQwiCEEEIIg3AjhBBCCCHcBve3mW1dz7v5FxETgHljKtLOaynRg6tP0u1JbSWyCHu3N7Umt5zLw95XiUt5sVl7WsaLzTzSEk5s9rHNl9UWbH6u0G1NzTNltWWbm8VVW1njHL7b4mmGoLa8vBfVCMpbyTjKO9FYyhtBaZg859WIlqdcN6rpoWpcNTySjW13DwSlY/sD3QjHW9kYjztOKVm5IcZZ/SVvrOWS0DJ/wRtvuSDEzJ84Y15OMrVxMqjZdhCMuxzs5PSgk7MNgDf2O4BErwMQeuaAzi8Cxr8gfoCK9AEaygcwyEdonyB8hPh9GB+h/TrUT+DKJ8AnGIgfoMF/gB1Qfglo/AJQ6CmASK8CgLLL/1V2/r9EruN/p9zyAYSbP4rUKk47s3iWiA1cHLzSlURr4PJgtV3bSDXcbJzCHa+MCm5nQt3dQ+MT8KBTNhmPRjIVDycq3T0FIaIezwsNDXhTSGjAu0JBA94WAhrwflmue8yYdK3qMGfoK2VM6/ZlesDMcaxRHCYvOl8LmN/LZGPDml4mGgnrujLmqBGLb6Jv9ezBcNv7Y1qzB08XS203RttTAOUQTx3mBgBWUDggSgMAAPAUAJ0BKmQAZAA+bTCTRiQjIaetGAsI8A2JYgOwHNVAOsM/75Dlnul5oj+7nHaAP0r6YHmA/ZT9ZuxL6AH9D6gv0APLT9iv9wvSicvOZxbuCNmtwn5yJ44dw3R2179WKwJyVWpouzmuMEePVudProHbVjA1wtEq9qPeBF7ErlLh3mGHCF5E1+ZP5nK+Kc2UAQLsNyzWv6ZIXRO1Drv7gO/kwhcn/qhQe7n2m7s++2wAAP7/Ob1f/rwTSwMHmr7t8+94EUikSI8t+l8g866/0sanNNTjVrojxBrw+qs3CFCWOOpY3TwThJLXkajYWgdhRZ7VUL5FWT1iX5UXx/yNB1VE497xH9V/9UgMH/H38Zme8lkiXQzSlseP+73SeR6uannvV+QtsY76yb4ZI4+qHV7/B+xK28DoIZ14lpxF0AfaUzIRW47bzGaFVYTBZpsWps7Lu4PosS/xeHKABx4QiGayci7siGU9h6hl6h3SnSCXdVtJoufld3REJkuik9szu9DJ7SWhhXGp6UA5ii39qbA16CfK7shgf45PXGXUTmSSyrkwzkYksFFMG2MMGWtr/VcOwkI5RrfoX78wmFqTITmgKEipTidRB1/5wPKsW2c+N8YFRa35fGLqeynfMakw3ADHwOKBYrRlHwtzpYZZC0K/8YlYGerhlsPV1Hs8tK9ywX0BYEimz2S+uQSCcaZh7R6LE3Fc3YQYYFChtOCACheYtE8sEiBhDDdJBf7OLs0WKpLVw/H7J7TALn52AQGzJTrV1b00RZxZr5kZ8/PDNbN3mj/7/rJ1PZtsGisuv8nmnciRDeLGwKZCS6WVCKzFDeHY16o28+JgQCZtav91wEyzIwVRNHX7GOkLAmZ9Q8OIdJ68TNp7kI8GLIejFGxnk1r8UkRoIyfS5P8mmcXkeXd4af+mNYvrQYGuv+fxvMtWTUM/7+3//1Zf/+qJP//VOugMJKI3v8opEavyVCkGaAeMVcVoM75r8MXH+906/3h1LPyYqNPbEKdoeyqudH+f/VGkkw/pnT+jWLFH2OmKUuFGPS9Hi4AAz3IX2pVjouhZiu3DWiw0x4TGTgIZLLscFcH4r8f8m//y1n//odbH81KDZWNJDIqqAAAA",
      u: "",
      e: 1,
    },
    {
      h: 114,
      w: 1065,
      id: "image_5",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 116,
      w: 1036,
      id: "image_6",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 138,
      w: 100,
      id: "image_7",
      p: "data:image/webp;base64,UklGRp4FAABXRUJQVlA4WAoAAAAQAAAAYwAAiQAAQUxQSAUCAAABkFZte942DwRBEARBEARDEARBEARDeCEIgiAIgiC8DN59OIktPWq7/YqICcC8MRVpr2sp0YOrT9LtTm0lsghntye1Jrecy8OeV4lLebFZe1rGi8080hJObPZxzJfVFmx+rtBtTc0zZbVlm5vFVVtZ4xy+2+JphqC2vDwX1QjKU8k4yjPRWMoTQWmY3OfViJa7XDeq6aZqXDXcko1tdzcEpWPnDd0Ix4+yMR6fOKVk5QMxzurf8sZa3hJa5t/wxlveEGLmXjhjXl5kauPFoGbHRTDucnGS04tOzg4A3tifABK9DkDomQM6vwgY/4K4gYq0gYayAYNsoe0gbCH+31V34MoOsIOBuIEGv4ETUH4JaPwCUOgpgEivAoCyy39Vdv6vRK7jb6fc8gWEm7+K1CpedmbxVSI28Obgld5JtAbeHqyO9w5SDR82TuETr4wKPs6EuvsMjU/AjU7ZZNwayVTcnKh0dxeEiHrcLzQ04EkhoQHPCgUNeFoIaMDzZbnuMWPStarDnKGvlDGtO5fpATPHsUZxmLzofC1gfi+TjQNreploJKzrypijRix+iD7VswfD4+y3ac0ePF0stX0w2pkCKIf40uF/flfDQqG6SbK1hZqVScoPS99ANPsBOK1toHyhRDYQzf5vcmaRH748yXQD0WwW6VjH9TTLs4+R/PfgumwADisCAFZQOCByAwAA0BkAnQEqZACKAD5tMpNGJCMqqSq3nDFQDYlAdgO+rVb4/kuXs6CNCu2doA/S3pmeYD9h/1V97r0T+gB/RuoM9ADy1fYr/cX9yPaR1TvAB9qctGZxd1R3Zon1m2K01Ws2/qvPEEjr/d4G9A/7qidGW76LF0FAfBxse8RQRbaisfG7g4ooHSgSwdZrrVlONfIhQBGK9aE+YDvmSE62NywRnWxt894HyNGQ/9sDpJdg/uIyS684QxTFwG+E794qf1hWct+WbDUu8syBpGZyUmxr82UTS2k6sOwA/vmcF/5VAeuJaj7hN314HtveLy9mzKNcE7/jwfSM+iwVI0pmq0M/Wdzrgo7k6BR4qzzJqAwJIVwlUbrNAxhvHFIaxlsnEHLaWiG/yNB8abIfNdaWx86S/5mv//R///pKr//pAg+U83/vOADwCOAX4fm+5/nOTLRdZM28u0a0Ok0msmbc58MTBbSZWIiyYEWOE6qzr8iV8mQ27QeVb4HbU/tIxhpdFp7HWVSfcMWRxLL6lAKL25kcgl//Oc+/0t9mIo37080fZgzKuLruo8vj+uPFTx3FGCSw1k4wzBrq6KCOrzdsYG36/GwCsk8CwGALz3iHKK3HnJeAA6VmlEB7GEZE/ETVcTMMSew0uwtzuxl5qjy3JZXEV949r/zdHMiOi1938Y59CfSXAPN0FHkFTXiFANVlLvEeJrhFb5MX+V4Uait2H0KpQ+2ljkDy3yV63eu1Pvn42I1Yz7u23gI9+hilWEXBMlfVr8+gC0AVfdQTuyGxAdJ5eDxOZqmbTX6DI4qlylG/sEj25DazGAQGzJTrgtpYHK2/RxPmPYz+70m9ANRo3/8NfrNB4v1G+LNQDt1Wj0YIf2tbcyhqB/mYPZws/NxT5UZ/7mDPsJ5wMsvgqJuuqFr/2KX53m2vK/YpIINluS/CI2PrvFUX2sCPVN/laGfuQsh5OBh2t/Jq1RDB9XhH/2kG//+zkI0Axy+f8/aDP/gBbm/xE0pTsobIgB07haQjbwbosLmqj1RVQscQXQdbuhddtVk68xlHLlz4EfT0PIGfZ+D/6o8Abpz8SJ1X2dYkmrMpxEtdau1sA+qHf/1Bgd9Z91E35DH+Uu82ChW690fVn/cA7f/ykkwjeOYC9tRXpUGuQ/o3/zgH//2Q0AAAAAAAAAAA",
      u: "",
      e: 1,
    },
    {
      h: 306,
      w: 627,
      id: "image_8",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 292,
      w: 290,
      id: "image_9",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 233,
      w: 260,
      id: "image_10",
      p: "data:image/webp;base64,UklGRpoIAABXRUJQVlA4WAoAAAAQAAAAAwEA6AAAQUxQSN0FAAABkFTbWthcV8I3fEMkIAEJkYCESEBCJCAhEpCABCR8Du7gb78macLX2YuICcDMSlrLyyS45JbhTlk7rWML561kdYZs/LyGkxJJdvFEHDxS8ylB/1CjHzKPridI59vshYXHb8ftNFYfBD2By1GF5uyCxjNVjllorvBg4of9A5ZDopq6uKCaagQQilr0COm0aoAL1ZLxOqqBywGN5gQXJho3vF8s5bON5gwfrhYxoBvaR5nmCicWQ4O1GPonUU0dXtwM1ZQM/EAGrSpuaIZyiU5zhM8qzRl+rIZ6gUzzBkcWQzMVw7BEmhs8uRoolm5oBlHTEFckSzEkGrd30mnVCF9amN9EtSzvKs0ZztwtrAGAFKVR5c1K8wZvJhOpbdBe8TrRvMOfzfaxhldBTV0cEk8peCmdVo3waD5hx+tK8wKf5sO6vCo0F3g16zEbXi80V/g11AN6wuuopi6OAcI2TFoT3kqnVQO8G1J5vURYd5oTfL7RvMLnmeYKn0c1dfhcBq0qTms0R/i80pzh80xzhc8jzQ0+FzUNcVqnVSOMkkqprZWSo38qzRlvZe20ak2+WWne8FoKP2/JMYnmHa/j4KGbW4KaurzKyoN38Yl0WjXiZeTxu08qzQteip7A4pFCc8HrylODPxaad7wOtGtrH+zuiGrq8mYz7REA8rAwOEM6rRrwdlgyXku3rM7YaU54G2jc8T5adl8Umle8T5ZoQDUMV2SaK4yrYcC6GOiJqKYulmJopuQSGbSqwGeN5gifbTRn+CzTXPHhalBT9kekuePTZGC0VMNwgqhpyEfB0gyRxt0JnVaN+HwYWN9Etaw+qDRnHLhZ2BYAoSitwQWZ5g1HBtOROzyYaG44tp4TXaCmLgeJnrHBhVENGnF0PKHDidLfLTg+61FdvADUVwVnxnFMFTgy/9lxrhT9rCX4Miq7nARIbqZRE9wpe8QlUy4vU8B///9vfFhrO7quwUlL47ktOSg0nt/EO0l5RY2+WXhRjZ6JehVqcEzndZtfCq+c3aKXGl5ZeO1/TqkXS04ZPwH+l0AqZ3op7LzRaStK96XOe50yqbzbGVuV7ouNNzxbsvGWJ2tRui803vVMFd73PKVB94Wdtz5Jq9J9qfPuJ0gq739+stJ9sfER50Y2PuTULIPuC43POS9F6b40+KhzIjsfdkpWpftS5/NOh2x84tnISn9ISku5dOdD35jkfXCWbyvtnOmbkp1zbZKUSyklxe+LykmLW+f7sS3flTjdr1Ljp7pn+ZqgcyYbj21r+I7GKZPO4/sWrxc4Z53njrpcLM9Z4fm6Z7lQmTO9wN+2Bs8kXrdv8RLLlJULkRx1OQ86Y/VaJHXPclKZsXa5v30NZ6A7ieTY4nFB3URS63IQ4piu7Yv+7lmOgLTZyl9Gsq/hMyDrXGF8HcmxxY8gRadquQOSWpcPAFnHRKHew989BxOAWK48Hg71Nkj2NZqu3Z4O5UZIji3NGdK4E5JaF5kwyHYvf/ccpgsI7W5I9pKu3KcASO125tkEpPYLAFL7BQCp/gKAUPUHAMg6fgAAlv0XAIRNfwAAcv8FALHqDwCQPH4AAFL9BQCyjh8AgFR/AYCs4wcAINVfACDr+AEASPUXAMg6fgAAUv0FALKOHwCAVGdFHwWQdUzIyPIwAFKdjJ4BPA8g65iHlvD3iQCkOgc14PVDAZL702kJeP9YAGLVBxtZYH0yQHJ/qLbgw2cDEKs+jtaAjx8PQG6PMlbBgTMAhE2fYk84dg4A5PYAowQcPQ1AKOPe9gUnTgSAZb+tsQacOhdAWMcNaY04ezYApHoze8YFJwSQtd9Gy4JLTgmAWPUG+hpw1T4pgOT2XXsOuHCdFgBhG1+iNQuuvVzs37MAWKperpeILxyX6njipep1+rYIvjNfankkALH0C7RtEXxxu9COB5dUmh6lbcsR3x70MipP9lLSWmpr7UVvrZWyJNxk1ItohGujXqJHOFf2C2wC/6b9pBrgY1lKO3gvi+A9AFZQOCCWAgAAECQAnQEqBAHpAD5tNplIJCOioSG9igiADYlpbuFuXh3+QYAA7QD8AP0A/gBllEAHik+szuM3sX8+Z7L/kAatz4A/iH4I/oB+PPaoMDLaYdVbA5G+p8FRdTI+T8RK2GmHZSo48wTXFQTQVhvvFtMOylRuyDJ0maKACOQf20wyOQPo/inufexQaQyrctph2UqJfe3SkaYdlKjkH9qx2YGsqcmIZ5PlC8FRdTKhA7SFjY3W44MuzIQEqN17eP4bQBsrUCzvk1+nuH1j1nVIcj4gf9mHH0MS9iAmu8Kax5TUcgv2XwEVTfvYxUSffMqGP3JkA9N6kqJOzvb4QEqNyK3ihk1Y6TiXsXRaD5zr0w7ICTBg3myEAJp8f/vkVyBPuXwQsqMQnTJQBOqAAP6xZh9ISBfpDN/N76H//huAEL8sId/kLT5ToWvTeCxD/KkHykQc22o//86d//nNv//zikN8rEATt2QLQFKku/P+KIi+InJG+4kfduf+R7urBCvEP6f6GwBa/BJyJBZI9qCT46xIMJgwu/YlFCuK57FUcY0SunNI3X+EIHNX9kUok49sZZ/ymfZcgnLRY5HXU/n2LrKPq8ZXl5NP4yvLrg6PFYpkkrDBHt9n4V4PtodvyoJ8peKLDCWXryHdAAOQhQVQnXXGcJICohXqPavyk1PlMCsMM88XxAoOMEH58tMQk7sLwXipuapVU9pS1mO/UeLiKcOxRJI0OMxVxeGQijM+D07ecYlCbQKsGw7HFCRrC46qRqOhMzjjwAm4SOcxr42LoTXJ91I7VQTEc1NUTBEtIad8rwxZPnXY1OHURWIz03Jghb9EbbXBuPp/bW+al8j+Bk/23+CfzQCMnW2/fzxPhBiRbGrXL80eAAA=",
      u: "",
      e: 1,
    },
    {
      h: 65,
      w: 38,
      id: "image_11",
      p: "data:image/webp;base64,UklGRgwCAABXRUJQVlA4WAoAAAAQAAAAJQAAQAAAQUxQSEcBAAABkFXbdtxIF4Ig1ARAAHoQBEEwBEMQBEEQhEB4EARBEMTg9uA36Kt+I2IC4JXnjsN8lm9MaUNZV46qLzpXfwsoi5HjzZEGg/dtSpPxwzJ5cmidZ6+nNx7e6WEY1pWUOQwcD9RHAhRBntr+r2gCmJCWwgqgacWDonXThgtLEQAvRQK6sgDIgaYQQFOYfDXm9hVT1XY+kjTy9jhfBq5+oFiMEegRMwdgBJCrZxdGBMl1JQfqDiF3cyC1HULObAPSJSHclwPA2/0KIKsLQMh+i9smSpykaxmYcbXn4gHQDB3C5xaApskZLIWHWoCE1IAdchmawhLRDVWTgLSVCWyFt69T7cDQ2Dw39Qq8GSjFkoX6AoBuIJeyJ631v7QssS885n1mpifkfWIm6HnGSYK5Be0b3re+faslRNYuFukVBxXB4e/Rj/z45QIAVlA4IJ4AAAAQBQCdASomAEEAPm0uk0YkIqGhLMjggA2JZwDJqY4DNeRnWc6dV6Foq3mikZsQ6WVwAP7w9///i+f/42s//8aFuNasXwJgZSKmZX//9iOFCDcZPV/b5xuPFTKi3/QagPGryVgYi8NzryQC2PDmBKOqROh8GuEsHqAWcEaPKH/wnhfUWE5cj9le///B12GQGqmV3/gQ//+0EB/+x8AAAA==",
      u: "",
      e: 1,
    },
    {
      h: 595,
      w: 384,
      id: "image_12",
      p: "data:image/webp;base64,UklGRp4FAABXRUJQVlA4WAoAAAAQAAAAfwEAUgIAQUxQSAADAAAB8FbbVmbbtrU1CfxcP2N9CEDA+kACEpDQJSABCSEhJDQJSEACDupae/cGxL/6a7SImADZ1e9NaI/v+kOPVG9jlMi3/GBztItqaeDkfdEs3Dg8PyQLHedvjnW8eTOs4d3Crwsvz0Cve2GUYPR7ATe9YN9BxFCJ3ZrsSpaKLEkYBjK5qpV2JFmNZFO2ZBhKrsfQA80Y5NIXqgFyVQNhL7Pts5dIlq0ZSRcs4LND82cBo1EurSxyTdqJHqkm9wFgtEg0uU8AGCXQTPI8AsxKMwl1HgF6ZJlIKHoEs9BMRK7PcwDIRBORI/Ni3FyCMk5DGQuI1Cr1e9oRkbrQqKX4Xg9ItZR1MgzQrlJNj2SqzSOFYtVAOtEoli09EKbRqSXTwGevwWzcui3UnQ/szK1rAZpWosIeQu62AAxjdqxmdoWxcvYResf5Tg/8kjjf6EEYHvs5DULyemh+hOdXm3ujBuF6brqiLQvlDRXa//zjz/j1D965/93/7n/3v/vf/e/+d/+7/93/7n/3v/vf/e/+d/+7/93/7n/3v/vf/e/+d/+7/93/7n/3v/vf/e/+d/+7/93/7n/3v/vf/e/+d/+7/93/7v8fgkf9XmiX8L3+zCOk+hiaA9/Kg81eAtXKwMFZA82C4vCIJIsT5wvFrok3C8M6Xp0XvwpeVn6NBS3ZUF1AYleE/RFJRpU8rYdd1aqyJslCIJcaM+xItTLJHtm6rEquadQ96cZNOzWUXGr0A41siHuVZM3qgXTZwkg7NJ8WoI1ydWWRa9JP3IFqoR8A+ufimYR+AsCTaCZSzwCaaCbXfQZ4AstErjqOoEeaiUhs/QBmIJpIOoFOubmEyrh6tbkwuZXMsCMS1EKmFsy0J6JWZd1lKetEqVaPNKo9R26KqTHDiU6xZqAeuGA2amVrxj21CrVkGJhp54YduFUs4L5WUod9C7nHAjCMPrB6sSsuna1C7/LSIwQvr/TAMMnz3C0kv/TQyMLz9BwYRbh+lWesaIvC+GRUYf3PP0JK8f9/2QFWUDggeAIAABA7AJ0BKoABUwI+bTabSaQjIqEgqACADYlpbuF3YRvzpegH4AfoB+fvf4AxSeiA98pf5YBrqb3EXlgJ0r+OhssA11N7iLzQmwyoBrqb3EXlgFguHdg7IwIcAVI2IvLANdTe4XJ/q2GRaGogjnxsReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlgGupvcReWAa6m9xF5YBrqb3EXlGKtHsVy9KWHiB51upvcReWAa6YYpJ8sA11N7iLyv8sUtsI2WAa6m9xF4QFZMpMwgbXU3uIvLANdS0tBSOnSAAA/v+5yH/+L5//jaz//xo3O47J6Z4b5tpgjX50gu2e7gtOCnDVe/C8aUACZQh2hwfIsu6ALsJcIEpQWko6fBy9p7M/hAfU0Cj786PwdYuyQAAAAAAAAAAAAAAAAAAAAAAoP4Ww/gwbv6tXqriHzoQoSvn2fTC3lzPgvRn2K4Bu4AUtWiww6OKAwZrZn/gx//+y6wZIEAAA",
      u: "",
      e: 1,
    },
  ],
  dl = [
    {
      ind: 1,
      ty: 2,
      nm: "U",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.49, y: 1 },
              o: { x: 0.47, y: 0 },
              t: 30,
              s: [380.325, 398.756, 0],
              ti: [0, 0, 0],
              to: [40.675, 15.744, 0],
            },
            {
              i: { x: 0.49, y: 1 },
              o: { x: 0.47, y: 0 },
              t: 88,
              s: [402.325, 378.756, 0],
              ti: [-5.425, -28.369, 0],
              to: [0, 0, 0],
            },
            { t: 150, s: [380.325, 398.756, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [78.583, 78.583, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_0",
    },
    {
      ind: 2,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.47], y: [0] },
              t: 5,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.47], y: [0] },
              t: 61,
              s: [10],
            },
            { t: 125, s: [0] },
          ],
        },
        p: { a: 0, k: [477.4, 657.886, 0] },
        a: { a: 0, k: [132.397, 108.12, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_1",
    },
    {
      ind: 3,
      ty: 2,
      nm: "f",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [277.87, 674.753, 0] },
        a: { a: 0, k: [69.181, 80.375, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_2",
    },
    {
      ind: 4,
      ty: 2,
      nm: "f",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [0, 1020, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_3",
    },
    {
      ind: 5,
      ty: 2,
      nm: "u",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 150, s: [361] },
          ],
        },
        p: { a: 0, k: [113.682, 205.385, 0] },
        a: { a: 0, k: [49.724, 49.724, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_4",
    },
    {
      ind: 6,
      ty: 2,
      nm: "l",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [420.983, 947.338, 0] },
        a: { a: 0, k: [532.481, 56.952, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_5",
    },
    {
      ind: 7,
      ty: 2,
      nm: "l",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 40,
              s: [100],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 110,
              s: [100],
            },
            { t: 149, s: [0] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [362.511, 907.007, 0] },
        a: { a: 0, k: [517.56, 57.914, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_6",
    },
    {
      ind: 8,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [627.117, 109.626, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 61,
              s: [627.117, 95.626, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 88,
              s: [627.117, 95.626, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 150, s: [627.117, 109.626, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [49.723, 68.563, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_7",
    },
    {
      ind: 9,
      ty: 2,
      nm: "u",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [380.662, 743.342, 0] },
        a: { a: 0, k: [313.307, 152.758, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_8",
    },
    {
      ind: 10,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [313.453, 413.845, 0] },
        a: { a: 0, k: [144.966, 145.521, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_9",
    },
    {
      ind: 11,
      ty: 2,
      nm: "m",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [690.42, 142.657, 0] },
        a: { a: 0, k: [129.83, 116.426, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_10",
    },
    {
      ind: 12,
      ty: 2,
      nm: "d",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.39], y: [1] },
              o: { x: [0.39], y: [0] },
              t: 16,
              s: [0],
            },
            {
              i: { x: [0.36], y: [1] },
              o: { x: [0.39], y: [0] },
              t: 40,
              s: [100],
            },
            {
              i: { x: [0.36], y: [1] },
              o: { x: [0.39], y: [0] },
              t: 85,
              s: [100],
            },
            { t: 122, s: [0] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [150.386, 452.686, 0] },
        a: { a: 0, k: [18.601, 32.22, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_11",
    },
    {
      ind: 13,
      ty: 2,
      nm: "d",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [523.739, 375.708, 0] },
        a: { a: 0, k: [191.978, 297.239, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_12",
    },
  ],
  gl = [],
  ml = {
    v: tl,
    ip: Al,
    op: il,
    fr: nl,
    w: ll,
    h: ol,
    nm: rl,
    assets: cl,
    layers: dl,
    markers: gl,
  },
  ve = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  },
  Ae = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  ha = [
    "get into crypto without worrying about volatility",
    "earn a yield",
    "access the forex market onchain",
    "pay their contributor",
    "send money abroad",
  ],
  pl = () => {
    const { t: a } = q(),
      { prices: t } = Te();
    Ne(void 0, "/USDA");
    const [i, s] = l.useState(0),
      [o, A] = l.useState(0),
      [n, r] = l.useState("0M"),
      [c, h] = l.useState("1.000"),
      [d, p] = l.useState(!1),
      [u, g] = l.useState({}),
      [B, v] = l.useState({
        totalAssets: 0,
        totalLiabilities: 0,
        equity: 0,
        holders: 0,
        volume: 0,
        supply: 0,
        supportedChains: 11,
      }),
      [D, w] = l.useState(0),
      N = l.useCallback(() => {
        w((b) => (b + 1) % ha.length);
      }, []);
    l.useEffect(() => {
      const b = setInterval(() => {
        N();
      }, 2e3);
      return () => {
        clearInterval(b);
      };
    }, [N]),
      l.useEffect(() => {
        M.get(`${G}collaterals`).then((b) => {
          L(g, { collateralsData: b.data });
        }),
          M.get(`${G}savings`).then((b) => {
            L(g, { savingsData: b.data });
          }),
          M.get(`${G}supply?agTokens=EURA&agTokens=USDA`).then((b) => {
            L(g, { supplyData: b.data });
          }),
          M.get(`${ue}utilisation`).then((b) => {
            L(g, { utilisationData: b.data });
          });
      }, []);
    const E = 25;
    ze(() => {
      (() => {
        i !== null && s((U) => Math.floor(U + o / (1e3 / E)));
      })();
    }, E),
      l.useEffect(() => {
        if (
          !u.collateralsData ||
          !u.savingsData ||
          !u.utilisationData ||
          !u.supplyData
        )
          return;
        const { totalAssets: b, totalLiabilities: U } = ge(
          u.collateralsData,
          u.savingsData,
          me.USDA,
          t != null && t.USDA ? (t == null ? void 0 : t.USDA) : 1
        );
        h(
          t != null && t.USDA
            ? t == null
              ? void 0
              : t.USDA.toFixed(3)
            : "1.000"
        );
        const Q = b - U,
          j = { holders: 0, transactions: 0, volume: 0, supply: 0 },
          I = u.utilisationData;
        let H = 3;
        for (const [, f] of Object.entries((I == null ? void 0 : I.USDA) ?? {}))
          (j.holders += f.holders),
            (j.transactions += f.transactions),
            (j.volume += Number.parseFloat(f.volume)),
            (j.supply += Number.parseFloat(f.supply)),
            H++;
        s(j.volume), A(j.volume / (Math.floor(Date.now() / 1e3) - 1635721200));
        const P = Ke(
          t ?? {},
          u.collateralsData,
          u.supplyData,
          u.utilisationData,
          u.savingsData
        );
        for (const f of P)
          f.symbol === "USDA" &&
            (f.supply <= 1e6
              ? r((f.supply / 1e3).toFixed(0) + "k")
              : r((f.supply / 1e6).toFixed(0) + "M"));
        L(v, {
          totalAssets: b,
          totalLiabilities: U,
          equity: Q,
          holders: j.holders,
          volume: j.volume,
          supply: j.supply,
          supportedChains: H,
        });
      }, [u.collateralsData, u.savingsData, u.utilisationData, t]),
      ne("section");
    const V = fe({
      src: b0,
      loop: !0,
      autoplay: !0,
      className:
        "!ml-0 max-w-[150px] md:max-w-[200px] lg:!ml-auto lg:max-w-[300px]",
    });
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("section", {
          className: "product-intro",
          children: e.jsx("div", {
            className: "container",
            children: e.jsxs("div", {
              className: "gradient-in-container pb-1 pt-12 md:pt-4",
              children: [
                e.jsx(Pe, {
                  illuAnim: al,
                  illuBg: W0,
                  title: e.jsxs(R, {
                    children: [
                      e.jsx("span", {
                        className: "h2",
                        children: "USD stablecoin",
                      }),
                      e.jsx("br", {}),
                      "The DeFi Superconductor",
                    ],
                  }),
                  gradientClassName: "before:gradient-green300-green700",
                  description: a(
                    "Supercharge your DeFi journey with USDA, the most complete & reliable yield-bearing U.S. Dollar stablecoin"
                  ),
                  figures: [
                    {
                      figure: "$" + c,
                      className: "col-span-4 xlg:col-span-2",
                      description: "USDA price",
                    },
                    {
                      figure: `$${de(i)}`,
                      className: "col-span-8 xlg:col-span-4",
                      description: "USDA volume",
                    },
                    {
                      figure: `${n}+`,
                      className: "col-span-4 xlg:col-span-3",
                      description: "USDA supply",
                    },
                    {
                      figure: B.supportedChains,
                      className: "col-span-8 xlg:col-span-3",
                      description: "Chains supported",
                    },
                  ],
                  cta: e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(k, {
                        type: "button",
                        look: "primary",
                        onClick: () => window.open(C.angleSwap),
                        rightIcon: e.jsx(m, { mui: "CallMadeOutlined" }),
                        children: a("Get USDA"),
                      }),
                      e.jsx(k, {
                        type: "button",
                        look: "secondary",
                        onClick: () => p(!0),
                        leftIcon: e.jsx(m, { mui: "PlayCircleFilled" }),
                        children: a("Watch Video"),
                      }),
                      e.jsx(ea, {
                        src: "https://www.youtube.com/embed/LKoxWCR3rW4",
                        title: "Introduction to USDA",
                        visible: d,
                        setVisible: p,
                      }),
                    ],
                  }),
                }),
                e.jsxs(x.div, {
                  variants: ve,
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: !0 },
                  className:
                    "mx-auto my-12 px-4 md:my-24 md:w-10/12 md:px-0 lg:my-36",
                  children: [
                    e.jsx(x.h2, {
                      variants: Ae,
                      className: "mb-6 md:mb-10",
                      children: a("Your gateway to all things dollar onchain"),
                    }),
                    e.jsxs("div", {
                      className:
                        "grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2",
                      children: [
                        e.jsxs(x.div, {
                          variants: Ae,
                          className: "flex items-start gap-4",
                          children: [
                            e.jsx(m, { svg: "currencyExchange", size: "xl" }),
                            e.jsx("p", {
                              className: "text-2xl dark:text-black-500",
                              children: e.jsxs(R, {
                                children: [
                                  "USDA combines stability ",
                                  e.jsx("span", {
                                    className: "whitespace-nowrap",
                                    children: "— maintaining",
                                  }),
                                  " a 1:1 parity with the U.S. ",
                                  e.jsx("span", {
                                    className: "whitespace-nowrap",
                                    children: "Dollar —",
                                  }),
                                  " with transparency by leveraging blockchain technology",
                                ],
                              }),
                            }),
                          ],
                        }),
                        e.jsxs(x.div, {
                          variants: Ae,
                          className: "ml-12 md:ml-0",
                          children: [
                            e.jsxs("p", {
                              className: "mb-4 text-2xl dark:text-black-500",
                              children: [
                                a(
                                  "Individuals and institutions worldwide use USDA to:"
                                ),
                                e.jsx(x.button, {
                                  whileTap: { scale: 0.9 },
                                  className: "ml-4 inline-block align-middle",
                                  onClick: N,
                                  children: e.jsx("img", {
                                    src: La,
                                    className:
                                      "dim w-8 overflow-hidden rounded-full duration-1000 hover:animate-spin",
                                    alt: "Ellipse",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-4",
                              children: [
                                e.jsx("img", {
                                  src: Ja,
                                  className: "w-8",
                                  alt: "Arrow curved",
                                }),
                                e.jsx("div", {
                                  className: "relative w-full",
                                  children: ha.map((b, U) =>
                                    e.jsx(
                                      x.p,
                                      {
                                        initial: "hidden",
                                        whileInView:
                                          D === U ? "visible" : "hidden",
                                        variants: Ae,
                                        className:
                                          "absolute left-0 top-0 -mt-2 w-4/5 text-xl dark:text-black-500",
                                        children: b,
                                      },
                                      U
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(T, {
                  framerContainer: ve,
                  framerItem: Ae,
                  wrapperClassName: "md:px-8 lg:px-16 my-16",
                  textarea: {
                    title: a("Harness onchain Dollar reliability"),
                    list: {
                      picto: [
                        {
                          icon: e.jsx(m, {
                            svg: "health",
                            size: "xl",
                            alt: "health",
                          }),
                          text: a(
                            "USDA is a multi-audited stablecoin designed to withstand adverse market conditions"
                          ),
                        },
                        {
                          icon: e.jsx(m, {
                            svg: "skier",
                            size: "xl",
                            alt: "skier",
                          }),
                          text: e.jsxs(R, {
                            children: [
                              "It relies on innovative ",
                              e.jsx("strong", {
                                children: "anti-depeg mechanisms",
                              }),
                              " based on cutting-edge stablecoin research",
                            ],
                          }),
                        },
                        {
                          icon: e.jsx(m, {
                            svg: "peopleAlt",
                            size: "xl",
                            alt: "people",
                          }),
                          text: e.jsxs(R, {
                            children: [
                              "USDA's ",
                              e.jsx("strong", {
                                children:
                                  "Asset Liability Management Committee,",
                              }),
                              " led by reserve management experts, ensures top-notch backing assessment",
                            ],
                          }),
                        },
                      ],
                    },
                  },
                  image: {
                    node: e.jsx(ae, {
                      background: h0,
                      gradientClassName: "before:gradient-purple500-blue500",
                      animation: Q0,
                    }),
                  },
                }),
                e.jsx(T, {
                  invert: !0,
                  wrapperClassName: "md:px-8 lg:px-16 my-16",
                  image: {
                    node: e.jsx(ae, {
                      background: S0,
                      animation: X0,
                      wrapperClassName: "lg:my-12",
                      gradientClassName: "before:gradient-purple500-blue500",
                    }),
                  },
                  textarea: {
                    title: a("Earn yield"),
                    list: {
                      texts: [
                        e.jsxs(R, {
                          children: [
                            "Easily stake your USDA into ",
                            e.jsx("strong", {
                              children:
                                "Angle Protocol savings solution, called stUSD",
                            }),
                          ],
                        }),
                        e.jsxs(R, {
                          children: [
                            "Passively ",
                            e.jsx("strong", {
                              children: "earn a native yield",
                            }),
                            " paid in USDA",
                          ],
                        }),
                        a(
                          "The yield is generated by the assets the Angle Protocol holds in reserve"
                        ),
                      ],
                    },
                    button: e.jsx(K, {
                      to: S.stUSD,
                      children: e.jsx(k, {
                        type: "button",
                        look: "primary",
                        children: a("Discover Angle savings solution"),
                      }),
                    }),
                  },
                }),
                B.holders > 1e3 &&
                  e.jsxs("div", {
                    className:
                      "mx-auto my-12 px-4 md:my-24 md:w-10/12 md:px-0 lg:my-36",
                    children: [
                      e.jsx("h2", {
                        className: "mb-6 text-center",
                        children: e.jsx(ce, {
                          delayChildren: 0.15,
                          staggerChildren: 0.03,
                          dataUseEffect: B.holders,
                          children: a(
                            `Join over ${de(
                              B.holders
                            )} users already leveraging USDA!`
                          ),
                        }),
                      }),
                      e.jsx(k, {
                        className: "mx-auto",
                        onClick: () => window.open(C.angleApp, "_blank"),
                        type: "button",
                        look: "primary",
                        rightIcon: e.jsx(m, { mui: "CallMade" }),
                        children: a("Get USDA"),
                      }),
                    ],
                  }),
              ],
            }),
          }),
        }),
        e.jsxs("section", {
          className: "container py-6 dark:bg-white md:py-12 lg:py-20",
          children: [
            e.jsx(T, {
              framerContainer: ve,
              framerItem: Ae,
              wrapperClassName: "md:px-8 lg:px-16 my-16",
              textarea: {
                title: a("Don't trust, verify"),
                list: {
                  picto: [
                    {
                      icon: e.jsx(m, {
                        svg: "security",
                        size: "xl",
                        alt: "security",
                      }),
                      text: a(
                        "USDA is backed by secured debt and U.S. Dollar stable assets that can be tracked in real-time in the protocol reserves"
                      ),
                    },
                    {
                      icon: e.jsx(m, {
                        svg: "swapHoriz",
                        size: "xl",
                        alt: "Swap Horizontally",
                      }),
                      text: a(
                        "Every USDA can be instantly redeemed for any token used as collateral"
                      ),
                    },
                    {
                      icon: e.jsx(m, {
                        svg: "token",
                        size: "xl",
                        alt: "token",
                      }),
                      text: e.jsxs(R, {
                        children: [
                          "Beyond stability, USDA is reinforced with a $",
                          W(B.equity),
                          " ",
                          e.jsx("strong", { children: "equity buffer" }),
                          " for an added layer of protection",
                        ],
                      }),
                    },
                  ],
                },
                button: e.jsx(k, {
                  type: "button",
                  look: "primary",
                  onClick: () => window.open(C.angleBalanceSheet, "_blank"),
                  children: a("Check reserves"),
                }),
              },
              image: {
                node: e.jsx("div", {
                  className: "w-full md:w-2/3",
                  children: e.jsx(Oe, { pageData: B, currency: "USD" }),
                }),
                className: "mx-auto flex w-full flex-col",
              },
            }),
            e.jsx(T, {
              invert: !0,
              wrapperClassName: "mt-16",
              image: {
                node: e.jsx(ae, {
                  background: sl,
                  gradientClassName: "before:gradient-purple500-blue500",
                  animation: ml,
                }),
              },
              textarea: {
                title: a("Get onboard easily"),
                list: {
                  texts: [
                    a(
                      "Buy USDA in a few clicks with little to no fees, with a credit card, a bank transfer or by swapping crypto assets"
                    ),
                    a(
                      "Borrow USDA effortlessly using your crypto assets, without the need to sell them"
                    ),
                    e.jsxs(R, {
                      children: [
                        "USDA is ",
                        e.jsx("strong", { children: "as liquid as USDC." }),
                        " Mint it, swap it, or redeem it in a few clicks. No fees, no slippage, no KYC",
                      ],
                    }),
                  ],
                },
              },
            }),
          ],
        }),
        e.jsx(He, {
          framerContainer: ve,
          framerItem: Ae,
          title: a("Unfold the future, grounded in the Dollar"),
          description: a(
            "USDA is composable by nature and any integration can be permissionlessly built on top."
          ),
          text: a(
            "Get in touch if you're looking to build around Angle and USDA."
          ),
          buttons: [
            e.jsx(k, {
              type: "button",
              look: "primary",
              onClick: () => window.open(C.angleDiscordInvitation, "_blank"),
              children: a("Contact us"),
            }),
          ],
          animation: V,
        }),
        e.jsx(pe, {
          embedded: !1,
          faqs: [
            "What is a stablecoin?",
            "How does a stablecoin work?",
            "What are the different types of stablecoins?",
            "Why choose USDA?",
            "How to get USDA?",
            "How to secure USDA tokens?",
          ],
          docUrl: C.angleSavingsDocs,
        }),
      ],
    });
  },
  xl = "4.8.0",
  ul = { g: "LottieFiles AE 3.5.4", a: "", k: "", d: "", tc: "" },
  fl = 29.97,
  kl = 0,
  bl = 120,
  hl = 300,
  wl = 300,
  yl = "c",
  Bl = [
    {
      id: "image_0",
      w: 201,
      h: 201,
      u: "",
      p: "data:image/webp;base64,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",
      e: 1,
    },
    {
      id: "image_1",
      w: 120,
      h: 71,
      u: "",
      p: "data:image/webp;base64,UklGRowBAABXRUJQVlA4WAoAAAAQAAAAdwAARgAAQUxQSGgAAAABZ0AQCBrb4BBGOCIisMMKN7VtOxESkICEKCAKwQQ9EmgpkUBJm9N1Rea0M2tF9H8CjEMrW0U8CGYxd8EijjkKVAlkb6RaIHMlpSL1qIUUiJyjWtSAmlAr6r97+dHmIeOjxU8OO3nUB1ZQOCD+AAAA8AcAnQEqeABHAD5tNpdJJCKiISWySACADYllAMzh//ZMeRIAQ+8t4AnFYOotOmIcj5l/A/Nom1KUzSI9HXl8xM9bmAff67wAAP7vtFNxz7Ybxptsv+/7q1NyE/3/sPU3IT/fW5tilFtnS/bJQvPIzC0YcVK6tLeNPOCqapcQP0v4QSA8wdZoNJvtdCM8H8+UIngaDff4p7FXfGGT51BwTpNrvTPfRZgI3D/p/wHp//+I7lKxvPB2nc+xO8PKiix9glLxVtgmBN4BisZir3N+s22lincHe6KpDKQ2f3gsFWwiI6bh6flJaoH7ZRyQFP6OaMdhyQUia9nGGv5hAAA=",
      e: 1,
    },
    {
      id: "image_2",
      w: 52,
      h: 71,
      u: "",
      p: "data:image/webp;base64,UklGRhQBAABXRUJQVlA4WAoAAAAQAAAAMwAARgAAQUxQSFAAAAABYI1te5YhhBBCCCEMYQgRdA3hQxhCCEMIIYQZPIf9POddETEBfLFHTjc/AYyYBUBMBkY2QFXQFDQFm4JFcSooiktBURwKHKuiKkLR/y0pd1ZQOCCeAAAAsAQAnQEqNABHAD5tNpdJJCKiISNIAIANiWcAybiSgILT8tw/4CrfEil9OzbQAAD++Rlq8H1VDpsXfVk/JrTUHt+TR63aHXOtqlR8AFJJ8v3cqCltCfSi+o/Ocf//nKCPUzWvEQsFNIPOPMXcsYiDtdRna203aCtUqFS4mvX52dy2xDOV/MySoB+E7Uod9C+xEIfPt04z5xM+sWwAAAA=",
      e: 1,
    },
    {
      id: "image_3",
      w: 51,
      h: 60,
      u: "",
      p: "data:image/webp;base64,UklGRjQBAABXRUJQVlA4WAoAAAAQAAAAMgAAOwAAQUxQSF0AAAABd6CmbSTm9u9tP/44H0REJJL5T5gBNpFtO7mfnPqvAitIwAgekIAUJHwJXwIq0rk9RUT/J+DiB8P4o9AaGkPJZXGHYTFMhpo7xc2GmtvF9dwqLJVYjqJSFJS2QvcAVlA4ILAAAABwBQCdASozADwAPm0ylkikIqIhJhqoAIANiWMAwrOc0tYUABDsmyslooDu2sfuJcmHCPAAAP7u+CtvW//JT/lF9u/HvsJsHJM724OHOfzoTfozzsDL1EOqrutpoFN8y5z+4H4iH5LAy32Qj1NdKqjhfn+fy6f+f+cliy3fZp8b/s5MR5p4y+MRNt8qa89BDXyHMhCxd1voyyjj/oqHCcDXoiF/ucGFNrzGtDSRJiXAAA==",
      e: 1,
    },
    {
      id: "image_4",
      w: 104,
      h: 31,
      u: "",
      p: "data:image/webp;base64,UklGRuoAAABXRUJQVlA4WAoAAAAQAAAAZwAAHgAAQUxQSBQAAAABD/CI/4iIICQg/D+t6VpE/5MJNlZQOCCwAAAAkAYAnQEqaAAfAD5tLpRIJDShoSb1WuqQDYljAYSt9wPsQUqRwboMdlAKb1v1qWPn1MKiqPIqKq9AGdpuwAD++XrTgb4u1KbBF2WeQM/RWdjUW060+D+bOsLjmU39X8H82dYJMx2Ex9sGxKpig3T2ykrxOexK/nzPYtq0i3r8CFiZUA5kc63TEt4w8bsLYuwgHGzEO7MaLpAV8aK2En0/cpTpk58sTE4G0dISAE2AAAA=",
      e: 1,
    },
    {
      id: "image_5",
      w: 120,
      h: 120,
      u: "",
      p: "data:image/webp;base64,UklGRkIBAABXRUJQVlA4WAoAAAAQAAAAdwAAdwAAQUxQSCEAAAABFyAQSFLbH2qNiAgHAkmbl1zJF12CQUT/JwA7mza3VDAAVlA4IPoAAABQCQCdASp4AHgAPm02mEikIyKhJAgAgA2JaW7fck5zr//dT/8cAadSWTss5ysy766SSH4v1I6KdVs6hzqjt5F5h0+CbwdSRduh//Z710IZzdNmgAD++S8V+qtLZsu/VlqIcjE3nd+v0f1wpELm3RvZsXSxj+hPQHuNlYWqf/F0YPM6FMDc1oN1YW2Ol5B15gNkmTS5wHVMar2C1MDHBcI/Gg4ZcL/6qzzQKd9xbUU7q///9HC7APnAHF8D1+B+VFpMEJNWHTawOgyaUPCv9oWBvNOnkyGjBHveduTKJXt7sdCAL1f+J4hzyqyg9lgAcNyYLH580LP+kAAA",
      e: 1,
    },
  ],
  vl = [
    {
      ind: 1,
      ty: 2,
      nm: "a",
      cl: "ai",
      refId: "image_0",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 42,
              s: [0],
            },
            { t: 60, s: [100] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [75, 225, 0] },
        a: { a: 0, k: [100.5, 100.5, 0] },
        s: { a: 0, k: [48.602, 48.602, 100] },
      },
      ao: 0,
      ip: 0,
      op: 120,
      st: 0,
    },
    {
      ind: 2,
      ty: 2,
      nm: "b",
      refId: "image_1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 17,
              s: [119, -79, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 47, s: [119, 95, 0] },
          ],
        },
        a: { a: 0, k: [60, 35.5, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      ip: 17,
      op: 137,
      st: 17,
    },
    {
      ind: 3,
      ty: 2,
      nm: "b",
      refId: "image_2",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 12,
              s: [370, 95, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 42, s: [215, 95, 0] },
          ],
        },
        a: { a: 0, k: [26, 35.5, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      ip: 12,
      op: 132,
      st: 12,
    },
    {
      ind: 4,
      ty: 2,
      nm: "b",
      refId: "image_3",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 8,
              s: [215.5, 351, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 38, s: [215.5, 212, 0] },
          ],
        },
        a: { a: 0, k: [25.5, 30, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      ip: 8,
      op: 128,
      st: 8,
    },
    {
      ind: 5,
      ty: 2,
      nm: "b",
      refId: "image_4",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 3,
              s: [402, 157, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 33, s: [189, 157, 0] },
          ],
        },
        a: { a: 0, k: [52, 15.5, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      ip: 3,
      op: 123,
      st: 3,
    },
    {
      ind: 6,
      ty: 2,
      nm: "b",
      refId: "image_5",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.26, y: 0 },
              t: 0,
              s: [-108, 182, 0],
              to: [0, 0, 0],
              ti: [0, 0, 0],
            },
            { t: 30, s: [119, 182, 0] },
          ],
        },
        a: { a: 0, k: [60, 60, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      ip: 0,
      op: 120,
      st: 0,
    },
  ],
  Cl = [],
  jl = {
    v: xl,
    meta: ul,
    fr: fl,
    ip: kl,
    op: bl,
    w: hl,
    h: wl,
    nm: yl,
    assets: Bl,
    layers: vl,
    markers: Cl,
  },
  Dl = "/assets/stusd-intro-adfe05ad.jpg",
  El = "4.8.0",
  Il = 0,
  Ol = 150,
  Ql = 29,
  Sl = 820,
  Nl = 1020,
  Hl = "s",
  Pl = [
    {
      h: 236,
      w: 236,
      id: "image_0",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 74,
      w: 74,
      id: "image_1",
      p: "data:image/webp;base64,UklGRtQDAABXRUJQVlA4WAoAAAAQAAAASQAASQAAQUxQSP0BAAABkFTbVh1ITwISkIAEJEQCEpCABCQgIRKQgAQkPAd3ciF8qqp7GBETIP/y9kmlDlPw9zyl43ON9gJfFItbOMxX7NRkznEVuzUeYjJObO4E1zGvNSf6tjkg7QuYfoOVaZ/7DF6zqWCyByMLfZlAM1sKxt3LaltGULehYKhRdro2gLplGcNqZXMaoJlFAcMs+70ytDUOwyAnusaQV5g+CHKmaQzPggwe5FSrTM0nB57lXKcE+VNlVU4ODPaDB1V7lLysfKgsytlGCeyUA+1yemJlqrDnOOlEzYySLudHgjDxgIYLjJJ3ojBzgRSCiU5eufFhz8CChiuEpcHD7B2V1EEiKncm0geF1EsegkEl+RLP7Fy6RJj/n2aXvJd4JjyRdkn8EAguKaQOPPN3dFIGwvIVFjSMKulXRGZHkcDf0EmXsWXlAg+aJ6QR2PMqczOBleM8aJNZowTutMrClCRWD4ugXeaNEqSjrLLwQSKDO6mBNvncmNpzCrj/5hiaOaWAZ1mYGJo5o4A3s0Iqg7oTCrg6WWoag4ZttmEYZLFVBrxmT1QMgyx3OoDGDb5iHGSj6wOgB7PGv5gMstW0EaDFf7KxYVKD7C4TAPRN3hHrY+mYbk72PzqzMxs50ZQDupdTXd3Ug5zsyoYW5HQT6pKenVxpnlR1ppVo5W7nqZF/fQBWUDggsAEAANALAJ0BKkoASgA+YSaLRaQiIR4K7VRABgSxgGQqXuiV116I4d6sdtl5gPtA94Dzqt8d9ADpbf9FdgH59IQQCt7z/Xextg/j1wlQPTwOqOKTBaVxddd4xye9CsqFwInEBvyybMeOrKAA/vQqN/+adpnb/toqGX61m/rTqrUmysl/zjfpeqSsKkkl8c8nfPzrPDmtfDmsFquwIDVnvk8mjwiCHkGcu9b1kCCnSumymlLXhznbBpCf/HlZmud8OcfCyHptkRRATM8aGFTfBfyvaLbGaj/5cy60f8DrkqNEeh+b6QrP/3RX//kWv/5D7//8gz02AdOZslvABm+dKYbM+fnXAR82C0wgsyoQ//+vS8e91wf2axaoQmvpp9LgStLHiDK775kjxalSzOwHRTEADq4Q/Zi9oBexrzlipkrmWZPSsLFSr0U+f9zDe2p2w6RR233kKcCkaH1ZOP8n+Ynegi573Jtnaz648MoO7ste7jHEL2F198e+uc7dL299BNpY40Xxp/+rAl0n//9MtxcEFUDOzwC5UFVWQ+QG1i1g8LppavOHs58iRh//hhmaNgAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 62,
      w: 62,
      id: "image_2",
      p: "data:image/webp;base64,UklGRpYBAABXRUJQVlA4WAoAAAAQAAAAPQAAPQAAQUxQSB4BAAABkFXbTiVIV0IkIAEJSEACEkoCEpCABCQgAQmREAfp7qkHJGvNd0RMAHZTqm3ej5oDTIe69Cv3bKYs3SstWLhYD/ZwKrEernSChp7ntC+ymrx2FVGjfU9Ru4s2FLW86FNR2+NLFGPa3hGr+fxqqH2hF0k9jhfsQtNDUZ/8wE603BT1Om+WG40AgvptAKojBrAcaQSp5wvJ1UB1tdBcKaav4Cx5Y2fz/y0OX6iuBNnVRHBVAfaUge6JgOxoAID4Kf80N4J/g5t6g+5E6C44qXisLpieiD1kvEwOOl5Xc4veoRuTiI+0TEnEZ1qGJGIjTTMSsbcZWRG7s1johP1hHuOMs5mPSCUcL2ubVILJ2GXHKDAcr8EvZLZMsB/TLY4CVlA4IFIAAAAQBQCdASo+AD4APm00lkekIyIhKAgAgA2JaQAVIABakzkWbURERbKFZSAuUGk7J0hAAP7xRH/+QV//j+T//x58r+O0ADC+3icv/xDy7/4h0AAA",
      u: "",
      e: 1,
    },
    {
      h: 74,
      w: 74,
      id: "image_3",
      p: "data:image/webp;base64,UklGRooDAABXRUJQVlA4WAoAAAAQAAAASQAASQAAQUxQSP4BAAABoFXbViBJehKQgAQkICEkIAEJSAgJSEgJSEACEp6D+3Mh4NHdM58RMQHyX94/pbZpSfGepw58btlfEKtic0/GYsNJLc5OaDit2Yh7YbEHC2FgXdtb6K+vAeVcwvIveVmO71jBzx2qWBzJycZYF9DdkYr5iLLb1xk0HKiYapaToU+gYduLafNyuEzQ3aaE6SvnozL0PQHTJBZDZ3h3uDFJYtN1hmfDC57Eqlem7lMAf8VuUIL3U2NNLCcG/yGCqjclP1Y/NJbFtlMCvxRAh1gvrC5V9piTQdStKBliPxOkhQc0XeCU/BYqcxdIJVgY5Cc3PuyZeNB0hbAyeZi/o5E2KUTlzkLGpJJ2yUMwaeS9JDK/Vi4RFv9PC1t+l0QmvJB+Sf6QCC6ppE0ii3cMUifC3is8aJo1Mq7IzM8yQbxhkCFzz+oFEfRdkE7g7TUWVhKr5iJol1WnBMFaY2lJCmvGMuiQdacExZRXlj5IZgiWOmiXz52pt1PB47fA0J2VCv7KxsLQnY0K3t0OaQwaLFRwDbLVdQZNx3zHNMlmrwz4uTNZMU2yPegEmg/EhnmSg2FMgJHcntiwmOSo6zNAa/zkc8eiJjldFwDor8RAfMx1YLkHOf/oysnXiUVXDYwoVkM7NJJYDvVAT2LdpbZlvEGudE9putJr9nJ3iNTJf31WUDggZgEAAJAKAJ0BKkoASgA+XSaNRaOiIR4LRVQ4BcSxgzgGh6RygUSX83bk7gDeO945ugC9/4fiM2uX4O2+ExI/0w9ierzf8tZKJYIeKlaGZxyLgRfGz+6rRGXJReFInhAwAAD+9Cw3/0OaSFB/FlG1rO6lifnaE7TGUXscUpSglsPtlwYWXSf204ptxd/M/JiXi0ngCGh3Wvc8OtnY6eDf+GLc7V/AwBOlMaxNkz/+dB//9jB//sT3//2GzzcALDwTzlnAwq7XmgsfVomfIf//0Ztrfl/xf+3uxE/XD+PyyWPNCoSsmWDgBpX1ivQ1gRrTMSvrDgxDRnr8B9fpL/R3bO9lRQkZS/kc7u8sLOhUs2NxHneAVbzGhVkFc/8p1mC1EerAf9vrPPTGiSl2f0D/yi/lg3zVW/r/Cs4z/j7O/5///ndLglM6HUpHl+Lm559adriGNbvM3jNaknNpdbKJeP59MK8/73nbkAA=",
      u: "",
      e: 1,
    },
    {
      h: 74,
      w: 74,
      id: "image_4",
      p: "data:image/webp;base64,UklGRowDAABXRUJQVlA4WAoAAAAQAAAASQAASQAAQUxQSP0BAAABkFTbVh1ITwISkIAEJEQCEpCABCQgIRKQgAQkPAd3ciF8qqp7GBETIP/y9kmlDlPw9zyl43ON9gJfFItbOMxX7NRkznEVuzUeYjJObO4E1zGvNSf6tjkg7QuYfoOVaZ/7DF6zqWCyByMLfZlAM1sKxt3LaltGULehYKhRdro2gLplGcNqZXMaoJlFAcMs+70ytDUOwyAnusaQV5g+CHKmaQzPggwe5FSrTM0nB57lXKcE+VNlVU4ODPaDB1V7lLysfKgsytlGCeyUA+1yemJlqrDnOOlEzYySLudHgjDxgIYLjJJ3ojBzgRSCiU5eufFhz8CChiuEpcHD7B2V1EEiKncm0geF1EsegkEl+RLP7Fy6RJj/n2aXvJd4JjyRdkn8EAguKaQOPPN3dFIGwvIVFjSMKulXRGZHkcDf0EmXsWXlAg+aJ6QR2PMqczOBleM8aJNZowTutMrClCRWD4ugXeaNEqSjrLLwQSKDO6mBNvncmNpzCrj/5hiaOaWAZ1mYGJo5o4A3s0Iqg7oTCrg6WWoag4ZttmEYZLFVBrxmT1QMgyx3OoDGDb5iHGSj6wOgB7PGv5gMstW0EaDFf7KxYVKD7C4TAPRN3hHrY+mYbk72PzqzMxs50ZQDupdTXd3Ug5zsyoYW5HQT6pKenVxpnlR1ppVo5W7nqZF/fQBWUDggaAEAAJAKAJ0BKkoASgA+XSaNRaOiIR4LRVQ4BcSxgzgGi2VWkYRb83bk7gDeO944ugC9/4fiM2uX4O2+ExI/0w9ierzf8tZKJYIeKlaGZxyLgRfGz+6rRGXJReFInhAwAAD+9Cw3/0OayGr/FlG1rO9523NaS7o6bqJhN6KDsifoN3oskxFRvWoVit/WXW/alV/Ixyn51aYdnpw9loYf+w8dPf/RZ+c00iAYD//+dB//9jB//sT3//2Gz84ARefIlONY34YxRb6fB4VHZX//ozbZt8vkLDxdiKezb8flhJGKEhFjMEfAD+jjs2rrAjS+ASiADtgHDPX4S+JVv9728a4nAjbBHOFwrPCOa19dYNUBLaggdQO+YCZ47Z5TzNb3c7blKFtYeO6tWSlygSi/yi/lgXzb3ebemMZiz/qQgzeD//ndLglNFbq8IYPLm559ad7WENXvH+sRZWXNpZgyJeP59MAev73m8AAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 74,
      w: 74,
      id: "image_5",
      p: "data:image/webp;base64,UklGRowDAABXRUJQVlA4WAoAAAAQAAAASQAASQAAQUxQSP0BAAABkFTbVh1ITwISkIAEJEQCEpCABCQgIRKQgAQkPAd3ciF8qqp7GBETIP/y9kmlDlPw9zyl43ON9gJfFItbOMxX7NRkznEVuzUeYjJObO4E1zGvNSf6tjkg7QuYfoOVaZ/7DF6zqWCyByMLfZlAM1sKxt3LaltGULehYKhRdro2gLplGcNqZXMaoJlFAcMs+70ytDUOwyAnusaQV5g+CHKmaQzPggwe5FSrTM0nB57lXKcE+VNlVU4ODPaDB1V7lLysfKgsytlGCeyUA+1yemJlqrDnOOlEzYySLudHgjDxgIYLjJJ3ojBzgRSCiU5eufFhz8CChiuEpcHD7B2V1EEiKncm0geF1EsegkEl+RLP7Fy6RJj/n2aXvJd4JjyRdkn8EAguKaQOPPN3dFIGwvIVFjSMKulXRGZHkcDf0EmXsWXlAg+aJ6QR2PMqczOBleM8aJNZowTutMrClCRWD4ugXeaNEqSjrLLwQSKDO6mBNvncmNpzCrj/5hiaOaWAZ1mYGJo5o4A3s0Iqg7oTCrg6WWoag4ZttmEYZLFVBrxmT1QMgyx3OoDGDb5iHGSj6wOgB7PGv5gMstW0EaDFf7KxYVKD7C4TAPRN3hHrY+mYbk72PzqzMxs50ZQDupdTXd3Ug5zsyoYW5HQT6pKenVxpnlR1ppVo5W7nqZF/fQBWUDggaAEAAJAKAJ0BKkoASgA+XSaNRaOiIR4LRVQ4BcSxgzgGi2VWkYRb83bk7gDeO944ugC9/4fiM2uX4O2+ExI/0w9ierzf8tZKJYIeKlaGZxyLgRfGz+6rRGXJReFInhAwAAD+9Cw3/0OayGr/FlG1rO9523NaS7o6bqJhN6KDsifoN3oskxFRvWoVit/WXW/alV/Ixyn51aYdnpw9loYf+w8dPf/RZ+c00iAYD//+dB//9jB//sT3//2Gz84ARefIlONY34YxRb6fB4VHZX//ozbZt8vkLDxdiKezb8flhJGKEhFjMEfAD+jjs2rrAjS+ASiADtgHDPX4S+JVv9728a4nAjbBHOFwrPCOa19dYNUBLaggdQO+YCZ47Z5TzNb3c7blKFtYeO6tWSlygSi/yi/lgXzb3ebemMZiz/qQgzeD//ndLglNFbq8IYPLm559ad7WENXvH+sRZWXNpZgyJeP59MAev73m8AAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 74,
      w: 74,
      id: "image_6",
      p: "data:image/webp;base64,UklGRtQDAABXRUJQVlA4WAoAAAAQAAAASQAASQAAQUxQSP0BAAABkFTbVh1ITwISkIAEJEQCEpCABCQgIRKQgAQkPAd3ciF8qqp7GBETIP/y9kmlDlPw9zyl43ON9gJfFItbOMxX7NRkznEVuzUeYjJObO4E1zGvNSf6tjkg7QuYfoOVaZ/7DF6zqWCyByMLfZlAs1sKxt3LaltGULehYKhRdro2gLplGcNqZXMaoJlFAcMs+70ytDUOwyAnusaQV5g+CHKmaQzPggwe5FSrTM0nB57lXKcE+VNlVU4ODPaDB1V7lLysfKgsytlGCeyUA+1yemRlqrDnOOlEzYySLudHgjDxgIYLjJJ3ojBzgRSCiU5eufFhz8CChiuEpcHD7B2V1EEiKncm0geF1EsegkEl+RLP7Fy6RJj/n2aXvJd4JjyRdkn8EAguKaQOPPN3dFIGwvIVFjSMKulXRGZHkcDf0EmXsWXlAg+aJ6QR2PMqczOBleM8aJNZowTutMrClCRWD4ugXeaNEqSjrLLwQSKDO6mBNvncmNpzCrj/5hiaOaWAZ1mYGJo5o4A3s0Iqg7oTCrg6WWoag4ZttmEYZLFVBrxmT1QMgyx3OoDGDb5iHGSj6wOgB7PGv5gMstW0EaDFf7KxYVKD7C4TAPRN3hHrY+mYbk72PzqzMxs50ZQDupdTXd3Ug5zsyoYW5HQT6pKenVxpnlR1ppVo5W7nqZF/fQBWUDggsAEAANALAJ0BKkoASgA+YSaLRaQiIR4K7VRABgSxgGQqXuiV116I4d6sdtl5gPtA94Dzqt8d9ADpbf9FdgH59IQQCt7z/Xextg/j1wlQPTwOqOKTBaVxddd4xye9CsqFwInEBvyybMeOrKAA/vQqN/+adpnb/toqGX61m/rTqrUmysl/zjfpeqSsKkkl8c8nfPzrPDmtfDmsFquwIDVnvk8mjwiCHkGcu9b1kCCnSumymlLXhznbBpCf/HlZmud8OcfCyHptkRRATM8aGFTfBfyvaLbGaj/5cy60f8DrkqNEeh+b6QrP/3RX//kWv/5D7//8gz02AdOZslvABm+dKYbM+fnXAR82C0wgsyoQ//+vS8e91wf2axaoQmvpp9LgStLHiDK775kjxalSzOwHRTEADq4Q/Zi9oBexrzlipkrmWZPSsLFSr0U+f9zDe2p2w6RR233kKcCkaH1ZOP8n+Ynegi573Jtnaz648MoO7ste7jHEL2F198e+uc7dL299BNpY40Xxp/+rAl0n//9MtxcEFUDOzwC5UFVWQ+QG1i1g8LppavOHs58iRh//hhmaNgAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 74,
      w: 74,
      id: "image_7",
      p: "data:image/webp;base64,UklGRtQDAABXRUJQVlA4WAoAAAAQAAAASQAASQAAQUxQSP0BAAABkFTbVh1ITwISkIAEJEQCEpCABCQgIRKQgAQkPAd3ciF8qqp7GBETIP/y9kmlDlPw9zyl43ON9gJfFItbOMxX7NRkznEVuzUeYjJObO4E1zGvNSf6tjkg7QuYfoOVaZ/7DF6zqWCyByMLfZlAM1sKxt3LaltGULehYKhRdro2gLplGcNqZXMaoJlFAcMs+70ytDUOwyAnusaQV5g+CHKmaQzPggwe5FSrTM0nB57lXKcE+VNlVU4ODPaDB1V7lLysfKgsytlGCeyUA+1yemJlqrDnOOlEzYySLudHgjDxgIYLjJJ3ojBzgRSCiU5eufFhz8CChiuEpcHD7B2V1EEiKncm0geF1EsegkEl+RLP7Fy6RJj/n2aXvJd4JjyRdkn8EAguKaQOPPN3dFIGwvIVFjSMKulXRGZHkcDf0EmXsWXlAg+aJ6QR2PMqczOBleM8aJNZowTutMrClCRWD4ugXeaNEqSjrLLwQSKDO6mBNvncmNpzCrj/5hiaOaWAZ1mYGJo5o4A3s0Iqg7oTCrg6WWoag4ZttmEYZLFVBrxmT1QMgyx3OoDGDb5iHGSj6wOgB7PGv5gMstW0EaDFf7KxYVKD7C4TAPRN3hHrY+mYbk72PzqzMxs50ZQDupdTXd3Ug5zsyoYW5HQT6pKenVxpnlR1ppVo5W7nqZF/fQBWUDggsAEAANALAJ0BKkoASgA+YSaLRaQiIR4K7VRABgSxgGQqXuiV116I4d6sdtl5gPtA94Dzqt8d9ADpbf9FdgH59IQQCt7z/Xextg/j1wlQPTwOqOKTBaVxddd4xye9CsqFwInEBvyybMeOrKAA/vQqN/+adpnb/toqGX61m/rTqrUmysl/zjfpeqSsKkkl8c8nfPzrPDmtfDmsFquwIDVnvk8mjwiCHkGcu9b1kCCnSumymlLXhznbBpCf/HlZmud8OcfCyHptkRRATM8aGFTfBfyvaLbGaj/5cy60f8DrkqNEeh+b6QrP/3RX//kWv/5D7//8gz02AdOZslvABm+dKYbM+fnXAR82C0wgsyoQ//+vS8e91wf2axaoQmvpp9LgStLHiDK775kjxalSzOwHRTEADq4Q/Zi9oBexrzlipkrmWZPSsLFSr0U+f9zDe2p2w6RR233kKcCkaH1ZOP8n+Ynegi573Jtnaz648MoO7ste7jHEL2F198e+uc7dL299BNpY40Xxp/+rAl0n//9MtxcEFUDOzwC5UFVWQ+QG1i1g8LppavOHs58iRh//hhmaNgAAAA==",
      u: "",
      e: 1,
    },
    {
      h: 62,
      w: 62,
      id: "image_8",
      p: "data:image/webp;base64,UklGRpYBAABXRUJQVlA4WAoAAAAQAAAAPQAAPQAAQUxQSB0BAAABkFXbTiVIV0IkIAEJSEACEkoCEpCABCQgAQmREAfp7qkHJGvNd0RMAHZTqm3ej5oDTIe69Cv3bKYs3SstWLhYD/ZwKrEernSChp7ntC+ymrx2FVGjfU9Ru4s2FLW86FNR2+NLFGPa3hGr+fxqqH2hF0k9jhfsQtNDUZ/8wE603BT1Om+WG40AgvptAKojBrAcaQSp5wvJ1UB1tdBcKaYvcpa8sbP5/xaHL1RXguxqIriqAHvKQPcEIDsaACB+yj/NjeDf4KbeoDsRugtOKh6rC6YnYg8ZL5ODjtfV3KJ36MYk4iMtUxLxmZYhidhI04xE7G1GVsTuLBY6YX+YxzjjbOIjUgnHy9omlWAydtkxCgzHa/ALmS0T7Id0i6MAVlA4IFIAAAAQBQCdASo+AD4APm00lkekIyIhKAgAgA2JaQAVIABakzkWbURERbKFZSAuUGk7J0hAAP7xRH/+QV//j+T//x58r+O0ADC+3icv/xDy7/4h0AAA",
      u: "",
      e: 1,
    },
    {
      h: 322,
      w: 467,
      id: "image_9",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
  ],
  Ul = [
    {
      ind: 1,
      ty: 2,
      nm: "s",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [406.713, 228.608, 0] },
        a: { a: 0, k: [117.878, 117.877, 0] },
        s: {
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              t: 0,
              s: [100, 100, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              t: 60,
              s: [94, 94, 100],
            },
            { t: 150, s: [100, 100, 100] },
          ],
          a: 1,
        },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_0",
    },
    {
      ind: 2,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 75,
              s: [426.036, 203.745, 0],
              ti: [-226.036, -159.745, 0],
              to: [0, 0, 0],
            },
            { t: 95, s: [568.036, 719.745, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [36.699, 36.712, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_1",
    },
    {
      ind: 3,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.29, y: 1 },
              o: { x: 0.23, y: 0 },
              t: 81,
              s: [424.682, 211.265, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 109, s: [470.682, 665.265, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [30.697, 30.709, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_2",
    },
    {
      ind: 4,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.29, y: 1 },
              o: { x: 0.23, y: 0 },
              t: 49,
              s: [406.313, 182.401, 0],
              ti: [85.687, -250.401, 0],
              to: [0, 0, 0],
            },
            { t: 80, s: [364.313, 712.401, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [36.698, 36.712, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_3",
    },
    {
      ind: 5,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.29, y: 1 },
              o: { x: 0.23, y: 0 },
              t: 37,
              s: [424.682, 296.204, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 60, s: [470.682, 750.204, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [36.699, 36.712, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_4",
    },
    {
      ind: 6,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.29, y: 1 },
              o: { x: 0.23, y: 0 },
              t: 0,
              s: [385.531, 193.465, 0],
              ti: [-185.531, -291.465, 0],
              to: [0, 0, 0],
            },
            { t: 30, s: [545.531, 825.465, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [36.699, 36.712, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_5",
    },
    {
      ind: 7,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.29, y: 1 },
              o: { x: 0.23, y: 0 },
              t: 13,
              s: [420.931, 181.122, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 45, s: [378.931, 811.122, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [36.699, 36.712, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_6",
    },
    {
      ind: 8,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.29, y: 1 },
              o: { x: 0.23, y: 0 },
              t: 24,
              s: [422.786, 176.211, 0],
              ti: [201.214, -340.211, 0],
              to: [0, 0, 0],
            },
            { t: 55, s: [236.786, 810.211, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [36.699, 36.712, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_7",
    },
    {
      ind: 9,
      ty: 2,
      nm: "C",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.29, y: 1 },
              o: { x: 0.23, y: 0 },
              t: 46,
              s: [409.613, 180.401, 0],
              ti: [164.387, -248.401, 0],
              to: [0, 0, 0],
            },
            { t: 81, s: [273.613, 712.401, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [30.696, 30.708, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_8",
    },
    {
      ind: 10,
      ty: 2,
      nm: "p",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [410, 717.801, 0] },
        a: { a: 0, k: [233.311, 160.61, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 150,
      st: 0,
      refId: "image_9",
    },
  ],
  Rl = [],
  Jl = {
    v: El,
    ip: Il,
    op: Ol,
    fr: Ql,
    w: Sl,
    h: Nl,
    nm: Hl,
    assets: Pl,
    layers: Ul,
    markers: Rl,
  },
  Ll = "/assets/stusd-yield-4c7aa052.jpg",
  Ml = "4.8.0",
  Fl = 0,
  Vl = 120,
  Xl = 29,
  Wl = 820,
  Tl = 1020,
  Yl = "s",
  Gl = [
    {
      h: 141,
      w: 141,
      id: "image_0",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 57,
      w: 57,
      id: "image_1",
      p: "data:image/webp;base64,UklGRl4CAABXRUJQVlA4WAoAAAAQAAAAOAAAOAAAQUxQSAYBAAABgFbbap3pSkBCJCAhEioBCZUQCZ+ESkBCJURCJOCAefSRwJr5HRETgLlla3peN2GE5c/wl3ZsIaT7VGu0SoZPt0YruPtS2+btvlxpDqkH7DyDuoc0fkfdgxq/oe5hjV+oBzZ6tHvo8wl78P1Bj2blRjy83ox4Xi/EE+pFz+AFAHvKBuCTYwAYObygeFLBluVAy3JCszjOv6fkqf8pJGpZOiSLgrM0wJIwcOQwAFuOAwAsRf3VMnT8JksgF2jxBq7JwtUbbNEUDzWW0RPqoRiP2QIJXrKFEbxmCyKYyBZCMJXOdcaYvdsiJcwvumJUrK06qwvWlzbe2VERtMhx3nVtjOilVsZKVlA4IDIBAABQDQCdASo5ADkAPm0qkEW/v6GY/VUl+AbEsgBcNREeT/Zk8Abwf+5GCc/gB+ktPEB3a/TsR8V92sU4+0323CNZVsTHOlZRvhsd7mVMj1+JzTBWxhgKd1xRK9kc6Pyf1WZ8cQT4yF0KNE1GE2Pf19SAPB3wAPoo4CQLZ1JsmQ+7VeEpsZXeB0rZoBC8R3G8iSWFHUeJ8/+mlHWIZGTzdmzyG+rXdYZrcOXk8H63a/hh3crZncSheTdv/OAvcqRfpPAoVo8UDlii7tWVCnvNx9bffXafwuAWBaX6wNOUbOKeaV6D9hjp6N/6xOw+hqk81OXTNST+IBXaa9aBhnwAR9q6d1BwfAdlvdDfbNNwtz2SpsySo3GcSqwAE2y4gz0/BGzoDS6vNYgJF/CAf81ZEYBUAAA=",
      u: "",
      e: 1,
    },
    {
      h: 57,
      w: 57,
      id: "image_2",
      p: "data:image/webp;base64,UklGRmICAABXRUJQVlA4WAoAAAAQAAAAOAAAOAAAQUxQSAkBAAABgFXbbt3oQhAEQxAEQzAEQwgEQyiEQBAEQzAEQxADzSMPW1r9j4gJwNpUmvTrVhlu+TPtpZ7FRZ22VBvtqtOWa6MdPGyrlnWHbRdaQ2IOB6+gYS6V39Ewp8pvaJhb5RdijpUeHea6P2FzfjwY3jTdVHMvN9Of5YtqAeViRLAEgC1kA/CJMQHMGJaQLGhFiXKiRemQKIb+fVKcPOL074NALcpAjSLgKA3QIAycMRRAiXECgIbI/1qEgf+kAeoFmr+Ja1J3+QbFm+Ch+FJ6QsMV4zGro4qXrG4qXrM6qVjI6qJiKfV9ylh96CYhrE+yY2bszbJqVOxPbb7TM8NpOs5+N6QxvKecGTsBAFZQOCAyAQAAUA0AnQEqOQA5AD5tKpBFv7+hmP1VJfgGxLIAXDURHk/2ZPAG8H/uRgnP4AfpLTxAd2v07EfFfdrFOPtN9twjWVbExzpWUb4bHe5lTI9fic0wVsYYCndcUSvZHOj8n9VmfHEE+MhdCjRNRhNj39fUgDwd8AD6KOAkC2dSbJkPu1XhKbGV3gdK2aAQvEdxvIklhR1HifP/ppR1iGRk83Zs8hvq13WGa3Dl5PB+t2v4Yd3K2Z3EoXk3b/zgL3KkX6TwKFaPFA5You7VlQp7zcfW3312n8LgFgWl+sDTlGzinmleg/YY6ejf+sTsPoapPNTl0zUk/iAV2mvWgYZ8AEfaundQcHwHZb3Q32zTcLc9kqbMkqNxnEqsABNsuIM9PwRs6A0urzWICRfwgH/NWRGAVAAA",
      u: "",
      e: 1,
    },
    {
      h: 57,
      w: 57,
      id: "image_3",
      p: "data:image/webp;base64,UklGRmoCAABXRUJQVlA4WAoAAAAQAAAAOAAAOAAAQUxQSAYBAAABgFbbap3pSkBCJCAhEioBCZUQCZ+ESkBCJURCJOCAefSRwJr5HRETgLlla3peN2GE5c/wl3ZsIWT4VGu0SoZPt0YruPtS2+btvlxpDqkH7DyDuoc0fkfdgxq/oe5hjV+oBzZ6tHvo8wl78P1Bj2blRjy83ox4Xi/EE+pFz+AFAHvKBuCTYwAYObygeFLBluVAy3JCszjOv6fkqf8pJGpZOiSLgrM0wJIwcOQwAFuOAwAsRf3VMnT8JksgF2jxBq7JwtUbbNEUDzWW0RPqoRiP2QIJXrKFEbxmCyKYyBZCMJXOdYMxe7dFSphfdMWoWFt1VhesL228s6MiaJHjvOvaGNFLrYyVVlA4ID4BAABwDACdASo5ADkAPm0qkUW/v6GY/VUl+AbEsgBZuhr9PTwBvB37hu0AFFj2sAWjQ1Og1gCgHAv1Plk6abfGfjgtZDv7XGJtPVC4YJA8iJ+VkEpENB9edUy7uny9TWBpr599iDf4SeRIuD2GyAAA/v6Lf/KqSZ/7Cnioz/+dxT+CT7YfqmEhfpdncqAT+pLCoEx9RRaq2UMT7X0rUBWNNB7nEThmsuPj/znlv98MKhlbNH/G6QRzHE/+iCW5UhE5v5Bk9EqaNIp66SBwnbzc6iB47xBrn/JG0rxXOceU6h9VJnu93mpNef/1kCfAO6+E0QzfVihAg1CaZpr6NoTBHqe1J9/2gKs/j6PZ5HZsLbv//GY//8/7//nrD//z4r/rSaIBE4Hq3c5VXfgjf/cJDDNF3vUTa/gTD/yP7nl1wAA=",
      u: "",
      e: 1,
    },
    {
      h: 373,
      w: 163,
      id: "image_4",
      p: "data:image/webp;base64,UklGRkQFAABXRUJQVlA4WAoAAAAQAAAAogAAdAEAQUxQSCUCAAABkFDbThxAkRAJSEBCJFQCEpCAhEpAQiUgAQlIiIPMPm1yPrNPI2ICCL7Uc3y5N2HaTy6Xfe+saS9St3sv2YfU7f4hm9Ds2Ys3IE97WgXeoeawgSvms0Mr5rUDK+a3wxLzXEGxurKM6TLfixEd5v0ExMudJTzN/Hc8GsASmmIRO5oRQsEki3lgKUE6lh5kYVlBjKFYVEEiYeoONSRlh9qPzEBSwzQk8pOIwwgS0igJygiiBLUGubDkIAULrRgMpoW4CCyHEDTUAwyCmwIIHmruBgHm5UwTIsrOKmGurjqh7o4mw6LuZjIB704mE/TuYjKBL/rcSfjzfGgJbWHVJxrTJnJbN2lPtJPlumEWpu082lhf0XEeTPsqIkyv/1//v/5//f/6//X/6//X/6//X///BZml9fHFqx1pR/I57TtXPzajTLt1Nd6Hsux2bbwHadij69iBqvZ0Z3TczeHM2HiaS83IeJpTzbh4mlvNsLo5XgyqmuuBKZvzCml40wSomPsOaPkzgVMsYIczI1gCky1kBXPGmGBWDEtQkgUtUI4oHUqLMqBcUQzK+JFJOyS/zugnQ4uyoJQoF5QcpUEhDSJYegwlrEeMDoY0hKBpERahTREKHDr9LcLL6k4AUfF2EeTLlzImXq6EQGd1VAh2VjcnAc/q5CToWV0UAs/zORXC3566mHYwjSfWQbso465VaCfTub5Pu9B25nrNr63RhPZVRCTRFgIAVlA4IPgCAAAwIQCdASqjAHUBPm02mEk/uy0hInjI0/ANiWdu4XPxERhbgPfPyl6KuQHNOHpqM/ar4le4A/ZTqS+gB/Rv9h1gHoAeWz+wHwRfuJ6ROHkW/5/oXCHT8Vc0iPpR0IL+lEbfk1qSBD7EMHmH4zmcrT3Jth8Xe7PyAg1Mmuq3nmB61VmmsgzEthHietHYbPjs9iiWnuxDqTr3Yh1J17sQ6k692IdSde7EOpOvdiHUnXuxDqTr3Yh1J17sQ6k692IdSde7EOpOvdiHUnXuxDqTr3Yh1J17sQ6k5J1y024Xi6FTJlmGz4k+NCgWcn4H5PpcpK2VM0OrAj2v1znuiFsC212fkm4K7HQE8diHMAyaUV5OvcgAAP7/mCyR/8sA/psmwqU/8OUrgoktEvO+akewzywuEhLonrQblgHkKHkdCHt+x10JcNst0TquSdYxsf8umSrtSiZ9nWWv2ziv3J/+0hLkRZ9O5uhD8mLcVtuhW9y1ISiYt/AUzaUwGT2DpwDQ16JagtnS5/NsyhrcJj8YFihY4U82i0HdzWXfgimw9yiO0fDi2knNqwSuv7fGSyT/cEmstux0+rvb8JrlqPmf3BARLGvjArpuQTtaAl3uRL8lOroNqzPLP7S/ha+MmBN/7dCmYif5e+q5lXseKe+Db7FbkAAAAAAAAAAAAGJ/y/uzG+rRVylVF8YaNkvILuIvtPNAXpiq3k2qZnuwOMsbyv9XKZViCl1pw/6QZkl8IEBt+y2/3oaZtb5qof08eTRqqJnep6nVPkf8PGlExb8NSENn1Jn0k00OJH1mTDnfrNV6pirntez7FWf10ujQBy80hIDgrpbvt8tZP2GMXki4fFkbRnQlFdPTJrPYwaCzMcv7oNap0HgA3QLxMQ43b+xY0gcnqdFUWZT/swf/NqZYgBuq0/97XBhoZHkbEzu+XmaWr1rWHb6v//+hTYrjxrrkn+JW7bSPGrOrmJrwNjE+OyVFDWaFnfpw2eJhlm7puWMaWKWv/WeFAAAA",
      u: "",
      e: 1,
    },
    {
      h: 126,
      w: 158,
      id: "image_5",
      p: "data:image/webp;base64,UklGRhAFAABXRUJQVlA4WAoAAAAQAAAAnQAAfQAAQUxQSL0CAAABgFVtb95GEATBEAzBEALBEAJBEAzBEALBEAzBEMzgu+jPXFnybiNiAuj8L8lHM4GRDgavlc8GI55Ke4OZzwaQw0E9kvIF6onIN6iHg3oe93eox5H+gLospNd8p5QSO4b7L/GS2jr+3Jtc0SfkTyGXhp/OJtE++hsiEXGuAyrnk9mbGXOD6iezK1vWZNcwARiZjWpGAFP4aIApfDTAFHvEFGBcZwO0YErs5mDednCByY2NSANGz2QBFxgu+8UO0+tu14Txnbe6YX/njSo87LxNhY+dN6nwsvMWFX4+O1R4WvRl+Jq1JTg7gy6e3qDreuCvaMpweAY9PD3Co6fA56QlwOmmpXqFpIPhdtNx+4WgojtWNAQ4PjVkz3ApqK49KUuKv+BruPZ+1rAmSscpFv4L5zpxgO1OUieAEb+J0nGIlYiIBcCMnxLOsb8QxQHM+KEdBN4Rd2DwgcR3xAN4DiR9oDiB6zzyJ7qBycchX1AD5GQiMPlgqAL3yQRgnAw1IJxMykyHcX/3/ijS4cTDobPph1MPJy95DiIs4XkMgxbHXMcRlFWvIdfuXvzFK19letZJYfEsa0iOTdZAwy8hlcWtyTqCW0JKq1ODtCankhqqLhXSG6ZDgxWROBRJdXcnk+4wnamkPflSSX/2pNOO2Y/GW1CaTlTaNTQXhDa+p3nzoq2DeTdtPq1LuzXrwm7FOto9G9e3i8Y925Fxsl+3Le9XbUv73bbR/sm0aQCb1gygYVmx4LFMLBDLkgXXL+5L2vzVKPKLYEH4RSIiCpc8bVGvdyAKvyATf0Ffp5RFpLRXEblTpI99XbehrRvf/bKsazaUdU1LWic25HWiheaybENad6mpy5INtC6qycvYiL6M1PKqSUbWVV0P9UXNCln1KLoXVSvSKlEUF4kV3NfMqIjakhGsIEpLmVSnlUz/QwBWUDggLAIAADATAJ0BKp4AfgA+bTSXR6QjIiEiGZtIgA2JZ27gwKxk47/0gPRk/aXKnejv4QfpKywTpA+GQrrd+2bgH2gi8+JhMySep/pF3hP49QuKe1Jy9nO6qpPqjx0CAVKdDVJkJEcB4EexPuY5uz161qRE5LOTggRXXlT3gO6ALIG/R8ap03zZcsrXMnXRd8UkuWVbWi+xgfFuwEifeGnUKRpOBMGoEAD+2PqDvDIVQCOK///kvABGM4Od+LlNc780CI/zECEFybWTLFf5N+n3T6KrzmJ+Vw8uf9wK0PQ1sUPjhMuibP1vlaPORHyfE3iACLMGzpZx28csGmKdJwEp2tOfKmFPyQKCKUEzbp4AqRHPpl23W/LenMH9xe1et0Gdqp7MCH1PXx2fzTmpvBPCZEBpysivZnt8mKoE+AOPII4iVbeBySRVVjikwemPTUQoHf28P67B9UEDCvBqFbjYb8FpBghtoanna2ccPCACtDTg8F+PP4gwL53067IO+LG5s1k2+1FL/ZNz2ozJjbqmSD/r+q9e1Lhkd122GFlUBj+o+AIk4CKJVKDtmR1jibYQmZa3xQJu/+XcstnfQIxVY7eBk5u8h5+LWBvmJZRE/hpu5H1aA6KQiYyFmFwHU5ls4/ysVfPzxZ+/9PP//00//+lgP//S6l77vt8Zf/Kx4NQJwG5vfuNdChoVnvYU3OV+Qu/mhSX//jowmFYAz/5l+HyAiNDOimZ/lYw6cy8wgAA=",
      u: "",
      e: 1,
    },
    {
      h: 1,
      w: 1,
      id: "image_6",
      p: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4WAoAAAAQAAAAAwAAAwAAQUxQSAkAAAABBxAREYiI/gcAVlA4IBgAAAAwAQCdASoEAAQAAUAmJaQAA3AA/v02aAA=",
      u: "",
      e: 1,
    },
    {
      h: 38,
      w: 43,
      id: "image_7",
      p: "data:image/webp;base64,UklGRpgBAABXRUJQVlA4WAoAAAAQAAAAKgAAJQAAQUxQSG4AAAABb2CQbaQz+CLMn/MhIiIn8jqwiWzbyfsooM8C0pOCCjo8oAMJv0MAEuhyeG5+JrUR/RcSJBr4AtYjjZ5ZlJllgJAhmyHt/1Bx3YfAQiY3cDhtMgxr3SsRBaDdP4kGpq//K9FMQDMBzYSUdwwsB1ZQOCAEAQAAEAcAnQEqKwAmAD5lJo9FpCIhHGtuAEAGRLYAZGjgXUf3ThmXDYj8QHqA2wHPk7jd7AG8YBXaX9p4iMVcSV+IuEAA/v4G3byh//qyf/6nQ//6lQ/eCZuY169LR7ZYTes3N7skik4KfvB05wR6AbRKHf9PYwm7YMYg+ZTLCcFR+clFBi4q/YfP/HVH//5wRH+WsX/9UWjbvjSf8otDL7AR0ZTqLomH/YdjjLFm4aJgRu2JrcV2bv6xwwIEDv/NM2ElTBn8f/gvgObDkWnwZ7Z3AuR/fmqPN1FMjwgOGfSgamXPw3qiQ3j/28fL23G+Cup5avlL0GvBZDczNhf6Tql7kBLAAAA=",
      u: "",
      e: 1,
    },
    {
      h: 90,
      w: 423,
      id: "image_8",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 1,
      w: 1,
      id: "image_9",
      p: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4WAoAAAAQAAAAAwAAAwAAQUxQSAkAAAABBxAREYiI/gcAVlA4IBgAAAAwAQCdASoEAAQAAUAmJaQAA3AA/v02aAA=",
      u: "",
      e: 1,
    },
    {
      h: 936,
      w: 637,
      id: "image_10",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
    {
      h: 132,
      w: 124,
      id: "image_11",
      p: "data:image/webp;base64,UklGRigDAABXRUJQVlA4WAoAAAAQAAAAewAAgwAAQUxQSIICAAABkJ3attxIpy2o+fUkqEGFQGCYBALBTcAJOAAn4AScgBNwAB2HE6gEKgAn4AQqgEe7reHde+53RwQEN5IUSZEZiz11PKD7ARBm4jH1T1ySi9dUQBC/ecbUMQ3Ecyauyf6fyXrtl905xvPOKft4lW0S9MZTEvTG6JA/0THHPo9J0Pu1ToLejSTBbxrcnlaSCLupkOuL1ZC+WJ0GVIBZDYhVgVcdOD3+VQlORSvf6tQzve2aWMEsic1njPFjpcF6QA5WZ7Vf2M2XjQ3KFA4xdsqpzFCknXD1lFKZIk872esro1IgpLCNvdXxoP6/0EzvzEfDvSgTANErnXIDzBTLpgAoxbD7aOrswnPylU1/qZTyQpDU7PvLpOQXILolUh7+MVPuuE9mZ2ILXC3U7W70b4DNSuCn6DbuSZTiikzUO0a7d4CZfo8MtrjmWdTLoFQdHkQnmy8qJe+ARq1MStalFKOeLJ0CPU81O3TRQ/AcqBXLYpv18SyKHdJ6685uTbMUSugFlWbPDDboJ4hiVofPj71cYr66f7GntNkQuSsKDKbxxA3g964CHN/dAH7vSsDvXZuNI7iZMjIzFzQYy40Lfo4GhR725yo+N2lvUgj0PCMpJTkzJKYm36Wk8tA6muhrl15CIRUtNVRS0y7SIWs5fUAnHgfkUMtPbv0NrwDV8qlcNtXLpUGZNCmPfvsMszy0FPsTw9b2O3DTZFPbI+YNrFNYzs9gn5+t3XyK3MxslvXMcLiqHF7m6MM2AVwp7F51NrIJYEze6OzGCpAmK1rdfQnfRlXqdd4NLvH5YBbAn5sq6ZGHB+WID1c9wE+y52bgb+oGzhK6o6c5PGby/b18/zWBYQBWUDgggAAAADAJAJ0BKnwAhAA+bTaWSCQjIiEmqACADYlpbuDAAAAYjAJJkhls2zxcAHO2bZ4uADna894exiErjPQnNFukTK5p+L3KRivEf2opFlZK2wm3BgAA/rzgAAAAoP/CeIPfof//btgA8//+IeOf8TgAh///EPHNoQqdRj//7dsAAAAA",
      u: "",
      e: 1,
    },
    {
      h: 55,
      w: 231,
      id: "image_12",
      p: "data:image/webp;base64,UklGRg4DAABXRUJQVlA4WAoAAAAQAAAA5gAANgAAQUxQSD4BAAABgGrbbt0oMNDQUNDQ0PBCw8BAQUNBQf17363jO2tQRDByG0lRZXFgT8NT+4FtSpKIVAA49caITxl64wSAKiJpWxoiBeiqI+ZgqHagiKxCuwhwqsXMmJ6AyH5RZQF0xLUYCki+UK2ob3zvep+rMnnJKVCLVWCKMmOJSrVrrAjtNU1UO6AeK8MVMkFc11gjP43KTWOtaMs/UDksVowd5cshHuvGvxaQH0OWHvB5rdmbBQesfTQoTc/TE0ie3n8KNhzp/Sd+D/DghONFqz6CFyM/UfVghtcHtWBHezwpHiUYUrbdKcp3BEdgJGXxPwvNYJrZaPbXLEdfLMfSLGdGLOe5LFctSK5BsVxRJLk+THK1n+TeDcedOI77qhx3yTl6Hgg6WLpQ9CNRdJcx9AoSdH4S9PHyc2X/kTz2LP+Y2ABWUDggqgEAADAPAJ0BKucANwA+bTKVR6QjIiEoGqnwgA2JY27fzACHLOfrptqeK3nozjrx/4D2Afl7ed/rl+IHwA/YD9jPez9AHngdQBz7fsTXQAB2es2yPJ9Owb+7fuzNNkgYD5RVzm7nN3OexGpWhpNuwU5u5zdzaQqm+qA/E4qCm1QrftPi/wAA/u2jH/oBMOZ8H4ASoXePjhDFpBFWnR8tCEjA/qoreGyvLPNlZ3aH5ioE3QeSG5UcIuM1b64E/4GkQFmUo5dYcwK8hJzsNUIhO+b2KjuVXIZqHsrrKBhKwgS8kknY+fj/t4i8Yh2Qh89oZhxPpFDSY9WRLZcAAAAQidOSC4szMhuFNRYWuHzYhnCs2B2Ow9Bn8qppXrJc3wzsr8Hvi3eoAAI/ibyvPhF0Ri+PCxAnia1FtVco5tMvP//vuv/t13pA+SeoKpwE14PHsOQBjJrcwvRnl/YgGnyYKOI05d4ydPzcBvRxybl2ak9dmx4InVJE+Cxhq4+oHYcZdnExfGFeTeAf9z8tXVOS4acMaQ4Iw7C6A20rh////BxDpCAfeggBECAac0oAAA==",
      u: "",
      e: 1,
    },
    {
      h: 495,
      w: 561,
      id: "image_13",
      p: "data:image/webp;base64,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",
      u: "",
      e: 1,
    },
  ],
  ql = [
    {
      ind: 1,
      ty: 2,
      nm: "s",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [317.888, 391.445, 0] },
        a: { a: 0, k: [70.393, 70.392, 0] },
        s: {
          k: [
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              t: 0,
              s: [100, 100, 100],
            },
            {
              i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
              o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
              t: 50,
              s: [107, 107, 100],
            },
            { t: 119, s: [100, 100, 100] },
          ],
          a: 1,
        },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_0",
    },
    {
      ind: 2,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 119, s: [360] },
          ],
        },
        p: { a: 0, k: [139.315, 229.909, 0] },
        a: { a: 0, k: [28.147, 28.147, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_1",
    },
    {
      ind: 3,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            { t: 119, s: [360] },
          ],
        },
        p: { a: 0, k: [111.419, 719.404, 0] },
        a: { a: 0, k: [28.147, 28.147, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_2",
    },
    {
      ind: 4,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [479.672, 70.273, 0] },
        a: { a: 0, k: [28.147, 28.147, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_3",
    },
    {
      ind: 5,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [667.383, 787.022, 0] },
        a: { a: 0, k: [81.375, 186.165, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_4",
    },
    {
      ind: 6,
      ty: 2,
      nm: "c",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.3, y: 0 },
              t: 0,
              s: [448.403, 824.529, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.46, y: 1 },
              o: { x: 0.3, y: 0 },
              t: 50,
              s: [448.403, 839.529, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 119, s: [448.403, 824.529, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [78.817, 62.818, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_5",
    },
    {
      ind: 7,
      ty: 2,
      nm: "t",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [0, 1020, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_6",
    },
    {
      ind: 8,
      ty: 2,
      nm: "f",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [20],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 50,
              s: [100],
            },
            { t: 119, s: [20] },
          ],
        },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [435.837, 545.578, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 50,
              s: [462.087, 545.578, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 119, s: [435.587, 545.578, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [21.31, 18.904, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_7",
    },
    {
      ind: 9,
      ty: 2,
      nm: "f",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [330.033, 545.45, 0] },
        a: { a: 0, k: [211.016, 44.601, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_8",
    },
    {
      ind: 10,
      ty: 2,
      nm: "t",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [0, 1020, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_9",
    },
    {
      ind: 11,
      ty: 2,
      nm: "e",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [0],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 50,
              s: [100],
            },
            { t: 119, s: [0] },
          ],
        },
        r: { a: 0, k: 0 },
        p: {
          k: [
            {
              i: { x: 0.833, y: 0.833 },
              o: { x: 0.167, y: 0.167 },
              t: 0,
              s: [430.076, 511.561, 0],
              ti: [0, 0, 0],
              to: [0, 0, 0],
            },
            { t: 120, s: [377.076, 513.561, 0] },
          ],
          a: 1,
        },
        a: { a: 0, k: [318.194, 467.508, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_10",
    },
    {
      ind: 12,
      ty: 2,
      nm: "s",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [20],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 50,
              s: [100],
            },
            { t: 119, s: [20] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [596.818, 390.74, 0] },
        a: { a: 0, k: [61.59, 65.818, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_11",
    },
    {
      ind: 13,
      ty: 2,
      nm: "o",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [20],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 50,
              s: [100],
            },
            { t: 119, s: [20] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [445.526, 889.642, 0] },
        a: { a: 0, k: [115.5, 27.5, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_12",
    },
    {
      ind: 14,
      ty: 2,
      nm: "y",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 0,
              s: [10],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 40,
              s: [40],
            },
            {
              i: { x: [0.833], y: [0.833] },
              o: { x: [0.167], y: [0.167] },
              t: 79,
              s: [40],
            },
            { t: 120, s: [10] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [470.688, 342.801, 0] },
        a: { a: 0, k: [280.113, 247.379, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ip: 0,
      op: 120,
      st: 0,
      refId: "image_13",
    },
  ],
  Kl = [],
  zl = {
    v: Ml,
    ip: Fl,
    op: Vl,
    fr: Xl,
    w: Wl,
    h: Tl,
    nm: Yl,
    assets: Gl,
    layers: ql,
    markers: Kl,
  },
  Ce = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delayChildren: 0.2, staggerChildren: 0.1 },
    },
  },
  je = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  Zl = () => {
    const { t: a } = q();
    Ne(void 0, "/stusd");
    const [t, i] = l.useState({}),
      [s, o] = l.useState({
        totalAssets: 0,
        totalLiabilities: 0,
        equity: 0,
        holders: 0,
        stUSDapy: 0,
        USDAstaked: 0,
        USDAPrice: 1,
        equityBuffer: 0,
      });
    l.useEffect(() => {
      M.get(G + "collaterals").then((n) => {
        L(i, { collateralsData: n.data });
      }),
        M.get(G + "savings").then((n) => {
          L(i, { savingsData: n.data });
        }),
        M.get(ue + "utilisation").then((n) => {
          L(i, { utilisationData: n.data });
        }),
        M.get(ja + "/prices").then((n) => {
          L(i, { pricesData: n.data });
        });
    }, []),
      l.useEffect(() => {
        if (
          !t.collateralsData ||
          !t.savingsData ||
          !t.utilisationData ||
          !t.pricesData
        )
          return;
        const n = {};
        for (const E of t.pricesData) n[E.token] = E.rate;
        const r = n.USD,
          c = n.USDA,
          { totalAssets: h, totalLiabilities: d } = ge(
            t.collateralsData,
            t.savingsData,
            me.USDA,
            n.USDA ? n.USDA : 1
          ),
          p = h / r,
          u = d / r,
          g = p - u,
          B = { holders: 0, transactions: 0, volume: 0, supply: 0 },
          v = t.utilisationData;
        for (const [, E] of Object.entries(v.USDA))
          (B.holders += E.holders),
            (B.transactions += E.transactions),
            (B.volume += Number.parseFloat(E.volume)),
            (B.supply += Number.parseFloat(E.supply));
        const D = Number((t.savingsData.USDA[1].apr * 100).toFixed(2));
        let w = 0;
        for (const E of Object.values(t.savingsData.USDA))
          w += Number.parseFloat(E.totalAssets);
        const N = ((g / d) * 100).toFixed(2);
        L(o, {
          totalAssets: p,
          totalLiabilities: u,
          equity: g,
          holders: B.holders,
          stUSDapy: D,
          USDAstaked: W(w),
          USDAPrice: c,
          equityBuffer: N,
        });
      }, [t.collateralsData, t.savingsData, t.utilisationData, t.pricesData]),
      ne("section");
    const A = fe({
      src: jl,
      loop: !0,
      autoplay: !0,
      className:
        "!ml-0 max-w-[150px] md:max-w-[200px] lg:!ml-auto lg:max-w-[300px]",
    });
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("section", {
          className: "product-intro",
          children: e.jsx("div", {
            className: "container",
            children: e.jsxs("div", {
              className: "gradient-in-container pb-1 pt-12 md:pt-4",
              children: [
                e.jsx(Pe, {
                  illuAnim: Jl,
                  illuBg: Dl,
                  gradientClassName: "before:gradient-green300-green700",
                  title: e.jsxs(R, {
                    children: [
                      e.jsx("span", {
                        className: "h2",
                        children: "stUSD yield-bearing stablecoin",
                      }),
                      e.jsx("br", {}),
                      "The easiest way to save and earn Dollars",
                    ],
                  }),
                  description: a(
                    "Start earning U.S. Dollar yield passively & securely with stUSD, a trustless savings solution for all"
                  ),
                  figures: [
                    {
                      figure: s.stUSDapy + "%",
                      className: "col-span-6 lg:col-span-3",
                      description: "APY",
                    },
                    {
                      figure: s.USDAstaked,
                      className: "col-span-6 lg:col-span-3",
                      description: "USDA Staked",
                    },
                  ],
                  cta: e.jsx(k, {
                    type: "button",
                    look: "primary",
                    onClick: () => window.open(C.angleSavingsUSDA),
                    children: a("Get stUSD"),
                  }),
                }),
                e.jsx("div", {
                  className:
                    "my-12 flex flex-wrap items-center gap-4 md:my-24 lg:gap-0",
                  children: e.jsxs("div", {
                    className:
                      "my-12 flex flex-wrap items-center gap-4 md:my-24 lg:my-32 lg:gap-0",
                    children: [
                      e.jsxs(x.div, {
                        initial: {
                          opacity: 0,
                          filter: "blur(20px)",
                          scale: 0.8,
                        },
                        whileInView: {
                          opacity: 1,
                          filter: "blur(0)",
                          scale: 1,
                        },
                        viewport: { once: !0, amount: 0.2 },
                        transition: { duration: 0.5 },
                        className: "w-full px-4 md:px-12 lg:w-1/2",
                        children: [
                          e.jsx("img", {
                            src: Fa,
                            alt: "USDA tokens",
                            className: "mb-6 w-20",
                          }),
                          e.jsx("h3", {
                            className:
                              "h2 strong-gradient-purple500-green700 font-normal",
                            children: e.jsx(R, {
                              children: a(
                                `stUSD is an <strong>onchain, transparent and permissionless Dollar savings product</strong> offering a ${s.stUSDapy}% yield on your USDA deposit.`
                              ),
                            }),
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "w-full px-4 md:px-8 lg:w-1/2 lg:px-0",
                        children: e.jsxs("div", {
                          className:
                            "rounded-3xl p-4 drop-shadow dark:bg-white md:p-8 md:pb-4 lg:rounded-r-none",
                          children: [
                            e.jsx("p", {
                              className:
                                "mb-4 text-right text-xl dark:text-black-500",
                              children: a("stUSD Historical Performance"),
                            }),
                            e.jsx(Da, { stablecoin: "USDA" }),
                            e.jsx("p", {
                              className:
                                "mx-auto mt-2 text-center font-bold dark:text-black-300 md:w-2/3",
                              children: a(
                                "Evolution of the value of $100 invested in the stUSD contract over time."
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                e.jsx(T, {
                  framerContainer: Ce,
                  framerItem: je,
                  invert: !0,
                  wrapperClassName: "py-8 md:py-12 lg:py-16",
                  textarea: {
                    className: "px-4 md:px-8 lg:order-2 lg:w-1/2 lg:px-12",
                    title: a("Generate passive income easily"),
                    list: {
                      picto: [
                        {
                          icon: e.jsx(m, {
                            svg: "savings",
                            alt: "savings",
                            size: "xl",
                          }),
                          text: a(
                            "Deposit USDA into the savings product, receive stUSD in exchange, and watch your assets grow effortlessly"
                          ),
                        },
                        {
                          icon: e.jsx(m, {
                            svg: "satisfaction",
                            alt: "satisfaction",
                            size: "xl",
                          }),
                          text: a(
                            "Enter freely with any deposit amount, no fees, on the blockchain of your choice"
                          ),
                        },
                        {
                          icon: e.jsx(m, {
                            svg: "output",
                            alt: "output",
                            size: "xl",
                          }),
                          text: a(
                            "Exit instantly at any time. There is no lockup period and no withdrawal fees"
                          ),
                        },
                      ],
                    },
                  },
                  image: {
                    node: e.jsx("div", {
                      className: "lg:px-8",
                      children: e.jsx(Xa, {
                        inLanding: !0,
                        savings: t.savingsData,
                        chainId: 1,
                        agTokenPrice: s.USDAPrice,
                        agToken: "USDA",
                        defaultAmount: 1e3,
                      }),
                    }),
                  },
                }),
                e.jsx(T, {
                  framerContainer: Ce,
                  framerItem: je,
                  wrapperClassName: "mb-4 lg:mb-16",
                  textarea: {
                    title: a("Get the best of TradFi and DeFi yields"),
                    list: {
                      picto: [
                        {
                          icon: e.jsx(m, {
                            svg: "interests",
                            alt: "interests",
                            size: "xl",
                          }),
                          text: a(
                            "With stUSD, get yield from the returns generated by RWAs and DeFi assets in Angle Protocol’s reserves"
                          ),
                        },
                        {
                          icon: e.jsx(m, {
                            svg: "beach",
                            alt: "beach",
                            size: "xl",
                          }),
                          text: a(
                            "Angle provides the best risk-adjusted yields among TradFi and DeFi products, we've got you covered"
                          ),
                        },
                        {
                          icon: e.jsx(m, {
                            svg: "balance",
                            alt: "balance",
                            size: "xl",
                          }),
                          text: a(
                            "stUSD yield is non dilutive: earn the same regardless of whether you deposit $1 or $100M"
                          ),
                        },
                      ],
                    },
                    button: e.jsx("div", {
                      className: "flex items-center gap-4",
                      children: e.jsx(k, {
                        type: "button",
                        look: "underlined",
                        onClick: () =>
                          window.open(C.angleAnalyticsCollaterals, "_blank"),
                        children: a("Where's the yield from?"),
                      }),
                    }),
                  },
                  image: {
                    node: e.jsx(ae, {
                      background: Ll,
                      gradientClassName: "before:gradient-blue300-blue500",
                      animation: zl,
                    }),
                    className: "flex w-full flex-col",
                  },
                }),
              ],
            }),
          }),
        }),
        e.jsx("section", {
          className: "bg-white",
          children: e.jsx("div", {
            className: "container my-12 md:my-20 lg:my-24",
            children: e.jsx(T, {
              framerContainer: Ce,
              framerItem: je,
              invert: !0,
              wrapperClassName: "my-8",
              textarea: {
                title: a("Save Dollars with peace of mind"),
                list: {
                  picto: [
                    {
                      icon: e.jsx(m, {
                        svg: "lightning",
                        alt: "lightning",
                        size: "xl",
                      }),
                      text: a(
                        "The risks associated with participating in Angle's audited savings solution are the same as those involved with owning USDA"
                      ),
                    },
                    {
                      icon: e.jsx(m, {
                        svg: "build",
                        alt: "build",
                        size: "xl",
                      }),
                      text: a(
                        `With stUSD, take advantage of USDA anti-depeg mechanisms, stable collateral backing as well as of the ${s.equityBuffer}% equity buffer for every USDA in circulation`
                      ),
                    },
                  ],
                },
                button: e.jsx(k, {
                  type: "button",
                  look: "primary",
                  onClick: () => window.open(C.angleDocsRisks, "_blank"),
                  children: a("Check USDA risks"),
                }),
              },
              image: {
                node: e.jsxs("div", {
                  className: "w-full md:w-2/3",
                  children: [
                    e.jsxs("div", {
                      className: "flex min-h-[275px] flex-1 gap-2",
                      children: [
                        e.jsxs("div", {
                          className: "flex w-1/2 flex-col",
                          children: [
                            e.jsx("p", {
                              className:
                                "mb-2 border-b pb-1 text-center text-lg font-bold dark:border-black-500 dark:text-black-500",
                              children: a("Assets"),
                            }),
                            e.jsxs("div", {
                              className:
                                "ease gradient-purple500-blue500 flex h-full w-full flex-1 items-center justify-center text-lg font-bold dark:text-black-500",
                              children: [W(s.totalAssets), "€"],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex w-1/2 flex-col",
                          children: [
                            e.jsx("p", {
                              className:
                                "mb-2 border-b pb-1 text-center text-lg font-bold dark:border-black-500 dark:text-black-500",
                              children: a("Liabilities & Equity"),
                            }),
                            e.jsxs("div", {
                              className: "flex h-full flex-1 flex-col",
                              children: [
                                e.jsxs("div", {
                                  style: {
                                    height:
                                      (s.totalLiabilities /
                                        (s.totalLiabilities + s.equity)) *
                                        100 +
                                      "%",
                                  },
                                  className:
                                    "ease gradient-blue300-blue500 flex h-full w-full items-center justify-center text-lg font-bold dark:text-black-500",
                                  children: [W(s.totalLiabilities), "€"],
                                }),
                                e.jsxs("div", {
                                  style: {
                                    minHeight: "50px",
                                    height:
                                      (s.equity /
                                        (s.totalLiabilities + s.equity)) *
                                        100 +
                                      "%",
                                  },
                                  className:
                                    "ease gradient-sand500-peach500 flex h-full w-full items-center justify-center text-lg font-bold dark:text-black-500",
                                  children: [W(s.equity), "€"],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "mt-2 flex w-full gap-4",
                      children: [
                        e.jsx("span", {
                          className:
                            "gradient-sand500-peach500 mt-1.5 h-1.5 w-20",
                        }),
                        e.jsx("p", {
                          className: "text-sm dark:text-black-300",
                          children: a(
                            "Surplus Buffer: This is what would be left in the protocol if all stakeholders redeemed or repaid their USDA debt."
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                className: "mx-auto flex w-full flex-col",
              },
            }),
          }),
        }),
        e.jsx(He, {
          framerContainer: Ce,
          framerItem: je,
          title: a("Built to be composable"),
          description: a(
            "Your savings deposits with Angle are tokenized. Leverage stUSD across the entire DeFi ecosystem."
          ),
          text: a("Wondering if stUSD is for you or your protocol?"),
          buttons: [
            e.jsx(k, {
              type: "button",
              look: "primary",
              onClick: () => window.open(C.angleDiscordInvitation, "_blank"),
              children: a("Contact us"),
            }),
          ],
          animation: A,
        }),
        e.jsx(pe, {
          embedded: !1,
          faqs: [
            "What is stUSD?",
            "Where does the stUSD yield come from?",
            "What are the stUSD risks?",
            "How much does stUSD cost?",
            "How does stUSD work?",
            "Where is my USDA capital?",
            "When will I start earning USDA?",
            "Do I need to manage my stUSD position?",
            "How to secure stUSD tokens?",
          ],
          docUrl: C.angleSavingsDocs,
        }),
      ],
    });
  },
  Wa = "/assets/stars-background-05b2badd.png",
  _l = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Wa },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  $l = "/assets/angle-mark-topview-filled-6ad6bfad.svg",
  eo = "/assets/angle-peach-blue-71c7031d.svg",
  ao = "/assets/big-star-b28df32c.svg",
  so = "/assets/round-star-e2a32524.svg",
  to = "/assets/small-star-b398af48.svg",
  Ao = (a, t) => {
    const i = a[t];
    return i
      ? typeof i == "function"
        ? i()
        : Promise.resolve(i)
      : new Promise((s, o) => {
          (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
            o.bind(null, new Error("Unknown variable dynamic import: " + t))
          );
        });
  },
  io = ({ index: a, month: t, year: i, content: s }) => {
    const [o, A] = l.useState(0),
      [n, r] = l.useState(0),
      [c, h] = l.useState(0),
      [d, p] = l.useState();
    return (
      l.useEffect(() => {
        async function u() {
          const g = await Ao(
            Object.assign({
              "../../assets/images/releases/april2022.png": () =>
                O(() => import("./april2022-8b02a1ed.js"), []),
              "../../assets/images/releases/april2023.png": () =>
                O(() => import("./april2023-7322ad8a.js"), []),
              "../../assets/images/releases/april2024.png": () =>
                O(() => import("./april2024-1c270af5.js"), []),
              "../../assets/images/releases/august2021.png": () =>
                O(() => import("./august2021-7ce29402.js"), []),
              "../../assets/images/releases/august2022.png": () =>
                O(() => import("./august2022-857121b8.js"), []),
              "../../assets/images/releases/august2023.png": () =>
                O(() => import("./august2023-f7cd3145.js"), []),
              "../../assets/images/releases/december2021.png": () =>
                O(() => import("./december2021-d2f90d11.js"), []),
              "../../assets/images/releases/december2022.png": () =>
                O(() => import("./december2022-535adcae.js"), []),
              "../../assets/images/releases/december2023.png": () =>
                O(() => import("./december2023-6b6b18ee.js"), []),
              "../../assets/images/releases/february2022.png": () =>
                O(() => import("./february2022-859429a6.js"), []),
              "../../assets/images/releases/february2023.png": () =>
                O(() => import("./february2023-d4dcfc77.js"), []),
              "../../assets/images/releases/january2022.png": () =>
                O(() => import("./january2022-11a366f3.js"), []),
              "../../assets/images/releases/january2023.png": () =>
                O(() => import("./january2023-c56ff0a4.js"), []),
              "../../assets/images/releases/january2024.png": () =>
                O(() => import("./january2024-2e0fc67b.js"), []),
              "../../assets/images/releases/july2021.png": () =>
                O(() => import("./july2021-2e8b39a9.js"), []),
              "../../assets/images/releases/july2022.png": () =>
                O(() => import("./july2022-0898d1de.js"), []),
              "../../assets/images/releases/july2023.png": () =>
                O(() => import("./july2023-93f8d4b9.js"), []),
              "../../assets/images/releases/june2022.png": () =>
                O(() => import("./june2022-29f735a9.js"), []),
              "../../assets/images/releases/june2023.png": () =>
                O(() => import("./june2023-5762cf90.js"), []),
              "../../assets/images/releases/march2022.png": () =>
                O(() => import("./march2022-c0a376ae.js"), []),
              "../../assets/images/releases/march2023.png": () =>
                O(() => import("./march2023-5f055348.js"), []),
              "../../assets/images/releases/may2022.png": () =>
                O(() => import("./may2022-ba90d541.js"), []),
              "../../assets/images/releases/may2023.png": () =>
                O(() => import("./may2023-0c502658.js"), []),
              "../../assets/images/releases/november2021.png": () =>
                O(() => import("./november2021-999fee78.js"), []),
              "../../assets/images/releases/november2022.png": () =>
                O(() => import("./november2022-cd03daca.js"), []),
              "../../assets/images/releases/november2023.png": () =>
                O(() => import("./november2023-fb50c5ca.js"), []),
              "../../assets/images/releases/october2021.png": () =>
                O(() => import("./october2021-2239cad8.js"), []),
              "../../assets/images/releases/october2022.png": () =>
                O(() => import("./october2022-e013b8be.js"), []),
              "../../assets/images/releases/october2023.png": () =>
                O(() => import("./october2023-0055d468.js"), []),
              "../../assets/images/releases/september2021.png": () =>
                O(() => import("./september2021-0fc456f9.js"), []),
              "../../assets/images/releases/september2022.png": () =>
                O(() => import("./september2022-9f50dd57.js"), []),
              "../../assets/images/releases/september2023.png": () =>
                O(() => import("./september2023-6b0edde4.js"), []),
              "../../assets/images/releases/stars-background.png": () =>
                O(() => Promise.resolve().then(() => _l), void 0),
            }),
            `../../assets/images/releases/${t.toLowerCase()}${i}.png`
          );
          p(g.default);
        }
        u();
      }, [t, i]),
      l.useEffect(() => {
        h(((D, w) => Math.floor(Math.random() * (w - D + 1) + D))(-30, 30));
        const g = document.querySelector("main.relative"),
          B = document.querySelectorAll("section.month-releases")[a],
          v = () => {
            const w = window.pageYOffset + window.innerHeight / 2,
              E = g.offsetTop + B.offsetTop + B.offsetHeight / 2,
              V = w - E;
            r((-1 * V) / 6), a % 2 === 1 ? A((-1 * V) / 75) : A(V / 75);
          };
        return (
          v(),
          window.addEventListener("scroll", Je.throttle(v, 25)),
          window.addEventListener("resize", Je.throttle(v, 25)),
          () => {
            window.removeEventListener("scroll", v),
              window.removeEventListener("resize", v);
          }
        );
      }, []),
      e.jsx("section", {
        className:
          "month-releases relative flex w-full flex-wrap items-center justify-between md:my-8 lg:my-16 xl:my-12",
        children: e.jsxs(e.Fragment, {
          children: [
            e.jsx("div", {
              className: `image relative flex w-full items-center lg:w-5/12 before:rotate-[${c}deg]`,
              style: { transform: `rotate(${o}deg)` },
              children: e.jsx("div", {
                className: "container z-1",
                children: e.jsx("img", {
                  className: "",
                  src: d ?? "",
                  alt: `${t} ${i}`,
                }),
              }),
            }),
            e.jsx("div", {
              className: "text relative w-full py-16 lg:w-5/12 lg:py-0",
              style: { top: `${n}px`, transform: `rotate(${-1 * o}deg)` },
              children: e.jsxs("div", {
                className: "container",
                children: [
                  e.jsx("h5", {
                    className:
                      "dark:gradient-multiple w-fit rounded-full px-4 py-1 uppercase",
                    children: `${t} ${i}`,
                  }),
                  e.jsx("ul", {
                    className: "mt-2 list-none pl-0 dark:text-sand-500",
                    children: Object.values(s).map((u, g) =>
                      e.jsx(
                        "li",
                        {
                          className: "h6 font-bold",
                          children: e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("span", {
                                className: "dark:text-peach-500",
                                children: "—",
                              }),
                              " ",
                              e.jsx("span", {
                                dangerouslySetInnerHTML: { __html: u },
                              }),
                            ],
                          }),
                        },
                        g
                      )
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
      })
    );
  },
  Xe = [
    {
      month: "July",
      year: 2021,
      content: {
        1: "Introduction of the Angle Protocol and a new mechanism for stablecoins",
        2: "First public appearance at ETHCC",
      },
    },
    {
      month: "August",
      year: 2021,
      content: {
        1: "Angle Stablecoins series in four parts",
        2: 'Release of the <a class="underlined" href="https://angrybird4837s-organization.gitbook.io/angle-money/">Angle Documentation and developers tools</a>',
      },
    },
    {
      month: "September",
      year: 2021,
      content: {
        1: "Angle Protocol live on Rinkeby testnet",
        2: '<a class="underlined" href="https://analytics.angle.money/">Angle Analytics</a> is live',
        3: "Angle Labs raises $5M with a16z, Fabric, Wintermute and others",
      },
    },
    {
      month: "October",
      year: 2021,
      content: {
        1: "Audits finalized and smart contracts open-sourced",
        2: "Release of various research articles on Angle blog",
        3: "Angle in ETHLisbon",
      },
    },
    {
      month: "November",
      year: 2021,
      content: {
        1: "Angle Protocol launch: EURA and ANGLE tokens are live!",
        2: "EURA becomes the biggest EUR stablecoin, 100m tot supply",
        3: "3EUR pool is created on Curve with EURT and EURS",
      },
    },
    {
      month: "December",
      year: 2021,
      content: {
        1: "Major integrations like StakeDAO, Convex, Olympus...",
        2: "ANGLE tokenomics upgrade announcement",
      },
    },
    {
      month: "January",
      year: 2022,
      content: {
        1: "veANGLE release",
        2: "EURA listing on Euler",
        3: "EURA as <strong>off-ramp</strong> currency with <strong>Mt Pelerin integration</strong>",
      },
    },
    {
      month: "February",
      year: 2022,
      content: {
        1: "Angle 4-of-6 Governance multisig implementation",
        2: "EURA Multichain integration",
        3: "Angle community Content Contest",
      },
    },
    {
      month: "March",
      year: 2022,
      content: {
        1: "EURA available to lend and borrow on Aave V3",
        2: "Angle UX improved with the Router contract release",
        3: "Stake DAO veANGLE Liquid Lockers release",
      },
    },
    {
      month: "April",
      year: 2022,
      content: {
        1: "ETH available as collateral in the Core module",
        2: "First EURA AMOs on Euler and Aave",
        3: "Angle yield improved with new folding strategies",
      },
    },
    {
      month: "May",
      year: 2022,
      content: {
        1: 'Beginning of the <a href="https://blog.angle.money" class="underlined">Angle Explains articles</a>',
        2: "EURA crosses 5bn€ in transfers",
        3: "<strong>EURA peg is maintained despite UST collapse</strong>",
      },
    },
    {
      month: "June",
      year: 2022,
      content: {
        1: '<a class="underlined" href="https://app-angle-money.vercel.app/borrow">Angle Borrowing module</a> released',
        2: '<strong><a class="underlined" href="https://app-angle-money.vercel.app">Angle new App UI</a></strong>',
        3: "EURA flash-loans",
      },
    },
    {
      month: "July",
      year: 2022,
      content: {
        1: "Angle Borrow deployment on Arbitrum, Optimism and Polygon.",
        2: "Release of the Angle API",
        3: "<strong>EthCC in Paris, the hometown of many contributors</strong>",
      },
    },
    {
      month: "August",
      year: 2022,
      content: {
        1: "Custom LayerZero integration to bridge EURA",
        2: "New incentive mechanism for EURA UniV3 positions",
        3: '<strong>New UI look for <a class="underlined" href="https://analytics.angle.money/">Angle Analytics</a></strong>',
      },
    },
    {
      month: "September",
      year: 2022,
      content: {
        1: "Start of EURA AMO on Curve",
        2: 'Release of our <a class="underlined" href="https://www.angle.money/labs-projects/carbon-impact">Carbon Impact computer</a>',
        3: "<strong>Ethereum merge</strong>",
      },
    },
    {
      month: "October",
      year: 2022,
      content: {
        1: 'Simplification of <a class="underlined" href="https://app-angle-money.vercel.app/borrow">Angle Borrow UI</a>',
        2: 'New <a class="underlined" href="https://blog.angle.money">in-house blog</a>',
        3: "Reduction in ANGLE emissions",
      },
    },
    {
      month: "November",
      year: 2022,
      content: {
        1: "Minimum amount of EURA required to borrow removed",
        2: "EURA crosses 60% of EUR-stablecoins DEX trades market share",
        3: "<strong>1 year anniversary of EURA on Ethereum mainnet</strong>",
      },
    },
    {
      month: "December",
      year: 2022,
      content: {
        1: "Custom LayerZero integration for ANGLE",
        2: "EURA crosses 8bn€ in transfers",
        3: "<strong>EURA integrations on Celo and Avalanche</strong>",
      },
    },
    {
      month: "January",
      year: 2023,
      content: {
        1: "Deployment of Angle Borrowing Module on Avalanche",
        2: '<a href="https://twitter.com/Angle0xProtocol" target="_blank" rel="noopener noreferrer" class="underlined">Productive assets as collateral on Angle,</a> with improved transaction UX',
        3: 'Introducing <a href="https://www.youtube.com/watch?v=DDoY_CUrd7M&t=1s" target="_blank" rel="noopener noreferrer" class="underlined"><strong>Angle video</strong></a>',
      },
    },
    {
      month: "February",
      year: 2023,
      content: {
        1: "Angle Optimizer Strategy V2",
        2: "EURA crosses the 70% market share in DEX trade",
        3: 'Angle is <a href="https://lenster.xyz/u/angleprotocol"  target="_blank" rel="noopener noreferrer" class="underlined">live on Lenster</a>, @angleprotocol',
        4: "EURA integrated on Transak <strong>to withdraw EUR to bank accounts</strong>",
      },
    },
    {
      month: "March",
      year: 2023,
      content: {
        1: "Protocol resists USDC depeg",
        2: "EURA seniority within the Protocol",
        3: "Protocol paused after the Euler hack",
      },
    },
    {
      month: "April",
      year: 2023,
      content: {
        1: "Protocol reopens and EURA back to peg",
        2: "Protocol profit distribution to Standard Liquidity Providers",
        3: "Hedging Agents settlement",
        4: "Launch of Merkl",
      },
    },
    {
      month: "May",
      year: 2023,
      content: {
        1: "Full Angle reopening ",
        2: "First incentives on Merkl",
        3: "Release of Transmuter, Angle new backing mechanism",
      },
    },
    {
      month: "June",
      year: 2023,
      content: {
        1: "New EURA integrations",
        2: "ANGLE incentives on Merkl",
        3: "Introduction of Angle V2: Transmuter",
        4: "Launch of the Angle Education program for influencers",
      },
    },
    {
      month: "July",
      year: 2023,
      content: {
        1: "Angle V2 contracts audit",
        2: "Uniswap, Sushi and Retro incentives program on Merkl",
        3: "Release of our stablecoin Assessment framework",
      },
    },
    {
      month: "August",
      year: 2023,
      content: {
        1: "Angle V2 and Transmuter are now fully live",
        2: "Release of EURA balance sheet",
        3: "Enjoy Merkl on new chains",
        4: "Savings Rate Governance Discussion",
      },
    },
    {
      month: "September",
      year: 2023,
      content: {
        1: "stEUR is live!",
        2: "New metrics tracking on Angle Analytics",
        3: "Odos integration of the Transmuter",
      },
    },
    {
      month: "October",
      year: 2023,
      content: {
        1: "stEUR rate increase",
        2: "stEUR live on Gnosis Chain and Arbitrum",
        3: "Unblock integration for seamlessly buying EURA with a bank transfer",
      },
    },
    {
      month: "November",
      year: 2023,
      content: {
        1: 'Release of <a href="https://app.merkl.xyz/stats" target="_blank" rel="noopener" class="underlined">Merkl stats</a>',
        2: 'Brand <a href="https://angle.money" target="_blank" rel="noopener" class="underlined">new landing page</a>',
        3: 'EURA integration into <a href="https://holyheld.com/" target="_blank" rel="noopener noreferrer" class="underlined">Holyheld</a> to spend EUR with no fees',
      },
    },
    {
      month: "December",
      year: 2023,
      content: {
        1: 'Release of <a href="https://analytics.angle.money/bridge" target="_blank" rel="noopener" class="underlined">Angle Analytics Bridge page</a> to track the flow of EURA crosschain transfers',
        2: '<a href="https://blog.angle.money/understanding-the-balance-sheet-of-stablecoin-protocols" target="_blank" rel="noopener" class="underlined">Guide</a> on how to understand the balance sheets of stablecoins',
        3: "Arbitrum STIP distributions",
        4: "Release of our <strong>Xmas Game</strong> on Swap and Bridge pages",
      },
    },
    {
      month: "January",
      year: 2024,
      content: {
        1: "EURA rebranding (formerly agEUR)",
        2: "USDA & stUSD announcement with private beta",
      },
    },
    {
      month: "April",
      year: 2024,
      content: {
        1: "USDA and stUSD official launch",
        2: "EURA/USDA pool seeded on Uniswap",
        3: 'Release of the "Have I been fleeced" yield calculator',
        4: "Cross-chain transmuter (stUSD natively available on Base and Arbitrum)",
      },
    },
  ],
  wa = [...new Set(Xe.map((a) => a.year))].reverse(),
  Re = [
    { image: eo, width: "w-12 animate-[scaleStamps_10s_ease-in-out_infinite]" },
    { image: ao, width: "w-4 animate-[spinStamps_30s_linear_infinite]" },
    { image: so, width: "w-3 animate-[scaleStamps_10s_ease-in-out_infinite]" },
    { image: to, width: "w-4 animate-[spinStamps_30s_linear_infinite]" },
  ],
  no = () => {
    const { t: a } = q();
    l.useEffect(() => {
      const i = document.querySelector("div.stamps"),
        s = document.querySelector("main.relative"),
        o = (n, r) => {
          const c = document.createElement("img"),
            h = Math.round(Math.random() * (Re.length - 1));
          c.setAttribute("src", Re[h].image),
            c.setAttribute("class", Re[h].width),
            (c.style.left = n - window.innerWidth / 2 + "px"),
            (c.style.top = r + "px"),
            i.appendChild(c);
        },
        A = (n) => {
          o(n.pageX, n.pageY - s.offsetTop);
        };
      return (
        document.addEventListener("click", A),
        () => {
          document.removeEventListener("click", A);
        }
      );
    }, []),
      ne("aside", 0.1);
    const t = We();
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("aside", {
          className: "relative w-full pb-0 pt-8 dark:text-center md:pt-32",
          children: [
            e.jsx(Ya, {
              className: "tilt pointer-events-none absolute left-0 top-0",
              tiltMaxAngleX: 10,
              tiltMaxAngleY: 10,
              perspective: 1e3,
              transitionSpeed: 2e3,
              scale: 1,
              gyroscope: !0,
              reset: !1,
              children: e.jsx("img", { src: Wa, alt: "Stars background" }),
            }),
            e.jsx("div", {
              className: "container",
              children: e.jsxs("div", {
                className: "pointer-events-none",
                children: [
                  e.jsx("h4", {
                    className:
                      "animate-tracking mx-auto uppercase dark:text-sand-500",
                    children: a("ANGLE MONTHLY"),
                  }),
                  e.jsx("p", {
                    className:
                      "animate-tracking-tight content__title display2 stroke-fill mx-auto mb-4 dark:text-sand-500 lg:mb-0",
                    children: a("RELEASES"),
                  }),
                  e.jsxs("h6", {
                    className: "mx-auto w-full dark:text-sand-500 lg:w-3/5",
                    children: [
                      a(
                        "We like to ship new products and integrate with other top notch protocols."
                      ),
                      e.jsx("br", {}),
                      e.jsx("span", {
                        className: "mt-2 inline-block dark:text-purple-500",
                        children: a(
                          "Scroll our timeline down or select a year"
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "years-tags sticky top-24 z-5 w-full dark:text-center",
          children: e.jsx("div", {
            className: "container mt-8 flex justify-center gap-2",
            children: wa.map((i, s) =>
              e.jsx(
                Ga,
                {
                  smooth: !0,
                  to: `${t.pathname}#${i}`,
                  children: e.jsx(k, {
                    type: "tag",
                    look: "secondary",
                    size: "large",
                    className: "z-10 dark:bg-black-500",
                    enabled: !1,
                    children: i,
                  }),
                },
                s
              )
            ),
          }),
        }),
        e.jsx("main", {
          className: "relative pt-16 lg:pt-40",
          children: e.jsxs(e.Fragment, {
            children: [
              e.jsxs("div", {
                className:
                  "timeline absolute left-1/2 top-16 z-2 mx-auto hidden h-full w-2/12 -translate-x-1/2 transform flex-col items-center lg:flex",
                children: [
                  e.jsxs("div", {
                    className: "sticky top-1/2",
                    children: [
                      e.jsx("img", {
                        className: "z-2 w-20 rotate-180",
                        src: $l,
                        alt: "Angle",
                      }),
                      e.jsx("div", {
                        className: "relative",
                        children: e.jsx("span", {
                          className:
                            "absolute left-1/2 z-3 mx-auto block h-[50vh] w-[2px] -translate-x-1/2 transform dark:bg-black-500",
                        }),
                      }),
                    ],
                  }),
                  e.jsx("span", {
                    className:
                      "absolute z-[-1] block h-full w-px translate-y-4 transform bg-purple-500",
                  }),
                ],
              }),
              wa.map((i, s) =>
                e.jsxs(
                  "div",
                  {
                    children: [
                      e.jsx("div", {
                        className: "container flex w-full justify-center",
                        children: e.jsx("p", {
                          id: i.toString(),
                          className:
                            "display2 -mb-12 ml-3 !tracking-widest text-stroke-purple-500 text-stroke-2 lg:pt-12",
                          children: i,
                        }),
                      }),
                      Xe.filter((o) => o.year === i)
                        .reverse()
                        .map((o, A) =>
                          e.jsx(
                            io,
                            {
                              index: A + Xe.filter((n) => n.year > i).length,
                              month: o.month,
                              year: o.year.toString(),
                              content: o.content,
                            },
                            A
                          )
                        ),
                    ],
                  },
                  s
                )
              ),
              e.jsx("div", {
                className: "stamps absolute left-1/2 top-0 w-1/2",
              }),
            ],
          }),
        }),
      ],
    });
  },
  lo = "/assets/powered-by-merkl-labs-09797910.svg";
function oo() {
  var U;
  q();
  const { tokens: a } = ys(),
    [t, i] = l.useState(),
    [s, o] = l.useState(),
    { data: A } = da("lostYield", [t], { age: "5m" }),
    { data: n } = da("collaterals", { age: "10m" }),
    [r, c] = l.useState(),
    h = l.useMemo(() => {
      var j, I, H, P;
      const Q =
        (P =
          (H =
            (I =
              (j = n == null ? void 0 : n.treasury) == null
                ? void 0
                : j.USDA) == null
              ? void 0
              : I["1"]) == null
            ? void 0
            : H.bIB01) == null
          ? void 0
          : P.apr;
      return Q ? Number.parseFloat(Q) : void 0;
    }, [n]),
    d = l.useMemo(() => {
      var j, I, H, P;
      const Q =
        (P =
          (H =
            (I =
              (j = n == null ? void 0 : n.transmuter) == null
                ? void 0
                : j.USDA) == null
              ? void 0
              : I["1"]) == null
            ? void 0
            : H.steakUSDC) == null
          ? void 0
          : P.apr;
      return Q ? Number.parseFloat(Q) : void 0;
    }, [n]);
  l.useEffect(() => {
    async function Q(H, P, f) {
      try {
        const J = await (
          await fetch(`${G}savingsApr?from=${H}&to=${P}`)
        ).json();
        J && f(J);
      } catch (J) {
        console.error("Could not fetch average APR", J);
      }
    }
    const j = Math.floor(Ye().unix()),
      I = j - 30 * 86400;
    Q(I, j, (H) =>
      c(
        H != null && H.USDA
          ? Number.parseFloat(H == null ? void 0 : H.USDA)
          : void 0
      )
    );
  }, []);
  const p = l.useMemo(
      () =>
        Object.entries(A ?? {}).reduce(
          (Q, [j, I]) => Object.assign(Q, { [j]: I == null ? void 0 : I[t] }),
          {}
        ),
      [A, t]
    ),
    u = l.useMemo(
      () =>
        t &&
        (!A ||
          Object.values(A ?? {}).some(
            (Q) => (Q == null ? void 0 : Q[t]) === void 0
          )),
      [A, t]
    ),
    [g, B, v] = l.useMemo(() => {
      const Q = Object.entries(p).reduce((I, [H, P]) => {
          var f, J;
          for (const z of Object.keys(P ?? {})) {
            const y =
              (J =
                (f = a == null ? void 0 : a[Number.parseInt(H)]) == null
                  ? void 0
                  : f[Bs.getAddress(z)]) == null
                ? void 0
                : J.symbol;
            y && I.add(y);
          }
          return I;
        }, new Set()),
        j = {};
      for (const I of Q)
        j[I] = [
          e.jsx(Ks, { className: "flex items-center gap-1", symbol: I }),
          "minmax(100px,150px)",
          "justify-center",
        ];
      return Xs({
        chain: ["Chain", "minmax(150px,1fr)", "justify-start"],
        ...j,
        amount: [
          e.jsx(se, {
            title: e.jsxs(e.Fragment, {
              children: [
                "Computed based on the 30 Day average APY for ",
                e.jsx(m, { className: "mb-1", token: "stUSD" }),
                " stUSD and the last 30 Day average balance in USDC and USDT",
              ],
            }),
            children: "Yearly Lost Revenue",
          }),
          "minmax(100px,200px)",
          "justify-end",
        ],
      });
    }, [p, a]),
    D = Ge(),
    w = l.useMemo(
      () =>
        Object.values(p ?? {}).reduce(
          (Q, j) =>
            Q + Object.values(j ?? {}).reduce((I, H) => I + (H.total ?? 0), 0),
          0
        ),
      [p]
    ),
    N = l.useMemo(() => w * r, [w, r]),
    E = t && !u && N !== 0,
    V = t && !u && N === 0,
    b = `Oh no! 😬 I missed out on ${D(N, {
      overrideCurrency: "USD",
    })} by holding non-yielding stablecoins like USDC or USDT in the last 30 days — instead of @AngleProtocol's stUSD!%0ACheck if you’ve been fleeced 💸:`;
  return (
    qa(),
    e.jsx("div", {
      className: "container",
      children: e.jsxs("div", {
        className: `${
          E ? "mb-16" : "mb-56"
        } border-gradient-multiple ease mx-auto mt-32 max-h-fit w-full before:!rounded-xl before:!p-0 before:md:!p-[3px] lg:w-10/12`,
        children: [
          e.jsxs("header", {
            className:
              "flex w-full flex-wrap items-center gap-6 md:p-12 lg:gap-0 lg:p-16 ",
            children: [
              e.jsx("img", {
                src: Ua,
                className: "w-1/4 lg:mx-auto lg:w-1/3 lg:px-12",
                alt: "tokens and question marks",
              }),
              e.jsxs("div", {
                className: "w-full md:w-2/3",
                children: [
                  e.jsx("h1", {
                    className: "mb-2",
                    children: "Have I been fleeced?",
                  }),
                  e.jsx("p", {
                    className: "mb-6 text-lg",
                    children:
                      "Check how much you've missed out on by holding non-yielding USDC or USDT.",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsxs("div", {
                        className: "mb-2 flex flex-wrap gap-2",
                        children: [
                          e.jsx(ie.Address, {
                            className: "flex-1",
                            placeholder: "Enter an Ethereum address",
                            size: "l",
                            state: [s, o],
                          }),
                          e.jsx(k, {
                            disabled: !ra(s),
                            onClick: () => {
                              ra(s) && i(s);
                            },
                            rightIcon: e.jsx(m, { mui: "Search" }),
                            children: "Fleeced?",
                          }),
                        ],
                      }),
                      e.jsx("img", {
                        src: lo,
                        alt: "powered by merkl labs",
                        className: "w-56",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("main", {
            className: "w-full",
            children: [
              u &&
                e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(Ue, { className: "my-8 md:my-0" }),
                    e.jsx("div", {
                      className: "mx-auto",
                      children: e.jsx(Ws, {}),
                    }),
                  ],
                }),
              (E || V) &&
                e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(Ue, { className: "my-8 md:my-0" }),
                    e.jsxs("div", {
                      className: "md:p-12 lg:px-16 ",
                      children: [
                        e.jsx("div", {
                          className: "mb-4",
                          children: V
                            ? e.jsxs("div", {
                                className: "mb-16",
                                children: [
                                  e.jsx("h4", {
                                    className: "mb-4 dark:text-sand-500",
                                    children:
                                      "Good news! You didn't miss any earnings on your stablecoins!",
                                  }),
                                  e.jsxs("p", {
                                    className: "mb-4 dark:text-sand-500",
                                    children: [
                                      "Want to earn a safe USD yield? ",
                                      e.jsx("br", {}),
                                      "Angle’s stUSD is the best option available — it's a liquid, robust, and yield-bearing stablecoin.",
                                    ],
                                  }),
                                  e.jsx(k, {
                                    leftIcon: e.jsx(m, {
                                      size: "m",
                                      token: "stUSD",
                                    }),
                                    onClick: () => {
                                      window.open(
                                        "https://safary.link/DbR8jENBfHcZ/Fleeced?_learn_more_stUSD_02/07/24",
                                        "_blank"
                                      );
                                    },
                                    children: "Get more info on stUSD now!",
                                  }),
                                ],
                              })
                            : e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx("p", {
                                    className: "font-bold",
                                    children:
                                      "Wow! Over the last 30 days, you could have earned:",
                                  }),
                                  e.jsxs("ul", {
                                    className: "ml-4",
                                    children: [
                                      e.jsxs("li", {
                                        children: [
                                          e.jsx("span", {
                                            className: "underlined font-bold",
                                            children: D(N / 12, {
                                              overrideCurrency: "USD",
                                            }),
                                          }),
                                          " ",
                                          "by holding ",
                                          e.jsx(m, {
                                            className: "mb-1",
                                            token: "stUSD",
                                          }),
                                          " Angle's stUSD at",
                                          " ",
                                          e.jsxs("span", {
                                            className:
                                              "underlined text-gradient-sand500-peach500 font-bold",
                                            children: [
                                              W((r ?? 0) * 100),
                                              "% APY",
                                            ],
                                          }),
                                        ],
                                      }),
                                      e.jsxs("li", {
                                        children: [
                                          e.jsx("span", {
                                            className: "underlined font-bold",
                                            children: D((w * d) / 12, {
                                              overrideCurrency: "USD",
                                            }),
                                          }),
                                          " ",
                                          "by lending ",
                                          e.jsx(m, {
                                            className: "mb-1",
                                            token: "USDC",
                                          }),
                                          " USDC on the",
                                          " ",
                                          e.jsx(m, {
                                            className: "mb-1",
                                            token: "MORPHO",
                                          }),
                                          " Steakhouse Metamorpho vault at",
                                          " ",
                                          e.jsxs("span", {
                                            className:
                                              "underlined text-gradient-sand500-peach500 font-bold",
                                            children: [
                                              W((d ?? 0) * 100),
                                              "% APY",
                                            ],
                                          }),
                                        ],
                                      }),
                                      e.jsxs("li", {
                                        children: [
                                          e.jsx("span", {
                                            className: "underlined font-bold",
                                            children: D((w * h) / 12, {
                                              overrideCurrency: "USD",
                                            }),
                                          }),
                                          " ",
                                          "by holding ",
                                          e.jsx(m, {
                                            className: "mb-1",
                                            token: "bIB01",
                                          }),
                                          " US Treasury Bills at",
                                          " ",
                                          e.jsxs("span", {
                                            className:
                                              "underlined text-gradient-sand500-peach500 font-bold",
                                            children: [
                                              W((h ?? 0) * 100),
                                              "% APY",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                        }),
                        !V &&
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: e.jsx(k, {
                                  look: "secondary",
                                  leftIcon: e.jsx(m, { size: "s", svg: "x" }),
                                  onClick: () =>
                                    window.open(
                                      `https://x.com/intent/post?text=${b}&url=${`https://angle.money${S.savingsLossAnalyzer}`}`,
                                      "_blank"
                                    ),
                                  children: "Share on X and earn Prots",
                                }),
                              }),
                              e.jsxs("div", {
                                className: "my-8 md:my-16",
                                children: [
                                  e.jsx("h4", {
                                    className: "mb-2 dark:text-sand-500",
                                    children: "Stop losing revenue!",
                                  }),
                                  e.jsxs("p", {
                                    className: "mb-4",
                                    children: [
                                      "Swap your USDC for stUSD in a few clicks with no fees.",
                                      e.jsx("br", {}),
                                      "Start earning yield immediately with no further action required.",
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "flex flex-wrap items-center gap-4",
                                    children: e.jsx(k, {
                                      leftIcon: e.jsx(m, {
                                        size: "m",
                                        token: "stUSD",
                                      }),
                                      onClick: () => {
                                        window.open(
                                          "https://safary.link/BErgyjW1C3GY/Fleeced?_swap_stUSD_02/07/24",
                                          "_blank"
                                        );
                                      },
                                      children: "Swap for stUSD now!",
                                    }),
                                  }),
                                ],
                              }),
                              e.jsx(Ue, { className: "my-8" }),
                              " ",
                              e.jsxs("div", {
                                className: "mb-16",
                                children: [
                                  e.jsx(se, {
                                    className: "mb-3 mt-8 w-fit",
                                    title:
                                      "Estimated amount of USDC and USDT held on average over the last 30 days.",
                                    children: e.jsx("h4", {
                                      className: "dark:text-sand-500",
                                      children: "Average holdings breakdown",
                                    }),
                                  }),
                                  e.jsx(g, {
                                    unsortable: v,
                                    loading: u,
                                    container: !1,
                                    fallback: e.jsx(e.Fragment, {
                                      children:
                                        "No USDC/USDT holdings detected over the last 30 days",
                                    }),
                                    className: "w-full [&>*]:font-bold ",
                                    children:
                                      N === 0 ||
                                      (U = Object.entries(p ?? {})) == null
                                        ? void 0
                                        : U.map(([Q, j]) => {
                                            var f, J;
                                            const I = {
                                              USDCColumn: "-",
                                              USDTColumn: "-",
                                            };
                                            let H = 0;
                                            for (const [z, y] of Object.entries(
                                              j ?? {}
                                            )) {
                                              const F =
                                                (J =
                                                  (f =
                                                    a == null
                                                      ? void 0
                                                      : a[
                                                          Number.parseInt(Q)
                                                        ]) == null
                                                    ? void 0
                                                    : f[z]) == null
                                                  ? void 0
                                                  : J.symbol;
                                              (I[`${F}Column`] =
                                                y != null && y.total
                                                  ? D(
                                                      y == null
                                                        ? void 0
                                                        : y.total,
                                                      {
                                                        overrideCurrency: "USD",
                                                      }
                                                    )
                                                  : "-"),
                                                (H +=
                                                  (y == null
                                                    ? void 0
                                                    : y.total) ?? 0);
                                            }
                                            const P = H * r;
                                            return e.jsx(B, {
                                              chainColumn: e.jsx(Gs, {
                                                className:
                                                  "inline-flex items-center gap-2",
                                                chainId: Number.parseInt(Q),
                                              }),
                                              amountColumn: P
                                                ? D(P, {
                                                    overrideCurrency: "USD",
                                                  })
                                                : "-",
                                              ...I,
                                            });
                                          }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        e.jsx(pe, {
                          embedded: !0,
                          faqs: [
                            "What is stUSD?",
                            "Where does the stUSD yield come from?",
                            "What are the stUSD risks?",
                            "How much does stUSD cost?",
                          ],
                          docUrl: C.angleSavingsDocs,
                        }),
                        " ",
                      ],
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    })
  );
}
const ro = ({ headerHeight: a }) => {
    const t = We(),
      [i, s] = l.useState(t),
      { ssr: o } = va(),
      [A, n] = l.useState(o ? "" : "fadeIn");
    return (
      l.useEffect(() => {
        t !== i && !o && n("fadeOut");
      }, [t, i, o]),
      e.jsx("div", {
        className: `main-content ${A}`,
        onAnimationEnd: () => {
          A === "fadeOut" && (n("fadeIn"), s(t));
        },
        style: { marginTop: `-${a}px` },
        children: e.jsxs(Ka, {
          children: [
            e.jsx(X, { path: S.home, element: e.jsx(xi, {}) }),
            e.jsx(X, { path: S.savingsLossAnalyzer, element: e.jsx(oo, {}) }),
            e.jsx(X, { path: S.USDA, element: e.jsx(pl, {}) }),
            e.jsx(X, {
              path: "/agusd",
              element: e.jsx(ke, { to: S.USDA, replace: !0 }),
            }),
            e.jsx(X, { path: S.stUSD, element: e.jsx(Zl, {}) }),
            e.jsx(X, { path: S.EURA, element: e.jsx(bn, {}) }),
            e.jsx(X, {
              path: "/ageur",
              element: e.jsx(ke, { to: S.EURA, replace: !0 }),
            }),
            e.jsx(X, { path: S.stEUR, element: e.jsx(o0, {}) }),
            e.jsx(X, { path: S.labsProjects, element: e.jsx(uA, {}) }),
            e.jsx(X, { path: S.releases, element: e.jsx(no, {}) }),
            e.jsx(X, { path: S.about, element: e.jsx(dA, {}) }),
            e.jsx(X, { path: S.portfolioSimulation, element: e.jsx(EA, {}) }),
            e.jsx(X, { path: S.carbonImpact, element: e.jsx(BA, {}) }),
            e.jsx(X, { path: S.privacy, element: e.jsx(qs, {}) }),
            e.jsx(X, { path: S.terms, element: e.jsx(Os, {}) }),
            e.jsx(X, { path: "/*/*", element: e.jsx(ke, { to: S.home }) }),
            e.jsx(X, { path: "*", element: e.jsx(ke, { to: S.home }) }),
          ],
        }),
      })
    );
  },
  co = ({ onTop: a = !0, text: t, href: i, btnText: s }) => {
    const [o, A] = l.useState(!1);
    return a
      ? e.jsx("aside", {
          className: `banner ${
            o ? "close" : ""
          } ease z-10 dark:bg-purple-300 dark:text-black-500 w-full`,
          children: e.jsxs("div", {
            className: "container flex items-center justify-center py-2 gap-2",
            children: [
              e.jsxs("div", {
                className:
                  "flex-1 flex flex-wrap lg:flex-nowrap items-center gap-2 lg:gap-4 text-sm md:text-base justify-center",
                children: [
                  e.jsx(Ie, {
                    color: "golden",
                    className: "hidden md:flex",
                    children: "NEW",
                  }),
                  e.jsx("p", {
                    className: "hidden md:block text-sm md:text-base",
                    children: t,
                  }),
                  e.jsxs(k, {
                    look: "underlined",
                    className:
                      "dim whitespace-nowrap leading-snug !font-normal !pb-0 dark:text-black-500 hover:dark:!text-black-500",
                    onClick: () => {
                      window.open(i, "_blank");
                    },
                    rightIcon: e.jsx(m, {
                      className: "dark:!text-black-500 !w-3",
                      mui: "ArrowForward",
                    }),
                    children: [
                      e.jsx("span", { className: "md:hidden", children: t }),
                      e.jsx("span", {
                        className: "hidden md:block",
                        children: s,
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(k, {
                className: "hover:dark:!text-black-500 dim",
                look: "text",
                onlyIcon: e.jsx(m, { mui: "Close" }),
                onClick: () => {
                  A(!0);
                },
                "aria-label": "Banner link to action",
              }),
            ],
          }),
        })
      : e.jsx("div", {
          className:
            "angle-notification relative flex items-start rounded-md border border-l-[6px] p-4 dark:border-blue-500",
          children: e.jsxs("div", {
            className: "pr-4 flex flex-col gap-2 items-start",
            children: [
              e.jsx(Ie, {
                color: "golden",
                className: "hidden md:flex",
                children: "NEW",
              }),
              e.jsx("p", {
                className: "hidden md:block text-sm md:text-base",
                children: t,
              }),
              e.jsxs(k, {
                type: "button",
                look: "underlined",
                className:
                  "dim whitespace-nowrap leading-snug !font-normal !pb-0 dark:text-black-500 hover:dark:!text-black-500",
                onClick: () => {
                  window.open(i, "_blank");
                },
                rightIcon: e.jsx(m, {
                  className: "dark:!text-black-500 !w-3",
                  mui: "ArrowForward",
                }),
                "aria-label": "Banner link to action",
                children: [
                  e.jsx("span", { className: "md:hidden", children: t }),
                  e.jsx("span", { className: "hidden md:block", children: s }),
                ],
              }),
            ],
          }),
        });
  },
  Io = ({ children: a, light: t = !0 }) => {
    const { t: i } = q(),
      [s, o] = l.useState(0),
      A = We(),
      [n, r] = l.useState(t),
      [c, h] = l.useState(null),
      [d, p] = l.useState(ca("PRICE_REF") !== null ? ca("PRICE_REF") : "EUR"),
      u = l.useCallback(
        Je.debounce(async () => {
          h(await vs());
        }, 100),
        []
      );
    return (
      l.useEffect(() => {
        u();
      }, [u]),
      e.jsx(Cs.Provider, {
        value: { priceReference: d, setPriceReference: p, ...c },
        children: e.jsx(js, {
          children: e.jsx(zs, {
            ready: !1,
            children: e.jsx(Ts, {
              children: e.jsx(Ds, {
                children: e.jsx(za, {
                  setIsLight: r,
                  beforeComponent: e.jsxs(e.Fragment, {
                    children: [
                      // Zs === "landing" &&
                      //   (A == null ? void 0 : A.pathname) !==
                      //     S.savingsLossAnalyzer &&
                      //   e.jsx(co, {
                      //     text: i(
                      //       "Check your lost revenue by holding USDC or USDT"
                      //     ),
                      //     href: "https://safary.link/ZplJOiOXuDBM/Fleeced?-homepage_banner-02/07/2024",
                      //     btnText: i("Check now"),
                      //   }),
                      e.jsx(Za, {
                        hideOnScroll: !0,
                        setHeaderHeight: o,
                        app: "angle",
                        logo: e.jsx(_a, {
                          logo: n
                            ? e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(m, {
                                    size: "xxl",
                                    className: "!w-40 hidden md:block",
                                    svg: "angleTextLight",
                                    alt: "angle text logo",
                                  }),
                                  e.jsx(m, {
                                    size: "xl",
                                    className: "!w-fit md:hidden my-2",
                                    svg: "angleBlueGradient",
                                    alt: "angle text logo",
                                  }),
                                ],
                              })
                            : e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(m, {
                                    size: "xxl",
                                    className: "!w-40 hidden md:block",
                                    svg: "angleText",
                                    alt: "angle text logo",
                                  }),
                                  e.jsx(m, {
                                    size: "xl",
                                    className: "!w-fit md:hidden my-2",
                                    svg: "angleBlueGradient",
                                    alt: "angle text logo",
                                  }),
                                ],
                              }),
                          app: "merkl",
                          nav: $a,
                          collapsible: !0,
                        }),
                        rightNav: {
                          extra: e.jsx("div", {
                            className:
                              "hidden lg:flex items-center gap-4 lg:gap-6",
                            children: Object.values(es)
                              .filter((g) => g.location === "header")
                              .map((g) => {
                                if (g.subLinks) {
                                  const B = Object.values(g.subLinks).reduce(
                                    (v, D) => (
                                      D.category &&
                                        !v.includes(D.category) &&
                                        v.push(D.category),
                                      v
                                    ),
                                    []
                                  );
                                  return e.jsx(
                                    as,
                                    {
                                      look: "text",
                                      trigger: ["hover"],
                                      placement: "bottomLeft",
                                      contentClassName: "no-supp-div",
                                      content: [
                                        e.jsx(
                                          "ul",
                                          {
                                            className: `header-nav mt-1 ${
                                              B.length > 0
                                                ? "flex gap-8 py-4"
                                                : ""
                                            } list-none rounded-2xl px-3 py-2 dark:bg-white dark:bg-opacity-95`,
                                            children:
                                              B.length > 0
                                                ? B.map((v, D) =>
                                                    e.jsxs(
                                                      "div",
                                                      {
                                                        children: [
                                                          e.jsx("p", {
                                                            className:
                                                              "mb-1 text-xs font-bold dark:text-black-300",
                                                            children: v,
                                                          }),
                                                          Object.values(
                                                            g.subLinks
                                                          )
                                                            .filter(
                                                              (w) =>
                                                                w.category === v
                                                            )
                                                            .map((w, N) =>
                                                              e.jsx(
                                                                "li",
                                                                {
                                                                  children:
                                                                    e.jsx(K, {
                                                                      to: w.route,
                                                                      end: !0,
                                                                      className:
                                                                        "relative flex font-bold",
                                                                      children:
                                                                        e.jsx(
                                                                          "span",
                                                                          {
                                                                            dangerouslySetInnerHTML:
                                                                              {
                                                                                __html:
                                                                                  w.children,
                                                                              },
                                                                          }
                                                                        ),
                                                                    }),
                                                                },
                                                                N
                                                              )
                                                            ),
                                                        ],
                                                      },
                                                      D
                                                    )
                                                  )
                                                : e.jsx(e.Fragment, {
                                                    children: Object.values(
                                                      g.subLinks
                                                    ).map((v) =>
                                                      v.external
                                                        ? e.jsx(
                                                            "li",
                                                            {
                                                              children: e.jsxs(
                                                                "a",
                                                                {
                                                                  className:
                                                                    "flex items-center font-bold dark:text-black-500",
                                                                  href: v.route,
                                                                  target:
                                                                    "_blank",
                                                                  rel: "noopener noreferrer",
                                                                  children: [
                                                                    v.children,
                                                                    e.jsx(m, {
                                                                      mui: "CallMadeOutlined",
                                                                      size: "s",
                                                                      className:
                                                                        "ml-1",
                                                                    }),
                                                                  ],
                                                                }
                                                              ),
                                                            },
                                                            v.key
                                                          )
                                                        : e.jsx(
                                                            "li",
                                                            {
                                                              children: e.jsx(
                                                                K,
                                                                {
                                                                  to: v.route,
                                                                  end: !0,
                                                                  className:
                                                                    "relative flex font-bold",
                                                                  children:
                                                                    e.jsx(
                                                                      "span",
                                                                      {
                                                                        dangerouslySetInnerHTML:
                                                                          {
                                                                            __html:
                                                                              v.children,
                                                                          },
                                                                      }
                                                                    ),
                                                                }
                                                              ),
                                                            },
                                                            v.key
                                                          )
                                                    ),
                                                  }),
                                          },
                                          "nav-list-id"
                                        ),
                                      ],
                                      children: e.jsxs("div", {
                                        className:
                                          "flex cursor-pointer items-center gap-1  font-bold",
                                        children: [
                                          g.children,
                                          e.jsx(m, {
                                            mui: "KeyboardArrowDownOutlined",
                                            size: "s",
                                          }),
                                        ],
                                      }),
                                    },
                                    g.key
                                  );
                                }
                                return g.external
                                  ? e.jsx(
                                      k,
                                      {
                                        look: "text",
                                        children: e.jsxs("a", {
                                          className:
                                            "flex items-center font-bold",
                                          href: g.route,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          children: [
                                            g.children,
                                            e.jsx(m, {
                                              mui: "CallMadeOutlined",
                                              size: "s",
                                              className: "ml-1",
                                            }),
                                          ],
                                        }),
                                      },
                                      g.key
                                    )
                                  : e.jsx(
                                      K,
                                      {
                                        to: g.route,
                                        end: !0,
                                        className:
                                          "dim relative flex font-bold",
                                        children: g.children,
                                      },
                                      g.key
                                    );
                              }),
                          }),
                          launchAppBtn: !0,
                        },
                      }),
                      e.jsx(Es, {}),
                    ],
                  }),
                  afterComponent: e.jsx(ss, {
                    logo: n
                      ? e.jsx(m, {
                          svg: "angleTextLight",
                          className: "h-auto",
                          size: "xxxl",
                        })
                      : e.jsx(m, {
                          svg: "angleText",
                          className: "h-auto",
                          size: "xxxl",
                        }),
                    app: "angle",
                  }),
                  children: a ?? e.jsx(ro, { headerHeight: s }),
                }),
              }),
            }),
          }),
        }),
      })
    );
  };
export { Io as default };
