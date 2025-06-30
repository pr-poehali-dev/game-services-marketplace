import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import GameCard from "@/components/GameCard";
import SellerCard from "@/components/SellerCard";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const popularGames = [
    { id: 1, name: "CS2", image: "🎯", activeOffers: 1247, category: "FPS" },
    { id: 2, name: "Dota 2", image: "⚔️", activeOffers: 892, category: "MOBA" },
    {
      id: 3,
      name: "Valorant",
      image: "🎮",
      activeOffers: 634,
      category: "FPS",
    },
    { id: 4, name: "WoW", image: "🏰", activeOffers: 456, category: "MMORPG" },
  ];

  const topSellers = [
    {
      id: 1,
      name: "GameMaster777",
      rating: 4.9,
      sales: 1523,
      avatar: "GM",
      games: ["CS2", "Valorant"],
    },
    {
      id: 2,
      name: "ProGamer",
      rating: 4.8,
      sales: 1204,
      avatar: "PG",
      games: ["Dota 2", "WoW"],
    },
    {
      id: 3,
      name: "SkillBoost",
      rating: 4.7,
      sales: 987,
      avatar: "SB",
      games: ["CS2", "Dota 2"],
    },
  ];

  const features = [
    {
      icon: "Shield",
      title: "Безопасные сделки",
      description: "Гарант и защита покупателей",
      color: "green",
    },
    {
      icon: "Star",
      title: "Система рейтингов",
      description: "Отзывы и репутация продавцов",
      color: "yellow",
    },
    {
      icon: "MessageCircle",
      title: "Чат с продавцом",
      description: "Общение в реальном времени",
      color: "blue",
    },
    {
      icon: "CreditCard",
      title: "Разные валюты",
      description: "Поддержка всех способов оплаты",
      color: "purple",
    },
    {
      icon: "Gamepad2",
      title: "Все игры",
      description: "Интеграция с популярными играми",
      color: "red",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Помощь в любое время",
      color: "indigo",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/90 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎮</span>
              </div>
              <h1 className="text-2xl font-bold text-white">GameTrade</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                Игры
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                Продавцы
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-purple-400 transition-colors font-medium"
              >
                FAQ
              </a>
            </nav>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0">
              <Icon name="User" className="mr-2 h-4 w-4" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl font-bold text-white mb-6 font-['Oswald']">
            Торговая площадка
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 block">
              игровых услуг
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Покупайте и продавайте игровые предметы, аккаунты, буст услуги и
            многое другое. Безопасно, быстро и выгодно для всех игроков.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-4 h-auto"
            >
              <Icon name="Search" className="mr-2" />
              Найти услуги
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 h-auto border-purple-400 text-purple-400 hover:bg-purple-500/10"
            >
              <Icon name="Plus" className="mr-2" />
              Стать продавцом
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-12 text-center font-['Oswald']">
            Популярные игры
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Sellers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-12 text-center font-['Oswald']">
            Топ продавцов
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {topSellers.map((seller) => (
              <SellerCard key={seller.id} seller={seller} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-12 text-center font-['Oswald']">
            Почему выбирают нас
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-300">Активных пользователей</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-300">Поддерживаемых игр</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-gray-300">Успешных сделок</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6 font-['Oswald']">
            Готовы начать торговать?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к крупнейшему сообществу игроков. Покупайте,
            продавайте и зарабатывайте на своих игровых навыках.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold"
          >
            <Icon name="Rocket" className="mr-2" />
            Начать сейчас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 py-12 border-t border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🎮</span>
                </div>
                <span className="text-xl font-bold text-white">GameTrade</span>
              </div>
              <p className="text-gray-400">
                Безопасная торговля игровыми предметами и услугами
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Платформа</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Как это работает
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Безопасность
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Комиссии
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Поддержка</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Помощь
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Сообщество</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Reddit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 GameTrade. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
