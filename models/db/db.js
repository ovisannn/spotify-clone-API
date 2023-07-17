import { v4 as uuidv4 } from 'uuid';

const Users =[
    {
        id : uuidv4(),
        name : "Jhon Doe",
        email :"jhon.doe@example.com",
        playlist :[],
        playHistory:[]
    },
    {
        id : uuidv4(),
        name : "Miss Doe",
        email :"Miss.doe@example.com",
        playlist :[],
        playHistory:[]
    }
]

const Songs = [
    {
        id : uuidv4(),
        title : "Hail to The King",
        artist : "Avenged Sevenfold",
        url : "https://open.spotify.com/track/5anCkDvJ17aznvK5TED5uo?si=640fbb8f62bc482a",
        playCount : 0
    },
    {
        id : uuidv4(),
        title : "Numb",
        artist : "Linkin Park",
        url : "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h?si=c48baeb0405c4aef",
        playCount : 0
    }
]

export {Users, Songs}