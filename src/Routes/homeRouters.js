import express from "express"
const router = express.Router()

import { index, about } from "../Controllers/homeController.js"

router.get("/", index)
router.get("/about", about)

export default router
