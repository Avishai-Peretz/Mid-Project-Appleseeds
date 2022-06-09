import React, { useEffect, useState } from "react";
import axios from 'axios'

const MagicGallery = () => {
  
  const [data, setData] = useState([])
  const [offSet, setOffSet] = useState(0)
  
  useEffect(() => {
    (async () => {
      if(offSet < 17){
        await axios.get(`https://api.allorigins.win/raw?url=https://api-mainnet.magiceden.dev/v2/collections/justape/listings?offset=0&limit=18`)
        .then(response => {
          setData([...response.data])
          setOffSet(offSet + 17)
      })
      .catch(function (error) {
        console.log(error);
      });
      }
    })()
  },[offSet, data])
  
  return (
    <div className="magic-gallery" > 
      {data.map(({ tokenAddress, extra, price, tokenMint }, index) => {
        const img = extra.img;
        const arr = img.split('/');
        arr[arr.length - 1].split('.')
        const nftNum = arr[arr.length - 1].split('.')[0]
        return (
          <a href={`https://magiceden.io/item-details/${tokenMint}`} key={tokenAddress} id={`gal-img-${index + 1}`} className="nft-card">
            <img src={extra.img} alt="Nft" id={`gal-img-${index + 1}`} className="gallery-img"></img> 
            <div>
              <span className="txt_white" >Ape #{nftNum}</span>
            </div>
            <div>
              <span className="txt_red bold">Just Ape</span>
            </div>
             <div>
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.80286 13.8188C3.90696 13.7147 4.0501 13.6539 4.20191 13.6539H17.9689C18.2205 13.6539 18.3463 13.9576 18.1685 14.1354L15.4489 16.855C15.3448 16.9591 15.2017 17.0198 15.0498 17.0198H1.28281C1.03124 17.0198 0.905451 16.7162 1.08329 16.5383L3.80286 13.8188Z" fill="url(#paint0_linear_354_8099)">
                </path>
                <path d="M3.80286 3.66482C3.9113 3.56072 4.05443 3.5 4.2019 3.5H17.9689C18.2205 3.5 18.3463 3.80362 18.1685 3.98146L15.4489 6.70103C15.3448 6.80513 15.2017 6.86585 15.0498 6.86585H1.28281C1.03124 6.86585 0.905451 6.56223 1.08329 6.3844L3.80286 3.66482Z" fill="url(#paint1_linear_354_8099)"></path>
                <path d="M15.4489 8.70938C15.3448 8.60528 15.2017 8.54456 15.0498 8.54456H1.28281C1.03124 8.54456 0.905451 8.84818 1.08329 9.02601L3.80286 11.7456C3.90696 11.8497 4.0501 11.9104 4.20191 11.9104H17.9689C18.2205 11.9104 18.3463 11.6068 18.1685 11.429L15.4489 8.70938Z" fill="url(#paint2_linear_354_8099)"></path>
                <defs>
                  <linearGradient id="paint0_linear_354_8099" x1="16.6538" y1="1.87538" x2="7.1259" y2="20.1251" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00FFA3"></stop>
                    <stop offset="1" stopColor="#DC1FFF"></stop>
                  </linearGradient>
                  <linearGradient id="paint1_linear_354_8099" x1="12.4877" y1="-0.299659" x2="2.95979" y2="17.9501" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00FFA3"></stop>
                    <stop offset="1" stopColor="#DC1FFF"></stop>
                  </linearGradient>
                  <linearGradient id="paint2_linear_354_8099" x1="14.5575" y1="0.78106" x2="5.02959" y2="19.0308" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00FFA3"></stop>
                    <stop offset="1" stopColor="#DC1FFF"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <span className="txt-14 bold txt_white">{price}</span>
            </div>    
          </a>
        )
      })}
    </div>
  )
}

export default MagicGallery;
