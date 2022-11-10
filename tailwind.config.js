/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'head': "url('../src/Page/Pic/1.jpg')",
        'head2': "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
        'house':"url('../src/Page/Pic/house/นาราสิริ บางนา/1-01.png')"
      }
    ,  fontFamily: {
             Kanit : ['Kanit']
            }
  },
  },
  plugins: [],
}
