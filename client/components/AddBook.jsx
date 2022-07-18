import React, {useState} from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addBook} from '../actions/home'
import styles from '../styles/forms.module.scss'






const AddBook = () => {


  const params = useParams()
  const id = params.id

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
    user_id: id,
    status: 'active',
    rating: '',
  
  }

 
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
    <div>

      <h2>Add new Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            id="title"
            type='text'
            onChange={handleChange}
            value={form.title}
            name="title"
          />
        </label>
        <label htmlFor="author">
          Author:
          <input
            id="author"
            type='text'
            onChange={handleChange}
            value={form.author}
            name="author"
          />
        </label>
        <label htmlFor="genre">
          Genre:
          <input
            id="genre"
            type='text'
            onChange={handleChange}
            value={form.genre}
            name="genre"
          />
        </label>
        <label htmlFor="publishing_details">
          Publishing Details:
          <input
            id="publishing_details"
            type='text'
            onChange={handleChange}
            value={form.publishing_details}
            name="publishing_details"
          />
        </label>
        <label htmlFor="edition" >
          Edition:
          <input
            id="edition"
            type='text'
            onChange={handleChange}
            value={form.edition}
            name="edition"
          />
        </label>
        <label htmlFor="isbn">
          ISBN:
          <input
            id="isbn"
            type='text'
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
            type='text'
            onChange={handleChange}
            value={form.condition}
            name="condition"
          />
        </label>
        <label htmlFor="image" >
          Image:
          <input
            id="image"
            type='text'
            onChange={handleChange}
            value={form.image}
            name="image"
          />
        </label>
        <label htmlFor="rating" >
          Rating:
          <input
            id="rating"
            type='text'
            onChange={handleChange}
            value={form.rating}
            name="rating"
          />
        </label>
        <button className={styles.editbutton}>Add Book</button>
      </form>

    </div>
  )
}

export default AddBook

