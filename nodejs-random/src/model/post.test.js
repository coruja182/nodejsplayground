const { Post } = require('./post')

describe('the post builder', () => {
  it('can build a Post with all properties', () => {
    const now = new Date()
    expect(Post.builder().id('id').title('title').user('user').createdAt(now).build()).toEqual({
      id: 'id',
      title: 'title',
      user: 'user',
      createdAt: now
    })
  })

  it('can build a Post with some properties', () => {
    const post = Post.builder().id('id').build()
    expect(post).toEqual({ id: 'id' })
  })

  it('can build a Post with no properties', () => {
    expect(Post.builder().build()).toEqual({})
  })
})
