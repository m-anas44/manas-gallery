'use client';
import React, { useEffect, useState } from 'react'
import View from './view'
import { SearchResult } from './page'

const FavoriteList = ({ resources }: { resources: SearchResult[] }) => {
  const [initalState, setInitialState] = useState(resources);
  useEffect(()=>{
    setInitialState(resources)
  }, [resources])
  return (
    <div className='columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4 mx-auto'>
      {
        initalState.map((item, index) => {
          return <div key={index} className='break-inside-avoid'>
            <View src={item.public_id} tag={item.tags} 
            fun={(publicId: any) => {
                setInitialState((current) =>
                  current.filter((val) =>val.public_id !== publicId))
              }} />
          </div>
        })
      }
    </div>
  )
}

export default FavoriteList