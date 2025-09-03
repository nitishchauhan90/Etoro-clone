"use client";
const awards = [
  {
    title: "Best UK Online Broker",
    provider: "Forbes Advisor's 2024",
  },
  {
    title: "Best for Cryptocurrency Trading",
    provider: "Investopedia 2024",
  },
  {
    title: "Best Social Trading Platform",
    provider: "Forbes Advisor's 2024",
  },
  {
    title: "Best Crypto Trading Platform — Beginners",
    provider: "Finder 2023",
  },
];

const InterestAndAwards = () => {
  return (
    <>
      <style jsx global>{`
                @keyframes scroll {
                  from {
                    transform: translateX(0);
                  }
                  to {
                    transform: translateX(-50%);
                  }
                }
                .animate-scroll {
                  animation: scroll 30s linear infinite;
                }
      `}</style>

      <section className="bg-white pt-16">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-4 md:px-8 pb-16">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 ">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Earn up to <span className="text-[#13c636]">4.3%* annual interest</span>
            </h2>
            <p className="text-lg text-black mt-4 mb-8">
              Start receiving monthly interest payments straight to your
              cash balance, with no commitment.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <button className="bg-[#13c636] hover:bg-[#04ee32] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                Join eToro
              </button>
              <button className="border-2 border-[#13c636] hover:border-[#04ee32]  text-[#13c636] font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                Learn More
              </button>
            </div>
            <p className="text-xs text-black mt-6">
              *Credit and other risks apply, please read the{' '}
              <a href="#" className="underline hover:text-gray-800">
                Terms and Conditions
              </a>
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/earn-interest.png"
              alt="Graphic showing 4.3% interest with a rising bar chart"
              className="max-w-sm md:max-w-2xl h-auto"
            />
          </div>
        </div>
        
        <div className="bg-[#1A1A1A] w-full py-2 overflow-hidden group cursor-pointer">
          <div className="flex w-max group-hover:[animation-play-state:paused] animate-scroll whitespace-nowrap">
                  {[...awards, ...awards].map((award, index) => (
                    <div 
                        key={index} 
                        className="flex-shrink-0 flex items-center mx-8 text-white p-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
                    >
                        <img
                          src="/branch.svg" 
                          alt="Star Icon"
                          className="w-8 h-14 mr-4" 
                        />
                      <div className="text-center">
                          <p className="font-bold text-sm md:text-base">{award.title}</p>
                          <p className="text-xs md:text-sm text-gray-400">{award.provider}</p>
                      </div>
                      <img
                          src="/branch.svg" 
                          alt="Star Icon"
                          className="w-8 h-14 ml-4 rotate-y-180 " 
                        />
                    </div>
                  ))}
                </div>
        </div>
      </section>
    </>
  );
};

export default InterestAndAwards;