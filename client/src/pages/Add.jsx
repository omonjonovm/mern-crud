import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Add = () => {
   const [title,setTitle] = useState('')
   const [description,setDescription] = useState('')
   const [image,setImage] = useState('')
   const navigate = useNavigate()
   const handleSubmit = async (e) => {
   e.preventDefault()
   await axios.post("http://localhost:5000/api/book/add" , {
    title,
    description,
    image
   })
   navigate('/')
   }

  return (
    <form onSubmit={handleSubmit}>
    <h1 className="h3 mb-3 fw-semibold ">Add</h1>
    <div className="form-floating">
      <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} id="title" name='title' placeholder='Title' />
      <label htmlFor='description'>Title</label>
    </div>
    <div className="form-floating">
      <input type="text" className="form-control mt-2" onChange={e => setDescription(e.target.value)} id="description" name='description' placeholder="Description" />
      <label htmlFor='description'>Description</label>
    </div>
    <div className="form-floating">
      <input type="text" className="form-control mt-2" onChange={e => setImage(e.target.value)} id="image"  name='image' placeholder="Image URL" />
      <label htmlFor='image'>Image URL</label>
    </div>
    <button className="btn btn-primary w-100 py-2 mt-2" type="submit">Send</button>
  </form>
  )
}

export default Add