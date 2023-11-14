import express from "express"
import homeRouters from "./homeRouters.js"
import blogRoutes from "./blogRoutes.js"

const router = express.Router()

router.use(homeRouters)
router.use("/blog", blogRoutes)

export default router
