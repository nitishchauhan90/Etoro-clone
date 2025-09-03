"use client";

const teams = [
  { name: "Crystal Palace", src: "/crystalpalace.svg" },
  { name: "Everton", src: "/everton.svg" },
  { name: "Slavia Prague", src: "/slavia.svg" },
  { name: "West Ham United", src: "/west-ham.svg" },
  { name: "Union Berlin", src: "/union-berlin.svg" },
  { name: "Bayer Leverkusen", src: "/bayer.svg" },
  { name: "PWR", src: "/pwr.svg" },
  { name: "Premiership Women's Rugby", src: "/prem.svg" },
  { name: "1. FC Nürnberg", src: "/az.svg" },
  { name: "Nottingham Forest", src: "/mainz.svg" },
];

const SponsorshipSection = () => {
  return (
    <section className="bg-white py-12">
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
          animation: scroll 40s linear infinite;
        }
      `}</style>
      
      <div className="container mx-auto flex flex-row items-center justify-between gap-4 px-4">

        <div className="w-1/3 text-right">
          <h2 className="text-xl  md:text-3xl font-light text-gray-800">
            Sponsor of your favourite teams
          </h2>
        </div>

        <div className="w-2/3 overflow-hidden [mask-image:linear-gradient(to_right,transparent_5%,black_20%,black_80%,transparent_95%)]">
          <div className="flex w-max animate-scroll">
            {[...teams, ...teams].map((team, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ height: '60px' }}>
                <img
                  src={team.src}
                  alt={team.name}
                  className="max-h-full max-w-none h-18 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    <hr className="mt-12 border-gray-200" />
    </section>
  );
};

export default SponsorshipSection;

