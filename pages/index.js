import Head from "next/head";
import Image from "next/image";

import Layout from "../layout/layout";
import {GetSeason, GetYear } from "../util/helper";

export default function Home(props) {
  const { mp,ra,top } = props;
  const mediaMP = mp.data.Page.media;
  const rencentlyAddedMedia = ra.data.Page.media;
  const topOfYearMedia = top.data.Page.media;
  
  return <Layout mpMedia={mediaMP} topMedia={topOfYearMedia} raMedia={ rencentlyAddedMedia} />;
}
export async function getStaticProps() {
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

  const mostPopularVariables = {
    page: 1,
    type: "ANIME",
  };
   const recentVariables = {
    page: 1,
    type: "ANIME",
    seasonYear: GetYear(),
    season: GetSeason(),
   };
   const topOfYearVariables = {
    page: 1,
    type: "ANIME",
    seasonYear: GetYear()
  };

  // Define the config we'll need for our Api request
  var url = "https://graphql.anilist.co"
  
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
      
    }
    return options
  }

    // Make the HTTP Api request

    //Rexently Added API Call
    const responseRecent = await fetch(url, apiOptions(recentVariables));
    const recent = await responseRecent.json();
    //Popular API Call
    const responsePopular = await fetch(url, apiOptions(mostPopularVariables));
    const mostPopular = await responsePopular.json();
    //Top 2021 API Call
    const responseTopofYear = await fetch(url, apiOptions(topOfYearVariables));
    const topOfYear = await responseTopofYear.json();

    return {
      props: { mp: mostPopular, ra: recent, top: topOfYear },
    };
  }

