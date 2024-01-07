import Layout from "@/components/organismes/Layout";
import {notFound} from "next/navigation";
import ChipList from "@/components/molecules/ChipList";

export async function generateStaticParams() {

    const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=fr-FR&page=1`).then((res) => res.json());

    return movies.results.map((movie) => ({
        params: {
            id: movie.id,
        },
    }));

}

export default async function MovieDetailsPage({params}) {

    const {id} = params;

    const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=fr-FR`).then((res) => res.json());

    if (!movie.id) {
        return notFound();
    }

    return (
        <Layout>
            <header className="relative w-full h-[65dvh] rounded overflow-hidden shadow-lg flex mb-2 pb-4 max-sm:p-0 max-sm:flex-col">
                <img
                    className="shadow-inner-right rounded-lg h-full w-full max-sm:h-full object-cover grayscale-[10%]"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3" />
                <div className="absolute w-full bottom-0 left-0 max-sm:px-6 max-sm:py-4 py-20 px-10 flex-grow flex flex-col justify-between">
                    <div className="max-sm:flex-col">
                        <h1 className="font-bold text-4xl mb-2">{movie.title}</h1>
                        <ChipList chips={movie.genres} className="absolute top-0 left-0 mt-4 ml-4"/>
                    </div>
                </div>
            </header>
            <section className="max-sm:px-6 max-sm:py-4 py-8 px-10 flex-grow flex flex-col gap-20 w-full">

                <div className="max-sm:flex-col">
                    <h1 className="font-bold text-2xl mb-2">Informations</h1>
                    <ul className="flex flex-row gap-4 max-sm:flex-col">
                        {movie.release_date ? (
                            <li className="flex flex-col gap-1">
                                <span className="text-sm text-gray-500">Sortie</span>
                                <span className="text-lg font-bold">{movie.release_date}</span>
                            </li>
                        ) : null}
                        {movie.runtime ? (
                            <li className="flex flex-col gap-1">
                                <span className="text-sm text-gray-500">Durée</span>
                                <span className="text-lg font-bold">{movie.runtime} min</span>
                            </li>
                        ) : null}
                        {movie.vote_average ? (
                            <li className="flex flex-col gap-1">
                                <span className="text-sm text-gray-500">Note</span>
                                <span className="text-lg font-bold">{movie.vote_average} / 10</span>
                            </li>
                        ) : null}
                    </ul>
                </div>

                {movie.overview ? (
                    <div className="max-sm:flex-col">
                        <h1 className="font-bold text-2xl mb-2">Synopsis</h1>
                        <p className="text-justify">{movie.overview}</p>
                    </div>
                ) : null}
            </section>
        </Layout>
    );
};