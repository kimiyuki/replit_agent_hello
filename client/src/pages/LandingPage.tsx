import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import SignupForm from "../components/SignupForm";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <FeatureSection />
        <SignupForm />
      </main>
    </div>
  );
}
