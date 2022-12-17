/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                green: {
                    50: "#C19A67",
                    100: "#20454b",
                    200: "#1d3e43",
                    300: "#173136",
                },
                white: {
                    50: "#FFFFFF",
                    100: "#FDF9EA",
                    200: "#F1F8FE",
                },
                grey: {
                    50: "#B3D7D4",
                },
            },
        },
    },
    plugins: [],
};
