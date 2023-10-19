import React from 'react'
import not from './notfound.module.css'
import notFound from './notFound.png'

function NotFound() {
  return (
    <div>
      <div>
        <img src={notFound} alt="Error" />
      </div>
    </div>
  )
}

export default NotFound