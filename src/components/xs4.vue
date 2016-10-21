<template>
	<div class="mui-table-view-cell p-title p-title-a">
		<a class="mui-navigate-right">{{datas.title}}</a>
	</div>
	<ul class="new mui-row">
		<li class="mui-col-xs-4" v-for="song in datas.datas">
			<img :src="song.src" class="img">
			<div class="pl" v-if="datas.pl">
				<span>{{song.num}}万</span>
				<img src="/static/img/play-1.png">
			</div>
			
			<div class="mui-ellipsis-2">{{song.dec}}</div>
		</li>
	</ul>
</template>
<script>
	export default {
		props: ['state'],
		data () {
			return {
				newSong: {
					title: '新歌速递',
					pl: false,
					datas: [
					{
						src: '/static/img/2.jpg',
						dec: '重返童真，张碧晨新歌暖心治愈'
					},
					{
						src: '/static/img/2.jpg',
						dec: 'I.O.I公开迷你二辑，可爱满分'
					},
					{
						src: '/static/img/2.jpg',
						dec: '《圆梦巨人》影视原声热播'
					}
					]
				},
				hot: {
					title: '热门歌单',
					pl: true,
					datas: [
					{
						src: '/static/img/2.jpg',
						num: 302.1,
						dec: '重返童真，张碧晨新歌暖心治愈'
					},
					{
						src: '/static/img/2.jpg',
						num: 171.6,
						dec: 'I.O.I公开迷你二辑，可爱满分'
					},
					{
						src: '/static/img/2.jpg',
						num: 117.8,
						dec: '《圆梦巨人》影视原声热播'
					},
					{
						src: '/static/img/2.jpg',
						num: 262.4,
						dec: '《圆梦巨人》影视原声热播'
					},
					{
						src: '/static/img/2.jpg',
						num: 583.3,
						dec: '《圆梦巨人》影视原声热播'
					},
					{
						src: '/static/img/2.jpg',
						num: 707.2,
						dec: '《圆梦巨人》影视原声热播'
					}
					]
				},
				original: {
					title: '独立原创',
					pl: true,
					datas: [
					{
						src: '/static/img/2.jpg',
						num: 2.1,
						dec: '重返童真，张碧晨新歌暖心治愈'
					},
					{
						src: '/static/img/2.jpg',
						num: 6.6,
						dec: 'I.O.I公开迷你二辑，可爱满分'
					},
					{
						src: '/static/img/2.jpg',
						num: 4.8,
						dec: '《圆梦巨人》影视原声热播'
					}
					]
				}
			}
		},
		computed: {
			datas () {
				return this.state == 1? this.newSong : this.state == 2? this.hot : this.original;
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