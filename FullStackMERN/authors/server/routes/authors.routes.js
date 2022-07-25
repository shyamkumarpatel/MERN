const AuthorsController = require("../controllers/authors.controller");

module.exports = app => {
  app.get("/api/authors/", AuthorsController.findAllAuthors);
  app.get("/api/authors/:id", AuthorsController.findOneSingleAuthor);
  app.post("/api/authors/new", AuthorsController.createNewAuthor);
  app.put("/api/authors/update/:id", AuthorsController.updateExistingAuthor);
  app.delete("/api/authors/delete/:id", AuthorsController.deleteAnExistingAuthor);
};