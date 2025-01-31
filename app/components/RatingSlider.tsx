import { Link } from "react-router";
import Slider from "react-slick";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Box from "@mui/material/Box";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface RatingData {
  alt: string;
  src: string;
  url: string;
}

const ratingData: RatingData[] = [
  {
    alt: `Angi Rating`,
    src: `/angi-rating.png`,
    url: `https://www.angi.com/companylist/us/pa/philadelphia/basement-gurus-reviews-9964580.htm`
  },
  {
    alt: `BBB Rating`,
    src: `/bbb-rating.png`,
    url: `https://www.bbb.org/us/pa/feasterville-trevose/profile/basement-waterproofing/basement-gurus-llc-0241-236056063`
  },
  {
    alt: `Build Zoom Rating`,
    src: `/build-zoom-rating.png`,
    url: `https://www.buildzoom.com/contractor/basement-gurus-llc`
  },
  {
    alt: `Chamber of Commerce Rating`,
    src: `/chamber-of-commerce-rating.png`,
    url: `https://www.chamberofcommerce.com/business-directory/delaware/wilmington/waterproofing-company/40092781-basement-gurus-llc?source=memberwebsite`
  },
  {
    alt: `Craft Jack Rating`,
    src: `/craft-jack-rating.png`,
    url: `https://yourmatches.improvenet.com/profile/details/306602?hash=preview`
  },
  {
    alt: `Facebook Rating`,
    src: `/facebook-rating.png`,
    url: `https://www.facebook.com/basementgurus/`
  },
  {
    alt: `Google Rating`,
    src: `/google-rating.png`,
    url: `https://www.google.com/maps/place//data=!4m2!3m1!1s0x89c6b1d00267f5b7:0xc3c464130b250006?source=g.page.share`
  },
  {
    alt: `Home Advisor Rating`,
    src: `/home-advisor-rating.png`,
    url: `https://www.homeadvisor.com/rated.BasementGurus.97478986.html`
  },
  {
    alt: `Neighborhood Faves Rating`,
    src: `/neighborhood-faves-rating.png`,
    url: `https://nextdoor.com/pages/basement-gurus-philadelphia-pa/`
  },
  {
    alt: `Porch Rating`,
    src: `/best-of-porch-rating.png`,
    url: `https://pro.porch.com/philadelphia-pa/waterproofing-contractors/basement-gurus/pp`
  },
  {
    alt: `Thumbtack Top Pro Rating`,
    src: `/top-pro-rating.png`,
    url: `https://www.thumbtack.com/pa/lancaster/waterproofing/basement-gurus/service/388863440970604554`
  }
];

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
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
      className="slider-container max-w-8/12 my-10 md:max-w-10/12"
      component="div"
      sx={{
        '& .figure-container': {
          display: `flex !important`,
          justifyContent: `center !important`
        }
      }}
    >
      <SliderComponent {...settings}>
        {ratingData.map((item, index) => (
          <Link key={index} target="_blank" to={item.url}>
            <figure className="figure-container">
              <img alt={item.alt} className="w-24 h-22" src={item.src} />
            </figure>
          </Link>
        ))}
      </SliderComponent>
    </Box>
  );
}
