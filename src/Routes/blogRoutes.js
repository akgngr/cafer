import express from "express"
const router = express.Router()
import { index, create } from "../Controllers/blogController.js"

router.get("/", index)
router.get("/create", create)

export default router
