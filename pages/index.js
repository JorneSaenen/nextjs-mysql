import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
  if (!posts) return <p>No DATA...</p>;
  return (
    <div className={styles.container}>
      <Head>
        <title>Testing mysql with nextjs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Testing mysql with nextjs using serverless-mysql</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}api/posts`);
  const data = await response.json();
  return {
    props: { posts: data },
  };
}
