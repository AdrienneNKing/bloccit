const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;

describe("Flair", () => {

  beforeEach((done) => {
    this.topic;
    this.flair;
    sequelize.sync({force: true}).then((res) => {

      Topic.create({
        title: "Winterland Adventures",
        description: "A group of diaries from adventures in Alaska."
      })
      .then((topic) => {
        this.topic = topic;

        Flair.create({
          name: "Skiing",
          color: "Blue",
          topicId: this.topic.id
        })
        .then((flair) => {
          this.flair = flair;
          done();
        });
      })
      .catch((err) => {
        console.log(err);
        done();
      });

    });

  });

  describe("#create()", () => {

     it("should create a flair associated with an object with a name and color", (done) => {
//#1
       Flair.create({
         name: "Snowshoeing",
         color: "White",
         topicId: this.topic.id
       })
       .then((flair) => {

//#2
         expect(post.name).toBe("Snowshoeing");
         expect(post.body).toBe("White");
         done();

       })
       .catch((err) => {
         console.log(err);
         done();
       });
     });

   });
});
