/** @type {import('tailwindcss').Config} */
export const content = [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
];
export const theme = { extend: {} };
export const plugins = [require("daisyui")];
export const daisyui = {
    themes: ["light", "dark"],
};
