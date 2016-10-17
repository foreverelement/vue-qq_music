<template>
	<header id="header" class="mui-bar mui-bar-nav">
		<a class="mui-icon mui-icon-bars mui-pull-left"></a>
		<h1 class="mui-title">
			<div class="mui-segmented-control mui-segmented-control-inverted">
				<a class="mui-control-item mui-active" href="/home">
					我的
				</a>
				<a class="mui-control-item" href="/store">
					音乐馆
				</a>
				<a class="mui-control-item" href="/new">
					发现
				</a>
			</div>
		</h1>
		<a class="mui-icon mui-icon-search mui-pull-right"></a>
	</header>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	header.mui-bar {
		background-color: #31C27C;
		
	}

	header.mui-bar a {
		color: #fff;
	}

	.mui-bar .mui-segmented-control {
		top: 0;
		color: #fff;
		width: 75%;
		font-size: 18px;
	}

	.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
		border: none;
		color: #fff;
		font-weight: bold;
		font-size: 19px;
	}

	.mui-segmented-control .mui-control-item {
		line-height: 44px;
	}
</style>