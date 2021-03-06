import { API } from "aws-amplify";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

import { listPosts, getPost } from "../../src/graphql/queries";

export default function Post(props) {
  const { post } = props;

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const postImg = (props) => {
    return <img {...props} style={{ maxWidth: 475 }} />;
  };

  return (
    <>
      <h1 className="text-5xl mt-4 font-semibold tracking-wide">
        {post.title}
      </h1>
      <p className="text-sm font-light my-4">by {post.username}</p>
      <a
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        href={`/edit-post/${post.id}`}
      >
        Edit Post
      </a>
      <div className="mt-8">
        <ReactMarkdown className="prose" components={{ img: postImg }}>
          {post.content}
        </ReactMarkdown>
      </div>
    </>
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
