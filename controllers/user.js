import { GetAllUser, InsertUser, AddSongToPlaylist } from "../models/handler/User.js"
import { baseResponse } from "./baseRespoonses.js"

export function GetAllUserController(req, res){
    const Users = GetAllUser()
    var status = 200
    var newResponse = new baseResponse(status, {'users' : Users})
    return res.status(status).json(newResponse)
}

export function InsertUserController(req, res){
    //format
    // req.body = {
    //     name :
    //     email:
    // }

    //add validation if empty
    let status = 200
    const userReq = req.body

    if (userReq.name === "" || userReq.email === ""){
        status = 400
        var newResponse = new baseResponse(status)
        return res.status(status).json(newResponse)
    }

    try{
        var result = InsertUser(userReq)
    }catch(error){
        status = 500
        var newResponse = new baseResponse(status, error)
        return res.status(status).json(newResponse)
    }
    
    var newResponse = new baseResponse(status, result)
    return res.status(status).json(newResponse)
}

export function AddPlaylistController(req, res){

    // req.body= {
    //     userId:"",
    //     songgId:""
    // }

    let status =200
    const reqData = req.body
    const result = AddSongToPlaylist(reqData.userId, reqData.songId)

    if (result === undefined){
        status = 400
        var newResponse = new baseResponse(status)
        return res.status(status).json(newResponse)        
    }

    var newResponse = new baseResponse(status, result)
    res.redirect(result)
    return res.status(status).json(newResponse)

}