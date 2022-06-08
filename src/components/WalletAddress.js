import React from 'react'

export default function WalletAddress({user, selectValue}) {
  return (
    <p>
          <b>{selectValue} wallet address:</b> {user.get(`${selectValue}Address`)}
    </p>
  )
}
