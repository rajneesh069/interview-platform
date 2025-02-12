import Image from "next/image";
import AuthComponent from "./AuthComponent";
import { Button } from "./ui/button";

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
      <AuthComponent>
        <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium rounded-full px-6">
          Login / SignUp
        </Button>
      </AuthComponent>
    </div>
  );
}
