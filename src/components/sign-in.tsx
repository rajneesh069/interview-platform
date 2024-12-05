import { signIn } from "@/auth";
import { Button } from "./ui/button";
import Image from "next/image";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button variant="outline" className="flex w-full items-center gap-2">
        <Image src={"/google.svg"} width={20} height={20} alt="google-logo" />
        <p>Login with Google</p>
      </Button>
    </form>
  );
}
