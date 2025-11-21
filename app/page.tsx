"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const files = useQuery(api.files.getFiles);
  const createFile = useMutation(api.files.createFile);

  return (
    <main className="p-6 space-y-4">
      <Button>Hello World</Button>

      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>

      {/* RENDER FILES */}
      {files?.map((file) => (
        <div key={file._id}>{file.name}</div>
      ))}

      <Button
        onClick={() =>
          createFile({
            name: "hello world",
          })
        }
      >
        click me
      </Button>
    </main>
  );
}
