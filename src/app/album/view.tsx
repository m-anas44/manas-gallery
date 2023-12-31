'use client';
import { CldImage } from "next-cloudinary"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { BiEdit, BiSolidImageAdd } from "react-icons/bi"
import { AddTags } from "./actions";
import { useState } from "react";
import Link from "next/link";
const View = ({ src, tag }: { src: string, tag: string[] }) => {
    const [fav, setFav] = useState(tag.includes("favorite"))
    return (
        <div className="relative">
            <CldImage
                className="rounded"
                width="400"
                height="300"
                src={src}
                sizes="100vw"
                alt="Description of my image"
            />
            <div className="absolute top-1 right-1"
                onClick={() => {
                    setFav(!fav);
                    AddTags(src, fav);
                }}>
                {
                    fav ? (<AiFillHeart className="text-3xl bg-white 
                    bg-opacity-75 rounded p-1 text-red-500 cursor-pointer"/>) :
                        (<AiOutlineHeart className="text-3xl bg-white 
                    bg-opacity-75 rounded  p-1 hover:text-red-500 text-black cursor-pointer"/>)
                }

            </div>
            <div className="absolute top-1 left-1">
                <Link href={`/edit?publicId=${src}`}>
                    <BiEdit className="text-3xl bg-white 
                    bg-opacity-75 rounded p-1  cursor-pointer"/>
                </Link>
            </div>
        </div>
    )
}

export default View