import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-yellow-200">
      <div className="flex justify-between py-2 px-4">
        <div className="flex items-center">
          <Link href="/">
            <div className="sm:hidden md:block cursor-pointer mr-4">
              <h1 className="font-display font-bold text-xl">ANIFLEX</h1>
            </div>
          </Link>
          <div className=" text-center cursor-pointer">
            <Link href="/favorites">
              <h1 className="font-display">FAVORITES</h1>
            </Link>
          </div>
        </div>
        <div className="flex items-center w-2/5">
          <input
            type="text"
            className="w-full  px-1 py-1 rounded-lg bg-mainBG font-display  focus:outline-none focus:ring-2 focus:ring-secondaryBG focus:border-transparent "
            placeholder=" search"
          />
        </div>

        <div className=" text-right cursor-pointer">
          <div className="flex items-center">
            <Link href="/profile">
              <a>
                <Image src="/images/avatars/male.svg" width={35} height={35} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
