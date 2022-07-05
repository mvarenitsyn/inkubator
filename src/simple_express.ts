import express, {Request, Response} from 'express'
const app = express()

app.get('/', function (req:Request, res:Response) {
    res.send("Hello world!!")
})

app.listen(3003, function ():void{
    console.log('Server is up on port 3003')
})