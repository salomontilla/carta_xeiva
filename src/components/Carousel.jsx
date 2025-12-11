import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const slides = [
    {
      img: "/src/assets/xeiva_paisaje_1.webp",
      text: "Ambiente Familiar",
    },
    {
      img: "/src/assets/xeiva_paisaje_2.webp",
      text: "Espacios Amplios y Cómodos",
    },
    {
      img: "/src/assets/xeiva_paisaje_3.webp",
      text: "Cocina Tradicional",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#faf5f3]">
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-red-900 mb-12">
        Instalaciones
      </h2>

      <div
        className="overflow-hidden max-w-5xl mx-auto rounded-xl shadow-lg"
        ref={emblaRef}
      >
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative flex-[0_0_100%] min-w-0 h-[350px] group overflow-hidden"
            >
              {/* Imagen */}
              <img
                src={slide.img}
                alt={slide.text}
                className="w-full h-full object-cover transition duration-300 group-hover:opacity-60"
              />

              {/* Texto Sobre Imagen */}
              <div
                className="
      absolute bottom-0 left-0 right-0 
      opacity-0 group-hover:opacity-100
      transition duration-300
      px-6 py-4
      text-left
    "
              >
                <p
                  className="
        text-white text-xl font-semibold
        bg-black/40 backdrop-blur-sm
        inline-block px-4 py-2 rounded-t-xl
      "
                >
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
