import { v4 as uuidv4 } from 'uuid';

const Users =[
    {
        id : "04086ac5-fd59-4777-8a4a-c052cad84810",
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
        id : "9b7cb2a8-0de7-489f-ac1f-15af2def3f54",
        title : "Hail to The King",
        artist : "Avenged Sevenfold",
        url : "https://open.spotify.com/track/5anCkDvJ17aznvK5TED5uo?si=640fbb8f62bc482a",
        playedBy : []
    },
    {
        id : uuidv4(),
        title : "Numb",
        artist : "Linkin Park",
        url : "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h?si=c48baeb0405c4aef",
        playedBy : []
    }
]

export {Users, Songs}