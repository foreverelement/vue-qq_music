<template>
	<btn></btn>
	<div class="mui-table-view user">
		<div class="mui-table-view-cell mui-media">
			<a class="mui-navigate-right">
				<img class="mui-media-object mui-pull-left" src="/static/img/3.jpg">
				<div class="mui-media-body">
					<h5>陆溢昕</h5>
					<p class="mui-ellipsis">今日听歌3小时</p>
				</div>
				<img src="/static/img/vip.png" class="mui-pull-right">
			</a>
		</div>
	</div>
	<grid></grid>
	<div class="mui-table-view radio">
		<div class="mui-table-view-cell mui-media">
			<div class="mui-pull-left cover-box">
				<img class="mui-media-object" src="/static/img/4.jpg">
				<img src="/static/img/start.png" class="start">
			</div>
			<div class="mui-media-body">
				个性电台
				<p class="mui-ellipsis">听专属你的音乐</p>
			</div>
		</div>
	</div>
	<list></list>
	<player></player>
</template>
<script>
import btn from '../components/btn'
import grid from '../components/grid'
import list from '../components/list'
import player from '../components/player'
	export default {
		components: {
			btn,
			grid,
			list,
			player
		}
	}
</script>
<style scoped>
	.user {
		margin-bottom: 10px;
	}

	.user .mui-navigate-right {
		padding: 5px 10px;
	}

	.user img.mui-media-object {
		border-radius: 50%;
	}

	.user h5 {
		font-size: 14px;
		margin-bottom: 0;
		color: #333;
	}

	.user p {
		font-size: 12px;
	}

	.user img.mui-pull-right {
		margin-top: -28px;
		max-width: 18px;
		margin-right: 25px;
	}

	.radio {
		margin-bottom: 10px;
	}

	.radio img.mui-media-object {
		line-height: 56px;
		max-width: 56px;
		height: 56px;
	}

	.radio .cover-box {
		position: relative;
	}

	.radio img.start {
		width: 60%;
		position: absolute;
		top: 20%;
		left: 20%;
	}

	.radio .cover-box {
		margin-right: 10px;
	}

	.radio .mui-media-body {
		padding-top: 5px;
	}

	.radio .mui-media-body p {
		margin-top: 5px;
	}
</style>