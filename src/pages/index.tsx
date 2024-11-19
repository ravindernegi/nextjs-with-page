import { PostType } from "@/types";

export async function getServerSideProps(context) {
  // Fetch data from an API or database
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data, // Pass this to your component as props
    },
  };
}

export default function ExamplePage({ data }) {
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <ol>
        {data.map((post: PostType) => (
          <li key={post.id} className="list">
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ol>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
