/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        EMAILJS_ACCESS_TOKEN: process.env.NEXT_PUBLIC_EMAILJS_ACCESS_TOKEN,
        EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERIVE_ID,
    },
}

module.exports = nextConfig
