import { I as e, f as g } from "./react-fa804298.js";
import { B as i, aL as j, X as x, z as v, I as k } from "./index-61771442.js";
import "./lodash-52c9deff.js";
import { h as I, E as w } from "./style-829a44f9.js";
import { C as d, S, b as N } from "./PageHeader-990598b1.js";
import { a as m, u as T } from "./Styles-fc791c6c.js";
import { t as Y, T as E } from "./index-9fe1a3c0.js";
const A = ({
    title: h,
    description: f,
    chartData: r,
    chartColor: a = Object.values(d)[0],
    nacked: p = !1,
    customOptions: l,
    tooltipFormatter: t,
    yAxisFormatter: y,
  }) => {
    const u = {
      baseOption: {
        color: a,
        tooltip: {
          ...m.tooltip,
          trigger: "axis",
          formatter: (o) => {
            const s = new Date(o[0].value[0]);
            let c = `${I(s).format("MMM Do, YYYY")}<br />`;
            if (o.length > 1)
              for (const n of o)
                c += `
          <div style="display:flex;justify-content:space-between;width:200px;margin:1px 0;">
          <div>
          <span style="display:inline-block;height:8px;width:8px;border-radius:10px;margin-right:4px;background-color:${
            n.color
          };"></span>
          ${n.seriesName}</div> ${t(n.value[1])}</div>`;
            else c += `${t(o[0].value[1])}`;
            return c;
          },
        },
        legend: {
          ...m.legend,
          textStyle: {
            color: d["sand-500"],
            fontWeight: 600,
            fontFamily: "Space Grotesk",
            fontSize: 16,
          },
        },
        xAxis: {
          ...m.xAxis,
          axisLine: { lineStyle: { color: d["black-200"], width: 1 } },
          type: "time",
          axisLabel: {
            rotate: 40,
            margin: 10,
            fontFamily: "Space Grotesk",
            formatter: (o) =>
              new Date(o).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              }),
          },
        },
        yAxis: {
          ...m.yAxis,
          type: "value",
          min: "dataMin",
          axisLine: {
            show: !0,
            lineStyle: { color: d["black-200"], width: 1 },
          },
          axisLabel: { fontFamily: "Space Grotesk", formatter: y },
          splitLine: { show: !1 },
        },
        grid: { ...m.grid },
        series: [{ type: "line", data: r, smooth: !0, showSymbol: !1 }],
        ...l,
      },
      media: [
        {
          option: {
            legend: { left: "center", bottom: 0, orient: "horizontal" },
            series: [{ center: ["50%", "40%"], radius: ["35%", "50%"] }],
          },
        },
        {
          query: { minWidth: S.lg },
          option: {
            legend: { top: "center", right: "20%", orient: "vertical" },
            series: [{ center: ["25%", "50%"], radius: ["55%", "70%"] }],
          },
        },
      ],
    };
    return p
      ? e.jsxs("div", {
          className: "flex flex-wrap",
          children: [
            !!h &&
              e.jsxs("div", {
                className:
                  "order-2 mb-8 ml-auto mt-4 w-full lg:order-1 lg:mb-16 lg:mt-auto lg:w-1/4 lg:pr-8 lg:text-right",
                children: [
                  e.jsx("h2", {
                    className: "h4 mb-2 dark:text-purple-500",
                    children: h,
                  }),
                  e.jsx("p", {
                    className: "mb-5 text-lg dark:text-black-100",
                    children: f,
                  }),
                  e.jsx("hr", {
                    className: "border-gradient-multiple before:!pt-0",
                  }),
                ],
              }),
            e.jsxs("div", {
              className:
                "relative order-1 mx-auto mt-8 w-full rounded-[20px] px-6 py-3 dark:bg-black-400 md:px-10 md:py-8 lg:order-2 lg:w-3/4",
              children: [
                e.jsxs("div", {
                  className: "flex flex-wrap justify-between gap-1.5",
                  children: [
                    e.jsx(i, {
                      type: "tag",
                      look: "secondary",
                      size: "small",
                      enabled: !0,
                      children: "1D",
                    }),
                    e.jsx(i, {
                      type: "tag",
                      look: "secondary",
                      size: "small",
                      children: "1W",
                    }),
                    e.jsx(i, {
                      type: "tag",
                      look: "secondary",
                      size: "small",
                      children: "1M",
                    }),
                    e.jsx(i, {
                      type: "tag",
                      look: "secondary",
                      size: "small",
                      children: "6M",
                    }),
                    e.jsx(i, {
                      type: "tag",
                      look: "secondary",
                      size: "small",
                      children: "YTD",
                    }),
                    e.jsx(i, {
                      type: "tag",
                      look: "secondary",
                      size: "small",
                      children: "All",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "mt-10 rounded-[20px]",
                  children: e.jsx(w, { option: u, opts: { locale: "EN" } }),
                }),
              ],
            }),
          ],
        })
      : e.jsx(w, { option: u, opts: { locale: "EN" } });
  },
  z = ({ className: h, customOptions: f, stablecoin: r }) => {
    const [a, p] = g.useState({}),
      { data: l } = T("historicalSavings", { age: "5m" });
    return (
      g.useEffect(() => {
        if (!l) return;
        let t = 1,
          y = "0";
        p(() => {
          const u = {},
            o = {};
          return (
            Object.keys(j).forEach((s) => {
              if (l[s] && s === r) {
                for (const [b, c] of Object.entries(l[s])) {
                  if (!c[1]) continue;
                  const n = Number.parseFloat(c[1].rate);
                  if (t === 1 && n === 1) {
                    (t = n), (y = b);
                    continue;
                  } else
                    t === 1 &&
                      n !== 1 &&
                      (o[
                        new Date(Number.parseInt(y) * 1e3)
                          .toISOString()
                          .slice(0, 10)
                      ] = Number((t * 100).toFixed(2)));
                  o[
                    new Date(Number.parseInt(b) * 1e3)
                      .toISOString()
                      .slice(0, 10)
                  ] = Number((n * 100).toFixed(2));
                }
                u[s] = Object.entries(o);
              }
            }),
            u
          );
        });
      }, [l, r]),
      e.jsx(e.Fragment, {
        children:
          a != null && a[r]
            ? e.jsx("div", {
                className: `historical-performance ${h}`,
                children: e.jsx(A, {
                  chartColor: r === "EURA" ? d["blue-500"] : d["green-500"],
                  chartData: a == null ? void 0 : a[r],
                  customOptions: f,
                  yAxisFormatter: (t) => `${r === "EUR" ? `${t} €` : `$${t}`}`,
                  tooltipFormatter: (t) =>
                    r === "EUR" ? `${x(t)}€` : `$${x(t)}`,
                }),
              })
            : e.jsx("div", {
                className: `historical-performance ${h}`,
                children: e.jsx("p", {
                  className: "text-lg dark:text-sand-500",
                  children: "Loading...",
                }),
              }),
      })
    );
  },
  W = () =>
    e.jsx(e.Fragment, {
      children: e.jsxs("div", {
        className: "terms container",
        children: [
          e.jsx(N, {
            chainId: null,
            logoClassName: "!w-20 md:!w-24 lg:!w-28 mr-8",
            headerLogo: Y,
            headerLogoAlt: "Terms & Conditions Logo",
            title: "Terms & Conditions",
          }),
          e.jsxs("main", {
            className: "flex flex-wrap",
            children: [
              e.jsxs("div", {
                className: "w-full dark:text-sand-500 lg:w-2/3",
                children: [
                  e.jsxs("p", {
                    className: "mb-8 dark:text-black-200",
                    children: [
                      "Date of the latest revision: May 26th, 2022.",
                      e.jsx("br", {}),
                      "This document is part of the Terms available at",
                      " ",
                      e.jsx("a", {
                        href: "https://terms.angle.money",
                        className: "underlined",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: "https://terms.angle.money",
                      }),
                    ],
                  }),
                  e.jsx(E, { className: "mb-8", headingElements: "h4" }),
                  e.jsxs("div", {
                    className: "mb-8",
                    children: [
                      e.jsx("p", {
                        className:
                          "mb-8 font-bold lowercase first-letter:uppercase",
                        children:
                          "PLEASE READ CAREFULLY THESE TERMS OF USE AND SERVICE CAREFULLY BEFORE STARTING USING THE SERVICES. BY USING THE SERVICES, YOU AGREE TO BE LEGALLY AND UNCONDITIONALLY BOUND BY THESE TERMS.",
                      }),
                      e.jsx("h4", {
                        className: "mb-4 dark:text-sand-500",
                        id: "I",
                        children: "I. Purpose of this document",
                      }),
                      e.jsxs("p", {
                        children: [
                          "angle.money as well as other related interfaces",
                          " ",
                          e.jsx("a", {
                            href: "https://app-angle-money.vercel.app",
                            className: "underlined",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "https://app-angle-money.vercel.app",
                          }),
                          " ",
                          "are brought to you by Angle Labs, Inc. (“Angle Labs”) and its affiliates (“we”, “us”, “our”). Angle.money provides information and resources about the fundamentals of the protocol called “Angle” that permits, among other things, the generation of stablecoins, transactions using smart contracts, and lending, getting leverage on, and staking of, cryptographic assets (the “Protocol”). The purpose of these terms of use (the “Terms”) is to define:",
                        ],
                      }),
                      e.jsxs("ul", {
                        children: [
                          e.jsxs("li", {
                            children: [
                              "The terms and conditions of use applicable to the user (the “User”, “you” or “your”), when using our any of our websites located at",
                              " ",
                              e.jsx("a", {
                                href: "https://app-angle-money.vercel.app",
                                className: "underlined",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                children: "https://app-angle-money.vercel.app",
                              }),
                              " ",
                              "or any other related interface (the “Interface”),",
                            ],
                          }),
                          e.jsx("li", {
                            children:
                              "The terms and conditions applicable to any other features, tools, materials, or other services offered from time to time on the Interface (the “Services”)",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mb-8",
                    children: [
                      e.jsx("h4", {
                        className: "mb-4 dark:text-sand-500",
                        id: "II",
                        children: "II. Acceptance of terms - Change of terms",
                      }),
                      e.jsxs("p", {
                        children: [
                          "Before using any of the Services, you must first agree to these Terms. By accessing the Services, you expressly confirm that you fully and irrevocably agree to these Terms. If there is anything to which you do not agree contained in or required by these Terms, you must cease using any of the Services.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "You also agree that your personal data and electronic communications on the Interface will be processed in accordance with our data privacy policy, which is incorporated herein by reference available at",
                          " ",
                          e.jsx("a", {
                            href: "https://privacy.angle.money",
                            className: "underlined",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "https://privacy.angle.money",
                          }),
                          ".",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "We reserve the right, at our sole discretion, to modify or replace the Terms at any time. The most current version of these Terms will be posted on and be accessible through the Interface. You shall be responsible for reviewing and becoming familiar with any such modifications. You will be deemed to have accepted all modifications and revisions by continuing to use any of the Services.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "You may contact us with questions about your use of the Services at",
                          " ",
                          e.jsx("a", {
                            href: "mailto:contact@angle.money",
                            className: "underlined",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "contact@angle.money",
                          }),
                          ". When you communicate with us electronically, you consent to receive communications from us electronically.",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mb-8",
                    children: [
                      e.jsx("h4", {
                        className: "mb-4 dark:text-sand-500",
                        id: "III",
                        children: "III. Services",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "III.1 Information on the Protocol",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "The Interface is provided as an informational resource about the fundamentals of the Protocol, which is a fully decentralized, community governed protocol deployed on multiple blockchain networks and systems, and provides information about the wider Angle ecosystem, governance, community, and various interfaces and integrations to the Protocol. All information provided in connection with your access and use of the Interface and the Services is for informational purposes only.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "You should not take, or refrain from taking, any action based on any information contained on the Interface or any other information that we make available at any time, including blog posts, data, articles, links to third-party content, discord content, news feeds, tutorials, tweets, and videos. Before you make any financial, legal, technical, or other decisions involving the Services, you should seek independent professional advice from a licensed and qualified individual in the area for which such advice would be appropriate.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "Because the Site provides information about the Protocol, these Terms also provide some information about the use of the Protocol. This information is not intended to be comprehensive or address all aspects of the Protocol. There is additional documentation on the Interface about the functioning of the Protocol or its ecosystem or community.",
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children:
                          "III.2 We are software developers in the Protocol ecosystem",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "The Protocol is deployed on multiple blockchain based networks, and Angle Labs is not responsible for the operation of such networks. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "It is important to understand that neither we nor any affiliated entity is a party to any transaction on the blockchain networks underlying the Protocol; we do not have possession, custody or control over any cryptoassets appearing on the Services; and we do not have possession, custody, or control over any user’s funds. Further, we do not store, send, or receive any cryptoassets. You understand that when you interact with any Protocol smart contracts, you retain control over your cryptoassets at all times. The private key associated with the wallet address from which you transfer cryptoassets or the private key associated is the only private key that can control the cryptoassets you transfer into the smart contracts.",
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "III.3 License to use our Services",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "We grant you a license to use our Service. Contingent upon your ongoing compliance with these Terms, we grant you a personal, worldwide, revocable, non-exclusive and non-assignable license to use the software provided to you as part of our Services. The only purpose of this license is to allow you to use and enjoy the Services solely as permitted by these Terms. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "We own any and all right, title, and interest in and to the Services including, without limitation, any and all copyrights in and to any content, code, data, or other materials that you may access or use on or through the Services; Except as expressly set forth herein, your use of or access to the Services does not grant you any ownership or other rights therein. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "We may use and share your feedback. Any comments, bug reports, ideas, or other feedback that you may provide about our Services, including suggestions about how we might improve our Services, are entirely voluntary. You agree that we are free to use or not use any feedback that we receive from you as we see fit, including copying and sharing such feedback with third parties, without any obligation to you.",
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "III.4 Fees",
                      }),
                      e.jsxs("p", {
                        children: [
                          "We do not charge any fees for use of Services or the Interface. We do not provide any services to users or deliver, hold, and/or receive payment for cryptoassets. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "However, note that in connection with your use of the Services, you agree to bear all costs necessary to conduct a transaction on the blockchain, such as gas fees. We attempt to provide accurate cost information, but this information is highly volatile and can change quickly without Users necessarily being aware of these changes.",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mb-8",
                    children: [
                      e.jsx("h4", {
                        className: "mb-4 dark:text-sand-500",
                        id: "IV",
                        children:
                          "IV. User's Representations & Warranties and Acknowledgements",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "IV.1 User's Representations & Warranties",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "You hereby represent and warrant, at all times during the use of the Services, that you:",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          e.jsx("strong", {
                            children:
                              "Comply at all times with the laws (including notably anti-money laundering regulations)",
                          }),
                          e.jsx("br", {}),
                          e.jsxs("ul", {
                            children: [
                              e.jsx("li", {
                                children:
                                  "Your use conforms with and does not breach the laws and in particular any applicable law in the jurisdiction in which you are located, including notably anti money laundering regulations and you will not be using the Services for, nor will promote or facilitate, illegal activity (including, without limitation, money laundering, financing terrorism, tax evasion, buying or selling illegal drugs, contraband, counterfeit goods, or illegal weapons);",
                              }),
                              e.jsx("li", {
                                children:
                                  "You are not engaged in any illegal trade, money laundering activities or activities related to the financing of terrorism and will not be exploiting the Services for any unauthorized commercial purpose.",
                              }),
                              e.jsx("li", {
                                children:
                                  "Neither you nor the geographical locality in which you reside or are domiciled or located are the subject of economic sanctions from the United Nations, the United States of America or the European Union.",
                              }),
                              e.jsx("li", {
                                children:
                                  "Neither you nor any of your affiliates is owned or controlled by a sanctioned person or involved in any transaction, transfer, or conduct that is likely to result in you or your affiliates becoming a sanctioned person or people.",
                              }),
                              e.jsx("li", {
                                children:
                                  "Neither you nor any of your affiliates is a politically exposed person.",
                              }),
                              e.jsx("li", {
                                children:
                                  "You will not use the Services for any fraudulent or dishonest purpose.",
                              }),
                              e.jsx("li", {
                                children:
                                  "You will not harvest or otherwise collect information from the Services for any unauthorized purpose.",
                              }),
                              e.jsx("li", {
                                children:
                                  "You will not attempt to conceal any non-compliance by you with any laws or these Terms by using a VPN or proxy or any other method or use the Services under false or fraudulent pretenses or otherwise being deceitful.",
                              }),
                            ],
                          }),
                          e.jsx("br", {}),
                          e.jsx("strong", {
                            children:
                              "Shall not affect the functionality or operation of the Services",
                          }),
                          e.jsx("br", {}),
                          e.jsxs("ul", {
                            children: [
                              e.jsx("li", {
                                children:
                                  "You will not upload or transmit viruses, worms, Trojan horses, time bombs, cancel bots, spiders, malware or any other type of malicious code that will or may be used in any way that may affect the functionality or operation of the Services.",
                              }),
                              e.jsx("li", {
                                children:
                                  "You will not interfere with or circumvent the security features of the Services or any third party’s systems, networks or resources used in the provision of Services.",
                              }),
                              e.jsx("li", {
                                children:
                                  "You will not engage in any attack, hack, denial-of-service attack, interference, or exploit of any smart contract in connection with use of the Service (and operations performed by a user that are technically permitted by a smart contract may nevertheless be a violation of our Agreement, including these Terms, and the law) nor engage in any anticompetitive behavior or other misconduct.",
                              }),
                            ],
                          }),
                          e.jsx("br", {}),
                          e.jsx("strong", {
                            children: "Are aware of related risks",
                          }),
                          e.jsx("br", {}),
                          e.jsx("ul", {
                            children: e.jsx("li", {
                              children:
                                "By utilizing the Services or interacting with the Interface in any way, you represent that you perfectly understand the inherent risks associated with smart contracts and cryptographic system (included but not limited to volatility of cryptocurrencies, risk of regulatory actions, risks of technical issues) as disclosed thereafter and warrant that you have a very good understanding of the usage of cryptographic assets.",
                            }),
                          }),
                          e.jsx("br", {}),
                          e.jsx("strong", {
                            children: "Shall not do any trolling activities:",
                          }),
                          e.jsx("br", {}),
                          e.jsxs("ul", {
                            children: [
                              e.jsx("li", {
                                children:
                                  "You will act toward us with respect and integrity and will not subject us to any abusive or disrespectful acts, including trolling on social media.",
                              }),
                              e.jsx("li", {
                                children:
                                  "You will not interfere with other users’ access to or use of the Services.",
                              }),
                            ],
                          }),
                          e.jsx("br", {}),
                          e.jsx("strong", {
                            children:
                              "Have the legal capacity and sufficient experience to use the Services:",
                          }),
                          e.jsx("br", {}),
                          e.jsxs("ul", {
                            children: [
                              e.jsx("li", {
                                children:
                                  "You are of the legal age of majority in your jurisdiction as is required and of sufficient mental age, maturity and capacity to accept these Terms, and use the Services.",
                              }),
                              e.jsx("li", {
                                children:
                                  "You are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations and warranties set forth in these Terms and to abide by and comply with these Terms.",
                              }),
                              e.jsx("li", {
                                children:
                                  "You have knowledge of and experience in the digital asset space and are familiar with the functioning and intricacies of digital assets including ERC20 tokens and with decentralized finance and decentralized exchanges and markets.",
                              }),
                              e.jsx("li", {
                                children:
                                  "You further represent that you are legally permitted to use the Services in your jurisdiction. You further represent that you are responsible for ensuring compliance with the laws of your jurisdiction and you acknowledge and expressly agree that we shall not be liable for your compliance with such laws.",
                              }),
                            ],
                          }),
                          e.jsx("br", {}),
                          e.jsx("strong", {
                            children:
                              "No breach of Intellectual Property Rights:",
                          }),
                          e.jsx("br", {}),
                          e.jsxs("ul", {
                            children: [
                              e.jsx("li", {
                                children:
                                  "Your use of the Services does not and will not violate any intellectual property rights. You will not engage in transactions involving items that infringe or violate any copyright, trademark, right of publicity or privacy or any other proprietary right under the law, including but not limited to sales, distribution, or access to counterfeit music, movies, software, or other licensed materials without the appropriate authorization from the rights holder; use of our intellectual property, name, or logo, including use of our trade or service marks, without express consent from us or in a manner that otherwise harms Angle Labs; any action that implies an untrue endorsement by or affiliation with Angle Labs.",
                              }),
                              e.jsx("li", {
                                children:
                                  "You will not attempt to or actually copy or make unauthorized use of all or any portion of the Services, including by attempting to reverse compile, reformatting or framing, disassemble, reverse engineer any part of the Services.",
                              }),
                            ],
                          }),
                          e.jsx("br", {}),
                          e.jsx("strong", {
                            children: "Take your own responsibility:",
                          }),
                          e.jsx("br", {}),
                          e.jsxs("ul", {
                            children: [
                              e.jsx("li", {
                                children:
                                  "You make your own independent decisions in the way you are using the Services.",
                              }),
                              e.jsx("li", {
                                children:
                                  "You are fully and solely responsible for the security of your wallet(s) and passwords, seed phrases and private keys. If you provide or make available your passwords, seed phrases or private keys to anyone else you are fully and solely responsible for any consequent use of these.",
                              }),
                              e.jsx("li", {
                                children:
                                  "You are fully and solely responsible for obtaining your own independent legal, financial, accounting and tax advice.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "IV.2 User's Acknowledgements",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "By your continuing use of the Services, you acknowledge:",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          e.jsx("strong", {
                            children: "Decentralization of the Protocol",
                          }),
                          e.jsx("br", {}),
                          "The Protocol is fully decentralized. All transactions entered into by Protocol users are carried out by them on a peer-to-peer basis and that Angle Labs has no control on such transactions. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          e.jsx("strong", {
                            children: "No agency, advisory or partnership",
                          }),
                          e.jsx("br", {}),
                          "We do not represent the buyer, seller, liquidity provider, offeror of tokens or any participant or transacting party on the Protocol. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "You alone are responsible for securing your private keys. We do not have access to your private keys. Due to the non-custodial and decentralized nature of the technology, we are not intermediaries, agents, advisors, or custodians, and we do not have a fiduciary relationship or obligation to you regarding any other decisions or activities that you affect when using our Services. We neither are accountants, tax advisors, legal representatives or financial advisors of the Protocol. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "You acknowledge that we, for the avoidance of doubt, do not have any information regarding any users, users’ identities, or services beyond what is available or obtainable publicly via the blockchain. We are not responsible for any activities you engage in when using Services, and you should understand the risks associated with cryptoassets, blockchain technology generally, and our Services. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "All contributors to the ecosystem around the Protocol are independent of us, and we will not have and do not assume any liability or responsibility for their actions or omissions ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          e.jsx("strong", {
                            children:
                              "We have no control on the Protocol’s operations",
                          }),
                          e.jsx("br", {}),
                          "The Protocol is deployed on multiple blockchain-based networks, and we are not responsible for the operation of such networks.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "The software underlying blockchain networks on which the Protocol is deployed, including, for example, the Ethereum blockchain, is open source, which means that anyone can use, utilize, and build on top of it. By using the Services, you acknowledge and agree (i) that we are not responsible for the operation of the blockchain-based software and networks underlying the Protocol, (ii) that there exists no guarantee of the functionality, security, or availability of that software and networks, and (iii) that the underlying blockchain-based networks are subject to sudden changes in operating rules, such as those commonly referred to as “forks”.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          e.jsx("strong", { children: "No recommendations" }),
                          e.jsx("br", {}),
                          "By Participating in the Protocol, you acknowledge that you are doing so on the basis of your own enquiry, without solicitation or inducement by Angle Labs. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "No information published on the Protocol about any of the digital assets, trading strategies or other financial strategies should be construed as being a promotion, solicitation, recommendation or marketing of any kind in relation to any of these, and we have no knowledge of the financial circumstances or objectives of any Protocol’s user or any expertise in what might constitute sensible financial practice for them. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "There is no assurance, representation or warranty that your use of the Services:",
                          e.jsxs("ul", {
                            children: [
                              e.jsx("li", {
                                children: "will provide a profit;",
                              }),
                              e.jsx("li", {
                                children:
                                  "will not incur significant losses; or",
                              }),
                              e.jsx("li", {
                                children:
                                  "will attain your commercial or other objectives.",
                              }),
                            ],
                          }),
                          e.jsx("br", {}),
                          e.jsx("strong", {
                            children:
                              "Automated collection and disbursement of proceeds by smart contracts",
                          }),
                          e.jsx("br", {}),
                          "You agree to the automated collection and disbursement of proceeds by smart contracts.You acknowledge and agree that all transactions accessed through the Services will be automatically processed using one or more blockchain-based smart contracts. By engaging in transactions using the Services, you acknowledge and consent to the automatic processing of all transactions in connection with using the Services. You further acknowledge and agree that the applicable smart contract will dictate how the funds of a transaction and ownership of cryptoassets are distributed.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          e.jsx("strong", { children: "Assumption of risk" }),
                          " ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          e.jsx("em", {
                            children: "Risks inherent to blockchain activities",
                          }),
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "We do not own or control any of the underlying software through which blockchain networks are formed. In general, the underlying software for blockchain networks tends to be open source such that anyone can use, copy, modify, and distribute it. By using the Services, you acknowledge and agree (i) that we are not responsible for operation of the underlying software and networks that there exists no guarantee of functionality, security, or availability of such software and networks; and (ii) that digital assets are highly volatile because of a range of factors which include, but are not limited to, rate of adoption, speculation, technology changes, security risks, contagion risks, systematic risks, legal and regulatory changes, and factors affecting their supply (such as the mining, minting or issuing of new tokens, airdrops, the burning of tokens and blockchain forks).",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "You understand that Ethereum and other blockchain technologies and associated Digital Assets, currencies or tokens are highly volatile due to many factors including but not limited to adoption, speculation, technology and security risks. You also acknowledge that the cost of transacting on such technologies is variable and may increase at any time causing impact to any activities taking place on the Ethereum blockchain. You acknowledge these risks and represent that the Company cannot be held liable for such fluctuations or increased costs. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          e.jsx("em", { children: "Regulatory risks" }),
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "The Services could be impacted by one or more regulatory inquiries or regulatory action, which could impede or limit the ability of Angle Labs to continue to develop, or which could impede or limit your ability to access or use the Services or Ethereum blockchain, including access to the Interface.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          e.jsx("em", {
                            children: "Risk of information inaccuracy",
                          }),
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "Although it is intended to provide accurate and timely information on the Interface, the Interface or relevant tools may not always be entirely accurate, complete or current and may also include technical inaccuracies or typographical errors. In an effort to continue to provide you with as complete and accurate information as possible, information may be changed or updated from time to time without notice, including, without limitation, information regarding our policies. Accordingly, you should verify all information before relying on it, and all decisions based on information contained on the Interface or relevant tools are your sole responsibility and Company shall have no liability for such decisions. Links to third-party materials (including, without limitation, websites) may be provided as a convenience but are not controlled by any entity. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any third-party materials or on any third party sites accessible or linked to the Interface or available via other relevant tools.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "No representation is made as to the accuracy, completeness or appropriateness for any particular purpose of any pricing information distributed via the Interface",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          e.jsx("em", {
                            children: "Non-private data and data storage",
                          }),
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "A widespread belief is that transactions involving blockchains are anonymous. In fact, a central feature of blockchains and thus, blockchain-based transactions, are that they are transparent. Your public key and your wallet address, which you need to buy or sell items on the blockchain, are visible to anyone. To the extent your public key or wallet address can be linked back to you, it would be possible for someone to determine your identity and the cryptoassets you own.You therefore acknowledge that your activity relating to using is not private and may be visible to third parties, including on public blockchains.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          e.jsx("em", {
                            children: "Disruptions and cyber risks",
                          }),
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "The functioning of the Services may from time to time be disrupted because of system overloads, software or hardware issues, power outages, errors or instability in experimental features or issues with the functioning of other services and software on which the Interface is dependent. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "Users face the risk of cybersecurity events, which may negatively affect the operation of the Services and their availability. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "Users accept that we have no liability to them for any losses arising from any such disruptions or cybersecurity events and that we do not warrant that their use will be error-free or uninterrupted.",
                          " ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "Users acknowledge that it is their responsibility to ensure that any hardware and software and access credentials they use to access the Services and their wallets are kept secure. Users acknowledge that we are not liable for any security breaches or other failings of any such systems.",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mb-8",
                    children: [
                      e.jsx("h4", {
                        className: "mb-4 dark:text-sand-500",
                        id: "V",
                        children: "V. Disclaimer of Warranties - Liability",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "V.1 No warranties by Angle Lab",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "You expressly understand and agree that your use of the Services and/or the Interface is at your sole risk. The Services (including the Interface) are provided on an “as is” and “as available” basis, without warranties of any kind, either express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose or non-infringement. You acknowledge and expressly agree that we have no control over, and no duty to take any action regarding: which users gain access to or use the Services; what effects the content of the Interface may have on you; how you may interpret or use the content of the Interface. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "There is no warranties that access to the Interface and/or the Services will be continuous, uninterrupted, timely, or secure, that the information made available via, contained on or used by the Interface, will be accurate, reliable, complete, or current, or that the Services will be free from errors, defects, viruses, or other harmful material. You acknowledge and expressly accept that the Interface and/or the Services (a) may contain bugs, errors and defects, (b) may function improperly or be subject to periods of downtime and unavailability, (c) may result in total or partial loss or corruption of data and (d) may be modified at any time, including through the release of subsequent versions, all with or without notice to you. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "No advice, information, or statement that any contributor to the Protocol makes should be treated as creating any warranty concerning the Services. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "We do not endorse, guarantee, or assume responsibility for any advertisements, offers, or statements made by third parties concerning the Services or the Interface. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "You acknowledge and expressly agree that we are not responsible for transferring, safeguarding, or maintaining your private keys or any digital currency associated therewith. If you lose, mishandle or have stolen associated digital currency private keys, you acknowledge and expressly agree that you may not be able to recover associated digital assets, and that we are not responsible for such loss. You acknowledge and expressly agree that we are not responsible for any loss, damage or liability arising from your failure to comply with the terms hereunder.",
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "V.2 Limitation of Liability",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "You acknowledge and expressly agree that you assume full responsibility for your use of the Services and/or the Interface. You acknowledge and expressly agree that any information you send or receive during your use of the Services and/or the Interface may not be secure and may be intercepted or acquired by unauthorized parties. You acknowledge and expressly agree that your use of the Services and/or the Interface is at your own risk. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "Recognizing such, you understand and agree that, to the fullest extent permitted by applicable Law, we will not be liable to you for any direct, indirect, incidental, special, consequential, punitive, exemplary or other damages of any kind, including without limitation damages for loss of profits, goodwill, use, data or other tangible or intangible losses or any other damages based on contract, tort, strict liability or any other theory (even if we had been advised of the possibility of such damages), resulting from: the Services and/or the Interface; the use or the inability to use the Services and/or the Interface; unauthorized access to or alteration of your transmissions or data; statements or conduct of any third party on the Services and/or the Interface; any actions we take or fail to take as a result of communications you send to us; errors; technical malfunctions; failures, including public utility or telephone outages; omissions, interruptions, latency, deletions or defects of any device or network, providers, or software (including, but not limited to, those that do not permit participation in the Services); any injury or damage to computer equipment; inability to fully access the Services and/or the Interface or any other website; theft, tampering, destruction, or unauthorized access to, images or other content of any kind; data that is processed late or incorrectly or is incomplete or lost; typographical, printing or other errors, or any combination thereof; or any other matter relating to the Services and/or the Interface.",
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "V.3 Indemnification",
                      }),
                      e.jsx("p", {
                        className: "mb-8",
                        children:
                          "You agree to release and to indemnify, defend and hold harmless Angle Labs and its affiliates, from and against any and all losses, liabilities, expenses, damages, costs (including attorneys' fees, fees or penalties imposed by any regulatory authority and court costs) claims or actions of any kind whatsoever arising or resulting from your use of the Services and/or the Interface, your violation of these Terms, your violation of any Law, rule, or regulation, or the rights of any third party, and any of your acts or omissions that implicate publicity rights, defamation or invasion of privacy",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mb-8",
                    children: [
                      e.jsx("h4", {
                        className: "mb-4 dark:text-sand-500",
                        id: "VI",
                        children:
                          "VI. Limitation of Participation - Termination - Account Closure",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "VI.1 Termination by Us",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "We may at any time and without liability, terminate, suspend, or limit your use of the Services, including, but not limited to, where: (a) we reasonably suspect you of acting in breach of these Terms and/or all other applicable terms; (b) we are required to do so by applicable Law, regulation or any court or other authority to which the use of the Services are subject to in any jurisdiction; (c) we suspect that your use of the Services is potentially connected to any unlawful activities (including but not limited to money laundering, terrorism financing and fraudulent activities); (d) we have concerns that the Services are being used in a fraudulent or unauthorized manner.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "You shall not be entitled to any payment, compensation or damages whatsoever from us in relation to any suspension, limitation or termination of your use of the Services for any reason whatsoever. Any suspension, limitation or termination of your use of the Services for any reason whatsoever shall not release you from any liability or responsibility on your part, which at the time of such suspension, limitation or termination, has already accrued.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "The rights of suspension, limitation and termination under these Terms shall be without prejudice to any other rights or remedies which we may have (whether under these Terms, applicable law or otherwise).",
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "VI.2 Consequences of Termination",
                      }),
                      e.jsx("p", {
                        className: "mb-8",
                        children:
                          "You will no longer be entitled nor able to use the Services",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mb-8",
                    children: [
                      e.jsx("h4", {
                        className: "mb-4 dark:text-sand-500",
                        id: "VII",
                        children: "VII. Processing of Personal Data",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "Data protection and cookie policy is available at",
                          " ",
                          e.jsx("a", {
                            href: "https://privacy.angle.money",
                            className: "underlined",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "https://privacy.angle.money",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mb-8",
                    children: [
                      e.jsx("h4", {
                        className: "mb-4 dark:text-sand-500",
                        id: "VIII",
                        children: "VIII. General Provisions",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "VIII.1 Third-Party Links",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "The Interface may provide, or third parties may provide, links to other websites or applications or resources. Because we have no control over such sites, applications and resources, you acknowledge and expressly agree that we are not responsible for the availability of such external sites, applications or resources, and does not endorse and is not responsible or liable for any content, advertising, products or other materials on or available from such sites or resources. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "You further acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such site or resource.",
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "VIII.2 Entire Agreement",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "Except otherwise provided herein, these terms (as amended from time to time) and any document expressly referred to hereof constitute the entire agreement between the parties and supersedes any prior agreement, promise, assurance, warranty, representation, understanding, undertaking or arrangement between the parties relating to the subject matter of these terms, whether written or oral. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "No oral explanation or oral information given by either of us shall alter the interpretation of these Terms. You confirm that, in agreeing to accept these Terms, you have not relied on any representation that is not expressly included herein.",
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "VIII.3 Severability",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "These Terms shall be deemed severable, and the invalidity or unenforceability of any term or provision hereof shall not affect the validity or enforceability of these Terms or of any other term or provision hereof. Furthermore, such invalid or unenforceable term or provision shall be changed and interpreted to accomplish the objectives of the initial provision to the greatest extent possible under any applicable laws.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "No oral explanation or oral information given by either of us shall alter the interpretation of these Terms. You confirm that, in agreeing to accept these Terms, you have not relied on any representation that is not expressly included herein.",
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "VIII.4 Language",
                      }),
                      e.jsx("p", {
                        className: "mb-8",
                        children:
                          "These Terms are concluded in the English language upon you request and all communications including any notices or information being transmitted shall be in English. In the event that these Terms or any part of it is translated (for any proceedings, for your convenience or otherwise) into any other language, the English language shall prevail",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "VIII.5 Waiver",
                      }),
                      e.jsx("p", {
                        className: "mb-8",
                        children:
                          "The delay of enforcement or the non-enforcement of any of the terms of these Terms by any party shall not be construed as a waiver of any of the other rights of that party under these Terms and no right, power or remedy conferred upon or reserved for any party in these Terms is exclusive of any other right, power or remedy available to that party and each such right, power or remedy shall be cumulative.",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "VIII.6 Notices and Communications",
                      }),
                      e.jsx("p", {
                        className: "mb-8",
                        children:
                          "By using the Services and/or the Interface, you agree that we may provide you with any notices or other communications, including marketing, relating to your use of the the Services and/or the Interface: (a) via email (in each case to the address that you provide), SMS message, Telegram message or telephone call (in each case to the phone number that you provide), or (b) by posting to the Interface or on Twitter. For notices made by email, the date of receipt will be deemed the date on which such notice is transmitted. You will always be given the option to unsubscribe from receiving any marketing material from us.",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "VIII.7 Section Titles",
                      }),
                      e.jsx("p", {
                        className: "mb-8",
                        children:
                          "The section titles in the Terms are for convenience only and have no legal or contractual effect.",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children:
                          "VIII.8 Governing Law and Submission to Juridisction",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "The courts of British Virgin Islands have exclusive jurisdiction to settle any dispute arising from or connected with these Terms (including a dispute relating to the existence, validity or termination of these Terms or the consequences of their nullity or any non-contractual obligation arising out of or in connection with these Terms).",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "Users must bring any and all legal claims pertaining to the Services in their individual capacities and not as a claimant in or member of any purported class action, collective action, private attorney general action, or other representative proceeding. Users agree to waive the right to demand a trial by jury, where applicable",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "w-full pl-0 dark:text-sand-500 lg:w-1/3 lg:pl-16",
                children: [
                  e.jsx("p", {
                    className: "mb-4 font-bold",
                    children: "Terms of use and services of the interface",
                  }),
                  e.jsx("a", {
                    className: "mb-8",
                    href: v.angleTerms,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: e.jsx(i, {
                      type: "button",
                      look: "primary",
                      onClick: () => window.open(v.angleTerms, "_blank"),
                      rightIcon: e.jsx(k, { mui: "FileDownload" }),
                      children: "Download PDF",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  B = "/assets/holyheld-5f7fa118.png";
export { z as H, W as T, B as h };
