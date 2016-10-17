<template>
	<div class="mui-table-view radio">
		<div class="mui-table-view-cell mui-media">
			<div class="mui-pull-left cover-box">
				<img class="mui-media-object" src="/static/img/4.jpg">
				<img src="/static/img/start.png" class="start">
			</div>
			<div class="mui-media-body">
				个性电台
				<p class="mui-ellipsis">听专属你的音乐</p>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.radio {
		margin-bottom: 10px;
	}

	.radio img.mui-media-object {
		line-height: 56px;
		max-width: 56px;
		height: 56px;
	}

	.radio .cover-box {
		position: relative;
	}

	.radio img.start {
		width: 60%;
		position: absolute;
		top: 20%;
		left: 20%;
	}

	.radio .cover-box {
		margin-right: 10px;
	}

	.radio .mui-media-body {
		padding-top: 5px;
	}

	.radio .mui-media-body p {
		margin-top: 5px;
	}
</style>