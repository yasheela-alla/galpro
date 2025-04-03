"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <div className="relative py-16 md:py-28 px-4 text-center bg-gradient-to-b from-background via-background/95 to-background/90 overflow-hidden">
//       {/* Abstract Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden opacity-20">
//         <div className="absolute -top-40 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
//         <div className="absolute top-60 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-4xl mx-auto space-y-8">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-cal tracking-tight animate-fade-in">
//           PORTFOLIO GALLERY
//         </h1>

//         <h2 className="text-xl md:text-2xl text-muted-foreground animate-fade-up">
//           Showcase your projects, connect with developers, and get hired
//         </h2>

//         <div className="max-w-lg mx-auto mt-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <Search className="h-5 w-5 text-muted-foreground" />
//             </div>
//             <Input
//               type="search"
//               placeholder="Search for a project or developer..."
//               className="w-full pl-10 py-6 text-lg h-14 bg-accent/50 border-accent transition-all focus:ring-2 focus:ring-primary/50"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <div className="mt-4 flex justify-center gap-4">
//             <Button size="sm" variant="secondary">Browse Projects</Button>
//             <Button size="sm">Create a Project</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
}
