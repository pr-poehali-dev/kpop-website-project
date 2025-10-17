import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Agencies() {
  const agencies = [
    {
      name: 'SM Entertainment',
      founded: '1995',
      founder: 'Ли Су Ман',
      artists: ['EXO', 'NCT', 'aespa', 'Red Velvet', 'SHINee'],
      description: 'Пионер современной кейпоп-индустрии. Известна системой обучения артистов и инновационными концепциями.',
      icon: 'Star',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'YG Entertainment',
      founded: '1996',
      founder: 'Ян Хён Сок',
      artists: ['BLACKPINK', 'TREASURE', 'WINNER', 'AKMU'],
      description: 'Фокус на хип-хоп и R&B стиле. Создатели мировых звёзд BLACKPINK и Big Bang.',
      icon: 'Music',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'HYBE Corporation',
      founded: '2005',
      founder: 'Пан Си Хёк',
      artists: ['BTS', 'SEVENTEEN', 'NewJeans', 'LE SSERAFIM', 'TXT'],
      description: 'Крупнейшее агентство после успеха BTS. Владеет множеством лейблов и инновационной платформой Weverse.',
      icon: 'Trophy',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'JYP Entertainment',
      founded: '1997',
      founder: 'Пак Чин Ён',
      artists: ['TWICE', 'Stray Kids', 'ITZY', 'NiziU'],
      description: 'Известна органичным вокалом и естественным имиджем артистов. Мастера создания девичьих групп.',
      icon: 'Heart',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Крупнейшие агентства
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Компании, создающие мировых звёзд кейпопа
            </p>
          </div>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {agencies.map((agency, index) => (
              <Card key={index} className="bg-card border-border hover:neon-border transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${agency.color} flex items-center justify-center`}>
                      <Icon name={agency.icon} size={32} className="text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h2 className="text-3xl font-bold mb-2">{agency.name}</h2>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span>📅 Основано: {agency.founded}</span>
                            <span>👤 Основатель: {agency.founder}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {agency.description}
                      </p>
                      
                      <div>
                        <h3 className="text-sm font-semibold mb-2 text-muted-foreground">Артисты:</h3>
                        <div className="flex flex-wrap gap-2">
                          {agency.artists.map((artist, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                              {artist}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Как работают агентства</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🔍</div>
                <h3 className="font-semibold mb-2">Кастинг</h3>
                <p className="text-sm text-muted-foreground">Поиск талантов через прослушивания и скаутинг</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="font-semibold mb-2">Обучение</h3>
                <p className="text-sm text-muted-foreground">3-7 лет тренировок: вокал, танцы, языки</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎬</div>
                <h3 className="font-semibold mb-2">Продакшн</h3>
                <p className="text-sm text-muted-foreground">Создание музыки, клипов, концепций</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="font-semibold mb-2">Продвижение</h3>
                <p className="text-sm text-muted-foreground">Маркетинг, соцсети, мировые туры</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
