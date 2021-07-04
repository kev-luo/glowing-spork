/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($username: String) {
    onCreateBlog(username: $username) {
      id
      name
      username
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          blogID
          username
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($username: String) {
    onUpdateBlog(username: $username) {
      id
      name
      username
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          blogID
          username
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($username: String) {
    onDeleteBlog(username: $username) {
      id
      name
      username
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          blogID
          username
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($username: String) {
    onCreatePost(username: $username) {
      id
      title
      blogID
      username
      createdAt
      updatedAt
      blog {
        id
        name
        username
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      comments {
        items {
          id
          postID
          content
          username
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($username: String) {
    onUpdatePost(username: $username) {
      id
      title
      blogID
      username
      createdAt
      updatedAt
      blog {
        id
        name
        username
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      comments {
        items {
          id
          postID
          content
          username
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($username: String) {
    onDeletePost(username: $username) {
      id
      title
      blogID
      username
      createdAt
      updatedAt
      blog {
        id
        name
        username
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      comments {
        items {
          id
          postID
          content
          username
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($username: String) {
    onCreateComment(username: $username) {
      id
      postID
      content
      username
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        username
        createdAt
        updatedAt
        blog {
          id
          name
          username
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($username: String) {
    onUpdateComment(username: $username) {
      id
      postID
      content
      username
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        username
        createdAt
        updatedAt
        blog {
          id
          name
          username
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($username: String) {
    onDeleteComment(username: $username) {
      id
      postID
      content
      username
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        username
        createdAt
        updatedAt
        blog {
          id
          name
          username
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
      }
    }
  }
`;
