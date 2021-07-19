import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="bg-red-400 border h-100">
      <Navbar />
      <div className="grid grid-cols-1 grid-rows-6 border border-black divide-y divide-black mt-5">
        <div className="text-primaryText">Featured</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="text-primaryText">Footer</div>
    </div>
  );
};

export default Layout;
