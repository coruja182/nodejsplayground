const { Builder } = require('builder-pattern')

class Post {
  /**
   * @param {string|undefined} id
   * @param {string|undefined} title
   * @param {string|undefined} user
   * @param {Date|undefined} createdAt
   */
  constructor(id, title, user, createdAt) {
    this.id = id
    this.title = title
    this.user = user
    this.createdAt = createdAt
  }

  static builder = () => Builder(Post, {})
}

module.exports = {
  Post
}
