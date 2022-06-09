import React, { createRef } from 'react';

export default function Login({
    selectValue,
    authenticate,
    setSelectValue,
    isAuthenticating,
}) {
    
    const selectRef = createRef();
    const handleSelectChange = (e) => {
        setSelectValue(e.target.value)

    }
    return (
        <div className="login" >
            <select className='login-select' ref={selectRef} defaultValue={selectValue} onChange={handleSelectChange}>
                <option value="eth" >Metamask</option>
                <option value="sol">Phantom</option>
            </select>
            <button className='login-btn btn' onClick={() => {
                authenticate({
                    type: selectValue,
                    signingMessage: "PlutoPigs © 2022 is asking you to Authenticate your account"                
                })
                
            }}
                disabled={isAuthenticating}>Login</button>
        </div>
  )
}
