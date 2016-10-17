<template>
	<div class="mui-table-view user">
			<div class="mui-table-view-cell mui-media">
				<a class="mui-navigate-right">
					<img class="mui-media-object mui-pull-left" src="/static/img/3.jpg">
					<div class="mui-media-body">
						<h5>陆溢昕</h5>
						<p class="mui-ellipsis">今日听歌3小时</p>
					</div>
					<img src="/static/img/vip.png" class="mui-pull-right">
				</a>
			</div>
		</div>
</template>

<style scoped>
	.user {
		margin-bottom: 10px;
	}

	.user .mui-navigate-right {
		padding: 5px 10px;
	}

	.user img.mui-media-object {
		border-radius: 50%;
	}

	.user h5 {
		font-size: 14px;
		margin-bottom: 0;
		color: #333;
	}

	.user p {
		font-size: 12px;
	}

	.user img.mui-pull-right {
		margin-top: -28px;
		max-width: 18px;
		margin-right: 25px;
	}
</style>