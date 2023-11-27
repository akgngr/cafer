import express from "express"
const router = express.Router()

import homeRouters from "./homeRouters.js"
import blogRoutes from "./blogRoutes.js"
import adminRoutes from "./adminRoutes.js"

router.use(homeRouters)
router.use("/admin", adminRoutes)
router.use("/blog", blogRoutes)

export default router
