'use client';
import Heart from '@/components/heart';
import { CldImage } from 'next-cloudinary';
import React, { useTransition } from 'react'
import { SetAsFavoriteAction } from '../actions';

const ImageCLD = (props: any & { publicID: string }) => {
    const [transition, setTransition] = useTransition()
    return (
        <div className='relative'>
            <CldImage {...props} />
            <Heart
                onClick={() => {
                    setTransition(() => {
                        SetAsFavoriteAction(props.publicID)
                    })
                }}
                className='absolute top-2 right-2 font-bold hover:text-red-600 cursor-pointer bg-white rounded opacity-70 p-1' />
        </div>
    )
}

export default ImageCLD