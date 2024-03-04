// const express = require('express')
import express from 'express'
const app = express()
import {PORT, HOST} from './config.js'


// import teste  from './middlewares/teste.js'

// import userRouter from './routers/userRouter.js'
// import adminRouter from './routers/adminRouter.js'
// import poiRouter from './routers/poiRouter.js'
// import scannedPoiRouter from './routers/scannedPoiRouter.js'

// app.use(teste)
app.use(express.json())

// app.use('/user', userRouter)
// app.use('/admin', adminRouter)
// app.use('/poi', poiRouter)
// app.use('/scanned-poi', scannedPoiRouter)

app.get('/', (req, res) => {
  res.json({message: 'Hello World!'})
})

app.use((req, res) => {
  res.status(404).send("Sorry can't find that!")
})

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
})