import axios from 'axios';

export function GET(path){
    return axios.get('http://localhost:4200/'+path)
}

export function POST(path, params){
    return axios.post('http://localhost:4200/'+path)
}

export const serverLink = 'http://localhost:4200/';