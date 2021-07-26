import Image from "next/image";
import styles from "./FeaturedRow.module.css";
const sectionContainer = `${styles.bg} bg-mainBG overflow-hidden`;
const FeaturedRow = () => {
  const s = `Young Thorfinn grew up listening to the stories of old sailors
                that had traveled the ocean and reached the place of legend,
                Vinland. It's said to be warm and fertile, a place where there
                would be no need for fighting—not at all like the frozen village
                in Iceland where he was born, and certainly not like his current
                life as a mercenary. War is his home now. Though his father once
                told him, "You have no enemies, nobody does. There is nobody who
                it's okay to hurt," as he grew, Thorfinn knew that nothing was
                further from the truth.`;
  return (
    <section className={sectionContainer}>
      <div className="grid grid-cols-1">
        <div className="w-1/2 justify-self-center">
          <Image
            src="/images/cover/cover.jpg"
            className="object-contain"
            width={460}
            height={650}
          />
        </div>
        <div className="font-display overflow-y-auto text-white">
          <p className="iphone:text-sm overflow-y-auto">{s}</p>
        </div>
      </div>
    </section>
  );
};
export default FeaturedRow;
