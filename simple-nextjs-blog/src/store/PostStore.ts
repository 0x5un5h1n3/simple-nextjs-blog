// PostStore.ts
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
    this.savePosts();
  }

  updatePost(updatedPost) {
    const index = this.posts.findIndex((p) => p.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
      this.savePosts();
    }
  }

  deletePost(id) {
    this.posts = this.posts.filter((p) => p.id !== id);
    this.savePosts();
  }

  savePosts() {
    if (typeof window !== "undefined") {
      localStorage.setItem("posts", JSON.stringify(this.posts));
    }
  }
}

const postStore = new PostStore();
export default postStore;
