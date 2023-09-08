import cloudinary from 'cloudinary'
import View from '../gallery/view';
interface SearchResult {
  public_id: string;
  tags: string[];
}

export default async function GalleryPage() {
  const result = (
    await cloudinary.v2.search
      .expression('resource_type:image AND tags=favorite')
      .sort_by('public_id', 'desc')
      .max_results(7)
      .with_field("tags")
      .execute()
  ) as { resources: SearchResult[] }
  return (
    <section>
      <div className='flex flex-col gap-8'>
        <div className='flex justify-between items-center'>
          <h2 className='text-4xl font-bold'>
            Favorites
          </h2>
        </div>
        <div className='columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4 mx-auto'>
          {
            result.resources.map((item, index) => {
              return <div key={index} className='break-inside-avoid'>
                <View src={item.public_id} tag={item.tags} />
              </div>
            })
          }
        </div>
      </div>
    </section>
  )
}