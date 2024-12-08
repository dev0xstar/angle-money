import { I as e, f as h, N as v, ad as M, Q as S } from "./react-fa804298.js";
import {
  br as B,
  B as k,
  bH as R,
  I as a,
  R as r,
  z as n,
  u as P,
  N,
} from "./index-61771442.js";
import { D as T } from "./lodash-52c9deff.js";
import { a as x, i as H } from "./index-834edce6.js";
import { D as G, a as L, m as O } from "./style-829a44f9.js";
const se = ["s", "m", "l"];
function $({
  content: o,
  placement: l,
  className: s,
  parentClassName: i,
  childClassName: d,
  trigger: g,
  onOpenChange: m,
  open: c,
  ...t
}) {
  return e.jsx(G, {
    disabled: t.disabled,
    trigger: g || ["click"],
    placement: l,
    onOpenChange: m,
    open: c,
    overlay: e.jsx("div", {
      className: i,
      children: h.Children.map(o, (u, f) =>
        e.jsx("div", {
          className: `flex items-center gap-2 font-bold ${
            d == null ? void 0 : d(f)
          }`,
          children: u,
        })
      ),
    }),
    overlayClassName: s,
    children: t.children,
  });
}
function w({
  default: o,
  placement: l,
  override: s,
  contentClassName: i,
  parentClassName: d,
  childClassName: g,
  content: m,
  trigger: c,
  look: t = "secondary",
  size: u,
  arrow: f,
  onOpenChange: j,
  open: D,
  ...U
}) {
  const p = `dropdown ${B([t, "secondary"], [u, "m"], i)}`;
  return e.jsx($, {
    content: m,
    trigger: c,
    className: p,
    parentClassName: d,
    childClassName: g,
    placement: l,
    disabled: U.disabled,
    onOpenChange: j,
    open: D,
    children:
      s ??
      e.jsx(k, {
        ...U,
        type: "button",
        look: t,
        size: R(u),
        rightIcon: f && e.jsx(a, { mui: "KeyboardArrowDown" }),
      }),
  });
}
const W = [r.home, r.EURA, r.stEUR, r.USDA, r.stUSD, r.merkl],
  z = ["light"];
