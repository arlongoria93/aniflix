import Image from "next/image";
import Link from "next/link";
import { GetYear } from "../../util/helper";

const Footer = () => {
  return (
    <nav
      className="bg-lighterBG p-8 text-white
    "
    >
      <div className="flex justify-center py-2 px-4">
        <div className="flex items-center">
          <div className="text-center">
              <h1 className="font-display text-sm ">&copy; {GetYear()} Aniflix</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
