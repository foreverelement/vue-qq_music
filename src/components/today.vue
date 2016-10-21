<template>
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

	}
</script>
<style scoped>

	.p-title a {
		text-align: center;
		font-size: 16px;
		color: #333;
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