"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner_1 from "@/public/banner/banner-1.png";
import banner_2 from "@/public/banner/a3.png";

function slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      slidesToSlide={1}
      draggable={false}
      swipeable={true}
      arrows={false}
      renderArrowsWhenDisabled={false}
      infinite={true}
      minimumTouchDrag={700}
      keyBoardControl={false}
      autoPlay={true}
      autoPlaySpeed={2000}
      showDots={true}
      renderDotsOutside={false}
      transitionDuration={1000}
      focusOnSelect={false}
      centerMode={false}
      additionalTransfrom={2}
      shouldResetAutoplay={false}
      rewind={true}
      rewindWithAnimation={true}
      rtl={false}
      sliderClass="p-0 m-0"
    >
      <div className="w-full h-full">
        <Image src={banner_1} alt="phone img" />
      </div>
      <div className="w-full h-full">
        <Image src={banner_2} alt="phone img" />
      </div>
    </Carousel>
  );
}

export default slider;
