import mongoose from "mongoose"
const { Schema } = mongoose
import db from "../../config/db.js"

const blogSchema = Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
})

const blogs = db.model("blogs", blogSchema)

export default blogs
