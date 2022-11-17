import React, { useState, FC } from 'react';
import { ITicket } from "../types/types"
import s from "./Info.module.css"
import { Info } from "./Info"



export const InfoList: FC<{ticket: ITicket}> = ({ticket}) => {
    const [returnTicket, SetReturnTicket ] = useState<ITicket | null>(null)

   
   if(ticket.returnTicket && !returnTicket) {
        SetReturnTicket(
         {
        ...ticket,
        date: ticket.returnTicket,
        route: {departurePoint: ticket.route.arrivalPoint , arrivalPoint: ticket.route.departurePoint},
    })
}
    

    return (
        <div className={s.ticket__list}>
            <Info ticket={ticket}/>
            {returnTicket 
                ?<span className={s.return__ticket}><Info ticket={returnTicket}/></span>
                :null
            }
            <div className={s.price}><span>{ticket.price}</span></div>
        </div>
  
    )
}