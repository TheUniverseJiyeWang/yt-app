import axios from 'axios';

const KEY = 'AIzaSyCwN5LGEUEGdPJw4Ga_75yp5y8jUwNba0o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});