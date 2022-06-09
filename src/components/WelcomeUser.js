import React from 'react'

export default function WelcomeUser({user, styleName, handleLogout, isLoggingOut}) {

  return (
    <div className={styleName}>
      <span className='txt-24'>Welcome dear " {user.getUsername()} " </span><button className='btn logout-btn' onClick={handleLogout} disabled={isLoggingOut}>Logout</button>
    </div>
  )
}
