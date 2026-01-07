// js/tailwind.config.js

tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Segoe UI"', '"Helvetica Neue"', 'sans-serif'],
                light: ['"Segoe UI Light"', '"Segoe UI"', 'sans-serif'],
                semilight: ['"Segoe UI Semilight"', '"Segoe UI"', 'sans-serif'],
                mono: ['"Consolas"', '"Monaco"', 'monospace'],
            },
            colors: {
                wp: {
                    blue: '#2d89ef',
                    dark: '#1d1d1d',
                    gray: '#999999',
                    lightgray: '#f0f0f0',
                }
            },
            transitionTimingFunction: {
                'metro': 'cubic-bezier(0.1, 0.9, 0.2, 1)', 
            },
            animation: {
                'page-enter': 'pageEnter 0.6s cubic-bezier(0.1, 0.9, 0.2, 1) forwards',
                'tile-enter': 'tileEnter 0.5s cubic-bezier(0.1, 0.9, 0.2, 1) forwards',
                'content-slide': 'contentSlide 0.5s cubic-bezier(0.1, 0.9, 0.2, 1) forwards',
                'toast-in': 'toastIn 0.3s cubic-bezier(0.1, 0.9, 0.2, 1) forwards',
                'toast-out': 'toastOut 0.3s cubic-bezier(0.1, 0.9, 0.2, 1) forwards',
            },
            keyframes: {
                pageEnter: {
                    '0%': { transform: 'translateX(30px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                tileEnter: {
                    '0%': { transform: 'perspective(500px) rotateX(10deg) translateY(30px) scale(0.9)', opacity: '0' },
                    '100%': { transform: 'perspective(500px) rotateX(0deg) translateY(0) scale(1)', opacity: '1' },
                },
                contentSlide: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                toastIn: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                toastOut: {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateY(-20px)', opacity: '0' },
                }
            }
        }
    }
}