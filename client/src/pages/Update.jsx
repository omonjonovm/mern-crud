import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Update = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/book/${id}`)
      if (data && data.book) {
        setTitle(data.book.title)
        setDescription(data.book.description)
        setImage(data.book.image)
      } else {
        console.error('Invalid response structure', data)
      }
    } catch (error) {
      console.error('Error fetching data', error)
    }
  }

  const updateHandler = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:5000/api/book/${id}`, {
      title,
      description,
      image
    })

    navigate('/ ')
  } 

  useEffect(() => {
    fetchData()
  }, [id])

  return (
    <form onSubmit={updateHandler}>
      <h1 className="h3 mb-3 fw-semibold">Update TravelBook</h1>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control mt-2"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <label htmlFor="description">Description</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control mt-2"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
        <label htmlFor="image">Image URL</label>
      </div>
      <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
        Send
      </button>
    </form>
  )
}

export default Update
