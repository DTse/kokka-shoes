import mstile from './icons/mstile-144x144.png';
import appleTouch180 from './icons/apple-touch-icon.png';
import chrome192 from './icons/android-chrome-192x192.png';
import chrome512 from './icons/android-chrome-512x512.png';
import safariSvg from './icons/safari-pinned-tab.svg';
import favicon from './icons/favicon.ico';
import favicon16 from './icons/favicon-16x16.png';
import favicon32 from './icons/favicon-32x32.png';

export const pwaMetas = [
	{
		name: 'theme-color',
		content: '#212121'
	},
	{
		name: 'full-screen',
		content: 'yes'
	},
	{
		name: 'apple-mobile-web-app-capable',
		content: 'yes'
	},
	{
		name: 'mobile-web-app-capable',
		content: 'yes'
	},
	{
		name: 'apple-mobile-web-app-title',
		content: 'KOKKA SHOES'
	},
	{
		name: 'application-name',
		content: 'KOKKA SHOES'
	},
	{
		name: 'apple-mobile-web-app-status-bar-style',
		content: '#212121'
	},
	{
		name: 'msapplication-TileColor',
		content: '#212121'
	},
	{
		name: 'msapplication-config',
		content: `${process.env.PUBLIC_URL + '/browserconfig.xml'}`
	},
	{
		name: 'msapplication-TileImage',
		content: `${mstile}`
	}
];

export const linkPwaMetas = [
	{
		rel: 'apple-touch-icon',
		href: `${favicon}`
	},
	{
		rel: 'manifest',
		href: `${process.env.PUBLIC_URL + '/site.webmanifest'}`
	},
	{
		rel: 'shortcut icon',
		href: `${favicon}`
	},
	{
		rel: 'apple-touch-icon',
		sizes: '180x180',
		href: `${appleTouch180}`
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '32x32',
		href: `${favicon32}`
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '192x192',
		href: `${chrome192}`
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '512x512',
		href: `${chrome512}`
	},
	{
		rel: 'icon',
		type: 'image/png',
		sizes: '16x16',
		href: `${favicon16}`
	},
	{
		rel: 'mask-icon',
		href: `${safariSvg}`,
		color: '#212121'
	},
	{
		rel: 'alternate',
		href: 'https://koakkashoes.com/en',
		hreflang: 'en-US'
	},
	{
		rel: 'alternate',
		href: 'https://kokkashoes.com/el',
		hreflang: 'el'
    }
];
