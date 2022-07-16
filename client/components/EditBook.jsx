import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { saveBook , fetchBook} from '../actions/bookView'
import {useParams, useNavigate } from 'react-router-dom'

export default function EditBook() {

  const book = useSelector(state => state.book)
  const [editedBook, seteditedBook] = useState({})
  const {id} = useParams()
  const dispatch = useDispatch()
 
  
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
    console.log({[e.target.name]: e.target.value})
  }

function handleSubmit(e){
  e.preventDefault()
  dispatch(saveBook(editedBook, id))
  alert('Your update has been saved!')
}

  return (

    <div>
      <h2>Edit the book below</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title
          <input id='title' name='title' type='text' defaultValue={book.title} onChange={handleChange}></input>
        </label>
        <br></br>
        <label htmlFor='author'>Author
          <input id='author' name='author' type='text' defaultValue={book.author} onChange={handleChange}></input>
        </label>
        <br></br>
        <label htmlFor='genre'>Genre
          <input id='genre' name='genre' type='text' defaultValue={book.genre} onChange={handleChange}></input>
        </label>
        <br></br>
        <label htmlFor='publishingDetails'>Publishing Details
          <input id='publishingDetails' name='publishingDetails' type='text' defaultValue={book.publishingDetails} onChange={handleChange}></input>
        </label>
        <br></br>
        <label htmlFor='edition'>Edition
          <input id='edition' name='edition' type='text' defaultValue={book.edition} onChange={handleChange}></input>
        </label>
        <br></br>
        <label htmlFor='isbn'>ISBN
          <input id='isbn' name='isbn' type='text' defaultValue={book.isbn} onChange={handleChange}></input>
        </label>
        <br></br>
        <label htmlFor='summary'>Summary
          <textarea id='summary' rows={10} cols={50} name='summary' type='text' defaultValue={book.summary} onChange={handleChange}></textarea>
        </label>
        <br></br>
        <label htmlFor='condition'>Condition
          <input id='condition' name='condition' type='text' defaultValue={book.condition} onChange={handleChange}></input>
        </label>
        <br></br>
        <label htmlFor='image'>Image URL
          <input id='image' name='image' type='text' defaultValue={book.image} onChange={handleChange}></input>
        </label>
        <br></br>
        <label htmlFor='rating'>Rating
          <input id='rating' name='rating' type='text' defaultValue={book.rating} onChange={handleChange}></input>
        </label>
        <button type='submit'>Save changes</button>
      </form>
    </div>
  )
}
