import React, {useEffect} from 'react'
import ChangeUsername from './ChangeUsername';
import CostumeProfile from './CostumeProfile'
import WalletAddress from './WalletAddress';
import WelcomeUser from './WelcomeUser';

export default function Profile({
  user,
  inputValue,
  setUserData,
  setInputValue,
  isUserUpdating,
  isLoggingOut,
  logout,
  selectValue
}) {
  useEffect(() => {
    localStorage.setItem('wallet-type', JSON.stringify(selectValue))
  });
  const handleLogout = () => {
    localStorage.removeItem('wallet-type')
    logout();
  }
  return (
    <CostumeProfile>
        <div style={{ height: '40vh', margin: '10px' }} className="column-se-c">
          <WelcomeUser user={user} />
          <WalletAddress user={user} selectValue={selectValue} />
          <ChangeUsername inputValue={inputValue} setUserData={setUserData} setInputValue={setInputValue} isUserUpdating={isUserUpdating} user={user} />
          <button className='btn' onClick={handleLogout} disabled={isLoggingOut}>Logout</button>
        </div>
      </CostumeProfile>
  )
}
