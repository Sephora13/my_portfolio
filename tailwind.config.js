/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #e7ded9, #ffffff)',
      },
      keyframes: {
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'scaleY(0)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'fade-down': 'fade-down 1s ease-out',
        'fade-up': 'fade-up 1s ease-out',
      },
      colors: {
        'regal-blue': '#1368b2',
        'first':'#de6403',
        'second':'#642c00',
        'third':'#f0f1f2',
        'couleur-fond':'#e7ded9', 
        'couleur-secondaire':'#ffffff',
        'couleur-text':'#1e3c42',
        'third-color':'#f5b6a7',
        'azur-grisé':'#6b8791'
      },
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
