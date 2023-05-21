import { AxiosInstance } from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { IPost } from '../types/post.type'

const POSTS_BASE_URL = '/posts'

class PostsApi {
  private _instanceId: string

  constructor(private axiosClient: AxiosInstance) {
    this._instanceId = uuidv4()
    console.log(`PostsApi ${this._instanceId} created`)
  }

  public async getPosts(): Promise<IPost[]> {
    console.log(`${this.instanceId} getPosts()`)
    const { data } = await this.axiosClient.get<IPost[]>(POSTS_BASE_URL)
    return data
  }

  public async getPost(id: number): Promise<IPost> {
    const { data } = await this.axiosClient.get<IPost>(
      `${POSTS_BASE_URL}/${id}`,
    )
    return data
  }

  public async saveOrUpdatePost(post: IPost): Promise<IPost> {
    const { data } = post.id
      ? await this.axiosClient.put<IPost>(`${POSTS_BASE_URL}/${post.id}`, post)
      : await this.axiosClient.post<IPost>(`${POSTS_BASE_URL}`, post)
    return data
  }

  public async deletePost(id: number): Promise<void> {
    return await this.axiosClient.delete(`${POSTS_BASE_URL}/${id}`)
  }

  public get instanceId() {
    return this._instanceId
  }
}

export default PostsApi