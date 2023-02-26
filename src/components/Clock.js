import React, { useEffect, useState } from 'react'

export const Clock = () => {
    const [clockState, setclockState] = useState()
  useEffect(()=>{
    setInterval(()=>{
        const date = new Date()
        setclockState(date.toLocaleTimeString())
    }, 1000)
  }, [])

  


  return (
    <div>{clockState}</div>
  )
}
