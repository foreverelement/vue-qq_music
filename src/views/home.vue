<template>
	<div class="mui-content">
		<btn></btn>
		<user></user>
		<grid></grid>
		<rec></rec>
		<list></list>
	</div>
</template>
<script>
import btn from '../components/btn'
import user from '../components/user'
import grid from '../components/grid'
import rec from '../components/rec'
import list from '../components/list'
import store from '../vuex/store'
	export default {
		ready(){
			store.dispatch('hdActive', true);
			store.dispatch('playerActive', true);
		},
		components: {
			btn,
			user,
			grid,
			rec,
			list
		}
	}
</script>
<style scoped>

</style>