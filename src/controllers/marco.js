module.exports = {
  index(req,res,next){
    res.render("marco/polo", {title: "Polo"});
  }
}
