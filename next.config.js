/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        EMAILJS_USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    },
}

module.exports = nextConfig
