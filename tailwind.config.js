/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "main-1": "#1DCD8B",
                "main-2": "#4AD7A2",
                "main-3": "#C6FFE9",
                "my-blue": "#0085FF",
                "my-green": "#0D9C18",
                "my-purple": "#6A35FF",
                "my-red": "#EA3323",
                "my-delete": "#FF4B4B"
            },
            boxShadow: {
                main: "0px 0px 6px 0px rgb(0 0 0 / 0.2)",
                btn: "0px 2px 3px 1px rgb(0 0 0 / 0.2)",
                toggle: "0px 4px 3px -2px rgb(0 0 0 / 0.2)"
            },
            height: {
                "check-page": "91.1%"
            }
        },
        fontFamily: {
            GmarketSansBold: ["GmarketSansBold"],
            GmarketSansMedium: ["GmarketSansMedium"],
            GmarketSansLight: ["GmarketSansLight"]
        },
        backgroundImage: {
            IntroMeLogo: "url(./assets/IntroMeLogo.png)"
        }
    },
    plugins: []
};
