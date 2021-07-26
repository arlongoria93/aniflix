import Image from "next/image";
import styles from "./FeaturedRow.module.css";
const sectionContainer = `${styles.bg} overflow-hidden bg-mainBG grid iphone:gird-cols-1 p-4 gap-4`;
const FeaturedRow = () => {
  return (
    <section className={sectionContainer}>
      {/* <div className="w-1/2 justify-self-center flex">
        <Image
          src="/images/cover/cover.jpg"
          className="object-contain"
          width={460}
          height={650}
        />
      </div>
      <div className="  overflow-y-auto font-display text-white">
        <p className="iphone:text-sm"></p>
      </div> */}
    </section>
  );
};
export default FeaturedRow;
