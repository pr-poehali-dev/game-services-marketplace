import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface GameCardProps {
  game: {
    id: number;
    name: string;
    image: string;
    activeOffers: number;
    category: string;
  };
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 cursor-pointer">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-2xl">
              {game.image}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{game.name}</h3>
              <Badge
                variant="secondary"
                className="bg-purple-600/20 text-purple-300 border-purple-500/30"
              >
                {game.category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex items-center justify-between">
          <div className="text-gray-300">
            <Icon name="ShoppingBag" className="inline w-4 h-4 mr-1" />
            <span className="text-sm">
              {game.activeOffers.toLocaleString()} предложений
            </span>
          </div>
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0"
          >
            Посмотреть
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
