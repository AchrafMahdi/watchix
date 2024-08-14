import { clsx } from "clsx";
import next from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const API_KEY = process.env.TMDB_API_KEY;

export const MoviesApiCalls = {
  trending: async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
      { next: { revalidate: 3600 } },
      { cache: "force-cache" }
    );
    return res.json();
  },
  discover: async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_video=true&language=en-US`,
      { next: { revalidate: 3600 } },
      { cache: "force-cache" }
    );
    return res.json();
  },
  upcoming: async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
      { next: { revalidate: 3600 } },
      { cache: "force-cache" }
    );
    return res.json();
  },
  popular: async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      { next: { revalidate: 3600 } },
      { cache: "force-cache" }
    );
    return res.json();
  },
  topRated: async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
      { next: { revalidate: 3600 } },
      { cache: "force-cache" }
    );
    return res.json();
  },
  video: async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`,
      { next: { revalidate: 3600 } },
      { cache: "force-cache" }
    );
    return res.json();
  },
  getMovieImages: async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}&language=en`,
      { next: { revalidate: 3600 } },
      { cache: "force-cache" }
    );
    return res.json();
  },
  getMovieByGenre: async (genre, page = null) => {
    const chosenOne = genres.find(
      (g) => g.name.toLowerCase() === genre.toLowerCase()
    );
    if (chosenOne) {
      if (page === null || page === 1) {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=${chosenOne.id}&api_key=${API_KEY}&include_adult=false`,
          { next: { revalidate: 3600 } },
          { cache: "force-cache" }
        );
        return res.json();
      } else {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=${chosenOne.id}&api_key=${API_KEY}&include_adult=false&page=${page}`,
          { next: { revalidate: 3600 } },
          { cache: "force-cache" }
        );
        return res.json();
      }
    } else {
      return null;
    }
  },
  search: async (title, page = null) => {
    if (page === null || page === 1) {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&api_key=${API_KEY}`,
        { cache: "no-store" }
      );
      return res.json();
    } else {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&api_key=${API_KEY}&page=${page}`,
        { cache: "no-store" }
      );
      return res.json();
    }
    return res.json();
  },
  getMovieById: async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos&language=en-US`,
      { next: { revalidate: 3600 } },
      { cache: "force-cache" }
    );
    return res.json();
  },
  getSimilar: async (id) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`,
      { next: { revalidate: 3600 } },
      { cache: "force-cache" }
    );
    return res.json();
  },
};

export const getGenreByID = (id) => {
  return genres.find((g) => g.id === parseInt(id));
};

const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export async function get_average_rgb(src) {
  /* https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript */
  return new Promise((resolve) => {
    let context = document.createElement("canvas").getContext("2d");
    context.imageSmoothingEnabled = true;

    let img = new Image();
    img.src = src;
    img.crossOrigin = "";

    img.onload = () => {
      context.drawImage(img, 0, 0, 1, 1);
      resolve(context.getImageData(0, 0, 1, 1).data.slice(0, 3));
    };
  });
}
