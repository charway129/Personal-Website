/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './impressum.html', './datenschutz.html'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F2EC',
        ink:   '#0A0A0A',
        tile:  '#E8E5DE',
        hair:  '#D8D4CB',
        mute:  '#7A7568',
      },
      fontFamily: {
        script:  ['Italianno', 'serif'],
        script2: ['"Pinyon Script"', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        serif:   ['"Cormorant Garamond"', 'serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        mega:  '.22em',
        ultra: '.32em',
      },
    },
  },
  plugins: [],
};
