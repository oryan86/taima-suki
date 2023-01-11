import React from 'react'
import Card from '../Card/Card'
import hips1 from '../../asset/HIPS1-scaled.jpeg'
import hips2 from '../../asset/HIPS1.jpeg'

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            img: hips1,
            img2: hips2,
            title: 'H.I.P.S Hidden in plane site',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: hips1,
            img2: hips2,
            title: 'H.I.P.S Hidden in plane site',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: hips1,
            img2: hips2,
            title: 'H.I.P.S Hidden in plane site',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: hips1,
            img2: hips2,
            title: 'H.I.P.S Hidden in plane site',
            isNew: true,
            oldPrice: 19,
            price: 12
        }
    ]

  return (
    <div className=' my-24 mx-48 '>
        {/* Top */}
        <div className='flex items-center justify-between mb-12'>
            <p className='font-bold text-lg capitalize'>{type} products</p>
        </div>
        {/* bottom */}
        <div className='flex justify-center gap-12 flex-wrap'>
            {data.map(item => {
                return <Card item={item} key={item.id}/>
            }
            )}
        </div>
    </div>
  )
}

export default FeaturedProducts