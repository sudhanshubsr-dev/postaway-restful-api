// ? Importing Modules
import express from 'express';
import 'dotenv/config';
import swagger from 'swagger-ui-express';
import { readFile } from 'fs/promises';

// ? Importing Swagger Documentation
const apiDocs = JSON.parse(await readFile('./swagger.json', 'utf-8'))

// ? Importing MongoDB Connection
import mongooseConnection from './src/config/mongodb.config.js'

// ? Importing Routers 
import UsersRouter from './src/routes/users.router.js'
import PostsRouter from './src/routes/posts.router.js'
import CommentsRouter from './src/routes/comments.router.js'
import FriendsRouter from './src/routes/friends.router.js'
import LikesRouter from './src/routes/likes.router.js'
import OTPRouter from './src/routes/otp.router.js'

// ? Initializing App  
const app = express();



// ? Main Page Redirecting to Documentation
app.get('/', (req, res)=>{
    res.redirect('/api/docs')
})

// ? Routes
app.use('api/users/', UsersRouter)
app.use('api/posts/', PostsRouter)
app.use('api/comments/', CommentsRouter)
app.use('api/friends/', FriendsRouter)
app.use('api/likes/', LikesRouter)
app.use('api/otp/', OTPRouter)
app.use('/api/docs', swagger.serve, swagger.setup(apiDocs)); 







// ? Server Connection
app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log(err)
    }
    console.log(`Server is running on port ${process.env.PORT}`)
    mongooseConnection();
})

