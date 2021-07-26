import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";
import { API } from "aws-amplify";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { createPost } from "../src/graphql/mutations";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

import EmojiModal from "../components/EmojiModal";
import EmojiSearch from "../components/EmojiSearch";
import Wrapper from "../components/Wrapper";

const initialState = { title: "", content: "", postEmoji: "" };

const SimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
function CreatePost() {
  const [post, setPost] = useState(initialState);
  const { title, content, postEmoji } = post;
  const router = useRouter();
  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }
  function onEmojiChange(emoji, emojiTitle) {
    setPost(() => ({ ...post, postEmoji: emoji, postEmojiTitle: emojiTitle }));
  }
  async function createNewPost() {
    if (!title || !content) return;
    const id = uuid();
    post.id = id;

    await API.graphql({
      query: createPost,
      variables: { input: post },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    router.push(`/posts/${id}`);
  }

  return (
    <Wrapper>
      <EmojiModal />
      <h1 className="text-3xl font-semibold tracking-wide mt-6">
        Create new post
      </h1>
      <input
        placeholder="Title"
        name="title"
        onChange={onChange}
        value={post.title}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      <SimpleMdeEditor
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
      />
      {/* <button
        onClick={onOpen}
        className="bg-purple-600 text-white font-semibold px-8 py-2 rounded-lg mr-2"
      >
        Add Food Emoji
      </button> */}
      <button
        className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={createNewPost}
      >
        Create Post
      </button>
    </Wrapper>
  );
}

export default withAuthenticator(CreatePost);
