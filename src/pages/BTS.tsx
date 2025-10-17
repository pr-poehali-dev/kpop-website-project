import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function BTS() {
  const members = [
    { name: 'RM', role: 'Лидер, рэпер', birth: '1994' },
    { name: 'Jin', role: 'Вокалист', birth: '1992' },
    { name: 'SUGA', role: 'Рэпер', birth: '1993' },
    { name: 'J-Hope', role: 'Рэпер, танцор', birth: '1994' },
    { name: 'Jimin', role: 'Вокалист, танцор', birth: '1995' },
    { name: 'V', role: 'Вокалист', birth: '1995' },
    { name: 'Jungkook', role: 'Главный вокалист', birth: '1997' },
  ];

  const achievements = [
    { icon: 'Trophy', text: 'Первая кейпоп-группа с #1 на Billboard Hot 100' },
    { icon: 'Award', text: 'Номинация на Grammy Awards' },
    { icon: 'Users', text: 'Более 60 млн подписчиков в соцсетях' },
    { icon: 'Globe', text: 'Выступления на стадионах по всему миру' },
    { icon: 'Music', text: 'Множественные рекорды на YouTube и Spotify' },
    { icon: 'Heart', text: 'Посланники ЮНИСЕФ и защитники молодёжи' },
  ];

  const discography = [
    { year: '2013', album: '2 Cool 4 Skool', type: 'Дебют' },
    { year: '2016', album: 'WINGS', type: 'Прорыв' },
    { year: '2018', album: 'Love Yourself: Answer', type: 'Мировое признание' },
    { year: '2020', album: 'Map of the Soul: 7', type: 'Рекордный альбом' },
    { year: '2020', album: 'BE', type: 'Pandemic era' },
    { year: '2022', album: 'Proof', type: 'Антология' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              BTS (방탄소년단)
            </h1>
            <p className="text-2xl text-muted-foreground mb-4">
              Bangtan Sonyeondan • Bulletproof Boy Scouts
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 rounded-full bg-primary/20 text-primary font-medium">HYBE Corporation</span>
              <span className="px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium">Дебют: 13 июня 2013</span>
              <span className="px-4 py-2 rounded-full bg-accent/20 text-accent font-medium">Фэндом: ARMY</span>
            </div>
          </div>

          <div className="mb-20 rounded-2xl overflow-hidden animate-fade-in">
            <img 
              src="https://axrmijgrzfcldauydtra.supabase.co/storage/v1/object/public/files/bts-group-image.png" 
              alt="BTS"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div className="max-w-4xl mx-auto mb-20 animate-fade-in">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 gradient-text">О группе</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  BTS — южнокорейский бойз-бэнд, образованный в 2010 году компанией Big Hit Entertainment (ныне HYBE). 
                  Группа состоит из семи участников: RM, Jin, SUGA, J-Hope, Jimin, V и Jungkook.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Их музыка изначально была сосредоточена на социальных комментариях, критике системы образования и 
                  проблемах подростков. Со временем тематика расширилась до вопросов самопринятия, индивидуализма и 
                  ментального здоровья.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  BTS стали первой кейпоп-группой, возглавившей Billboard Hot 100, выступили на Grammy Awards и 
                  установили множество рекордов. Они признаны важнейшими культурными послами Южной Кореи.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 text-center gradient-text">Участники</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {members.map((member, index) => (
                <Card key={index} className="bg-card border-border hover:neon-border hover-scale transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                      {member.name.charAt(0)}
                    </div>
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
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon name={achievement.icon} size={24} className="text-primary" />
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
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{album.album}</h3>
                      <p className="text-sm text-muted-foreground">{album.type}</p>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold">
                      {album.year}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Популярные треки</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {['Dynamite', 'Butter', 'Boy With Luv', 'DNA', 'IDOL', 'Blood Sweat & Tears', 'Spring Day', 'Fake Love', 'ON'].map((track, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                  <Icon name="Music" size={20} className="text-primary" />
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
