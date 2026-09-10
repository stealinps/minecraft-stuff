// Remove the old recipe
craftingTable.remove(<item:formidulus:soul_dagger>);

// Add the new recipe
craftingTable.addShaped("Soul Dagger", <item:formidulus:soul_dagger>, [
    [<item:soulsweapons:lost_soul>,<item:minecraft:air>,<item:minecraft:air>],
    [<item:formidulus:sacrificial_dagger>,<item:minecraft:air>, <item:minecraft:air>],
    [<item:bosses_of_mass_destruction:soul_star>,<item:minecraft:air>,<item:minecraft:air>]

]);

craftingTable.addShaped("Soul Dagger", <item:formidulus:soul_dagger>, [
    [<item:minecraft:air>,<item:soulsweapons:lost_soul>,<item:minecraft:air>],
    [<item:minecraft:air>,<item:formidulus:sacrificial_dagger> , <item:minecraft:air>],
    [<item:minecraft:air>,<item:bosses_of_mass_destruction:soul_star> , <item:minecraft:air>]

]);

craftingTable.addShaped("Soul Dagger", <item:formidulus:soul_dagger>, [
    [<item:minecraft:air>, <item:minecraft:air>,<item:soulsweapons:lost_soul>],
    [<item:minecraft:air>, <item:minecraft:air>,<item:formidulus:sacrificial_dagger>],
    [<item:minecraft:air>, <item:minecraft:air>,<item:bosses_of_mass_destruction:soul_star>]

]);