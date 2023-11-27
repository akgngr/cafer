export function index(req, res) {
  res.render("home/home", { title: "Hey", message: "Hello cafer!" })
}

export function about(req, res) {
  res.render("home/about")
}
