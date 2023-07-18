import {Songs} from '../db/db.js'
import { v4 as uuidv4 } from 'uuid';
import { dummyData } from './User.js';


export let dummySong = Songs

class SongClass{
    constructor(object){
        this.id = object.id
        this.title = object.title
        this.artist = object.artist
        this.url = object.url
        this.playedBy = object.playedBy
        this.playCount = 0
    }

    GetData(){
        this.playCount = this.playedBy.length
        return this
    }
}

export function GetAllSong(){
    var result = []
    dummySong.map((song)=>{
        var songObj = new SongClass(song)
        result.push(songObj.GetData())
    })
    return result
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

export function GetMostPlayed(){
    var result = []
    dummySong.map((song)=>{
        var songObj = new SongClass(song)
        result.push(songObj.GetData())
    })
    result.sort((a,b)=>{
        if(a.playCount < b.playCount) return 1
        if(a.playCount > b.playCount) return -1
        return 0
    })
    return result[0]
}

export function GetAllSongSortFromMostPlayed(){
    var result = []
    dummySong.map((song)=>{
        var songObj = new SongClass(song)
        result.push(songObj.GetData())
    })
    result.sort((a,b)=>{
        if(a.playCount < b.playCount) return 1
        if(a.playCount > b.playCount) return -1
        return 0
    })
    return result
}