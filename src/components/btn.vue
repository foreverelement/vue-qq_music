<template>
	<button type="button" class="mui-btn mui-btn-block mui-btn-outlined">
		<span class="mui-icon mui-icon-search"></span>
		<span>搜索</span>
		<span class="mui-icon mui-icon-mic mui-pull-right"></span>
	</button>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	button {
		margin: 10px 0;
		width: 96%;
		margin-left: 2%;
		padding: 4px;
		background-color: #fff;
		border: none;
		border-radius: 6px;
	}
	button span{
		color: #666;
		font-size: 16px;
		line-height: 26px;
	}
	button .mui-icon {
		color: #999;
		font-size: 20px;
	}
</style>