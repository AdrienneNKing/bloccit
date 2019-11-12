const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;
const Flair = require("../../src/db/models").Flair;

describe("Flair", () => {

  beforeEach((done) => {
    this.post;
    this.flair;
    sequelize.sync({force: true}).then((res) => {

      Post.create({
        title: "Winterland Adventures",
        description: "A group of diaries from adventures in Alaska."
      })
      .then((post) => {
        this.post = post;

        Flair.create({
          name: "Skiing",
          color: "Blue",
          postId: this.post.id
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



  describe("#create()", () => {

     it("should create a flair associated with an object with a name and color", (done) => {

       Flair.create({
         name: "Snowshoeing",
         color: "White",
         postId: this.post.id
       })
       .then((flair) => {


         expect(flair.name).toBe("Snowshoeing");
         expect(flair.color).toBe("White");
         done();

       })
       .catch((err) => {
         console.log(err);
         done();
       });
     });

     it("should not create a flair with missing name, color, or assigned Post", (done) => {
          Flair.create({
            name: "Skiing"
          })
          .then((flair) => {

            done();

          })
          .catch((err) => {

            expect(err.message).toContain("Flair.color cannot be null");
            expect(err.message).toContain("Flair.postId cannot be null");
            done();

          })
        });
   });

   describe("#setPost()", () => {

     it("should associate a Post and a flair together", (done) => {

       Post.create({
         title: "Challenges of ice-fishing",
         body: "Frozen extremities"
       })
       .then((newTopic) => {

         expect(this.flair.postId).toBe(this.post.id);

         this.flair.setPost(newPost)
         .then((flair) => {

           expect(flair.postId).toBe(newPost.id);
           done();

         });
       })
     });

   });

   describe("#getPost()", () => {

     it("should return the associated post", (done) => {

       this.flair.getPost()
       .then((associatedPost) => {
         expect(associatedPost.title).toBe("Winterland Adventures");
         done();
       });

     });

   });
  });
});
