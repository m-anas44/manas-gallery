"use client";
import { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import image from "/public/image.jpg"
import Image from 'next/image';

interface UploadImage {
  event: "success";
  info: {
    public_id: string;
  }
}

export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <div>
      <Image src={image} alt="image" className='min-w-full'/>
      {/* <CldUploadButton
        onUpload={(result: any) => setImageId(result.info.public_id)}
        uploadPreset="g7hq9orw" />

      {
        imageId && (
          <CldImage
            width="400"
            height="300"
            src={imageId}
            sizes="100vw"
            alt="Description of my image"
          />
        )
      } */}
    </div>
  )
}
