import Image from "next/image";
import Link from "next/link";

const FlixItem = (props) => {
  return (
    <div className="p-2">
      <Link href={"/anime/" + props.id}>
        <a>
          <Image
            src={props.img}
            width={200}
            height={300}
            objectFit="cover"
            className="z-0 rounded "
          />
        </a>
      </Link>
    </div>
  );
};

export default FlixItem;
