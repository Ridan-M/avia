import React, { useState, FC } from 'react';
import { ITicket } from "../types/types"
import s from "./Info.module.css"
import logo from "../image/logo.png"
import bag1 from "../image/bag1.png"
import bag2 from "../image/bag2.png"



export const Info: FC<{ticket: ITicket}> = ({ticket}) => {

    const [activeIdTime, SetActiveIdTime] = useState(1)

    
    const setTime = (id: number) => {
        SetActiveIdTime(id)
    }

    return (
        <div className={s.info__card}>
            <div className={s.logo}>
                <span className={s.status}>Невозвратный</span>
                <img src={logo} alt="logo" />
                <span>S7 Airlines</span>
            </div>
            <div className={s.info}>
                <div className={s.main__info}>
                    <div className={s.departureInfo}>
                        <h3>{ticket.times[activeIdTime - 1].departureTime}</h3>
                        <span>{ticket.route?.departurePoint}</span>
                        <span>{ticket.date}</span>
                    </div>
                    <span className={s.flightInfo}><span className={s.svo}>SVO</span> В пути 1ч 55мин <span className={s.rov}>ROV</span></span>
                    <div className={s.arrivalInfo}>
                        <h3>{ticket.times[activeIdTime - 1].arrivalTime}</h3>
                        <span>{ticket.route?.arrivalPoint}</span>
                        <span>{ticket.date}</span>
                    </div>
                    <div className={s.bags}>
                        <span><img src={bag2} alt="" /></span>
                        <span><img src={bag1} alt="" /></span>
                    </div>
                </div>
             
                <div className={s.timetable__info}>
                     {ticket.times.map((i) => <div 
                     key={i.id} 
                     onClick={()=>setTime(i.id)} 
                     className={`${s.time} ${i.id === activeIdTime && s.active}`}
                     >
                        <span className={s.departure__time}>{i.departureTime} - </span>
                        <span className={s.arrival__time}>{i.arrivalTime}</span>
                     </div>)}   
                </div>
            </div>   
            
        </div>

    )
}