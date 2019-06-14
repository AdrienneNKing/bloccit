const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {

  describe("GET /", () => {

    it("should return status code 200", (done) => {

      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);

        done();
      })
    })
  })

  describe("GET /marco", () => {

    it("should return status code 200 and have 'Marco' in the body of the response", (done) => {

      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain("Marco");
        
        done();
      })
    })
  })
  })
})
