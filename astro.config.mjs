// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mis resumenes',
			favicon: '/favicon.png',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/GountzJs/web-resumenes', }],
			sidebar: [
				{
					label: 'Empieza aquí',
					items: [
						{ label: 'Empezando', slug: 'start-here/getting-started' },
					],
				},
				{
					label: 'Herramientas',
					items: [
						{ label: 'Git', slug: 'tools/git' },
					],
				},
			],
		}),
	],
});
