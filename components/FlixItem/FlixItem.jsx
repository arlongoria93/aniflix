import Image from "next/image";
const FlixItem = () => {
  return (
    <div className="container h-full">
      <div className="z-0">
        <div className=" h-full w-full bottom-0 left-0">
          <Image
            src="/images/cover/cover.jpg"
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default FlixItem;
