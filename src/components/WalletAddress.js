import React from 'react'

export default function WalletAddress({user, selectValue}) {
  return (
    <p className="txt-17">
          <b>{selectValue} wallet address:</b> {user.get(`${selectValue}Address`)}
    </p>
  )
}
