import { Socket } from "socket.io";
import express , {Express, Request , Response} from 'express'
import http from 'http'
import { Server } from "socket.io";
import { UserManager } from "./handlers/UserManger";

const app : Express= express()
const server= http.createServer(http)
const userManager=new UserManager();

const io = new Server(server,{
    cors:{
        origin:"*"
    }
})



io.on('connection',function(ws : Socket){
    console.log('new user detected')

    userManager.addUser('anyName',ws)
ws.on('disconnect',function(){
    console.log('use left')
    userManager.removeUser(ws.id)
})

})

server.listen(3000,()=>console.log('server is up at PORT 3000'))