
import React, {useState} from 'react'

import { Link, useNavigate } from 'react-router-dom'

import {useDispatch} from 'react-redux'

import {addBook} from '../actions/home'

const initialFormData = {
  title: '',
  author: '',
  genre: '',
  publishing_details: '',
  edition: '',
  isbn: '',
  summary: '',
  condition: '',
  image: '',
  user_id: '',
  status: 'active',
  rating: '',

}

const AddBook = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [form, setForm] = useState(initialFormData)

  function handleChange (event) {
    const { name, value } = event.target
    const newForm = {
      ...form,
      [name]: value
    }
    setForm(newForm)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(addBook(form))
    navigate('/')
    
  }

 
  return (
    <>

      <h2>Add new Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            onChange={handleChange}
            value={form.title}
            name="title"
          />
        </label>
        <label htmlFor="author">
          Author:
          <input
            id="author"
            onChange={handleChange}
            value={form.author}
            name="author"
          />
        </label>
        <label htmlFor="genre">
          Genre:
          <input
            id="genre"
            onChange={handleChange}
            value={form.genre}
            name="genre"
          />
        </label>
        <label htmlFor="publishing_details">
          Publishing Details:
          <input
            id="publishing_details"
            onChange={handleChange}
            value={form.publishing_details}
            name="publishing_details"
          />
        </label>
        <label htmlFor="edition" >
          Edition:
          <input
            id="edition"
            onChange={handleChange}
            value={form.edition}
            name="edition"
          />
        </label>
        <label htmlFor="isbn">
          ISBN:
          <input
            id="isbn"
            onChange={handleChange}
            value={form.isbn}
            name="isbn"
          />
        </label>
        <label htmlFor="summary" >
          Summary:
          <textarea
            id="summary"
            onChange={handleChange}
            value={form.summary}
            name="summary"
          />
        </label>
        <label htmlFor="condition" >
          Condition:
          <input
            id="condition"
            onChange={handleChange}
            value={form.condition}
            name="condition"
          />
        </label>
        <label htmlFor="image" >
          Image:
          <input
            id="image"
            onChange={handleChange}
            value={form.image}
            name="image"
          />
          <input type='file'/>
        </label>
        <label htmlFor="rating" >
          Rating:
          <input
            id="rating"
            onChange={handleChange}
            value={form.rating}
            name="rating"
          />
        </label>
        <label htmlFor="user_id" >
          User Id:
          <input
            id="user_id"
            onChange={handleChange}
            value={form.user_id}
            name="user_id"
          />
        </label>
        <button>Add Book</button>
      </form>

    </>
  )
}

export default AddBook

