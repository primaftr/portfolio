import { Box, useColorModeValue, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import NextLink from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import Link from "next/link";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = ({}) => {
  useEffect(() => {}, []);

  return (
    <Box>
      <Swiper
        effect={"coverflow"}
        onSwiper={(s) => console.log(s)}
        grabCursor={true}
        observeParents={true}
        observer={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        slidesPerView={2}
        navigation={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        coverflowEffect={{
          rotate: 5,
          stretch: 20,
          depth: 150,
          modifier: 2,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <NextLink passHref href={"/portfolio/travel-ga"}>
            <Link href={""}>
              {/* <p> asdasd </p> */}

              <Box id="travel">
                <Image
                  _hover={{ transform: "scale(1.5)" }}
                  borderRadius={"lg"}
                  src="/travel/travel-1.jpg"
                />
              </Box>
            </Link>
          </NextLink>
        </SwiperSlide>
        <SwiperSlide>
          <Image borderRadius={"lg"} src="/travel/travel-2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image borderRadius={"lg"} src="/travel/travel-3.png" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
export default Portfolio;
