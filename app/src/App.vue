<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style>
html,
body {
	height: 100%;
	padding-top: 30px;
}

body {
	background: url(./assets/cat.png) no-repeat center center fixed;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
}
html {
	font-family: 'Homemade Apple', cursive;
	font-size: 2em;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
.quote {
	color: white;
	text-align: center;
}
</style>
