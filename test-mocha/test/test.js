const chai = require("chai");
const sinon = require("sinon");
const routes = require("../routes");
const assert = chai.assert;



describe("Message tests", function() {
    this.timeout(10000);
    let req = {"message": ""}
    let res = {};
    it("calls Assistant with some params", async function() {
      let result = await routes.SendMessage(req)
      // se é vazio da erro..
      //assert.equal(result.output.text[0], null)
      // se me retornar um text de de como text de sucesso.
      assert.isString(result.output.text[0])
     
    });
});
