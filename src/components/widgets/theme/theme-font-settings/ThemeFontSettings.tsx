import GlassCard from "@components/ui/glass-card/GlassCard";
import ViewTitle from "@components/widgets/common/ViewTitle";
import { parseFontName } from "@components/widgets/theme/theme-font-settings/utils/utils";
import Icons from "@icons/Icons";
import { type FontName } from "@resume-api/context/resume-theme/availableFonts";
import useResumeTheme from "@resume-api/hooks/useResumeTheme";
import I18n from "@language/common/I18nKeys";

const ThemeFontSettings: React.FC = () => {
    const theme = useResumeTheme();

    const statusClassName = (font: FontName) => font === theme.font.get() ? "bg-accent-200/50 dark:bg-accent-900/50 text-accent-900 dark:text-accent-300 border-accent-900 dark:border-accent-300" : "bg-accent-200/20 dark:bg-accent-900/20"

    return (
        <GlassCard>
            <ViewTitle simple title={I18n.FORM.FONT.TITLE} subtitle={I18n.FORM.FONT.SUBTITLE} />
            <GlassCard className="mt-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 justify-between items-stretch gap-4">
                    {theme.font.available.map((font) => (
                        <button
                            onClick={() => theme.font.change(font)}
                            className={`${statusClassName(font)} cursor-pointer dark:text-white hover:bg-accent-200/50 dark:hover:bg-accent-900/50 p-2 rounded-lg transition-all duration-300 w-full`}
                            key={font}
                        >
                            <p className="text-lg" style={parseFontName(font)}>
                                {font}
                            </p>
                        </button>
                    ))}
                </div>
            </GlassCard>
            <Icons.LineSeparator />
        </GlassCard>
    );
};

export default ThemeFontSettings;