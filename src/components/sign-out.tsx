import { signOut } from "@/auth";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" className="w-full" variant={"outline"}>
        Sign Out
        <LogOut/>
      </Button>
    </form>
  );
}
