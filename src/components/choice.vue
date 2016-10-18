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
</style>