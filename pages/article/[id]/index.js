import { useRouter } from "next/router";

const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
    </div>
  );
};
export default article;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};
