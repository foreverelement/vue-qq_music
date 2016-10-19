<template>
	<div class="mui-slider">
		<div class="mui-slider-group mui-slider-loop">
			<div class="mui-slider-item mui-slider-item-duplicate">
				<img src="/static/img/9.jpg">
			</div>
			<div class="mui-slider-item">
				<img src="/static/img/5.jpg">
			</div>
			<div class="mui-slider-item">
				<img src="/static/img/6.jpg">
			</div>
			<div class="mui-slider-item">
				<img src="/static/img/7.jpg">
			</div>
			<div class="mui-slider-item">
				<img src="/static/img/8.jpg">
			</div>
			<div class="mui-slider-item">
				<img src="/static/img/9.jpg">
			</div>
			<div class="mui-slider-item mui-slider-item-duplicate">
				<img src="/static/img/5.jpg">
			</div>
		</div>
		<div class="mui-slider-indicator">
			<div class="mui-indicator mui-active"></div>
			<div class="mui-indicator"></div>
			<div class="mui-indicator"></div>
			<div class="mui-indicator"></div>
			<div class="mui-indicator"></div>
		</div>
	</div>
	<div class="mui-row">
		<div class="mui-col-xs-4">
			<img src="/static/img/singer.png">
			<span class="label">歌手</span>
		</div>
		<div class="mui-col-xs-4">
			<img src="/static/img/classify.png">
			<span class="label">分类</span>
		</div>
		<div class="mui-col-xs-4">
			<img src="/static/img/album.png">
			<span class="label">专辑</span>
		</div>
	</div>
	<div class="mui-table-view-cell p-title p-title-a">
		<a class="mui-navigate-right">新歌速递</a>
	</div>
	<ul class="flex">
		<li class="flex-1">
			<img src="/static/img/2.jpg">
			<div class="mui-ellipsis-2">重返童真，张碧晨新歌暖心治愈</div>
		</li>
		<li class="flex-1">
			<img src="/static/img/2.jpg">
			<div class="mui-ellipsis-2">I.O.I公开迷你二辑，可爱满分</div>
		</li>
		<li class="flex-1">
			<img src="/static/img/2.jpg">
			<div class="mui-ellipsis-2">幸福就是可以一起睡觉</div>
		</li>
	</ul>
	<div class="mui-table-view-cell p-title p-title-b">
		<a class="mui-navigate-right">今日为你推荐（30首）</a>
	</div>
	<ul class="mui-table-view m-list">
		<li class="mui-table-view-cell mui-media">
			<img class="mui-media-object mui-pull-left" src="/static/img/4.jpg">
			<div class="mui-media-body">
				<span class="mui-icon mui-pull-right mui-icon-arrowdown mark"></span>
				<span class="m-title">南方姑娘（弹唱版）</span>
				<p class="mui-ellipsis">赵雷 - 赵小雷</p>
			</div>
		</li>
		<li class="mui-table-view-cell mui-media">
			<img class="mui-media-object mui-pull-left" src="/static/img/4.jpg">
			<div class="mui-media-body">
				<span class="mui-icon mui-pull-right mui-icon-arrowdown mark"></span>
				<span class="m-title">太美丽</span>
				<p class="mui-ellipsis">陶喆 - 太美丽</p>
			</div>
		</li>
		<li class="mui-table-view-cell mui-media">
			<img class="mui-media-object mui-pull-left" src="/static/img/4.jpg">
			<div class="mui-media-body">
				<span class="mui-icon mui-pull-right mui-icon-arrowdown mark"></span>
				<span class="m-title">心中的日月</span>
				<p class="mui-ellipsis">王力宏 - 太美丽</p>
			</div>
		</li>
		<li class="mui-table-view-cell mui-media">
			<img class="mui-media-object mui-pull-left" src="/static/img/4.jpg">
			<div class="mui-media-body">
				<span class="mui-icon mui-pull-right mui-icon-arrowdown mark"></span>
				<span class="m-title">你比从前快乐</span>
				<p class="mui-ellipsis">周杰伦 - 范特西PLUS</p>
			</div>
		</li>
		<li class="mui-table-view-cell mui-media">
			<img class="mui-media-object mui-pull-left" src="/static/img/4.jpg">
			<div class="mui-media-body">
				<span class="mui-icon mui-pull-right mui-icon-arrowdown mark"></span>
				<span class="m-title">勇敢一点</span>
				<p class="mui-ellipsis">弦子 - 逆风的蔷薇</p>
			</div>
		</li>
	</ul>
</template>
<script>
	export default {
		ready () {
			(function ($) {
				$('.mui-slider').slider({
					interval: 2000 /*自动轮播周期，若为0则不自动播放，默认为0；*/
				});
			})(mui);
		}
	}
</script>
<style scoped>
	.mui-row {
		margin-top: -5px;
		background-color: rgba(255, 255, 255, .3);
		padding: 19px 0;
	}

	.mui-row .mui-col-xs-4 {
		text-align: center;
	}

	.mui-row .mui-col-xs-4 img {
		max-width: 35px;
		max-height: 35px;
		margin-bottom: -10px;
	}

	.mui-row .mui-col-xs-4 .label {
		font-size: 16px;
	}

	.p-title a {
		text-align: center;
		font-size: 16px;
		color: #333;
	}

	.p-title-a a {
		background-color: rgba(255, 255, 255,.5);
	}

	.p-title-b a {
		background-color: rgba(255, 255, 255,.8);
	}

	.flex {
		margin-top: -1px;
		display: flex;
		width: 100%;
		padding: 0;
		margin: 0;
		list-style: none;
		background-color: rgba(255, 255, 255,.5);
		padding: 10px;
	}

	.flex-1:last-child {
		padding-right: 0;
	}

	.flex-1 {
		flex: 1;
		padding-right: 10px;
	}

	.flex-1 img {
		width: 100%;
	}

	.flex-1 .mui-ellipsis-2 {
		font-size: 12px;
		line-height: 15px;
	}

	.m-list {
		margin-top: -1px;
		background-color: rgba(255, 255, 255,.8);
	}

	.m-list .mui-media {
		padding: 4px 11px;
	}

	.m-list img.mui-media-object {
		max-width: 52px;
		height: 52px;
	}

	.m-list .mui-media-body {
		margin-top: 5px;
	}

	.m-list .mui-media-body .m-title {
		font-size: 14px;
	}

	.m-list .mui-media-body p {
		font-size: 12px;
	}

	.m-list .mark {
		line-height: 42px;
		color: #666;
		font-size: 20px;
	}

</style>