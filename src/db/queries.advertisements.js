const Advertisement = require("./models").Advertisement;

module.exports = {

  getAllAdvertisements(callback){
    return Advertisement.findAll()


    .then((topics) => {
      callback(null, topics);
    })
    .catch((err) => {
      callback(err);
    })
  },
  addAdvertisement(newAdvertisement, callback){
      return Advertisement.create({
        title: newAdvertisement.title,
        description: newAdvertisement.description
      })
      .then((advertisement) => {
        callback(null, advertisement;
      })
      .catch((err) => {
        callback(err);
      })
    },
    getTopic(id, callback){
     return Advertisement.findByPk(id)
     .then((advertisement) => {
       callback(null, advertisement);
     })
     .catch((err) => {
       callback(err);
     })
   },
   deleteAdvertisement(id, callback){
     return Advertisement.destroy({
       where: {id}
     })
     .then((advertisement) => {
       callback(null, advertisement);
     })
     .catch((err) => {
       callback(err);
     })
   },

   updateAdvertisement(id, updatedTopic, callback){
     return Advertisement.findByPk(id)
     .then((advertisement) => {
       if(!advertisement){
         return callback("Advertisement not found");
       }

//#1
      advertisement.update(updatedAdvertisement, {
         fields: Object.keys(updatedAdvertisement)
       })
       .then(() => {
         callback(null, advertisement);
       })
       .catch((err) => {
         callback(err);
       });
     });
   }

}
