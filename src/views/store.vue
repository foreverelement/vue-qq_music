<template>
	<div class="mui-content">
		<div class="mui-segmented-control mui-segmented-control-inverted hd">
			<a class="mui-control-item mui-active" href="#i1">
				<span>精选</span>
			</a>
			<a class="mui-control-item" href="#i2">
				<span>排行</span>
			</a>
			<a class="mui-control-item" href="#i3">
				<span>歌单</span>
			</a>
			<a class="mui-control-item" href="#i4">
				<span>电台</span>
			</a>
			<a class="mui-control-item" href="#i5">
				<span>MV</span>
			</a>
		</div>
		<div id="i1" class="mui-control-content mui-active">
			<choice></choice>
			<div class="mui-row">
				<div class="mui-col-xs-4">
					<img src="/static/img/singer.png">
					<span class="label">歌手</span>
				</div>
				<div class="mui-col-xs-4">
					<img src="/static/img/classify.png">
					<span class="label">分类</span>
				</div>
				<div class="mui-col-xs-4">
					<img src="/static/img/album.png">
					<span class="label">专辑</span>
				</div>
			</div>
		</div>
		<div id="i2" class="mui-control-content">
			2

		</div>
		<div id="i3" class="mui-control-content">
			3
		</div>
		<div id="i4" class="mui-control-content">
			4
		</div>
		<div id="i5" class="mui-control-content">
			5
		</div>
	</div>
</template>
<script>
	import choice from '../components/choice'
	import store from '../vuex/store'
	export default {
		ready(){
			store.dispatch('hdActive', true);
			store.dispatch('playerActive', true);
		},
		components: {
			choice
		}
	}
</script>
<style scoped>
	.hd {
		background-color: #fff;
		color: #333;
	}

	.hd .mui-control-item.mui-active {
		border: none;
		color: #31C27C;
	}

	.hd .mui-control-item span {
		padding: 8px 10px;
	}

	.hd .mui-control-item.mui-active span {
		color: #31C27C;
		border-bottom: 2px solid #31C27C;
	}

	.mui-row {
		margin-top: -5px;
		background-color: rgba(255, 255, 255, .3);
		padding: 19px 0;
	}

	.mui-row .mui-col-xs-4 {
		text-align: center;
	}

	.mui-row .mui-col-xs-4 img {
		max-width: 35px;
		max-height: 35px;
		margin-bottom: -10px;
	}

	.mui-row .mui-col-xs-4 .label {
		font-size: 16px;
	}
</style>