import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import LayoutLeft from "../../components/SlugLayout/Layout";
import LayoutRight from "../../components/SlugLayout/LayoutRight";

const Details = (props) => {
  const { data } = props;
  const { Media } = data.data;

  return (
    <div className="bg-mainBG">
      <Head>
        <title>{Media.title.english}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="grid lg:grid-cols-2  md:grid-cols-1 iphone:grid-cols-1 iphone:justify-items-center ">
        <LayoutLeft Media={Media} />
        <LayoutRight Media={Media} />
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
