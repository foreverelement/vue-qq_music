<template>
	<img src="/static/img/1.png" style="z-index:1000;">
</template>
<script>
	export default {
		ready () {
			let router = this.$router;
			let timer = setTimeout(function () {
				clearTimeout(timer);
				timer = null;
				router.go('/home');
			}, 1000);
		}
	}
</script>
<style scoped>
	img {
		width: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>