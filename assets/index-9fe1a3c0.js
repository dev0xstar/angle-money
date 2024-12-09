import { f as u, S as f, I as e, U as b, O as v } from "./react-fa804298.js";
import { m as y, F as k } from "./style-829a44f9.js";
import { I as g, z as a, B as p } from "./index-61771442.js";
import { a as l } from "./index-834edce6.js";
import { D as x } from "./lodash-52c9deff.js";
import { b as j } from "./PageHeader-990598b1.js";
const A = ({
    index: t,
    faq: o,
    questionClassName: c,
    transitionDelay: d = !0,
  }) => {
    const [n, r] = u.useState(!1),
      { t: h } = f(),
      s = { transitionDelay: `${t * 0.1}s` };
    return e.jsxs(
      "li",
      {
        style: d ? s : { transitionDelay: "0" },
        className: `ease overflow-hidden last:border-b-0 border-b border-purple-500 pb-0 pt-4 first:pt-0 ${
          n ? "opened" : ""
        }`,
        children: [
          e.jsxs("aside", {
            className:
              "dim flex w-full cursor-pointer items-center justify-between pb-1.5",
            onClick: () => {
              r(!n);
            },
            children: [
              e.jsx("p", {
                className: `font-bold text-lg pr-2 dark:text-sand-500 lg:w-4/5 ${c}`,
                children: h(o.question),
              }),
              e.jsx(g, {
                svg: "cross",
                className: n
                  ? "ease w-6 rotate-[225deg] transform"
                  : "ease w-6",
                alt: "cross",
              }),
            ],
          }),
          e.jsx("main", {
            className: n ? "ease max-h-96" : "ease max-h-0",
            children: e.jsx("p", {
              className: "text-sm pb-3 dark:text-sand-500 xl:w-4/5",
              children: e.jsx(b, { i18nKey: o.answer, children: o.answer }),
            }),
          }),
        ],
      },
      t
    );
  },
  w = [
    {
      question: "What is Merkl?",
      answer:
        "Merkl is a platform that bridges users in DeFi with liquidity to deploy to incentive providers aiming to boost activity and liquidity in their protocols. Users can leverage Merkl to earn rewards or points by participating in various incentive campaigns, while incentive providers can utilize the platform to meet all their incentivization and growth needs - whether it is tracking points earned by their users, attracting more lenders, borrowers, liquidity providers, executing retroactive token airdrops, or addressing other unique use cases specific to their protocols. In short, Merkl allows users to effortlessly earn competitive returns and access attractive opportunities, while enabling incentive providers to launch complex growth and incentive campaigns swiftly and without the usual operational burdens.",
    },
    {
      question: "What types of incentivization campaigns does Merkl support?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "Merkl supports various campaign types across many different chains, including:",
          e.jsxs("ul", {
            className: "ml-4",
            children: [
              e.jsx("li", {
                children:
                  "Campaigns for liquidity providers in Concentrated Liquidity Pools (CLAMM) like on Uniswap V3",
              }),
              e.jsx("li", {
                children:
                  "Campaigns to airdrop tokens to a wide range of users based on a json file or based on their token holdings at a given moment in time",
              }),
              e.jsx("li", {
                children:
                  "Campaigns to reward simple holders of ERC20 tokens based on their relative balance over time. This can typically apply to holders of LP tokens on liquidity pools.",
              }),
              e.jsx("li", {
                children:
                  "Campaigns for lenders and borrowers of various types of lending protocols including Aave, Compound, Morpho, Euler, Silo, Radiant, Dolomite",
              }),
            ],
          }),
        ],
      }),
    },
    {
      question: "How do I start earning rewards on Merkl?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "To start earning rewards on Merkl:",
          e.jsxs("ul", {
            className: "ml-4",
            children: [
              e.jsxs("li", {
                children: [
                  "1. Visit ",
                  e.jsx("a", {
                    href: "https://app.merkl.xyz",
                    children: "app.merkl.xyz",
                  }),
                  ".",
                ],
              }),
              e.jsx("li", {
                children:
                  "2. Explore the various opportunities listed and find the one that suits you best.",
              }),
              e.jsx("li", {
                children:
                  "3. Invest your liquidity directly on the protocol's app using the provided links. You do not need to stake or deposit your liquidity on any Merkl smart contract to be eligible to rewards, these will accrue directly.",
              }),
              e.jsxs("li", {
                children: [
                  "4. Check the ",
                  e.jsx("a", { href: "user", children: "user dashboard" }),
                  " to track your positions and claim your rewards.",
                ],
              }),
            ],
          }),
        ],
      }),
    },
    {
      question: "How does Merkl work?",
      answer:
        "Merkl operates on an offchain engine that analyzes both onchain and offchain data to measure user behavior and distribute rewards among eligible users based on the rules set by the campaign's incentive provider. The Merkl's engine aggregates reward distribution data into a merkle tree, compresses it into a merkle root, and pushes it onchain, allowing users to claim their rewards.",
    },
    {
      question:
        "How to create a tailored incentive campaign to grow my project?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "You can set up basic campaigns to incentivize concentrated liquidity pools, reward ERC20 token holders based on their relative balance (including LP tokens, lending or borrowing receipt tokens), and more in just 5 minutes by",
          " ",
          e.jsx("a", { href: "/create", children: "clicking here" }),
          ". You can then navigate to the type of campaign you want to create. If you want your protocol to be supported by Merkl, create more tailored and personalized incentives, or if you want Merkl to support specific use cases (e.g., incentivizing users of a perpetual DEX protocol, incentivizing borrowers of a lending protocol who are not folding their positions, creating incentivization programs for yield aggregators, add any type of custom rules to build your dream incentivization program, ...), please contact us by",
          " ",
          e.jsx("a", {
            href: "https://t.me/Angprotocol",
            children: "joining Telegram",
          }),
          ".",
        ],
      }),
    },
    {
      question: "Are all protocols supported by Merkl?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "Not by default, but Merkl already covers the majority of the use cases needed in DeFi. Typically Uniswap V2-like liquidity pools and classical lending/borrowing protocols are natively supported for reward computation. In these cases, we recommend checking with us before creating a campaign whether APRs and TVL will be computed accurately and correctly by the Merkl system, so we can proceed with the integration in case of. Concentrated liquidity AMMs like Uniswap V3 and automated liquidity management (ALM) solutions built on top need to be whitelisted and integrated on Merkl before. For a comprehensive list of supported AMMs and ALMs, check",
          " ",
          e.jsx("a", {
            href: "https://app.merkl.xyz/integrations",
            children: "this link",
          }),
          ". For any integration inquiries, please reach out to us by",
          " ",
          e.jsx("a", {
            href: "https://t.me/Angprotocol",
            children: "joining Telegram",
          }),
          ".",
        ],
      }),
    },
    {
      question: "Where does the yield come from?",
      answer:
        "The yield comes from tokens distributed by protocols as incentives. APR values displayed on Merkl only account for token rewards you may accrue and are not inclusive of additional transaction fees or yield you could earn with your position. The amount of rewards you receive depends on the usage of your liquidity and/or the balance of tokens in your position. Incentive providers may choose to customize their rewards and add some specific eligibility rules, you may check all these in the card corresponding to the campaign you're participating to in the given opportunity page.",
    },
    {
      question:
        "Can I claim rewards from multiple campaigns in one transaction?",
      answer:
        "Yes, Merkl aggregates rewards from multiple campaigns into a single Merkle Root, allowing you to claim all your rewards on a given chain in one transaction.",
    },
    {
      question:
        "How often are rewards distributed on Merkl and how can I claim them?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "Rewards are distributed every 3 to 12 hours, known as distribution epochs, depending on the chain the campaign is running on. You can claim your rewards directly from the Merkl ",
          e.jsx("a", { href: "user", children: "user dashboard" }),
          " or any other app that integrates with Merkl. Claiming is not required at every epoch; unclaimed rewards can be accumulated and claimed later. To learn when the next distribution epoch of the campaign you have positions in is, check this ",
          e.jsx("a", { href: "status", children: "link" }),
          ".",
        ],
      }),
    },
    {
      question: "How often are rewards made available on Merkl?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "Rewards corresponding to incentives distributed through Merkl do not compound block by block but are made available regularly - through a merkle root update - at a frequency depending on the chain. To find out the update frequency for each chain or to learn when the next distribution epoch of your campaigns are, check this",
          " ",
          e.jsx("a", { href: "status", children: "link" }),
          ". You may also find out when the last distribution for your campaigns took place on the card associated to the campaign on the opportunity page for the pool/position you are incentivizing.",
        ],
      }),
    },
    {
      question: "Can there be delays in campaign updates?",
      answer: e.jsx(e.Fragment, {
        children:
          "Yes, there may be delays in the onchain merkle root updates due to potential flaws in the script or infrastructure used to update results onchain.",
      }),
    },
    {
      question: "What happens if I specify an invalid or unsupported address?",
      answer: e.jsx(e.Fragment, {
        children:
          "If you specify an invalid address or an address not marked as supported, your rewards will not be taken into account. Instead, all rewards will be distributed to the address that created the campaign so you can recover the funds.",
      }),
    },
    {
      question: "Can I retrieve rewards if I send too much by mistake?",
      answer: e.jsx(e.Fragment, {
        children:
          "No, if you mistakenly send too many rewards compared to what you intended, you will not be able to retrieve them. Additionally, you cannot prematurely end a reward distribution once it has been created.",
      }),
    },
    {
      question:
        "Does the Merkl engine consider all onchain actions during incentivization?",
      answer: e.jsx(e.Fragment, {
        children:
          "The Merkl engine handling reward distribution may not consider all onchain actions (like all the swaps on a pool for a campaign on a concentrated liquidity pool), but only a subset of them to improve efficiency. Using Merkl implies that you understand how the script works, the approximations it makes, and the behaviors it may trigger for some campaigns (e.g., just-in-time liquidity on concentrated liquidity pools).",
      }),
    },
    {
      question:
        "I have just created my campaign and can't see it live on Merkl. Is this normal?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "Yes, this is normal. Campaign creation typically takes about 30 minutes to 1 hour before it becomes visible on Merkl's frontend. If it takes longer than this, please contact the Merkl team by",
          " ",
          e.jsx("a", {
            href: "https://t.me/Angprotocol",
            children: "joining Telegram",
          }),
          " ",
        ],
      }),
    },
    {
      question: "Are there any requirements for earning and claiming rewards?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "Yes, users earning less than 1/10,000,000th (0.00001%) of the campaign rewards per engine run are not eligible for incentives. For concentrated liquidity only, positions with less than $20 of liquidity are not eligible for incentives. Rewards can only be claimed by the address that earned them. If you need to claim rewards on behalf of another address, please",
          " ",
          e.jsx("a", {
            href: "https://t.me/Angprotocol",
            children: "joining Telegram",
          }),
          " ",
          "to have your address whitelisted.",
        ],
      }),
    },
    {
      question: "What are the potential risks when using Merkl?",
      answer:
        "There is no risk of loss of funds when using Merkl, as funds remain in the underlying pool or lending/borrowing protocol and you never need to deposit liquidity in any Merkl smart contract to be eligible to rewards. However, there can be risks associated with rewards being delayed or miscalculated.",
    },
    {
      question: "How can I track my positions and rewards on Merkl?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "You can track your active positions and rewards through the Merkl ",
          e.jsx("a", { href: "user", children: "user dashboard" }),
          ". This dashboard provides a clear view of your investments and earnings. Some positions associated to campaigns live on Merkl may however not be well supported and we're consistently doing our best effort to ensure that any position on a live Merkl campaign can be detected.",
        ],
      }),
    },
    {
      question: "Can I earn rewards from multiple incentive providers?",
      answer:
        "Yes, Merkl supports multiple incentive providers for the same type of opportunity. You will receive rewards from all applicable incentive providers you have positions in when you claim your rewards.",
    },
    {
      question: "Is there a fee to use Merkl?",
      answer: e.jsxs(e.Fragment, {
        children: [
          e.jsx("b", {
            children: "Merkl is free for users, excluding gas fees.",
          }),
          " There is a maintenance fee of 3% for creating a campaign, except for airdrop campaigns, which have a fee of 0.5%. If you're looking to create more custom long-term programs on Merkl, feel free to contact us to understand what pricing we could apply.",
        ],
      }),
    },
    {
      question: "Can rewards posted onchain be disputed?",
      answer:
        "Yes, everyone can permissionlessly dispute the rewards posted onchain if they believe there has been an error in the distribution process. If a dispute is valid, the onchain merkle root is revoked and corrected, and if the reward contestation is invalid, the dispute period restarts. Campaign creators are responsible for checking campaign results and disputing them if necessary.",
    },
    {
      question:
        "What is the difference between Merkl and a liquidity manager like Gamma or Arrakis?",
      answer:
        "Merkl for incentives on concentrated liquidity pools is not based on a one-size-fits-all approach in the sense that liquidity providers are rewarded regardless of where and how they provide their liquidity and without having to stake their liquidity anywhere. It is compatible with Gamma and Arrakis as if you provide liquidity through Gamma or Arrakis on an incentivized pool, you will also be automatically rewarded.",
    },
    {
      question:
        "What should I do about smart contract addresses eligible for rewards?",
      answer:
        "If you do not blacklist smart contracts eligible for rewards (e.g., liquidity position managers or smart contract addresses holding LP tokens not natively supported by the Merkl system), the script will not account for the specificities of these addresses and will reward them like a normal externally owned account. If these are smart contracts that do not support external rewards, the rewards accruing to them will be lost.",
    },
    {
      question: "What are the risks?",
      answer:
        "There is no risk of loss of funds when using Merkl as funds stay on the underlying pool and you don't have to deposit them in Merkl smart contracts. There can be a risk of rewards being delayed or miscalculated.",
    },
    {
      question:
        "How to create a tailored incentive campaign to grow my project?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "You can set up basic campaigns (incentivize concentrated liquidity pools, reward holders of an ERC20 tokens, reward lenders and/or borrowers in a given protocol, ...) in 5 minutes",
          " ",
          e.jsx("a", {
            className: "underlined",
            href: "https://app.merkl.xyz/create",
            target: "_blank",
            rel: "noreferrer noopener",
            children: "here",
          }),
          ". If you want Merkl to support specific use cases (e.g. users of a perp DEX protocol, borrowers of a lending protocol that are not folding their positions, ...), contact us on",
          " ",
          e.jsx("a", {
            className: "underlined",
            href: "https://www.google.com/url?q=https://t.me/Angprotocol",
            target: "_blank",
            rel: "noreferrer noopener",
            children: "Merkl Telegram",
          }),
          ".",
        ],
      }),
    },
    {
      question: "How to create a tailored incentive campaign?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "If you want Merkl to support specific use cases (e.g. users of a perp DEX protocol, borrowers of a lending protocol that are not folding their positions, ...), contact us on",
          " ",
          e.jsx("a", {
            className: "underlined",
            href: "https://www.google.com/url?q=https://t.me/Angprotocol",
            target: "_blank",
            rel: "noreferrer noopener",
            children: "joining Telegram",
          }),
        ],
      }),
    },
    {
      question: "How to add a token to the list of incentives?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "You can already distribute many tokens using Merkl such as ANGLE, UNI, SUSHI, GHO, AAVE, CAKE, WETH, USDC, and more. You can find the list of all whitelisted tokens on a given chain",
          " ",
          e.jsx("a", {
            className: "underlined",
            href: "https://app.merkl.xyz/integrations",
            target: "_blank",
            rel: "noreferrer noopener",
            children: "here",
          }),
          ". If you want to incentivize users with a token that is not supported yet, please fill the relevant form here",
          " ",
          e.jsx("a", {
            className: "underlined",
            href: "https://app.merkl.xyz/partner",
            target: "_blank",
            rel: "noreferrer noopener",
            children: "form",
          }),
          " ",
          "to whitelist it.",
        ],
      }),
    },
  ],
  m = [
    {
      question: "What is a stablecoin?",
      answer:
        "A stablecoin is a cryptocurrency whose value is pegged to a certain currency, such as the U.S. Dollar or the Euro, or a commodity such as gold. While the price of most cryptocurrencies like Bitcoin or Ethereum fluctuates, a stablecoin gives its users the possibility to trade and hold value on the blockchain without being subjected to market volatility.",
    },
    {
      question: "How does a stablecoin work?",
      answer:
        "The stability of a stablecoin is ensured by the reserve backing it. When a new stablecoin is issued on the blockchain, assets are added in its reserves. Stablecoins are backed in various ways. Most are backed by fiat, meaning there's 1 dollar in reserve for each stablecoin. With Angle Protocol, USDA and EURA are over-collateralized: there's more value in assets in the reserves than the stablecoins in circulation. This equity buffer further enhances security.",
    },
    {
      question: "What are the different types of stablecoins?",
      answer:
        "There are various stablecoins pegged to different underlying assets, including the Dollar, Euro, Yuan, gold, silver, and more. Other differentiation criteria include the type of assets in the stablecoin reserves, like fiat currencies, cryptocurrencies, or real-world assets. Furthermore, variations in functioning, whether centralized, decentralized, or algorithmic, also distinguish stablecoins. Additionally, certain stablecoins like USDA and EURA by Angle Protocol offer the potential to generate yield for their users.",
    },
    {
      question: "Why choose Angle's stablecoins?",
      answer:
        "Angle’s stablecoins stand out as complete and reliable stablecoins, supported by a robust and innovative Price Stability Module. USDA and EURA are over-collateralized, decentralized and transparent, enabling anyone to verify their reserves in real-time. Furthermore, USDA and EURA generate yield for their users and facilitates competitive pricing when exchanging USD for Euro onchain.",
    },
    {
      question: "How to get Angle's stablecoins?",
      answer:
        "Users can get USDA, Angle's Dollar stablecoin, and EURA, Angle's Euro stablecoin, by swapping their assets on the Angle app or decentralized exchanges (DEXs) like 1inch. It is also possible to acquire USDA and EURA by borrowing them against a variety of collaterals.",
    },
    {
      question: "Why choose USDA?",
      answer:
        "Angle’s Dollar stablecoin USDA stands out as the most complete and reliable USD stablecoin, supported by a robust and innovative Price Stability Module. USDA is over-collateralized, decentralized and transparent, enabling anyone to verify its reserves in real-time. Furthermore, USDA generates yield for its users and facilitates competitive pricing when exchanging USD for Euro onchain.",
    },
    {
      question: "How to get USDA?",
      answer:
        "Users can get USDA, Angle's Dollar stablecoin, by swapping their assets on the Angle app or decentralized exchanges (DEXs) like 1inch. It is also possible to acquire USDA by borrowing it against a variety of collaterals.",
    },
    {
      question: "How to secure USDA tokens?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "When users own crypto like USDA, they have two keys: a public key for receiving funds and a private key for signing transactions. If the private key is shared or compromised, they risk losing access to their funds.",
          e.jsx("br", {}),
          e.jsx("br", {}),
          "Users can manage their USDA with online or offline wallets. Online wallets, or hot wallets, store the private key on internet-connected devices like smartphones, vulnerable to attacks. In contrast, offline wallets, also known as hardware wallets, keep the private key offline in a secure environment. ",
          e.jsx("br", {}),
          e.jsx("br", {}),
          "Angle Protocol recommends using the Ledger crypto wallet, the industry-leading hardware wallet, to secure USDA. Ledger ensures robust security with private keys stored on a military-grade security chip and requires a PIN code for access. With complete isolation between private keys — kept on the hardware wallet — and users' computer or mobile device when interacting with crypto service & DApp, the",
          " ",
          e.jsx("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.ledger.com/coin/wallet/ethereum",
            children: "Ledger Ethereum wallet",
          }),
          " ",
          "keeps keys safe, granting full control over USDA.",
        ],
      }),
    },
    {
      question: "Why choose EURA?",
      answer:
        "Angle’s Euro stablecoin EURA stands out as the most complete and reliable Euro stablecoin, supported by a robust and innovative Price Stability Module. EURA is over-collateralized, decentralized and transparent, enabling anyone to verify its reserves in real-time. Furthermore, EURA generates yield for its users and facilitates competitive pricing when exchanging USD for Euro onchain. For all these reasons, EURA is currently the most traded Euro stablecoin.",
    },
    {
      question: "How to get EURA?",
      answer:
        "Users can get EURA, Angle's Euro stablecoin, by swapping their assets on the Angle app or decentralized exchanges (DEXs) like 1inch. It is also possible to acquire EURA by borrowing it against a variety of collaterals.",
    },
    {
      question: "How to secure EURA tokens?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "When users own crypto like EURA, they have two keys: a public key for receiving funds and a private key for signing transactions. If the private key is shared or compromised, they risk losing access to their funds.",
          e.jsx("br", {}),
          e.jsx("br", {}),
          "Users can manage their EURA with online or offline wallets. Online wallets, or hot wallets, store the private key on internet-connected devices like smartphones, vulnerable to attacks. In contrast, offline wallets, also known as hardware wallets, keep the private key offline in a secure environment.",
          e.jsx("br", {}),
          e.jsx("br", {}),
          "Angle Protocol recommends using the Ledger crypto wallet, the industry-leading hardware wallet, to secure EURA. Ledger ensures robust security with private keys stored on a military-grade security chip and requires a PIN code for access. With complete isolation between private keys — kept on the hardware wallet — and users' computer or mobile device when interacting with crypto service & DApp, the",
          " ",
          e.jsx("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.ledger.com/coin/wallet/ethereum",
            children: "Ethereum Ledger wallet",
          }),
          " ",
          "keeps keys safe, granting full control over EURA.",
        ],
      }),
    },
    {
      question: "How to secure stUSD tokens?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "When users own crypto like stUSD, they have two keys: a public key for receiving funds and a private key for signing transactions. If the private key is shared or compromised, they risk losing access to their funds.",
          e.jsx("br", {}),
          e.jsx("br", {}),
          "Users can manage their stUSD with online or offline wallets. Online wallets, or hot wallets, store the private key on internet-connected devices like smartphones, vulnerable to attacks. In contrast, offline wallets, also known as hardware wallets, keep the private key offline in a secure environment.",
          e.jsx("br", {}),
          e.jsx("br", {}),
          "Angle Protocol recommends using the Ledger crypto wallet, the industry-leading hardware wallet, to secure stUSD. Ledger ensures robust security with private keys stored on a military-grade security chip and requires a PIN code for access. With complete isolation between private keys — kept on the hardware wallet — and users' computer or mobile device when interacting with crypto service & DApp, the",
          " ",
          e.jsx("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.google.com/url?q=https://www.ledger.com/coin/wallet/erc20&sa=D&source=editors&ust=1714402455686991&usg=AOvVaw3rANobfhROSGG1Xs6lKNzI",
            children: "ERC20 wallet Ledger",
          }),
          " ",
          "keeps keys safe, granting full control over stUSD.",
        ],
      }),
    },
    {
      question: "What are Prots?",
      answer:
        "'Prots' are credits that users or protocols can earn and accumulate by completing specific actions. Prots holders will be able to redeem their Prots for ANGLE tokens at the end of Season 1 in September.",
    },
    {
      question: "How to earn Prots on X?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "Users can earn Prots by creating educational content about Angle and its stablecoins on X/Twitter.",
          " ",
          e.jsx("a", {
            href: a.angleTwitter,
            target: "_blank",
            rel: "noreferrer",
            children: "@AngleProtocol",
          }),
          " ",
          "must be tagged in the posts. Posts becomes eligible to earn Prots once",
          " ",
          e.jsx("a", {
            href: a.angleTwitter,
            target: "_blank",
            rel: "noreferrer",
            children: "@AngleProtocol",
          }),
          " ",
          "likes them. Each post will earn 100 Prots for every view it receive! Users can write as many posts as they want. So bring your best thread, diagram, educational analysis to stand out and get a view boost by being reshared by Angle Protocol's account!",
        ],
      }),
    },
    {
      question: "How to earn Prots by integrating USDA?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "Protocols can earn Prots by building on top of USDA. They receive 1 Prot for every USDA/stUSD they hold per day. But protocols can earn a whole lot more with various credit boosts! Fill out",
          " ",
          e.jsx("a", {
            href: a.integrationProgramForm,
            target: "_blank",
            rel: "noreferrer",
            children: "this form",
          }),
          " ",
          "to integrate USDA and earn Prots!",
        ],
      }),
    },
    {
      question:
        "Why are there Ethereum addresses and X usernames on the leaderboard?",
      answer:
        "Ethereum addresses correspond to DeFi protocols that integrated USDA and earn Prots. Usernames correspond to users who created content on X and earn Prots.",
    },
    {
      question: "How will ANGLE tokens be distributed?",
      answer:
        "Users and protocols will be able to redeem their Prots for ANGLE tokens at the end of Season 1 in September. Prots will be convertible to ANGLE tokens via the Merkl Reward Hub, built by Angle Labs, by connecting a wallet.",
    },
    {
      question: "What is stUSD?",
      answer:
        "stUSD is a staked version of USDA earning a native USD yield paid in USDA. It is a yield-bearing ERC-20 token that can be freely transferred and that is always redeemable for an ever-growing amount of USDA. The value of 1 stUSD is not meant to be $1: it increases over time as yield continuously accrues to it.",
    },
    {
      question: "Where does the stUSD yield come from?",
      answer:
        "The yield is generated by the assets the Angle Protocol holds across its different minting modules. In particular, the Angle Protocol collects yield from the interest rates paid by USDA borrowers in the context of the loans that can be taken through its Borrowing module, and from specific yield-bearing assets in reserve by the protocol.",
    },
    {
      question: "What are the stUSD risks?",
      answer:
        "Aside from the smart contract risk, trust assumptions are the same for stUSD and USDA. Returns may vary without notice but the deposited USDA cannot be lent or used in any way. For the risk associated with holding USDA, please refer to the documentation.",
    },
    {
      question: "How much does stUSD cost?",
      answer:
        "There are no protocol fees to deposit or withdraw from the stUSD contract. Withdrawals can be performed at any time.",
    },
    {
      question: "How does stUSD work?",
      answer:
        "When you deposit through this page, either you provide USDA and these are directly deposited in the stUSD contract in exchange for stUSD tokens or your tokens are swapped into USDA before being deposited in the contract. You can deposit as much as you want and withdraw at any moment. There are no lock-ups and no protocol fees for using stUSD.",
    },
    {
      question: "Where is my USDA capital?",
      answer:
        "Your USDA is deposited into a dedicated contract within the Angle Protocol commonly referred to as the stUSD contract.",
    },
    {
      question: "When will I start earning USDA?",
      answer:
        "You will start earning immediately after depositing your first USDA. You can then stay in the contract and keep earning for as long as you wish (from one block to years). Even in cases where Angle changes the savings rate schedule, your USDA will remain there until you withdraw it.",
    },
    {
      question: "Do I need to manage my stUSD position?",
      answer:
        "You do not need to manage this position, you will earn more USDA at the rate shown continuously until the rate is adjusted by Angle Protocol following the schedule voted by governance. You do not need to do anything if the USDA Savings Rate changes. You can leave your USDA in the contract and keep your stUSD for as long as you see fit.",
    },
    {
      question: "What is stEUR?",
      answer:
        "stEUR is a staked version of EURA earning a native EUR yield paid in EURA. It is a yield-bearing ERC-20 token that can be freely transferred and that is always redeemable for an ever-growing amount of EURA. The value of 1 stEUR is not meant to be 1€: it increases over time as yield continuously accrues to it.",
    },
    {
      question: "Where does the stEUR yield come from?",
      answer:
        "The yield is generated by the assets the Angle Protocol holds across its different minting modules. In particular, the Angle Protocol collects yield from the interest rates paid by EURA borrowers in the context of the loans that can be taken through its Borrowing module, and from specific yield-bearing assets in reserve by the protocol.",
    },
    {
      question: "What are the stEUR risks?",
      answer:
        "Aside from the smart contract risk, trust assumptions are the same for stEUR and EURA. Returns may vary without notice but the deposited EURA cannot be lent or used in any way. For the risk associated with holding EURA, please refer to the documentation.",
    },
    {
      question: "How much does stEUR cost?",
      answer:
        "There are no protocol fees to deposit or withdraw from the stEUR contract. Withdrawals can be performed at any time.",
    },
    {
      question: "How does stEUR work?",
      answer:
        "When you deposit through this page, either you provide EURA and these are directly deposited in the stEUR contract in exchange for stEUR tokens or your tokens are swapped into EURA before being deposited in the contract. You can deposit as much as you want and withdraw at any moment. There are no lock-ups and no protocol fees for using stEUR.",
    },
    {
      question: "Where is my EURA capital?",
      answer:
        "Your EURA is deposited into a dedicated contract within the Angle Protocol commonly referred to as the stEUR contract.",
    },
    {
      question: "When will I start earning EURA?",
      answer:
        "You will start earning immediately after depositing your first EURA. You can then stay in the contract and keep earning for as long as you wish (from one block to years). Even in cases where Angle changes the savings rate schedule, your EURA will remain there until you withdraw it.",
    },
    {
      question: "Do I need to manage my stEUR position?",
      answer:
        "You do not need to manage this position, you will earn more EURA at the rate shown continuously until the rate is adjusted by Angle Protocol following the schedule voted by governance. You do not need to do anything if the EURA Savings Rate changes. You can leave your EURA in the contract and keep your stEUR for as long as you see fit.",
    },
    {
      question: "How to secure stEUR tokens?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "When users own crypto like stEUR, they have two keys: a public key for receiving funds and a private key for signing transactions. If the private key is shared or compromised, they risk losing access to their funds.",
          e.jsx("br", {}),
          e.jsx("br", {}),
          "Users can manage their stEUR with online or offline wallets. Online wallets, or hot wallets, store the private key on internet-connected devices like smartphones, vulnerable to attacks. In contrast, offline wallets, also known as hardware wallets, keep the private key offline in a secure environment.",
          e.jsx("br", {}),
          e.jsx("br", {}),
          "Angle Protocol recommends using the Ledger crypto wallet, the industry-leading hardware wallet, to secure stEUR. Ledger ensures robust security with private keys stored on a military-grade security chip and requires a PIN code for access. With complete isolation between private keys — kept on the hardware wallet — and users' computer or mobile device when interacting with crypto service & DApp, the",
          " ",
          e.jsx("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.google.com/url?q=https://www.ledger.com/coin/wallet/erc20&sa=D&source=editors&ust=1714402455686991&usg=AOvVaw3rANobfhROSGG1Xs6lKNzI",
            children: "ERC20 Ledger wallet",
          }),
          " ",
          "keeps keys safe, granting full control over stEUR.",
        ],
      }),
    },
    {
      question: "How does the Angle savings product work?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "When you deposit assets, they go into a smart contract from Angle Protocol, called the stUSD contract for Dollar savings or the stEUR contract for Euro savings. You can either deposit USDA or EURA which are directly added to the stUSD or stEUR contracts, or deposit other assets (like USDC or EURC), which are automatically swapped into USDA or EURA before being deposited in the contract.",
          " ",
          e.jsx("strong", {
            children:
              "There are no minimum deposits, no protocol fees, no lockup period, and you can withdraw your funds at any time!",
          }),
        ],
      }),
    },
    {
      question: "What’s stUSD and stEUR?",
      answer:
        "stUSD (staked USDA) and stEUR (staked EURA) are yield-bearing USD and EUR stablecoins. You receive stUSD or stEUR when depositing assets (USDA, USDC, EURC…) into the Angle savings product. stUSD and stEUR’s value continuously increases over time by accruing yield. Thus, 1 stUSD is worth more than $1 today, and 1 stEUR is worth more than 1€. stUSD and stEUR are ERC20 tokens available on multiple networks — you can freely swap them for any other token, anytime, anywhere.",
    },
    {
      question: "Where does the yield come from?",
      answer:
        "stUSD and stEUR holders start earn a passive & native yield within seconds of acquiring stUSD or stEUR (whether by directly swapping assets or depositing stablecoins into the Angle savings product). Yield stems from returns generated by assets backing USDA and EURA (such as real-world assets and DeFi yield-bearing assets) as well as interest paid by USDA and EURA borrowers.",
    },
    {
      question: "When will I start earning?",
      answer:
        "You will start earning yield immediately after acquiring stUSD or stEUR. Yield is distributed with every block (≈ 12 sec. on Ethereum). You’ll keep earning as long as you hold your stUSD or stEUR tokens. You can swap your stUSD or stEUR — whose value increases over time — at any time, but you will stop earning yield once you do.",
    },
    {
      question: "What are the risks?",
      answer: e.jsxs(e.Fragment, {
        children: [
          "As with any DeFi product, zero risk doesn't exist. Although the stUSD and stEUR smart contracts are undergoing regular audits, there are risks associated with interacting with them, as well as counterparty risk or blockchain risk. Learn more about the risks in the",
          " ",
          e.jsx("a", {
            target: "_blank",
            rel: "noopener noreferrer",
            href: a.angleDocsRisks,
            children: "documentation",
          }),
          ".",
        ],
      }),
    },
    {
      question: "What’s Angle Protocol?",
      answer:
        "Angle is a decentralized Protocol specialized in building resilient stablecoin infrastructures. Known for its innovative stablecoin mechanisms and reliability, Angle is ranked among the safest DeFi protocols on DeFiSafety. Beyond USDA and a Dollar savings product, Angle is also behind the most traded Euro stablecoin — EURA — and a Euro savings product. Created in 2021, Angle is one of the oldest decentralized stablecoin protocols.",
    },
    { question: "", answer: "" },
  ],
  U =
    l === "app" || l === "landing"
      ? m
      : l === "merkl" || l === "merkl-landing"
      ? w
      : m;
