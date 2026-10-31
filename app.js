// A1 : 배열 ⇒ 평균 평점
let sumA = 0;

for (let i = 0; i < ratings.length; i++) {
  sumA += ratings[i];
}

console.log("A1 평균 평점:", sumA / ratings.length);

// A2 : 배열 ⇒ 최고 평점 영화 제목과 평점
let maxA = 0;

for (let i = 1; i < ratings.length; i++) {
  if (ratings[i] > ratings[maxA]) {
    maxA = i;
  }
}

console.log("A2 최고 평점:", titles[maxA], ratings[maxA]);

// A3 : 배열 ⇒ 8점 이상인 영화 수
let countA = 0;

for (let i = 0; i < ratings.length; i++) {
  if (ratings[i] >= 8) {
    countA++;
  }
}

console.log("A3 8점 이상:", countA + "편");

// A4 : 연도 배열 ⇒ 연도대별 영화 수
let count2020A = 0;
let count2010A = 0;
let count2000A = 0;
let countBeforeA = 0;

for (let i = 0; i < years.length; i++) {
  const decadeA = years[i] - (years[i] % 10);

  switch (decadeA) {
    case 2020:
      count2020A++;
      break;
    case 2010:
      count2010A++;
      break;
    case 2000:
      count2000A++;
      break;
    default:
      countBeforeA++;
      break;
  }
}

console.log(
  "A4 연도대별:",
  `2020년대 ${count2020A}편,`,
  `2010년대 ${count2010A}편,`,
  `2000년대 ${count2000A}편,`,
  `그 이전 ${countBeforeA}편`
);

// A5 : 배열 ⇒ 누적 관객 100만 명 이상인 영화
let bigA = "";

for (let i = 0; i < audiences.length; i++) {
  if (audiences[i] >= 1000000) {
    bigA += titles[i] + " ";
  }
}

console.log("A5 관객 100만 이상:", bigA.trim() || "없음");

// average : 영화 배열 ⇒ 평균 평점
function average(list) {
  if (list.length === 0) return 0;
  return averageBy(list, "rating");
}

// best : 영화 배열 ⇒ 최고 평점 영화 객체
function best(list) {
  if (list.length === 0) return null;

  let bestMovie = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i].rating > bestMovie.rating) {
      bestMovie = list[i];
    }
  }

  return bestMovie;
}

// filterByRating : 영화 배열, 최소 평점 ⇒ 새 배열
function filterByRating(list, min) {
  return list.filter(movie => movie.rating >= min);
}

// sortBy : 영화 배열, 속성 이름, 내림차순 여부 ⇒ 새 배열
function sortBy(list, key, desc) {
  const sign = desc ? -1 : 1;

  return [...list].sort((a, b) => {
    if (a[key] == null && b[key] == null) return 0;
    if (a[key] == null) return 1;
    if (b[key] == null) return -1;

    let result;

    if (typeof a[key] === "string") {
      result = a[key].localeCompare(b[key]);
    } else {
      result = a[key] - b[key];
    }

    return sign * result;
  });
}

// search : 영화 배열, 검색어 ⇒ 제목 부분 일치 배열
function search(list, keyword) {
  const normalizedKeyword = keyword.trim().toLowerCase();

  return list.filter(movie =>
    movie.title.toLowerCase().includes(normalizedKeyword)
  );
}

// formatNumber : 숫자 또는 숫자 문자열 ⇒ 천 단위 쉼표 문자열
function formatNumber(n) {
  return Number(n).toLocaleString("ko-KR");
}

// yearsSince : 날짜 문자열 ⇒ 올해까지 지난 연수
function yearsSince(dateStr) {
  const date = new Date(dateStr + "T00:00:00");
  return new Date().getFullYear() - date.getFullYear();
}

const bestMovie = best(movies);
const topAudience = sortBy(movies, "audience", true)[0];

document.getElementById("out").textContent = [
  `전체 ${movies.length}편, 평균 평점 ${average(movies).toFixed(1)}점`,
  `최고 평점 영화: ${bestMovie.title} (${bestMovie.rating.toFixed(1)}점, 개봉한 지 ${yearsSince(bestMovie.date)}년)`,
  `관객 1위: ${topAudience.title} (누적 ${formatNumber(topAudience.audience)}명)`
].join("\n");

// getList : TMDB 응답 객체 ⇒ 영화 배열
function getList(data) {
  return data.results;
}

// averageBy : 객체 배열, 속성 이름 ⇒ 해당 값의 평균
function averageBy(list, key) {
  if (list.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < list.length; i++) {
    sum += Number(list[i][key]) || 0;
  }

  return sum / list.length;
}

// C1 : 응답 페이지 및 영화 수
const tmdbMovies = getList(TMDB);

console.log(
  "C1 페이지:", TMDB.page,
  "전체 페이지:", TMDB.total_pages,
  "전체 영화:", TMDB.total_results,
  "이번 응답:", tmdbMovies.length
);

// C2 : TMDB 평점 평균
console.log(
  "C2 상영작 평균 평점:",
  averageBy(tmdbMovies, "vote_average").toFixed(1)
);

// C3 : 평점 상위 5편
console.table(
  sortBy(tmdbMovies, "vote_average", true).slice(0, 5),
  ["title", "release_date", "vote_average"]
);

// C4 : 실제 응답 안에 존재하는 제목 일부로 검색
if (tmdbMovies.length > 0) {
  const keywordC = tmdbMovies[0].title.slice(0, 2);

  console.log(
    "C4 검색어:", keywordC,
    "검색 결과:", search(tmdbMovies, keywordC).length
  );
}

console.log("TEST 1:", formatNumber("1234567"));
console.log("TEST 2:", average(movies).toFixed(1));
console.log("TEST 3:", best(movies).title);
console.log("TEST 4:", sortBy(movies, "rating", true)[0].title);
console.log("TEST 5:", filterByRating(movies, 8).length);
console.log("TEST 6:", search(movies, " 인터 ").length);
console.log("TEST 7:", yearsSince("2014-11-06"));

const firstTitleBeforeSort = movies[0].title;
sortBy(movies, "rating", true);
console.log("TEST 8:", movies[0].title === firstTitleBeforeSort);
