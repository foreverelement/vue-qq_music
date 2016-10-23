<template>
	<header id="header" class="mui-bar mui-bar-nav">
		<a class="mui-icon mui-icon-bars mui-pull-left"></a>
		<h1 class="mui-title">
			<div class="box">
				<a v-link="{path: '/home', activeClass: 'active'}" class="mui-col-xs-4 link">我的</a>
				<a v-link="{path: '/store', activeClass: 'active'}" class="mui-col-xs-4 link">音乐馆</a>
				<a v-link="{path: '/new', activeClass: 'active'}" class="mui-col-xs-4 link">发现</a>
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

	header.mui-bar .box {
		width: 75%;
		margin: 0 auto;
	}
	header.mui-bar a {
		color: #fff;
	}

	header.mui-bar h1 .link {
		top: 0;
		font-size: 18px;
		line-height: 44px;
		display: inline-block;
	}

	header.mui-bar h1 .link.active {
		border: none;
		color: #fff;
		font-weight: bold;
		font-size: 19px;
	}
</style>