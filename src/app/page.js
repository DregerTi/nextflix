import Button from "@/components/atoms/Button";
import {AiOutlineExport } from 'react-icons/ai';
import MovieCardList from "@/components/molecules/MovieCardList";
import React from "react";
import Layout from "@/components/organismes/Layout";
import RandomMovie from "@/components/molecules/RandomMovie";

export default async function Home() {

    const popularMovies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=fr-FR&page=1`).then((res) => res.json());
    const trendingMovies = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}&language=fr-FR&page=1`).then((res) => res.json());

    const mostPopularMovie = popularMovies.results[0];

    popularMovies.results.shift();

    const chipsData = [
        {title: 'Action'},
        {title: 'Drame'},
        {title: 'Comédie'},
    ];

    return (
        <Layout>
            <div className="relative w-full h-[65dvh] rounded overflow-hidden shadow-lg flex mb-2 pb-4 max-sm:p-0 max-sm:flex-col">
                <img
                    className="shadow-inner-right rounded-lg h-full w-full max-sm:h-full object-cover grayscale-[10%]"
                    src={`https://image.tmdb.org/t/p/original/${mostPopularMovie.backdrop_path}`}
                    alt={mostPopularMovie.title}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3" />
                <div className="absolute w-full bottom-0 left-0 max-sm:px-6 max-sm:py-4 py-20 px-10 flex-grow flex flex-col justify-between">
                    <h1 className="text-6xl font-bold mb-2 max-sm:hidden">Cette semaine ne ratez pas!</h1>
                    <div className="max-sm:flex-col">
                        <div className="font-bold text-2xl mb-2">{mostPopularMovie.title}</div>
                        <div className="mt-8">
                            <Button title="Voir plus"
                                    href={`/movie/${mostPopularMovie.id}`}
                                    className={'max-sm:!w-full !bg-blue-400 hover:!bg-blue-500'}
                                    icon={<AiOutlineExport/>}/>
                        </div>
                    </div>
                </div>
            </div>

            <section className="w-full mt-2">
                <h2 className="text-xl font-medium mt-4 ml-8">Films à la une</h2>
                <MovieCardList movies={trendingMovies.results}/>
            </section>

            <section className="w-full mt-2">
                <h2 className="text-xl font-medium mt-4 ml-8">Serie du moment</h2>
                <MovieCardList movies={popularMovies.results}/>
            </section>

            <RandomMovie/>
        </Layout>
    )
}
