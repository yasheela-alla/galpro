import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-12">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
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
            <p className="text-sm text-muted-foreground mt-4">
              Showcase your work. Connect with developers. Get discovered.
            </p>
          </div>

          <div>
            <h3 className="font-cal text-sm mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Browse Projects</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Featured Developers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Latest Uploads</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Popular Tags</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-cal text-sm mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Documentation</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">API</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Community</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-cal text-sm mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Portfolio Gallery. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
