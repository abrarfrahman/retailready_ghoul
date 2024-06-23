"use client"
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export function UserAuthForm({ className, email, setEmail, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    // Demo email auth for "Business Theme Profile" 
    // TODO: replace with actual authentication logic
    if (email.length >= 8 && email.slice(-8) === "@dsg.com") {
      setIsEmailValid(true);
    } else {
      alert("Please enter a valid email ending with @dsg.com");
      setIsEmailValid(false);
      return;
    }

    // Simulate loading for 1.5 seconds 
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {isEmailValid ? (
              <Button variant="destructive" disabled={isLoading} type="submit">
                <Link href="/orderForm">Hello DSG User!</Link>
              </Button>
            ) : (
              <Button variant="secondary" disabled={isLoading} type="submit">
                Sign In with Email
              </Button>
            )}
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        Google (coming soon)
      </Button>
    </div>
  );
}
