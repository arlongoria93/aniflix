import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import { useRouter } from "next/router";

const Details = (props) => {
  const router = useRouter();
  const { data } = props;
  const { slug } = router.query;
  const { Media } = data.data;
  const description = Media.description.replace(
    /(<|&lt;)br\s*\/*(>|&gt;)/g,
    " "
  );
  console.log(Media);

  let banner = data.data.Media.bannerImage;
  return (
    <div className="">
      <Head>
        <title>{slug}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="grid md:grid-cols-2 p-12 iphone:grid-cols-1 iphone:justify-items-center">
        <div className="md:hidden">
          <h1 className="font-display text-2xl text-white mb-4">
            {Media.title.english}
          </h1>
        </div>
        <div className="">
          <Image
            src={Media.coverImage.extraLarge}
            width={460}
            height={690}
            className="rounded-lg shadow-2xl "
          />
        </div>
        <div className="iphone:hidden lg:block w-full">
          <h1 className="font-display text-2xl text-white text-left">
            {Media.title.english}
          </h1>
          <p className="font-display text-xl text-white text-left w-3/4 mt-12 leading-8">
            {description}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;

export async function getServerSideProps(context) {
  let id = context.params.slug;
  let query = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
    description
    coverImage {
        extraLarge
        large
        color
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      bannerImage
  }
}
`;

  // Define the config we'll need for our Api request
  var url = "https://graphql.anilist.co";

  const apiOptions = (variables) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };
    return options;
  };

  const responsePopular = await fetch(url, apiOptions({ id }));
  const mostPopular = await responsePopular.json();

  return {
    props: { data: mostPopular },
  };
}
