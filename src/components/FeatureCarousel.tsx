"use client";
import { useState, useRef } from 'react';
const slides = [
  {
    graphic: <div className="flex items-center justify-center h-full"><img src="/global_Desktop.svg" alt="Trade Local, Trade Global" className="max-h-full object-contain" /></div>,
    title: "Get more from your money with eToro's interest on balance! Start receiving interest payments — up to 4.3% annually — straight to your account, with no commitment.",
    description: "",
    buttons: [
      { text: "Join eToro", primary: true },
      { text: "Learn More", primary: false }
    ],
    disclaimer: "Credit and other risks apply, please read the Terms and Conditions.",
  },
  {
    graphic: <div className="flex items-center justify-center h-full"><img src="/local-trade-en.png" alt="Trade Local, Trade Global" className="max-h-full object-contain" /></div>,
    title: "Trade Local, Trade Global",
    description: "Diversify cost-effectively across hundreds of local assets, and thousands more global assets, using eToro's GBP and USD accounts.",
     buttons: [
      { text: "Join eToro", primary: true },
      { text: "Learn More", primary: false }
    ],
    disclaimer: "",
  },
  {
    graphic: <div className="flex items-center justify-center h-full"><img src="/loud-investing.svg" alt="Trade Local, Trade Global" className="max-h-full object-contain" /></div>,
    title: "It's time for loud investing",
    description: "When we talk about investing, we break down barriers and get inspired to take control of our financial future.",
     buttons: [
      { text: "Learn More", primary: false }
    ],
    disclaimer: "",
  },
];

const FeatureCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const draggedX = useRef(0);
    const transformValue = `translateX(calc(-${activeSlide * 83.3333}% - ${activeSlide * 1.5}rem + 8.3333%))`;

    const handleNext = () => setActiveSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev));
    const handlePrev = () => setActiveSlide(prev => (prev > 0 ? prev - 1 : prev));

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
        draggedX.current = 0;
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;
        const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        draggedX.current = currentX - startX.current;
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (Math.abs(draggedX.current) > 50) {
            if (draggedX.current < 0) {
                handleNext();
            } else {
                handlePrev();
            }
        }
        draggedX.current = 0;
    };

    return (
        <section className="py-16 md:py-24 overflow-hidden bg-white">
            <div 
                className="relative cursor-default"
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                <div 
                    className="flex items-center transition-transform duration-500 ease-in-out"
                    style={{ transform: transformValue }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-10/12 mx-3"
                        >
                            <div
                                className={`bg-[#0d1d34] text-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 min-h-[400px] md:min-h-[450px] select-none transition-all duration-500 ${
                                    activeSlide === index ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                                }`}
                            >
                                <div className="w-full md:w-1/2 h-40 md:h-full">
                                    {slide.graphic}
                                </div>
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <h2 className="text-xl md:text-2xl font-light mb-4">{slide.title}</h2>
                                    <p className="text-white mb-8 text-sm md:text-base">{slide.description}</p>
                                    <div className="flex justify-center md:justify-start gap-4 mb-4">
                                        {slide.buttons.map(btn => (
                                            <button key={btn.text} className={`px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold transition-colors duration-300 text-sm md:text-base ${btn.primary ? 'border border-[#13c636] text-[#13c636] hover:border-[#04ee32] hover:text-[#04ee32]' : 'border border-white hover:border-gray-400 hover:text-gray-400 '}`}>
                                                {btn.text}
                                            </button>
                                        ))}
                                    </div>
                                    {slide.disclaimer && <p className="text-md text-white">{slide.disclaimer}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center mt-8 space-x-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className="w-4 h-4 rounded-full flex items-center  justify-center"
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <div
                            className={`transition-all duration-300 rounded-full w-1 h-1 bg-black ${activeSlide === index ? 'w-4 h-4  border-0.5 border-black flex items-center justify-center' : ''}`}
                        >
                            {activeSlide === index && <div className="w-3 h-3 border-4 border-white rounded-full"></div>}
                        </div>
                        <span className="sr-only">Slide {index + 1} par jaen</span>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default FeatureCarousel;

