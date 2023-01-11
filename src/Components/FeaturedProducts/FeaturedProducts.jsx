import React from 'react'

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            img: '../../asset/HIPS1-scaled.jpeg',
            img2: '../../asset/HIPS1.jpeg',
            title: 'H.I.P.S Hidden in plane site',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 1,
            img: '../../asset/HIPS1-scaled.jpeg',
            img2: '../../asset/HIPS1.jpeg',
            title: 'H.I.P.S Hidden in plane site',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 1,
            img: '../../asset/HIPS1-scaled.jpeg',
            img2: '../../asset/HIPS1.jpeg',
            title: 'H.I.P.S Hidden in plane site',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 1,
            img: '../../asset/HIPS1-scaled.jpeg',
            img2: '../../asset/HIPS1.jpeg',
            title: 'H.I.P.S Hidden in plane site',
            isNew: true,
            oldPrice: 19,
            price: 12
        }
    ]

    console.log(data)
  return (
    <div className=''>
        {/* Top */}
        <div>
            <p>{type} products</p>
            
        </div>
        {/* bottom */}
        <div>

        </div>
    </div>
  )
}

export default FeaturedProducts