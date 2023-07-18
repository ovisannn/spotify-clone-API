import { GetAllSong } from "../models/handler/Songs.js";
import { baseResponse } from "./baseRespoonses.js"


export function GetAllSongController(req, res){
    const Songs = GetAllSong()
    var status = 200
    var newResponse = new baseResponse(status, {'songs' : Songs})
    return res.status(status).json(newResponse)
}