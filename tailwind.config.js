module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      height: {
        100: '100px',
        150: '150px',
        200: '200px',
        480: '480px',
        400: '400px',
        450: '450px',
        350: '350px',
        650: '650px',
        '3/10': '30%',
        "3.5": '3.5rem',
      },
      maxHeight: {
        modal: 'calc(100vh - 4rem)',
      },
      minWidth: {
        500: '500px',
      },
      width: {
        300: '300px',
        350: '350px',
        400: '400px',
        450: '450px',
        500: '500px',
        550: '550px',
        600: '600px',
        650: '650px',
      },
      colors: {
        "light-gray": 'rgb(51,51,51)',
        "thin-gray": 'rgb(54,54,54)',
        "dark-gray": 'rgb(40,40,40)',
        "dirty-white": 'rgb(123,123,123)',
        "dirt-white": 'rgb(112,112,112)',
        "transparent-bg": "rgba(0,0,0,0.3)",
      },
      zIndex: {
        1: '1',
        2: '2',
        "-1": '-1',
      },
    },
  },
  variants: {},
  plugins: [],
};
