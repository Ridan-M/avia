
const calculatTime = (firstDate:string, secondDate: string) => {			
    const getDate = (string: string) => new Date(0, 0,0, Number(string.split(':')[0]), Number(string.split(':')[1])); 
    const different = (Number(getDate(secondDate)) - Number(getDate(firstDate)));

    const hours = Math.floor((different % 86400000) / 3600000);
    const minutes = Math.round(((different % 86400000) % 3600000) / 60000);
    const result = hours + ':' + minutes;

    return result;
}

export default calculatTime