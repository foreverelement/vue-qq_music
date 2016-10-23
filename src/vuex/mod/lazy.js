import {
	SET_HD,
	SET_PLAYER
} from '../types'

let state = {
	hd: false,
	player: false
}

const mutations = {
	[SET_HD]: (state, _hd) => state.hd = _hd,
	[SET_PLAYER]: (state, _player) => state.player = _player
}

export default {
	state,
	mutations
}