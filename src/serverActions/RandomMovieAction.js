"use server";

export const randomMovieAction = async () => {
    return await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=fr-FR&page=2`).then(res => res.json()).then(res => {
         return res.results[Math.floor(Math.random() * res.results.length)];
    });
}