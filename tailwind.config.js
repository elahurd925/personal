/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'split-blue-white': "linear-gradient(to bottom, rgb(59 130 246) 50% , white 40%);"
            }
        },
    },
    plugins: [],
}
