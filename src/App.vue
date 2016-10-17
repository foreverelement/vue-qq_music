<template>
  <div>
    <router-view keep-alive transition="fade" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
	body {
		padding: 45px 0;
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

