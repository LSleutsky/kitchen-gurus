import { Link } from "react-router";
import Slider from "react-slick";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Box from "@mui/material/Box";

import type { RatingData } from "~/utils/constants";
import { ratingData } from "~/utils/constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// @ts-expect-error: Property 'default' does not exist on type 'typeof Slider'
const SliderComponent = typeof window === `undefined` ? Slider.default : Slider;

export default function RatingSlider() {
  const carouselArrowStyles = {
    '&.slick-arrow': {
      background: `#DDDDDD`,
      borderRadius: `100%`,
      padding: `8px`,
      color: `rgb(93,93,93)`,
      width: `34px`,
      height: `34px`
    },
    '&.slick-next:hover, &.slick-prev:hover': {
      background: `#DDDDDD`,
      color: `black`
    }
  };

  const settings = {
    autoplay: true,
    cssEase: `linear`,
    dots: false,
    infinite: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <ArrowForwardIosIcon sx={carouselArrowStyles} />,
    prevArrow: <ArrowBackIosNewIcon sx={carouselArrowStyles} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box
      className="slider-container max-w-8/12 my-16 md:max-w-10/12"
      component="div"
      sx={{
        '& .figure-container': {
          display: `flex !important`,
          justifyContent: `center !important`
        }
      }}
    >
      <SliderComponent {...settings}>
        {ratingData.map((data: RatingData, index) => (
          <Link key={index} target="_blank" to={data.url}>
            <figure className="figure-container">
              <img alt={data.alt} className="w-24 h-22" src={data.src} />
            </figure>
          </Link>
        ))}
      </SliderComponent>
    </Box>
  );
}
