
/*
 * tmdb.js
 * 테스트용 가상 JSON입니다.
 * 실제 TMDB now_playing 응답이 아닙니다.
 */

const TMDB = {
  dates: {
    maximum: "2026-10-28",
    minimum: "2026-09-10"
  },
  page: 1,
  results: [
    {
      title: "가상 상영작 A",
      original_title: "Fictional Movie A",
      release_date: "2026-10-01",
      vote_average: 8.6,
      vote_count: 1200,
      poster_path: null
    },
    {
      title: "가상 상영작 B",
      original_title: "Fictional Movie B",
      release_date: "2026-09-25",
      vote_average: 7.9,
      vote_count: 800,
      poster_path: null
    },
    {
      title: "가상 상영작 C",
      original_title: "Fictional Movie C",
      release_date: "2026-09-20",
      vote_average: 8.2,
      vote_count: 950,
      poster_path: null
    },
    {
      title: "가상 상영작 D",
      original_title: "Fictional Movie D",
      release_date: "2026-09-15",
      vote_average: 6.8,
      vote_count: 450,
      poster_path: null
    },
    {
      title: "가상 상영작 E",
      original_title: "Fictional Movie E",
      release_date: "2026-09-10",
      vote_average: 7.4,
      vote_count: 620,
      poster_path: null
    }
  ],
  total_pages: 1,
  total_results: 5
};
