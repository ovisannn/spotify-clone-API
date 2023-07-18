import {Songs} from '../db/db.js'
import { v4 as uuidv4 } from 'uuid';


export let dummySong = Songs

class UserClass{
    constructor(object){
        this.id = uuidv4()
        this.title = object.title
        this.artist = object.artist
        this.url = object.url
        this.playCount = 0
    }

    GetData(){
        return this
    }
}

export function GetAllSong(){
    return dummySong
}