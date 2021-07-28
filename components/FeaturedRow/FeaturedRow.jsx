import styles from "./FeaturedRow.module.css";
import Link from "next/link";
const sectionContainer = `${styles.test} iphone:hidden filter drop-shadow `;
const sectionContainerMobile = `${styles.test2} `;

const FeaturedRow = () => {
  const url = "/images/banner/banner.jpg";
  const mobilePhone = "/images/cover/cover.jpg";

  const s = `Thorfinn is son to one of the Vikings' greatest warriors, but when
            his father is killed in battle by the mercenary leader Askeladd, he
            swears to have his revenge. Thorfinn joins Askeladd's band in order
            to challenge him to a duel, and ends up caught in the middle of a
            war for the crown of England.`;
  return (
    <section className="p-8">
      <div className="mt-2" />
      <section
        className={sectionContainer}
        style={{
          backgroundImage: `url(${url})`,
        }}
      />
      <section
        className={sectionContainerMobile}
        style={{
          backgroundImage: `url(${mobilePhone})`,
        }}
      />
      <div className="iphone:text-white  p-4 flex flex-col space-y-4">
        <h1 className="font-display text-2xl">Vinland Saga</h1>
        <div className="font-display text-lg">Description</div>
        <p className="lg:w-1/2">{s}</p>{" "}
        <Link href="/anime/f">
          <button
            type="button"
            className=" iphone:self-center lg:self-start items-center border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-secondaryBG hover:bg-lighterBG w-28 h-8"
          >
            Learn More
          </button>
        </Link>
      </div>{" "}
      <hr className="w-1/2 text-center mx-auto " />
    </section>
  );
};
export default FeaturedRow;
