import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
  const [travelBook, setTravelBook] = useState([])
  const [id,setId] = useState('')

  const fetchData = async () => {
    const { data } = await axios.get('http://localhost:5000/api/book/')
    setTravelBook(data.books)
  }

  const deleteHandler = async (e) => {
   e.preventDefault()
   await axios.delete(`http://localhost:5000/api/book/${id}`)
   fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      {travelBook.map(tb => (
        <div key={tb._id} className='card mb-3'>
          <div className='card h-100 shadow-sm '>
            <img src={tb.image} alt="image" />
            <div className="card-body">
              <h5 className='card-title'>{tb.title}</h5>
              <p className='card-text'>{tb.description}</p>
              <div className='d-flex  justify-content-end'>
                <Link className='btn btn-primary' to={`/update/${tb._id}`}>Update</Link>
                <form onSubmit={deleteHandler}>
                  <button className='btn btn-danger mx-2' onClick={() => setId(tb._id)} type='submit'>Delete</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home