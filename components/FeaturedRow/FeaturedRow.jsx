import Image from "next/image";
import styles from "./FeaturedRow.module.css";
const sectionContainer = `${styles.bg} bg-mainBG`;
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
      <div className="relative h-full bg-mainBG bg-blend-multiply">
        {" "}
        <div className="flex items-center text-center w-full h-full absolute  z-10">
          <div className=" grid grid-cols-1 lg:w-1/2 sm:w-full  m:w-full sm:p-4 md:p-6 lg:p-10">
            <div>
              <h1 className="font-display text-white text-left  font-bold text-xl lg:text-2xl">
                Vinland Saga
              </h1>
              <br className="border border-black w-full " />
              <p className="text-sm leading-8 text-white font-display lg:text-left lg:text-lg lg:leading-10">
                {s}
              </p>
            </div>
            <div>
              <button className="transition duration-300 bg-secondaryBG hover:bg-brightBG text-white w-1/5 mt-10 font-display p-1 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="z-0 ">
          <div className="absolute h-full w-full bg-blend-hue bottom-0 left-0">
            <Image
              src="/images/featured/featured.jpg"
              layout="fill"
              objectFit="cover"
              className=" opacity-30 z-0 sm:object-center lg:object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedRow;
