import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sri Ram",
      text: "The Old Town was absolutely stunning. The pool area and the sunset views are something I'll never forget. Perfect for a weekend escape!",
      rating: 5
    },
    {
      name: "Priyanka Reddy",
      text: "Exceptional service! The stewards at Lotus Bliss were very polite and the food was delicious. Truly a premium experience in the lap of nature.",
      rating: 5
    },
    {
      name: "Vinay Varma",
      text: "We stayed at The Old Town for our anniversary. The minimalist vintage design and the quiet surroundings made it so romantic. Highly recommend!",
      rating: 5
    },
    {
      name: "Dilip Kumar",
      text: "Great place for a family reunion. The kids loved the open space, billiards, and the pool. The attention to detail in the architecture is remarkable.",
      rating: 5
    },
    {
      name: "Hrithika",
      text: "Our Haldi ceremony at Lotus Bliss was magical. The lakeside view and the beautiful lawns made our day unforgettable. Thank you Svaasa!",
      rating: 5
    },
    {
      name: "Mohammed Sohail",
      text: "The turf at Old Town is fantastic! We had an amazing box cricket tournament followed by a relaxing dip in the pool. Best staycation ever.",
      rating: 5
    },
    {
      name: "Meera Krishnan",
      text: "Wonderful experience at Svaasa! The serenity of the place is unmatched. A minor wait for check-in, but the hospitality more than made up for it.",
      rating: 4
    },
    {
      name: "Kunal Gupta",
      text: "Great weekend getaway with the team. The facilities are top-notch and the ambiance is perfect for bonding. Truly a refresh button for all of us.",
      rating: 4
    }
  ];

  return (
    <section className="py-12 bg-svaasa-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-sm tracking-widest font-header font-black text-svaasa-gray mb-4">
          Reviews
        </h2>
        <h3 className="text-4xl md:text-5xl font-header font-black text-svaasa-brand mb-16 tracking-wider">
          Words of Our Guests
        </h3>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          className="pb-20"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="p-10 bg-svaasa-card text-left flex flex-col h-full rounded-3xl shadow-xl border border-white/5 relative group hover:-translate-y-2 transition-transform duration-500">
                <Quote className="text-white/10 mb-6 absolute top-8 right-8" size={60} strokeWidth={1} />
                
                <p className="text-lg text-svaasa-gray font-light leading-relaxed mb-8 flex-grow relative z-10">
                  "{review.text}"
                </p>
                
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < review.rating ? "#FFFFFF" : "none"} 
                      stroke={i < review.rating ? "#FFFFFF" : "#FFFFFF33"} 
                    />
                  ))}
                </div>
                
                <h4 className="font-header font-black tracking-widest text-[13px] text-white">
                  — {review.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
