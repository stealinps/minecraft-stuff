ServerEvents.recipes(event => {

    // ===== EXP BOTTLE CRAFTING =====
    // 1 Glass Bottle + 1 Lapis Lazuli -> 1 Bottle o' Enchanting
    event.shapeless('minecraft:experience_bottle', [
        'minecraft:glass_bottle',
        'minecraft:lapis_lazuli'
    ]).id('experience_bottle_from_lapis')


    // ===== EXP BOTTLE SMELTING =====
    // Smelt 1 Bottle o' Enchanting -> 1 Glass Bottle (+ 7.0 EXP)
    // event.smelting(output, input).xp(amount).cookingTime(ticks)
    event.smelting('minecraft:glass_bottle', 'minecraft:experience_bottle')
        .xp(7.0)
        .cookingTime(40)
        .id('smelt_experience_bottle')


     // Remove the default glass bottle recipe if you want to override it cleanly
    event.remove({ output: 'minecraft:glass_bottle' })

    // Craft 3 glass blocks in a V-shape to get 9 glass bottles
    event.shaped('9x minecraft:glass_bottle', [
        'G G',
        ' G ',
        '   '
    ], {
        G: 'minecraft:glass'
    }).id('glass_bottle_from_blocks')

})
