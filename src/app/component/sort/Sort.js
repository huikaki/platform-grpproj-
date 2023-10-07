import { SortContent } from "./SortContent";
import "./sort.scss";

function Sort() {
  return SortContent.map((item) => (
    <>
      <div className="pl-[12px] pr-[15px] pt-[8px] pb-[8px] bg-[#383838] rounded-[25px] border-1 border-[#474747] border-solid gap-2.5 w-fit mr-[12px]">
        <div className="category-bar -white text-[12px] font-[400]">
          {item.sortContent}
        </div>
      </div>
    </>
  ));
}
export default Sort;
