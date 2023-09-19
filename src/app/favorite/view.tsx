'use client';
import { CldImage } from "next-cloudinary"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { AddTags } from "../gallery/actions";
import { useState } from "react";
const View = ({ src, tag, fun }: { src: string, tag: string[], fun?: any }) => {
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
                    fun(src);
                    setFav(!fav);
                    AddTags(src, fav);
                }}>
                {
                    fav ? (<AiFillHeart className="text-4xl bg-white 
                    bg-opacity-75 rounded p-1 text-red-500 cursor-pointer"/>) :
                        (<AiOutlineHeart className="text-4xl bg-white 
                    bg-opacity-75 rounded  p-1 hover:text-red-500 text-black cursor-pointer"/>)
                }
            </div>
            
        </div>
    )
}

export default View