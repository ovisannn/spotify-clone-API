// import {Hello} from '../controllers/test.js'
import { GetAllUserController, InsertUserController, AddPlaylistController } from "../controllers/user.js"
import { GetAllSongController } from "../controllers/song.js"

export default function(app) {
    //get all user
    app.route('/user')
    .get(GetAllUserController)
    
    //add user
    app.route('/insertUser')
    .post(InsertUserController)

    //show all songs
    app.route('/songs')
    .get(GetAllSongController)

    //add to playlist => user id & song id
    app.route('/add/playlist/')
    .patch(AddPlaylistController)

    //show most played => sort
    //play song => need user id & song id
}
