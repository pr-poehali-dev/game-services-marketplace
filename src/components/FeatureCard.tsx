import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FeatureCardProps {
  feature: {
    icon: string;
    title: string;
    description: string;
    color: string;
  };
}

const getColorClasses = (color: string) => {
  switch (color) {
    case "green":
      return "text-green-400 bg-green-400/10 border-green-500/20";
    case "yellow":
      return "text-yellow-400 bg-yellow-400/10 border-yellow-500/20";
    case "blue":
      return "text-blue-400 bg-blue-400/10 border-blue-500/20";
    case "purple":
      return "text-purple-400 bg-purple-400/10 border-purple-500/20";
    case "red":
      return "text-red-400 bg-red-400/10 border-red-500/20";
    case "indigo":
      return "text-indigo-400 bg-indigo-400/10 border-indigo-500/20";
    default:
      return "text-purple-400 bg-purple-400/10 border-purple-500/20";
  }
};

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const colorClasses = getColorClasses(feature.color);

  return (
    <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
      <CardHeader className="pb-4">
        <div
          className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${colorClasses}`}
        >
          <Icon name={feature.icon as any} className="w-8 h-8" />
        </div>
        <CardTitle className="text-xl text-white font-bold">
          {feature.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 leading-relaxed">{feature.description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
