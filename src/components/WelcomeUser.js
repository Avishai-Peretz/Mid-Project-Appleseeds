import React from 'react'

export default function WelcomeUser({user}) {

  return (
    <h1 className="txt-40">
      Welcome dear "{user.getUsername()}"
    </h1>
  )
}
