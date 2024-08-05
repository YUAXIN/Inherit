Ponder.registry(e => {
	e.create('naturesaura:nature_altar')
		.scene('kubejs:nature_altar', '自然祭坛', 'kubejs:nature_altar', scene => {
			// 显示底盘
			scene.showBasePlate()
			scene.idle(20)
			// 缩放视角
			scene.scaleSceneView(0.8)
			// 关键帧
			scene.addKeyframe()
			// 木板
			let planks = [
				[4, 1, 2], [4, 1, 3], [3, 1, 4], [2, 1, 4],
				[6, 1, 2], [6, 1, 3], [8, 1, 4], [7, 1, 4],
				[8, 1, 6], [7, 1, 6], [6, 1, 7], [6, 1, 8],
				[2, 1, 6], [3, 1, 6], [4, 1, 7], [4, 1, 8],
				[5, 1, 4], [6, 1, 5], [5, 1, 6], [4, 1, 5]
			]
			for (let block of planks) {
				scene.world.showSection(block, Direction.DOWN)
				scene.idle(2)
			}
			scene.idleSeconds(1)
			// 关键帧
			scene.addKeyframe()
			// 石砖
			let brick_1 = [
				[5, 1, 2], [5, 1, 3], [3, 1, 5], [2, 1, 5],
				[8, 1, 5], [7, 1, 5], [5, 1, 7], [5, 1, 8],
				[6, 1, 6], [6, 1, 4], [4, 1, 6], [4, 1, 4]
			]
			for (let block of brick_1) {
				scene.world.showSection(block, Direction.DOWN)
				scene.idle(2)
			}
			// 黄金石砖
			let gold_brick = [[3, 2, 3], [7, 2, 3], [3, 2, 7], [7, 2, 7]]
			for (let block of gold_brick) {
				scene.world.showSection(block, Direction.DOWN)
				scene.idle(2)
			}
			scene.idleSeconds(1)
			// 关键帧
			scene.addKeyframe()
			// 四周砖块
			scene.world.showSection([1, 1, 5, 1, 4, 5], Direction.EAST)
			scene.idle(2)
			scene.world.showSection([5, 1, 9, 5, 4, 9], Direction.NORTH)
			scene.idle(2)
			scene.world.showSection([9, 1, 5, 9, 4, 5], Direction.WEST)
			scene.idle(2)
			scene.world.showSection([5, 1, 1, 5, 4, 1], Direction.SOUTH)
			scene.idle(2)
			// 偏转一点
			scene.rotateCameraY(30)
			scene.idleSeconds(1)
			scene.rotateCameraY(-30)
			scene.idleSeconds(1)
			// 祭坛
			scene.world.showSection([5, 2, 5], Direction.DOWN)
			scene.idleSeconds(1)
		})
})