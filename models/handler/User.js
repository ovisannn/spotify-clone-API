import {Users} from '../db/db.js'
import { v4 as uuidv4 } from 'uuid';
import { dummySong } from './Songs.js';

let dummyData = Users

class UserClass{
    constructor(object){
        this.id = uuidv4()
        this.name = object.name
        this.email = object.email
        this.playlist = []
        this.playHistory = []
    }

    GetData(){
        return this
    }
}

export function GetAllUser(){
    return dummyData
}

export function InsertUser(newUser){
    var insertData = new UserClass(newUser)

    try{
        dummyData.push(insertData.GetData())
    }catch(error){
        console.log(error)
        return error
    }

    return dummyData.find((data)=>{
        if(data.name === newUser.name){
            return data
        }}).id
    }

export function AddSongToPlaylist(userId, songId){

    var userFound = dummyData.find(data=>data.id===userId)
    var songFound = dummySong.find(data=>data.id===songId)
    // console.log(userFound)
    if(userFound === undefined || songFound === undefined){
        return undefined
    }
    userFound.playlist.push(songFound)
    return userFound.playlist
}
