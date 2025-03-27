"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="relative py-12 md:py-24 px-4 text-center bg-gradient-to-b from-background to-background/95">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-cal tracking-tight">
          PORTFOLIO GALLERY
        </h1>

        <h2 className="text-xl md:text-2xl text-muted-foreground">
          Showcase your projects, connect with developers, and get hired
        </h2>

        <div className="max-w-lg mx-auto mt-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="search"
              placeholder="Search for a project or developer..."
              className="w-full pl-10 py-6 text-lg h-14 bg-accent/50 border-accent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
