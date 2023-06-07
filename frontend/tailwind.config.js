module.exports = {
  important: true,
  mode: 'jit',
  content:["./src/**/*.{js,jsx}",
           "./index.html",
          ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat'],
      },
      colors: {
        'black': '#000000',
        'light-black': '#333333',
        'white': '#ffffff',
        'orange': '#FD6531',
        'light-orange': '#FFBD59',
        'light-grey': '#D9D9D9',
        'dark-grey': '#82868C',
        'red': '#9C2800'
      },
      fontSize: {
        'heading': '2.25rem',
        'sub-heading': '1.5',
        'base': '1rem',
        'sub-body': '0.875rem',
        'caption': '0.75rem',
        'h1': '7.875rem',
        'h2': '5.125rem',
      },
    },
  },
  plugins: [],
};
