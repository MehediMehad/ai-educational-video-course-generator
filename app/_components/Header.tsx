"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";

const Header = () => {
  const { user } = useUser();
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-2xl font-extrabold text-gray-700">
            <span className="text-primary">Video Course</span> Generator
          </h1>
        </div>

        {/* User Or Sign In */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex gap-4 items-center">
              <h1 className="-mt-0.75">Hello, {user.firstName}</h1>
              <div className="scale-150">
                {" "}
                {/* <-- increase size 25% */}
                {/* <UserButton afterSignOutUrl="/sign-in" /> */}
                <UserButton />
              </div>
            </div>
          ) : (
            <SignInButton mode="modal">
              <Button>Get Started</Button>
            </SignInButton>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
