import React from 'react';
import Button from "@/components/atoms/Button";
import {AiOutlineExport} from "react-icons/ai";
import Image from "next/image";

const MoviePreview = ({ backdrop_path, title, id }) => {
    return (
        <div className="max-w-6xl w-full rounded overflow-hidden shadow-lg">
            <Image
                className="w-full max-w-full rounded overflow-hidden"
                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                alt={title}
                width={1000}
                height={1000}
            />
            <div className="px-6 py-4 w-full">
                <div className="font-bold text-xl mb-2">{title}</div>
                <div className="my-8">
                    <Button
                        title="Voir plus"
                        href={`/movie/${id}`}
                        className={'max-sm:!w-full !bg-blue-400 hover:!bg-blue-500'}
                        icon={<AiOutlineExport />}
                    />
                </div>
            </div>
        </div>
    );
};

export default MoviePreview;