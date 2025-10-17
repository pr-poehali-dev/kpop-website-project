import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function TopReleases() {
  const topReleases = [
    {
      rank: 1,
      title: 'Seven',
      artist: 'Jungkook (BTS) feat. Latto',
      releaseDate: 'Июль 2023',
      achievements: ['Billboard Hot 100 #1', '1+ млрд стримов', 'Spotify Global Top'],
      description: 'Сольный хит-прорыв Чонгука с запоминающейся мелодией и международным звучанием',
      genre: 'Pop, R&B',
      icon: 'Trophy'
    },
    {
      rank: 2,
      title: 'Cupid (Twin Version)',
      artist: 'FIFTY FIFTY',
      releaseDate: 'Февраль 2023',
      achievements: ['Вирусный TikTok хит', 'Billboard Hot 100 Top 20', 'Melon Top 10'],
      description: 'Неожиданный вирусный хит от новой группы, покоривший TikTok и мировые чарты',
      genre: 'Pop, Dance',
      icon: 'Heart'
    },
    {
      rank: 3,
      title: 'OMG',
      artist: 'NewJeans',
      releaseDate: 'Январь 2023',
      achievements: ['Perfect All-Kill', '100+ млн YouTube за неделю', 'Melon #1'],
      description: 'Ретро-поп хит с Y2K эстетикой от самой актуальной новой группы',
      genre: 'Pop, R&B',
      icon: 'Sparkles'
    },
    {
      rank: 4,
      title: 'UNFORGIVEN',
      artist: 'LE SSERAFIM feat. Nile Rodgers',
      releaseDate: 'Май 2023',
      achievements: ['YouTube Music Awards номинация', 'Billboard 200 Top 10', '200M+ YouTube'],
      description: 'Мощный возврат с guitar-driven звучанием и коллаборацией с легендой диско',
      genre: 'Pop-Rock, Dance',
      icon: 'Flame'
    },
    {
      rank: 5,
      title: 'Queencard',
      artist: '(G)I-DLE',
      releaseDate: 'Май 2023',
      achievements: ['Music Bank Triple Crown', 'Melon Top 5', 'Viral Dance Challenge'],
      description: 'Уверенный трек о самопринятии с запоминающейся хореографией',
      genre: 'Pop, Hip-hop',
      icon: 'Crown'
    }
  ];

  const honorableMentions = [
    { title: 'Flowers', artist: 'Jisoo (BLACKPINK)', impact: 'Дебютный сольник с рекордными продажами' },
    { title: 'ETA', artist: 'NewJeans', impact: 'B-side, ставший хитом' },
    { title: 'Super Shy', artist: 'NewJeans', impact: 'Летний хит с свежим звучанием' },
    { title: 'Angel Pt. 1', artist: 'Jimin (BTS)', impact: 'Соло дебют на Billboard 200 #2' },
    { title: 'Spicy', artist: 'aespa', impact: 'Экспериментальное EDM-звучание' },
    { title: 'Teddy Bear', artist: 'STAYC', impact: 'Эмоциональная баллада' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Топ-5 релизов 2023 года
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Самые значимые и успешные кейпоп-релизы этого года
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6 mb-20">
            {topReleases.map((release, index) => (
              <Card key={index} className="bg-card border-border hover:neon-border transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                        <div className="text-center">
                          <Icon name={release.icon} size={32} className="text-white mx-auto mb-1" />
                          <div className="text-3xl font-bold text-white">#{release.rank}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div>
                          <h2 className="text-3xl font-bold mb-1">{release.title}</h2>
                          <p className="text-lg text-muted-foreground">{release.artist}</p>
                        </div>
                        <Badge variant="secondary" className="text-sm">
                          {release.releaseDate}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {release.description}
                      </p>

                      <div className="mb-4">
                        <span className="text-sm font-semibold text-primary">{release.genre}</span>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Достижения:</h4>
                        <div className="flex flex-wrap gap-2">
                          {release.achievements.map((achievement, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                              {achievement}
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

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Почётные упоминания</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {honorableMentions.map((mention, index) => (
                <Card key={index} className="bg-card border-border hover:neon-border hover-scale transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon name="Music" size={20} className="text-secondary mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">{mention.title}</h3>
                        <p className="text-sm text-muted-foreground">{mention.artist}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{mention.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-border animate-fade-in">
              <CardContent className="p-8 text-center">
                <Icon name="TrendingUp" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Рост индустрии</h3>
                <p className="text-muted-foreground text-sm">
                  2023 год показал беспрецедентный рост кейпопа на мировых чартах
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <Icon name="Users" size={48} className="mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-bold mb-3">Новые звёзды</h3>
                <p className="text-muted-foreground text-sm">
                  Появление молодых групп, которые сразу завоёвывают мировое признание
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <Icon name="Globe" size={48} className="mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">Глобализация</h3>
                <p className="text-muted-foreground text-sm">
                  Кейпоп продолжает завоёвывать новые рынки и аудитории
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Тренды 2023 года</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Sparkles" size={20} className="text-primary" />
                  Y2K и Ретро
                </h4>
                <p className="text-sm text-muted-foreground">
                  Возвращение эстетики 2000-х годов в музыке и визуале
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Zap" size={20} className="text-secondary" />
                  Вирусные треки
                </h4>
                <p className="text-sm text-muted-foreground">
                  TikTok продолжает быть главной платформой для вирусности
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Mic2" size={20} className="text-accent" />
                  Соло карьеры
                </h4>
                <p className="text-sm text-muted-foreground">
                  Всё больше участников известных групп запускают сольные проекты
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Icon name="Users" size={20} className="text-primary" />
                  Коллаборации
                </h4>
                <p className="text-sm text-muted-foreground">
                  Международные коллаборации с западными артистами
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
