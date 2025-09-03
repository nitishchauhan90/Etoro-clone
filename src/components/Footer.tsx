"use client";


const aboutLinks = ["About eToro", "eToro Reviews", "Careers", "Our offices", "Accessibility", "Imprint"];
const privacyLinks = ["eToro Cookie Policy", "Privacy Policy", "Regulation & License", "General Risk Disclosure", "Terms & Conditions", "Key Information Documents"];
const partnersLinks = ["Invite a friend", "Affiliate Program", "eToro Club", "Investment Insurance", "Partner Smart Portfolios"];

const topInstruments = ["Bitcoin (BTC)", "Ethereum (ETH)", "Shiba (in Millions)", "Tesla", "Apple", "Nio"];
const supportLinks = ["Help Center", "How to deposit", "How to withdraw", "How to Open an Account", "How to verify your account", "Customer Service", "Client Vulnerability"];
const learnMoreLinks = ["How CopyTrading Works", "Responsible Trading", "Interest on Balance", "What is Leverage & Margin", "Buy and Sell Explained", "Market research", "Tax Report", "eToro Academy"];

const FooterLink = ({ href = "#", children }: { href?: string; children: React.ReactNode }) => (
  <a href={href} className="text-gray-500 hover:text-black transition-colors duration-200">
    {children}
  </a>
);

const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h3 className="font-semibold text-gray-800 mb-4">{title}</h3>
    <div className="space-y-3">
      {links.map((link) => <div key={link}><FooterLink>{link}</FooterLink></div>)}
    </div>
  </div>
);


