<template>
	<div class="mui-table-view-cell title">QQ音乐排行榜</div>
	<list-qq></list-qq>
</template>
<script>
import listQq from '../components/list-qq'
	export default {
		components: {
			listQq
		}
	}
</script>
<style scoped>
	.title {
		text-align: center;
	}
</style>