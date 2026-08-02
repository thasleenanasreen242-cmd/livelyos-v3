import Link from "next/link";

const features = [
  {
    title: "💰 Smart Finance",
    description:
      "Track income, expenses, savings and understand your financial habits.",
  },
  {
    title: "📅 Life Planner",
    description:
      "Organize your daily tasks, goals, routines and personal growth.",
  },
  {
    title: "🍽️ Meal Planner",
    description:
      "Plan meals, save time and maintain a healthy lifestyle.",
  },
  {
    title: "⏰ Time Management",
    description:
      "Create schedules and improve productivity every day.",
  },
  {
    title: "💡 Smart Tips",
    description:
      "Get practical ideas for saving money and improving your lifestyle.",
  },
  {
    title: "📊 Personal Dashboard",
    description:
      "See your complete life overview in one place.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-[#222]">

        <h1 className="text-2xl font-bold text-[#D4AF37]">
          LivelyOS
        </h1>

        <div className="flex gap-4">

          <Link href="/login">
            <button className="rounded-xl border border-gray-700 px-5 py-2 hover:border-[#D4AF37]">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="rounded-xl bg-[#D4AF37] px-5 py-2 text-black font-semibold hover:opacity-90">
              Get Started
            </button>
          </Link>

        </div>

      </nav>


      {/* Hero Section */}
      <section className="px-8 py-24 text-center">

        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Manage Your Life
          <br />
          With One Smart OS
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-400 text-lg">
          LivelyOS helps you manage finance, planning, habits,
          meals and productivity in one powerful dashboard.
        </p>


        <div className="mt-10 flex justify-center gap-5">

          <Link href="/signup">
            <button className="rounded-2xl bg-[#D4AF37] px-8 py-4 text-black font-bold">
              Start Your Journey
            </button>
          </Link>


          <Link href="/dashboard">
            <button className="rounded-2xl border border-gray-700 px-8 py-4">
              View Dashboard
            </button>
          </Link>

        </div>

      </section>



      {/* Features */}
      <section className="px-8 pb-20">

        <h3 className="text-center text-3xl font-bold mb-12">
          Everything You Need
        </h3>


        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">

          {features.map((item)=>(
            <div
              key={item.title}
              className="
              rounded-3xl
              border
              border-[#2D2D2D]
              bg-[#171717]
              p-8
              hover:border-[#D4AF37]
              transition
              "
            >

              <h4 className="text-xl font-semibold mb-4">
                {item.title}
              </h4>

              <p className="text-gray-400">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </section>



      {/* CTA */}
      <section className="px-8 py-20 text-center border-t border-[#222]">

        <h3 className="text-4xl font-bold">
          Ready to Organize Your Life?
        </h3>

        <p className="mt-4 text-gray-400">
          Create your LivelyOS account today.
        </p>


        <Link href="/signup">

          <button className="mt-8 rounded-2xl bg-[#D4AF37] px-10 py-4 text-black font-bold">
            Create Free Account
          </button>

        </Link>

      </section>


      {/* Footer */}
      <footer className="border-t border-[#222] py-6 text-center text-gray-500">

        © 2026 LivelyOS. All rights reserved.

      </footer>


    </main>
  );
}