<template>
	<div class="home">
		<hd></hd>
		<div class="mui-content">
			<div id="item1" class="mui-control-content mui-active">
				<item1></item1>
			</div>
			<div id="item2" class="mui-control-content">
				<item2></item2>

			</div>
			<div id="item3" class="mui-control-content">
				<item3></item3>
			</div>
		</div>
	</div>
</template>
<script>
import item1 from '../items/item1'
import item2 from '../items/item2'
import item3 from '../items/item3'
import hd from '../components/hd'
	export default {
		components: {
			hd,
			item1,
			item2,
			item3,
		}
	}
</script>
<style scoped>
	.mui-table-view-cell.mui-active {
		background-color: transparent;
	}

	.home {
		padding-bottom: 50px;
	}
</style>