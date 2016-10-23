<template>
	<div class="mui-content">
		<hd v-if="getHd" transition="down" transition-mode="out-in"></hd>
		<router-view keep-alive transition-mode="out-in" transition="fade"></router-view>
		<player v-if="getPlayer" transition="top"></player>
	</div>
</template>

<script>
import hd from './components/hd'
import player from './components/player'
import store from './vuex/store'
import {getHd, getPlayer} from './vuex/getter'
export default {
	components: {
		hd,
		player
	},
	store,
	vuex: {
		getters: {
			getHd,
			getPlayer
		}
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

	.down-transition {
		transition: all .5s ease;
		margin-top: 0;
	}

	.down-enter, .down-leave {
		margin-top: -44px;
	}

	.top-transition {
		transition: all .5s ease;
		margin-bottom: 0;
	}

	.top-enter, .top-leave {
		margin-bottom: -44px;
	}

	.mui-table-view:before, .mui-table-view:after, .mui-table-view-cell:after {
		height: 0;
	}
</style>

