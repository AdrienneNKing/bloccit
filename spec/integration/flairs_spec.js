const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/posts";

const sequelize = require("../../src/db/models/index").sequelize;
const Flair = require("../../src/db/models").Flair;
const Topic = require("../../src/db/models").Topic;

describe("routes : flairs", () => {

  beforeEach((done) => {
    this.topic;
    this.flair;

    sequelize.sync({force: true}).then((res) => {

      Topic.create({
        title: "Snowshoeing",
        description: "Simultaneously cold and sweaty!"
      })
      .then((topic) => {
        this.topic = topic;

        Flair.create({
          name: "Winter Sports",
          color: "Blue",
          topicId: this.topic.id
        })
        .then((flair) => {
          this.flair = flair;
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      });
    });

  });

  describe("GET /topics/:topicId/flairs/new", () => {

    it("should render a new flair form", (done) => {
      request.get(`${base}/${this.topic.id}/flairs/new`, (err, res, body) => {
        expect(err).toBeNull();
        expect(body).toContain("New Flair");
        done();
      });
    });

  });
/*
  describe("POST /topics/:topicId/flairs/create", () => {

it("should create a new flair and redirect", (done) => {
   const options = {
     url: `${base}/${this.topic.id}/flairs/create`,
     form: {
       title: "Watching snow melt",
       body: "Without a doubt my favoriting things to do besides watching paint dry!"
     }
   };
   request.post(options,
     (err, res, body) => {

       Flair.findOne({where: {title: "Watching snow melt"}})
       .then((flair) => {
         expect(flair).not.toBeNull();
         expect(flair.title).toBe("Watching snow melt");
         expect(flair.body).toBe("Without a doubt my favoriting things to do besides watching paint dry!");
         expect(flair.topicId).not.toBeNull();
         done();
       })
       .catch((err) => {
         console.log(err);
         done();
       });
     }
   );
 });

});

describe("GET /topics/:topicId/flairs/:id", () => {

   it("should render a view with the selected flair", (done) => {
     request.get(`${base}/${this.topic.id}/posts/${this.flair.id}`, (err, res, body) => {
       expect(err).toBeNull();
       expect(body).toContain("Snowball Fighting");
       done();
     });
   });

 });

 describe("POST /topics/:topicId/Flairs/:id/destroy", () => {

    it("should delete the flair with the associated ID", (done) => {

//#1
      expect(this.flair.id).toBe(1);

      request.post(`${base}/${this.topic.id}/posts/${this.flair.id}/destroy`, (err, res, body) => {

//#2
        Flair.findByPk(1)
        .then((flair) => {
          expect(err).toBeNull();
          expect(flair).toBeNull();
          done();
        })
      });

    });

  });

   describe("GET /topics/:topicId/posts/:id/edit", () => {

   it("should render a view with an edit flair form", (done) => {
     request.get(`${base}/${this.topic.id}/flairs/${this.flair.id}/edit`, (err, res, body) => {
       expect(err).toBeNull();
       expect(body).toContain("Edit Flair");
       expect(body).toContain("Snowball Fighting");
       done();
     });
   });

 });

 describe("POST /topics/:topicId/flairs/:id/update", () => {

   it("should return a status code 302", (done) => {
     request.post({
       url: `${base}/${this.topic.id}/flairs${this.flair.id}/update`,
       form: {
         title: "Snowman Building Competition",
         body: "I love watching them melt slowly."
       }
     }, (err, res, body) => {
       expect(res.statusCode).toBe(302);
       done();
     });
   });

   it("should update the flair with the given values", (done) => {
       const options = {
         url: `${base}/${this.topic.id}/flairs/${this.flair.id}/update`,
         form: {
           title: "Snowman Building Competition"
         }
       };
       request.post(options,
         (err, res, body) => {

         expect(err).toBeNull();

         Flair.findOne({
           where: {id: this.flair.id}
         })
         .then((flair) => {
           expect(flair.title).toBe("Snowman Building Competition");
           done();
         });
       });
   });

 });
 */

});
