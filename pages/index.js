import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../layout/layout";
function Home() {
  return <Layout />;
}

export default Home;
export async function getStaticProps(context) {
  return {
    props: {},
  };
}
