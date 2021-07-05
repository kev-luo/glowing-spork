import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState, useRef } from "react"; // new
import { API, Storage } from "aws-amplify";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import Image from "next/image";
import { createPost } from "../src/graphql/mutations";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";

const initialState = { title: "", content: "" };

const SimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
function CreatePost() {
  const [post, setPost] = useState(initialState);
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);
  const { title, content } = post;
  const router = useRouter();
  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }
  async function createNewPost() {
    if (!title || !content) return;
    const id = uuid();
    post.id = id;
    // If there is an image uploaded, store it in S3 and add it to the post metadata
    if (image) {
      const fileName = `${image.name}_${uuid()}`;
      post.postImage = fileName;
      await Storage.put(fileName, image);
    }

    await API.graphql({
      query: createPost,
      variables: { input: post },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    router.push(`/posts/${id}`);
  }
  async function uploadImage() {
    hiddenFileInput.current.click();
  }
  function handleChange(e) {
    const fileUploaded = e.target.files[0];
    if (!fileUploaded) return;
    setImage(fileUploaded);
  }
  return (
    <div>
      <h1>Create new post</h1>
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
      />
      {/* {image && <Image src={URL.createObjectURL(image)} alt={post.title} />} */}
      <SimpleMdeEditor
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
      />
      <input type="file" ref={hiddenFileInput} onChange={handleChange} />
      <button onClick={uploadImage}>Upload Cover Image</button>
      <button type="button" onClick={createNewPost}>
        Create Post
      </button>
    </div>
  );
}

export default withAuthenticator(CreatePost);
