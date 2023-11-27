import "dotenv/config"
import db from "mongoose"
import { handleError } from "../src/helpers/handle.js"

db.connect(process.env.MONGODB_URL).catch((error) => handleError(error))

export default db
