import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-3xl border border-[#2D2D2D] bg-[#171717] p-12 text-center">

          <h2 className="text-4xl font-bold text-white">
            Start Organizing Today
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Join thousands of users using
            <span className="text-[#D4AF37]"> PlanVerse OS</span>.
          </p>

          <div className="mt-8">
            <Button href="/signup">
              Create Free Account
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}