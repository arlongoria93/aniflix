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

  let rank = Media.rankings
    .filter((rank) => rank.year === null && rank.type === "POPULAR")
    .map((rank) => rank.rank);

  console.log(Media);

  return (
    <div className="bg-mainBG ">
      <Head>
        <title>{Media.title.english}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="grid lg:grid-cols-2 p-12 md:grid-cols-1 iphone:grid-cols-1 iphone:justify-items-center ">
        <div className="rounded  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110">
          <Image
            src={Media.coverImage.extraLarge}
            width={460}
            height={690}
            className="rounded-lg shadow-2xl "
          />
        </div>

        {/* Title and description */}
        <div className="flex flex-col lg:block w-full iphone:mt-10 lg:mt-0">
          <h1 className="font-display text-2xl  text-white lg:text-left iphone:text-center">
            {Media.title.english}
          </h1>
          <div className="flex flex-col ">
            {/* raitings */}
            <div className="flex flex-row items-center iphone:justify-center lg:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-current text-secondaryBG"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <h1 className="font-display h-full text-md align-middle text-white">
                #{rank[0]} Highest Rated All Time
              </h1>
            </div>
          </div>

          <p className="font-display text-xl text-white text-left w-3/4 lg:mx-0 iphone:mx-auto mt-12 leading-8">
            {description}
          </p>
          {/* Main Characters */}
          <div className="flex flex-col ">
            <h1 className="font-display text-2xl text-white mt-4 iphone:text-center iphone:p-4">
              Main Characters
            </h1>
            <div className="flex md:flex-col lg:flex-row iphone:flex-col iphone:space-y-2 lg:space-x-4 items-center">
              {Media.characterPreview.edges.map((characters) => {
                return (
                  <div key={characters.id}>
                    <p className="font-display text-white text-center">
                      {characters.node.name.userPreferred}
                    </p>
                    <Image
                      width={230}
                      height={345}
                      objectFit="contain"
                      src={characters.node.image.large}
                      className="rounded  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="">
        <h1 className="font-display text-2xl text-white mt-4 iphone:text-center iphone:p-4">
          Recommended Anime
        </h1>
      </div>
      <div className="grid iphone:grid-cols-3 lg:justify-center gap-4 lg:flex lg:flex-row lg:space-x-4 lg:items-cemter lg:w-full p-10 lg:p-24 ">
        {Media.recommendations.nodes.map((recommendations) => {
          return (
            <div className="justify-self-center lg:self-center">
              <p className="text-center text-white font-display ">
                {recommendations.mediaRecommendation.title.userPreferred
                  .length > 25
                  ? recommendations.mediaRecommendation.title.userPreferred.slice(
                      0,
                      -15
                    ) + "..."
                  : recommendations.mediaRecommendation.title.userPreferred}
              </p>
              <Image
                width={200}
                height={300}
                objectFit="cover"
                src={recommendations.mediaRecommendation.coverImage.large}
                className="rounded rounded  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
              />
            </div>
          );
        })}
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
  Media (id: $id, type: ANIME) {
  id title {
            userPreferred romaji english native
        }
        coverImage {
            extraLarge large
        }
        bannerImage startDate {
            year month day
        }
        endDate {
            year month day
        }
        description season seasonYear type format status(version: 2) episodes duration chapters volumes genres synonyms source(version: 2) isAdult isLocked meanScore averageScore popularity favourites hashtag countryOfOrigin isLicensed isFavourite isRecommendationBlocked nextAiringEpisode {
            airingAt timeUntilAiring episode
        }
        relations {
            edges {
                id relationType(version: 2) node {
                    id title {
                        userPreferred
                    }
                    format type status(version: 2) bannerImage coverImage {
                        large
                    }
                }
            }
        }
        characterPreview: characters(perPage: 6, sort: [ROLE, RELEVANCE, ID]) {
            edges {
                id role name voiceActors(language: JAPANESE, sort: [RELEVANCE, ID]) {
                    id name {
                        userPreferred
                    }
                    language: languageV2 image {
                        large
                    }
                }
                node {
                    id name {
                        userPreferred
                    }
                    image {
                        large
                    }
                }
            }
        }
        staffPreview: staff(perPage: 8, sort: [RELEVANCE, ID]) {
            edges {
                id role node {
                    id name {
                        userPreferred
                    }
                    language: languageV2 image {
                        large
                    }
                }
            }
        }
        studios {
            edges {
                isMain node {
                    id name
                }
            }
        }
        reviewPreview: reviews(perPage: 2, sort: [RATING_DESC, ID]) {
            pageInfo {
                total
            }
            nodes {
                id summary rating ratingAmount user {
                    id name avatar {
                        large
                    }
                }
            }
        }
        recommendations(perPage: 7, sort: [RATING_DESC, ID]) {
            pageInfo {
                total
            }
            nodes {
                id rating userRating mediaRecommendation {
                    id title {
                        userPreferred
                    }
                    format type status(version: 2) bannerImage coverImage {
                        large
                    }
                }
                user {
                    id name avatar {
                        large
                    }
                }
            }
        }
        externalLinks {
            site url
        }
        streamingEpisodes {
            site title thumbnail url
        }
        trailer {
            id site
        }
        rankings {
            id rank type format year season allTime context
        }
        tags {
            id name description rank isMediaSpoiler isGeneralSpoiler
        }
        mediaListEntry {
            id status score
        }
        stats {
            statusDistribution {
                status amount
            }
            scoreDistribution {
                score amount
            }
        }

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
