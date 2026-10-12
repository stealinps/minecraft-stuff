ServerEvents.recipes(event => {

    // ===== ROTTEN FLESH TO LEATHER =====
    event.smelting('minecraft:leather', 'minecraft:rotten_flesh')
        .xp(0.3)
        .cookingTime(200)
        .id('leather_from_rotten_flesh')


    // ===== SADDLE RECIPE =====
    // Leather around wheat in the center
    event.shaped('minecraft:saddle', [
        'L L',
        'LWL',
        'L L'
    ], {
        L: 'minecraft:leather',
        W: 'minecraft:wheat'
    }).id('saddle_from_leather_and_wheat')


    // ===== HORSE ARMOR RECIPES =====
    
    // Leather Horse Armor (using leather patterns)
    event.shaped('minecraft:leather_horse_armor', [
        ' L ',
        'LLL',
        'L L'
    ], {
        L: 'minecraft:leather'
    }).id('leather_horse_armor_custom')

    // Iron Horse Armor
    event.shaped('minecraft:iron_horse_armor', [
        ' I ',
        'III',
        'I I'
    ], {
        I: 'minecraft:iron_ingot'
    }).id('iron_horse_armor_custom')

    // Gold Horse Armor
    event.shaped('minecraft:golden_horse_armor', [
        ' G ',
        'GGG',
        'G G'
    ], {
        G: 'minecraft:gold_ingot'
    }).id('golden_horse_armor_custom')

    // Diamond Horse Armor
    event.shaped('minecraft:diamond_horse_armor', [
        ' D ',
        'DDD',
        'D D'
    ], {
        D: 'minecraft:diamond'
    }).id('diamond_horse_armor_custom')

    // ===== HEAVY CORE RECIPE =====
    // 1 Conduit surrounded by 4 Iron Blocks -> 1 Heavy Core
    event.shaped('minecraft:heavy_core', [
        ' I ',
        'ICI',
        ' I '
    ], {
        I: 'minecraft:iron_block',
        C: 'minecraft:conduit'
    }).id('heavy_core_from_conduit')

})