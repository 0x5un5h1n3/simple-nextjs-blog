import { makeAutoObservable } from "mobx";

class PostStore {
  posts = [];

  constructor() {
    makeAutoObservable(this);
  }

  setPosts(posts) {
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const postStore = new PostStore();
export default postStore;
