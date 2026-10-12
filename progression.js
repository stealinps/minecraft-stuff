ServerEvents.recipes(event => {

    // Helper arrays for tool and armor tiers
    const stones = ['minecraft:cobblestone', 'minecraft:blackstone', 'minecraft:cobbled_deepslate', 'minecraft:stone']
    const tools = ['sword', 'pickaxe', 'axe', 'shovel', 'hoe']

    // ===== TOOLS (Stone, Iron, Diamond, Netherite) =====
    tools.forEach(tool => {
        // Stone Tools (Wooden Tool + 2 Stones)
        event.remove({ output: `minecraft:stone_${tool}` })
        stones.forEach(stone => {
            let stoneName = stone.split(':')[1]
            event.shapeless(`minecraft:stone_${tool}`, [
                `minecraft:wooden_${tool}`,
                '2x ' + stone
            ]).id(`stone_${tool}_from_${stoneName}`)
        })

        // Iron Tools (Stone Tool + 2 Iron Ingots)
        event.remove({ output: `minecraft:iron_${tool}` })
        event.shapeless(`minecraft:iron_${tool}`, [
            `minecraft:stone_${tool}`,
            '2x minecraft:iron_ingot'
        ]).id(`iron_${tool}_shapeless`)

        // Diamond Tools (Iron Tool + 2 Diamonds)
        event.remove({ output: `minecraft:diamond_${tool}` })
        event.shapeless(`minecraft:diamond_${tool}`, [
            `minecraft:iron_${tool}`,
            '2x minecraft:diamond'
        ]).id(`diamond_${tool}_shapeless`)

        // Netherite Tools (Golden Tool + 4 Netherite Scraps)
        event.shapeless(`minecraft:netherite_${tool}`, [
            `minecraft:golden_${tool}`,
            '4x minecraft:netherite_scrap'
        ]).id(`netherite_${tool}_shapeless`)
    })


    // ===== ARMOR (Helmet, Chestplate, Leggings, Boots) =====

    // Helmet: Leather/Chainmail/Iron/Diamond base upgrades
    event.remove({ output: 'minecraft:chainmail_helmet' })
    event.shapeless('minecraft:chainmail_helmet', ['minecraft:leather_helmet', '2x minecraft:iron_nugget']).id('chainmail_helmet_shapeless')

    event.remove({ output: 'minecraft:iron_helmet' })
    event.shapeless('minecraft:iron_helmet', ['minecraft:chainmail_helmet', '2x minecraft:iron_ingot']).id('iron_helmet_shapeless')

    event.remove({ output: 'minecraft:diamond_helmet' })
    event.shapeless('minecraft:diamond_helmet', ['minecraft:iron_helmet', '2x minecraft:diamond']).id('diamond_helmet_shapeless')

    event.shapeless('minecraft:netherite_helmet', ['minecraft:golden_helmet', '4x minecraft:netherite_scrap']).id('netherite_helmet_shapeless')


    // Chestplate
    event.remove({ output: 'minecraft:chainmail_chestplate' })
    event.shapeless('minecraft:chainmail_chestplate', ['minecraft:leather_chestplate', '4x minecraft:iron_nugget']).id('chainmail_chestplate_shapeless')

    event.remove({ output: 'minecraft:iron_chestplate' })
    event.shapeless('minecraft:iron_chestplate', ['minecraft:chainmail_chestplate', '4x minecraft:iron_ingot']).id('iron_chestplate_shapeless')

    event.remove({ output: 'minecraft:diamond_chestplate' })
    event.shapeless('minecraft:diamond_chestplate', ['minecraft:iron_chestplate', '4x minecraft:diamond']).id('diamond_chestplate_shapeless')

    event.shapeless('minecraft:netherite_chestplate', ['minecraft:golden_chestplate', '4x minecraft:netherite_scrap']).id('netherite_chestplate_shapeless')


    // Leggings
    event.remove({ output: 'minecraft:chainmail_leggings' })
    event.shapeless('minecraft:chainmail_leggings', ['minecraft:leather_leggings', '3x minecraft:iron_nugget']).id('chainmail_leggings_shapeless')

    event.remove({ output: 'minecraft:iron_leggings' })
    event.shapeless('minecraft:iron_leggings', ['minecraft:chainmail_leggings', '3x minecraft:iron_ingot']).id('iron_leggings_shapeless')

    event.remove({ output: 'minecraft:diamond_leggings' })
    event.shapeless('minecraft:diamond_leggings', ['minecraft:iron_leggings', '3x minecraft:diamond']).id('diamond_leggings_shapeless')

    event.shapeless('minecraft:netherite_leggings', ['minecraft:golden_leggings', '4x minecraft:netherite_scrap']).id('netherite_leggings_shapeless')


    // Boots
    event.remove({ output: 'minecraft:chainmail_boots' })
    event.shapeless('minecraft:chainmail_boots', ['minecraft:leather_boots', '2x minecraft:iron_nugget']).id('chainmail_boots_shapeless')

    event.remove({ output: 'minecraft:iron_boots' })
    event.shapeless('minecraft:iron_boots', ['minecraft:chainmail_boots', '2x minecraft:iron_ingot']).id('iron_boots_shapeless')

    event.remove({ output: 'minecraft:diamond_boots' })
    event.shapeless('minecraft:diamond_boots', ['minecraft:iron_boots', '2x minecraft:diamond']).id('diamond_boots_shapeless')

    event.shapeless('minecraft:netherite_boots', ['minecraft:golden_boots', '4x minecraft:netherite_scrap']).id('netherite_boots_shapeless')

})