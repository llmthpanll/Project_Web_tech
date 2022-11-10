/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'head1': "url('../src/Page/Pic/1.jpg')",
        'head2': "url('../src/Page/Pic/house/สราญสิริ บางนา/1-01.png')",
        'head3': "url('../src/Page/Pic/condo/เอ็กซ์ที ห้วยขวาง/1-01.png')",
        'head4': "url('../src/Page/Pic/1.jpg')",
        'head5': "url('../src/Page/Pic/1.jpg')",
      }
    ,  fontFamily: {
             Kanit : ['Kanit']
            }
  },
  },
  plugins: [],
}
