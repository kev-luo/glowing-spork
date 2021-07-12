import { API } from "aws-amplify";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { Container, Image, Heading, Text, Box } from "@chakra-ui/react";

import { listPosts, getPost } from "../../src/graphql/queries";

export default function Post(props) {
  const { post } = props;

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Container maxW="7xl" p={12}>
      <Heading fontSize="5xl" fontWeight="semibold" letterSpacing="wide">
        {post.title}
      </Heading>
      <Text my={4} fontWeight="light" fontSize="small">
        by: {post.username}
      </Text>
      <Box mt={8}>
        <ReactMarkdown className="prose">{post.content}</ReactMarkdown>
      </Box>
    </Container>
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
