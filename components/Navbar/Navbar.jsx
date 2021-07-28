import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let test = (
    <div className="absolute  flex flex-col bg-lighterBG rounded divide-y-2 right-0 z-10 shadow-lg mt-2">
      <Link href="/" passHref={true}>
        <button className="p-4 hover:bg-mainBG focus:bg-secondaryBG font-display  transition duration-300 rounded">
          Picture
        </button>
      </Link>

      <Link href="/favorites" passHref={true}>
        <button className="p-4 hover:bg-mainBG focus:bg-secondaryBG font-display transition delay-100 duration-200 hover:text-brightBG rounded">
          Favorites
        </button>
      </Link>
    </div>
  );

  return (
    <nav className="bg-mainBG text-white">
      <div className="flex justify-between py-2 px-4 h-24">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="sm:hidden iphone:hidden md:block cursor-pointer mr-4">
              <h1 className="font-display font-bold text-2xl">ANIFLEX</h1>
            </div>
          </Link>
          <div className=" text-center cursor-pointer lg:hidden">
            <Link href="/">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </a>
            </Link>
          </div>
          <div className=" text-center cursor-pointer iphone:mt-2 lg:mt-0">
            <Link href="/favorites">
              <h1 className="font-display text-xl">FAVORITES</h1>
            </Link>
          </div>
        </div>
        <div className="flex items-center w-2/5">
          <input
            type="text"
            className="w-full  transition duration-500 border border-lighterBG text-secondaryBG px-1 py-1 rounded-lg bg-mainBG font-display  focus:outline-none focus:ring-2 focus:ring-secondaryBG focus:border-transparent "
            placeholder=" search"
          />
        </div>

        <div className="cursor-pointer relative">
          <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex  transition duration-500 border border-lighterBG hover:border-secondaryBG rounded-full">
              <Image
                src="/images/avatars/female.svg"
                objectFit="cover"
                width={35}
                height={35}
                objectPosition="center"
              />
            </div>
          </div>
          {isOpen && test}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
