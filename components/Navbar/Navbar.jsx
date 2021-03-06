import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
const Navbar = () => {
  const [session, loading] = useSession();
  const [isOpen, setIsOpen] = useState(false);

  let test = (
    <div className="absolute  flex flex-col bg-lighterBG rounded divide-y-2 right-0 z-10 shadow-lg mt-2">
      <Link href="/" passHref={true}>
        <button className="p-4 hover:bg-mainBG focus:bg-secondaryBG font-display  transition duration-300 rounded">
          Avatar
        </button>
      </Link>

      <Link href="/favorites" passHref={true}>
        <button className="p-4 hover:bg-mainBG focus:bg-secondaryBG font-display transition delay-100 duration-200 hover:text-brightBG rounded">
          Favorites
        </button>
      </Link>
      <button
        onClick={signIn}
        className="p-4 hover:bg-mainBG focus:bg-secondaryBG font-display transition delay-100 duration-200 hover:text-brightBG rounded"
      >
        Sign In
      </button>
      <button
        onClick={signOut}
        className="p-4 hover:bg-mainBG focus:bg-secondaryBG font-display transition delay-100 duration-200 hover:text-brightBG rounded"
      >
        sign out
      </button>
      {session && (
        <div className="p-4 hover:bg-mainBG focus:bg-secondaryBG font-display transition delay-100 duration-200 hover:text-brightBG rounded">
          {session.user.name} <br />
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-mainBG text-white">
      <div className="flex justify-between py-2 px-4 h-24">
        <div className="flex items-center">
          <Link href="/">
            <div className="sm:hidden iphone:hidden md:block cursor-pointer mr-4">
              <h1 className="font-display font-bold text-2xl ">ANIFLEX</h1>
            </div>
          </Link>
          <div className=" text-center cursor-pointer md:hidden sm:hidden lg:hidden">
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
          <div className=" text-center cursor-pointer iphone:mt-2 sm:mt-0 mt:0  lg:mt-0 ">
            <Link href="/favorites">
              <h1 className="font-display text-xl  iphone:text-lg iphone:font-bold md:font-normal sm:text-xl iphone:p-2">
                FAVORITES
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex items-center w-2/5 sm:hidden iphone:hidden">
          <input
            type="text"
            className="w-full  transition duration-500 border border-lighterBG text-secondaryBG px-1 py-1 rounded-lg bg-mainBG font-display  focus:outline-none focus:ring-2 focus:ring-secondaryBG focus:border-transparent "
            placeholder=" search"
          />
        </div>

        <div className="cursor-pointer relative self-center">
          <div className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex  transition duration-500 border border-lighterBG hover:border-secondaryBG rounded-full">
              <Image
                src="/images/avatars/female.svg"
                objectFit="cover"
                width={40}
                height={40}
                objectPosition="center"
              />
            </div>
          </div>
          {isOpen && test}
        </div>
      </div>
      <div className="block w-full p-4  md:hidden lg:hidden items-center">
        <input
          type="text"
          className="w-full  transition duration-500 border border-lighterBG text-secondaryBG px-1 py-1 rounded-lg bg-mainBG font-display  focus:outline-none focus:ring-2 focus:ring-secondaryBG focus:border-transparent "
          placeholder=" search"
        />
      </div>
    </nav>
  );
};

export default Navbar;
