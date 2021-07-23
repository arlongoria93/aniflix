import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { handleError, handleData, handleResponse } from "../util/helper";

export default function Home(props) {
  const { data } = props;
  return <article className="prose lg:prose-xl">{console.log(data)}</article>;
}
export async function getStaticProps(context) {
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
      rankings{
        id
        rank
        type format
        year
        season
        allTime
        context
      }
    }
  }
}
`;
  // Define our query variables and values that will be used in the query request
  // var variables = {
  //   id: 15125
  // };

  var variables = {
    page: 1,
    // "id": "116742",
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
  const data = await fetch(url, options)
    .then(handleResponse)
    .then(handleData)
    .catch(handleError);
  return {
    props: { data: data },
  };
}
