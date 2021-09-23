import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID JjeTz8HgAKv_7lLfpi67eUFq9hT82kPIHAMRRxwzmI0'
    }
});