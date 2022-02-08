module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'btn-sjena': '0 1px 2px 1px rgba(0,0,0,0.3)',
      },
      colors: {
        'hci-modra': {
          DEFAULT: '#3C47A9'
        },
        'hci-bg': {
          DEFAULT: '#F6F6F6'
        },
        'hci-header': {
          DEFAULT: '#0F1544'
        },
        'hci-siva': {
          DEFAULT: '#6b6b6b'
        },
        'hci-gradient': {
          DEFAULT: '#4C5CEC'
        }
      }
    },
  },
  plugins: [],
}
