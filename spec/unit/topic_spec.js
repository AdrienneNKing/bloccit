const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;

describe("#create()", () => {

  beforeEach ((done) => {

    this.topic;
    this.post;
    sequelize.sync({force: true}).then((res) => {

    const title = "Alpha Centauri: We're Going Back";
    const body = "They told us we shouldn't, we told them they couldn't stop us";
    const topicId = this.topic.id;

    Topic.create({
      title,
      body,
      topicId
    })
    .then((topic) => {
      expect(topic.title).toBe(title);
      expect(topic.body).tobe(body);

        done();
    })
    .catch(err => {
      console.log(err);
      done();
    });
  });
 });
});

  describe("#getPosts()", () => {

    beforeEach((done) => {

      this.topic;
      this.post;
      sequelize.sync({force: true}).then((res) => {

        Post.create({
          title: "Alpha Centauri Part Deux: The Beginning",
          description: "Spoiler alert, they were right to say we shouldn't."
        })
        .then((post) => {
          this.post = post;

          Topic.create({
            title: "Journals from the Second Journey to Alpha Centauri",
            body: "A catalogue of the experiences from our second trip",

            postId: this.post.id
          })
          .then((topic) => {
            this.topic = topic;
            done();
          });
        })
        .catch((err) => {
          console.log(err);
          done();
        });
      });

    });

  });
