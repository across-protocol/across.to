import BackToTopButton from "@/app/_components/scroll-to-top";
import { Text } from "@/app/_components/text";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Across Privacy Policy",
  description: "The privacy policy for Across Protocol",
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

export default function PrivacyPolicy() {
  return (
    <main className="relative z-[1] mx-auto flex w-full max-w-2xl flex-col gap-0 px-4 py-10 lg:px-0">
      <div className="flex flex-col gap-5 lg:gap-6 ">
        <div className="mb-5 flex w-full flex-col items-center gap-5 lg:mb-0 lg:items-start lg:gap-6">
          <Text variant="heading-2" className="leading-[52.80px]">
            Privacy Policy
          </Text>
          <Text variant="cap-case" className="text-grey-400">
            Last modified: October 22, 2025
          </Text>
        </div>
        <BodyText>
          This Privacy Policy (the &quot;Policy&quot;) explains how Risk Labs
          (&quot;Across,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          collects, uses, and shares data in connection with the Across web app
          (app.across.to), www.across.to website, our APIs, and all of our other
          properties, products, and services (the &quot;Services&quot;). Your use of the
          Services is subject to this Policy as well as our Terms of Service.
        </BodyText>

        <MainHeadingText>High Level Summary</MainHeadingText>
        <ul className="text-base list-inside list-disc space-y-4 leading-relaxed">
          <li>Across is operated by Risk Labs, a Cayman Islands Foundation.</li>
          <li>
            The Across Protocol is not centrally controlled by Risk Labs. It is a
            decentralized protocol with smart contracts deployed across various
            blockchains.
          </li>
          <li>
            Across does not collect or store certain personal data such as first name,
            last name, street address, date of birth, or government ID in connection with
            your use of the Services.
          </li>
          <li>
            Across may collect limited data, such as public on-chain data and off-chain
            data like internet protocol (&quot;IP&quot;) address, device type, and browser
            type. This is done to improve user experience and maintain security, not to
            track or profile individual users.
          </li>
          <li>
            If you sign up to receive emails from us, we will store your email address
            solely for communication purposes. You can unsubscribe from our emails at any
            time. We will not link your email address to your wallet address or other
            personal data.
          </li>
          <li>
            Users are encouraged to explore client-side privacy techniques and tools.
          </li>
          <li>
            Any material changes to this Policy will be reflected in an updated version of
            this document.
          </li>
          <li>
            We work with third parties, who may have their own privacy policies; users are
            encouraged to review the respective privacy policies of these third parties.
          </li>
        </ul>

        <MainHeadingText>Data We Collect</MainHeadingText>
        <BodyText>
          We take privacy seriously and are transparent about what limited data we
          collect. We do not maintain user accounts and do not collect and store personal
          data, other than your email address, IP address, and device type. When you
          interact with the Services, we may collect:
        </BodyText>
        <BodyText>
          1. <strong>Publicly-available blockchain data.</strong> When you connect your
          blockchain wallet to the Services, we may collect and log your
          publicly-available blockchain address and screen it for any prior illicit
          activity. Blockchain addresses are public data not created or assigned by us.
        </BodyText>
        <BodyText>
          2. <strong>Information from other sources.</strong> We may receive information
          about your wallet address or transactions from third-party providers to comply
          with legal obligations and prevent fraudulent or other illicit activity.
        </BodyText>
        <BodyText>
          3.{" "}
          <strong>
            Information collected automatically via cookies and tracking technologies.
          </strong>{" "}
          When you visit our websites, we may collect certain information by automated
          means, such as through the use of cookies, web beacons and tracking
          technologies. We use this information we collect by automated means to provide
          and personalize the Services and features of the Services for you, learn about
          your preferences, your use of the Services, and our interactions with you. Your
          browser may tell you how to be notified when you receive certain types of
          cookies or how to restrict or disable certain types of cookies. Please note,
          however, that without cookies you may not be able to use all of the features of
          our website.
        </BodyText>
        <BodyText>
          4. <strong>Survey or usability information.</strong> If you participate in
          surveys or usability studies, we collect the responses and any information you
          voluntarily provide (such as wallet address, email address, and social handles
          including discord, twitter, and telegram).
        </BodyText>
        <BodyText>
          5. <strong>Correspondence.</strong> We receive any information you provide when
          contacting us by email, customer support, or social media. This includes opting
          into our newsletter and receiving emails from us.
        </BodyText>
        <BodyText>
          6. <strong>Biographical information.</strong> If you apply for a job with us, we
          collect information such as your name, email, phone, work and immigration
          status, and any other information you provide in application materials.
        </BodyText>
        <BodyText>
          7. <strong>Information you choose to provide.</strong> If you provide us with
          data (e.g., your email), we use it for the purposes described at the time. We do
          not attempt to link this to your wallet or other identifiers.
        </BodyText>

        <MainHeadingText>How We Use Data</MainHeadingText>
        <BodyText>
          We use the data we collect in accordance with your instructions, our Terms of
          Service, and as required by law. Our other uses of data include:
        </BodyText>
        <ul className="text-base list-inside list-disc space-y-4 leading-relaxed">
          <li>
            <strong>Providing the Services.</strong> To operate, maintain, and improve our
            Services.
          </li>
          <li>
            <strong>Customer support.</strong> To respond to inquiries and provide
            assistance to users.
          </li>
          <li>
            <strong>Safety and security.</strong> To detect, investigate, and prevent
            fraud, unauthorized use, or illegal activity; to enforce our rights,
            agreements, and policies; and to address potential security risks, and to
            protect users, the protocol, and the broader ecosystem.
          </li>
          <li>
            <strong>Legal compliance.</strong> To comply with applicable laws and
            regulations, and to respond to lawful requests from regulators, law
            enforcement, or court orders.
          </li>
          <li>
            <strong>Aggregated data.</strong> To analyze aggregated usage trends so as to
            improve the user experience.
          </li>
          <li>
            <strong>Hiring.</strong> To recruit and hire talent.
          </li>
        </ul>
        <BodyText>
          We retain each category of personal information that we collect for as long as
          necessary to fulfill the purposes described herein.
        </BodyText>

        <MainHeadingText>How We Share Data</MainHeadingText>
        <BodyText>We may share data as follows:</BodyText>
        <ul className="text-base list-inside list-disc space-y-4 leading-relaxed">
          <li>
            <strong>With service providers.</strong> For infrastructure, analytics,
            compliance, and support (e.g., Infura, Cloudflare, blockchain analytics
            providers) to provide, deliver, and improve the Services.
          </li>
          <li>
            <strong>For legal reasons.</strong> To comply with laws, regulations, legal
            processes, or enforce our rights, agreements, and policies.
          </li>
          <li>
            <strong>For safety and security.</strong> To detect, investigate, and prevent
            fraud, unauthorized use, or illegal activity; to address potential security
            risks; to protect users, the protocol, and the broader ecosystem; including as
            necessary or appropriate to prevent physical harm.
          </li>
          <li>
            <strong>Business transfers.</strong> In the event of a merger, acquisition,
            joint venture, reorganization, divestiture, dissolution, liquidation or other
            similar business transaction, with the successor of such business or assets.
          </li>
          <li>
            <strong>With your consent.</strong> At any other time when you specifically
            direct us to share information.
          </li>
        </ul>
        <BodyText>
          We do not share your information with third parties for those third
          parties&apos; marketing purposes.
        </BodyText>
        <BodyText>
          We may also aggregate or anonymize personal information in accordance with
          applicable law and disclose such aggregated or anonymized information to third
          parties.
        </BodyText>

        <MainHeadingText>Third-Party Links and Sites</MainHeadingText>
        <BodyText>
          Our Services may use third parties. Please refer to our Terms of Service to see
          the list of providers and review their terms and privacy policies. When using
          the services of any third party, their terms and privacy policies apply. We are
          not responsible for their terms, policies, or practices. You can learn more
          about how these third parties collect and use your data by consulting their
          privacy policies and other terms.
        </BodyText>

        <MainHeadingText>Security</MainHeadingText>
        <BodyText>
          We implement reasonable administrative, physical, and technical safeguards to
          protect data from unauthorized access, disclosure, loss, or misuse. You are
          responsible for all activity engaged in with our Services, including the
          security of your wallets, private keys, and blockchain network addresses.
        </BodyText>

        <MainHeadingText>Age Requirements</MainHeadingText>
        <BodyText>
          The Services are geared toward a general audience, not intended for or directed
          at children under 13 years of age, and we do not knowingly collect personal
          information from individuals under 18. If we become aware that we have collected
          personal information from a child under the age of 13, we will promptly delete
          the information, unless we are legally obligated to retain such information. If
          you believe a child under the age of 13 has provided, or we have otherwise
          received, personal information as defined by the U.S. Children&apos;s Online
          Privacy Protection Act, please contact us at{" "}
          <a href="mailto:legal@across.to" className="text-aqua-500 hover:text-aqua-400">
            legal@across.to
          </a>
          .
        </BodyText>

        <MainHeadingText>U.S. State Privacy Rights</MainHeadingText>
        <BodyText>
          Certain U.S. states have enacted privacy laws and regulations that provide the
          residents of such states with certain rights and require certain disclosures in
          respect of their personal information.
        </BodyText>
        <ul className="text-base list-inside list-disc space-y-4 leading-relaxed">
          <li>
            For a description of the categories of personal information that we collect,
            including in the past 12 months, and the sources therefor, please review the
            &quot;Data We Collect&quot; section above.
          </li>
          <li>
            For a description of the business or commercial purposes for which we collect
            data, please review the &quot;How We Use Data&quot; section above.
          </li>
          <li>
            For a description of any third parties to whom we disclose personal
            information, including in the past 12 months, and the purposes therefor,
            please review the &quot;How We Share Data&quot; section above. We do not
            &quot;sell&quot; or &quot;share&quot; (as such terms are defined under the
            California Consumer Privacy Act of 2018) personal information and we do not
            process personal information for purposes of &quot;targeted advertising.&quot;
          </li>
          <li>
            We do not collect any sensitive personal information other than immigration
            status from potential employees for purposes of complying with applicable
            legal requirements.
          </li>
          <li>
            Residents of U.S. states that have enacted privacy laws and regulations
            provide the residents of such states with certain rights in respect of their
            personal information. The exact scope of such rights may vary by state:
          </li>
        </ul>
        <ul className="text-base ml-6 list-inside list-[circle] space-y-3 leading-relaxed">
          <li>
            <strong>Right to Data Portability:</strong> The right to access personal
            information collected about you in a portable format.
          </li>
          <li>
            <strong>Right to Delete:</strong> The right to request that we delete personal
            information that we have collected about you, subject to the fact that we
            cannot alter or delete data recorded on blockchains.
          </li>
          <li>
            <strong>Right to Correct:</strong> The right to request that we correct
            inaccurate personal information that we maintain about you, subject to the
            fact that we cannot alter or delete data recorded on blockchains.
          </li>
          <li>
            <strong>
              Right to Opt Out of the Sale or Sharing of Personal Information:
            </strong>{" "}
            The right to opt out of the &quot;sale,&quot; &quot;sharing,&quot;
            &quot;targeted advertising&quot; or certain other processing of personal
            information that produces legal or similarly significant effects.
          </li>
          <li>
            <strong>
              Right to Request Information Regarding Disclosure to Third Parties:
            </strong>{" "}
            The right to request a list of the categories of third parties to which we
            have disclosed your personal information, and, in certain cases, the specific
            third parties to which we have disclosed personal information or a list of
            categories of personal information disclosed to third parties for direct
            marketing purposes.
          </li>
          <li>
            <strong>Right to Appeal:</strong> In certain cases, the right to appeal a
            decision we have made in connection with a privacy rights request.
          </li>
          <li>
            <strong>Right to Non-Discrimination:</strong> The right to not receive
            retaliatory or discriminatory treatment in connection with a request to
            exercise your privacy rights.
          </li>
          <li>
            <strong>Right to Request Removal of Content:</strong> In certain cases,
            individuals under the age of 18 may make requests to remove content.
          </li>
        </ul>
        <BodyText>
          • You can submit in writing any requests or questions in respect of any rights
          you may have under applicable U.S. state privacy laws to{" "}
          <a href="mailto:legal@across.to" className="text-aqua-500 hover:text-aqua-400">
            legal@across.to
          </a>
          . We will respond to requests for information access, correction or deletion
          only to the extent we are able to associate, with a reasonable effort, the
          information we may maintain with the identifying details you provide in your
          request. We may be required to collect and verify the identity of an individual
          submitting any such request before providing a substantive response. Certain
          states provide that you may designate an authorized agent to submit such
          requests on your behalf. We will require any such agent to have written
          authorization confirming their authority.
        </BodyText>

        <MainHeadingText>
          Rights for Cayman Islands, European Union and United Kingdom Residents (EU and
          UK General Data Protection Regulation &quot;GDPR&quot; Notice)
        </MainHeadingText>
        <ul className="text-base list-inside list-disc space-y-4 leading-relaxed">
          <li>
            We process personal data for the limited purposes described in the &quot;How
            We Use Data&quot; section above.
          </li>
          <li>
            Generally the legal basis upon which we process personal data is our
            legitimate interest in, for example, providing and improving our services,
            ensuring users&apos; security, and responding to your communications,
            inquiries and requests through our customer service functions. In addition, we
            process personal data for substantial public interest reasons (such as the
            prevention of fraud) and to comply with our various legal and regulatory
            obligations. In some circumstances, we may also process personal data with
            your consent or for the purposes of performing a contract with you.
          </li>
          <li>
            Under the GDPR and certain other applicable privacy laws, you have the
            following rights with respect to personal data that we have collected from
            you, subject to the fact that we cannot alter or delete data recorded on
            blockchains, such as transaction data or wallet addresses:
          </li>
        </ul>
        <ul className="text-base list-inside list-disc space-y-3 leading-relaxed">
          <li>
            To request access to personal data, and be provided with it in permanent form;
          </li>
          <li>
            To request correction of personal data that is inaccurate or incomplete;
          </li>
          <li>To request deletion of personal data to the extent permitted by law;</li>
          <li>To request the restriction of the processing of personal data;</li>
          <li>
            To object to the processing of personal data based on legitimate interests or
            for direct marketing purposes;
          </li>
          <li>
            To request that we return the personal data or, where technically feasible,
            have it transferred to a third party;
          </li>
          <li>
            To request that we disclose to you:
            <ul className="ml-6 mt-2 list-inside list-[circle] space-y-2">
              <li>the categories of personal data we have collected about you,</li>
              <li>
                the categories of sources from which the personal data is collected,
              </li>
              <li>
                the business or commercial purpose for collecting the personal data,
              </li>
              <li>
                the categories of third parties with whom we have shared the personal
                data, and
              </li>
              <li>the specific pieces of personal data we have collected about you;</li>
            </ul>
          </li>
          <li>
            To not be subject to a decision based solely on automated processing based on
            profiling or otherwise that has a legal or significant effect.
          </li>
          <li>
            To not receive discriminatory treatment for the exercise of any of the
            foregoing rights.
          </li>
          <li>
            Requests may be made to{" "}
            <a
              href="mailto:legal@across.to"
              className="text-aqua-500 hover:text-aqua-400"
            >
              legal@across.to
            </a>
            . We may request additional information from you in order to process such
            requests. We may retain information as necessary to fulfill the purpose for
            which it was collected and may continue to do so even after such a request in
            accordance with our legitimate interests, including to comply with our legal
            obligations, resolves disputes, prevent fraud, and enforce our agreements.
          </li>
        </ul>

        <MainHeadingText>Changes to this Policy</MainHeadingText>
        <BodyText>
          We may update this Policy from time to time. Updates will be posted here, and
          continued use of the Services constitutes acceptance of the revised Policy.
        </BodyText>

        <MainHeadingText>Contact Us</MainHeadingText>
        <BodyText>
          If you have questions or concerns about this Policy or our data practices,
          please contact us at:
        </BodyText>
        <BodyText>
          <strong>Email:</strong>{" "}
          <a href="mailto:legal@across.to" className="text-aqua-500 hover:text-aqua-400">
            legal@across.to
          </a>
        </BodyText>
        <BodyText>
          <strong>Mailing Address:</strong> Governor&apos;s Square, 23 Lime Tree Bay
          Avenue, PO Box 10176, Grand Caymans KY1-1002, Cayman Islands
        </BodyText>
      </div>
      <BackToTopButton />
    </main>
  );
}
