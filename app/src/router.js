import Vue from 'vue';
import Router from 'vue-router';

import Affirmations from '@/views/Affirmations.vue';
import Home from '@/views/Home.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/affirmations',
			name: 'affirmations',
			component: Affirmations,
		},
	],
});

router.beforeEach((to, from, next) => {
	next();
});

export default router;
