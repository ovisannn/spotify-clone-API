import { GetAllUser, InsertUser } from "../models/handler/User.js"
import { baseResponse } from "./baseRespoonses.js"

export function GetAllUserController(req, res){
    const Users = GetAllUser()
    var status = 200
    var newResponse = new baseResponse(status, Users)
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
        var newResponse = new baseResponse(400)
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