function I(o) {
  return x === "landing" &&
    W.map((s) => s.toLowerCase().replace("/", "")).includes(
      o == null ? void 0 : o.split("/")[1].toLowerCase()
    )
    ? ["light"]
    : [];
}
const F = ({ className: o }) =>
    e.jsxs("div", {
      className: `${o} sub-footer copyright flex flex-wrap items-center`,
      children: [
        e.jsxs("p", {
          className: "mr-4 text-sm",
          children: [
            "©",
            new Date().getFullYear(),
            " Angle Labs Inc. All rights reserved.",
          ],
        }),
        // x !== "analytics" &&
        //   e.jsxs("span", {
        //     className: "flex gap-4",
        //     children: [
        //       !1,
        //       e.jsx(v, {
        //         className: "py-0 text-sm hover:dark:text-peach-500",
        //         to: r.terms,
        //         "aria-label": "Terms and Conditions",
        //         children: "Terms",
        //       }),
        //       e.jsx(v, {
        //         className: "py-0 text-sm hover:dark:text-peach-500",
        //         to: r.privacy,
        //         "aria-label": "Privacy Policy",
        //         children: "Privacy",
        //       }),
        //     ],
        //   }),
      ],
    }),
  E = ({ className: o, app: l = "angle" }) => {
    const [s, i] = h.useState(!1);
    return (
      h.useEffect(() => {
        i(I(location.pathname).includes("light"));
      }, []),
      e.jsxs("div", {
        className: `${o} socials flex flex-wrap items-center gap-4`,
        children: [
          e.jsx(k, {
            className: "dim",
            look: "text",
            onClick: () =>
              window.open(
                l === "angle" ? n.angleDiscord : n.merklDiscord,
                "_blank"
              ),
            onlyIcon: e.jsx(a, {
              size: "l",
              svg: s ? "discordLight" : "discord",
            }),
          }),
          e.jsx(k, {
            className: "dim",
            look: "text",
            onClick: () =>
              window.open(
                l === "angle" ? n.angleTwitter : n.merklTwitter,
                "_blank"
              ),
            onlyIcon: e.jsx(a, { size: "l", svg: s ? "xLogoLight" : "xLogo" }),
          }),
          // e.jsx(k, {
          //   className: "dim",
          //   look: "text",
          //   onClick: () => window.open(n.angleGithub, "_blank"),
          //   onlyIcon: e.jsx(a, {
          //     size: "l",
          //     svg: s ? "githubLight" : "github",
          //   }),
          // }),
        ],
      })
    );
  },
  le = ({ className: o, logo: l, app: s }) =>
    e.jsx("footer", {
      className: `${o} site-footer mt-auto`,
      children: e.jsx("div", {
        className: "border-t dark:border-blue-500",
        children: e.jsxs("div", {
          className:
            "container flex flex-wrap justify-center md:justify-between items-center py-2 md:py-3 gap-y-2 gap-x-8 md:gap-x-4",
          children: [
            e.jsx(k, {
              className: "dim !hidden lg:!flex",
              look: "text",
              onClick: () =>
                window.open(
                  x === "merkl" ? n.merklLanding : n.angleLanding,
                  "_blank"
                ),
              onlyIcon: l,
            }),
            e.jsx(F, { className: "order-3 lg:order-2" }),
            e.jsx(E, { app: s, className: "order-2 lg:order-3" }),
          ],
        }),
      }),
    }),
  ce = [
    {
      category: "App",
      links: [
        {
          route: r.savingsRate,
          image: e.jsx(a, { svg: "animatedEarn" }),
          children: "Earn",
          key: crypto.randomUUID(),
        },
        {
          route: r.swap,
          image: e.jsx(a, { svg: "swapLogo" }),
          children: "Swap",
          key: crypto.randomUUID(),
        },
        {
          route: r.bridge,
          image: e.jsx(a, { svg: "bridgeLogo" }),
          children: "Bridge",
          key: crypto.randomUUID(),
        },
        {
          route: r.buy,
          image: e.jsx(a, { svg: "buyLogo" }),
          children: "Buy",
          key: crypto.randomUUID(),
        },
        {
          route: r.borrow,
          image: e.jsx(a, { svg: "borrowMenuIcon" }),
          children: "Borrow / Leverage",
          key: crypto.randomUUID(),
        },
        {
          route: r.earn,
          image: e.jsx(a, { svg: "yieldMenuIcon" }),
          children: "Yields",
          key: crypto.randomUUID(),
        },
      ],
    },
    {
      category: "Protocol",
      links: [
        {
          route: r.pointsProgram,
          image: e.jsx(a, { svg: "protsMenuIcon" }),
          children: "Prots Leaderboard",
          key: crypto.randomUUID(),
        },
        {
          route: r.lock,
          image: e.jsx(a, { svg: "lockMenuIcon" }),
          children: "Lock",
          key: crypto.randomUUID(),
        },
        {
          route: r.governance,
          image: e.jsx(a, { svg: "governanceMenuIcon" }),
          children: "Governance",
          key: crypto.randomUUID(),
        },
      ],
    },
  ],
  ie = [
    {
      route: n.angleDocs,
      children: "Docs",
      location: "header",
      image: e.jsx(a, { svg: "docsMenuIcon" }),
      external: !0,
      key: crypto.randomUUID(),
    },
    {
      route: n.angleAnalytics,
      children: "Analytics",
      location: "header",
      image: e.jsx(a, { svg: "analyticsMenuIcon" }),
      external: !0,
      key: crypto.randomUUID(),
    },
    {
      route: n.angleGovernance,
      children: "Forum",
      location: "header",
      image: e.jsx(a, { svg: "forumMenuIcon" }),
      external: !0,
      key: crypto.randomUUID(),
    },
    {
      route: n.angleDevelopers,
      children: "Developers",
      location: "header",
      image: e.jsx(a, { svg: "developersMenuIcon" }),
      external: !0,
      key: crypto.randomUUID(),
    },
    {
      route: r.audits,
      children: "Audits",
      location: "header",
      image: e.jsx(a, { svg: "auditsMenuIcon" }),
      key: crypto.randomUUID(),
    },
    {
      route: n.merklLanding,
      children: "Merkl",
      location: "header",
      image: e.jsx(a, { svg: "merklMenuIcon" }),
      external: !0,
      key: crypto.randomUUID(),
    },
    {
      route: n.angleAssets,
      children: "Branding",
      location: "header",
      image: e.jsx(a, { svg: "brandingMenuIcon" }),
      external: !0,
      key: crypto.randomUUID(),
    },
  ],
  de = [
    {
      children: "Products",
      location: "header",
      key: crypto.randomUUID(),
      subLinks: [
        {
          route: r.USDA,
          children:
            'USDA<span class="link-description">Dollar stablecoin</span>',
          location: "header",
          category: "Stablecoins",
          key: crypto.randomUUID(),
        },
        {
          route: r.stUSD,
          children:
            'stUSD<br /><span class="link-description">Dollar savings </span>',
          location: "header",
          category: "Savings",
          key: crypto.randomUUID(),
        },
        {
          route: r.EURA,
          children: 'EURA<span class="link-description">Euro stablecoin</span>',
          location: "header",
          category: "Stablecoins",
          key: crypto.randomUUID(),
        },
        {
          route: r.stEUR,
          children:
            'stEUR<br /><span class="link-description">Euro savings </span>',
          location: "header",
          category: "Savings",
          key: crypto.randomUUID(),
        },
      ],
    },
    {
      children: "Learn",
      location: "header",
      key: crypto.randomUUID(),
      subLinks: [
        {
          route: n.angleBlog,
          children: "Blog",
          location: "header",
          key: crypto.randomUUID(),
          external: !0,
        },
        {
          route: n.angleGuides,
          children: "User guides",
          location: "header",
          key: crypto.randomUUID(),
          external: !0,
        },
        {
          route: n.angleDocs,
          external: !0,
          children: "Docs",
          location: "header",
          key: crypto.randomUUID(),
        },
        {
          route: n.angleWhitepapers,
          children: "Whitepapers",
          location: "header",
          key: crypto.randomUUID(),
          external: !0,
        },
      ],
    },
  ],
  me = [
    {
      category: "Products",
      links: [
        {
          route: r.USDA,
          children:
            'USDA<span class="link-description">Dollar stablecoin</span>',
          category: "Stablecoins",
          key: crypto.randomUUID(),
        },
        {
          route: r.stUSD,
          children:
            'stUSD<br /><span class="link-description">Dollar savings </span>',
          category: "Savings",
          key: crypto.randomUUID(),
        },
        {
          route: r.EURA,
          children: 'EURA<span class="link-description">Euro stablecoin</span>',
          category: "Stablecoins",
          key: crypto.randomUUID(),
        },
        {
          route: r.stEUR,
          children:
            'stEUR<br /><span class="link-description">Euro savings </span>',
          category: "Savings",
          key: crypto.randomUUID(),
        },
      ],
    },
    {
      category: "Learn",
      links: [
        {
          route: n.angleBlog,
          children: "Blog",
          key: crypto.randomUUID(),
          external: !0,
        },
        {
          route: n.angleGuides,
          children: "User guides",
          key: crypto.randomUUID(),
          external: !0,
        },
        {
          route: n.angleDocs,
          external: !0,
          children: "Docs",
          key: crypto.randomUUID(),
        },
        {
          route: n.angleDevelopers,
          external: !0,
          children: "Developers",
          key: crypto.randomUUID(),
        },
        {
          route: n.angleWhitepapers,
          children: "Whitepapers",
          key: crypto.randomUUID(),
          external: !0,
        },
      ],
    },
    {
      category: "Security",
      links: [
        {
          route: n.angleGithub,
          external: !0,
          children: "Github",
          key: crypto.randomUUID(),
        },
        {
          route: n.angleAudits,
          external: !0,
          children: "Audits",
          key: crypto.randomUUID(),
        },
        {
          route: n.immunefi,
          children: "Bug Bounty",
          key: crypto.randomUUID(),
          external: !0,
        },
      ],
    },
    {
      category: "About",
      links: [
        { route: r.about, children: "About", key: crypto.randomUUID() },
        {
          route: r.labsProjects,
          children: "Angle Public Goods",
          key: crypto.randomUUID(),
        },
        {
          route: n.angleAnalytics,
          external: !0,
          children: "Analytics",
          key: crypto.randomUUID(),
        },
      ],
    },
  ],
  ue = [
    {
      route: r.home,
      children: "Overview",
      location: "header",
      key: crypto.randomUUID(),
    },
    {
      route: r.collaterals,
      children: "Collaterals",
      location: "header",
      key: crypto.randomUUID(),
    },
    {
      route: r.balanceSheet,
      children: "Balance Sheet",
      location: "header",
      key: crypto.randomUUID(),
    },
    {
      route: r.treasury,
      children: "Treasury",
      image: e.jsx(a, { svg: "treasuryLogo" }),
      location: "help",
      key: crypto.randomUUID(),
    },
    {
      route: r.bridge,
      children: "Bridge",
      image: e.jsx(a, { svg: "bridgeLogo" }),
      location: "help",
      key: crypto.randomUUID(),
    },
    {
      route: r.vaults,
      children: "Vaults & Liquidations",
      image: e.jsx(a, { svg: "vaultsLogo" }),
      location: "help",
      key: crypto.randomUUID(),
    },
    {
      route: r.lastEvents,
      children: "Events",
      image: e.jsx(a, { svg: "lastEventsLogo" }),
      location: "help",
      key: crypto.randomUUID(),
    },
    {
      route: r.angleVEangle,
      children: "ANGLE/veANGLE",
      image: e.jsx(a, { svg: "angleVEangleLogo" }),
      location: "help",
      key: crypto.randomUUID(),
    },
    {
      route: n.angleDocs,
      external: !0,
      children: "Docs",
      image: e.jsx(a, { svg: "docsMenuIcon" }),
      location: "help",
      key: crypto.randomUUID(),
    },
    {
      route: n.angleAbout,
      image: e.jsx(a, { svg: "angleLabsMenuIcon" }),
      external: !0,
      children: "About Angle Labs",
      location: "help",
      key: crypto.randomUUID(),
    },
  ],
  ge = [
    {
      category: "Analytics",
      links: [
        {
          route: r.home,
          children: "Overview",
          image: e.jsx(a, { svg: "overviewMenuIcon" }),
          key: crypto.randomUUID(),
        },
        {
          route: r.collaterals,
          children: "Collaterals",
          image: e.jsx(a, { svg: "EURALogo" }),
          key: crypto.randomUUID(),
        },
        {
          route: r.balanceSheet,
          children: "Balance Sheet",
          image: e.jsx(a, { svg: "balanceSheetLogo" }),
          key: crypto.randomUUID(),
        },
        {
          route: r.treasury,
          children: "Treasury",
          image: e.jsx(a, { svg: "treasuryLogo" }),
          key: crypto.randomUUID(),
        },
        {
          route: r.bridge,
          children: "Bridge",
          image: e.jsx(a, { svg: "bridgeLogo" }),
          key: crypto.randomUUID(),
        },
        {
          route: r.vaults,
          children: "Vaults & Liquidations",
          image: e.jsx(a, { svg: "vaultsLogo" }),
          key: crypto.randomUUID(),
        },
        {
          route: r.lastEvents,
          children: "Events",
          image: e.jsx(a, { svg: "lastEventsLogo" }),
          key: crypto.randomUUID(),
        },
        {
          route: r.angleVEangle,
          children: "ANGLE/veANGLE",
          image: e.jsx(a, { svg: "angleVEangleLogo" }),
          key: crypto.randomUUID(),
        },
      ],
    },
    {
      category: "Learn",
      links: [
        {
          route: n.angleDocs,
          external: !0,
          children: "Docs",
          image: e.jsx(a, { svg: "docsMenuIcon" }),
          location: "help",
          key: crypto.randomUUID(),
        },
        {
          route: n.angleAbout,
          image: e.jsx(a, { svg: "angleLabsMenuIcon" }),
          external: !0,
          children: "About Angle Labs",
          location: "help",
          key: crypto.randomUUID(),
        },
        {
          route: n.angleAssets,
          external: !0,
          image: e.jsx(a, { svg: "brandingMenuIcon" }),
          location: "help",
          children: "Branding",
          key: crypto.randomUUID(),
        },
      ],
    },
  ],
  pe = [
    {
      category: "Merkl",
      links: [
        {
          route: r.user,
          image: e.jsx(a, { svg: "dashboardMenuIcon" }),
          children: "Dashboard",
          location: "header",
          key: crypto.randomUUID(),
        },
        {
          route: r.home,
          image: e.jsx(a, { svg: "opportunitiesMenuIcon" }),
          children: "Opportunities",
          location: "header",
          key: crypto.randomUUID(),
        },
        {
          route: r.createCampaign,
          children: "Create Campaign",
          image: e.jsx(a, { svg: "createCampaignMenuIcon" }),
          location: "header",
          key: crypto.randomUUID(),
        },
        {
          route: x === "merkl" ? r.stats : n.merklStats,
          children: "Stats",
          image: e.jsx(a, { svg: "statsMenuIcon" }),
          location: "layermenu",
          key: crypto.randomUUID(),
        },
        {
          route: r.integrations,
          children: "Integrations",
          image: e.jsx(a, { svg: "integrationsMenuIcon" }),
          location: "layermenu",
          key: crypto.randomUUID(),
        },
        {
          route: r.status,
          children: "Status",
          image: e.jsx(a, { svg: "statusMenuIcon" }),
          location: "layermenu",
          key: crypto.randomUUID(),
        },
      ],
    },
    {
      category: "Discover",
      links: [
        {
          route: n.merklDocs,
          external: !0,
          image: e.jsx(a, { svg: "docsMenuIcon" }),
          children: "Docs",
          location: "layermenu",
          key: crypto.randomUUID(),
        },
        {
          route: n.angleWebsite,
          image: e.jsx(a, { svg: "angleLabsMenuIcon" }),
          external: !0,
          children: "About Angle Labs",
          location: "layermenu",
          key: crypto.randomUUID(),
        },
        {
          route: n.angleAssets,
          children: "Branding",
          location: "layermenu",
          image: e.jsx(a, { svg: "brandingMenuIcon" }),
          external: !0,
          key: crypto.randomUUID(),
        },
      ],
    },
  ],
  he = [
    {
      children: "For Web3 projects",
      location: "header",
      key: crypto.randomUUID(),
      subLinks: [
        {
          route: r.web3Projects,
          children: "Why use Merkl?",
          location: "header",
          key: crypto.randomUUID(),
        },
        {
          route: n.merklCreate,
          children: "Set up a campaign",
          location: "header",
          key: crypto.randomUUID(),
          external: !0,
        },
      ],
    },
    {
      route: r.stories,
      children: "Case Studies",
      location: "header",
      key: crypto.randomUUID(),
    },
    {
      children: "Learn",
      location: "header",
      key: crypto.randomUUID(),
      subLinks: [
        {
          route: n.merklDocs,
          children: "Docs",
          location: "header",
          key: crypto.randomUUID(),
          external: !0,
        },
        {
          route: n.angleAbout,
          children: "About Angle Labs",
          location: "header",
          key: crypto.randomUUID(),
          external: !0,
        },
      ],
    },
  ],
  ye = [
    {
      category: "Merkl",
      links: [
        {
          route: r.home,
          children: "For users",
          location: "header",
          key: crypto.randomUUID(),
        },
        {
          route: r.web3Projects,
          children: "For web3 projects",
          location: "header",
          key: crypto.randomUUID(),
        },
        {
          route: n.merklCreate,
          external: !0,
          children: "Set up a campaign",
          location: "header",
          key: crypto.randomUUID(),
        },
        {
          route: r.stories,
          children: "Case Studies",
          location: "header",
          key: crypto.randomUUID(),
        },
      ],
    },
    {
      category: "Learn",
      links: [
        {
          route: n.merklDocs,
          external: !0,
          image: e.jsx(a, { svg: "docsMenuIcon" }),
          location: "help",
          children: "Docs",
          key: crypto.randomUUID(),
        },
        {
          route: n.angleAbout,
          external: !0,
          image: e.jsx(a, { svg: "angleLabsMenuIcon" }),
          location: "help",
          children: "About Angle Labs",
          key: crypto.randomUUID(),
        },
        {
          route: n.angleAssets,
          external: !0,
          image: e.jsx(a, { svg: "brandingMenuIcon" }),
          location: "help",
          children: "Branding",
          key: crypto.randomUUID(),
        },
      ],
    },
  ],
  _ = 360,
  q = 576,
  K = 1040,
  V = 1350,
  X = 1600,
  Y = 2065,
  Q = { sm: _, md: q, lg: K, xlg: V, xl: X, xxl: Y },
  J = ({ collapsible: o = !1, nav: l, app: s, setOpen: i }) => {
    const [d, g] = h.useState(null);
    return e.jsxs("div", {
      className: "layermenu z-999 flex flex-col w-full",
      children: [
        e.jsx("main", {
          className: "flex-1 overflow-y-scroll w-full",
          children: o
            ? Object.values(l).map((m, c) =>
                e.jsx(
                  L,
                  {
                    accordion: !0,
                    className:
                      "no-bg w-full border-b dark:border-black-100 border-solid last:border-b-0 !pb-1",
                    ghost: !0,
                    activeKey: d,
                    children: e.jsx(
                      L.Panel,
                      {
                        showArrow: !1,
                        header: e.jsxs("p", {
                          onClick: () => {
                            g(d === c ? null : c);
                          },
                          className:
                            "font-bold border-b dark:border-black-100 border-solid last:border-b-0 flex pt-1.5 pb-0 items-center justify-between gap-1",
                          children: [
                            m.category,
                            e.jsx(a, {
                              mui: "KeyboardArrowRightOutlined",
                              className: `${d === c && "rotate-90"} `,
                            }),
                          ],
                        }),
                        children: e.jsx("ul", {
                          className: "layermenu-subnav list-none pl-0",
                          children: Object.values(m.links).map((t, u) =>
                            t.external
                              ? e.jsx(
                                  "li",
                                  {
                                    className:
                                      "border-b dark:border-black-100 border-solid last:border-b-0",
                                    children: e.jsx("a", {
                                      onClick: () => i(!1),
                                      className:
                                        "flex items-center gap-1 font-bold",
                                      href: t.route,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      children: t.children,
                                    }),
                                  },
                                  u
                                )
                              : e.jsx(
                                  "li",
                                  {
                                    className:
                                      "border-b dark:border-black-100 border-solid last:border-b-0",
                                    children: e.jsx(
                                      v,
                                      {
                                        onClick: () => i(!1),
                                        to: t.route,
                                        end: !0,
                                        className:
                                          "relative flex gap-1 font-bold",
                                        children: e.jsx("span", {
                                          className: "flex gap-2 items-center",
                                          dangerouslySetInnerHTML: {
                                            __html: t.children,
                                          },
                                        }),
                                      },
                                      t.key
                                    ),
                                  },
                                  u
                                )
                          ),
                        }),
                      },
                      c
                    ),
                  },
                  `collapsible-logo-nav-${c}`
                )
              )
            : l.map((m, c) =>
                e.jsxs(
                  "ul",
                  {
                    className: "min-w-max list-none pl-0",
                    children: [
                      m.category &&
                        e.jsx("li", {
                          className:
                            "font-bold dark:text-black-200 pt-1.5 pb-0",
                          children: m.category,
                        }),
                      m.links.map((t, u) =>
                        e.jsx(
                          "li",
                          {
                            className:
                              "border-b last:border-b-0 dark:border-black-300 font-bold hover:dark:text-peach-500",
                            children: t.external
                              ? e.jsxs(
                                  "a",
                                  {
                                    onClick: () => i(!1),
                                    className: "flex items-center gap-1",
                                    href: t.route,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [t.image, " ", t.children],
                                  },
                                  t.key
                                )
                              : e.jsxs(
                                  v,
                                  {
                                    onClick: () => i(!1),
                                    to: t.route,
                                    className: "flex items-center gap-1",
                                    children: [t.image, " ", t.children],
                                  },
                                  t.key
                                ),
                          },
                          u
                        )
                      ),
                    ],
                  },
                  c
                )
              ),
        }),
        e.jsx("footer", {
          className: "border-t py-1",
          children: e.jsx(E, { app: s }),
        }),
      ],
    });
  },
  xe = ({ logo: o, nav: l, app: s, collapsible: i = !1 }) => {
    const d = M(`(max-width: ${Q.lg}px)`, !1),
      [g, m] = h.useState(!1);
    return d
      ? e.jsx(w, {
          open: g,
          look: "text",
          trigger: ["hover", "click"],
          onOpenChange: () => m(!g),
          contentClassName: "no-supp-div layermenu-dropdown",
          parentClassName:
            "layermenu-dropdown__parent px-2 py-1 dark:text-sand-500 rounded-md",
          override: e.jsx(k, {
            type: "button",
            look: "text",
            size: "small",
            "aria-label": "Open the menu",
            rightIcon: e.jsx(a, {
              size: "l",
              mui: "KeyboardArrowDown",
              className: "ml-0 md:ml-1 lg:!hidden dark:!text-purple-500",
            }),
            children: !!o && o,
          }),
          content: [
            e.jsx(
              J,
              { setOpen: m, collapsible: i, app: s, nav: l },
              "layermenu-key"
            ),
          ],
        })
      : e.jsx(v, { className: "dim", to: r.home, children: o });
  };
