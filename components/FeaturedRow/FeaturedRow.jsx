import Image from "next/image";
import { Fragment } from "react";
import styles from "./FeaturedRow.module.css";
const sectionContainer = `${styles.test} iphone:hidden`;
const sectionContainerMobile = `${styles.test2}  `;

const FeaturedRow = () => {
  const url = "/images/banner/banner.jpg";
  const mobilePhone = "/images/cover/cover.jpg";

  const s = `Thorfinn is son to one of the Vikings' greatest warriors, but when
            his father is killed in battle by the mercenary leader Askeladd, he
            swears to have his revenge. Thorfinn joins Askeladd's band in order
            to challenge him to a duel, and ends up caught in the middle of a
            war for the crown of England.`;
  return (
    <section className="">
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
      <div className="iphone:text-white iphone:w-screen p-4">
        <h1 className="font-display text-2xl">Vinland Saga</h1>
        <div className="font-display text-lg">Description</div>
        <p className="lg:w-1/2">{s}</p>
      </div>{" "}
      <hr className="w-1/2 text-center mx-auto " />
    </section>
  );
};
export default FeaturedRow;
//  <div className="grid grid-cols-1">
//         <h1 className="justify-self-center text-white text-xl">Vinland Saga</h1>
//         <div className=" relative justify-self-center h-72 w-screen">
//           <Image
//             src="/images/cover/cover.jpg"
//             layout="fill"
//             objectFit="contain"
//           />
//         </div>
//         <div className="font-display overscroll-auto text-white">
//           <p className="iphone:text-sm  p-2">{s}</p>
//         </div>
//       </div>
