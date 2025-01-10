import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f4ebe3e3fad948c588120954aa418817'
    }
})
