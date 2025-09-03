"use client";

const investors = [
  "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
];

const CopyTopInvestors = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-subtle-float {
          animation: subtle-float 8s ease-in-out infinite;
        }
      `}</style>
      <section className="bg-[#01061e] text-white py-16 md:py-24 overflow-hidden relative">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 md:px-8 z-10">
          <div className="lg:w-5/12 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Copy top investors
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With eToro's innovative <span className="font-semibold">CopyTrader™</span>, you can
              automatically copy the moves of other investors.
              Find investors you believe in and <span className="font-semibold">replicate their actions</span> in
              real time.
            </p>
            <button className="border-2 border-[#13c636] text-[#13c636] hover:text-[#04ee32] hover:border-[#04ee32]  font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out">
              Start Copying
            </button>
            <p className="text-xs text-gray-400 mt-8 max-w-md mx-auto lg:mx-0">
              Copy Trading does not amount to investment advice. The value of your investments may go up or down. Your capital is at risk. Past performance is not an indication of future results.
            </p>
          </div>

          
          <div className="lg:w-1/2 w-full flex justify-center items-center h-80 md:h-96 relative rounded-lg overflow-hidden">
            
            <video 
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://marketing.etorostatic.com/cache1/hp/v_254/videos/copytrader-desk.mp4" 
              autoPlay
              loop
              muted
              playsInline
            >
                Your browser does not support the video tag.
            </video>
        </div>
        </div>
      </section>
    </>
  );
};

export default CopyTopInvestors;

