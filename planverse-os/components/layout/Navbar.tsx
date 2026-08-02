import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#222] bg-[#0D0D0D]/80 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-[#D4AF37]">PlanVerse</span> OS
          </Link>

          <nav className="hidden gap-8 md:flex text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog">Blog</Link>
          </nav>

          <Button href="/login" variant="outline">
            Login
          </Button>
        </div>
      </Container>
    </header>
  );
}