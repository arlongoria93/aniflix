import Navbar from "../../components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router);
  return (
    <div className="">
      <Head>
        <title>{slug}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="container mx-auto">DETAIL</div>
      <Footer />
    </div>
  );
};

export default Details;
