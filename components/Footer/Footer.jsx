import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <nav
      className="bg-mainBG text-white
    "
    >
      <div className="flex justify-center py-2 px-4">
        <div className="flex items-center">
          <div className="text-center cursor-pointer">
            <Link href="/favorites">
              <h1 className="font-display text-sm ">Copyright 2021 Aniflix</h1>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
