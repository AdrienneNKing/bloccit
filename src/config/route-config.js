module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const topicRoutes = require("../routes/topics");
    const marco = require("../routes/marco-polo")

    app.use(marco);
    app.use(staticRoutes);
    app.use(topicRoutes);
  }
}
