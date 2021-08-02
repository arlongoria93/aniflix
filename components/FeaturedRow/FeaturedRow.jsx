import styles from "./FeaturedRow.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const FeaturedRow = (props) => {
  const [featuredAnime, setFeaturedAnime] = useState();
  const { data } = props;

  useEffect(() => {
    setFeaturedAnime(data[Math.floor(Math.random() * data.length)]);
  }, []);

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
