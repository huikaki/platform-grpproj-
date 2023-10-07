import Image from "next/image";
function Logo() {
  return (
    <>
      <Image
        src="./Hamburger.svg"
        width={22}
        height={22}
        alt="hamburger"
        className={`max-[4096px]:absolute mt-4 ml-5 bg-[#212121]  max-sm:hidden`}
        onClick={() => setDisplay((prevDisplay) => !prevDisplay)}
      ></Image>
      <Image
        src="./AWA Logo.svg"
        width={36}
        height={34}
        alt="logo"
        className="max-[4096px]:absolute mt-3 ml-11 max-sm:ml-4"
      ></Image>
    </>
  );
}
export default Logo;
