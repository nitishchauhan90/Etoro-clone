"use client";


const Portfolio = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float-1 { animation: float 6s ease-in-out infinite; }
        .animate-float-2 { animation: float 7s ease-in-out infinite; animation-delay: -2s; }
        .animate-float-3 { animation: float 8s ease-in-out infinite; animation-delay: -4s; }
        .animate-float-4 { animation: float 9s ease-in-out infinite; animation-delay: -1s; }
        .animate-float-5 { animation: float 10s ease-in-out infinite; animation-delay: -3s; }
      `}</style>
      
      <section className="bg-gray-50  py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 md:px-8">
          
          
          <div className="lg:w-5/12 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
              Diversify your portfolio
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Invest in a variety of asset classes — including 20 global
              stock exchanges and 100 cryptocurrencies — while
              managing all of your holdings in one place.
            </p>
            <button className="border-2 border-[#13c636] text-[#13c636] hover:text-[#04ee32] hover:border-[#04ee32]  font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out">
              Explore Top Markets
            </button>
          </div>

          {/* Right Side: Animated Cards */}
          
          
        </div>
        <div className="relative -bottom-26 right-20 -rotate-10">
            <img className="absolute -top-106 right-30 -rotate-24 w-44 z-10" src="/ishares-colored.svg" alt="" />
            <img className="absolute -top-10 -rotate-24 right-10  " src="/airbnb.svg" alt="" />
            <img className="absolute -top-52 right-74 -rotate-24 z-10" src="/apple-colored.svg" alt="" />
            <img className="absolute -top-99 right-76 -rotate-24 w-38 " src="/netflix.svg" alt="" />
            <img className="absolute -top-65 right-22 -rotate-24  " src="/bitcoin.svg" alt="" />
            <img className="absolute  -top-50 -right-17 -rotate-24 z-10" src="/spdr-colored.svg" alt="" />
            <img className="absolute -top-30 right-40 -rotate-24  " src="/ethereum.svg" alt="" />
          </div>
      </section>
    </>
  );
};

export default Portfolio;
