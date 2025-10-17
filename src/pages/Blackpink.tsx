import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Blackpink() {
  const members = [
    { name: 'Jisoo', role: 'Вокалистка, визуал', birth: '1995', flag: '🇰🇷' },
    { name: 'Jennie', role: 'Рэпер, вокалистка', birth: '1996', flag: '🇰🇷' },
    { name: 'Rosé', role: 'Главная вокалистка', birth: '1997', flag: '🇰🇷🇦🇺' },
    { name: 'Lisa', role: 'Главная танцовщица, рэпер', birth: '1997', flag: '🇹🇭' },
  ];

  const achievements = [
    { icon: 'Youtube', text: 'Самый популярный музыкальный канал на YouTube' },
    { icon: 'Award', text: 'Первая женская кейпоп-группа на Coachella' },
    { icon: 'TrendingUp', text: 'Миллиарды стриминговых прослушиваний' },
    { icon: 'Globe', text: 'Мировые туры с sold-out концертами' },
    { icon: 'Users', text: 'Более 90 млн подписчиков в Instagram' },
    { icon: 'Star', text: 'Амбассадоры мировых люксовых брендов' },
  ];

  const discography = [
    { year: '2016', album: 'Square One', tracks: ['Whistle', 'Boombayah'] },
    { year: '2018', album: 'Square Up', tracks: ['DDU-DU DDU-DU', 'Forever Young'] },
    { year: '2019', album: 'Kill This Love', tracks: ['Kill This Love', "Don't Know What To Do"] },
    { year: '2020', album: 'The Album', tracks: ['How You Like That', 'Lovesick Girls', 'Ice Cream'] },
    { year: '2022', album: 'Born Pink', tracks: ['Pink Venom', 'Shut Down'] },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              BLACKPINK (블랙핑크)
            </h1>
            <p className="text-2xl text-muted-foreground mb-4">
              The Revolution • In Your Area
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 rounded-full bg-primary/20 text-primary font-medium">YG Entertainment</span>
              <span className="px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium">Дебют: 8 августа 2016</span>
              <span className="px-4 py-2 rounded-full bg-accent/20 text-accent font-medium">Фэндом: BLINK</span>
            </div>
          </div>

          <div className="mb-20 rounded-2xl overflow-hidden animate-fade-in">
            <img 
              src="https://axrmijgrzfcldauydtra.supabase.co/storage/v1/object/public/files/blackpink-group-image.png" 
              alt="BLACKPINK"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 gradient-text">О группе</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  BLACKPINK — южнокорейская женская группа, сформированная YG Entertainment. Состоит из четырёх участниц: 
                  Jisoo, Jennie, Rosé и Lisa. Группа дебютировала 8 августа 2016 года с синглом "Square One".
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  BLACKPINK стали самой популярной женской кейпоп-группой в мире. Их музыкальные видео бьют рекорды 
                  просмотров на YouTube — "DDU-DU DDU-DU" стал первым клипом кейпоп-группы с более чем 2 миллиардами 
                  просмотров.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Помимо музыки, участницы активно работают в модной индустрии, являясь глобальными амбассадорами 
                  таких брендов как Chanel, Dior, Celine и Bulgari. В 2023 году каждая участница также развивает 
                  сольную карьеру.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Участницы</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {members.map((member, index) => (
                <Card key={index} className="bg-card border-border hover:neon-border hover-scale transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent mx-auto mb-4 flex items-center justify-center text-3xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                    <div className="text-2xl mb-2">{member.flag}</div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.birth}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Достижения</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-card border-border hover:neon-border transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Icon name={achievement.icon} size={24} className="text-secondary" />
                    </div>
                    <p className="text-muted-foreground pt-2">{achievement.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Дискография</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {discography.map((album, index) => (
                <Card key={index} className="bg-card border-border hover:neon-border transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{album.album}</h3>
                      <div className="px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold">
                        {album.year}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {album.tracks.map((track, i) => (
                        <span key={i} className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground">
                          {track}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-border animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Fashion Icons</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Sparkles" size={20} className="text-secondary" />
                    <span>Jisoo — Dior</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Sparkles" size={20} className="text-secondary" />
                    <span>Jennie — Chanel</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Sparkles" size={20} className="text-secondary" />
                    <span>Rosé — Saint Laurent</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Sparkles" size={20} className="text-secondary" />
                    <span>Lisa — Celine, Bulgari</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-border animate-fade-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Рекорды</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>🎬 Самые просматриваемые клипы кейпоп-группы</p>
                  <p>📱 90+ млн подписчиков в Instagram</p>
                  <p>🎵 Миллиарды стримов на Spotify</p>
                  <p>🌍 Первый кейпоп-хедлайнер Coachella</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Хиты</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {['DDU-DU DDU-DU', 'Kill This Love', 'How You Like That', 'Lovesick Girls', 'Pink Venom', 'Shut Down', 'Boombayah', 'As If It\'s Your Last', 'Ice Cream'].map((track, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-secondary transition-colors">
                  <Icon name="Music" size={20} className="text-secondary" />
                  <span className="font-medium">{track}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
