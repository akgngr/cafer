import express from "express"
import allRoutes from "./src/Routes/index.js"
const app = express()
const port = 8080
import "dotenv/config"

import db from "./config/db.js"
import allModels from "./src/Models/index.js"

/**
 *    Burada ayarları yapıyorum.
 * */
app.set("views", "./src/Views")
app.set("view engine", "ejs")
app.use(express.static("public"))

/**
 *    Burada rotalar yapıyorum.
 * */
app.use("/", allRoutes)

/**
 *    Burada uygulamamı ayağa kaldırıyorum.
 * */
app.listen(port, () => {
  console.log(`Uygulama http://127.0.0.1:${port} portunda ayağa kalktı.`)
})
