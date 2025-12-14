import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Reveal from "./Reveal";

export default function Carousel({ slides }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="w-full py-14 bg-amber-50">
      <Reveal>
        <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-4xl font-extrabold tracking-tight mb-10 text-red-800">
          Vive una experienca única
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden rounded-2xl shadow-2xl " ref={emblaRef}>
          <div className="flex">
            {slides.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] relative group min-w-0 h-[420px] md:h-[500px]"
              >
                {/* Imagen */}
                <img
                  src={item.image.src}
                  srcSet={item.image.srcSet}
                  width={item.image.width}
                  height={item.image.height}
                  loading="lazy"
                  sizes="(max-width: 768px) 90vw, 800px"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={item.text}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 to-transparent transition-opacity duration-500 group-hover:from-red-900/80 group-hover:to-red-900/20"></div>

                {/* Texto encima */}
                <div
                  className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end
                text-white p-8 opacity-0 sm:group-hover:opacity-100 opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                >
                  <h3 className="text-4xl font-bold mb-3 text-red-100 drop-shadow-lg">{item.text}</h3>
                   <p className="text-lg text-center max-w-md text-red-50">{item.description}</p> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Reveal>
      
    </section>
  );
}