function Z(o, l) {
  return (
    h.useEffect(() => {
      if (!l || !o.current) return;
      var s,
        i = 0,
        d = o.current.offsetHeight;
      const g = () => {
        var c = window.scrollY;
        c > i && c > d
          ? document.querySelector("body").classList.add("nav-up")
          : c + window.innerHeight <
              document.getElementById("root").getBoundingClientRect().height &&
            document.querySelector("body").classList.remove("nav-up"),
          (i = c);
      };
      window.addEventListener("scroll", (c) => {
        s = !0;
      });
      const m = setInterval(() => {
        s && (g(), (s = !1));
      }, 250);
      return () => {
        window.removeEventListener("scroll", g), clearInterval(m);
      };
    }, [l, o]),
    {}
  );
}
const Ue = ({
  app: o,
  hideOnScroll: l = !1,
  logo: s,
  mainNav: i,
  rightNav: d,
  setHeaderHeight: g,
}) => {
  const m = (p) => Object.values(p).some((y) => !y),
    {
      extra: c,
      settings: t,
      help: u,
      helpClassName: f,
      launchAppBtn: j = !1,
    } = d,
    [, D] = h.useState(0),
    U = h.useRef(null);
  return (
    Z(U, l),
    h.useEffect(() => {
      const p = () => {
        const y = window.pageYOffset,
          C =
            document.getElementById("root").getBoundingClientRect().height -
            window.innerHeight;
        D(Math.round((y / C) * 1e4) / 100);
      };
      return (
        window.addEventListener(
          "scroll",
          T.throttle(() => p, 25)
        ),
        () => {
          window.removeEventListener("scroll", () => p);
        }
      );
    }, []),
    h.useEffect(() => {
      if (g && U.current) {
        const p = U.current.clientHeight;
        g(p);
      }
    }, []),
    e.jsx("header", {
      ref: U,
      className: "main-header",
      children: e.jsxs("div", {
        className: "container flex items-center justify-between",
        children: [
          !!s && s,
          !!i &&
            e.jsx("div", {
              className: "gap-2 items-center hidden lg:flex",
              children: i,
            }),
          !m(d) &&
            e.jsxs("div", {
              className: "flex gap-3 items-center",
              children: [
                !!c && c,
                !!j &&
                  e.jsx(k, {
                    type: "button",
                    look: "primary",
                    onClick: () =>
                      window.open(
                        o === "merkl" ? n.angleMerklApp : n.angleApp,
                        "_blank"
                      ),
                    children: "Launch App",
                  }),
                !!t &&
                  e.jsx(w, {
                    contentClassName: "no-supp-div",
                    trigger: ["hover", "click"],
                    look: "text",
                    content: t,
                    children: e.jsx(a, {
                      svg: "settingsLogo",
                      className: "my-2",
                    }),
                  }),
                !!u &&
                  e.jsx(w, {
                    look: "text",
                    placement: "bottomRight",
                    trigger: ["hover", "click"],
                    contentClassName: "no-supp-div z-[2000]",
                    className: f,
                    childClassName: () =>
                      "border-b dark:border-black-300 last:border-b-0",
                    parentClassName:
                      "dark:bg-black-400 px-2 py-1 dark:text-sand-500 rounded-md",
                    content: u.map((p) =>
                      e.jsx(
                        k,
                        {
                          className:
                            "w-full !justify-start flex items-center gap-1 !py-1",
                          look: "text",
                          children: p.external
                            ? e.jsxs(
                                "a",
                                {
                                  className: "flex items-center gap-1",
                                  href: p.route,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: [p.image, " ", p.children],
                                },
                                p.key
                              )
                            : e.jsxs(
                                v,
                                {
                                  to: p.route,
                                  className: "flex items-center gap-1",
                                  children: [p.image, " ", p.children],
                                },
                                p.key
                              ),
                        },
                        p.route
                      )
                    ),
                    children:
                      x === "merkl"
                        ? e.jsx(a, {
                            size: "l",
                            svg: "merklHelperIcon",
                            className: "my-2",
                          })
                        : e.jsx(a, { svg: "questionMark", className: "my-2" }),
                  }),
              ],
            }),
        ],
      }),
    })
  );
};
function ee() {
  const o = S(),
    l = x === "landing",
    [s, i] = h.useState(l && I(o.pathname).includes("light"));
  return (
    h.useEffect(() => {
      if (H || !l) return;
      const d = document.querySelector("body").classList,
        g = I(o.pathname);
      z.forEach((m) => {
        const c = g.find((t) => t === m);
        !d.contains(m) && c ? d.add(m) : d.contains(m) && !c && d.remove(m);
      });
    }, [o]),
    h.useEffect(() => {
      i(l && I(o.pathname).includes("light"));
    }, [o]),
    { isLight: s }
  );
}
function be(o) {
  var p;
  const {
      scrollbar: l = !1,
      wrapperClassName: s,
      containerClassName: i,
      setIsLight: d,
      beforeComponent: g,
      children: m,
      afterComponent: c,
    } = o,
    t = S(),
    [u, f] = h.useState(
      (p = t == null ? void 0 : t.pathname) == null ? void 0 : p.split("/")[1]
    ),
    j = [s, u],
    D = [i, u];
  h.useEffect(() => {
    if (document === null) return;
    const y = document.querySelector("body").classList,
      b = "custom-scrollbar";
    !y.contains(b) && l ? y.add(b) : y.contains(b) && !l && y.remove(b);
  }, [l]);
  const { isLight: U } = ee();
  return (
    h.useEffect(() => {
      d == null || d(U);
    }, [U, d]),
    h.useEffect(() => {
      var b;
      const y =
        (b = t == null ? void 0 : t.pathname) == null
          ? void 0
          : b.split("/")[1];
      f(y);
    }, [t]),
    e.jsxs("div", {
      id: "main-wrapper",
      className: j.filter((y) => y !== "").join(" "),
      children: [
        g,
        e.jsx("main", {
          id: "main-container",
          className: D.filter((y) => y !== "").join(" "),
          children: m,
        }),
        c,
      ],
    })
  );
}
const ke = ({ className: o }) =>
    e.jsx(O.hr, {
      initial: { scaleX: 0, originX: "left" },
      animate: { scaleX: 1 },
      transition: { duration: 0.7, ease: "easeOut" },
      className: `${o || ""} gradient-multiple h-px w-full border-none`,
    }),
  fe = {
    "peach-500": "#fdceaa",
    "coral-500": "#f4837d",
    "blue-300": "#aac4fd",
    "pink-500": "#e0557e",
    "purple-500": "#b9aafd",
    "green-500": "#87dcc9",
    "peach-700": "#fcb076",
    "purple-300": "#dcd5fe",
    "green-700": "#2ac8a5",
    "coral-300": "#fdaab0",
    "peach-300": "#fee0ca",
    "peach-100": "#fff9f4",
    "blue-500": "#76a0fc",
    "pink-300": "#f3bdcd",
    "coral-700": "#f05a52",
    "pink-700": "#da2f61",
    "green-100": "#e1f6f2",
    "coral-100": "#fce0df",
    "black-100": "#dfe2eb",
    "green-300": "#c3eee4",
    "pink-100": "#f9dee6",
    "purple-700": "#8e76fc",
    "black-400": "#333a54",
    "purple-100": "#eeeaff",
    "black-200": "#7e89af",
    "dark-pink": "#eb4960",
    "blue-700": "#2166fa",
    "sand-500": "#faf1e7",
    "black-300": "#454E71",
    "sand-100": "#fefcf9",
    "blue-100": "#dde7fe",
    "black-500": "#1f2333",
  },
  A = ({ chainId: o, networksList: l }) => {
    const { switchChain: s } = P();
    return e.jsx(w, {
      content: l.map((i) =>
        e.jsxs("div", {
          className: "flex items-center gap-2",
          onClick: () => s(i),
          children: [e.jsx(a, { chain: i }), N[i]],
        })
      ),
      override: e.jsxs("div", {
        className: "flex flex-nowrap items-center gap-2",
        children: [
          " ",
          e.jsx("span", { className: "dark:text-purple-500", children: N[o] }),
          " ",
          e.jsx(a, { mui: "KeyboardArrowDown" }),
        ],
      }),
    });
  },
  ve = ({
    centered: o,
    title: l,
    chainId: s,
    networksList: i = [],
    logoClassName: d,
    headerLogo: g,
    headerLogoAlt: m,
    description: c,
    subDescription: t,
    mode: u,
  }) =>
    e.jsx(e.Fragment, {
      children: e.jsx("header", {
        className: `${
          o ? "container mb-4" : "mb-8"
        } flex items-center justify-between md:flex-row lg:items-start xl:relative ${
          x === "landing" || x === "merkl-landing"
            ? "mt-4 lg:mb-4 lg:mt-24"
            : ""
        }`,
        children: o
          ? e.jsxs("div", {
              className: "flex w-full items-center",
              children: [
                e.jsx("div", {
                  className:
                    "hidden w-max pr-8 md:block lg:w-1/5 xl:w-1/4 xl:pr-0",
                  children:
                    g &&
                    e.jsx("object", {
                      "aria-label": "loader-logo",
                      type: "image/svg+xml",
                      data: g,
                      className: `ml-auto w-24 md:block md:w-28 lg:w-auto xl:mr-8 ${d}`,
                    }),
                }),
                e.jsxs("div", {
                  className: "title w-full pr-16 md:w-2/3 md:pr-0 xl:w-1/2",
                  children: [
                    e.jsxs("h1", {
                      className: `mb-2 ${
                        x !== "landing" &&
                        s &&
                        u !== "RAMP" &&
                        u !== "DEPOSIT" &&
                        u !== "WITHDRAW"
                          ? "flex flex-wrap items-center gap-2"
                          : ""
                      }`,
                      children: [
                        l,
                        " ",
                        x !== "landing" &&
                          !!s &&
                          u !== "RAMP" &&
                          u !== "DEPOSIT" &&
                          u !== "WITHDRAW" &&
                          e.jsxs(e.Fragment, {
                            children: [
                              "on",
                              e.jsx(A, { chainId: s, networksList: i }),
                            ],
                          }),
                      ],
                    }),
                    c && e.jsx("p", { className: "text-lg", children: c }),
                  ],
                }),
              ],
            })
          : e.jsxs("div", {
              className:
                "flex w-full flex-1 flex-wrap items-center md:w-5/6 md:flex-nowrap",
              children: [
                g &&
                  e.jsx("div", {
                    className: "hidden w-max mr-8 md:block",
                    children: e.jsx("img", {
                      src: g,
                      className: `mb-6 hidden w-24 md:mb-0 md:block md:w-40 lg:w-48 ${d}`,
                      alt: m,
                    }),
                  }),
                e.jsxs("div", {
                  className: "title w-full md:w-4/5",
                  children: [
                    e.jsxs("h1", {
                      className: `mb-2 ${
                        x !== "landing" &&
                        s &&
                        u !== "RAMP" &&
                        u !== "DEPOSIT" &&
                        u !== "WITHDRAW"
                          ? "flex flex-wrap items-center gap-2"
                          : ""
                      }`,
                      children: [
                        l,
                        " ",
                        x !== "landing" &&
                          !!s &&
                          u !== "RAMP" &&
                          e.jsxs(e.Fragment, {
                            children: [
                              "on",
                              e.jsx(A, { chainId: s, networksList: i }),
                            ],
                          }),
                      ],
                    }),
                    c && e.jsx("p", { className: "mt-2 text-lg", children: c }),
                    t &&
                      e.jsx("p", {
                        className: "mt-0.5 dark:text-black-200",
                        children: t,
                      }),
                  ],
                }),
              ],
            }),
      }),
    });
export {
  ce as A,
  fe as C,
  w as D,
  le as F,
  Ue as H,
  xe as L,
  pe as M,
  be as P,
  Q as S,
  ke as a,
  ve as b,
  ie as c,
  se as d,
  me as e,
  de as f,
  ye as g,
  he as h,
  ge as i,
  ue as j,
};
