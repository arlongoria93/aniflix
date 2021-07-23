import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../layout/layout";
 function Home() {

  return <Layout data={}/>;
}

export async function getStaticProps(context) {
 const res = await fetch(`https://.../data`)
 const data = await res.json()
  return {
    props: {
    },
  }
}