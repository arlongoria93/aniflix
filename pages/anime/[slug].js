import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import Layout from "../../components/Detail/Layout";
import { useRouter } from "next/router";
const Details = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <Head>
        <title>{slug}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Layout />
      <Footer />
    </div>
  );
};

export default Details;
