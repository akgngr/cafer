import blogs from "../Models/blogSchema.js"

export function index(req, res) {
  res.end("Blog sayfasına hoşgeldiniz.")
}

export function create(req, res) {
  const newBlog = new blogs({
    title: "Test bir blog 2", // String is shorthand for {type: String}
    author: "Abdulkadir",
    body: "Test iki blog içeriği",
    comments: [{ body: "test iki blog yorumu bir", date: Date.now() }],
    date: Date.now(),
    hidden: true,
    meta: {
      votes: 1,
      favs: 5,
    },
  })
  newBlog
    .save()
    .then((savedExample) => {
      res.json({ message: "Veri başarıyla kaydedildi.", data: savedExample })
    })
    .catch((error) => {
      res.json({
        message: "Veri kaydedilirken bir hata ile karşılaşıldı.",
        data: error,
      })
    })
}
