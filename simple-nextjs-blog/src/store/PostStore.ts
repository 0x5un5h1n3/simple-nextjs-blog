import { makeAutoObservable } from "mobx";

class PostStore {
  posts = JSON.parse(localStorage.getItem("posts")) || [];

  constructor() {
    makeAutoObservable(this);
  }

  setPosts(posts) {
    this.posts = posts;
    localStorage.setItem("posts", JSON.stringify(posts)); // Save to local storage
  }

  addPost(post) {
    this.posts.push(post);
    this.setPosts(this.posts); // Update local storage
  }

  deletePost(id) {
    this.posts = this.posts.filter((p) => p.id !== id);
    this.setPosts(this.posts); // Update local storage
  }
}

const postStore = new PostStore();
export default postStore;
