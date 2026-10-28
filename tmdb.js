
/*
 * tmdb.js : TMDB now_playing 응답
 *
 * 제출 전 해야 할 일:
 * 1. TMDB API의 now_playing 응답 전체를 복사합니다.
 * 2. 아래 임시 객체 전체를 응답 JSON으로 교체합니다.
 * 3. JSON 앞에 const TMDB = 를 붙이고 마지막에 ; 을 붙입니다.
 * 4. API 키가 들어 있는 URL은 이 파일에 넣지 않습니다.
 *
 * 아래 객체는 실제 TMDB 응답이 아닙니다.
 */

const TMDB = {
  dates: {
    maximum: "",
    minimum: ""
  },
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0
};
