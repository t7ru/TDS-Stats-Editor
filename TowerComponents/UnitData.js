export default {
    Skeleton: {
        Health: 60,
        Speed: 4,
        Range: 2,
        Cooldown: 0,
        Damage: 0,
        TickRate: 0,
        Defense: 0,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
        Attributes: {},
    },
    'Sword Skeleton': {
        Health: 90,
        Speed: 3.5,
        Range: 7.5,
        Cooldown: 0.8,
        Damage: 15,
        TickRate: 0,
        Defense: 0,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
        Attributes: {},
    },
    'Giant Skeleton': {
        Health: 6000,
        Speed: 2.4,
        Range: 2,
        Cooldown: 0,
        TickRate: 0,
        Damage: 0,
        Defense: 0,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
        Attributes: {},
    },
    'Skeleton Knight': {
        Health: 250,
        Speed: 3.5,
        Range: 7.5,
        TickRate: 0,
        Defense: 0,
        Cooldown: 0.65,
        Damage: 90,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
        Attributes: {},
    },
    'Hallow Guard': {
        Health: 1500,
        Defense: 20,
        Speed: 2.4,
        Cooldown: 0,
        Range: 2,
        Damage: 0,
        TickRate: 0,
        Attributes: {},
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    'Executioner Skeleton': {
        Health: 3500,
        Speed: 1.2,
        Cooldown: 3,
        Range: 30,
        Defense: 0,
        Damage: 50,
        TickRate: 0.1,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: false,
        },
        Attributes: {},
    },

    'Pistol Goon': {
        Health: 15,
        Damage: 3,
        Cooldown: 1,
        Range: 20,
        Lifetime: 150,
        Limit: 10,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: false,
        },
    },
    'Tommy Goon 1': {
        Health: 100,
        Damage: 4,
        Cooldown: 0.2,
        Range: 17,
        Lifetime: 200,
        Limit: 4,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    'Tommy Goon 2': {
        Health: 175,
        Damage: 10,
        Cooldown: 0.12,
        Range: 18,
        Lifetime: 200,
        Limit: 4,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    'Golden Pistol Goon': {
        Health: 25,
        Damage: 3,
        Cooldown: 0.6,
        Range: 20,
        Lifetime: 150,
        Limit: 10,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: false,
        },
    },
    'Golden Tommy Goon 1': {
        Health: 125,
        Damage: 5,
        Cooldown: 0.18,
        Range: 17.5,
        Lifetime: 200,
        Limit: 4,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    'Golden Tommy Goon 2': {
        Health: 225,
        Damage: 12,
        Cooldown: 0.1,
        Range: 20,
        Lifetime: 200,
        Limit: 4,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    // Mercenary base
    Rifleman1: {
        Unlocks: 0,
        Health: 35,
        Damage: 4,
        BurstAmount: 5,
        Spawnrate: 37.5,
        Cooldown: 0.15,
        BurstCooldown: 1.75,
        Range: 18,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    Rifleman2: {
        Unlocks: 3,
        Health: 70,
        Damage: 9,
        BurstAmount: 6,
        Spawnrate: 32.5,
        Cooldown: 0.15,
        BurstCooldown: 1.5,
        Range: 23,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: false,
        },
    },
    Rifleman3: {
        Unlocks: 6,
        Health: 195,
        Damage: 12,
        BurstAmount: 7,
        Spawnrate: 27.5,
        Cooldown: 0.15,
        BurstCooldown: 1.25,
        Range: 30,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: false,
        },
    },
    Grenadier1: {
        Unlocks: 2,
        Health: 45,
        Damage: 30,
        Spawnrate: 42.5,
        Cooldown: 2,
        Defense: 0,
        Range: 17,
        ExplosiveRange: 3,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: true,
        },
    },
    Grenadier2: {
        Unlocks: 3,
        Health: 120,
        Damage: 50,
        Spawnrate: 37.5,
        Cooldown: 1.75,
        Defense: 0,
        Range: 19,
        ExplosiveRange: 4.5,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: true,
        },
    },
    Grenadier3: {
        Unlocks: 6,
        Health: 260,
        Damage: 65,
        Spawnrate: 32.5,
        Cooldown: 1.25,
        Defense: 0.1,
        Range: 21,
        ExplosiveRange: 4.5,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: true,
        },
    },

    RiotGuard1: {
        Unlocks: 4,
        Health: 1000,
        Damage: 20,
        Spawnrate: 60,
        Defense: 0.1,
        Cooldown: 1.5,
        Range: 4,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    RiotGuard2: {
        Unlocks: 6,
        Health: 2250,
        Damage: 30,
        Spawnrate: 50,
        Defense: 0.15,
        Cooldown: 1,
        Range: 4,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },

    FieldMedic1: {
        Unlocks: 5,
        Health: 135,
        Damage: 0,
        Spawnrate: 37.5,
        Heal: 4,
        MaxTargets: 4,
        Cooldown: 0.2,
        Range: 25,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    FieldMedic2: {
        Unlocks: 6,
        Health: 175,
        Damage: 0,
        Spawnrate: 32.5,
        Heal: 8,
        MaxTargets: 8,
        Cooldown: 0.2,
        Range: 25,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },

    Sentry: {
        Range: 18,
        Health: 20,
        Lifetime: 30,
        Speed: 1.25,
        IgnoreCollisionDamage: true,
        Cooldown: 0.45,
        Damage: 1,
        ExplosionDamage: 0,
        BurstCooldown: 0,
        MissileAmount: 0,
        ExplosionRadius: 0,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
        Attributes: {
            SendTime: 1.25,
            ScrapCost: 16,
            Lifetime: 20,
        },
    },
    'Rifle Sentry': {
        Range: 20,
        Health: 40,
        Lifetime: 30,
        Speed: 1.25,
        IgnoreCollisionDamage: true,
        Cooldown: 0.3,
        Damage: 2,
        ExplosionRadius: 0,
        ExplosionDamage: 0,
        BurstCooldown: 0,
        MissileAmount: 0,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
        Attributes: {
            SendTime: 1.5,
            ScrapCost: 36,
            Lifetime: 30,
        },
    },
    'Minigun Sentry': {
        Range: 20,
        Health: 60,
        Lifetime: 45,
        Speed: 1.25,
        IgnoreCollisionDamage: true,
        Cooldown: 0.16,
        ExplosionRadius: 0,
        Damage: 5,
        ExplosionDamage: 0,
        BurstCooldown: 0,
        MissileAmount: 0,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
        Attributes: {
            SendTime: 1.75,
            ScrapCost: 120,
            Lifetime: 45,
        },
    },
    'War Machine Sentry': {
        ExplosionDamage: 35,
        BurstCooldown: 4,
        MissileAmount: 2,
        Range: 24,
        Health: 120,
        Lifetime: 60,
        Speed: 1.5,
        IgnoreCollisionDamage: true,
        Cooldown: 0.12,
        Damage: 8,
        ExplosionRadius: 5,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
        Attributes: {
            SendTime: 1.75,
            ScrapCost: 250,
            Lifetime: 60,
        },
    },
    Humvee: {
        Health: 30,
        Damage: 0,
        Cooldown: 0.2,
        Range: 5,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    ['Humvee 2']: {
        Health: 60,
        Damage: 0,
        Cooldown: 0.2,
        Range: 5,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    ['Humvee 3']: {
        Health: 90,
        Damage: 3,
        Cooldown: 0.2,
        Range: 30,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Tank: {
        Health: 500,
        Damage: 10,
        Cooldown: 0.2,
        Range: 30,
        ExplosionDamage: 50,
        TimeBetweenMissiles: 3,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    ['Railgun Tank']: {
        Health: 1500,
        Damage: 24,
        Cooldown: 0.15,
        Range: 30,
        ExplosionDamage: 80,
        TimeBetweenMissiles: 3,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Mark1: {
        Health: 400,
        Damage: 8,
        Cooldown: 0.2,
        Range: 30,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Mark1Rocket: {
        Health: 400,
        Damage: 8,
        Cooldown: 0.2,
        Range: 30,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 5,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Mark2: {
        Health: 750,
        Damage: 12,
        Cooldown: 0.15,
        Range: 25,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 5,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Mark3: {
        Health: 1200,
        Damage: 10,
        Cooldown: 0.08,
        Range: 25,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 3,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Mark4: {
        Health: 2000,
        Damage: 10,
        Cooldown: 0.05,
        Range: 100,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 3,
        MissileAmount: 4,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Mark5: {
        Health: 5000,
        Damage: 20,
        Cooldown: 0.05,
        Range: 100,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 3,
        MissileAmount: 4,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },

    'Thorns 0': {
        Damage: 2,
        Range: 10,
        Duration: 8,
        Slowdown: '15%',
        TickRate: 0.5,
    },
    'Thorns 1': {
        Damage: 4,
        Range: 12,
        Duration: 8,
        Slowdown: '15%',
        TickRate: 0.5,
    },
    'Thorns 2': {
        Damage: 6,
        Range: 12,
        Duration: 10,
        Slowdown: '20%',
        TickRate: 0.5,
    },
    'Thorns 3': {
        Damage: 12,
        Range: 16,
        Duration: 10,
        Slowdown: '20%',
        TickRate: 0.5,
    },
    'Thorns 4': {
        Damage: 20,
        Range: 18,
        Duration: 16,
        Slowdown: '25%',
        TickRate: 0.5,
    },
    'Thorns 5': {
        Damage: 30,
        Range: 20,
        Duration: 16,
        Slowdown: '30%',
        TickRate: 0.5,
    },

    'Heatwave 2': {
        Damage: 150,
        BurnDamage: 10,
        Range: 12.5,
        BurnTime: 5,
        Knockback: 20,
        TickRate: 0.5,
    },
    'Heatwave 3': {
        Damage: 250,
        BurnDamage: 15,
        Range: 13.5,
        BurnTime: 5,
        Knockback: 22.5,
        TickRate: 0.5,
    },
    'Heatwave 4': {
        Damage: 400,
        BurnDamage: 20,
        Range: 15,
        BurnTime: 5,
        Knockback: 25,
        TickRate: 0.5,
    },

    'Ice Turret 2': {
        Health: 1000,
        Damage: 10,
        Cooldown: 0.45,
        Range: 10,
        SlowdownPerHit: 25,
        MaxSlow: 50,
        SlowdownTime: 5,
        FreezeTime: 2,
        Duration: 45,
    },
    'Ice Turret 3': {
        Health: 1000,
        Damage: 20,
        Cooldown: 0.35,
        Range: 12.5,
        SlowdownPerHit: 25,
        MaxSlow: 50,
        SlowdownTime: 5,
        FreezeTime: 2,
        Duration: 45,
    },
    'Ice Turret 4': {
        Health: 1000,
        Damage: 30,
        Cooldown: 0.3,
        Range: 15,
        SlowdownPerHit: 30,
        MaxSlow: 60,
        SlowdownTime: 5,
        FreezeTime: 2,
        Duration: 45,
    },

    'Top 4': {
        Damage: 12,
        Cooldown: 0.1,
        Range: 10.5,
        Detections: { Hidden: false, Flying: true, Lead: true },
        Cost: 17500,
        Limit: 5,
        Ammo: 150,
        ExplosionDamage: 35,
        ExplosionRadius: 3,
        MissileCooldown: 6,
        BurstCooldown: 0.5,
        ReloadTime: 3,
        RevTime: 1.5,
        MissileAmount: 4,
        RocketSpeed: 20,
        PatrolRange: 18.5,
        Speed: 25,
    },
    'Top 5': {
        Damage: 28,
        Cooldown: 0.085,
        Range: 12,
        Detections: { Hidden: true, Flying: true, Lead: true },
        Cost: 45000,
        Limit: 5,
        Ammo: 200,
        ExplosionDamage: 35,
        ExplosionRadius: 4,
        MissileCooldown: 6,
        BurstCooldown: 0.25,
        ReloadTime: 2.5,
        RevTime: 1.5,
        MissileAmount: 4,
        RocketSpeed: 20,
        PatrolRange: 21,
        Speed: 25,
    },
    'Bottom 4': {
        Damage: 10,
        Cooldown: 0.2,
        Range: 10.5,
        Detections: { Hidden: false, Flying: true, Lead: true },
        Cost: 13500,
        Limit: 5,
        Ammo: 75,
        ExplosionDamage: 45,
        ExplosionRadius: 5,
        MissileCooldown: 5,
        BurstCooldown: 0.25,
        ReloadTime: 2.25,
        RevTime: 0,
        MissileAmount: 6,
        RocketSpeed: 20,
        PatrolRange: 17.5,
        Speed: 25,
    },
    'Bottom 5': {
        Damage: 20,
        Cooldown: 0.2,
        Range: 10.5,
        Detections: { Hidden: false, Flying: true, Lead: true },
        Cost: 40000,
        Limit: 5,
        Ammo: 75,
        ExplosionDamage: 60,
        ExplosionRadius: 6,
        MissileCooldown: 3.5,
        BurstCooldown: 0.15,
        ReloadTime: 2.25,
        RevTime: 0,
        MissileAmount: 8,
        RocketSpeed: 20,
        PatrolRange: 19.5,
        Speed: 25,
    },

    'Gunner APC': {
        Health: 250,
        Damage: 10,
        ExplosionRadius: 0,
        MissileAmount: 0,
        Cooldown: 0.2,
        Range: 30,
        Speed: 4,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: false,
        },
    },
    'Missile APC': {
        Health: 400,
        Damage: 50,
        ExplosionRadius: 5,
        MissileAmount: 4,
        Cooldown: 2,
        Range: 25,
        Speed: 4,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: true,
        },
    },
};
