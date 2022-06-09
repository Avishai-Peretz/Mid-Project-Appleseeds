import React, { useEffect, useState } from 'react'

export default function CounterComponent() {

    const countDownTime = new Date(2022, 8, 12, 16,30).getTime();
    const now = new Date().getTime();
    const diff = countDownTime - now;
    let [days, setDays] = useState(Math.floor(diff / (1000 * 60 * 60 * 24)));
    let [hours,setHours] =  useState(Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    let [minutes, setMinutes] =  useState(Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)));
    let [seconds, setSeconds] =  useState(Math.floor(diff % (1000 * 60) / 1000));
    const countDownFunction = () => {
        setInterval(() => {
            setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
            setHours(Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            setMinutes(Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)));
            setSeconds(Math.floor(diff % (1000 * 60) / 1000));
        }, 1000)
    }

    useEffect(
        () => countDownFunction()
    ,[seconds]);
    
  return (
    <div className="countdown">
                            <ul id="countdown"
                                className="countDown"
                                data-date="Jun 22, 2022 4:00:00 PM UTC">
                                <li className="clock-item">
                                    <span className="count-number days">{days}</span>
                                    <p className="count-text">Days</p>
                                </li>

                                <li className="clock-item">
                                    <span className="count-number hours">{hours}</span>
                                    <p className="count-text">Hours</p>
                                </li>

                                <li className="clock-item">
                                    <span className="count-number minutes">{minutes}</span>
                                    <p className="count-text">Minutes</p>
                                </li>

                                <li className="clock-item">
                                    <span className="count-number seconds">{seconds}</span>
                                    <p className="count-text">Seconds</p>
                                </li>
                            </ul>
                        </div>
  )
}
