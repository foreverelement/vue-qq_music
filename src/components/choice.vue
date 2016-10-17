<template>
	<div class="mui-slider">
		<div class="mui-slider-group mui-slider-loop">
			<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
			<div class="mui-slider-item mui-slider-item-duplicate">
			
					<img src="/static/img/5.jpg">
		
			</div>
			<!-- 第一张 -->
			<div class="mui-slider-item">
				
					<img src="/static/img/5.jpg">
				
			</div>
			<!-- 第二张 -->
			<div class="mui-slider-item">
				
					<img src="/static/img/6.jpg">
			
			</div>
			<!-- 第三张 -->
			<div class="mui-slider-item">
				
					<img src="/static/img/7.jpg">
			
			</div>
			<!-- 第四张 -->
			<div class="mui-slider-item">
				
					<img src="/static/img/8.jpg">
				
			</div>
			<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
			<div class="mui-slider-item mui-slider-item-duplicate">
			
					<img src="/static/img/5.jpg">
				
			</div>
		</div>
		<div class="mui-slider-indicator">
			<div class="mui-indicator mui-active"></div>
			<div class="mui-indicator"></div>
			<div class="mui-indicator"></div>
			<div class="mui-indicator"></div>
		</div>
	</div>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	
</style>