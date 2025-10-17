import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">🎵</div>
              <span className="text-xl font-bold gradient-text">K-POP</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Всё о корейской поп-музыке: история, группы, культура и индустрия
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Разделы</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/history" className="hover:text-primary transition-colors">История кейпоп</Link>
              <Link to="/agencies" className="hover:text-primary transition-colors">Агентства</Link>
              <Link to="/groups" className="hover:text-primary transition-colors">Группы</Link>
              <Link to="/glossary" className="hover:text-primary transition-colors">Глоссарий</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Следите за нами</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Music" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Heart" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Star" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 K-POP Portal. Создано с любовью к корейской музыке</p>
        </div>
      </div>
    </footer>
  );
}
