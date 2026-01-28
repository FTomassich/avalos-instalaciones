"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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
    id: "PLt1wQsH7uVVaeMTpjoIZtGI_89p5qd8B3", // repetida por ahora
    title: "Instalaciones de Gas",
    thumbnail: "https://img.youtube.com/vi/3l5GNqSmtYM/maxresdefault.jpg",
  },
];

export default function PlaylistCarousel() {
  const [activePlaylist, setActivePlaylist] = useState<string | null>(null);

  return (
    <section className="py-20 bg-muted/50 scroll-mt-0">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Título principal */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Obras técnicas realizadas
        </h2>

        <Swiper spaceBetween={32} slidesPerView={"auto"}>
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
                {/* Ícono de play centrado */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
                {/* Subtítulo */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center text-white">
                  <h3 className="text-base font-medium">{pl.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {activePlaylist && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg p-3 max-w-[90%] w-[640px]">
              <div className="flex justify-end mb-4">
                <button
                  className="text-3xl text-gray-700 hover:text-black"
                  onClick={() => setActivePlaylist(null)}
                >
                  &times;
                </button>
              </div>
              <div className="flex justify-center">
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
          </div>
        )}
      </div>
    </section>
  );
}
