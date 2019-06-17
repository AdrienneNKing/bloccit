const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");

router.get("/", staticController.index);

describe("Get /marco", () => {
  it("should return status code and have 'Marco' in the body of the response", (done) => {

    request.get(base, (err, res, body) => {
      expect(res.statusCode).toBe(200);
      expect(body).toContain("Polo");

      done();
    })
  })
})

module.exports = router;
