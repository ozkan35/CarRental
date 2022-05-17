
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./bookbar.css"

const BookBar = () => {
  return (
    <div className="bookbar">
        <h3>Explore our cars and book now</h3>
        <div>
        <Button variant="secondary" as={Link} to="/vehicles">BOOK NOW</Button></div>

    </div>
  )
}

export default BookBar