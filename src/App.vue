<template>
	<div class="mui-content">
		<hd v-show="state.hd"></hd>
		<router-view keep-alive transition="fade" transition-mode="out-in"></router-view>
		<player v-show="state.player"></player>
	</div>
</template>

<script>
import hd from './components/hd'
import player from './components/player'
export default {
	ready () {
		this.state.hd = !this.state.hd;
		this.state.player = !this.state.player;
	},
	data () {
		return {
			state: {
				hd: false,
				player: false,
			}
		}
	},
	components: {
		hd,
		player
	}
}
</script>

<style>
	body {
		padding-bottom: 50px;
	}
	.fade-transition {
		transition: all .3s ease;
	}
	.fade-enter, .fade-leave {
		opacity: 0;
	}

	.mui-table-view:before, .mui-table-view:after {
		height: 0;
	}
</style>

