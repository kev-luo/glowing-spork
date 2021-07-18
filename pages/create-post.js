import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";
import { API } from "aws-amplify";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { createPost } from "../src/graphql/mutations";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import {
  Text,
  Input,
  Button,
  Container,
  useDisclosure,
} from "@chakra-ui/react";

import EmojiModal from "../components/EmojiModal";
import EmojiSearch from "../components/EmojiSearch";

const initialState = { title: "", content: "", postEmoji: "" };

const SimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
function CreatePost() {
  const { isOpen, onClose, onOpen } = useDisclosure();
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
    <Container maxW="7xl">
      <EmojiModal onClose={onClose} isOpen={isOpen}>
        <EmojiSearch onClose={onClose} onEmojiChange={onEmojiChange} />
      </EmojiModal>
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
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        fontWeight="semibold"
        px={8}
        py={2}
      >
        Add Food Emoji
      </Button>
      <Button
        type="button"
        onClick={createNewPost}
        colorScheme="blue"
        textColor="white"
        fontWeight="semibold"
        px={8}
        py={2}
        mr={2}
      >
        Create Post
      </Button>
    </Container>
  );
}

export default withAuthenticator(CreatePost);
