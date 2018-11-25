import axios from 'axios';

export function GET(path){
    return axios.get('http://localhost:4200/'+path)
}

export function POST(path){
    return axios.post('http://localhost:4200/'+path)
}