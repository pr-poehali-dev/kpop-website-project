import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

export default function Index() {
  const features = [
    { icon: 'History', title: 'История кейпоп', description: 'От истоков до мировой популярности', link: '/history' },
    { icon: 'Building2', title: 'Агентства', description: 'Крупнейшие компании индустрии', link: '/agencies' },
    { icon: 'Users', title: 'Группы', description: 'Знаменитые кейпоп-коллективы', link: '/groups' },
    { icon: 'Sparkles', title: 'BTS', description: 'Глобальные суперзвёзды', link: '/bts' },
    { icon: 'Heart', title: 'BLACKPINK', description: 'Королевы кейпопа', link: '/blackpink' },
    { icon: 'Shirt', title: 'Мода', description: 'Стиль и тренды кейпопа', link: '/fashion' },
    { icon: 'MessageCircle', title: 'Фэндомы', description: 'Культура поклонников', link: '/fandoms' },
    { icon: 'TrendingUp', title: 'Индустрия', description: 'Особенности и механика', link: '/industry' },
    { icon: 'BookOpen', title: 'Глоссарий', description: 'Термины и сленг', link: '/glossary' },
    { icon: 'Trophy', title: 'Топ-5 релизов', description: 'Лучшее за этот год', link: '/top-releases' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl"></div>
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Добро пожаловать в мир K-POP
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Исследуй вселенную корейской поп-музыки: от истории до современных трендов
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/groups">
                  <Button size="lg" className="text-lg px-8">
                    <Icon name="Music" className="mr-2" size={20} />
                    Популярные группы
                  </Button>
                </Link>
                <Link to="/top-releases">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Icon name="Trophy" className="mr-2" size={20} />
                    Топ релизов
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Разделы портала
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="hover-scale cursor-pointer bg-card border-border hover:neon-border transition-all duration-300 h-full animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/20">
                        <Icon name={feature.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Почему K-POP?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
              <div className="animate-fade-in">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-xl font-semibold mb-2">Уникальная музыка</h3>
                <p className="text-muted-foreground">Смесь жанров и безупречное исполнение</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl mb-4">💃</div>
                <h3 className="text-xl font-semibold mb-2">Хореография</h3>
                <p className="text-muted-foreground">Синхронные танцы мирового уровня</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-2">Глобальность</h3>
                <p className="text-muted-foreground">Культурный феномен по всему миру</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
