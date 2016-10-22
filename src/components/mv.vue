<template>
	<div class="mui-table-view-cell p-title p-title-a">
		<a class="mui-navigate-right">{{mv.title}}</a>
	</div>
	<ul class="new mui-row">
		<li class="mui-col-xs-6" v-for="song in mv.datas">
			<img :src="song.src" class="img">
			<div class="pl" v-if="mv.pl">
				<span>{{song.num}}万</span>
				<img src="/static/img/play-1.png">
			</div>
			
			<div class="mui-ellipsis">{{song.dec}}</div>
			<div class="mui-ellipsis small">{{song.des}}</div>
		</li>
	</ul>
</template>
<script>
	export default {
		data () {
			return {
				mv: {
					title: 'MV独家专访',
					pl: true,
					datas: [
					{
						src: '/static/img/10.jpg',
						num: 2.1,
						dec: '听听郝云的人生',
						des: '聊聊真正的活着'
					},
					{
						src: '/static/img/10.jpg',
						num: 6.6,
						dec: '热聊TFBOY',
						des: '现场神模仿MJ'
					},
					{
						src: '/static/img/10.jpg',
						num: 4.8,
						dec: '热谈青少年',
						des: '笑称最想变成蝙蝠侠“有钱特酷”'
					},
					{
						src: '/static/img/10.jpg',
						num: 4.8,
						dec: '张杰卖萌做Q表情',
						des: '吹口哨与母亲打招呼'
					}
					]
				}
			}
		}
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

	.new .mui-col-xs-6 {
		padding-right: 10px;
		padding-bottom: 10px;
		position: relative;
	}

	.new .mui-col-xs-6 .img {
		width: 100%;
	}
	.new .pl {
		position: absolute;
		width: 95%;
		padding-left: .2rem;
		bottom: 2.8rem;
	}
	.new .pl img {
		width: 12%;
		position: absolute;
		right: 0;
		bottom: 0;
		margin-right: .6rem;
	}

	.new .pl span {
		font-size: .6rem;
		color: #fff;
	}

	.new .mui-col-xs-6 .mui-ellipsis {
		font-size: 12px;
		line-height: 15px;
	}

	.new .mui-col-xs-6 .small {
		color: #666;
	}
</style>