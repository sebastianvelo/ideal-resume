import LanguageSelector from "./actions/LanguageSelector";
import ThemeToggleButton from "./actions/ThemeToggleButton";

const Header: React.FC = () => {
  return (
    <header className="lg:px-12 flex justify-between items-center fixed top-0 z-50 backdrop-blur-xl w-full py-2 px-3 bg-secondary-50/50 text-secondary-900 dark:bg-secondary-950/70 dark:text-secondary-100 border-b border-secondary-900/20 dark:border-secondary-500/20 h-16">
      <div className="flex group">
        <h1 className="text-xl md:text-2xl font-bold group-hover:tracking-tight transition-all duration-300 text-primary-900 dark:text-primary-100 font-stoke">Ide</h1>
        <h1 className="text-xl md:text-2xl font-bold group-hover:tracking-wider transition-all duration-300 text-primary-900 dark:text-primary-100 font-stoke">alRes</h1>
        <h1 className="text-xl md:text-2xl font-bold group-hover:tracking-tight transition-all duration-300 text-primary-900 dark:text-primary-100 font-stoke">ume</h1>
      </div>
      <div className="space-x-4 flex items-center justify-center">
        <LanguageSelector />
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
