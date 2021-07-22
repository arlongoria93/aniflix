import FlixItem from "../FlixItem/FlixItem";
import Image from "next/image";

// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 justify-items-center sm:gap-x-6 p-10 lg:grid-cols-4 xl:gap-x-2">
      <FlixItem img={"/images/cover/cover.jpg"} id={"ANIME"} />
      <FlixItem img={"/images/cover/cover.jpg"} id={"ANIME"} />
      <FlixItem img={"/images/cover/cover.jpg"} id={"ANIME"} />
      <FlixItem img={"/images/cover/cover.jpg"} id={"ANIME"} />
      <FlixItem img={"/images/cover/cover.jpg"} id={"ANIME"} />
      <FlixItem img={"/images/cover/cover.jpg"} id={"ANIME"} />
      <FlixItem img={"/images/cover/cover.jpg"} id={"ANIME"} />
      <FlixItem img={"/images/cover/cover.jpg"} id={"ANIME"} />
      <FlixItem img={"/images/cover/cover.jpg"} id={"ANIME"} />
      <FlixItem img={"/images/cover/cover.jpg"} id={"ANIME"} />
      <FlixItem img={"/images/cover/cover.jpg"} id={"ANIME"} />
    </div>
  );
};

export default Layout;
