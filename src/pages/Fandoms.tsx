import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Fandoms() {
  const famousFandoms = [
    { group: 'BTS', fandom: 'ARMY', color: 'from-purple-500 to-purple-700', meaning: 'Adorable Representative M.C. for Youth' },
    { group: 'BLACKPINK', fandom: 'BLINK', color: 'from-pink-500 to-pink-700', meaning: 'Сочетание Black и Pink' },
    { group: 'EXO', fandom: 'EXO-L', color: 'from-blue-500 to-blue-700', meaning: 'EXO-Love' },
    { group: 'TWICE', fandom: 'ONCE', color: 'from-orange-500 to-orange-700', meaning: 'Стоит полюбить раз — и навсегда' },
    { group: 'Stray Kids', fandom: 'STAY', color: 'from-yellow-500 to-yellow-700', meaning: 'Stray Kids и фанаты всегда вместе' },
    { group: 'SEVENTEEN', fandom: 'CARAT', color: 'from-cyan-500 to-cyan-700', meaning: 'Сверкающий бриллиант' },
  ];

  const fandomActivities = [
    { 
      icon: 'Heart', 
      title: 'Массовые покупки', 
      description: 'Организованные покупки альбомов и мерча для поддержки чартов и продаж' 
    },
    { 
      icon: 'Music', 
      title: 'Стриминг', 
      description: 'Координированное прослушивание на Spotify, YouTube, Melon для рекордов' 
    },
    { 
      icon: 'Tv', 
      title: 'Голосования', 
      description: 'Активное участие в музыкальных шоу и наградах для победы любимых групп' 
    },
    { 
      icon: 'Gift', 
      title: 'Проекты для айдолов', 
      description: 'Организация подарков, билбордов, благотворительности от имени группы' 
    },
    { 
      icon: 'MessageCircle', 
      title: 'Онлайн-сообщества', 
      description: 'Twitter, Discord, Weverse — платформы для общения и координации' 
    },
    { 
      icon: 'Camera', 
      title: 'Контент', 
      description: 'Создание фанартов, видео, переводов, фотографий с концертов' 
    },
  ];

  const fandomCulture = [
    { term: 'Lightstick', description: 'Официальная светящаяся палочка группы — символ фэндома на концертах' },
    { term: 'Photocard', description: 'Коллекционные фотокарточки участников, вложенные в альбомы' },
    { term: 'Bias', description: 'Любимый участник группы' },
    { term: 'Comeback', description: 'Возвращение группы с новым альбомом или синглом' },
    { term: 'Fan chant', description: 'Организованные кричалки фанатов во время песен' },
    { term: 'Streaming party', description: 'Совместное массовое прослушивание новых релизов' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Культура фэндомов
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Уникальное сообщество фанатов, создающее культурный феномен
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Что такое фэндом?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Кейпоп-фэндомы — это организованные сообщества фанатов с официальными названиями, цветами и символами. 
                  Это не просто зрители, а активные участники успеха группы.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Фэндомы координируют действия через социальные сети, участвуют в голосованиях, организуют массовые 
                  покупки и стриминг, создают контент и даже занимаются благотворительностью от имени любимых групп.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Знаменитые фэндомы</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {famousFandoms.map((fandom, index) => (
                <Card key={index} className="bg-card border-border hover:neon-border hover-scale transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className={`w-full h-20 rounded-lg bg-gradient-to-r ${fandom.color} mb-4 flex items-center justify-center`}>
                      <span className="text-white text-2xl font-bold">{fandom.fandom}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{fandom.group}</h3>
                    <p className="text-sm text-muted-foreground">{fandom.meaning}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Активности фэндомов</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fandomActivities.map((activity, index) => (
                <Card key={index} className="bg-card border-border hover:neon-border transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon name={activity.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Термины фэндомов</h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {fandomCulture.map((item, index) => (
                <Card key={index} className="bg-card border-border hover:neon-border transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-2 text-primary">{item.term}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-border animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-3">Глобальность</h3>
                <p className="text-muted-foreground">
                  Фэндомы объединяют миллионы людей из разных стран, культур и языков
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">💪</div>
                <h3 className="text-2xl font-bold mb-3">Сила</h3>
                <p className="text-muted-foreground">
                  Организованные фэндомы способны влиять на чарты и создавать тренды
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold mb-3">Преданность</h3>
                <p className="text-muted-foreground">
                  Многолетняя поддержка групп через все взлёты и падения
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Благотворительность</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground leading-relaxed text-center mb-8">
                Кейпоп-фэндомы известны активной благотворительностью. Они организуют сборы средств, 
                высаживают леса, жертвуют на образование и медицину от имени любимых групп.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">🌳</span> Экология
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    ARMY посадили более миллиона деревьев в честь дней рождения участников BTS
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-2xl">📚</span> Образование
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Фэндомы финансируют стипендии и строительство школ в развивающихся странах
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
