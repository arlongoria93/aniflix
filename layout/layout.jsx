import FeaturedRow from "../components/FeaturedRow/FeaturedRow";
import FlixRow from "../components/FlixRow/FlixRow";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="bg-mainBG h-screen">
      <Navbar />
      <div className="grid grid-cols-1 grid-rows-1 mt-5 ">
        <div className="row-span-3">
          <FeaturedRow image="/images/featured/featured.png" />
        </div>
      </div>
      <div className="grid grid-rows-3 grid-cols-1">
        <div className="p-4">
          <FlixRow nav={"mp"} title={"Most Popular"} />
        </div>

        <div className="p-4">
          <FlixRow nav={"ra"} title={"Recently Added"} />
        </div>

        <div className="p-4">
          <FlixRow nav={"idk"} title={"Top 2021"} />
        </div>
      </div>
      <div className="text-primaryText">Footer</div>
    </div>
  );
};

export default Layout;
