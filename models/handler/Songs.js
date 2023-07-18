import {Songs} from '../db/db.js'
import { v4 as uuidv4 } from 'uuid';
import { dummyData } from './User.js';


export let dummySong = Songs

class SongClass{
    constructor(object){
        this.id = uuidv4()
        this.title = object.title
        this.artist = object.artist
        this.url = object.url
        this.playCount = []
    }

    GetData(){
        return this
    }
}

export function GetAllSong(){
    return dummySong
}

export function PlaySong(userId, songId){
    var userFound = dummyData.find(data=>data.id===userId)
    var songFound = dummySong.find(data=>data.id===songId)

    if(userFound === undefined || songFound === undefined){
        return undefined
    }
    userFound.playHistory.push({id: songId})
    songFound.playedBy.push({id: userId})

    return songFound.url
}