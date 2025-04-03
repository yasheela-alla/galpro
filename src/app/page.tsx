import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";
import { featuredProjects } from "@/data/projects";
import { Metadata } from "next";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black">
      <Header />
      <Hero />
      <ProjectGrid
        projects={featuredProjects}
        title="Featured Projects"
      />
      <Footer />
    </main>
  );
}
