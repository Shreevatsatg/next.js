import Image from "next/image";
import Button from "../components/Button";
import ApiDemo from "../components/ApiDemo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold">Welcome to Next.js</h1>
      
      <div className="flex flex-col items-center gap-4">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p className="text-center max-w-md">
          Get started by editing <code className="bg-gray-100 px-1 py-0.5 rounded font-mono">src/app/page.tsx</code>
        </p>
      </div>
      
      <div className="flex gap-4">
        <Link href="/about">
          <Button variant="primary">
            Get Started
          </Button>
        </Link>
        <Link href="https://nextjs.org/docs" target="_blank">
          <Button variant="secondary">
            Learn More
          </Button>
        </Link>
      </div>

      <ApiDemo />
    </div>
  );
}
