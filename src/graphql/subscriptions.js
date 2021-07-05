/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($username: String) {
    onCreatePost(username: $username) {
      id
      title
      content
      username
      postImage
      createdAt
      updatedAt
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
      content
      username
      postImage
      createdAt
      updatedAt
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
      content
      username
      postImage
      createdAt
      updatedAt
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
        content
        username
        postImage
        createdAt
        updatedAt
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
        content
        username
        postImage
        createdAt
        updatedAt
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
        content
        username
        postImage
        createdAt
        updatedAt
        comments {
          nextToken
        }
      }
    }
  }
`;
