/**
 * @David Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */


export const portafolioData = [
	{
		imgSrc: './img/moremarket.webp',
		title: 'E-commerce MoreMarket',
		skills: ['Vue', 'Vuetify', 'Nuxt'],
		descripcion:
			'The MoreMarket Store website is an online marketplace allowing multiple vendors to showcase and sell their products seamlessly. It features user-friendly navigation, product categories, and options for customer accounts, promoting a diverse shopping experience for both buyers and sellers.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: './img/sbcolegal.webp',
		title: 'SBCOLEGAL',
		skills: ['Wordpress', 'CSS'],
		descripcion:
			'The SBCO Legal website specializes in providing comprehensive legal services, highlighting its expertise in corporate law, international trade, and litigation. Additionally, they present a team of attorneys with a strong track record and provide information about their practice areas and personalized approaches to meet their clients\' needs.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: './img/hydairconditioning.webp',
		title: 'Conditioning Repair',
		skills: ['Wordpress', 'CSS'],
		descripcion:
			'The Hydair Conditioning website showcases their expertise in providing heating, ventilation, and air conditioning (HVAC) solutions for both residential and commercial clients. They emphasize their commitment to quality service, reliable products, and customer satisfaction, offering information about their services, financing options, and a helpful blog.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: './img/portfolio-alexei.webp',
		title: 'Portfolio',
		skills: ['HTML', 'Tailwind'],
		descripcion:
			'Alexei Alayo\'s website showcases his work as developer, highlighting creative projects and his focus on interactivity and user experience. It also includes information about his professional experience and offered services, as well as a blog where he shares insights on technology.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: './img/my-portfolio.webp',
		title: 'My Portfolio',
		skills: ['Astro', 'Tailwind', 'CSS'],
		descripcion:
			'A one-page portfolio created using Astro and Tailwind, featuring sections such as: About Me, My Skills, Work Experience, and Projects.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Vue: 'skill-icons:vuejs-dark',
	Wordpress: 'skill-icons:wordpress',
	Nuxt: 'skill-icons:nuxtjs-dark',
	Vuetify: 'skill-icons:vuetify-dark',
	HTML: 'skill-icons:html',
	Astro:'skill-icons:astro',

};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
