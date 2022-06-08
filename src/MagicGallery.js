import React, { useEffect, useState } from "react";
import axios from 'axios'

const MagicGallery = () => {
  
  const [data, setData] = useState([])
  const [offSet, setOffSet] = useState(0)
  
  useEffect(() => {
    (async ()=>{
      if(offSet < 40){
        await axios.get(`https://api-mainnet.magiceden.dev/v2/collections/justape/listings?offset=${offSet}&limit=20`)
        .then(response => {
          setData([...data, ...response.data])
          setOffSet(offSet + 20)
      })
      .catch(function (error) {
        console.log(error);
      });
      }
    })()
  },[offSet, data])

  
  return (
    <>
    {data.map(({pdaAddress, extra}) => {
      return (
        <React.Fragment key={pdaAddress}> 
        <img src={extra.img} alt="" style={{width: "25px" , height: "25px"}}></img>
        </React.Fragment>
      )
    })}
    </>
  )
}

export default MagicGallery;
