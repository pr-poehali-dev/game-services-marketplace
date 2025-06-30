import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface SellerCardProps {
  seller: {
    id: number;
    name: string;
    rating: number;
    sales: number;
    avatar: string;
    games: string[];
  };
}

const SellerCard = ({ seller }: SellerCardProps) => {
  return (
    <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16 border-2 border-purple-500/30">
            <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg">
              {seller.avatar}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white">{seller.name}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    className={`w-4 h-4 ${
                      i < Math.floor(seller.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-600"
                    }`}
                  />
                ))}
                <span className="text-yellow-400 text-sm ml-1">
                  {seller.rating}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-300">
            <Icon name="ShoppingCart" className="inline w-4 h-4 mr-1" />
            {seller.sales.toLocaleString()} продаж
          </div>
          <div className="text-green-400">
            <Icon name="TrendingUp" className="inline w-4 h-4 mr-1" />
            Онлайн
          </div>
        </div>

        <div>
          <p className="text-gray-400 text-xs mb-2">Специализация:</p>
          <div className="flex flex-wrap gap-1">
            {seller.games.map((game, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-600/20 text-blue-300 border-blue-500/30 text-xs"
              >
                {game}
              </Badge>
            ))}
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0">
          <Icon name="MessageCircle" className="mr-2 w-4 h-4" />
          Написать
        </Button>
      </CardContent>
    </Card>
  );
};

export default SellerCard;
