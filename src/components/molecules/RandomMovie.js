"use client";
import {AiFillThunderbolt} from "react-icons/ai";
import Button from "@/components/atoms/Button";
import {useEffect, useState} from "react";
import Modal from "@/components/organismes/Modal";
import MoviePreview from "@/components/organismes/MoviePreview";
import {randomMovieAction} from "@/serverActions/RandomMovieAction";

export default function RandomMovie () {
    let [randomMovie, setRandomMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <section className="w-full my-24 flex flex-col items-center relative">
                <div className="w-2/6 absolute h-40">
                    <div style={{boxShadow: 'rgb(99, 179, 237) 0px 0px 80px 50px'}}
                         className="z-0 absolute top-1/4 left-3/4 rounded-full"></div>
                    <div style={{boxShadow: 'rgb(99, 179, 237) 0px 0px 100px 80px'}}
                         className="z-0 absolute top-3/4 right-3/4 rounded-full"></div>
                </div>
                <div className="flex flex-col items-center gap-3 my-8 mx-4 z-10">
                    <h2 className="text-2xl font-medium mt-4 ml-6 text-center">Pas d'inspiration ?</h2>
                    <p className="text-lg text-center">
                        On a pensé à vous, voici un films que vous pourriez aimer
                    </p>
                </div>
                <form
                    action={
                        async () => {
                            randomMovie = await randomMovieAction();
                            setRandomMovie(randomMovie);
                            openModal();
                        }
                    }
                    className="flex flex-col items-center gap-3 my-8 mx-4 z-10"
                >
                    <Button
                        type="submit"
                        title="Contenu aléatoire"
                        icon={<AiFillThunderbolt/>}
                        hasBackground
                        className={'z-10'}/>
                </form>
            </section>

            {showModal && (
                <Modal onClose={closeModal}>
                    <MoviePreview backdrop_path={randomMovie.backdrop_path} id={randomMovie.id} title={randomMovie.title} />
                </Modal>
            )}
        </>
    );
}