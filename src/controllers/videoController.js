export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 min ago",
      views: 19,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 3,
      comments: 1,
      createdAt: "1 min ago",
      views: 19,
      id: 2,
    },
    {
      title: "Third Video",
      rating: 4,
      comments: 4,
      createdAt: "2 min ago",
      views: 199,
      id: 3,
    },
  ];
  return res.render("home", {pageTitle : "home", videos});
}
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const remove = (req, res) => {
  console.log(req.params);
  return res.send(`Remove Video  #${req.params.id}`);
}
export const upload = (req, res) => res.send("Upload Video");

export const search = (req, res) => res.send("Search Video");

