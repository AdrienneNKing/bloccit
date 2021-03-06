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

  describe("GET /marco-polo", () => {

    it("should return status code 200 and have 'Polo' in the body of the response", (done) => {

      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain('Polo');
        done();
      })
    })
  })

  describe("Get /about", () => {
    it("should return status code 200 and have 'About Us' in the body of the response", (done) => {

      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body).toContain('About Us');

        done();
      })
    })
  })
})
