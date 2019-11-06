import React from 'react'
import './index.css'

const Profile = (props) => {
  return (
    <div className = "profile">
      <h1>Hello {props.match.params.id}!</h1>
    </div>
  )
}
  
export default Profile;