ServerEvents.recipes(event => {
    // 物质球
    event.custom({
        "type": "create:emptying",
        "ingredients": [
            {
                "item": 'ae2:black_paint_ball'
            }
        ],
        "results": [
            {
                "item": 'ae2:matter_ball'
            },
            {
                "amount": 250,
                "fluid": "ad_astra:oil"
            }
        ]
    })
})