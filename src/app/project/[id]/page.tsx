import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart, MessageSquare, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { featuredProjects } from "@/data/projects";
import { Metadata } from "next";

// For Next.js 15, we need to use explicit typing that matches the expected constraints
export default function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  const project = featuredProjects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to projects</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content unchanged */}
            {/* ... */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-accent/30">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-cal">{project.title}</h1>
                  {project.remixedFrom && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Remixed from:{" "}
                      <Link
                        href={`/project/${project.remixedFrom.id}`}
                        className="text-primary hover:underline"
                      >
                        {project.remixedFrom.title}
                      </Link>
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="mt-8 prose prose-invert max-w-none">
                <h2>Project Description</h2>
                <p>
                  This is a detailed view of the "{project.title}" project. In a real application, this would include a comprehensive description of the project, its features, technologies used, and other relevant information.
                </p>
                <p>
                  The project showcases advanced skills in UI/UX design, frontend development, and possibly backend integration. It demonstrates the creator's ability to build polished, user-friendly applications.
                </p>
                <h2>Features</h2>
                <ul>
                  <li>Responsive design for all device sizes</li>
                  <li>Modern UI with attention to accessibility</li>
                  <li>Interactive elements with smooth animations</li>
                  <li>Clean code architecture</li>
                  <li>Performance optimized for fast loading</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <div className="rounded-lg border border-border bg-card p-4">
                  <h2 className="font-cal text-lg mb-4">Creator</h2>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                      <span className="font-cal text-sm">{project.createdBy.charAt(0).toUpperCase()}</span>
                    </div>
                    <div>
                      <Link
                        href={`/profile/${project.createdBy}`}
                        className="font-medium hover:underline"
                      >
                        {project.createdBy}
                      </Link>
                      <p className="text-xs text-muted-foreground">Joined 2023</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="w-full">
                      View Profile
                    </Button>
                    <Button size="sm" className="w-full">
                      Contact
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-card p-4">
                  <h2 className="font-cal text-lg mb-4">Project Info</h2>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Created</dt>
                      <dd>Mar 15, 2024</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Last updated</dt>
                      <dd>Mar 27, 2024</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Category</dt>
                      <dd>UI Design</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Views</dt>
                      <dd>2,451</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Likes</dt>
                      <dd>198</dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-lg border border-border bg-card p-4">
                  <h2 className="font-cal text-lg mb-4">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    <Link href="#" className="px-3 py-1 text-xs rounded-full bg-accent/50 hover:bg-accent/70 transition-colors">React</Link>
                    <Link href="#" className="px-3 py-1 text-xs rounded-full bg-accent/50 hover:bg-accent/70 transition-colors">NextJS</Link>
                    <Link href="#" className="px-3 py-1 text-xs rounded-full bg-accent/50 hover:bg-accent/70 transition-colors">TailwindCSS</Link>
                    <Link href="#" className="px-3 py-1 text-xs rounded-full bg-accent/50 hover:bg-accent/70 transition-colors">UI Design</Link>
                    <Link href="#" className="px-3 py-1 text-xs rounded-full bg-accent/50 hover:bg-accent/70 transition-colors">Responsive</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// For generateMetadata with Next.js 15, use the same pattern
export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const project = featuredProjects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found'
    };
  }
  
  return {
    title: project.title,
    description: `View details for ${project.title} by ${project.createdBy}`
  };
}

// Make dynamic page
export const dynamic = 'force-dynamic';
