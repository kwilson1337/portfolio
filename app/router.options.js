export default {
	scrollBehavior(to, from, savedPosition) {
		return new Promise((resolve) => {
			if (to.path === from.path) {
				return false
			}

			setTimeout(() => {
				if (savedPosition) {
					resolve(savedPosition)
				} else {
					resolve({ top: 0 })
				}
			}, 350)
		})
	}
}
