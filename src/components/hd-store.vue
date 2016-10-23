<template>
	<div class="hd">
		<a v-link="{path: '/store/rec', activeClass: 'active'}" v-touch:tap="setStorePath('/store/rec')">精选</a>
		<a v-link="{path: '/store/rank', activeClass: 'active'}" v-touch:tap="setStorePath('/store/rank')">排行</a>
		<a v-link="{path: '/store/songs', activeClass: 'active'}" v-touch:tap="setStorePath('/store/songs')">歌单</a>
		<a v-link="{path: '/store/radio', activeClass: 'active'}" v-touch:tap="setStorePath('/store/radio')">电台</a>
		<a v-link="{path: '/store/mv', activeClass: 'active'}" v-touch:tap="setStorePath('/store/mv')">MV</a>
	</div>
</template>
<script>
import {setStorePath} from '../vuex/action'
	export default {
		vuex: {
			actions: {
				setStorePath
			}
		}
	}
</script>
<style scoped>
	.hd {
		padding-top: .3rem;
		background-color: #fff;
		width: 100%;
		display: flex;
		border-bottom: 1px solid #ccc;
		position: fixed;
		top: 44px;
		z-index: 10;
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