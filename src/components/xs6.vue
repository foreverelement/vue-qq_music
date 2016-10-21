<template>
	<div class="mui-table-view-cell p-title p-title-a">
		<a class="mui-navigate-right">专栏</a>
	</div>
	<ul class="mui-table-view column">
		<li class="mui-col-xs-6 mui-media">
			<img src="/static/img/10.jpg" class="img">
		</li>
		<li class="mui-col-xs-6 mui-media">
			<img src="/static/img/10.jpg" class="img">
		</li>
		<li class="mui-col-xs-12 mui-media">
			<img src="/static/img/10.jpg" class="img">
		</li>
	</ul>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	.p-title a {
		text-align: center;
		font-size: 16px;
		color: #333;
	}

	.p-title-a a {
		background-color: rgba(255, 255, 255,.8);
	}

	.column {
		margin-top: -1px;
		background-color: rgba(255, 255, 255,.8);
		padding: 0 10px;
	}

	.column > li.mui-col-xs-6 {
		display: inline-block;
		width: 49.3%;
	}

	.img {
		width: 100%;
	}
</style>
