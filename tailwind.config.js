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
                "my-red": "#EA3323"
            }
        },
        fontFamily: {
            GmarketSansBold: ["GmarketSansBold"],
            GmarketSansMedium: ["GmarketSansMedium"],
            GmarketSansLight: ["GmarketSansLight"]
        }
    },
    plugins: []
};
