import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Grid, List, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { Metadata } from "next";

// Ensure PageProps is explicitly defined with correct typing
interface PageProps {
  params: {
    username: string;
  };
}

export default function ProfilePage({ params }: PageProps) {
  const { username } = params;

  // Filter projects by this user
  const userProjects = featuredProjects.filter(
    project => project.createdBy === username
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>

          <div className="space-y-8">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="h-24 w-24 rounded-full bg-accent flex items-center justify-center">
                <span className="font-cal text-3xl">{username.charAt(0).toUpperCase()}</span>
              </div>

              <div className="flex-1">
                <h1 className="text-2xl font-cal">{username}</h1>
                <p className="text-muted-foreground mt-1">Developer & Designer</p>
                <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Grid className="h-4 w-4" />
                    <span>{userProjects.length} Projects</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>124 Followers</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="sm">Follow</Button>
                <Button size="sm" variant="outline">Message</Button>
                <Button size="icon" variant="outline">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Rest of the code remains the same */}
            {/* ... */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Add metadata generation function
export async function generateMetadata({ 
  params 
}: PageProps): Promise<Metadata> {
  return {
    title: `${params.username}'s Profile`,
    description: `Profile page for ${params.username}`
  };
}
