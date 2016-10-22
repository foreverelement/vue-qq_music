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
	<xs4 state="1"></xs4>
	<today></today>
	<xs4 state="2"></xs4>
	<xs6></xs6>
	<xs4 state="3"></xs4>
	<radio></radio>
	<mv></mv>
</template>
<script>
import xs4 from '../components/xs4'
import xs6 from '../components/xs6'
import today from '../components/today'
import radio from '../components/radio'
import mv from '../components/mv'
	export default {
		ready () {
			(function ($) {
				$('.mui-slider').slider({
					interval: 2000 /*自动轮播周期，若为0则不自动播放，默认为0；*/
				});
			})(mui);
		},
		components: {
			xs4,
			xs6,
			today,
			radio,
			mv
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

</style>