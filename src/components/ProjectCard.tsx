"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  imageUrl: string;
  createdBy: string;
  remixedFrom?: {
    id: string;
    title: string;
  };
}

export default function ProjectCard({
  id,
  title,
  imageUrl,
  createdBy,
  remixedFrom,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border border-border hover:border-primary/50 transition-transform duration-300 hover:scale-[1.02] shadow-md rounded-lg">
      <Link href={`/project/${id}`} className="block">
        {/* Image Section */}
        <div className="aspect-video relative overflow-hidden bg-accent/30 rounded-t-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Heart Icon */}
          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Heart className="h-5 w-5 text-white" />
          </div>
        </div>
      </Link>

      {/* Content Section */}
      <CardContent className="p-4">
        <div className="flex flex-col space-y-2">
          {/* Title */}
          <Link href={`/project/${id}`} className="block">
            <h3 className="font-semibold text-lg truncate group-hover:text-primary transition-colors duration-300">{title}</h3>
          </Link>

          {/* Metadata */}
          <div className="flex flex-col text-sm text-muted-foreground">
            {remixedFrom && (
              <span className="truncate">
                Remixed from:{" "}
                <Link
                  href={`/project/${remixedFrom.id}`}
                  className="text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {remixedFrom.title}
                </Link>
              </span>
            )}
            <span className="truncate mt-1">
              Created by:{" "}
              <Link
                href={`/profile/${createdBy}`}
                className="text-primary hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                {createdBy}
              </Link>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
