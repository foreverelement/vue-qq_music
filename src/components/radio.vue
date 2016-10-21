<template>
	<div class="mui-table-view-cell p-title p-title-a">
		<a class="mui-navigate-right">秋风凉意，暖暖电台</a>
	</div>
	<ul class="mui-table-view list-1">
		<li class="mui-table-view-cell">
			<img class="mui-media-object mui-pull-left" src="/static/img/4.jpg">
			<div class="dec">
				<span>22.3万</span>
				<img src="/static/img/play-1.png">
			</div>
			<div class="mui-media-body">
				<span>抒情英文歌</span>
				<p class="mui-ellipsis">Bad Things - Meiko</p>
				<p class="mui-ellipsis">听抒情英文歌，让心静下来~</p>
		</li>
		<li class="mui-table-view-cell">
			<img class="mui-media-object mui-pull-left" src="/static/img/4.jpg">
			<div class="dec">
				<span>22.3万</span>
				<img src="/static/img/play-1.png">
			</div>
			<div class="mui-media-body">
				<span>咖啡馆</span>
				<p class="mui-ellipsis">Like A Star - Corinne Bailey</p>
				<p class="mui-ellipsis">咖啡加爵士，享受小资情怀</p>
		</li>
	</ul>
</template>
<script>
	
</script>
<style scoped>
	.p-title a {
		text-align: center;
		font-size: 16px;
		color: #333;
	}

	.p-title-a a {
		background-color: rgba(255, 255, 255,.8);
	}

	.list-1 {
		margin-top: -1px;
		background-color: rgba(255, 255, 255,.8);
	}

	.list-1 .mui-table-view-cell img.mui-media-object {
		max-width: 100px;
		height: 100px;
		line-height: 100px;
	}

	.list-1 .mui-table-view-cell {
		position: relative;
	}

	.list-1 .mui-media-body {
		margin-top: 20px;
	}
	.dec {
		position: absolute;
		left: 20px;
		bottom: 10px;
		font-size: .6rem;
		color: #fff;
		width: 100px;
	}

	.dec img {
		position: absolute;
		width: 28%;
		right: 4px;
		bottom: 1px;
	}

</style>