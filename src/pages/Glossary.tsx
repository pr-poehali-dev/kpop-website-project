import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');

  const glossaryTerms = [
    { term: 'Айдол (Idol)', definition: 'Кейпоп-артист, обученный агентством и работающий по контракту' },
    { term: 'Дебют (Debut)', definition: 'Официальный выход группы или сольного артиста с первым релизом' },
    { term: 'Камбэк (Comeback)', definition: 'Возвращение артиста или группы с новым альбомом после перерыва' },
    { term: 'Биас (Bias)', definition: 'Любимый участник группы у конкретного фаната' },
    { term: 'Макнэ (Maknae)', definition: 'Самый младший участник группы' },
    { term: 'Хён (Hyung/Oppa)', definition: 'Обращение младшего к старшему мужчине (хён для парней, оппа для девушек)' },
    { term: 'Нуна/Онни (Noona/Unnie)', definition: 'Обращение к старшей сестре (нуна от парней, онни от девушек)' },
    { term: 'Лайтстик (Lightstick)', definition: 'Официальная светящаяся палочка группы для концертов' },
    { term: 'Фотокарточка (Photocard)', definition: 'Коллекционная фотография участника, вложенная в альбом' },
    { term: 'Фанчант (Fan chant)', definition: 'Организованные кричалки фанатов во время песен' },
    { term: 'Линия (Line)', definition: 'Группа участников с определённой ролью: вокальная, рэп, танцевальная, визуал' },
    { term: 'Центр (Center)', definition: 'Участник, который стоит в центре во время хореографии' },
    { term: 'Визуал (Visual)', definition: 'Официально назначенный самый привлекательный участник группы' },
    { term: 'Лидер (Leader)', definition: 'Официальный лидер группы, представитель и координатор' },
    { term: 'Мейн (Main)', definition: 'Главный в своей роли: главный вокалист, танцор, рэпер' },
    { term: 'Лид (Lead)', definition: 'Второй по мастерству после "мейна"' },
    { term: 'Саб (Sub)', definition: 'Вспомогательная позиция в группе' },
    { term: 'Олл-раундер (All-rounder)', definition: 'Участник, одинаково хорошо поющий, танцующий и читающий рэп' },
    { term: 'Трейни (Trainee)', definition: 'Стажёр агентства, готовящийся к дебюту' },
    { term: 'Дэсан (Daesang)', definition: 'Главная награда на музыкальных церемониях (Артист года, Альбом года)' },
    { term: 'Бонсан (Bonsang)', definition: 'Главная музыкальная награда (уровнем ниже Дэсана)' },
    { term: 'Пак (Pak)', definition: 'Perfect All-Kill — #1 одновременно на всех корейских чартах' },
    { term: 'Чарт (Chart)', definition: 'Музыкальный чарт: Melon, Genie, Bugs, YouTube, Spotify' },
    { term: 'Эра (Era)', definition: 'Период продвижения конкретного альбома с определённой концепцией' },
    { term: 'Концепция (Concept)', definition: 'Визуальная и музыкальная тематика альбома или эры' },
    { term: 'Тизер (Teaser)', definition: 'Короткий промо-ролик перед выходом полного клипа или альбома' },
    { term: 'MV', definition: 'Music Video — музыкальное видео' },
    { term: 'MV Teaser', definition: 'Короткий отрывок из будущего клипа для создания интриги' },
    { term: 'Album Preview', definition: 'Предварительное прослушивание отрывков из всех треков альбома' },
    { term: 'Highlight Medley', definition: 'Видео с отрывками всех песен альбома' },
    { term: 'B-side', definition: 'Песня из альбома, не являющаяся главным синглом' },
    { term: 'Title Track', definition: 'Главная песня альбома, которая активно продвигается' },
    { term: 'Pre-release', definition: 'Песня, выпущенная до релиза полного альбома' },
    { term: 'Дигипак (Digipack)', definition: 'Компактная картонная упаковка для альбома' },
    { term: 'Джуэл кейс (Jewel case)', definition: 'Прозрачная пластиковая коробка для CD' },
    { term: 'Мини-альбом (Mini Album/EP)', definition: 'Альбом с 4-6 треками' },
    { term: 'Фулл альбом (Full Album)', definition: 'Полноценный альбом с 8+ треками' },
    { term: 'Сингл (Single Album)', definition: 'Релиз с 1-3 треками' },
    { term: 'Ремикс (Remix)', definition: 'Альтернативная аранжировка существующей песни' },
    { term: 'Кавер (Cover)', definition: 'Исполнение чужой песни' },
    { term: 'Юнит (Unit)', definition: 'Подгруппа из нескольких участников большой группы' },
    { term: 'Саб-юнит (Sub-unit)', definition: 'Временная подгруппа для отдельного проекта' },
    { term: 'Коллаб (Collab)', definition: 'Совместная работа артистов из разных групп' },
    { term: 'Фича (Feat./Featuring)', definition: 'Приглашённый артист на треке' },
    { term: 'Продюсер (Producer)', definition: 'Человек, создающий музыку и аранжировки' },
    { term: 'Композитор (Composer)', definition: 'Автор мелодии' },
    { term: 'Лирик (Lyricist)', definition: 'Автор текста песни' },
    { term: 'Хореограф (Choreographer)', definition: 'Постановщик танцев' },
    { term: 'Визаж (Makeup)', definition: 'Стиль макияжа, часто экспериментальный и яркий' },
    { term: 'Стайлинг (Styling)', definition: 'Подбор одежды и образов для выступлений' },
  ];

  const filteredTerms = glossaryTerms.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Глоссарий K-POP
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Словарь терминов и сленга кейпоп-индустрии
            </p>
            
            <div className="max-w-xl mx-auto relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск термина..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="mb-6 text-center text-muted-foreground">
              Найдено терминов: <span className="font-semibold text-primary">{filteredTerms.length}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {filteredTerms.map((item, index) => (
                <Card key={index} className="bg-card border-border hover:neon-border transition-all duration-300 animate-fade-in" style={{ animationDelay: `${Math.min(index * 0.05, 1)}s` }}>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold mb-2 gradient-text">{item.term}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.definition}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTerms.length === 0 && (
              <Card className="bg-card border-border">
                <CardContent className="p-12 text-center">
                  <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-xl text-muted-foreground">
                    Термин не найден. Попробуйте другой запрос.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="mt-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text">Часто используемые фразы</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-2">💜 "Stan"</h4>
                <p className="text-sm text-muted-foreground">Быть преданным фанатом группы</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-2">🔥 "Bop"</h4>
                <p className="text-sm text-muted-foreground">Отличная, запоминающаяся песня</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-2">👑 "King/Queen"</h4>
                <p className="text-sm text-muted-foreground">Восхищение талантом артиста</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-2">😭 "I'm crying"</h4>
                <p className="text-sm text-muted-foreground">Эмоциональная реакция на контент</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-2">🎯 "Serve"</h4>
                <p className="text-sm text-muted-foreground">Идеально исполнить выступление</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-2">✨ "Iconic"</h4>
                <p className="text-sm text-muted-foreground">Легендарный, запоминающийся момент</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
