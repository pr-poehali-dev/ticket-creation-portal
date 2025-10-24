import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const tickets = [
    {
      id: 1,
      title: "Концерт в центре города",
      date: "15 ноября 2025",
      price: "2500 ₽",
      category: "Музыка",
      available: true,
      gradient: "from-primary to-accent"
    },
    {
      id: 2,
      title: "Театральная премьера",
      date: "20 ноября 2025",
      price: "3500 ₽",
      category: "Театр",
      available: true,
      gradient: "from-secondary to-primary"
    },
    {
      id: 3,
      title: "Фестиваль искусств",
      date: "25 ноября 2025",
      price: "1800 ₽",
      category: "Искусство",
      available: true,
      gradient: "from-accent to-secondary"
    },
    {
      id: 4,
      title: "Спортивный турнир",
      date: "30 ноября 2025",
      price: "4200 ₽",
      category: "Спорт",
      available: false,
      gradient: "from-primary to-secondary"
    },
    {
      id: 5,
      title: "Комедийное шоу",
      date: "5 декабря 2025",
      price: "2000 ₽",
      category: "Развлечения",
      available: true,
      gradient: "from-secondary to-accent"
    },
    {
      id: 6,
      title: "Рок-фестиваль",
      date: "10 декабря 2025",
      price: "5500 ₽",
      category: "Музыка",
      available: true,
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Ticket" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold">билет есть</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#tickets" className="text-foreground hover:text-primary transition-colors">Билеты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Войти
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-50"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 px-4 py-2">
              🎉 Новая платформа для билетов
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                билет есть
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Откройте мир незабываемых событий. Находите и покупайте билеты на лучшие мероприятия вашего города.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg px-8 py-6">
                <Icon name="Search" size={20} className="mr-2" />
                Найти билеты
              </Button>
              <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
                <Icon name="Calendar" size={20} className="mr-2" />
                Все события
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center pt-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <span className="text-muted-foreground">Безопасно</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-secondary" />
                </div>
                <span className="text-muted-foreground">Быстро</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="Heart" size={24} className="text-accent" />
                </div>
                <span className="text-muted-foreground">Удобно</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tickets" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Билеты на события</h2>
            <p className="text-xl text-muted-foreground">Выбирайте из сотен мероприятий</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket, index) => (
              <Card 
                key={ticket.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-32 bg-gradient-to-r ${ticket.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant={ticket.available ? "default" : "secondary"} className="bg-background/80">
                      {ticket.available ? "Доступно" : "Распродано"}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {ticket.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-base">
                    <Icon name="Calendar" size={16} />
                    {ticket.date}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-sm">
                      {ticket.category}
                    </Badge>
                    <span className="text-2xl font-bold text-primary">{ticket.price}</span>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
                    disabled={!ticket.available}
                  >
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    {ticket.available ? "Купить билет" : "Недоступно"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Ticket" size={18} className="text-white" />
            </div>
            <span className="text-lg font-bold">билет есть</span>
          </div>
          <p className="text-muted-foreground">© 2025 Все права защищены</p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Instagram" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
