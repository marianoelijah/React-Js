import React from 'react'
import BoxCollectionItem from './BoxCollectionItem'

const BoxCollection = () => {
    const boxCollectionArray = [
        {
            img: "card-7.png",
            title: "MAN",
        },
        {
            img: "card-8.png",
            title: "WOMAN",
        },
        {
            img: "card-9.png",
            title: "KIDS",
        },
    ]

  return (
    <div>
        <div className="container">
            <div className='text-center py-5'>
                <h3 className='uppercase mb-4'>box collection</h3>
                <p className='opacity-40'>Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>
            </div>
            <div className='grid grid-cols-3 gap-2'>            
                {boxCollectionArray.map((item, key)=>(

            <BoxCollectionItem item={item} key={key}/>

            ))}
            </div>

        </div>
    </div>
  )
}

export default BoxCollection;
