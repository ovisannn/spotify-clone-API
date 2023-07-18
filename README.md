**Sopfify Clone**
----
  in this version of API using variable for storing its data.

* **URL**

  <_https://localhost:3000/_>

* **Method & URL:**
  
  <_The request type_>

  | `GET` |
  Get all user : `http://localhost:3000/user` 
  Get all song : `http://localhost:3000/songs`
  Play song : `http://localhost:3000/:userId/play/:songId`

    userId : [string]

    songId : [string]

  Most played : `http://localhost:3000/mostPlayed`
  Get all song (Sorted by most played) : `http://localhost:3000/songs/sort/mostplayed`


  | `POST` | 
  Add user : `http://localhost:3000/add/user`


  | `PATCH` |
  add playlist : `http://localhost:3000/add/playlist/`
  
