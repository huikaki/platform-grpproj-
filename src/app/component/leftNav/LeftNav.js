import Image from "next/image";
import { leftNavContent } from "./leftNavContent";

function LeftNav(props) {
  return leftNavContent.map((item, index) => (
    <div
      key={index}
      className={`${props.name} leftNavContainer hoverEffect flex flex-row w-[200px] h-auto py-[5px] max-xl:flex-col `}
    >
      <Image
        src={`/${item.src}`}
        width={24}
        height={24}
        className={`fill-white mx-[16px] `}
        alt="shorts"
      />
      {/* justify-center items-center */}
      <div className={`text-xs text-white font-semibold mt-[5px] text-center	`}>
        {item.content}
      </div>
    </div>
  ));
}
export default LeftNav;
