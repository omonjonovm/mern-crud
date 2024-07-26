import React from 'react'

const Home = () => {
  return (
    <div className='card mb-3'>
      <div className='card h-100 shadow-sm '>
        <img src="https://i.pinimg.com/564x/11/da/e7/11dae7dfbdd3124a14fde9b8e36eddc1.jpg" alt="" />
        <div className="card-body">
          <h5 className='card-title'>Card Title</h5>
           <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text "><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  )
}

export default Home