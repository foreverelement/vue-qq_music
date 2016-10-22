<template>
	<div class="mui-table-view-cell title">QQ音乐巅峰榜</div>
	<ul class="mui-table-view mui-table-view-chevron list">
		<li class="mui-table-view-cell mui-media">
			<a class="mui-navigate-right">
			<img class="mui-media-object mui-pull-left" src="/static/img/11.jpg">
				<div class="mui-media-body">
					<p class="mui-ellipsis">1 某时某刻</p>
					<p class="mui-ellipsis">2 蓝瘦香菇 <span>- 蒙面哥</span></p>
					<p class="mui-ellipsis">3 童梦 <span>- 张碧晨</span></p>
				</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media">
			<a class="mui-navigate-right" href="javascript:;">
				<img class="mui-media-object mui-pull-left" src="/static/img/12.jpg">
				<div class="mui-media-body">
					<p class="mui-ellipsis">1 演员 <span>- 薛之谦</span></p>
					<p class="mui-ellipsis">2 丑八怪 <span>- 薛之谦</span></p>
					<p class="mui-ellipsis">3 多幸运 <span>- 韩安旭</span></p>
				</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media">
			<a class="mui-navigate-right">
				<img class="mui-media-object mui-pull-left" src="/static/img/13.jpg">
				<div class="mui-media-body">
					<p class="mui-ellipsis">1 告白气球(Live) <span>- 周杰伦/低调组合</span></p>
					<p class="mui-ellipsis">2 你还要我怎样(Live) <span>- 薛之谦</span></p>
					<p class="mui-ellipsis">3 小幸运(Live) <span>- 白静晨</span></p>
				</div>
			</a>
		</li>
	</ul>
</template>
<script>
	
</script>
<style scoped>
	.title {
		text-align: center;
	}
	ul.list {
		background-color: transparent;
		padding: 0 10px;
	}

	.list li.mui-media:first-child {
		margin-top: 0;
	}

	.list li.mui-media {
		background-color: #fff;
		margin-top: 10px;
		padding: 0;
	}

	.list li.mui-media a {
		margin: 0;
	}

	.list li.mui-media .mui-media-body {
		margin-top: 1.4rem;
	}

	.list li.mui-media a p {
		width: 80%;
		color: #333;
	}

	.list li.mui-media a p span {
		color: #999;
	}

	.list li.mui-media img.mui-media-object {
		max-width: 100px;
		height: 100px;
		line-height: 100px;
	}
</style>