m.map((t) => t.question);
w.map((t) => t.question);
const E = (t) => t.map((o) => U.find(({ question: c }) => c === o)),
  W = ({
    noDocs: t,
    faqs: o,
    docUrl: c = l === "merkl" || l === "merkl-landing"
      ? a.merklDocs
      : a.angleDocs,
    title: d = "FAQ",
    extraButton: n,
    embedded: r = !1,
  }) => {
    const h = E(o);
    return e.jsx("section", {
      className: `${r ? "" : "my-12 lg:my-16"} faq `,
      id: "faq",
      children: e.jsxs("div", {
        className: `${
          r ? "" : "container"
        } relative flex flex-wrap items-stretch justify-between`,
        children: [
          e.jsxs(y.div, {
            initial: { opacity: 0, x: "-50px" },
            whileInView: { opacity: 1, x: 0 },
            transition: { type: "spring", duration: 1, ease: "easeInOut" },
            viewport: { once: !0 },
            className: `${
              r
                ? "flex flex-col md:flex-row justify-between gap-2 md:items-center w-full"
                : "top-8 w-full self-start md:pr-8 lg:sticky lg:mb-0 lg:w-1/3 xl:w-1/5"
            } mb-6`,
            children: [
              e.jsx("h2", {
                className: `h3 dark:text-sand-500 ${r ? "" : "mb-4"}`,
                children: d,
              }),
              e.jsxs("div", {
                className: "flex gap-2 items-center flex-wrap",
                children: [
                  !!n && n,
                  !t &&
                    e.jsx(p, {
                      type: "button",
                      look: "secondary",
                      onClick: () => window.open(c, "_blank"),
                      rightIcon: e.jsx(g, { mui: "CallMade" }),
                      children: "Docs",
                    }),
                  e.jsx(p, {
                    type: "button",
                    look: "secondary",
                    onClick: () =>
                      window.open(
                        l === "merkl" || l === "merkl-landing"
                          ? a.merklDiscord
                          : a.angleDiscord,
                        "_blank"
                      ),
                    leftIcon: e.jsx(k, { size: "20px" }),
                    children: "Telegram",
                  }),
                ],
              }),
            ],
          }),
          e.jsx(y.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            className: `${r ? "" : "lg:w-2/3 xl:w-4/5"} w-full`,
            children: e.jsx("ul", {
              className: "list-none pl-0",
              children: Object.values(h).map((s, i) =>
                e.jsx(A, { faq: s, index: i, embedded: r }, i)
              ),
            }),
          }),
        ],
      }),
    });
  },
  D = (t) => {
    switch (t) {
      case 2:
        return "head2";
      case 3:
        return "head3 ml-2";
      case 4:
        return "head4 ml-3";
      case 5:
        return "head5 ml-4";
      case 6:
        return "head6 ml-6";
      default:
        return null;
    }
  },
  I = ({
    sticky: t = !1,
    className: o = "",
    headingElements: c = "h2,h3,h4,h5,h6",
    supplement: d,
  }) => {
    const { t: n } = f(),
      [r, h] = u.useState([]);
    return (
      u.useEffect(() => {
        const s = Array.from(document.querySelectorAll(c)).map((i) => ({
          id: x.kebabCase(i.id),
          text: i.innerText,
          level: Number(i.nodeName.charAt(1)),
        }));
        h(s);
      }, []),
      e.jsxs("nav", {
        className: `${o} ${
          t
            ? "custom-scrollbar fixed right-8 top-16 z-10 max-h-96 w-fit overflow-y-scroll rounded-lg border  border-transparent p-4 backdrop-blur-[2px]"
            : ""
        } table-contents`,
        children: [
          e.jsx("p", {
            className: "h4 mb-4 dark:text-sand-500",
            children: n("Table of Contents"),
          }),
          e.jsx("ul", {
            className: "list-none",
            children: r.map((s) =>
              e.jsx(
                "li",
                {
                  className: D(s.level),
                  children: e.jsx(v, {
                    className: "underlined",
                    to: `#${s.id}`,
                    onClick: (i) => {
                      i.preventDefault(),
                        document
                          .querySelector(`#${s.id}`)
                          .scrollIntoView({ behavior: "smooth" });
                    },
                    children: s.text,
                  }),
                },
                s.id
              )
            ),
          }),
          !!d && e.jsx("div", { className: "mt-4", children: d }),
        ],
      })
    );
  },
  F = "/assets/terms-header-b54eac97.svg",
  q = "/assets/privacy-header-8ceb55d0.svg",
  C = () =>
    e.jsx(e.Fragment, {
      children: e.jsxs("div", {
        className: "privacy container",
        children: [
          e.jsx(j, {
            chainId: null,
            logoClassName: "!w-20 md:!w-24 lg:!w-28 mr-8",
            headerLogo: q,
            headerLogoAlt: "Terms & Conditions Logo",
            title: "Privacy and Cookies policy",
          }),
          e.jsxs("main", {
            className: "relative flex flex-wrap",
            children: [
              e.jsxs("div", {
                className: "w-full dark:text-sand-500 lg:w-2/3",
                children: [
                  e.jsxs("p", {
                    className: "mb-8 dark:text-black-200",
                    children: [
                      "Date of the latest revision: May 26th, 2022.",
                      e.jsx("br", {}),
                      "This document is part of the Privacy available at",
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
                  e.jsx(I, { className: "mb-8", headingElements: "h4" }),
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
                        children: "I. General Information",
                      }),
                      e.jsxs("p", {
                        children: [
                          "This Privacy Policy (the “Privacy Policy”) provides a comprehensive description of how Angle Labs, Inc. and its affiliates (“Angle Labs”,” “we,” “our,” or “us”) collect, use, and share information about you in connection with the website at angle.money as well as other related interfaces (",
                          e.jsx("a", {
                            href: "https://app-angle-money.vercel.app",
                            className: "underlined",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "https://app-angle-money.vercel.app",
                          }),
                          " ",
                          ") (the “Interface”), and your rights and choices regarding such information. These terms apply to the Interface and any other online location that links to this Privacy Policy (collectively, the “Services”).",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "By using the Services, you agree to our collection, use, and disclosure practices, as well as any other activities described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, you should immediately discontinue the use of the Services and refrain from accessing the Interface.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "If you have any questions or wish to exercise your rights and choices, please contact us at the email or portal address set forth in the “Contact Us” section below. If you are a data subject in the European Economic Area or the United Kingdom, please see the additional disclosures at the end of this Privacy Policy.",
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
                        children: "II. Processing of Personal Data",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children:
                          "II.1 Use of Cookies and Similar Technologies",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "The Interface is using cookies. Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. Cookies are typically stored on your computer's hard drive. Information collected from cookies is used by us to evaluate the effectiveness of the Interface and analyze trends. The information collected from cookies allows us to determine such things as which parts of the Interface are most visited and difficulties our visitors may experience in accessing the Interface. With this knowledge, we can improve the quality of your experience on the Interface by recognizing and delivering more of the most desired features and information, as well as by resolving access difficulties.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "We may use third party service providers, to assist us in better understanding the use of the Interface. We, or our service providers, will place cookies on the hard drive of your computer (or use similar technologies) and will receive information that we select that will educate us on such things as how visitors navigate around the Interface. This information is aggregated to provide statistical data about our users' browsing actions and patterns, and does not personally identify individuals (however, see below information on Ethereum wallet addresses). This information may include:",
                          e.jsxs("ul", {
                            children: [
                              e.jsx("li", {
                                children:
                                  "Computer or mobile device information,",
                              }),
                              e.jsxs("li", {
                                children: [
                                  "Website usage information, such as:",
                                  e.jsxs("ul", {
                                    children: [
                                      e.jsx("li", { children: "Page views," }),
                                      e.jsx("li", {
                                        children:
                                          "Account changes (i.e. connecting a wallet)",
                                      }),
                                      e.jsx("li", {
                                        children: "Button clicks,",
                                      }),
                                      e.jsx("li", {
                                        children: "Input form changes,",
                                      }),
                                      e.jsx("li", { children: "Errors." }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("br", {}),
                          "The information and analysis so collected will be used to assist us in better understanding our visitors' interests in our Interface and how to better serve those interests, as well as help ensure secure use of the Interface for all users. If you want to avoid using cookies altogether, you can disable cookies in your browser. However, disabling cookies might make it impossible for you to use certain features of the Interface. Your use of the Interface with a browser that is configured to accept cookies constitutes acceptance of our and third-party cookies.",
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "II.2 Google Analytics",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "The Interface uses Google Analytics, a web analytics service provided by Google Inc, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. You can deactivate Google Analytics with a browser plug-in, which can be found here. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "Google Analytics also uses cookies. These allow Google Analytics to analyze the use of the Interface. The information collected based on cookies about the use of the Interface (including your IP address) is usually transferred to a Google server in the USA and stored there. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "Google uses the collected information to evaluate the use of the Interface, to write reports for us in this regard and to provide other related services to us. You can learn more at",
                          " ",
                          e.jsx("a", {
                            href: "https://support.google.com/analytics",
                            className: "underlined",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "support.google.com/analytics",
                          }),
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "II.3 Public Ethereum Addresses",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "We use and collect public Ethereum addresses to identify and document a user’s journey through our products and historical use of the Interface and Services, as defined in the Terms.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "We may group and analyse these user journeys and historical usage collectively in order to improve our product user experience. We may also use this data to facilitate individual access to the Interface, Services and linked third party websites, communicate with individuals regarding their use of the Services, and in other ways related to individual use of the Services and the Interface.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "The legal basis for this processing is that it is necessary to fulfil a contract with you, as well as our legitimate interests, such as monitoring and improving the Interface, and the proper protection of the Interface against risks.",
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "II.4 Blockchain Data",
                      }),
                      e.jsx("p", {
                        className: "mb-8",
                        children:
                          "Note that we are not responsible for your use of the Ethereum blockchain and your data processed in this decentralized and permissionless network.",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "II.5 Use of Information",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "We do not anticipate using, but we may collect and use information for business purposes in accordance with the practices described in this Privacy Policy. Our business purposes for collecting and using information include: ",
                          e.jsx("br", {}),
                          e.jsxs("ul", {
                            children: [
                              e.jsx("li", {
                                children:
                                  "Operating and managing the Services; performing services requested by you, such as responding to your comments, questions, and requests, and providing information support; sending you technical notices, updates, security alerts, information regarding changes to our policies, and support and administrative messages; detecting, preventing, and addressing fraud, breach of Terms, and threats, or harm; and compliance with legal and regulatory requirements.",
                              }),
                              e.jsx("li", {
                                children:
                                  "Protecting the security and integrity of the Services; improving the Services and other websites, apps, products and services; conducting promotions, such as hack-a-thons, including to verify your eligibility and deliver prizes in connection with your entries; and fulfilling any other business purpose, with notice to you and your consent.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "II.6 International Transfer",
                      }),
                      e.jsx("p", {
                        className: "mb-8",
                        children:
                          "We are entitled to transfer your personal data to third parties abroad for the purposes of the data processing and external access by you of services provided by those third parties. As personal data processors, they are obliged to protect data privacy to the same extent as we ourselves. We choose the processors carefully to ensure compliance with applicable laws.",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "II.7 Sharing and Disclosure of Information",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "If we share or disclose information that we collect, we do so in accordance with the practices described in this Privacy Policy. The categories of parties with whom we may share information include:",
                          e.jsxs("ul", {
                            children: [
                              e.jsxs("li", {
                                children: [
                                  e.jsx("strong", { children: "Affiliates." }),
                                  " We share information with our affiliates and related entities, including where they act as our service providers or for their own internal purposes.",
                                ],
                              }),
                              e.jsxs("li", {
                                children: [
                                  e.jsx("strong", {
                                    children: "Service Providers.",
                                  }),
                                  " We share information with third-party service providers for business purposes, including fraud detection and prevention, security threat detection, payment processing, customer support, data analytics, information technology, storage, and transaction monitoring. Any information shared with such service providers is subject to the terms of this Privacy Policy. All service providers that we engage with are restricted to only utilizing the information on our behalf and in accordance with our instructions.",
                                ],
                              }),
                              e.jsxs("li", {
                                children: [
                                  e.jsx("strong", {
                                    children: "Professional Advisors.",
                                  }),
                                  " We share information with our professional advisors for purposes of audits and compliance with our legal obligations.",
                                ],
                              }),
                              e.jsxs("li", {
                                children: [
                                  e.jsx("strong", {
                                    children: "Merger or Acquisition.",
                                  }),
                                  " We share information in connection with, or during negotiations of, any proposed or actual merger, purchase, sale or any other type of acquisition or business combination of all or any portion of our assets, or transfer of all or a portion of our business to another business.",
                                ],
                              }),
                              e.jsxs("li", {
                                children: [
                                  e.jsx("strong", {
                                    children:
                                      "Security and Compelled Disclosure.",
                                  }),
                                  " We share information to comply with the law or other legal process, and where required, in response to lawful requests by public authorities, including to meet national security or law enforcement requirements.",
                                ],
                              }),
                              e.jsxs("li", {
                                children: [
                                  e.jsx("strong", {
                                    children: "Facilitating Requests.",
                                  }),
                                  " We may share information about you at your request or direction.",
                                ],
                              }),
                              e.jsxs("li", {
                                children: [
                                  e.jsx("strong", { children: "Consent." }),
                                  " We may share information about you with your consent.",
                                ],
                              }),
                            ],
                          }),
                          e.jsx("br", {}),
                          "Notwithstanding the above, we may share information that does not identify you (including information that has been aggregated or de-identified) except as prohibited by applicable law. For information on your rights and choices regarding how we share information about you, please see the “Your Rights and Choices” section below.",
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
                        children: "III. Duration of data processing",
                      }),
                      e.jsx("p", {
                        children:
                          "We will process your personal data only for the period necessary to achieve the purpose of the processing, or as required by applicable laws. After the period the personal data will be deleted.",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mb-8",
                    children: [
                      e.jsx("h4", {
                        className: "mb-4 dark:text-sand-500",
                        id: "IV",
                        children: "IV. Data Security",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "We use appropriate technical and organizational security measures to protect your personal data. Our security measures are continuously improved in line with technical developments. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "Please note that any data transmission on the Internet (e.g. communication by email) is generally not secure and we accept no liability for data transmitted to us via the Internet. Unfortunately, absolute protection is not technically possible. This information does not apply to the websites of third parties and the corresponding links given on the Interface. We assume no responsibility and liability for these.",
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
                        children: "V. Your Rights and Choices",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "You have the right to receive information at any time and free of charge about your stored personal data, its origin and recipients and the purpose of data processing. Moreover, you have the right to correct, block or delete this data. ",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "For this purpose, as well as for further questions regarding personal data, you can contact us at any time at the address provided below.",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mb-8",
                    children: [
                      e.jsx("h4", {
                        className: "mb-4 dark:text-sand-500",
                        id: "VI",
                        children: "VI. Amendments to this Privacy Policy",
                      }),
                      e.jsx("p", {
                        className: "mb-8",
                        children:
                          "We may amend this Privacy Policy at any time by posting the amended version on the Interface including the effective date of the amended version. The current version of the Privacy Policy, as published on the Interface, is applicable.",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mb-8",
                    children: [
                      e.jsx("h4", {
                        className: "mb-4 dark:text-sand-500",
                        id: "VII",
                        children: "VII. Conflict or Inconsistency",
                      }),
                      e.jsx("p", {
                        className: "mb-8",
                        children:
                          "In the event of any conflict or inconsistency between this Privacy Policy and any non-English language translation thereof, the terms and provisions of this Privacy Policy shall control",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mb-8",
                    children: [
                      e.jsx("h4", {
                        className: "mb-4 dark:text-sand-500",
                        id: "VIII",
                        children: "VIII. Contact Us",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "If you have any questions about this privacy policy, please contact us via email at",
                          " ",
                          e.jsx("a", {
                            href: "mailto:contact@angle.money",
                            className: "underlined",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "contact@angle.money",
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
                        id: "IX",
                        children:
                          "IX. Additional Disclosures for Data Subjects in the European Economic Area and the United Kingdom",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "IX.1 Roles",
                      }),
                      e.jsx("p", {
                        className: "mb-8",
                        children:
                          "The General Data Protection Regulations in the European Economic Area and the United Kingdom (“GDPR”) distinguish between organizations that process personal data for their own purposes (known as “controllers”) and organizations that process personal data on behalf of other organizations (known as “processors”). We act as a controller with respect to personal data collected as you interact with the Services.",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "IX.2 Lawful Basis for Processing",
                      }),
                      e.jsx("p", {
                        className: "mb-8",
                        children:
                          "The GDPR requires a “lawful basis” for processing personal data. Our lawful bases include where: (i) you have given consent to the processing for one or more specific purposes, either to us or to our service providers or partners; (ii) processing is necessary for the performance of a contract with you; (iii) processing is necessary for compliance with a legal obligation; or (iv) processing is necessary for the purposes of the legitimate interests pursued by us or a third party, and your interests and fundamental rights and freedoms do not override those interests. Where applicable, we will transfer your personal data to third parties subject to appropriate or suitable safeguards, such as standard contractual clauses.",
                      }),
                      e.jsx("h6", {
                        className: "mb-4 dark:text-sand-500",
                        children: "IX.3 Your Data Subject Rights",
                      }),
                      e.jsxs("p", {
                        className: "mb-8",
                        children: [
                          "If you are a user in the European Economic Area or the United Kingdom, you maintain certain rights under the GDPR. These rights include the right to (i) request access and obtain a copy of your personal data; (ii) request rectification or erasure of your personal data; (iii) object to or restrict the processing of your personal data; and (iv) request portability of your personal data. Additionally, if we have collected and processed your personal data with your consent, you have the right to withdraw your consent at any time.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "Notwithstanding the foregoing, we cannot edit or delete information that is stored on a particular blockchain. This information may include transaction data (i.e., purchases, sales, and transfers) related to your blockchain wallet address and any NFTs held by your wallet address.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "To exercise any of these rights, please contact us via our email or postal address listed in the “Contact Us” section above and specify which right you are seeking to exercise. We will respond to your request within thirty (30) days. We may require specific information from you to help us confirm your identity and process your request. Please note that we retain information as necessary to fulfill the purpose for which it was collected and may continue to retain and use information even after a data subject request in accordance with our legitimate interests, including as necessary to comply with our legal obligations, resolve disputes, prevent fraud, and enforce our agreements.",
                          e.jsx("br", {}),
                          e.jsx("br", {}),
                          "If you have any issues with our compliance, please contact us as set out in the “Contact Us” section above. You also reserve the right to lodge a complaint with the data protection regulator in your jurisdiction.",
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
                    children: "Privacy Policy of the interface",
                  }),
                  e.jsx("a", {
                    className: "mb-8",
                    href: a.anglePrivacy,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: e.jsx(p, {
                      type: "button",
                      look: "primary",
                      onClick: () => window.open(a.anglePrivacy, "_blank"),
                      rightIcon: e.jsx(g, { mui: "FileDownload" }),
                      children: "Download PDF",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
export { W as F, C as P, I as T, F as t };
