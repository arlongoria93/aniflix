import Image from "next/image";
import styles from "./FeaturedRow.module.css";
const sectionContainer = `bg-mainBG overflow-hidden`;
const FeaturedRow = () => {
  return (
    <section className={sectionContainer}>
      <div className="grid grid-cols-1">
        <h1 className="justify-self-center text-white text-xl">Vinland Saga</h1>
        <div className=" relative justify-self-center h-72 w-screen">
          <Image
            src="/images/cover/cover.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="font-display overscroll-auto text-white">
          <p className="iphone:text-sm  p-2">
            Thorfinn is son to one of the Vikings' greatest warriors, but when
            his father is killed in battle by the mercenary leader Askeladd, he
            swears to have his revenge. Thorfinn joins Askeladd's band in order
            to challenge him to a duel, and ends up caught in the middle of a
            war for the crown of England.
          </p>
        </div>
      </div>
    </section>
  );
};
export default FeaturedRow;
