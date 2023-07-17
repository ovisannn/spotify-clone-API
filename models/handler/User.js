import {Users} from '../db/db.js'
import { v4 as uuidv4 } from 'uuid';


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
