import React from "react";

import styles from "./FlixRow.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import FlixItem from "../FlixItem/FlixItem";

const FlixRow = (props) => {
  const { media, nav } = props;

  const test = media.map((anime) => {
    return <FlixItem img={anime.coverImage.large} id={anime.id} />;
  });

  return (
    <div className="flex flex-col">
      <div>
        <div>
          <h1 className="font-display text-white">{props.title}</h1>
        </div>
        <div></div>
      </div>
      <div>
        <AliceCarousel
          mouseTracking
          items={test}
          disableButtonsControls
          disableDotsControls
          responsive={{
            319: { items: 3 },
            768: { items: 6 },
            1024: { items: 9 },
          }}
        />
      </div>
    </div>
  );
};

export default FlixRow;
