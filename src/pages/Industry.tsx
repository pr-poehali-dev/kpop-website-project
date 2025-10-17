import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Industry() {
  const industryFeatures = [
    {
      icon: 'GraduationCap',
      title: 'Система тренировок',
      description: 'Будущие айдолы проходят 3-7 лет интенсивного обучения: вокал, танцы, рэп, актёрское мастерство, языки и даже этикет.',
      points: ['Вокальные техники', 'Хореография', 'Иностранные языки', 'Медиа-тренинги']
    },
    {
      icon: 'Users',
      title: 'Формирование групп',
      description: 'Агентства тщательно подбирают состав: визуалы, вокалисты, рэперы, танцоры. Каждый участник имеет свою роль.',
      points: ['Лидер группы', 'Главный вокалист', 'Главный танцор', 'Визуал', 'Макнэ (младший)']
    },
    {
      icon: 'Music',
      title: 'Продакшн',
      description: 'Создание музыки мирового уровня с участием топовых продюсеров, авторов песен и звукорежиссёров.',
      points: ['Написание песен', 'Аранжировка', 'Запись в студии', 'Микс и мастеринг']
    },
    {
      icon: 'Video',
      title: 'Визуальный контент',
      description: 'Многомиллионные бюджеты на клипы, которые больше похожи на короткометражные фильмы с сюжетом и CGI.',
      points: ['Концепция и сценарий', 'Профессиональные съёмки', 'Спецэффекты', 'Цветокоррекция']
    },
    {
      icon: 'TrendingUp',
      title: 'Маркетинг',
      description: 'Комплексная стратегия продвижения через социальные сети, реалити-шоу, рекламу и коллаборации.',
      points: ['Тизеры и тизер-графики', 'V-Live трансляции', 'Реалити-шоу', 'Коллаборации с брендами']
    },
    {
      icon: 'Globe',
      title: 'Глобальная экспансия',
      description: 'Выход на международные рынки через мировые туры, локализацию контента и партнёрства.',
      points: ['Мировые туры', 'Локальные промо', 'Субтитры на разных языках', 'Коллаборации с артистами']
    }
  ];

  const revenue = [
    { source: 'Продажи альбомов', icon: 'ShoppingBag', percentage: '30%' },
    { source: 'Концерты и туры', icon: 'Mic2', percentage: '35%' },
    { source: 'Мерчандайз', icon: 'Shirt', percentage: '15%' },
    { source: 'Реклама и эндорсмент', icon: 'DollarSign', percentage: '20%' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Особенности индустрии
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Как работает машина по созданию мировых звёзд
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Уникальная бизнес-модель</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Кейпоп-индустрия — это высокоорганизованная система, где крупные агентства контролируют все аспекты 
                  карьеры артистов: от обучения до продвижения. В отличие от западной модели, где артисты часто 
                  работают с разными компаниями, кейпоп-айдолы получают комплексную поддержку от одного агентства.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Агентства инвестируют миллионы в обучение и продвижение, ожидая возврата инвестиций через альбомы, 
                  концерты, рекламу и мерчандайз. Это создаёт продукт высочайшего качества, но также требует от 
                  артистов многолетних контрактов и жёсткой дисциплины.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Этапы создания групп</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryFeatures.map((feature, index) => (
                <Card key={index} className="bg-card border-border hover:neon-border transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon name={feature.icon} size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.points.map((point, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Источники дохода</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {revenue.map((item, index) => (
                <Card key={index} className="bg-card border-border hover:neon-border hover-scale transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent mx-auto mb-4 flex items-center justify-center">
                      <Icon name={item.icon} size={28} className="text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.source}</h3>
                    <div className="text-3xl font-bold gradient-text">{item.percentage}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-border animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} />
                  Преимущества системы
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Профессиональное обучение и подготовка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Высокое качество продукции</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Комплексная поддержка карьеры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">Глобальное продвижение</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-border animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text flex items-center gap-2">
                  <Icon name="AlertCircle" size={24} />
                  Вызовы и критика
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">!</span>
                    <span className="text-muted-foreground">Жёсткие контракты и долгие сроки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">!</span>
                    <span className="text-muted-foreground">Интенсивный график и давление</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">!</span>
                    <span className="text-muted-foreground">Ограничения личной жизни</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">!</span>
                    <span className="text-muted-foreground">Вопросы ментального здоровья</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Будущее индустрии</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="font-semibold mb-2">Технологии</h3>
                <p className="text-sm text-muted-foreground">AI-айдолы, виртуальные концерты, метавселенные</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌏</div>
                <h3 className="font-semibold mb-2">Глобализация</h3>
                <p className="text-sm text-muted-foreground">Расширение на новые рынки и международные коллаборации</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎭</div>
                <h3 className="font-semibold mb-2">Диверсификация</h3>
                <p className="text-sm text-muted-foreground">Актёрство, мода, продюсирование, бизнес</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
