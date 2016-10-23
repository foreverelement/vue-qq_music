<template>
	<div class="mui-content">
		<hd-store></hd-store>
		<router-view keep-alive transition-mode="out-in"></router-view>
	</div>
</template>
<script>
	import hdStore from '../components/hd-store'
	import store from '../vuex/store'
	import {getStorePath} from '../vuex/getter'
	export default {
		ready(){
			store.dispatch('SET_HD', true);
			store.dispatch('SET_PLAYER', true);
			this.$router.go(this.getStorePath);
		},
		components: {
			hdStore
		},
		vuex: {
			getters: {
				getStorePath
			}
		}
	}
</script>
<style scoped>
.mui-content {
	padding-top: 87px;
}
</style>