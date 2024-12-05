import Image from "next/image";
import AuthComponent from "./AuthComponent";

export default function Appbar() {
  return (
    <div className="bg-white h-[55px] w-full border-b-2 flex justify-between px-4 py-2">
      <Image
        src={"/logo.png"}
        width={120}
        height={50}
        alt="logo"
        className="w-auto h-auto"
      />
      <AuthComponent />
    </div>
  );
}
