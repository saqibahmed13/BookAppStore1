import React from 'react'
import Card from './Card'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'
function Course() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>
        We're delighted to have you {" "}
        <span className='text-pink-500'>Here!:)</span>
         </h1>
         <p className='mt-12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facilis dolores similique distinctio fugit alias sequi recusandae repudiandae illo, voluptate quae consequuntur doloribus dolore consequatur dicta sed officiis? Maxime pariatur commodi et delectus iste accusamus unde, officia laborum dignissimos incidunt quibusdam quidem voluptas ipsum. Cupiditate vel debitis nostrum blanditiis! Ut quidem nisi consequatur itaque aspernatur, expedita,
          explicabo voluptatem est tenetur reprehenderit vel provident. Quas saepe qui vel modi delectus. Quaerat sit in vitae fugiat iusto, a autem explicabo! Culpa porro dolor ipsum iste veniam nulla itaque temporibus harum? Deleniti consequatur totam odit pariatur deserunt tempora. Blanditiis, minus eos quasi consequuntur nisi architecto aut molestias quisquam? Ullam sed tempore obcaecati et fugit! Aut libero voluptatem hic minima non odio ducimus expedita obcaecati.
          Ex possimus doloremque dicta, repellendus illum necessitatibus dolorum reiciendis voluptatem fugiat. Praesentium minima corporis quaerat explicabo, iure esse voluptatum fuga dolorem molestiae perferendis, vero deleniti eos animi labore nulla delectus ab quo! Repudiandae libero iusto iste provident perspiciatis dolorum aperiam iure accusamus tempore. Tempore, quaerat fuga. Ratione, voluptatum. Aspernatur cumque accusamus?
         </p>
         <Link to='/'>
         <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
         </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {list.map((item)=>{
          return <Card key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default Course
