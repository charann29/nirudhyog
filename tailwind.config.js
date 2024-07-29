/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        extend: {
            colors: {
                backgroundColor: "#121212",
                navBackground: "#1e1e1e",
                primary: "#5942e9",
                textColor: "#dee3ea"
            },
            fontSize: {
                '3xl': "48px",
                '2xl': "36px",
                'xl': "30px",
                'base': "20px",
                'sm': '18px'
            }

        },

    },
    plugins: [],
}

