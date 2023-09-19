import React from 'react'
import { TabsDemo } from './tabs'
const Page = ({ searchParams: { publicId }, }: { searchParams: { publicId: string } }) => {
  return (
    <div>
      <h2 className='text-4xl font-bold'>
        Edit Picture
      </h2>
      <TabsDemo src={publicId} />
    </div>
  )
}

export default Page