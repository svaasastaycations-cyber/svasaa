import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Users, Bed, Bath, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CollectionSlider = () => {
  const properties = [
    {
      id: 1,
      name: "The Brick House",
      image: "https://images.unsplash.com/photo-1449156001141-cd514736122a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      guests: 6,
      bedrooms: 3,
      bathrooms: 2
    },
    {
      id: 2,
      name: "The Porch",
      image: "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      guests: 4,
      bedrooms: 2,
      bathrooms: 2
    },
    {
      id: 3,
      name: "The Deck",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      guests: 8,
      bedrooms: 4,
      bathrooms: 3
    },
    {
      id: 4,
      name: "The Valley View",
      image: "https://images.unsplash.com/photo-1464146072230-91cabc9fa7ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      guests: 10,
      bedrooms: 5,
      bathrooms: 4
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] font-sans text-fargo-brown mb-4">
              Our Collection
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-fargo-dark">
              Handpicked <span className="font-script italic text-fargo-brown">Stays</span>
            </h3>
          </div>
          <button className="hidden md:flex items-center text-sm uppercase tracking-widest text-fargo-dark border-b border-fargo-brown pb-2 hover:text-fargo-brown transition-colors">
            View All <ArrowRight className="ml-2" size={16} />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="pb-16"
        >
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <div className="group relative flex flex-col h-full bg-fargo-beige/30 rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-500">
                {/* Property Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  
                  {/* Know More Circular Button Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="w-24 h-24 rounded-full bg-fargo-brown text-white text-[10px] uppercase tracking-widest font-semibold flex flex-col items-center justify-center border-2 border-white/20 hover:scale-110 transition-transform">
                      <span>Know</span>
                      <span>More</span>
                    </button>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-serif text-fargo-dark mb-6">
                    {property.name}
                  </h4>
                  
                  <div className="flex items-center space-x-6 text-fargo-dark/60">
                    <div className="flex items-center">
                      <Users size={18} className="mr-2 text-fargo-brown" />
                      <span className="text-xs">{property.guests} Guests</span>
                    </div>
                    <div className="flex items-center border-l border-fargo-brown/20 pl-6">
                      <Bed size={18} className="mr-2 text-fargo-brown" />
                      <span className="text-xs">{property.bedrooms} BR</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CollectionSlider;
