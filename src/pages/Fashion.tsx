import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Fashion() {
  const fashionTrends = [
    { 
      icon: 'Sparkles', 
      title: 'Streetwear + Luxury', 
      description: 'Смелое сочетание уличного стиля с люксовыми брендами: Supreme с Gucci, Nike с Dior' 
    },
    { 
      icon: 'Palette', 
      title: 'Яркие цвета', 
      description: 'Неоновые оттенки, пастель и смелые цветовые блоки — визитная карточка кейпоп-стиля' 
    },
    { 
      icon: 'Shirt', 
      title: 'Oversized силуэты', 
      description: 'Объёмные худи, оверсайз-жакеты и свободные брюки создают расслабленный образ' 
    },
    { 
      icon: 'Glasses', 
      title: 'Аксессуары', 
      description: 'Массивные цепи, необычные очки, кроссовки-коллаборации и уникальные украшения' 
    },
    { 
      icon: 'Rainbow', 
      title: 'Волосы', 
      description: 'Яркое окрашивание волос — от пастельных оттенков до радикальных неоновых цветов' 
    },
    { 
      icon: 'Star', 
      title: 'Сценические образы', 
      description: 'Кастомные костюмы от мировых дизайнеров: Balmain, Versace, Alexander McQueen' 
    },
  ];

  const brandAmbassadors = [
    { group: 'BTS', brands: ['Louis Vuitton', 'Samsung', 'Hyundai', 'Coca-Cola'] },
    { group: 'BLACKPINK', brands: ['Chanel', 'Dior', 'Celine', 'Saint Laurent', 'Bulgari'] },
    { group: 'EXO', brands: ['MCM', 'Privé Alliance', 'BMW'] },
    { group: 'TWICE', brands: ['Acuvue', 'Maybelline', 'LG'] },
  ];

  const styleIcons = [
    { name: 'G-Dragon (BIGBANG)', impact: 'Икона моды, основатель бренда PEACEMINUSONE, коллаборации с Nike и Chanel' },
    { name: 'Jennie (BLACKPINK)', impact: 'Human Chanel, задаёт тренды в Instagram, влияет на мировую моду' },
    { name: 'V (BTS)', impact: 'Лицо Celine и Cartier, известен утончённым винтажным стилем' },
    { name: 'Lisa (BLACKPINK)', impact: 'Celine и Bulgari, смелые экспериментальные образы' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              K-POP и мода
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Как кейпоп-айдолы стали иконами стиля и изменили мировую моду
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {fashionTrends.map((trend, index) => (
              <Card key={index} className="bg-card border-border hover:neon-border hover-scale transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon name={trend.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{trend.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{trend.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Иконы стиля</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {styleIcons.map((icon, index) => (
                <Card key={index} className="bg-card border-border hover:neon-border transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{icon.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{icon.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Бренд-амбассадоры</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {brandAmbassadors.map((ambassador, index) => (
                <Card key={index} className="bg-card border-border hover:neon-border transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{ambassador.group}</h3>
                    <div className="flex flex-wrap gap-2">
                      {ambassador.brands.map((brand, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-border animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">👗</div>
                <h3 className="text-xl font-bold mb-3">Airport Fashion</h3>
                <p className="text-muted-foreground text-sm">
                  Образы айдолов в аэропортах мгновенно становятся трендами. Фанаты и СМИ тщательно анализируют каждую деталь.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-bold mb-3">Фотосессии</h3>
                <p className="text-muted-foreground text-sm">
                  Обложки Vogue, Harper's Bazaar, Elle — кейпоп-айдолы регулярно появляются в топовых fashion-изданиях.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🎪</div>
                <h3 className="text-xl font-bold mb-3">Fashion Week</h3>
                <p className="text-muted-foreground text-sm">
                  Айдолы — частые гости на показах в Париже, Милане, Нью-Йорке и Сеуле, сидят в первых рядах.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Влияние на индустрию</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-muted-foreground leading-relaxed text-center">
                Кейпоп-айдолы изменили подход модных брендов к азиатскому рынку. Их влияние настолько велико, 
                что одна фотография с продуктом может вызвать мгновенный sold-out эффект.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} className="text-primary" />
                    Экономический эффект
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Одно упоминание бренда айдолом может увеличить продажи на сотни процентов. "Jennie effect" — реальный термин в индустрии.
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Globe" size={20} className="text-secondary" />
                    Глобальное признание
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Люксовые бренды активно сотрудничают с кейпоп-звёздами для выхода на молодую азиатскую и мировую аудиторию.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
