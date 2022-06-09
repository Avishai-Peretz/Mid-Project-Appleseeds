import React, { useState } from 'react';
import { useMoralis } from 'react-moralis'
import Profile from '../../Profile';
import Login from '../../Login';
import MagicGallery from '../../../MagicGallery';
import Header from './Header';

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
            <>
                <Header />
                <Login
                    user={user}
                    selectValue={selectValue}
                    authenticate={authenticate}
                    setSelectValue={setSelectValue}
                    isAuthenticating={isAuthenticating}
                />            
            </>
        )
    }
    return (
        <div className="column-c-c home-page">
            <Header />
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
        </div>
    );
}

export default HomePage;
