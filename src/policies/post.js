const ApplicationPolicy = require("./application");

module.exports = class PostPolicy extends ApplicationPolicy {

  show() {
    return this._isAdmin() || this._isOwner();
  }
  edit() {
    return this._isAdmin() || this._isOwner();
  }

  update() {
    return this.edit();
  }

  destroy() {
    return this.update();
  }
}
