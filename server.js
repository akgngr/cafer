import express from "express"
import allRoutes from "./src/Routes/index.js"
const app = express()
const port = 8080

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
  ;`Uygulama ${port} portunda ayağa kalktı.`
})
