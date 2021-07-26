import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-mainBG text-white">
      <div className="flex justify-between py-2 px-4">
        <div className="flex items-center">
          <Link href="/">
            <div className="sm:hidden iphone:hidden md:block cursor-pointer mr-4">
              <h1 className="font-display font-bold text-xl">ANIFLEX</h1>
            </div>
          </Link>
          <div className=" text-center cursor-pointer">
            <Link href="/favorites">
              <h1 className="font-display text-sm ">FAVORITES</h1>
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

        <div className="cursor-pointer">
          <div className="flex items-center">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
