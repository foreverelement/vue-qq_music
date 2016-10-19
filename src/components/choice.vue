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
	<div class="mui-row ify">
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
	<xs4 :songs="newSong"></xs4>
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
	<xs4 :songs="hot"></xs4>
</template>
<script>
import xs4 from './xs4'
	export default {
		data () {
			return {
				newSong: {
					title: '新歌速递',
					datas: [
					{
						src: '/static/img/2.jpg',
						dec: '重返童真，张碧晨新歌暖心治愈'
					},
					{
						src: '/static/img/2.jpg',
						dec: 'I.O.I公开迷你二辑，可爱满分'
					},
					{
						src: '/static/img/2.jpg',
						dec: '《圆梦巨人》影视原声热播'
					}
					]
				},
				hot: {
					title: '热门歌单',
					datas: [
					{
						src: '/static/img/2.jpg',
						dec: '重返童真，张碧晨新歌暖心治愈'
					},
					{
						src: '/static/img/2.jpg',
						dec: 'I.O.I公开迷你二辑，可爱满分'
					},
					{
						src: '/static/img/2.jpg',
						dec: '《圆梦巨人》影视原声热播'
					},
					{
						src: '/static/img/2.jpg',
						dec: '《圆梦巨人》影视原声热播'
					},
					{
						src: '/static/img/2.jpg',
						dec: '《圆梦巨人》影视原声热播'
					},
					{
						src: '/static/img/2.jpg',
						dec: '《圆梦巨人》影视原声热播'
					}
					]
				}
			}
		},
		ready () {
			(function ($) {
				$('.mui-slider').slider({
					interval: 2000 /*自动轮播周期，若为0则不自动播放，默认为0；*/
				});
			})(mui);
		},
		components: {
			xs4
		}
	}
</script>
<style scoped>
	.ify {
		margin-top: -5px;
		background-color: rgba(255, 255, 255, .3);
		padding: 19px 0;
	}

	.ify .mui-col-xs-4 {
		text-align: center;
	}

	.ify .mui-col-xs-4 img {
		max-width: 35px;
		max-height: 35px;
		margin-bottom: -10px;
	}

	.ify .mui-col-xs-4 .label {
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