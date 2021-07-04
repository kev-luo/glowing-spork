/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
