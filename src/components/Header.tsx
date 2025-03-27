"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center h-14 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="Portfolio Gallery Logo"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="font-cal text-lg tracking-tight">
              Portfolio Gallery
            </span>
          </Link>
        </div>

        <div className="flex-1 flex justify-center px-4">
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <Input
              type="search"
              placeholder="Search projects and developers..."
              className="w-full pl-10 bg-accent/50 border-accent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">Create Project</Button>
        </div>
      </div>
    </header>
  );
}
