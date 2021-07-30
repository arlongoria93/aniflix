import styles from "./FeaturedRow.module.css";
import Link from "next/link";
const sectionContainer = `${styles.test} iphone:hidden filter drop-shadow `;
const sectionContainerMobile = `${styles.test2} `;

const FeaturedRow = (props) => {
  const { data } = props;

  const random = Math.floor(Math.random() * data.length);
  const randomAnime = data[random];
  const linkUrl = `/anime/${randomAnime.id}`;
  const url = `${randomAnime.bannerImage}`;
  const mobilePhone = `${randomAnime.coverImage.extraLarge}`;

  const description = randomAnime.description.replace(
    /(<|&lt;)br\s*\/*(>|&gt;)/g,
    " "
  );
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
        <h1 className="font-display text-2xl">
          {randomAnime.title.userPreferred}
        </h1>
        <div className="font-display text-lg">Description</div>
        <p className="lg:w-1/2">{description}</p>
        <Link href={linkUrl}>
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
