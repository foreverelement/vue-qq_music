<template>
	<div class="mui-content">
		<hd-store></hd-store>
		<router-view></router-view>
	</div>
</template>
<script>
	import hdStore from '../components/hd-store'
	import store from '../vuex/store'
	export default {
		ready(){
			store.dispatch('hdActive', true);
			store.dispatch('playerActive', true);
		},
		components: {
			hdStore
		}
	}
</script>
<style scoped>
	
</style>