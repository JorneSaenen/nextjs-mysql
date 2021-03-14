import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Testing sql</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>testing sql</h1>
        {posts.map((post) => (
          <>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </>
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/posts');
  const data = await response.json();
  return {
    props: { posts: data },
  };
}
