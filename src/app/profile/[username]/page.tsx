import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLeft, Grid, List, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Keep the page simple to avoid type issues
export default function ProfilePage({ params }: { params: { username: string } }) {
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

            {/* Bio */}
            <div className="max-w-2xl">
              <h2 className="font-cal text-lg mb-2">About</h2>
              <p className="text-muted-foreground">
                I'm a frontend developer and UI designer with 5 years of experience.
                Specialized in creating responsive, accessible, and visually appealing web applications.
                Currently working on portfolio projects and looking for new opportunities.
              </p>
            </div>

            {/* Project Tabs */}
            <div className="border-b border-border">
              <div className="flex gap-6">
                <button className="px-4 py-2 font-medium border-b-2 border-primary text-foreground">
                  Projects
                </button>
                <button className="px-4 py-2 font-medium text-muted-foreground hover:text-foreground">
                  Likes
                </button>
                <button className="px-4 py-2 font-medium text-muted-foreground hover:text-foreground">
                  Collections
                </button>
              </div>
            </div>

            {/* Project Display */}
            <div className="flex justify-between items-center">
              <h2 className="font-cal text-xl">All Projects</h2>
              <div className="flex gap-2">
                <Button size="icon" variant="outline">
                  <Grid className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Projects Grid */}
            {userProjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {userProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    imageUrl={project.imageUrl}
                    createdBy={project.createdBy}
                    remixedFrom={project.remixedFrom}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="h-16 w-16 rounded-full bg-accent/50 flex items-center justify-center mb-4">
                  <Grid className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-cal mb-2">No projects yet</h3>
                <p className="text-muted-foreground max-w-md mb-4">
                  This user hasn't created any projects yet. Check back later or follow them to get notified when they do.
                </p>
                <Button variant="secondary">Browse featured projects</Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Simple metadata generation function
export function generateMetadata({ params }: { params: { username: string } }) {
  return {
    title: `${params.username}'s Profile`,
    description: `Profile page for ${params.username}`
  };
}
