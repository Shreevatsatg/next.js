import Button from "../../components/Button";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold">About Page</h1>
      
      <div className="max-w-2xl">
        <p className="mb-4">
          This is a simple About page to demonstrate routing in Next.js. 
          Next.js has a file-system based router built on the App Router.
        </p>
        <p className="mb-4">
          Files and folders in the app directory map to URL paths. For example, 
          this file is located at <code className="bg-gray-100 px-1 py-0.5 rounded font-mono">src/app/about/page.tsx</code> 
          and is accessible at the <code className="bg-gray-100 px-1 py-0.5 rounded font-mono">/about</code> URL.
        </p>
      </div>
      
      <Link href="/">
        <Button variant="secondary">
          Back to Home
        </Button>
      </Link>
    </div>
  );
} 