import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// var query = `query media($id: Int, $type: MediaType, $isAdult: Boolean) {
//   Media(id: $id, type: $type, isAdult: $isAdult) {
//     id
//     title
//     {
//       userPreferred
//       romaji
//       english
//       native
//     }
//     coverImage {
//       extraLarge
//       large
//     }
//     bannerImage
//     startDate {
//       year
//       month
//       day
//     }
//     endDate {
//       year
//       month
//       day
//     }
//     description
//     season
//     seasonYear
//     type format status(version: 2)
//     episodes
//     duration
//     chapters
//     volumes
//     genres
//     synonyms
//     source(version: 2)
//     isAdult
//     isLocked
//     meanScore
//     averageScore
//     popularity
//     favourites
//     hashtag
//     countryOfOrigin
//     isLicensed
//     isFavourite
//     isRecommendationBlocked
//     nextAiringEpisode {
//       airingAt
//       timeUntilAiring
//       episode
//     }
//     relations {
//       edges {
//         id
//         relationType(version: 2)
//         node {
//           id
//           title {
//             userPreferred
//           }
//           format type status(version: 2)
//           bannerImage
//           coverImage {
//             large
//           }
//         }
//       }
//     }
//     characterPreview: characters(perPage: 6, sort: [ROLE, RELEVANCE, ID])
//     {
//       edges {
//         id
//         role
//         name
//         voiceActors(language: JAPANESE, sort: [RELEVANCE, ID]) {
//           id
//           name {
//             userPreferred
//           }
//           language: languageV2
//           image {
//             large
//           }
//         }
//         node {
//           id
//           name {
//             userPreferred
//           } image {
//             large
//           }
//         }
//       }
//     }
//     staffPreview: staff(perPage: 8, sort: [RELEVANCE, ID]) {
//       edges {
//         id
//         role
//         node {
//           id
//           name {
//             userPreferred
//           } language: languageV2
//           image{
//             large
//           }
//         }
//       }
//     }
//     studios {
//       edges {
//         isMain
//         node {
//           id
//           name
//         }
//       }
//     } reviewPreview: reviews(perPage: 2, sort: [RATING_DESC, ID]) {
//       pageInfo{
//         total
//       }
//       nodes {
//         id
//         summary
//         rating
//         ratingAmount
//         user {
//           id
//           name
//           avatar {
//             large
//           }
//         }
//       }
//     }
//     recommendations(perPage: 7, sort: [RATING_DESC, ID]) {
//       pageInfo{
//         total
//       }
//       nodes {
//         id
//         rating
//         userRating
//         mediaRecommendation {
//           id
//           title {
//             userPreferred
//           }
//           format type status(version: 2)
//           bannerImage
//           coverImage {
//             large
//           }
//         }
//         user {
//           id
//           name
//           avatar {
//             large
//           }
//         }
//       }
//     }
//     externalLinks{
//       site
//       url
//     }
//     streamingEpisodes{
//       site
//       title
//       thumbnail
//       url
//     }
//     trailer{
//       id
//       site
//     }
//     rankings{
//       id
//       rank
//       type format
//       year
//       season
//       allTime
//       context
//     }
//     tags{
//       id
//       name
//       description
//       rank
//       isMediaSpoiler
//       isGeneralSpoiler
//     }
//     mediaListEntry{
//       id
//       status
//       score
//     }
//     stats
//     {
//       statusDistribution{
//         status
//         amount
//       }
//       scoreDistribution{
//         score
//         amount
//       }
//     }
//   }
// }`;

var query = `
  query($page: Int = 1 $id: Int $type: MediaType $isAdult: Boolean = false $search: String $format: [MediaFormat]$status: MediaStatus $countryOfOrigin: CountryCode $source: MediaSource $season: MediaSeason $seasonYear: Int $year: String $onList: Boolean $yearLesser: FuzzyDateInt $yearGreater: FuzzyDateInt $episodeLesser: Int $episodeGreater: Int $durationLesser: Int $durationGreater: Int $chapterLesser: Int $chapterGreater: Int $volumeLesser: Int $volumeGreater: Int $licensedBy: [String]$genres: [String]$excludedGenres: [String]$tags: [String]$excludedTags: [String]$minimumTagRank: Int $sort: [MediaSort] = [POPULARITY_DESC, SCORE_DESC])
{
  Page(page: $page, perPage: 20) {
    pageInfo {
      total perPage currentPage lastPage hasNextPage
    }
    media(id: $id type: $type season: $season format_in: $format status: $status countryOfOrigin: $countryOfOrigin source: $source search: $search onList: $onList seasonYear: $seasonYear startDate_like: $year startDate_lesser: $yearLesser startDate_greater: $yearGreater episodes_lesser: $episodeLesser episodes_greater: $episodeGreater duration_lesser: $durationLesser duration_greater: $durationGreater chapters_lesser: $chapterLesser chapters_greater: $chapterGreater volumes_lesser: $volumeLesser volumes_greater: $volumeGreater licensedBy_in: $licensedBy genre_in: $genres genre_not_in: $excludedGenres tag_in: $tags tag_not_in: $excludedTags minimumTagRank: $minimumTagRank sort: $sort isAdult: $isAdult)
    {
      id
      title {
        userPreferred
      }
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
      season
      description
      type
      format
      status(version: 2)
      episodes
      duration
      chapters
      volumes
      genres
      isAdult
      averageScore
      popularity
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
      mediaListEntry {
        id
        status
      }
      studios(isMain: true) {
        edges {
          isMain
          node {
            id
            name
          }
        }
      }
    }
  }
}
`;

var variables = {
  page: 1,
  // "id": "",
  type: "ANIME",
  // "seasonYear": 2021,
  // "season": "SUMMER",
  // "trending":
};

// Define the config we'll need for our Api request
var url = "https://graphql.anilist.co",
  options = {
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

// Make the HTTP Api request
fetch(url, options).then(handleResponse).then(handleData).catch(handleError);

export default function Home() {
  return (
    <article className="prose lg:prose-xl">
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <p>
        For years parents have espoused the health benefits of eating garlic
        bread with cheese to their children, with the food earning such an
        iconic status in our culture that kids will often dress up as warm,
        cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to
        a serises of rabies cases springing up around the country.
      </p>
    </article>
  );
}
