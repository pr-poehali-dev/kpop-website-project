import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Groups() {
  const groups = [
    {
      name: 'BTS',
      agency: 'HYBE',
      debut: '2013',
      members: 7,
      fandom: 'ARMY',
      description: 'Глобальные суперзвёзды, первая кейпоп-группа с #1 на Billboard Hot 100',
      link: '/bts',
      genre: 'Hip-hop, R&B, Pop'
    },
    {
      name: 'BLACKPINK',
      agency: 'YG',
      debut: '2016',
      members: 4,
      fandom: 'BLINK',
      description: 'Самая популярная женская группа в мире, королевы YouTube',
      link: '/blackpink',
      genre: 'Pop, Hip-hop, EDM'
    },
    {
      name: 'TWICE',
      agency: 'JYP',
      debut: '2015',
      members: 9,
      fandom: 'ONCE',
      description: 'Мастера запоминающихся мелодий и ярких концепций',
      link: '#',
      genre: 'Pop, Dance'
    },
    {
      name: 'EXO',
      agency: 'SM',
      debut: '2012',
      members: 9,
      fandom: 'EXO-L',
      description: 'Вокальные короли, известны мощными перформансами',
      link: '#',
      genre: 'Pop, R&B, Dance'
    },
    {
      name: 'Stray Kids',
      agency: 'JYP',
      debut: '2018',
      members: 8,
      fandom: 'STAY',
      description: 'Самопродюсируемая группа с уникальным звучанием',
      link: '#',
      genre: 'Hip-hop, EDM, Rock'
    },
    {
      name: 'SEVENTEEN',
      agency: 'HYBE',
      debut: '2015',
      members: 13,
      fandom: 'CARAT',
      description: 'Самопродюсируемые идолы с идеальной хореографией',
      link: '#',
      genre: 'Pop, Hip-hop'
    },
    {
      name: 'NewJeans',
      agency: 'HYBE',
      debut: '2022',
      members: 5,
      fandom: 'Bunnies',
      description: 'Свежий Y2K стиль, новое поколение кейпопа',
      link: '#',
      genre: 'R&B, Pop, Dance'
    },
    {
      name: 'aespa',
      agency: 'SM',
      debut: '2020',
      members: 4,
      fandom: 'MY',
      description: 'Футуристическая концепция с AI-аватарами',
      link: '#',
      genre: 'Pop, Hip-hop, Dance'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Знаменитые группы
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Артисты, покорившие мировые чарты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group, index) => (
              <Link key={index} to={group.link}>
                <Card className="bg-card border-border hover:neon-border hover-scale transition-all duration-300 h-full animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold mb-2">{group.name}</h2>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Icon name="Building2" size={14} />
                        <span>{group.agency}</span>
                        <span>•</span>
                        <span>Дебют: {group.debut}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {group.description}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={16} className="text-primary" />
                        <span className="text-muted-foreground">Участников: {group.members}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Heart" size={16} className="text-secondary" />
                        <span className="text-muted-foreground">Фэндом: {group.fandom}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Music" size={16} className="text-accent" />
                        <span className="text-muted-foreground">{group.genre}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Что делает группу успешной?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl mb-3">🎤</div>
                <h3 className="text-xl font-semibold mb-2">Таланты</h3>
                <p className="text-muted-foreground">Вокал, танцы и рэп на высшем уровне</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Концепция</h3>
                <p className="text-muted-foreground">Уникальный стиль и визуальная идентичность</p>
              </div>
              <div>
                <div className="text-3xl mb-3">💫</div>
                <h3 className="text-xl font-semibold mb-2">Харизма</h3>
                <p className="text-muted-foreground">Связь с фанатами и сценическое присутствие</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
