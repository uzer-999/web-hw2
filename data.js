
/* ===== Part A: 배열 4개 ===== */

// 내 인생 영화 5편 + 박스오피스 TOP 5
const titles = [
  "인셉션",
  "인터스텔라",
  "건국전쟁",
  "기생충",
  "파이트 클럽",
  "극장판 치이카와: 인어 섬의 비밀",
  "실낙원",
  "암살자(들)",
  "클레이페이스",
  "베러티"
];

// TMDB vote_average
// 박스오피스 영화 5편의 0은 임시값이며 실제 TMDB 매칭 후 수정
const ratings = [
  8.4, 8.5, 7.9, 8.5, 8.4,
  0, 0, 0, 0, 0
];

const years = [
  2010, 2014, 2024, 2019, 1999,
  2026, 2026, 2026, 2026, 2026
];

// 내 인생 영화는 0, 박스오피스는 KOBIS 누적 관객 수
const audiences = [
  0, 0, 0, 0, 0,
  1927843, 38169, 3306269, 28907, 8777
];

/* ===== Part B: 영화 객체 10건 ===== */

// Part A와 같은 순서로 작성
const movies = [
  {
    title: "인셉션",
    year: 2010,
    date: "2010-07-15",
    rating: 8.4,
    audience: 0,
    poster: "/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "인터스텔라",
    year: 2014,
    date: "2014-11-06",
    rating: 8.5,
    audience: 0,
    poster: "/gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "건국전쟁",
    year: 2024,
    date: "2024-02-01",
    rating: 7.9,
    audience: 0,
    poster: "/qWAXjBXLxKXYQ3KeH1gf3thdxUS.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "기생충",
    year: 2019,
    date: "2019-05-30",
    rating: 8.5,
    audience: 0,
    poster: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "파이트 클럽",
    year: 1999,
    date: "1999-10-15",
    rating: 8.4,
    audience: 0,
    poster: "/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    type: "mine",
    rank: null
  },
  {
    title: "극장판 치이카와: 인어 섬의 비밀",
    year: 2026,
    date: "2026-09-30",
    rating: 0,
    audience: 1927843,
    poster: null,
    type: "boxoffice",
    rank: 1
  },
  {
    title: "실낙원",
    year: 2026,
    date: "2026-10-21",
    rating: 0,
    audience: 38169,
    poster: null,
    type: "boxoffice",
    rank: 2
  },
  {
    title: "암살자(들)",
    year: 2026,
    date: "2026-09-23",
    rating: 0,
    audience: 3306269,
    poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg",
    type: "boxoffice",
    rank: 3
  },
  {
    title: "클레이페이스",
    year: 2026,
    date: "2026-10-21",
    rating: 0,
    audience: 28907,
    poster: null,
    type: "boxoffice",
    rank: 4
  },
  {
    title: "베러티",
    year: 2026,
    date: "2026-10-22",
    rating: 0,
    audience: 8777,
    poster: null,
    type: "boxoffice",
    rank: 5
  }
];
