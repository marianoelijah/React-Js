import React from 'react'
import { imgPath } from '../helpers/functions-general'

const BoxCollectionItem = ({item, key}) => {
  return (
    <section className='box-collection' key={key}>
        <div className="container">


            <div><img src={`${imgPath}/${item.img}`} alt="" className='rounded-[1.5rem] w-[1800px] relative translate-y-10 -translate-x-2 h-[500px]'/></div>
            <div className='py-4 absolute'>
                <h5 className='mb-2 text-white text-[40px] font-bold absolute -translate-y-24 translate-x-2'>{item.title}</h5>
                <button className='text-sm rounded-full bg-white font-bold text-black py-1 px-4 -translate-y-7'>See Details</button>
            </div>
           
            


        </div>
    </section>
  )
}

export default BoxCollectionItem;
