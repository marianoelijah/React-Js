import React from 'react'
import { imgPath } from '../helpers/functions-general'

const BoxCollectionItem = ({item, key}) => {
  return (
    <section className='box-collection' key={key}>
        <div className="container">


            <div><img src={`${imgPath}/${item.img}`} alt="" className='rounded-[1.5rem] w-[1800px] relative translate-y-6 h-[400px]'/></div>
            <div className='py-4'>
                <h5 className='mb-2 absolute text-black text-[40px] font-bold'>{item.title}</h5>
            </div>
           
            


        </div>
    </section>
  )
}

export default BoxCollectionItem;
