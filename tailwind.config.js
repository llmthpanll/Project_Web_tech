/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '90vh': '90vh',
        '80vh': '80vh',
        '20vh': '20vh',
        '10vh': '10vh',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px'
      },
      colors: {
        'green-blue': '#C4EDF0',

      },
      backgroundImage: {
        'head1': "url('../src/Page/Pic/house/ss90/test.png')",
        'head2': "url('../src/Page/Pic/townhouse/tavn/test.png')",
        'head3': "url('../src/Page/Pic/condo/xthq/test.png')",
        'head4': "url('../src/Page/Pic/1.jpg')",
        'head5': "url('../src/Page/Pic/1.jpg')",
      }
    ,  fontFamily: {
            prompt: ['Prompt']
            }
  },
  },
  plugins: [],
}
