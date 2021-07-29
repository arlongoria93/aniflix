import Image from "next/image";
const LayoutLeft = (props) => {
  const { Media } = props;

  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-4 p-4">
      <div className=" flex  flex-wrap justify-center">
        <div className="self-center rounded ">
          <Image
            src={Media.coverImage.extraLarge}
            width={460}
            height={590}
            objectFit="cover"
            className="rounded-xl shadow-2xl transform scale-70 transition duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
      <div className="">
        <div>
          <h1 className="text-center text-secondaryBG font-display text-2xl mb-2">
            Recommended Anime
          </h1>
          {Media.recommendations.nodes.map((recommendations) => {
            return (
              <div
                className="grid  iphone:grid-cols-1 md:grid-cols-3 p-4 gap-2 rounded content-center "
                key={recommendations.id}
              >
                <div className="">
                  <Image
                    width={200}
                    height={130}
                    objectFit="cover"
                    objectPosition="center"
                    src={recommendations.mediaRecommendation.coverImage.large}
                    className="rounded rounded  transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 "
                  />
                </div>
                <div className="col-span-2 bg-lighterBG flex items-center">
                  <p className="font-display text-white text-left   text-xl ml-4">
                    {recommendations.mediaRecommendation.title.userPreferred}
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

export default LayoutLeft;
