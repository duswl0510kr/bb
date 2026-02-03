/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/constants/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#007AFF",
                "ios-gray": "#F2F2F7",
                "ios-gray-2": "#E5E5EA",
                "ios-gray-3": "#D1D1D6",
                "ios-label": "#000000",
                "ios-secondary": "#3C3C43",
                "ios-tertiary": "#3C3C4399",
                "ios-red": "#FF3B30",
                "ios-orange": "#FF9500",
                "ios-yellow": "#FFCC00",
                "ios-green": "#34C759",
                "ios-teal": "#5AC8FA",
                "ios-blue": "#007AFF",
                "ios-indigo": "#5856D6",
                "ios-purple": "#AF52DE",
                "ios-pink": "#FF2D55",
            },
            boxShadow: {
                'ios': '0 1px 3px rgba(0, 0, 0, 0.04)',
                'ios-lg': '0 4px 12px rgba(0, 0, 0, 0.08)',
            },
            borderRadius: {
                'ios': '12px',
                'ios-lg': '16px',
            },
        },
    },
    plugins: [],
};
