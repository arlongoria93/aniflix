import Image from "next/image";
const LayoutRight = (props) => {
  const { Media } = props;
  const description = Media.description.replace(
    /(<|&lt;)br\s*\/*(>|&gt;)/g,
    " "
  );

  let rank = Media.rankings
    .filter((rank) => rank.year === null && rank.type === "POPULAR")
    .map((rank) => rank.rank);
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-4 p-4 overflow-hidden">
      <div className=" flex  flex-wrap justify-center">
        <div className="self-center rounded ">
          <h1 className="text-white text-center text-xl leading-10 p-8">
            {Media.title.english}
          </h1>
          <p className="text-white text-xl leading-10 p-8">{description}</p>
        </div>
      </div>
      <div className="">
        <div>
          <h1 className="text-center text-secondaryBG font-display text-2xl mb-2">
            Main Characters
          </h1>
          {Media.characterPreview.edges.map((characters) => {
            return (
              <div
                className="grid  iphone:grid-cols-1 md:grid-cols-3 p-4 gap-2 rounded content-center sm:grid-cols-1"
                key={characters.id}
              >
                <div className="iphone:grid">
                  <Image
                    width={200}
                    height={130}
                    objectFit="cover"
                    objectPosition="center"
                    src={characters.node.image.large}
                    className="rounded rounded  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 "
                  />
                </div>
                <div className="col-span-2 bg-lighterBG flex items-center">
                  <p className="font-display text-white text-left   text-xl ml-4">
                    {characters.node.name.userPreferred}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LayoutRight;
