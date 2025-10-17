import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function History() {
  const timeline = [
    { year: '1990-е', title: 'Рождение жанра', description: 'Появление первых кейпоп-групп. Seo Taiji and Boys революционизируют корейскую музыку, смешивая рэп, рок и танцевальную музыку.' },
    { year: '2000-е', title: 'Формирование индустрии', description: 'Создание крупных агентств SM, YG, JYP. Выход групп первого поколения: H.O.T., S.E.S., BoA завоёвывает Азию.' },
    { year: '2009-2012', title: 'Второе поколение', description: 'Золотая эра: SNSD, Big Bang, 2NE1, Super Junior. Первые шаги к мировому признанию.' },
    { year: '2012-2018', title: 'Глобальный прорыв', description: 'Gangnam Style покоряет мир. BTS, EXO, BLACKPINK выходят на международную арену. YouTube и социальные сети катализируют распространение.' },
    { year: '2018-настоящее время', title: 'Мировое господство', description: 'BTS на Billboard, выступления на Grammy. Кейпоп становится частью мировой поп-культуры. Новые группы: Stray Kids, ITZY, NewJeans.' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              История K-POP
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              От локального феномена до мирового культурного движения
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
              
              {timeline.map((period, index) => (
                <div key={index} className="relative pl-20 pb-12 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="absolute left-4 w-8 h-8 rounded-full bg-primary border-4 border-background"></div>
                  
                  <Card className="bg-card border-border hover:neon-border transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-3">
                        {period.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{period.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{period.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Влияние на мировую культуру</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🎵</span> Музыкальная революция
                </h3>
                <p className="text-muted-foreground">
                  Кейпоп изменил представление о музыкальном продакшене, объединив визуальное искусство, танец и музыку в единое целое.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌏</span> Корейская волна
                </h3>
                <p className="text-muted-foreground">
                  Hallyu (Корейская волна) распространила корейскую культуру, язык и моду по всему миру через музыку.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">💬</span> Социальные медиа
                </h3>
                <p className="text-muted-foreground">
                  Кейпоп-индустрия первой освоила потенциал YouTube, Twitter и TikTok для глобального продвижения.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🤝</span> Глобальное сообщество
                </h3>
                <p className="text-muted-foreground">
                  Фэндомы объединяют миллионы людей разных культур, создавая уникальное международное сообщество.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
