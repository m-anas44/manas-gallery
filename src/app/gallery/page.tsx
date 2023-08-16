import UploadButton from '@/components/uploadButton'
import cloudinary from 'cloudinary'
import ImageCLD from './imagesGallery/image';

type SearchResult = {
  public_id: string,
}

export default async function GalleryPage() {
  const result = await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(1)
    .execute() as { resources: SearchResult[]};
    console.log(result);
  return (
    <section>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-bold'>
            Gallery
          </h1>
          <UploadButton />
        </div>
        <div className='grid grid-cols-4 gap-2'>
          {
            result.resources.map((result) => (
              <ImageCLD
                key={result.public_id}
                src={result.public_id}
                publicID={result.public_id}
                sizes="100vw"
                width="400"
                height="300"
                alt="a cloudinary image"
                className="rounded"
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}