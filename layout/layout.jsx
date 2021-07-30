import FeaturedRow from "../components/FeaturedRow/FeaturedRow";
import FlixRow from "../components/FlixRow/FlixRow";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = (props) => {
  const { mpMedia, topMedia, raMedia } = props;
  return (
    <div className="bg-mainBG h-screen">
      <Navbar />
      <div className="grid grid-cols-1 grid-rows-1 mt-5 ">
        <div className="row-span-3">
          <FeaturedRow data={mpMedia} />
        </div>
      </div>
      <div className="flex flex-col divide-y divide-fuchsia-300">
        <div className="p-4">
          <FlixRow nav={"mp"} title={"Most Popular"} media={mpMedia} />
        </div>

        <div className="p-4">
          <FlixRow nav={"ra"} title={"Recently Added"} media={raMedia} />
        </div>

        <div className="p-4">
          <FlixRow nav={"idk"} title={"Top 2021"} media={topMedia} />
        </div>
      </div>

      <Footer />
    </div>
  );
};
//
export default Layout;
