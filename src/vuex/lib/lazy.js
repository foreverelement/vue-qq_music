let state = {
	hd: false,
	player: false
}

const mutations = {
	hdActive (state, _hd) {
		state.hd = _hd;
	},
	playerActive (state, _player) {
		state.player = _player;
	}
}

export default {
	state,
	mutations
}