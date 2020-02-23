/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race, called "Mind Flayer"
				This race is made by Tadd
	Code by:	Tadd
	Date:		2018-11-21 (sheet v13.0.0beta6)
*/

var iFileName = "Mind Flayer.js";
RequiredSheetVersion(13);

SourceList["HB", 0] = {
	name : "Mind Flayer",
	abbreviation : "mndfly",
	group : "D&D Beyond",
	url : "https://www.dndbeyond.com/races/12016-mind-flayer",
	date : "2018/07/30"
};

RaceList["mind flayer"] = {
	regExpSearch : /^((?=.*mind)(?=.*flayer)).*$/i,
	name : "Flayer",
	sortname : "Mind Flayer",
	source : ["HB", 0],
	plural : "Mind Flayer",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 15 },
	},
	languageProfs : [1, "Common", "Assail", "Telepathy"],
	vision : [["Darkvision", 60]],
	dmgres : ["Psychic"],
	skills : ["Survival", "History"],
	age : " reach maturity by age 20 and live to 500",
	height : " stand around 7 feet tall",
	weight : " have thin, bodies that weigh between 100 and 140 pounds",
	heightMetric : " stand around 213 cm tall",
	weightMetric : " have thin, lightweight bodies that weigh between 45 and 63 kg",
	scores : [0, 0, 0, 2, 0, 0],
	trait : "Ability Score (+2 Intelligence)\n   Mind Blast: As an action, you can magically emit psychic energy in a 15-foot cone. Each creature in that line must make an Intelligence saving throw. The DC for this saving throw equals 8 + your Intelligence modifier + your proficiency bonus. A creature takes 2d6 psychic damage on a failed save and half as much damage on a successful one. The damage increases to 3d6 at 6th level. 4d6 at 11th level, and 5d6 at 16th level. After you use this ability, you can't use it again until you complete a short or long rest.\n\n   Tentacles: Your unarmed strikes deal 1d4 psychic damage on a hit.\n\n   Innate Spellcasting: Once you reach 3rd level, you can cast the levitate spell once per day. Intelligence is your spellcasting ability for this spell.\n\n   Telepathy: You can communicate telepathically with any creature that knows a language within 30 ft.",
		features : {
		"levitate" : {
			name : "Levitate",
			minlevel : 3,
			usages : 1,
			recovery : "long rest",
			tooltip : " (Innate Spellcasting)",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Levitate (level 3)",
				spells : ["levitate"],
				selection : ["levitate"],
				oncelr : true
			}
			
};
WeaponsList["tentacles"] = {
	regExpSearch : /^((?=.*mind)(?=.*flayer)).*$/i,
	name : "Flayer",
	sortname : "Mind Flayer",
	source : ["HB", 0],
	ability : 1,
	type : "Natural",
	damage : [1, 4, "psychic"],
	range : "Melee",
	description : "Only unarmed; One attack as bonus action",
	monkweapon : true,
	abilitytodamage : true
};
if (!SpellsList["mind blast-ua"]) {
	SpellsList["mind blast-ua"] = {
		name : "Mind Blast",
		classes : ["sorcerer", "warlock", "wizard"],
	source : ["HB", 0],
		level : 0,
		school : "Ench",
		time : "1 a",
		range : "15 ft cone",
		components : "V",
		duration : "1 Instantaneous",
		save : "Int",
		description : "1 crea save or 2d6 Psychic dmg, -1d4 on first save before my turn ends; +1d6 at CL 5, 11, and 17",
		descriptionCantripDie : "1 crea save or `CD`d6 Psychic dmg and subtract 1d4 from first saving throw before my turn ends",
		descriptionFull : "As an action, you can magically emit psychic energy in a 15-foot cone. Each creature in that line must make an Intelligence saving throw. The DC for this saving throw equals 8 + your Intelligence modifier + your proficiency bonus. A creature takes 2d6 psychic damage on a failed save and half as much damage on a successful one. The damage increases to 3d6 at 6th level. 4d6 at 11th level, and 5d6 at 16th level. After you use this ability, you can't use it again until you complete a short or long rest."
	};

		},
};
