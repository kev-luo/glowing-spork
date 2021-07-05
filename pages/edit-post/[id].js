import { useEffect, useState, useRef } from "react";
import { API, Storage } from "aws-amplify";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import { updatePost } from "../../src/graphql/mutations";
import { getPost } from "../../src/graphql/queries";
import Image from "next/image";

function EditPost() {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const [postImage, setPostImage] = useState(null);
  const [localImage, setLocalImage] = useState(null);
  const fileInput = useRef(null);

  useEffect(() => {
    fetchPost();
    async function fetchPost() {
      if (!id) return;
      const postData = await API.graphql({ query: getPost, variables: { id } });
      console.log("postData: ", postData);
      setPost(postData.data.getPost);
      if (postData.data.getPost.postImage) {
        updatePostImage(postData.data.getPost.postImage);
      }
    }
  }, [id]);
  if (!post) return null;
  async function updatePostImage(postImage) {
    const imageKey = await Storage.get(postImage);
    setPostImage(imageKey);
  }
  async function uploadImage() {
    fileInput.current.click();
  }
  function handleChange(e) {
    const fileUploaded = e.target.files[0];
    if (!fileUploaded) return;
    setPostImage(fileUploaded);
    setLocalImage(URL.createObjectURL(fileUploaded));
  }
  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }
  const { title, content } = post;
  async function updateCurrentPost() {
    if (!title || !content) return;
    const postUpdated = {
      id,
      content,
      title,
    };
    // check to see if there is a cover image and that it has been updated
    if (postImage && localImage) {
      const fileName = `${postImage.name}_${uuid()}`;
      postUpdated.postImage = fileName;
      await Storage.put(fileName, postImage);
    }
    await API.graphql({
      query: updatePost,
      variables: { input: postUpdated },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    console.log("post successfully updated!");
    router.push("/");
  }

  const SimpleMdeEditor = dynamic(() => import("react-simplemde-editor"), {
    ssr: false,
  });
  return (
    <div>
      <h1>Edit post</h1>
      {postImage && (
        <Image src={localImage ? localImage : postImage} alt={post.title} />
      )}
      <input
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
      />
      <SimpleMdeEditor
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
      />
      <input type="file" ref={fileInput} onChange={handleChange} />
      <button onClick={uploadImage}>Upload Post Image</button>
      <button onClick={updateCurrentPost}>Update Post</button>
    </div>
  );
}

export default EditPost;
