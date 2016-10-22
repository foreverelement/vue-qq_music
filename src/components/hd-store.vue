<template>
	<div class="hd">
		<a v-link="{path: '/store/rec', activeClass: 'active'}">精选</a>
		<a v-link="{path: '/store/rank', activeClass: 'active'}">排行</a>
		<a v-link="{path: '/store/songs', activeClass: 'active'}">歌单</a>
		<a v-link="{path: '/store/radio', activeClass: 'active'}">电台</a>
		<a v-link="{path: '/store/mv', activeClass: 'active'}">MV</a>
	</div>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	.hd {
		padding-top: .3rem;
		background-color: #fff;
		width: 100%;
		display: flex;
		border-bottom: 1px solid #ccc;
	}

	.hd a:first-child {
		margin-left: 15px;
	}

	.hd a {
		color: #333;
		flex: 1;
		text-align: center;
		line-height: 2.2rem;
		margin-right: 15px;
		font-size: 16px;
	}

	.hd a.active {
		color: #31C27C;
		border-bottom: 2px solid #31C27C;
	}
</style>