import { useState } from "react";
import { Link } from "react-router";
import type { Photo } from "react-photo-album";
import { RowsPhotoAlbum } from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { displayLocation, getImageParameters } from "~/utils";

import type { Route } from "./+types/home";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

export function meta({}: Route.MetaArgs) {
  return [{ title: `Gallery | Kitchen Gurus` }, { name: `description`, content: `Kitchen Gurus Gallery` }];
}

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const imageSources = [
  {
    id: 1,
    src: `66bdc227-ebd4-4e24-8e80-673dd3bbe9ce`,
    alt: `Wooden cabinets and white kitchen island`,
    width: 1020,
    height: 800
  },
  {
    id: 2,
    src: `2e5251b1-372d-4398-bcd1-270319a2b130`,
    alt: `All white kitchen remodeling`,
    width: 1020,
    height: 800
  },
  {
    id: 3,
    src: `f3167177-ba97-4ff7-940c-77516c8ec09c`,
    alt: `Light theme kitchen remodeling`,
    width: 1020,
    height: 800
  },
  {
    id: 4,
    src: `02f6b90a-5bc2-4ce9-a48f-7cbd2474b67c`,
    alt: `Dark kitchen island`,
    width: 1020,
    height: 800
  },
  {
    id: 5,
    src: `359558c9-ccff-41e7-b4b5-d9a4fa790e4a`,
    alt: `Wood theme kitchen remodeling`,
    width: 1020,
    height: 800
  },
  {
    id: 6,
    src: `f029dc60-f68a-40eb-9c76-59fc34dd8cd8`,
    alt: `Tan theme kitchen remodeling`,
    width: 1020,
    height: 800
  },
  {
    id: 7,
    src: `e029d1c4-0f3b-4330-a1bc-ba615d0945bb`,
    alt: `White kitchen with darker wood floor`,
    width: 1020,
    height: 800
  },
  {
    id: 8,
    src: `cf1629b6-4712-4b89-aacb-792efd05b2ad`,
    alt: `Modern hanging lights over kitchen island`,
    width: 1020,
    height: 800
  },
  {
    id: 9,
    src: `b61ee90d-661a-400b-bddc-131cddbd2227`,
    alt: `Black and white kitchen remodeling`,
    width: 1020,
    height: 800
  },
  {
    id: 10,
    src: `fe7adc4d-d3a6-4086-8086-5fbf92fb1288`,
    alt: `Grey theme kitchen remodeling`,
    width: 1020,
    height: 800
  },
  {
    id: 11,
    src: `e16bf897-c51b-4915-8ebe-de3b959a88e1`,
    alt: `Lighter kitchen cabinets with darker wood floor`,
    width: 1020,
    height: 800
  },
  {
    id: 12,
    src: `bf029e45-f9a9-46ea-8664-76f4390dbfe6`,
    alt: `Open kitchen floor plan`,
    width: 1020,
    height: 800
  }
].map(({ alt, height, src, width }) => ({
  src: getImageParameters(src),
  alt,
  width,
  height,
  srcSet: breakpoints.map(breakpoint => ({
    src: getImageParameters(src),
    width: breakpoint,
    height: Math.round((height / width) * breakpoint)
  }))
}) as Photo);

export default function Gallery() {
  const [imageIndex, setImageIndex] = useState<number>(-1);

  return (
    <>
      <section className="p-4 font-['Open_Sans']">
        <h1 className="text-center text-2xl font-semibold">
          Explore Our Gallery For A Taste Of Our Remodeling Excellence
        </h1>
        <p className="mt-5 text-center font-['Open_Sans'] text-lg font-light leading-8">
          {`We understand exactly what kind of experience, ease, and stellar service you are looking for, which is why we have
          positioned Kitchen Gurus to provide exactly that. Take a peek at some projects to see the kinds of masterpieces
          we can provide. Please do not hesitate to`}
          <Link className="text-[#F98500]" to="/contact">
            {` contact us `}
          </Link>
          {`if you have additional questions about kitchen remodeling in ${displayLocation()}.`}
        </p>
      </section>
      <section className="px-6">
        <RowsPhotoAlbum
          photos={imageSources}
          rowConstraints={{ maxPhotos: 4 }}
          targetRowHeight={150}
          onClick={({ index }) => setImageIndex(index)}
        />
        <Lightbox
          close={() => setImageIndex(-1)}
          index={imageIndex}
          open={imageIndex >= 0}
          plugins={[Fullscreen, Zoom]}
          slides={imageSources}
        />
      </section>
    </>
  );
}
