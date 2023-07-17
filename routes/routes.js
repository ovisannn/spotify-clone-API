// import {Hello} from '../controllers/test.js'
import { GetAllUserController, InsertUserController } from "../controllers/user.js"

export default function(app) {
    app.route('/user')
    .get(GetAllUserController)
    
    app.route('/insertUser')
    .post(InsertUserController)

    //add to playlist => user id & song id
    //show all songs
    //show most played => sort
    //play song => need user id & song id
}
