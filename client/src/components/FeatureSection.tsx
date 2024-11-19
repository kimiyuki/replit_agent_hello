import { CheckCircle, Zap, Shield, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Early Access",
    description: "Be the first to experience our innovative platform",
    icon: Zap,
  },
  {
    title: "Exclusive Benefits",
    description: "Get special perks and features as an early adopter",
    icon: CheckCircle,
  },
  {
    title: "Secure Platform",
    description: "Your data is protected with enterprise-grade security",
    icon: Shield,
  },
  {
    title: "Global Community",
    description: "Join a worldwide network of innovators",
    icon: Globe,
  },
];

export default function FeatureSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg transition-all duration-200 hover:shadow-xl">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-purple-600" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
