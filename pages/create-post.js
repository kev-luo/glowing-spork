import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState, useRef } from "react"; // new
import { API, Storage } from "aws-amplify";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { createPost } from "../src/graphql/mutations";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { Text, Input, Button, Image } from "@chakra-ui/react";

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
      <Text fontSize="3xl" fontWeight="semibold" letterSpacing="wide" mt={6}>
        Create new post
      </Text>
      <Input
        variant="flushed"
        placeholder="Title"
        name="title"
        onChange={onChange}
        value={post.title}
        my={3}
        textColor="gray.500"
        _placeholder={{ textColor: "gray.500" }}
      />
      <SimpleMdeEditor
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
      />
      <Input
        as="input"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        w={0}
        h={0}
        pos="absolute"
      />
      <Button
        onClick={uploadImage}
        colorScheme="purple"
        textColor="white"
        fontWeight="semibold"
        px={8}
        py={2}
        mr={2}
      >
        Upload Cover Image
      </Button>
      <Button
        type="button"
        onClick={createNewPost}
        colorScheme="blue"
        textColor="white"
        fontWeight="semibold"
        px={8}
        py={2}
      >
        Create Post
      </Button>
    </div>
  );
}

export default withAuthenticator(CreatePost);
