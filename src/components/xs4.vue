<template>
	<div class="mui-table-view-cell p-title p-title-a">
		<a class="mui-navigate-right">{{songs.title}}</a>
	</div>
	<ul class="new mui-row">
		<li class="mui-col-xs-4" v-for="song in songs.datas">
			<img :src="song.src" class="img">
			<div class="pl" v-if="songs.pl">
				<span>300.2万</span>
				<img src="/static/img/play-1.png">
			</div>
			
			<div class="mui-ellipsis-2">{{song.dec}}</div>
		</li>
	</ul>
</template>
<script>
	export default {
		props: ['songs']
	}
</script>
<style scoped>
	.p-title a {
		text-align: center;
		font-size: 16px;
		color: #333;
	}

	.p-title-a a {
		background-color: rgba(255, 255, 255,.5);
	}
	.new {
		margin-top: -1px;
		width: 100%;
		padding: 0;
		margin: 0;
		list-style: none;
		background-color: rgba(255, 255, 255,.5);
		padding: 10px 0 10px 10px;
	}

	.new .mui-col-xs-4 {
		padding-right: 10px;
		padding-bottom: 10px;
		position: relative;
	}

	.new .mui-col-xs-4 .img {
		width: 100%;
	}
	.new .pl {
		position: absolute;
		width: 100%;
		padding-left: .2rem;
		bottom: 2.8rem;
	}
	.new .pl img {
		width: 20%;
		position: absolute;
		right: .1rem;
		bottom: .1rem;
		margin-right: .6rem;
	}

	.new .pl span {
		font-size: .6rem;
		color: #fff;
	}

	.new .mui-col-xs-4 .mui-ellipsis-2 {
		font-size: 12px;
		line-height: 15px;
	}
</style>