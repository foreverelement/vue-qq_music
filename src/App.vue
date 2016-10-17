<template>
	<div class="mui-content">
		<hd></hd>
		<router-view keep-alive transition="fade" transition-mode="out-in"></router-view>
		<player></player>
	</div>
</template>

<script>
import hd from './components/hd'
import player from './components/player'
import store from './vuex/store'
export default {
	components: {
		hd,
		player
	},
	store
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

