import React, { useState } from 'react';
import { useMoralis } from 'react-moralis'
import Profile from '../../Profile';
import Login from '../../Login';
import MagicGallery from '../../../MagicGallery';

const HomePage = () => {
    const {
        isAuthenticated,
        authenticate,
        user,
        logout,
        isLoggingOut,
        setUserData,
        isAuthenticating,
        isUserUpdating,
    } = useMoralis()
       
    const localWallet = JSON.parse(localStorage.getItem('wallet-type'));

    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState(localWallet ||'eth')

    if (!isAuthenticated) {
        return (
            <Login
                user={user}
                selectValue={selectValue}
                authenticate={authenticate}
                setSelectValue={setSelectValue}
                isAuthenticating={isAuthenticating}
            />            
        )
    }
    return (
        <>
            <Profile
                user={user}
                inputValue={inputValue}
                setUserData={setUserData}
                setInputValue={setInputValue}
                isUserUpdating={isUserUpdating}
                isLoggingOut={isLoggingOut}
                logout={logout}
                selectValue={selectValue}
            /> 
            <MagicGallery />
        </>
    );
}

export default HomePage;
