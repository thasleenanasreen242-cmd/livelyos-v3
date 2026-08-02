import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <Badge text="Premium Productivity Platform" />

          <h1 className="mt-8 text-6xl font-black leading-tight md:text-8xl">
            Plan Your
            <br />
            <span className="text-[#D4AF37]">
              Life Beautifully
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
            Organize tasks, finances, calendars, goals, habits,
            notes and more in one elegant workspace.
          </p>

          <div className="mt-10 flex justify-center gap-5">
            <Button href="/signup">
              Get Started
            </Button>

            <Button href="/login" variant="outline">
              Login
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}