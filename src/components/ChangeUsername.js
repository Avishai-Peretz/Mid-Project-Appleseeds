import React, { useState } from 'react'

export default function ChangeUsername({ inputValue, setUserData, setInputValue, isUserUpdating, user }) {
    const userName = user.getUsername()
    const submitUsername = (e) => {
        e.preventDefault()
        if (inputValue.trim() !== '' && userName !== inputValue) {
                setInvalid("")
                setUserData({
                username: inputValue
                }).then(() => setInputValue(''))
        } else {
            setInvalid("Invalid username")
        }
    }
   const [invalidUsername, setInvalid] = useState('')


  return (
    <form
        className="column-c-c change-username"
        onSubmit={submitUsername}
    >
        <label className="txt-24">Set new username</label>
        <input placeholder='Change username' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <label className="txt_red bold">{invalidUsername}</label>
        <button className='btn' style={{ margin: '10px' }} type='submit' disabled={isUserUpdating}>Change</button>
    </form>
  )
}


// && user.getUsername() !== inputValue