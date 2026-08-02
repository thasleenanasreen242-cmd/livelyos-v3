import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

const features = [
  {
    icon: "📅",
    title: "Smart Planner",
    description: "Plan your day with tasks, reminders and schedules.",
  },
  {
    icon: "💰",
    title: "Finance Tracker",
    description: "Track income, expenses and savings easily.",
  },
  {
    icon: "🎯",
    title: "Goals & Habits",
    description: "Build better habits and reach your goals.",
  },
];

export default function Features() {
  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <div className="mb-4 text-5xl">{feature.icon}</div>

              <h3 className="mb-3 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="text-gray-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}