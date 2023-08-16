"use server";
import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export async function SetAsFavoriteAction(publicID:string) {
   await cloudinary.v2.uploader.add_tag("favorite", [publicID])
   revalidatePath('/gallery');
}