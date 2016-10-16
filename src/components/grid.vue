<template>
	<ul class="mui-table-view mui-grid-view mui-grid-9">
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
				<img src="/static/img/all.png" class="icon">
				<div class="mui-media-body">全部歌曲</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
				<img src="/static/img/download.png" class="icon">
				<div class="mui-media-body">下载歌曲</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
				<img src="/static/img/history.png" class="icon">
				<div class="mui-media-body">最近播放</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
				<img src="/static/img/like.png" class="icon">
				<div class="mui-media-body">我喜欢</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
				<img src="/static/img/mv.png" class="icon">
				<div class="mui-media-body">下载MV</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
				<img src="/static/img/listen.png" class="icon">
				<div class="mui-media-body">听歌识曲</div>
			</a>
		</li>
	</ul>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	ul.mui-grid-9 {
		background-color: #fff;
		margin-bottom: 10px;
	}

	ul img.icon{
		max-width: 40px;
		max-height: 40px;
		line-height: 40px;
	}

	ul.mui-grid-9 li.mui-table-view-cell {
		border: none;
	}
</style>