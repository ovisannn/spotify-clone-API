import { GetAllSong, PlaySong, GetMostPlayed, GetAllSongSortFromMostPlayed } from "../models/handler/Songs.js";
import { baseResponse } from "./baseRespoonses.js"


export function GetAllSongController(req, res){
    const Songs = GetAllSong()
    var status = 200
    var newResponse = new baseResponse(status, {'songs' : Songs})
    return res.status(status).json(newResponse)
}

export function PlaySongController(req, res){
    const userId = req.params.userId
    const songId = req.params.songId
    const result = PlaySong(userId, songId)
    let status = 200

    if (result === undefined){
        status = 400
        var newResponse = new baseResponse(status)
        return res.status(status).json(newResponse) 
    }

    var newResponse = new baseResponse(status, result)
    // res.redirect(result)
    return res.status(status).json(newResponse)
}

export function GetMostPlayedController(req, res){
    const result = GetMostPlayed()
    var status = 200
    var newResponse = new baseResponse(status, {'song' : result})
    return res.status(status).json(newResponse)
}

export function GetAllMostPlayedController(req, res){
    const result = GetAllSongSortFromMostPlayed()
    var status = 200
    var newResponse = new baseResponse(status, {'songs' : result})
    return res.status(status).json(newResponse)
}
