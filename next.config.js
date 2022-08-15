/** @type {import('next').NextConfig} */

//Allow next Image render iamges from this url https://mitiendaonline
const allowedImageWordPressDomain = new URL( process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL ).hostname;


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
		domains: [ allowedImageWordPressDomain, 'via.placeholder.com' ],
	},
}

module.exports = nextConfig
