import React, { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { listPosts, getPost } from "../../src/graphql/queries";

export default function Post({ post }) {
  const [postImage, setPostImage] = useState(null);
  useEffect(() => {
    async function updatePostImage() {
      if (post.coverImage) {
        const imageKey = await Storage.get(post.postImage);
        setPostImage(imageKey);
      }
    }
    updatePostImage();
  }, [post]);

  console.log("post: ", post);
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      {postImage && <Image src={postImage} alt={post.title} />}
      <p>by {post.username}</p>
      <div>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const postData = await API.graphql({
    query: listPosts,
  });
  const paths = postData.data.listPosts.items.map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const postData = await API.graphql({
    query: getPost,
    variables: { id },
  });
  return {
    props: {
      post: postData.data.getPost,
    },
  };
}
