import express from "express"
const router = express.Router()
import { index } from "../Controllers/adminController.js"

router.get("/", index)

export default router
