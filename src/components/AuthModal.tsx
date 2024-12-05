"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AuthModal({ open, onOpenChange }: AuthDialogProps) {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
    onOpenChange(false);
  };
  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email") as string;
    signIn("email", { email, callbackUrl: "/" });
    onOpenChange(false);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Are you ready to start working towards your career goals!
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleGoogleSignIn}
          >
            <Image
              src={"/google.svg"}
              width={20}
              height={20}
              alt="google-logo"
            />
            Login with Google
          </Button>
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
          <form onSubmit={handleEmailSubmit} className="space-y-4">
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
