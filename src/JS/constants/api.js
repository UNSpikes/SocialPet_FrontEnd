import axios from 'axios';

export function GET(path){
<<<<<<< HEAD
    return axios.get('http://localhost:4200/'+path)
}

export function POST(path, params){
    return axios.post('http://localhost:4200/'+path)
}

export const serverLink = 'http://localhost:4200/';
=======
    return axios.get('https://socialped-back-unal.herokuapp.com/'+path)
//    return axios.get('http://localhost:4200/'+path)

}

export function POST(path, params){
    return axios.post('https://socialped-back-unal.herokuapp.com/'+path)
//    return axios.post('http://localhost:4200/'+path)
}

export const serverLink = 'https://socialped-back-unal.herokuapp.com/';
//export const serverLink = 'http://localhost:4200/';
>>>>>>> kvsierrab
