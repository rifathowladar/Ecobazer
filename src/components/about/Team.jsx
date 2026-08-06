import React from "react";
import Container from "../layout/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Images
import team1 from "../../assets/image/team1.webp";
import team2 from "../../assets/image/team2.webp";
import team3 from "../../assets/image/team3.webp";
import team4 from "../../assets/image/team4.webp";
import { Link } from "react-router";

const teamData = [
  {
    id: 1,
    name: "Jenny Wilson",
    role: "CEO & Founder",
    image: team1,
  },
  {
    id: 2,
    name: "Jane Cooper",
    role: "Worker",
    image: team2,
  },
  {
    id: 3,
    name: "Cody Fisher",
    role: "Security Guard",
    image: team3,
  },
  {
    id: 4,
    name: "Robert Fox",
    role: "Senior Farmer Manager",
    image: team4,
  },
  {
    id: 5,
    name: "Jenny Wilson",
    role: "CEO & Founder",
    image: team2,
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F2F2F2] to-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#1A1A1A]">
            Our Awesome Team
          </h2>

          <p className="max-w-lg mx-auto mt-4 text-[#808080] text-sm">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </p>
        </div>

        <div className="relative">
          {/* Prev Button */}
          <button className="team-prev absolute left-[-25px] lg:left-[-50px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-[#E5E5E5] bg-white shadow flex items-center justify-center hover:bg-primary hover:text-white transition">
            <IoIosArrowBack size={20} />
          </button>

          {/* Next Button */}
          <button className="team-next absolute right-[-25px] lg:right-[-50px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full border border-[#E5E5E5] bg-white shadow flex items-center justify-center hover:bg-primary hover:text-white transition">
            <IoIosArrowForward size={20} />
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".team-prev",
              nextEl: ".team-next",
            }}
            spaceBetween={24}
            loop ={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {teamData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="group rounded-lg overflow-hidden bg-white border border-[#E5E5E5] hover:shadow-xl transition duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[260px] object-cover"
                    />

                    {/* Social Icons */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
                      <Link className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-primary text-white transition">
                        <FaFacebookF />
                      </Link>

                      <Link className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-primary text-white transition">
                        <FaTwitter />
                      </Link>

                      <Link className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-primary text-white transition">
                        <FaPinterestP />
                      </Link>

                      <Link className="h-9 w-9 rounded-full flex items-center justify-center hover:bg-primary text-white transition">
                        <FaInstagram />
                      </Link>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-[#1A1A1A]">
                      {item.name}
                    </h3>

                    <p className="text-sm text-[#808080] mt-1">
                      {item.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Team;