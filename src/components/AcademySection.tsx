"use client";

const courses = [
  {
    title: "Investing 101",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Conversations with leaders",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Crypto for beginners",
    imageUrl: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Building your portfolio",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400&auto=format&fit=crop",
  },
    {
    title: "Advanced Technical Analysis",
    imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=400&auto=format&fit=crop",
  },
];

const AcademySection = () => {
  return (
   <section className="bg-gray-50 py-16 md:py-24">
      <style jsx global>{`
        /* The key to the seamless scroll is animating translateX to -50%.
          Since we have duplicated the content, moving it by half its total width
          brings the second copy perfectly into place, creating the loop.
        */
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>

      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-2">
          Investing courses, podcasts, and webinars
        </h2>
        <p className="text-gray-600 mb-12">
          The eToro Academy provides free professional financial education for all levels
        </p>
      </div>
      <div className="w-full overflow-hidden group">
        <div className="flex w-max group-hover:[animation-play-state:paused] animate-scroll-left">
          {[...courses, ...courses].map((course, index) => (
            <div key={index} className="flex-shrink-0 w-98 mx-4">
              <div
                className="h-60 rounded-xl bg-cover bg-center relative overflow-hidden shadow-lg transition-transform duration-300 "
                style={{ backgroundImage: `url(${course.imageUrl})` }}
              >
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center p-4">
                  <h3 className="text-white text-xl font-light text-center">{course.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="border-2 border-[#13c636] text-[#13c636] hover:text-[#04ee32] hover:border-[#04ee32]  font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Start Learning Now
        </button>
      </div>
      <p className="text-center text-md text-gray-800 mt-10">
        This information is not and should not be construed to be investment advice/recommendation.
      </p>
    </section>
  );
};

export default AcademySection;

