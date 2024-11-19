import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-20 text-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
          <h1 className="text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
            Join the Future of Innovation
          </h1>
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Be among the first to experience our revolutionary platform. Sign up now
          for early access and exclusive benefits.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            onClick={() => {
              const form = document.getElementById('signup-form');
              form?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
}
