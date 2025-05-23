const defaultColors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin');

module.exports = {
    darkMode: 'class',
    content: [
        './src/**/*.{js,ts,jsx,tsx,json}',
        './public/index.html',
    ],
    theme: {
        extend: {
            colors: {
                primary: defaultColors.blue,
                secondary: defaultColors.slate,
                accent: defaultColors.blue
            },
            fontFamily: {
                stoke: ['Stoke', 'serif'],
            }
        },
    },
    plugins: [
        plugin(function ({ addUtilities, theme }) {
            addUtilities({
                '.scrollbar': {
                    '&::-webkit-scrollbar': {
                        width: theme('spacing.1'),
                        height: theme('spacing.1'),
                    },
                    '&::-webkit-scrollbar-track': {
                        borderRadius: theme('borderRadius.full'),
                        backgroundColor: theme('colors.primary.100'),
                    },
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: theme('borderRadius.full'),
                        backgroundColor: theme('colors.primary.300'),
                    },
                },
                '.dark .scrollbar::-webkit-scrollbar-track': {
                    backgroundColor: theme('colors.primary.950'),
                },
                '.dark .scrollbar::-webkit-scrollbar-thumb': {
                    backgroundColor: theme('colors.primary.900'),
                },
            }, ['responsive']);
        }),
    ],
}