"use client";
import { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';


export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <div>
      <CldUploadButton
        onUpload={(result: any) => setImageId(result.info.public_id)}
        uploadPreset="g7hq9orw" />

      {imageId && (
        <CldImage
          width="960"
          height="600"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )
      }
    </div>
  )
}
