import BackToTopButton from "@/app/_components/scroll-to-top";
import { Text } from "@/app/_components/text";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Across Terms of Service",
  description: "The terms of service for Across Protocol",
};

const BodyText = ({ children }: { children: ReactNode }) => (
  <Text variant="body">{children}</Text>
);

const MainHeadingText = ({ children }: { children: ReactNode }) => (
  <Text variant="heading-3">{children}</Text>
);

const SubHeadingText = ({ children }: { children: ReactNode }) => (
  <Text variant="heading-4">{children}</Text>
);

export default function SettlementLanding() {
  return (
    <main className="relative z-[1] mx-auto flex w-full max-w-2xl flex-col gap-0 px-4 py-10 lg:px-0">
      <div className="flex flex-col gap-5 lg:gap-6 ">
        <div className="mb-5 flex w-full flex-col items-center gap-5 lg:mb-0 lg:items-start lg:gap-6">
          <Text variant="heading-2" className="leading-[52.80px]">
            Terms of Service
          </Text>
          <Text variant="cap-case" className="text-grey-400">
            Dated: August 22, 2024
          </Text>
        </div>
        <BodyText>
          These Terms of Service (the &quot;Agreement&quot; or the “Terms”) explain the
          terms and conditions by which you may access and use the Products provided by
          Risk Labs (referred to herein as &quot;Risk Labs&quot;, &quot;we&quot;,
          &quot;our&quot;, or &quot;us&quot;). The Products shall include, but shall not
          necessarily be limited to, https://app.across.to, a website-hosted user
          interface (the &quot;Interface&quot; or &quot;App&quot;) and all products and
          features available via the Interface, including the API and all other software
          that Risk Labs or a third party has developed for cross-chain bridging,
          cross-chain onboarding, cross-chain intents, and cross-chain settlement on the
          Interface. You must read this Agreement carefully as it governs your use of the
          Products. By accessing or using any of the Products, you signify that you have
          read, understand, and agree to be bound by this Agreement in its entirety. If
          you do not agree, you are not authorized to access or use any of our Products
          and should not use our Products.
        </BodyText>
        <BodyText>
          To access or use any of our Products, you must be able to form a legally binding
          contract with us. Accordingly, you represent that you are at least the age of
          majority in your jurisdiction (e.g., 18 years old in the United States) and have
          the full right, power, and authority to enter into and comply with the terms and
          conditions of this Agreement on behalf of yourself and any company or legal
          entity for which you may access or use the Interface. If you are entering into
          this Agreement on behalf of an entity, you represent to us that you have the
          legal authority to bind such entity.
        </BodyText>
        <BodyText>
          You further represent that you are not (a) the subject of economic or trade
          sanctions administered or enforced by any governmental authority or otherwise
          designated on any list of prohibited or restricted parties (including but not
          limited to the list maintained by the Office of Foreign Assets Control of the
          U.S. Department of the Treasury) (collectively, a “Sanctioned Person”) or (b) a
          resident, citizen or agent of, or organized in, and do not have a registered
          office in, a jurisdiction or territory that is the subject of comprehensive
          country-wide, territory-wide, or regional economic sanctions by the United
          States (collectively, “Restricted Territories”). You further represent that you
          do not intend to transact with any Sanctioned Person or any person present in a
          Restricted Territory. Finally, you represent that your access and use of any of
          our Products will fully comply with all applicable laws and regulations, and
          that you will not access or use any of our Products to conduct, promote, or
          otherwise facilitate any illegal activity. If use of our Products are not
          permitted in your jurisdiction, you may not attempt to use any of our Products.
          Use of a Virtual Private Network (“VPN”) or any other privacy or anonymization
          tools or techniques to circumvent, or attempt to circumvent, to circumvent any
          such jurisdictional restrictions is prohibited.
        </BodyText>
        <BodyText>
          NOTICE: This Agreement contains important information, including a binding
          arbitration provision and a class action waiver, both of which impact your
          rights as to how disputes are resolved. Our Products are only available to you —
          and you should only access any of our Products — if you agree completely with
          these terms.
        </BodyText>
        <MainHeadingText>1. Our Products</MainHeadingText>
        <SubHeadingText>1.1 The Interface</SubHeadingText>
        <BodyText>
          The Interface provides a web or mobile-based means of access to a decentralized
          protocol on various public blockchains, including but not limited to Ethereum,
          that allows users to trade certain compatible digital assets (the &quot;Across
          protocol&quot; or the &quot;Protocol&quot;) between various public blockchains.
        </BodyText>
        <BodyText>
          The Interface is distinct from the Protocol and is one, but not the exclusive,
          means of accessing the Protocol. The Protocol itself has three versions,
          designated as v1, v2, and v3, each of which comprises open-source or
          source-available self-executing smart contracts that are deployed on various
          public blockchains, such as Ethereum. Risk Labs does not control or operate any
          version of the Protocol on any blockchain network. By using the Interface, you
          understand that you are not buying or selling digital assets from us and that we
          do not operate any liquidity pools on the Protocol or control trade execution on
          the Protocol. When users pay fees for trades, those fees accrue to liquidity
          providers and relayers for the Protocol. As a general matter, liquidity
          providers and relayers are independent third parties. The Protocol was initially
          deployed on the Ethereum blockchain and other blockchains compatible with the
          Ethereum Virtual machine that are designed to ensure the Ethereum blockchain can
          effectively process more transactions or other blockchains that are frequently
          referred to as &quot;Layer 2&quot; solutions.
        </BodyText>
        <BodyText>
          To access the Interface, you must use a non-custodial wallet software, which
          allows you to interact with public blockchains. Your relationship with that
          non-custodial wallet provider is governed by the applicable terms of service of
          that wallet provider. We do not have custody or control over the contents of
          your wallet and have no ability to retrieve or transfer its contents. By
          connecting your wallet to our Interface, you agree to be bound by this Agreement
          and all of the terms incorporated herein by reference.
        </BodyText>
        <SubHeadingText>1.2 Other Products</SubHeadingText>
        <BodyText>
          We may from time to time in the future offer additional products, and such
          additional products shall be considered a Product as used herein, regardless of
          whether such product is specifically defined in this Agreement.
        </BodyText>
        <SubHeadingText>1.3 Third Party Services and Content</SubHeadingText>
        <BodyText>
          When you use any of our Products, you may also be using the products, services
          or content of one or more third parties. Your use of such third party products,
          services or content may be subject to separate policies, terms of use and fees
          of these third parties, and you agree to abide by and be responsible for such
          policies, terms of use and fees, as applicable.
        </BodyText>
        <MainHeadingText>
          2. Modifications of this Agreement or Our Products
        </MainHeadingText>
        <SubHeadingText>2.1 Modifications of this Agreement</SubHeadingText>
        <BodyText>
          We reserve the right, in our sole discretion, to modify this Agreement from time
          to time. If we make any material modifications, we will notify you by updating
          the date at the top of the Agreement and by maintaining a current version of the
          Agreement at https://across.to/terms-of-service. All modifications will be
          effective when they are posted, and your continued accessing or use of any of
          the Products will serve as confirmation of your acceptance of those
          modifications. If you do not agree with any modifications to this Agreement, you
          must immediately stop accessing and using all of our Products.
        </BodyText>
        <SubHeadingText>2.2 Modifications of Our Products</SubHeadingText>
        <BodyText>
          We reserve the following rights, which do not constitute obligations of ours:
          (a) with or without notice to you, to modify, substitute, eliminate, restrict or
          add to any of the Products; (b) to review, modify, filter, disable, delete and
          remove any and all content and information from any of the Products; (c) to
          disable or modify access to access to the Products at any time in the event of
          any breach of these Terms. You acknowledge. understand, and agree that, from
          time to time, our Products may be inaccessible or inoperable for any reason,
          including: (a) equipment or technology or other infrastructure delay,
          inaccessibility, or malfunctions; (b) periodic maintenance procedures or repairs
          that Risk Labs or any of our suppliers or contractors may undertake from time to
          time; (c) causes beyond Risk Labs’ control or that Risk Labs could not
          reasonably foresee; (d) disruptions and temporary or permanent unavailability of
          underlying blockchain infrastructure; or (e) unavailability of third-party
          service providers or external partners for any reason.
        </BodyText>
        <BodyText>
          Without limitation of any other provision of these Terms, and as set forth
          below, Risk Labs has no responsibility or liability for any losses or other
          injuries resulting from any such events.
        </BodyText>
        <MainHeadingText>3. Intellectual Property Rights</MainHeadingText>
        <SubHeadingText>3.1 IP Rights Generally</SubHeadingText>
        <BodyText>
          As between you and Risk Labs, we own all intellectual property and other rights
          in and to each of our Products and its respective contents, including, but not
          limited to, software (including in the Interface), text, images, trademarks,
          service marks, copyrights, patents, designs, and its &quot;look and feel.&quot;
          This intellectual property is available under the terms of this agreement.
          Subject to the terms of this Agreement, we grant you a limited, revocable,
          non-exclusive, non-sublicensable, non-transferable license to access and use our
          Products solely in accordance with this Agreement. You agree that you will not
          use, modify, distribute, tamper with, reverse engineer, disassemble or decompile
          any of our Products for any purpose other than as expressly permitted pursuant
          to this Agreement. Except as set forth in this Agreement, we grant you no right,
          title or interest in or to any of our Products, including any intellectual
          property rights.
        </BodyText>
        <BodyText>
          You understand and acknowledge that the Protocol is not a Product and we do not
          control the Protocol.
        </BodyText>
        <SubHeadingText>3.2 Third-Party Resources and Promotions</SubHeadingText>
        <BodyText>
          Our Products may contain references or links to third-party resources,
          including, but not limited to, information, materials, products, or services,
          that we do not own or control. In addition, third parties may offer promotions
          related to your access and use of our Products. We do not approve, monitor,
          endorse, warrant or assume any responsibility for any such resources or
          promotions. If you access any such resources or participate in any such
          promotions, you do so at your own risk, and you understand that this Agreement
          does not apply to your dealings or relationships with any third parties. You
          expressly relieve us of any and all liability arising from your use of any such
          resources or participation in any such promotions, and you shall not use our
          Products in combination with any third party products or services in any manner
          that would infringe or otherwise violate the intellectual property rights of any
          third party or violate any applicable law.
        </BodyText>
        <SubHeadingText>3.3 Additional Rights</SubHeadingText>
        <BodyText>
          We reserve the right to cooperate with any law enforcement, court or government
          investigation or order or third party requesting or directing that we disclose
          information or content or information that you provide.
        </BodyText>
        <MainHeadingText>4. Your Responsibilities </MainHeadingText>
        <SubHeadingText>4.1 Prohibited Activity</SubHeadingText>
        <BodyText>
          You agree not to engage in, or attempt to engage in, any of the following
          categories of prohibited activity in relation to your access and use of the
          Interface:
        </BodyText>
        <BodyText>
          Intellectual Property Infringement. Activity that infringes on or violates any
          copyright, trademark, service mark, patent, right of publicity, right of
          privacy, or other proprietary or intellectual property rights under applicable
          law in any jurisdiction in the world.
        </BodyText>
        <BodyText>
          Data Privacy. Activity that violates any applicable laws, and contractual and
          fiduciary obligations relating to the collection, storage, use, transfer and any
          other processing of any personal information or any other sensitive or
          confidential information.
        </BodyText>
        <BodyText>
          Cyberattack. Activity that seeks to interfere with or compromise the integrity,
          security, or proper functioning of any computer, server, network, personal
          device, or other information technology system, including, but not limited to,
          the deployment of viruses and denial of service attacks. Activity that uses any
          robot, spider, crawler, scraper or other automated means or interface not
          provided by us to access the Products to introduce any malware, virus, Trojan
          horse, worm, logic bomb, drop-dead device, backdoor, shutdown mechanism or other
          harmful material into the Interface or the Products.
        </BodyText>
        <BodyText>
          Fraud and Misrepresentation. Activity that seeks to defraud us or any other
          person or entity, including, but not limited to, providing any false,
          inaccurate, or misleading information in order to unlawfully obtain the property
          of another, or to defraud Risk Labs, other users of the Products or any other
          person.
        </BodyText>
        <BodyText>
          Market Manipulation. Activity that violates any applicable law, rule, or
          regulation concerning the integrity of trading markets, including, but not
          limited to: the manipulative tactics commonly known as &quot;rug pulls&quot;;
          pumping and dumping; wash trading; front-running; accommodation trading;
          fictitious transactions; pre-arranged or non-competitive transactions; cornering
          or attempting cornering of digital assets; violations of bids or offers;
          spoofing; knowingly making any bid or offer for the purpose of making a market
          price that does not reflect the true state of the market; entering orders for
          the purpose of entering in to transactions without a net change in either
          party’s open positions but a resulting profit to one party and a loss to the
          other party, commonly known as a “money pass”; any other manipulation or
          fraudulent act or scheme to defraud, deceive, trick or mislead; or any other
          trading activity that, in the reasonable judgment of Risk Labs, is abusive,
          improper or disruptive to the operation of the Interface.
        </BodyText>
        <BodyText>
          Securities and Derivatives Violations. Activity that violates any applicable
          law, rule, or regulation concerning the trading of securities or derivatives,
          including, but not limited to, the unregistered offering of securities and the
          offering of leveraged and margined commodity products to retail customers in the
          United States.
        </BodyText>
        <BodyText>
          Sale of Stolen Property. Buying, selling, or transferring of stolen items,
          fraudulently obtained items, items taken without authorization, and/or any other
          illegally obtained items. Using or accessing the Products to transmit or
          exchange Digital Assets that are the direct or indirect proceeds of any criminal
          or fraudulent activity, including terrorism or tax evasion.
        </BodyText>
        <BodyText>
          Data Mining or Scraping. Activity that involves data mining, robots, scraping,
          or similar data gathering or extraction methods of content or information from
          any of our Products.
        </BodyText>
        <BodyText>
          Objectionable Content. Activity that involves soliciting information from anyone
          under the age of 18 or that is otherwise harmful, threatening, abusive,
          harassing, tortious, excessively violent, defamatory, vulgar, obscene,
          pornographic, libelous, invasive of another&apos;s privacy, hateful,
          discriminatory, or otherwise objectionable.
        </BodyText>
        <BodyText>
          Disruptive Content. Activity that could interfere with, disrupt, negatively
          affect, or inhibit other users from fully enjoying the Products, or that could
          damage, disable, overburden, or impair the functioning of the Interface or the
          Products in any manner
        </BodyText>
        <BodyText>
          Circumvention of Content-Filtering. Activity that circumvents any
          content-filtering techniques, security measures or access controls that Risk
          Labs employs on the Interface, including through the use of a VPN.
        </BodyText>
        <BodyText>
          Any Other Unlawful Conduct. Activity that violates any applicable law, rule, or
          regulation of the United States or another relevant jurisdiction, including, but
          not limited to, the restrictions and regulatory requirements imposed by U.S.
          law, including any relevant and applicable anti-money laundering and
          anti-terrorist financing laws and sanctions programs, such as the Bank Secrecy
          Act and the U.S. Department of Treasury’s Office of Foreign Asset Controls.
          Activity from a jurisdiction (including an IP address in a jurisdiction) that we
          have, in our sole discretion, determined is a jurisdiction where the use of the
          Site, the Interface or the Products is prohibited, including any Restricted
          Territory, or any activity with a Sanctioned Person.
        </BodyText>
        <BodyText>
          As a further condition to accessing or using the Products, you affirm that you
          will only transfer legally-obtained digital assets that belong to you and that
          any digital assets you use in connection with the Products are either owned by
          you or you are validly authorized to carry out actions using such digital
          assets.
        </BodyText>
        <SubHeadingText>4.2 Trading</SubHeadingText>
        <BodyText>
          You agree and understand that: (a) all trades you submit through any of our
          Products are considered unsolicited, which means that they are solely initiated
          by you; (b) you have not received any investment advice from us in connection
          with any trades; and (c) we do not conduct a suitability review of any trades
          you submit.
        </BodyText>
        <SubHeadingText>4.3 Non-Custodial and No Fiduciary Duties</SubHeadingText>
        Each of the Products is a purely non-custodial application, meaning we do not ever
        have custody, possession, or control of your digital assets at any time. It
        further means you are solely responsible for the custody of the cryptographic
        private keys to the digital asset wallets you hold and you should never share your
        wallet credentials or seed phrase with anyone. We accept no responsibility for, or
        liability to you, in connection with your use of a wallet and make no
        representations or warranties regarding how any of our Products will operate with
        any specific wallet. Risk Labs has no control over, or liability for, the
        delivery, quality, safety, legality, or any other aspect of any digital assets
        that you may transfer to or from a third party, and we are not responsible for
        ensuring that an entity with whom you transact completes the transaction or is
        authorized to do so, and if you experience a problem with any transactions in
        digital assets using the Products, then you bear the entire risk.
        <BodyText>
          Likewise, you are solely responsible for any associated wallet and we are not
          liable for any acts or omissions by you in connection with or as a result of
          your wallet being compromised. Risk Labs does not act as an agent for you or any
          other user of the Products and you are solely responsible for your use of the
          Products, including all your transfers of digital assets.
        </BodyText>
        <BodyText>
          This Agreement is not intended to, and does not, create or impose any fiduciary
          duties on us. To the fullest extent permitted by law, you acknowledge and agree
          that we owe no fiduciary duties or liabilities to you or any other party, and
          that to the extent any such duties or liabilities may exist at law or in equity,
          those duties and liabilities are hereby irrevocably disclaimed, waived, and
          eliminated. You further agree that the only duties and obligations that we owe
          you are those set out expressly in this Agreement.
        </BodyText>
        <SubHeadingText>4.4 Compliance and Tax Obligations</SubHeadingText>
        <BodyText>
          One or more of our Products may not be available or appropriate for use in your
          jurisdiction. By accessing or using any of our Products, you agree that you are
          solely and entirely responsible for compliance with all laws and regulations
          that may apply to you.
        </BodyText>
        <BodyText>
          Specifically, your use of our Products or the Protocol may result in various tax
          consequences, such as income or capital gains tax, value-added tax, goods and
          services tax, or sales tax in certain jurisdictions.
        </BodyText>
        <BodyText>
          It is your responsibility to determine whether taxes apply to any transactions
          you initiate or receive and, if so, to report and/or remit the correct tax to
          the appropriate tax authority.
        </BodyText>
        <SubHeadingText>4.5 Gas Fees and Price Estimates </SubHeadingText>
        <BodyText>
          Blockchain transactions require the payment of transaction fees to the
          appropriate network (&quot;Gas Fees&quot;). Except as otherwise expressly set
          forth in the terms of another offer by Risk Labs, you will be solely responsible
          to pay the Gas Fees for any transaction that you initiate via any of our
          Products. Although we attempt to provide accurate fee information, this
          information reflects our estimates of fees, which may vary from the actual fees
          paid to use the Products and interact with the Ethereum blockchain and other
          blockchains.
        </BodyText>
        <SubHeadingText>4.6 Release of Claims</SubHeadingText>
        <BodyText>
          You expressly agree that you assume all risks in connection with your access and
          use of any of our Products. You further expressly waive and release us from any
          and all liability, claims, causes of action, or damages arising from or in any
          way relating to your use of any of our Products. If you are a California
          resident, you waive the benefits and protections of California Civil Code §
          1542, which provides: &quot;[a] general release does not extend to claims that
          the creditor or releasing party does not know or suspect to exist in his or her
          favor at the time of executing the release and that, if known by him or her,
          would have materially affected his or her settlement with the debtor or released
          party.&quot;
        </BodyText>
        <MainHeadingText>5. Disclaimers</MainHeadingText>
        <SubHeadingText>5.1 Assumption of Risk -- Generally</SubHeadingText>
        <BodyText>
          Risk labs is a developer of software. Risk Labs does not operate a digital asset
          or derivatives exchange platform or offer trade execution or clearing services
          and has no oversight, involvement, or control concerning your transactions using
          the products. All transactions between users of the interface are executed
          peer-to-peer directly between the users’ addresses through a smart contract. You
          are responsible for complying with all applicable laws that govern your digital
          assets.
        </BodyText>
        <BodyText>
          By accessing and using any of our products, you represent that you are
          financially and technically sophisticated enough to understand the inherent
          risks associated with using cryptographic and blockchain-based systems, and that
          you have a working knowledge of the usage and intricacies of digital assets such
          as ether (eth), so-called stablecoins, and other digital tokens such as those
          following the Ethereum token standard (erc-20). You acknowledge and understand
          the inherent risks associated with cryptographic systems and blockchain-based
          networks. Risk Labs does not own or control any of the underlying software
          through which blockchain networks are formed. In general, the software
          underlying blockchain networks, including the Ethereum blockchain, is open
          source, such that anyone can use, copy, modify, and distribute it. By using the
          products, you acknowledge and agree (a) that Risk Labs is not responsible for
          the operation of the blockchain-based software and networks underlying the
          products, (b) that there exists no guarantee of the functionality, security, or
          availability of that software and networks, and (c) that the underlying
          blockchain-based networks are subject to sudden changes in operating rules, such
          as those commonly referred to as “forks,” which may materially affect the
          products. Blockchain networks use public and private key cryptography. You alone
          are responsible for securing your private key(s). We do not have access to your
          private key(s). Losing control of your private key(s) will permanently and
          irreversibly deny you access to digital assets on the Ethereum blockchain or
          other blockchain-based networks. Neither Risk Labs nor any other person or
          entity will be able to retrieve or protect your digital assets. If your private
          key(s) are lost, then you will not be able to transfer your digital assets to
          any other blockchain address or wallet. If this occurs, then you will not be
          able to realize any value or utility from the digital assets that you may hold.
        </BodyText>
        <BodyText>
          Further, you acknowledge and understand that the markets for these digital
          assets are nascent and highly volatile due to risk factors including, but not
          limited to, adoption, speculation, technology, security, and regulation. You
          understand that anyone can create a token, including fake versions of existing
          tokens and tokens that falsely claim to represent projects, and acknowledge and
          understand the risk that you may mistakenly trade those or other tokens.
          So-called stablecoins may not be as stable as they purport to be, may not be
          fully or adequately collateralized, and may be subject to panics and runs.
        </BodyText>
        <BodyText>
          Further, you acknowledge and understand that smart contract transactions
          automatically execute and settle, and that blockchain-based transactions are
          irreversible when confirmed. You acknowledge and understand that you are
          responsible for all trades you place, including any erroneous orders that may be
          filled. We do not take any action to resolve erroneous trades that result from
          your errors. You acknowledge and understand that the cost and speed of
          transacting with cryptographic and blockchain-based systems such as Ethereum are
          variable and may increase dramatically at any time. You further acknowledge and
          understand the risk of selecting to trade in expert modes, which can expose you
          to potentially significant price slippage and higher costs.
        </BodyText>
        <BodyText>
          Further, you acknowledge and understand that the products and your digital
          assets could be impacted by one or more regulatory inquiries or regulatory
          actions, which could impede or limit the ability of Risk Labs to continue to
          make available our proprietary software and could impede or limit your ability
          to access or use the products.
        </BodyText>
        <BodyText>
          Further, you acknowledge and understand that cryptography is a progressing field
          with advances in code cracking or other technical advancements, such as the
          development of quantum computers, which may present risks to digital assets and
          the products, and could result in the theft or loss of your digital assets. To
          the extent possible, the smart contracts available on the interface will be
          updated to account for any advances in cryptography and to incorporate
          additional security measures necessary to address risks presented from
          technological advancements, but that intention does not guarantee or otherwise
          ensure full security of the products.
        </BodyText>
        <BodyText>
          Further, you understand that the Ethereum blockchain and other blockchain-based
          networks remain under development, which creates technological and security
          risks when using the products in addition to uncertainty relating to digital
          assets and transactions therein. You acknowledge that the cost of transacting on
          the Ethereum blockchain and other blockchain-based networks is variable and may
          increase at any time causing impact to any activities taking place on the
          Ethereum blockchain or other blockchain-based networks, which may result in
          price fluctuations or increased costs when using the products.
        </BodyText>
        <BodyText>
          Further, you acknowledge and understand that the products are subject to flaws
          and that you are solely responsible for evaluating any code provided relating to
          the products. This warning and other warnings that Risk Labs provides in these
          terms are in no way evidence or represent an on-going duty to alert you to all
          of the potential risks of utilizing the products. Although we intend to provide
          accurate and timely information and data on the interface and during your use of
          the products, the interface and other information available when using the
          products may not always be entirely accurate, complete, or current and may also
          include technical inaccuracies or typographical errors. To continue to provide
          you with as complete and accurate information as possible, information may be
          changed or updated from time to time without notice, including information
          regarding our policies. Accordingly, you acknowledge and understand that you
          should verify all information before relying on it, and all decisions based on
          information contained on the interface or as part of the products are your sole
          responsibility. No representation is made as to the accuracy, completeness, or
          appropriateness for any particular purpose of any pricing information
          distributed via the site or otherwise when using the products. Prices and
          pricing information may be higher or lower than prices available on platforms
          providing similar services.
        </BodyText>
        <BodyText>
          We must comply with applicable laws, which may require us to, upon request by
          government agencies, take certain actions or provide information. You
          acknowledge and understand that Risk Labs may in its sole discretion take any
          action it deems appropriate to cooperate with government agencies or comply with
          applicable laws.
        </BodyText>
        <BodyText>
          If you act as a liquidity provider to the protocol through the interface, you
          understand that your digital assets may lose some or all of their value while
          they are supplied to the protocol through the interface due to the fluctuation
          of prices of tokens in a trading pair or liquidity pool.
        </BodyText>
        <BodyText>
          In summary, you acknowledge that we are not responsible for any of these
          variables or risks, do not own or control the protocol, and cannot be held
          liable for any resulting losses that you experience while accessing or using any
          of our products. Accordingly, you understand and agree to assume full
          responsibility for all of the risks of accessing and using the interface to
          interact with the protocol. You hereby irrevocably waive, release and discharge
          all claims, whether known or unknown to you, against Risk Labs and our
          shareholders, members, directors, officers, employees, agents, and
          representatives, suppliers, and contractors related to any of the risks set
          forth in this Section 5 or elsewhere in these terms.
        </BodyText>
        <SubHeadingText>5.2 No Warranties</SubHeadingText>
        <BodyText>
          Each of our products are provided on an &quot;as is&quot; and &quot;as
          available&quot; basis. To the fullest extent permitted by law, we disclaim any
          representations and warranties of any kind, whether express, implied, or
          statutory, including, but not limited to, the warranties of merchantability and
          fitness for a particular purpose. You acknowledge and understand that your use
          of each of our products is at your own risk. We do not represent or warrant that
          access to any of our products will be continuous, uninterrupted, timely, or
          secure; that the information contained in any of our products will be accurate,
          reliable, complete, or current; or that any of our products will be free from
          errors, defects, viruses, or other harmful elements, or that use of the Products
          does not and will not infringe or otherwise violate the intellectual property of
          any third party. No advice, information, or statement that we make should be
          treated as creating any warranty concerning any of our products. We do not
          endorse, guarantee, or assume responsibility for any advertisements, offers, or
          statements made by third parties concerning any of our products.
        </BodyText>
        <BodyText>
          Similarly, the protocol is provided &quot;as is&quot;, at your own risk, and
          without warranties of any kind. Although we contributed to the initial code for
          the protocol, we do not provide, own, or control the protocol, which is run
          autonomously without any headcount by smart contracts deployed on various
          blockchains. Upgrades and modifications to the protocol are generally managed in
          a community-driven way by holders of the acx governance token. No developer or
          entity involved in creating the protocol will be liable for any claims or
          damages whatsoever associated with your use, inability to use, or your
          interaction with other users of, the protocol, including any direct, indirect,
          incidental, special, exemplary, punitive or consequential damages, or loss of
          profits, cryptocurrencies, tokens, or anything else of value. We do not endorse,
          guarantee, or assume responsibility for any advertisements, offers, or
          statements made by third parties concerning any of our products.
        </BodyText>
        <BodyText>
          You acknowledge and understand that data you provide while accessing or using
          the products may become irretrievably lost or corrupted or temporarily
          unavailable due to a variety of causes, and agree that, to the maximum extent
          permitted under applicable law, we will not be liable for any loss or damage
          caused by denial-of-service attacks, software failures, viruses or other
          technologically harmful materials (including those which may infect your
          computer equipment), protocol changes by third-party providers, internet
          outages, force majeure events or other disasters, scheduled or unscheduled
          maintenance, or other causes either within or outside of our control.
        </BodyText>
        <BodyText>
          Any payments or financial transactions that you engage in will be processed via
          automated smart contracts. Once executed, we have no control over these payments
          or transactions, nor do we have the ability to reverse any payments or
          transactions.
        </BodyText>
        <SubHeadingText>5.3 No Investment Advice </SubHeadingText>
        <BodyText>
          All information provided by any of our products is for informational purposes
          only and should not be construed as investment advice or a recommendation that a
          particular token is a safe or sound investment. You should not take, or refrain
          from taking, any action based on any information contained in any of our
          products. By providing token information for your convenience, we do not make
          any investment recommendations to you or opine on the merits of any transaction
          or opportunity. You alone are responsible for determining whether any
          investment, investment strategy or related transaction is appropriate for you
          based on your personal investment objectives, financial circumstances, and risk
          tolerance.
        </BodyText>
        <MainHeadingText>6. Indemnification</MainHeadingText>
        <BodyText>
          You agree to hold harmless, release, defend, and indemnify us and our officers,
          directors, employees, contractors, agents, affiliates, and subsidiaries
          (collectively “Indemnified Parties”) from and against all claims, damages,
          obligations, losses, liabilities, costs, and expenses arising from: (a) your
          access and use of any of our Products; (b) your violation of any term or
          condition of this Agreement, the right of any third party, or any other
          applicable law, rule, or regulation; (c) any other party&apos;s access and use
          of any of our Products with your assistance or using any device or account that
          you own or control; (d) digital assets associated with your wallet; (e) your
          infringement, misappropriation, or other violation of the intellectual property
          or other proprietary rights of any other person or entity; and (f) any dispute
          between you and (i) any other user of any of the Products or (ii) any of your
          own customers or users. If you are obligated to indemnify any Indemnified Party,
          Risk Labs (or, at our sole discretion, the applicable Indemnified Party) will
          have the right, in our or its sole discretion, to control any action or
          proceeding and to determine whether Risk Labs wishes to settle, and if so, on
          what terms, and you agree to cooperate with Risk Labs in the defense.
        </BodyText>
        <MainHeadingText>7. Limitation of Damages and Liability</MainHeadingText>
        <BodyText>
          Under no circumstances shall we or any of our officers, directors, employees,
          contractors, agents, affiliates, or subsidiaries be liable to you for any
          indirect, punitive, incidental, special, consequential, or exemplary damages,
          including, but not limited to, damages for loss of profits, goodwill, use, data,
          fiat, revenue, opportunities, goodwill or other intangible property, arising out
          of or relating to any access or use of or inability to access or use any of the
          products, nor will we be responsible for any damage, loss, or injury resulting
          from hacking, tampering, or other unauthorized access or use of any of the
          products or the information contained within it, whether such damages are based
          in contract, tort, negligence, strict liability, or otherwise, arising out of or
          in connection with authorized or unauthorized use of any of the products, even
          if an authorized representative of Risk Labs has been advised of or knew or
          should have known of the possibility of such damages. We assume no liability or
          responsibility for any: (a) errors, mistakes, or inaccuracies of content; (b)
          personal injury or property damage, of any nature whatsoever, resulting from any
          access or use of the interface; (c) unauthorized access or use of any secure
          server or database in our control, or the use of any information or data stored
          therein; (d) interruption or cessation of function related to any of the
          products; (e) bugs, viruses, trojan horses, or the like that may be transmitted
          to or through the interface; (f) errors or omissions in, or loss or damage
          incurred as a result of the use of, any content made available through any of
          the products; (g) the defamatory, offensive, or illegal conduct of any third
          party and (h) causes beyond Risk Labs’ control or that Risk Labs could not
          reasonably foresee.
        </BodyText>
        <BodyText>
          We have no liability to you or to any third party for any claims or damages that
          may arise as a result of any payments or transactions that you engage in via any
          of our products, or any other payment or transactions that you conduct via any
          of our products. Except as expressly provided for herein, we do not provide
          refunds for any purchases that you might make on or through any of our products.
        </BodyText>
        <BodyText>
          We make no warranties or representations, express or implied, about linked third
          party services, the third parties they are owned and operated by, the
          information contained on them, assets available through them, or the
          suitability, privacy, or security of their products or services. You acknowledge
          sole responsibility for and assume all risk arising from your use of third-party
          services, third-party websites, applications, or resources. We shall not be
          liable under any circumstances for damages arising out of or in any way related
          to software, products, services, and/or information offered or provided by
          third-parties and accessed through any of our products.
        </BodyText>
        <BodyText>
          Some jurisdictions do not allow the limitation of liability for personal injury,
          or of incidental or consequential damages, so this limitation may not apply to
          you. In no event shall our total liability to you for all damages (other than as
          may be required by applicable law in cases involving personal injury) exceed the
          amount of one hundred U.S. dollars ($100.00 USD) or its equivalent in the local
          currency of the applicable jurisdiction.
        </BodyText>
        <BodyText>
          The foregoing disclaimer will not apply to the extent prohibited by law.
        </BodyText>
        <MainHeadingText>
          8. Governing Law, Dispute Resolution and Class Action Waivers
        </MainHeadingText>
        <SubHeadingText>8.1 Governing Law </SubHeadingText>
        <BodyText>
          You agree that the laws of the State of New York, without regard to principles
          of conflict of laws, govern this Agreement and any Dispute between you and us;
          provided, that the foregoing shall not restrict us from seeking remedies for
          disputes related to the violation of any intellectual property rights in the
          United States Patent and Trademark Office, Trademark Trial and Appeal Board or
          any other similar office or court of competent jurisdiction. You further agree
          that each of our Products shall be deemed to be based solely in the State of New
          York, and that although a Product may be available in other jurisdictions, its
          availability does not give rise to general or specific personal jurisdiction in
          any forum outside the State of New York. The parties acknowledge that this
          Agreement evidences interstate commerce and that the enforceability of this
          Section 8 will be substantively and procedurally governed by the Federal
          Arbitration Act, 9 U.S.C. § 1, et seq. (the “FAA”), to the maximum extent
          permitted by applicable law. Any arbitration conducted pursuant to this
          Agreement shall be governed by the FAA. You agree that the federal and state
          courts of New York County, New York are the proper forum for any appeals of an
          arbitration award or for court proceedings in the event that this
          Agreement&apos;s binding arbitration clause is found to be unenforceable.
        </BodyText>
        <BodyText>
          If any portion of this Section 8 is found to be unenforceable or unlawful for
          any reason, (a) the unenforceable or unlawful provision will be severed from
          these Terms; (b) severance of the unenforceable or unlawful provision will have
          no impact whatsoever on the remainder of this Section 8 or the parties’ ability
          to compel arbitration of any remaining claims on an individual basis under this
          Section 8; and (c) to the extent that any claims must therefore proceed on a
          class, collective, consolidated, or representative basis, such claims must be
          litigated in a civil court of competent jurisdiction and not in arbitration, and
          the parties agree that litigation of those claims will be stayed pending the
          outcome of any individual claims in arbitration. Further, if any part of this
          Section 8 is found to prohibit an individual claim seeking public injunctive
          relief, then that provision will have no effect to the extent such relief is
          allowed to be sought out of arbitration, and the remainder of this Section 8
          will be enforceable.
        </BodyText>
        <SubHeadingText>8.2 Dispute Resolution</SubHeadingText>
        <BodyText>
          We will use our best efforts to resolve any potential disputes through informal,
          good faith negotiations. If a potential dispute arises, you must contact us by
          sending an email to legal@across.to so that we can attempt to resolve it without
          resorting to formal dispute resolution. If we aren&apos;t able to reach an
          informal resolution within sixty days of your email, then you and we both agree
          to resolve the potential dispute according to the process set forth below.
        </BodyText>
        <BodyText>
          Any claim or controversy arising out of or relating to any of our Products, this
          Agreement, or any other acts or omissions for which you may contend that we are
          liable, including, but not limited to, any claim or controversy as to
          arbitrability (&quot;Dispute&quot;), shall be finally and exclusively settled by
          arbitration under the JAMS Optional Expedited Arbitration Procedures. You
          understand that you are required to resolve all Disputes by binding arbitration.
          The arbitration shall be held on a confidential basis before a single
          arbitrator, who shall be selected pursuant to JAMS rules. The arbitration will
          be held in New York, New York, unless you and we both agree to hold it
          elsewhere. Unless we agree otherwise, the arbitrator may not consolidate your
          claims with those of any other party. You and Risk Labs agree that for any
          arbitration you initiate, you will pay the filing fee and all other JAMS fees
          and costs. For any arbitration initiated by Risk Labs, Risk Labs will pay all
          JAMS fees and costs.
        </BodyText>
        <BodyText>
          Any claim arising out of or related to these Terms or the Products must be filed
          within one (1) year after such claim arose; otherwise, the claim is permanently
          barred, which means that you and Risk Labs will not have the right to assert the
          claim.
        </BodyText>
        <BodyText>
          Any judgment on the award rendered by the arbitrator may be entered in any court
          of competent jurisdiction. If for any reason a claim by law or equity must
          proceed in court rather than in arbitration you agree to waive any right to a
          jury trial and any claim may be brought only in a Federal District Court or a
          New York state court located in New York County, New York.
        </BodyText>
        <SubHeadingText>8.3 Class Action and Jury Trial Waiver</SubHeadingText>
        <BodyText>
          You and Risk Labs agree that any Dispute arising out of or relating to these
          Terms of Service is personal to you and Risk Labs You must bring any and all
          Disputes against us in your individual capacity and not as a plaintiff in or
          member of any purported class action, collective action, private attorney
          general action, or other representative proceeding. This provision applies to
          class arbitration.
        </BodyText>
        <BodyText>
          Except as specified above, you and we both agree to waive the right to demand a
          trial by jury.
        </BodyText>
        <MainHeadingText>9. Miscellaneous </MainHeadingText>
        <SubHeadingText>9.1 Entire Agreement</SubHeadingText>
        <BodyText>
          These terms constitute the entire agreement between you and us with respect to
          the subject matter hereof. This Agreement supersedes any and all prior or
          contemporaneous written and oral agreements, communications and other
          understandings (if any) relating to the subject matter of the Terms.
        </BodyText>
        <SubHeadingText>9.2 Assignment</SubHeadingText>
        <BodyText>
          You may not assign or transfer this Agreement, by operation of law or otherwise,
          without our prior written consent. Any attempt by you to assign or transfer this
          Agreement without our prior written consent shall be null and void. We may
          freely assign or transfer this Agreement. Subject to the foregoing, this
          Agreement will bind and inure to the benefit of the parties, their successors
          and permitted assigns.
        </BodyText>
        <SubHeadingText>9.3 Rewards</SubHeadingText>
        <BodyText>
          In connection with your historic or current use of one or more of our Products,
          we may provide you certain incentives, prizes or rewards for completing certain
          activities, such as completing a certain number of transactions (&quot;User
          Rewards&quot;). Details regarding the criteria for earning a reward will be
          described within the applicable Product or official Risk Labs documentation.
          Upon satisfaction of the criteria for obtaining a reward and subject to your
          compliance with the associated rewards terms, this Agreement, and applicable law
          — to be determined exclusively by Risk Labs — we will use commercially
          reasonable efforts to promptly transfer the earned reward to the digital wallet
          that you designate or have connected to the applicable Product. We reserve the
          right to change, modify, discontinue or cancel any rewards programs (including
          the frequency and criteria for earning such User Rewards), at any time and
          without notice to you.
        </BodyText>
        <SubHeadingText>
          9.4 Not Registered with the SEC or Any Other Agency
        </SubHeadingText>
        <BodyText>
          We are not registered with the U.S. Securities and Exchange Commission as a
          national securities exchange or in any other capacity. You understand and
          acknowledge that we do not broker trading orders on your behalf. We also do not
          facilitate the execution or settlement of your trades, which occur entirely on
          public distributed blockchains like Ethereum. As a result, we do not (and
          cannot) guarantee market best pricing or best execution through our Products.
          Any references in a Product to &quot;best price&quot; does not constitute a
          representation or warranty about pricing available through such Product, on the
          Protocol, or elsewhere.
        </BodyText>
        <SubHeadingText>9.5. Notice</SubHeadingText>
        <BodyText>
          We may provide any notice to you under this Agreement using commercially
          reasonable means, including using public communication channels. Notices we
          provide by using public communication channels will be effective upon posting.
        </BodyText>
        <SubHeadingText>9.6 Rights and Remedies</SubHeadingText>
        <BodyText>
          Any right or remedy of Risk Labs set forth in these Terms is in addition to, and
          not in lieu of, any other right or remedy whether described in these Terms,
          under applicable laws, at law, or in equity. The failure or delay of Risk Labs
          in exercising any right, power, or privilege under these Terms will not operate
          as a waiver thereof.
        </BodyText>
        <SubHeadingText>9.7 Severability</SubHeadingText>
        <BodyText>
          If any provision of this Agreement shall be determined to be invalid or
          unenforceable under any rule, law, or regulation of any local, state, or federal
          government agency, such provision will be changed and interpreted to accomplish
          the objectives of the provision to the greatest extent possible under any
          applicable law and the validity or enforceability of any other provision of this
          Agreement shall not be affected.
        </BodyText>
      </div>
      <BackToTopButton />
    </main>
  );
}
