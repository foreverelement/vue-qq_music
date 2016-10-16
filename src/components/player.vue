<template>
	<footer class="player">
		<div class="mui-table-view">
			<div class="mui-table-view-cell mui-media">
				<img class="mui-media-object mui-pull-left" src="/static/img/2.jpg">
				<div class="mui-media-body">
					<h5>超人不会飞</h5>
					<p class="mui-ellipsis">超人不会飞-周杰伦</p>
				</div>
				<div class="icon mui-pull-right">
					<img src="/static/img/pause.png" v-touch:tap="play" v-if="isPlay">
					<img src="/static/img/play.png" v-touch:tap="play" v-else>
					<img src="/static/img/list.png">
				</div>
				<audio class="mui-hidden mp3" src="http://dl.stream.qqmusic.qq.com/C200004JQ70v4Fddyj.m4a?vkey=48ADE42CDA1C667AD29E3EEA997AC3AE44F3A3A6CA898C17AF95113D2B849E626142DBD47EF818BD7A780A041C5584AFF9BAB6C5F0BF944D&guid=2647101425&fromtag=30"></audio>
			</div>
		</div>
	</footer>
</template>
<script>
	export default {
		data () {
			return {
				isPlay: false
			}
		},
		methods: {
			play () {
				new play(document.querySelector('.mp3'), this.$el).play();
				this.isPlay = !this.isPlay;
			}
		}
	}

	function play(el, cd) {
		this.el = el;
		this.cd = cd.querySelector('.mui-media-object');
		this.play = () => {
			let style = this.cd.style;
			if(this.el.paused){
				this.el.play();
				style.animation? style.webkitAnimationPlayState = "running" :style.animation = 'turn 5s linear infinite';
			}
			else{
				this.el.pause();
				style.webkitAnimationPlayState = "paused";
			}
		};
	}
</script>
<style scoped>
	.player {
		border-top: 1px solid #ccc;
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.mui-table-view-cell.mui-active {
		background-color: transparent;
	}

	.player .mui-table-view-cell {
		padding: 5px;
	}

	.player img.mui-media-object {
		border-radius: 50%;
		margin-right: 5px;
	}
	
	.player .mui-media-body h5 {
		font-size: 14px;
		color: #333;
		margin-bottom: 0;
	}

	.player .mui-media-body p {
		font-size: 12px;
	}

	.icon {
		margin-top: -35px;
	}

	.icon img {
		margin-right: 5px;
		max-width: 32px;
	}

	@-webkit-keyframes turn {
		0%{-webkit-transform:rotate(0deg);}
		25%{-webkit-transform:rotate(90deg);}
		50%{-webkit-transform:rotate(180deg);}
		70%{-webkit-transform:rotate(270deg);}
		100%{-webkit-transform:rotate(360deg);}
	}
</style>