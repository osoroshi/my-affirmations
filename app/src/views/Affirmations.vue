<template>
	<div class="ribbon">
		<h1 class="quote">{{ affirmation }}</h1>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'App',
	data: function() {
		return {
			affirmation: '',
		};
	},
	async created() {
		await axios
			.get('/api/affirmation')
			.then((response) => {
				this.affirmation = response.data;
			})
			.catch(function(error) {
				console.log(error);
				this.affirmation = 'Sorry, we had trouble getting your affirmation';
			});
	},
};
</script>
<style scoped>
h1 {
	background-color: rgb(36, 117, 217);
}
</style>
