ServerEvents.recipes(event => {
    // 固化末影珍珠
    event.custom({
        "type": "thermal:centrifuge",
        "ingredient": {
            "item": 'cyclic:eye_redstone'
        },
        "result": [
            {
                "item": 'cyclic:ender_eye_reuse',
                "count": 3
            }
        ],
        "energy": 1600
    }).id('cyclic:ender_eye_reuse')
})