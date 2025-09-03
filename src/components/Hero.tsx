import Image from "next/image";
const Hero = () => {
  return (
    <>
    <section className="bg-white mt-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center pt-10 px-4">

        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter text-[#2C073E] leading-tight mb-6">
            YEP, IT'S
            <br />
            <span className="text-4xl md:text-5xl lg:text-7xl font-extrabold">ALL IN ONE APP</span>
          </h1>
          <p className="text-lg md:text-2xl text-black mb-8">
            Invest in thousands of stocks, crypto, ETFs...
            <br />
            all in one easy-to-use app
          </p>
          <button className="bg-[#13c636] hover:bg-[#04ee32]  text-white font-light py-3 px-12 rounded-full text-xl transition duration-300 ease-in-out">
            Join eToro
          </button>
        </div>

 
        <div className="lg:w-1/2 relative flex justify-center">
          <img
            src="/desktop.webp"
            alt="Smiling man looking at his phone"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
      <p className="text-right text-md text-black px-28 pb-4">
        **<span className="underline">Terms and Conditions apply.</span>
      </p>
    </section>
    <section className="bg-black text-white py-10 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
     
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h2 className="text-lg md:text-xl text-white mb-2">
              eToro Unlocked
            </h2>
            <h3 className="text-4xl md:text-4xl lg:text-4xl font-extrabold text-white leading-tight mb-8">
              Redefining Investing <span className="text-[#13c636]">With</span>
              <br />
              <span className="text-[#13c636]">the Power of AI</span>
            </h3>
            <button className="border-2 border-[#13c636] text-[#13c636] hover:text-[#04ee32] hover:border-[#04ee32] font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out">
              See the reveal
            </button>
          </div>
          <div className="lg:w-1/3 relative flex justify-center items-center overflow-hidden rounded-2xl mr-48 shadow-md">
            <img
              src="/unlocked-desktop.webp" 
              alt="AI powered eToro app mockups"
              className="max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;