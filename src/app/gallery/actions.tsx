"use server";
import cloudinary from 'cloudinary'
import { revalidatePath } from 'next/cache';
export async function AddTags(publicId:string, fav:boolean) {
    if(fav) {
        await cloudinary.v2.uploader.remove_tag("favorite", [publicId])
    }
    else{
        await cloudinary.v2.uploader.add_tag("favorite", [publicId])
    }

    await new Promise((resolve)=>{
        setTimeout(resolve), 1000;
    })
    revalidatePath("/gallery");
}