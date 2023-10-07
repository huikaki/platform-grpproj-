import Image from "next/image";
import "./card.css";

function Card() {
  return (
    <>
      <div className="card-container">
        <Image
          className="card"
          width={137}
          height={180}
          src="/image90.png"
        ></Image>
        <div className="card-info">
          <div
            className="mt-[10px]"
            style={{ fontSize: 12, textAlign: "center" }}
          >
            CALL of DUTY
          </div>
          <div
            className="mt-[10px]"
            style={{ fontSize: 10, textAlign: "center" }}
          >
            Action
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
