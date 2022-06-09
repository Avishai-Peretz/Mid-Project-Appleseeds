
import React, { useEffect, useState } from 'react';



export function CounterComponent() {

    const countDownTime = new Date(2022, 8, 12, 16,30,).getTime() ;
    const now = new Date().getTime();
    const diff = countDownTime - now;
    let [count, setCount] = useState({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)) - 30,
        hours: Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minutes: Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)),
        seconds: Math.floor(diff % (1000 * 60) / 1000)
    });
    const countDownFunction = () => {    
            const countDownTime = new Date(2022, 8, 12, 0, 0,).getTime() ;
            const now = new Date().getTime();
            const diff = countDownTime - now;
            setCount({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)) - 30,
                hours: Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
                minutes: Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)),
                seconds: Math.floor(diff % (1000 * 60) / 1000)
            })
    }

    useEffect(
        () => countDownFunction()
    ,[count]);
    
  return (
    <div className="countdown">
                            <ul id="countdown"
                                className="countDown"
                                data-date="Jun 22, 2022 4:00:00 PM UTC">
                                <li className="clock-item">
                                    <span className="count-number days">{count.days}</span>
                                    <p className="count-text">Days</p>
                                </li>

                                <li className="clock-item">
                                    <span className="count-number hours">{count.hours}</span>
                                    <p className="count-text">Hours</p>
                                </li>

                                <li className="clock-item">
                                    <span className="count-number minutes">{count.minutes}</span>
                                    <p className="count-text">Minutes</p>
                                </li>

                                <li className="clock-item">
                                    <span className="count-number seconds">{count.seconds}</span>
                                    <p className="count-text">Seconds</p>
                                </li>
                            </ul>
                        </div>
  )
}
