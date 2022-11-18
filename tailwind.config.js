/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
        'head1': "url('../src/Page/Pic/1.jpg')",
        'head2': "url('../src/Page/Pic/house/สราญสิริ บางนา/1-01.png')",
        'head3': "url('../src/Page/Pic/condo/เอ็กซ์ที ห้วยขวาง/1-01.png')",
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
