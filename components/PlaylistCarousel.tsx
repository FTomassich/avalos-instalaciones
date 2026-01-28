"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Play } from "lucide-react";

type Playlist = {
  id: string;
  title: string;
  thumbnail: string;
};

const playlists: Playlist[] = [
  {
    id: "PLt1wQsH7uVVaeMTpjoIZtGI_89p5qd8B3",
    title: "Sistemas sanitarios",
    thumbnail: "https://img.youtube.com/vi/3l5GNqSmtYM/maxresdefault.jpg",
  },
  {
    id: "PLt1wQsH7uVVZQwWj52mahI9MK-f-ElSnS",
    title: "Sistemas de calefacción",
    thumbnail: "https://img.youtube.com/vi/Nh-cEKnEYT4/maxresdefault.jpg",
  },
  {
    id: "PLt1wQsH7uVVaeMTpjoIZtGI_89p5qd8B3",
    title: "Instalaciones de Gas",
    thumbnail: "https://img.youtube.com/vi/3l5GNqSmtYM/maxresdefault.jpg",
  },
];

export default function PlaylistCarousel() {
  const [activePlaylist, setActivePlaylist] = useState<string | null>(null);

  return (
    <section className="py-20 bg-muted/50 scroll-mt-0">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          Obras técnicas realizadas
        </h2>

        <p
  className="mt-6 mb-12 text-center text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto animate-fadeUp"
  style={{ animationDelay: "0.7s" }}
>
  A continuación te mostramos algunos de nuestros proyectos.
</p>


        {/* Carrusel con paginación */}
        <Swiper
          
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // usamos el div externo
          }}
          breakpoints={{
  0: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 32,
  },
}}

        >
          {playlists.map((pl, index) => (
            <SwiperSlide
              key={`${pl.id}-${index}`}
              style={{ width: "280px", padding: "12px" }}
            >
              <div
                className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 cursor-pointer bg-white hover:scale-105"
                onClick={() => setActivePlaylist(pl.id)}
              >
                <img
                  src={pl.thumbnail}
                  alt={pl.title}
                  className="w-full h-44 object-cover"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <Play className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center text-white bg-gradient-to-t from-black/50 to-transparent z-10">
                  <h3 className="text-base font-medium">{pl.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bullets debajo del carrusel */}
        <div
          className="custom-pagination flex justify-center mt-6"
          style={{ textAlign: "center", marginTop: "30px"}}
        ></div>

        {/* Flecha animada visible solo en mobile */}
        <div className="block md:hidden flex justify-center mt-9 text-gray-500">
          <svg
            className="w-7 h-7 animate-pulse"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>

     {activePlaylist && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div className="relative max-w-[90%] w-[640px]">
      {/* Botón de cierre arriba, fuera del iframe */}
      <button
        className="absolute -top-12 right-0 text-3xl text-white hover:text-gray-300"
        onClick={() => setActivePlaylist(null)}
      >
        &times;
      </button>
      {/* Iframe ocupa todo el ancho */}
      <iframe
        width="100%"
        height="360"
        src={`https://www.youtube.com/embed/videoseries?list=${activePlaylist}`}
        title="YouTube playlist"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded"
      ></iframe>
    </div>
  </div>
)}


      </div>
    </section>
  );
}
