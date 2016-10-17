import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//配置路由
const router = new VueRouter({
	history : true,//启用html5的history pushState replaceState
	saveScrollPosition : true //当用户点击后退时保持用户滚动条位置
});

//路由映射
router.map({
	'/': {
		component (resolve) {
			require(['./views/welcome'], resolve);
			setTimeout(function () {
				router.go('/home');
			}, 1000)
		}
	},
	'/home': {
		component (resolve) {
			require(['./views/home'], resolve);
		}
	}
});

export default router;