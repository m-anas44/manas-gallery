import cloudinary from 'cloudinary'
import FavoriteList from './favoriteList';
export interface SearchResult {
  public_id: string;
  tags: string[];
}

export default async function GalleryPage() {
  const result = (
    await cloudinary.v2.search
      .expression('resource_type:image AND tags=favorite')
      .sort_by('public_id', 'desc')
      // .max_results(7)
      .with_field("tags")
      .execute()
  ) as { resources: SearchResult[] }
  return (
    <section>
      <div className='flex flex-col gap-8'>
        <div>
          <h2 className='text-4xl font-bold'>
            Favorites
          </h2>
        </div>
        <FavoriteList resources={result.resources}/>
      </div>
    </section>
  )
}