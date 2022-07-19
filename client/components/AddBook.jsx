import React, { useState , useEffect } from 'react'
import { useNavigate ,useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addBook,addimageBook } from '../actions/home'
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
  const [isURL, setURL] = useState('yes')

  useEffect(()=>{

      document.getElementById('imageupload').style.display = "none"
  },[])
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
    if (isURL ==='no')
    {
      document.getElementById('imageurl').style.display = "block"
      document.getElementById('imageupload').style.display = "none"
      
      //change imageurl to visibly
    }
    else if (isURL ==='yes')
    {
      //cahnge the other
     
      document.getElementById('imageurl').style.display = "none"
      document.getElementById('imageupload').style.display = "block"
     
    }
  }
  function handleiChange(e) {
    const newForm = {
      ...form,
      image: e.target.files[0],
    }
    setForm(newForm)
   
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
          
            <input
              id="imageurl"
              type="text"
              onChange={handleChange}
              value={form.image||""}
              name="image"
              // {isURL === 'yes' ? ( visibly:true   ) : ()}
            />
       
            <input
            id='imageupload'
              className="primary-button"
              type="file"
              name="image"
              onChange={handleiChange}
            />
          
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
        <button className={styles.editbutton}>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook
