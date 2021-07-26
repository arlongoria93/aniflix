import Image from "next/image";
import styles from "./FeaturedRow.module.css";
const sectionContainer = `${styles.bg} bg-mainBG grid iphone:gird-cols-1 p-4 gap-4`;
const FeaturedRow = () => {
  return (
    <section className={sectionContainer}>
      <div>
        <Image
          src="/images/cover/cover.jpg"
          objectFit="contain"
          layout="responsive"
          width="200"
          height="100"
        />
      </div>
      <div className="  overflow-y-auto font-display text-white">
        <p className="iphone:text-sm ">
          Thorfinn is son to one of the Vikings' greatest warriors, but when his
          father is killed in battle by the mercenary leader Askeladd, he swears
          to have his revenge. Thorfinn joins Askeladd's band in order to
          challenge him to a duel, and ends up caught in the middle of a war for
          the crown of England.
        </p>
      </div>
    </section>
  );
};
export default FeaturedRow;
