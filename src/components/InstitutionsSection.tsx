"use client";


const partners = [
  { name: "J.P. Morgan", src: "/J_P_Morgan.svg" },
  { name: "Deutsche Bank", src: "/deutsche_bank.svg" },
  { name: "Coutts", src: "/coutts.svg" },
  { name: "J. Safra Sarasin", src: "/JSS.svg" },
  { name: "Pictet", src: "/pictet.svg" },
  { name: "UBP", src: "/ubp.svg" },
];

const InstitutionsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
          Your funds are held in top-tier institutions
        </h2>
        <p className="text-black mb-12 text-xl">
          The eToro Group works with globally renowned banking partners including:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((partner) => (
            <div key={partner.name} className="flex-shrink-0">
              <img
                src={partner.src}
                alt={partner.name}
                className="h-8 md:h-10 object-contain transition-opacity duration-300 hover:opacity-75"
              />
            </div>
          ))}
        </div>

        <p className="text-md text-gray-500 mt-12">
          * These banks are partnered with the eToro group and do not serve all entities within the group
        </p>
      </div>
    </section>
  );
};

export default InstitutionsSection;
