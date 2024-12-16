import { ShootingStars } from "@/components/shared/shooting-stars";
import { StarsBackground } from "@/components/shared/stars-background";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      <StarsBackground />
      <ShootingStars />

      <div className="z-20 text-center mb-6 px-4 sm:px-8">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-gradient mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg sm:text-xl mb-6">
          We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t
          exist. Please check the URL or return to the homepage.
        </p>
        <Link
          href="/"
          replace
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-full shadow-lg transform hover:scale-105 transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
