"use client";
import { useState } from 'react';
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';

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
      <CldUploadButton
        onUpload={(result: any) => setImageId(result.info.public_id)}
        uploadPreset="g7hq9orw" />
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
<h1>This</h1>
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
      }
    </div>
  )
}
