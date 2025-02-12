import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import SignIn from "./sign-in";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { auth } from "@/auth";
import { User } from "lucide-react";
import { SignOut } from "./sign-out";

export default async function AuthComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session?.user?.email) {
    return (
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"}>
              <User />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <SignOut />
          </PopoverContent>
        </Popover>
      </div>
    );
  }

  if (!session?.user?.email) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Are you ready to start working towards your career goals!
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <SignIn />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  OR
                </span>
              </div>
            </div>
            {/* Figure out the handleEmailSubmit part */}
            <form className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="eg: abkiran@gmail.com"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#7C3AED] hover:bg-[#6D28D9]"
              >
                Continue
              </Button>
            </form>
            <p className="text-center text-sm text-muted-foreground">
              By going forward, you&apos;re agreeing to MyWays Terms of{" "}
              <a href="#" className="text-[#7C3AED] hover:underline">
                Use and Privacy Policies
              </a>
              .
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return <></>;
}
