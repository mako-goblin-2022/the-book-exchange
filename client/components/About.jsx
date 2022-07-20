import React from 'react'
import styles from '../styles/About.module.scss'

export default function About() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.welcome}>
          <p>Welcome to The Book Exchange!</p>
          </div>
        <h3>Getting started</h3>
          <p> The Book Exchange was developed to help users trade books they've already read for books they haven't. To get started, register your email address with The Book Exchange and create a profile. You can manage your book listings and check your book token balance from your profile. 
          </p>
        <h3>Listing books</h3>
          <p>
          You’ll need to be logged in to The Book Exchange to list a book. Navigate to your profile and click 'Add New Book'. Complete the form with the details of your book, upload an image and click 'Add Book'. Your book listing will then be displayed on your profile, and visible to other traders using the platform.  
          </p>
        <h3>Trading books</h3>
          <p>
          When you register with The Book Exchange you’ll receive a book token to get started. To use your book token, navigate to the listing page of your chosen book and click 'Request Book'. Contact the trader on the email address they’ve provided to arrange collection of the book and complete the trade. 
          </p>
          <p>
          To increase your book token balance, list a book you'd like to share with another trader. You’ll receive an additional book token when you’ve completed the trade. 
          </p>
        <h3>Contact</h3>
          <p>
          If you have any questions, or would like to suggest some improvements for The Book Exchange, please email hello@thebookexchange.co.nz.
          </p>
        <h3>Product team</h3>
          <p>
          The Book Exchange is brought to you by Daniela, Jillian, Kate, Mandy, Tim and Victoria. 
          </p>
        </div>
    </>
  )
}
