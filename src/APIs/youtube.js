import axios from "axios";

const KEY = "AIzaSyC85Isl-NM3ej4fpJ_twEX9W7LJ3K1IA6U"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})