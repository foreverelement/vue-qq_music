import {
	SET_STORE_PATH
} from '../types'

let state = {
	path: '/store/rec'
}

const mutations = {
	[SET_STORE_PATH]: (state, _path) => state.path = _path,
}

export default {
	state,
	mutations
}