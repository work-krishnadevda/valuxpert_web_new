export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '1.5rem',
            screens: {
                lg: '1240px',
            },
        },
        extend: {
            colors: {
                // ValuXpert editorial palette — warm ivory, soft lavender, deep
                // charcoal. Token names are preserved from the previous system so
                // every section that already consumes surface/brand/ink/accent
                // automatically inherits the new theme.
                surface: {
                    light1: '#F7F5F2', // Warm Ivory
                    light2: '#ECE8FA', // Light Lilac
                    dark1: '#1E1E1E', // Deep Charcoal
                    dark2: '#141414', // Charcoal, one step darker (cards on dark sections)
                },
                brand: {
                    400: '#B7ABEA', // Lavender, lifted for dark backgrounds
                    500: '#8B7CDA', // Core lavender accent
                    600: '#6B59C4', // Deeper lavender for text-on-light
                },
                ink: {
                    light: '#1E1E1E', // Deep Charcoal
                    dark: '#F7F5F2', // Warm Ivory (text on dark)
                    muted: '#7A7A7A', // Warm Gray
                },
                accent: {
                    action: '#8B7CDA',
                    actionDark: '#6B59C4',
                },
                signal: {
                    negative: '#C4574C',
                    positive: '#6B59C4',
                },
                lilac: '#ECE8FA',
                lavender: '#D8D0F0',
                ivory: '#F7F5F2',
                charcoal: '#1E1E1E',
            },
            fontFamily: {
                display: ['"Fraunces"', '"Playfair Display"', 'serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            fontSize: {
                h1: ['clamp(2.75rem, 2rem + 3.2vw, 5.25rem)', { lineHeight: '1.02', letterSpacing: '-0.01em', fontWeight: '600' }],
                h2: ['clamp(2rem, 1.5rem + 1.8vw, 3.125rem)', { lineHeight: '1.08', letterSpacing: '-0.01em', fontWeight: '600' }],
                h3: ['1.375rem', { lineHeight: '1.3', fontWeight: '600' }],
                body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
                nav: ['0.875rem', { lineHeight: '1', fontWeight: '500' }],
                eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.08em', fontWeight: '600' }],
                metric: ['clamp(2rem, 1.6rem + 1.2vw, 2.75rem)', { lineHeight: '1', letterSpacing: '-0.015em', fontWeight: '700' }],
            },
            borderRadius: {
                card: '28px',
                cell: '20px',
                control: '14px',
                pill: '999px',
            },
            boxShadow: {
                light: '0 24px 48px -24px rgba(30,30,30,0.16)',
                glow: '0 0 32px 0 rgba(139,124,218,0.28)',
                nav: '0 8px 30px -12px rgba(30,30,30,0.16)',
                'glow-amber': '0 0 40px 0 rgba(139,124,218,0.3)',
            },
            maxWidth: {
                content: '1240px',
            },
            transitionTimingFunction: {
                premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
        },
    },
    plugins: [],
};
