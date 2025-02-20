import { useState } from "react";
import { Link, useOutletContext } from "react-router";
import { RowsPhotoAlbum } from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { displayLocation } from "~/utils";
import type { MetaData, UserLocationData } from "~/utils/constants";
import { metaData } from "~/utils/constants";
import { imageSources } from "~/utils/gallery";

import type { Route } from "./+types/gallery";

import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

export function meta({}: Route.MetaArgs): MetaData | object {
  return [
    { title: `Gallery | Kitchen Gurus` },
    { name: `description`, content: `Kitchen Gurus Gallery` },
    {
      name: `keywords`,
      content: `kitchens, countertops, granite countertops, quartz countertops, marble countertops, butcher block countertops, stainless steel appliances, ceramic tile flooring, hardwood flooring, laminate flooring, backsplash, tile backsplash, glass tile backsplash, subway tile backsplash, kitchen remodeling pictures, kitchen remodeling ideas pictures`
    },
    { name: `og:title`, content: `Gallery | Kitchen Gurus` },
    { name: `og:description`, content: `Discover premium kitchen remodeling in Pennsylvania, New Jersey, Delaware, and Maryland` },
    ...metaData
  ];
}

export default function Gallery() {
  const [imageIndex, setImageIndex] = useState<number>(-1);
  const userLocation = useOutletContext<UserLocationData>();

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
          {`if you have additional questions about kitchen remodeling in ${displayLocation(userLocation)}.`}
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
