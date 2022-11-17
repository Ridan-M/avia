

export interface ITicket {
    route: {
        departurePoint: string;
        arrivalPoint: string;
    } ;
    price: number;
    date: string;
    times: {
        id: number;
        departureTime: string;
        arrivalTime: string;
    }[];
    returnTicket?: null | string;
}




export interface IState {
    ticket: ITicket
}





export interface IAction {
    route: {
        departurePoint: string;
        arrivalPoint: string;
    }
    date: string;
    returnTicket?: null | string;
}