import React from 'react'
import cloudinary from 'cloudinary'
import AlbumList from './albumList';

export interface folderType {
    name: string,
    path: string,
}
export default async function Page() {
    const { folders } = (await cloudinary.v2.api.root_folders()) as {
        folders: folderType[];
    }
    return (
        <div>
            <div>
                <h2 className='text-4xl font-bold'>
                    Albums
                </h2>
            </div>
            {/* folders data */}
            <div className="py-4 grid grid-cols-3 gap-2">
                {
                    folders.map((item, i) => {
                        return (
                            <div key={i}>
                                <AlbumList folders={item} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}