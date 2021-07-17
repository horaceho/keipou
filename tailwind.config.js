module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'xiang': "url('/src/assets/xiang.svg')",
        'board': "url('/src/assets/board.svg')",
        'notion-b': "url('/src/assets/notion-b.svg')",
        'notion-r': "url('/src/assets/notion-r.svg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
