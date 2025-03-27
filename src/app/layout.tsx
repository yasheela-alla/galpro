import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Portfolio Gallery - Community for Developers",
  description: "Showcase your projects, connect with other developers, and get hired",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        {children}
        <Toaster />
      </ClientBody>
    </html>
  );
}
