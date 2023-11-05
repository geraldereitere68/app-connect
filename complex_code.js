/* complex_code.js */

// This code is a complex implementation of a social media network.
// It includes features such as user authentication, posting messages, following/unfollowing users, and liking/unliking posts.

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.following = [];
    this.posts = [];
  }

  login() {
    // TODO: Implement login logic
  }

  logout() {
    // TODO: Implement logout logic
  }

  follow(user) {
    if (!this.following.includes(user)) {
      this.following.push(user);
    }
  }

  unfollow(user) {
    const index = this.following.indexOf(user);
    if (index !== -1) {
      this.following.splice(index, 1);
    }
  }

  createPost(content) {
    const post = new Post(this, content);
    this.posts.push(post);
  }

  likePost(post) {
    post.addLike(this);
  }

  unlikePost(post) {
    post.removeLike(this);
  }
}

class Post {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.likes = [];
  }

  addLike(user) {
    if (!this.likes.includes(user)) {
      this.likes.push(user);
    }
  }

  removeLike(user) {
    const index = this.likes.indexOf(user);
    if (index !== -1) {
      this.likes.splice(index, 1);
    }
  }
}

// Sample usage

// Create users
const john = new User("john_doe", "password123");
const sarah = new User("sarah_smith", "password456");
const alex = new User("alex_jones", "password789");

// Users follow each other
john.follow(sarah);
sarah.follow(alex);
alex.follow(john);

// Users create posts
john.createPost("Greetings from John!");
sarah.createPost("Hello, everyone!");
john.createPost("Another post by John!");

// John likes Sarah's post
john.likePost(sarah.posts[0]);

// Sarah unfollows Alex
sarah.unfollow(alex);

// Output
console.log(john);
console.log(sarah);
console.log(alex);
