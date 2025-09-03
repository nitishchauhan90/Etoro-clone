"use client"
const CryptoIcon = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-lg ${className}`}>
    {children}
  </div>
);

const SocialTradingSection = () => {
  return (
    <section className="bg-white  md:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 px-4 md:px-8">
        <div className="lg:w-5/12">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <img
              src="/crypto2x.jpg"
              alt="Graphic showing 4.3% interest with a rising bar chart"
              className="max-w-sm md:max-w-sm h-auto"
            />
          </div>
        </div>
        
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Crypto trading at its best
          </h2>
          <p className="text-lg text-black mb-6 leading-relaxed">
            Trade and manage 70+ cryptoassets on a trusted global platform that offers top-tier security, powerful tools, user-friendly features, and fixed transparent fees. Eligible eToro Club members can also <a href="#" className="text-black underline">sell their crypto for GBP or EUR</a>, unlocking even more flexibility to trade, invest, or explore new opportunities.
          </p>
          <p className="text-black mb-8">*Other fees apply</p>
          <button className="border-2 border-[#13c636] text-[#13c636] hover:text-[#04ee32] hover:border-[#04ee32]  font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out">
            Invest in Crypto
          </button>
          <p className="text-xs text-black mt-8 max-w-md mx-auto lg:mx-0">
            Cryptoasset investing is highly volatile and unregulated in some EU countries. No consumer protection. Tax on profits may apply.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default SocialTradingSection;

