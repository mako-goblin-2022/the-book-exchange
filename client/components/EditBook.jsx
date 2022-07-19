import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { saveBook , fetchBook} from '../actions/bookView'
import {useParams, useNavigate } from 'react-router-dom'
import styles from '../styles/forms.module.scss'
export default function EditBook() {

  const book = useSelector(state => state.book)
  const [editedBook, seteditedBook] = useState({})
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate =  useNavigate()
 
  
  useEffect(() => {
    dispatch(fetchBook(id))
    seteditedBook(book)
    console.log(book)
  },[])

  function handleChange(e){
    seteditedBook({
      ...editedBook,
      [e.target.name]: e.target.value,
    })
  }

function handleSubmit(e){
  e.preventDefault()
  dispatch(saveBook(editedBook, id))
  alert('Your update has been saved!')
  navigate('/books/'+id)
}
function handleiChange(){
  //
}
  return (

    <div>
      <h2>Edit the book below</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title </label>
          <input id='title' name='title' type='text' defaultValue={book.title} onChange={handleChange}></input>
       
        <br></br>
        <label htmlFor='author'>Author  </label>
          <input id='author' name='author' type='text' defaultValue={book.author} onChange={handleChange}></input>
      
        <br></br>
        <label htmlFor='genre'>Genre  </label>
          <input id='genre' name='genre' type='text' defaultValue={book.genre} onChange={handleChange}></input>
      
        <br></br>
        <label htmlFor='publishingDetails'>Publishing Details</label>
          <input id='publishingDetails' name='publishingDetails' type='text' defaultValue={book.publishingDetails} onChange={handleChange}></input>
        
        <br></br>
        <label htmlFor='edition'>Edition </label>
          <input id='edition' name='edition' type='text' defaultValue={book.edition} onChange={handleChange}></input>
       
        <br></br>
        <label htmlFor='isbn'>ISBN</label>
          <input id='isbn' name='isbn' type='text' defaultValue={book.isbn} onChange={handleChange}></input>
        
        <br></br>
        <label htmlFor='summary'>Summary</label>
          <textarea id='summary' rows={10} cols={50} name='summary' type='text' defaultValue={book.summary} onChange={handleChange}></textarea>
        
        <br></br>
        <label htmlFor='condition'>Condition </label>
          <input id='condition' name='condition' type='text' defaultValue={book.condition} onChange={handleChange}></input>
       
        <br></br>
        <label htmlFor='image'>Image URL</label>
          <input id='image' name='image' type='text' defaultValue={book.image} onChange={handleChange}></input>
         Or Replace Image Upload: <input
            id='imageupload'
              className="primary-button"
              type="file"
              name="image"
              onChange={handleiChange}
            />
        <br></br>
        <label htmlFor='rating'>Rating</label>
          <input id='rating' name='rating' type='text' defaultValue={book.rating} onChange={handleChange}></input>
    

        <button type='submit' className={styles.editbutton}>Save changes</button>
  
      </form>
    </div>
  )
}
