"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-colors duration-300">
      <Link href={`/project/${id}`} className="block">
        <div className="aspect-video relative overflow-hidden bg-accent/30">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <CardContent className="p-3">
        <h3 className="font-cal text-sm truncate">{title}</h3>
        <div className="flex flex-col text-[11px] text-muted-foreground mt-1">
          {remixedFrom && (
            <div className="truncate">
              Remixed from:{" "}
              <Link
                href={`/project/${remixedFrom.id}`}
                className="text-primary hover:underline"
              >
                {remixedFrom.title}
              </Link>
            </div>
          )}
          <div className="truncate">
            Created by:{" "}
            <Link
              href={`/profile/${createdBy}`}
              className="text-primary hover:underline"
            >
              {createdBy}
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
