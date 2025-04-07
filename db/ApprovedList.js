/**
 * Tower Approval Lists
 * This file contains the lists of towers that are verified or featured
 * 
 * approvedTowers: Towers that have passed verification and don't show the "unverified" tag
 * featuredTowers: Towers that are highlighted as featured content
 * grandfatheredTowers: Towers that are exempt from verification requirements (first 7 BETA submissions)
 * highlights: Towers that appear in the highlights section at the top of the page
 * 
 * Add or remove entries as needed
 */

// List of verified towers that won't have the unverified tag
const approvedTowers = [
    "Bman Shadow/Harvester 2.0",
    "Gabonnie/Anubis Tower",
    "Gabonnie/Accelerator",
    "ImAllOutOfNames/LIBERATOR TOWER CONCEPT",
    "Phidoductom1/Jesus the Navereth",
    "Vessel Of Infinite Destruction/Ranger",
    "Vessel Of Infinite Destruction/Golden Cowboy",
    'Brainhead1r/Hunter',
    'Bman Shadow/Stewie griffin',
    'Bman Shadow/Warden rework',
    'Raspbelle/Accelerator Rebalance 1',
    'Raspbelle/Accelerator Rebalance Path 2',
    'Raspbelle/Ace Pilot Rebalance Path 1',
    'Raspbelle/Ace Pilot Rebalance Path 2',
    'Raspbelle/Archer Rebalance Path 1',
    'Raspbelle/Archer Rebalance Path 2',
    'Raspbelle/Tsukasa Tower',
    'Raspbelle/Crook Boss',
    'Onett4smash/Tsukasa Tower (but JSON)',
    'Vessel Of Infinite Destruction/Military Base',
    'Onett4smash/Ranger Rework (V1)',
    'Onett4smash/Slasher Rework',
    'Your nameless protagonist/Enforcer',
    'Chilloutofpewp2nd/Mecha Base',
    'Chilloutofpewp2nd/Gatling',
    'Chilloutofpewp2nd/Turret',
    'Chilloutofpewp2nd/War Machine',
    'Onett4smash/Paintballer Rework',
    'Chilloutofpewp2nd/Medic',
    'Onett4smash/Medic Rework (V1)',
    'Chilloutofpewp2nd/Militant',
];

// List of featured towers
const featuredTowers = [
    "Vessel Of Infinite Destruction/Ranger",
    'Raspbelle/Tsukasa Tower',
    'Vessel Of Infinite Destruction/Military Base',
    'Your nameless protagonist/Enforcer',
    'Onett4smash/Medic Rework (V1)',
];

// List of grandfathered towers
const grandfatheredTowers = [
    "Bman Shadow/Harvester 2.0",
    "Gabonnie/Anubis Tower",
    "Gabonnie/Accelerator",
    "ImAllOutOfNames/LIBERATOR TOWER CONCEPT",
    "Phidoductom1/Jesus the Navereth",
    "Vessel Of Infinite Destruction/Golden Cowboy",
    "Vessel Of Infinite Destruction/Ranger",
];

// its own section the page
const highlights = [
    "Vessel Of Infinite Destruction/Ranger",
    'Onett4smash/Medic Rework (V1)',
    'Vessel Of Infinite Destruction/Military Base',
    'Your nameless protagonist/Enforcer',
];

// Make these arrays available to other scripts
window.approvedTowers = approvedTowers;
window.featuredTowers = featuredTowers;
window.grandfatheredTowers = grandfatheredTowers;
window.highlights = highlights;