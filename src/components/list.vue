<template>
	<ul class="mui-table-view list">
		<li class="mui-table-view-cell">
			<a class="mui-navigate-right title">
				我的歌单
			</a>
		</li>
		<li class="mui-table-view-cell mui-media">
			<a class="mui-navigate-right">
				<img class="mui-media-object mui-pull-left" src="/static/img/4.jpg">
				<div class="mui-media-body">
					我最爱听
					<p class="mui-ellipsis">0首</p>
				</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media">
			<a class="mui-navigate-right">
				<img class="mui-media-object mui-pull-left" src="/static/img/4.jpg">
				<div class="mui-media-body">
					周杰伦
					<p class="mui-ellipsis">10首</p>
				</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media">
			<a class="mui-navigate-right">
				<img class="mui-media-object mui-pull-left" src="/static/img/4.jpg">
				<div class="mui-media-body">
					默认收藏
					<p class="mui-ellipsis">32首</p>
				</div>
			</a>
		</li>
	</ul>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	.list {
		margin-bottom: 10px;
	}
	.list .title {
		text-align: center;
		padding: 15px;
		color: #000;
	}

	.list .mui-media-body {
		font-size: 14px;
	}

</style>