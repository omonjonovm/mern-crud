import React from 'react'

const Update = () => {
  return (
    <form>
      <h1 className="h3 mb-3 fw-semibold ">Update TravelBook</h1>
      <div className="form-floating">
        <input type="text" className="form-control" id="title" name='title' placeholder='Title' />
        <label htmlFor='description'>Title</label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control mt-2" id="description" name='description' placeholder="Description" />
        <label htmlFor='description'>Description</label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control mt-2" id="image" name='image' placeholder="Image URL" />
        <label htmlFor='image'>Image URL</label>
      </div>
      <button className="btn btn-primary w-100 py-2 mt-2" type="submit">Send</button>
    </form>
  )
}

export default Update