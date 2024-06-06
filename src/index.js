import express from 'express';
const app=express();
import {connect} from './config/database.js';

import service from './services/tweet-service.js';

app.listen(3000,async ()=>{
    console.log("Server started at 3000");
    await connect();
    console.log('Database is connected');

    const ser=new service();
    await ser.create({
        content:'Done with #refactoring #coding'
    })

    
    
})