import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { API, Storage } from "aws-amplify";
import { listPosts } from "../src/graphql/queries";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);
  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts,
    });
    const { items } = postData.data.listPosts;
    // Fetch images from S3 for posts that contain a cover image
    const postsWithImages = await Promise.all(
      items.map(async (post) => {
        if (post.postImage) {
          post.postImage = await Storage.get(post.postImage);
        }
        return post;
      })
    );
    setPosts(postsWithImages);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Big D TBD</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.map((post, index) => {
          return (
            <Link key={index} href={`/posts/#{post.id}`} passHref>
              <div>
                <h2>{post.title}</h2>
                <p>Author: {post.username}</p>
              </div>
            </Link>
          );
        })}
      </main>

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  );
}
