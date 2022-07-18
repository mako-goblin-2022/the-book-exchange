import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBook,addimageBook } from '../actions/home'
import styles from '../styles/forms.module.scss'
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
  const [isURL, setURL] = useState('none')

  function handleChange(event) {
    const { name, value } = event.target
    const newForm = {
      ...form,
      [name]: value,
    }
    setForm(newForm)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData()

    if (isURL === 'yes') {
      dispatch(addBook(form))
    } else {
      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, value)
      )
      dispatch(addimageBook(formData))
    }
    navigate('/')
  }
  function handleimagechange(e) {
    setURL(e.target.value)
  }
  function handleiChange(e) {
    const newForm = {
      ...form,
      image: e.target.files[0],
    }
    setForm(newForm)
    console.log(e.target.files[0])
  }

  return (
    <div>
      <h2>Add new Book</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" method="post">
        <label htmlFor="title">
          Title:
          <input
            id="title"
            type="text"
            onChange={handleChange}
            value={form.title}
            name="title"
          />
        </label>
        <label htmlFor="author">
          Author:
          <input
            id="author"
            type="text"
            onChange={handleChange}
            value={form.author}
            name="author"
          />
        </label>
        <label htmlFor="genre">
          Genre:
          <input
            id="genre"
            type="text"
            onChange={handleChange}
            value={form.genre}
            name="genre"
          />
        </label>
        <label htmlFor="publishing_details">
          Publishing Details:
          <input
            id="publishing_details"
            type="text"
            onChange={handleChange}
            value={form.publishing_details}
            name="publishing_details"
          />
        </label>
        <label htmlFor="edition">
          Edition:
          <input
            id="edition"
            type="text"
            onChange={handleChange}
            value={form.edition}
            name="edition"
          />
        </label>
        <label htmlFor="isbn">
          ISBN:
          <input
            id="isbn"
            type="text"
            onChange={handleChange}
            value={form.isbn}
            name="isbn"
          />
        </label>
        <label htmlFor="summary">
          Summary:
          <textarea
            id="summary"
            onChange={handleChange}
            value={form.summary}
            name="summary"
          />
        </label>
        <label htmlFor="condition">
          Condition:
          <input
            id="condition"
            type="text"
            onChange={handleChange}
            value={form.condition}
            name="condition"
          />
        </label>
        <label htmlFor="image">Image </label>
        <div>
          <input
            type={'radio'}
            name="url"
            checked={isURL === 'yes'}
            value="yes"
            onChange={handleimagechange}
          />
          <label htmlFor="url">Image URL</label>

          <input
            type={'radio'}
            name="upload"
            checked={isURL === 'no'}
            value="no"
            onChange={handleimagechange}
          />
          <label htmlFor="upload">Image Upload</label>
          {isURL === 'yes' ? (
            <input
              id="image"
              type="text"
              onChange={handleChange}
              value={form.image}
              name="image"
            />
          ) : (
            <input
              className="primary-button"
              type="file"
              name="image"
              onChange={handleiChange}
            />
          )}
        </div>

        <label htmlFor="rating">
          Rating:
          <input
            id="rating"
            type="text"
            onChange={handleChange}
            value={form.rating}
            name="rating"
          />
        </label>
        <label htmlFor="user_id">
          User Id:
          <input
            id="user_id"
            type="text"
            onChange={handleChange}
            value={form.user_id}
            name="user_id"
          />
        </label>
        <button className={styles.editbutton}>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook
