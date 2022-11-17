import { IState } from "../types/types"


export const state: IState = {
    ticket: {
        route: {
            departurePoint: '',
            arrivalPoint: ''
        } ,
        date: '',
        times: [
            {id: 1, departureTime: '20: 47', arrivalTime: '22: 34'},
            {id: 2, departureTime: '15: 00', arrivalTime: '16: 55'},
            {id: 3, departureTime: '09: 30', arrivalTime: '10: 25'},
        ],
        price: 4150,
        returnTicket: null,
    }
}
