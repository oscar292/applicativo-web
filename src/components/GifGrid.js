import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGift'
import {GiftGridItem} from './GiftGridItem'

export const GifGrid = ({category}) => {
    const { data, loading } = useFetchGifts(category);
    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                {
                    data.map(img=>[
                        <GiftGridItem 
                            key={img.id}
                            {...img}
                        />
                    ])
                }
            </div>
        </>
    )
}