const Footer = () => {
  return (
    <footer className="bg-white text-md text-gray-600">
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-gray-800 mb-4">Find Us On</h3>
              <div className="flex space-x-4">
                <FooterLink><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></FooterLink>
                <FooterLink><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></FooterLink>
                <FooterLink><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.481 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg></FooterLink>
                <FooterLink><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm0 1.623c-2.392 0-2.72.009-3.667.053-1.054.048-1.65.211-2.095.385a3.278 3.278 0 00-1.18.742 3.278 3.278 0 00-.742 1.18c-.174.445-.337 1.041-.385 2.095-.044.947-.053 1.275-.053 3.667s.009 2.72.053 3.667c.048 1.054.211 1.65.385 2.095a3.278 3.278 0 00.742 1.18 3.278 3.278 0 001.18.742c.445.174 1.041.337 2.095.385.947.044 1.275.053 3.667.053s2.72-.009 3.667-.053c1.054-.048 1.65-.211-2.095-.385a3.278 3.278 0 001.18-.742 3.278 3.278 0 00.742-1.18c.174-.445.337-1.041.385-2.095.044-.947.053-1.275.053-3.667s-.009-2.72-.053-3.667c-.048-1.054-.211-1.65-.385-2.095a3.278 3.278 0 00-.742-1.18 3.278 3.278 0 00-1.18-.742c-.445-.174-1.041-.337-2.095-.385C15.035 3.632 14.707 3.623 12.315 3.623zM12 8.118a5.523 5.523 0 110 11.046A5.523 5.523 0 0112 8.118zm0 1.623a3.9 3.9 0 100 7.8 3.9 3.9 0 000-7.8zM18.805 6.11a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" clipRule="evenodd" /></svg></FooterLink>
                <FooterLink><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.701V8.115l6.363 4.032z" /></svg></FooterLink>
              </div>
            </div>
            <FooterColumn title="Top instruments" links={topInstruments}/>
            <FooterColumn title="Support" links={supportLinks}/>
            <FooterColumn title="Learn more" links={learnMoreLinks}/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-gray-800 mb-4">Download our app from the stores</h3>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors w-40">
                  <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19.333 12.433c0 2.821-2.22 4.956-4.889 4.956-1.078 0-2.09-.344-2.889-.922.022-1.778.911-3.467 2.111-4.445.822-.689 1.4-1.156 1.778-1.556-.156 2.067.667 3.6 1.889 4.967zm-5-5.178c.844-.978 1.4-2.289 1.2-3.645-1.178.022-2.511.644-3.356 1.622-.733.867-1.489 2.2-1.289 3.489 1.311.089 2.533-.556 3.445-1.466zM12.111 2C6.422 2 2 6.422 2 12.111s4.422 10.111 10.111 10.111S22.222 17.8 22.222 12.11C22.222 6.422 17.8 2 12.111 2z"/></svg>
                  <div>
                    <p className="text-sm font-light -mt-1">App Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors w-40">
                  <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor"><path d="M20.899 11.25l-2.73-2.73-10.42 10.421 2.728 2.728 10.422-10.42zM3.1 20.9l10.42-10.42-2.728-2.728L.372 18.17zM12 3.25L3.25 12 12 20.75 20.75 12z"/></svg>
                  <div>
                    <p className="text-sm font-light -mt-1">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
            <FooterColumn title="About Us" links={aboutLinks} />
            <FooterColumn title="Privacy and Regulation" links={privacyLinks} />
            <FooterColumn title="Partners and Promotions" links={partnersLinks} />
          </div>
        </div>
        <div className="border-t border-gray-200 mt-16 pt-8 space-y-6 text-md text-gray-500">
          <p>
            eToro (Europe) Ltd., a Financial Services Company authorised and regulated by the Cyprus Securities Exchange Commission (CySEC) under the license # 109/10. Registered in Cyprus under Company No. HE 200585. Registered Office: 4 Profiti Ilia Str., Kanika Business Centre, 7th floor, Germasogeia, 4046, Limassol, Cyprus.
          </p>
          <p>
            eToro (UK) Ltd, a Financial Services Company authorised and regulated by the Financial Conduct Authority (FCA) under the license FRN 583263. Registered Office: 24th floor, One Canada Square, Canary Wharf, London E14 5AB.
          </p>
          <p>
            eToro AUS Capital Limited is authorised by the Australian Securities and Investments Commission (ASIC) to provide financial services under Australian Financial Services License 491139. Registered Office: Level 3, 60 Castlereagh Street, Sydney NSW 2000, Australia.
          </p>
          <p>
            eToro (Seychelles) Ltd. is licensed by the Financial Services Authority Seychelles 
            (&quot;FSAS&quot;) to provide broker-dealer services under the Securities Act 2007 
            License #SD076. Registered Office: Suite 18, 3rd Floor, Vairam Building, Providence, 
            Mahe, Seychelles.
          </p>
          <p>
            eToro (ME) Limited, is licensed and regulated by the Abu Dhabi Global Market (&quot;ADGM&quot;)'s Financial Services Regulatory Authority (&quot;FSAS&quot;) as an Authorised Person to conduct the Regulated Activities of (a) Dealing in Investments as Principal (Matched), (b) Arranging Deals in Investments, (c) Providing Custody, (d) Arranging Custody and (e) Managing Assets under the Financial Services and Markets Regulations 2015 (&quot;FSAS&quot;). Its registered office and its principal place of business is at Office 207 and 208, 15th Floor, Al Sarab Tower, ADGM Square, Al Maryah Island, Abu Dhabi, United Arab Emirates (“UAE”).
          </p>
          <p>
            Clients who are tax residents of Finland may be subject to Finnish income taxes on income (profits) on CFDs and crypto-assets in accordance with applicable Finnish tax laws. For more information, please refer to our <a className=" underline hover:text-black" href="#">Finnish tax laws page</a>.
          </p>
          <div className="space-y-4">
            <p>Past performance is not an indication of future results</p>
            <p><a className=" underline hover:text-black" href="#">General Risk Disclosure</a> | <a className=" underline hover:text-black" href="#">Terms & Conditions</a></p>
            <p>
              You should seek advice from an independent and suitably licensed financial advisor and ensure that you have the risk appetite, relevant experience and knowledge before you decide to trade. Under no circumstances shall eToro have any liability to any person or entity for any direct, indirect, special, consequential or incidental damages whatsoever.
            </p>
            <p>
              Crypto investments are risky and do not benefit from the protections available to clients receiving MiFID regulated investment services, such as access to the Cyprus Investor Compensation Fund (ICF)/the Financial Services Compensation Scheme (FSCS) and the Financial Ombudsman Service for dispute resolution.
            </p>
            <p>
              Trading with eToro by following and/or copying or replicating the trades of other traders involves a high level of risks, even when following and/or copying or replicating the top-performing traders. Such risks includes the risk that you may be following/copying the trading decisions of possibly inexperienced/unprofessional traders, or traders whose ultimate purpose or intention, or financial status may differ from yours. Past performance of an eToro Community Member is not a reliable indicator of his future performance. Content one eToro&apos; social trading platform is generated by members of its community and does not contain advice or recommendations by or on behalf of eToro - Your Social Investment Network.
            </p>
            <p>
              Copyright &copy; 2006-2025 eToro - Your Social Investment Network, All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

