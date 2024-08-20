import Link from "next/link";

export default function Footer() {
  return (
    <footer className="-mb-8 mt-3 w-full bg-gray-100 py-4 text-gray-700 md:mt-0">
      <div className="container mx-auto px-4">
        <div className="flex w-full items-center justify-center">
          <div className="h-full w-fit space-x-6">
            <Link href="/help" className="hover:underline">
              Help
            </Link>
            <Link href="/status" className="hover:underline">
              Status
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/careers" className="hover:underline">
              Careers
            </Link>
            <Link href="/press" className="hover:underline">
              Press
            </Link>
          </div>

          <div className="hidden h-full w-fit space-x-6 md:inline-block">
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/text-to-speech" className="hover:underline">
              Text to speech
            </Link>
            <Link href="/teams" className="hover:underline">
              Teams
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
