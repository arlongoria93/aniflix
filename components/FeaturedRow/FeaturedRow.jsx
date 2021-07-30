import styles from "./FeaturedRow.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const FeaturedRow = (props) => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [featuredAnime, setFeaturedAnime] = useState();
  const { data } = props;
  //
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * data.length));
    console.log(["Random number", randomNumber]);
  }, []);

  useEffect(() => {
    setFeaturedAnime(data[randomNumber]);
    console.log(featuredAnime);
  }, [randomNumber]);

  // const randomAnime = featuredAnime;
  // const linkUrl = `/anime/${randomAnime.id}`;
  // const url = `${randomAnime.bannerImage}`;

  // const mobilePhone = `${randomAnime.coverImage.extraLarge}`;

  return (
    <section className="p-8 flex flex-col space-y-8">
      {featuredAnime && (
        <Image src={featuredAnime.bannerImage} width={1200} height={250} />
      )}
      {featuredAnime && (
        <h1 className="text-white text-2xl">
          {featuredAnime.title.userPreferred}
        </h1>
      )}
      {featuredAnime && (
        <p className="text-white leading-8">
          {featuredAnime.description.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g, " ")}
        </p>
      )}
    </section>
  );
};
export default FeaturedRow;
