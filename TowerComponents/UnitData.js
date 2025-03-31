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
        Health: 600,
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
        Speed: 4,
        Lifetime: 150,
        Spawnrate: 50,
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
        Speed: 4,
        Lifetime: 200,
        Spawnrate: 50,
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
        Speed: 4,
        Lifetime: 200,
        Spawnrate: 50,
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
        Speed: 4,
        Lifetime: 150,
        Spawnrate: 50,
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
        Speed: 4,
        Lifetime: 200,
        Spawnrate: 50,
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
        Speed: 4,
        Lifetime: 200,
        Spawnrate: 50,
        Limit: 4,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    // Mercenary base
    Rifleman1: {
        Health: 40,
        Damage: 5,
        ExplosionRadius: 0,
        Cooldown: 0.15,
        Burst: 6,
        BurstCooldown: 1.5,
        Spawnrate: 45,
        AimTime: 0.35,
        Range: 18,
        Speed: 3.5,
        MaxSpeed: 3.5,
        Defense: 0,
        MaxHits: 0,
        ChargeTime: 0,
        Heal: 0,
        MaxTargets: 0,
        Lifetime: 240,
        Limit: 10,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    Rifleman2: {
        Health: 70,
        Damage: 12,
        ExplosionRadius: 0,
        Cooldown: 0.15,
        Burst: 8,
        BurstCooldown: 1.5,
        Spawnrate: 40,
        AimTime: 0.35,
        Range: 23,
        Speed: 3.5,
        MaxSpeed: 3.5,
        Defense: 0,
        MaxHits: 0,
        ChargeTime: 0,
        Heal: 0,
        MaxTargets: 0,
        Lifetime: 240,
        Limit: 10,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: false,
        },
    },
    Rifleman3: {
        Health: 250,
        Damage: 18,
        ExplosionRadius: 0,
        Cooldown: 0.15,
        Burst: 10,
        BurstCooldown: 1,
        Spawnrate: 35,
        AimTime: 0.35,
        Range: 28,
        Speed: 3.5,
        MaxSpeed: 3.5,
        Defense: 0,
        MaxHits: 0,
        ChargeTime: 0,
        Heal: 0,
        MaxTargets: 0,
        Lifetime: 240,
        Limit: 10,
        Detections: {
            Hidden: true,
            Flying: true,
            Lead: false,
        },
    },
    Grenadier1: {
        Health: 50,
        Damage: 35,
        ExplosionRadius: 3,
        Cooldown: 1.75,
        Burst: 0,
        BurstCooldown: 0,
        Spawnrate: 40,
        AimTime: 0,
        Range: 18,
        Speed: 2.5,
        MaxSpeed: 2.5,
        Defense: 0,
        MaxHits: 0,
        ChargeTime: 0,
        Heal: 0,
        MaxTargets: 0,
        Lifetime: 240,
        Limit: 7,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: true,
        },
    },
    Grenadier2: {
        Health: 125,
        Damage: 65,
        ExplosionRadius: 4.5,
        Cooldown: 1.5,
        Burst: 0,
        BurstCooldown: 0,
        Spawnrate: 40,
        AimTime: 0,
        Range: 19,
        Speed: 2.5,
        MaxSpeed: 2.5,
        Defense: 0,
        MaxHits: 0,
        ChargeTime: 0,
        Heal: 0,
        MaxTargets: 0,
        Lifetime: 240,
        Limit: 7,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: true,
        },
    },
    Grenadier3: {
        Health: 300,
        Damage: 100,
        ExplosionRadius: 4.5,
        Cooldown: 1.25,
        Burst: 0,
        BurstCooldown: 0,
        Spawnrate: 40,
        AimTime: 0,
        Range: 18,
        Speed: 2.5,
        MaxSpeed: 2.5,
        Defense: 10,
        MaxHits: 0,
        ChargeTime: 0,
        Heal: 0,
        MaxTargets: 0,
        Lifetime: 240,
        Limit: 7,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: true,
        },
    },

    RiotGuard1: {
        Health: 1200,
        Damage: 50,
        ExplosionRadius: 0,
        Cooldown: 1.5,
        Burst: 0,
        BurstCooldown: 0,
        Spawnrate: 50,
        AimTime: 0,
        Range: 4,
        Speed: 2.5,
        MaxSpeed: 7,
        Defense: 10,
        MaxHits: 10,
        ChargeTime: 4,
        Heal: 0,
        MaxTargets: 0,
        Lifetime: 240,
        Limit: 4,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    RiotGuard2: {
        Health: 2500,
        Damage: 50,
        ExplosionRadius: 0,
        Cooldown: 1,
        Burst: 0,
        BurstCooldown: 0,
        Spawnrate: 50,
        AimTime: 0,
        Range: 4,
        Speed: 2.5,
        MaxSpeed: 7,
        Defense: 15,
        MaxHits: 10,
        ChargeTime: 3,
        Heal: 0,
        MaxTargets: 0,
        Lifetime: 240,
        Limit: 4,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },

    FieldMedic1: {
        Health: 300,
        Damage: 0,
        ExplosionRadius: 0,
        Cooldown: 0.2,
        Burst: 0,
        BurstCooldown: 0,
        Spawnrate: 35,
        AimTime: 0,
        Range: 30,
        Speed: 2.5,
        MaxSpeed: 2.5,
        Defense: 0,
        MaxHits: 0,
        ChargeTime: 0,
        Heal: 5,
        MaxTargets: 4,
        Lifetime: 240,
        Limit: 3,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    FieldMedic2: {
        Health: 600,
        Damage: 0,
        ExplosionRadius: 0,
        Cooldown: 0.2,
        Burst: 0,
        BurstCooldown: 0,
        Spawnrate: 30,
        AimTime: 0,
        Range: 30,
        Speed: 2.5,
        MaxSpeed: 2.5,
        Defense: 0,
        MaxHits: 0,
        ChargeTime: 0,
        Heal: 10,
        MaxTargets: 8,
        Lifetime: 240,
        Limit: 3,
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
            Lead: true,
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
            Lead: true,
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
            Lead: true,
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
            Lead: true,
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
        ExplosionDamage: 0,
        ExplosionRadius: 0,
        Cooldown: 0.2,
        TimeBetweenMissiles: 0,
        Range: 5,
        Speed: 8,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    ['Humvee 2']: {
        Health: 60,
        Damage: 0,
        ExplosionDamage: 0,
        ExplosionRadius: 0,
        Cooldown: 0.2,
        TimeBetweenMissiles: 0,
        Range: 5,
        Speed: 6,
        Detections: {
            Hidden: false,
            Flying: false,
            Lead: false,
        },
    },
    ['Humvee 3']: {
        Health: 90,
        Damage: 3,
        ExplosionDamage: 0,
        ExplosionRadius: 0,
        Cooldown: 0.2,
        TimeBetweenMissiles: 0,
        Range: 30,
        Speed: 5.5,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    Tank: {
        Health: 500,
        Damage: 10,
        ExplosionDamage: 40,
        ExplosionRadius: 6,
        Cooldown: 0.2,
        TimeBetweenMissiles: 2,
        Range: 30,
        Speed: 5,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: false,
        },
    },
    ['Railgun Tank']: {
        Health: 1500,
        Damage: 24,
        ExplosionDamage: 80,
        ExplosionRadius: 8,
        Cooldown: 0.15,
        TimeBetweenMissiles: 3,
        Range: 30,
        Speed: 5.5,
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
        Speed: 3,
        ExplosionDamage: 0,
        MissileAmount: 1,
        TimeBetweenMissiles: 0,
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
        Speed: 3,
        ExplosionDamage: 8,
        MissileAmount: 1,
        TimeBetweenMissiles: 5,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: true,
        },
    },
    Mark2: {
        Health: 750,
        Damage: 12,
        Cooldown: 0.15,
        Range: 25,
        Speed: 3,
        ExplosionDamage: 8,
        MissileAmount: 1,
        TimeBetweenMissiles: 5,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: true,
        },
    },
    Mark3: {
        Health: 1200,
        Damage: 10,
        Cooldown: 0.08,
        Range: 25,
        Speed: 3,
        ExplosionDamage: 8,
        MissileAmount: 1,
        TimeBetweenMissiles: 3,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: true,
        },
    },
    Mark4: {
        Health: 2000,
        Damage: 10,
        Cooldown: 0.05,
        Range: 100,
        Speed: 3,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 3,
        MissileAmount: 4,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: true,
        },
    },
    Mark5: {
        Health: 5000,
        Damage: 20,
        Cooldown: 0.05,
        Range: 100,
        Speed: 3,
        ExplosionDamage: 8,
        TimeBetweenMissiles: 3,
        MissileAmount: 4,
        Detections: {
            Hidden: true,
            Flying: false,
            Lead: true,
        },
    },

    'Thorns 0': {
        Damage: 2,
        Range: 10,
        Lifetime: 8,
        Slowdown: '15%',
        TickRate: 0.5,
    },
    'Thorns 1': {
        Damage: 4,
        Range: 12,
        Lifetime: 8,
        Slowdown: '15%',
        TickRate: 0.5,
    },
    'Thorns 2': {
        Damage: 6,
        Range: 12,
        Lifetime: 10,
        Slowdown: '20%',
        TickRate: 0.5,
    },
    'Thorns 3': {
        Damage: 12,
        Range: 16,
        Lifetime: 10,
        Slowdown: '20%',
        TickRate: 0.5,
    },
    'Thorns 4': {
        Damage: 20,
        Range: 18,
        Lifetime: 16,
        Slowdown: '25%',
        TickRate: 0.5,
    },
    'Thorns 5': {
        Damage: 30,
        Range: 20,
        Lifetime: 16,
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
        Lifetime: 45,
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
        Lifetime: 45,
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
        Lifetime: 45,
    },

    'Top 4': {
        Damage: 12,
        Cooldown: 0.1,
        Range: 11,
        Detections: { Hidden: false, Flying: true, Lead: true },
        Cost: 16000,
        Limit: 5,
        Ammo: 150,
        ExplosionDamage: 35,
        ExplosionRadius: 3,
        MissileCooldown: 6,
        TimeBetweenMissiles: 0.5,
        ReloadTime: 3,
        RevTime: 1.5,
        MissileAmount: 4,
        RocketSpeed: 20,
        PatrolRange: 18.5,
        Speed: 25,
    },
    'Top 5': {
        Damage: 26,
        Cooldown: 0.085,
        Range: 12,
        Detections: { Hidden: false, Flying: true, Lead: true },
        Cost: 42500,
        Limit: 5,
        Ammo: 200,
        ExplosionDamage: 35,
        ExplosionRadius: 4,
        MissileCooldown: 6,
        TimeBetweenMissiles: 0.25,
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
        Range: 11,
        Detections: { Hidden: true, Flying: true, Lead: true },
        Cost: 10000,
        Limit: 5,
        Ammo: 75,
        ExplosionDamage: 25,
        ExplosionRadius: 6,
        MissileCooldown: 3,
        TimeBetweenMissiles: 0.25,
        ReloadTime: 3.5,
        RevTime: 0,
        MissileAmount: 6,
        RocketSpeed: 20,
        PatrolRange: 17.5,
        Speed: 25,
    },
    'Bottom 5': {
        Damage: 12,
        Cooldown: 0.2,
        Range: 12,
        Detections: { Hidden: true, Flying: true, Lead: true },
        Cost: 28500,
        Limit: 5,
        Ammo: 75,
        ExplosionDamage: 60,
        ExplosionRadius: 6,
        MissileCooldown: 3,
        TimeBetweenMissiles: 0.15,
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

    'Spike 0': {
        Health: 10,
        Damage: 10,
        Cooldown: 5.25,
        BurnDamage: 0,
        TickRate: 0,
        BurnTime: 0,
        ExplosionRadius: 0,
        StunLength: 0,
    },
    'Spike 1': {
        Health: 20,
        Damage: 20,
        Cooldown: 5,
        BurnDamage: 0,
        TickRate: 0,
        BurnTime: 0,
        ExplosionRadius: 0,
        StunLength: 0,
    },
    'Spike 2': {
        Health: 60,
        Damage: 25,
        Cooldown: 5,
        BurnDamage: 0,
        TickRate: 0,
        BurnTime: 0,
        ExplosionRadius: 0,
        StunLength: 0,
    },
    'Spike 3': {
        Health: 200,
        Damage: 25,
        Cooldown: 7.5,
        BurnDamage: 0,
        TickRate: 0,
        BurnTime: 0,
        ExplosionRadius: 0,
        StunLength: 0,
    },
    'Spike 4': {
        Health: 450,
        Damage: 40,
        Cooldown: 5,
        BurnDamage: 0,
        TickRate: 0,
        BurnTime: 0,
        ExplosionRadius: 0,
        StunLength: 0,
    },
    'Landmine 2': {
        Health: 0,
        Damage: 60,
        BurnDamage: 3,
        TickRate: 1,
        BurnTime: 1,
        ExplosionRadius: 5,
        StunLength: 0,
        Cooldown: 5,
    },
    'Landmine 3': {
        Health: 0,
        Damage: 80,
        BurnDamage: 5,
        TickRate: 0.25,
        BurnTime: 2,
        ExplosionRadius: 5,
        StunLength: 0,
        Cooldown: 4,
    },
    'Landmine 4': {
        Health: 0,
        Damage: 140,
        BurnDamage: 7,
        TickRate: 0.25,
        BurnTime: 5,
        ExplosionRadius: 7,
        StunLength: 0,
        Cooldown: 2,
    },
    'Bear Trap 4': {
        Health: 0,
        Damage: 300,
        BurnDamage: 0,
        TickRate: 0,
        BurnTime: 0,
        ExplosionRadius: 0,
        StunLength: 3,
        Cooldown: 3.5,
    },

    'Missile 1': {
        ExplosionDamage: 150,
        MissileAmount: 2,
        StunLength: 1.5,
        Lifetime: 60,
        Range: 30,
        ExplosionRadius: 4,
    },
    'Missile 2': {
        ExplosionDamage: 200,
        MissileAmount: 4,
        StunLength: 2,
        Lifetime: 60,
        Range: 34,
        ExplosionRadius: 6,
    },

    'Fire Bomb 0': {
        Damage: 2,
        BurnDamage: 1,
        Cooldown: 1.5,
        TickRate: 1,
        BurnTime: 3,
        PoisonLength: 0,
        Range: 10,
        ExplosionRadius: 3,
        PoisonRadius: 0,
        SlowdownTime: 0,
        SlowdownPerHit: 0,
        MaxSlow: 0,
        DefenseMelt: 0,
        ConfusionTime: 0,
        ConfusionCooldown: 0,
        MaxHits: 5,
    },
    'Fire Bomb 1': {
        Damage: 2,
        BurnDamage: 1,
        Cooldown: 1,
        TickRate: 1,
        BurnTime: 3,
        PoisonLength: 0,
        Range: 12,
        ExplosionRadius: 3,
        PoisonRadius: 0,
        SlowdownTime: 0,
        SlowdownPerHit: 0,
        MaxSlow: 0,
        DefenseMelt: 0,
        ConfusionTime: 0,
        ConfusionCooldown: 0,
        MaxHits: 5,
    },
    'Fire Bomb 2': {
        Damage: 4,
        BurnDamage: 2,
        Cooldown: 1,
        TickRate: 1,
        BurnTime: 4,
        PoisonLength: 0,
        Range: 12,
        ExplosionRadius: 3,
        PoisonRadius: 0,
        SlowdownTime: 0,
        SlowdownPerHit: 0,
        MaxSlow: 0,
        DefenseMelt: 0,
        ConfusionTime: 0,
        ConfusionCooldown: 0,
        MaxHits: 5,
    },
    'Fire Bomb 3': {
        Damage: 12,
        BurnDamage: 6,
        Cooldown: 1,
        TickRate: 1,
        BurnTime: 6,
        PoisonLength: 0,
        Range: 12,
        ExplosionRadius: 3,
        PoisonRadius: 0,
        SlowdownTime: 0,
        SlowdownPerHit: 0,
        MaxSlow: 0,
        DefenseMelt: 0,
        ConfusionTime: 0,
        ConfusionCooldown: 0,
        MaxHits: 5,
    },
    'Fire Bomb 4': {
        Damage: 22,
        BurnDamage: 11,
        Cooldown: 0.75,
        TickRate: 0.5,
        BurnTime: 6,
        PoisonLength: 0,
        Range: 14,
        ExplosionRadius: 3,
        PoisonRadius: 0,
        SlowdownTime: 0,
        SlowdownPerHit: 0,
        MaxSlow: 0,
        DefenseMelt: 0,
        ConfusionTime: 0,
        ConfusionCooldown: 0,
        MaxHits: 5,
    },
    'Ice Bomb 2': {
        Damage: 2,
        BurnDamage: 0,
        Cooldown: 1,
        TickRate: 0,
        BurnTime: 0,
        PoisonLength: 0,
        Range: 12,
        ExplosionRadius: 3,
        PoisonRadius: 0,
        SlowdownTime: 2,
        SlowdownPerHit: 30,
        MaxSlow: 60,
        DefenseMelt: 0,
        ConfusionTime: 0,
        ConfusionCooldown: 0,
        MaxHits: 5,
    },
    'Ice Bomb 3': {
        Damage: 6,
        BurnDamage: 0,
        Cooldown: 1,
        TickRate: 0,
        BurnTime: 0,
        PoisonLength: 0,
        Range: 12,
        ExplosionRadius: 3,
        PoisonRadius: 0,
        SlowdownTime: 2,
        SlowdownPerHit: 30,
        MaxSlow: 60,
        DefenseMelt: 0,
        ConfusionTime: 0,
        ConfusionCooldown: 0,
        MaxHits: 5,
    },
    'Ice Bomb 4': {
        Damage: 11,
        BurnDamage: 0,
        Cooldown: 0.75,
        TickRate: 0,
        BurnTime: 0,
        PoisonLength: 0,
        Range: 14,
        ExplosionRadius: 3,
        PoisonRadius: 0,
        SlowdownTime: 2,
        SlowdownPerHit: 30,
        MaxSlow: 60,
        DefenseMelt: 0,
        ConfusionTime: 0,
        ConfusionCooldown: 0,
        MaxHits: 5,
    },
    'Poison Bomb 3': {
        Damage: 4,
        BurnDamage: 0,
        Cooldown: 1,
        TickRate: 0.5,
        BurnTime: 0,
        PoisonLength: 10,
        Range: 12,
        ExplosionRadius: 0,
        PoisonRadius: 3.5,
        SlowdownTime: 0,
        SlowdownPerHit: 0,
        MaxSlow: 0,
        DefenseMelt: 1,
        ConfusionTime: 0,
        ConfusionCooldown: 0,
        MaxHits: 0,
    },
    'Poison Bomb 4': {
    Damage: 7,
    BurnDamage: 0,
    Cooldown: 0.75,
    TickRate: 0.5,
    BurnTime: 0,
    PoisonLength: 10,
    Range: 14,
    ExplosionRadius: 0,
    PoisonRadius: 3.5,
    SlowdownTime: 0,
    SlowdownPerHit: 0,
    MaxSlow: 0,
    DefenseMelt: 1,
    ConfusionTime: 0,
    ConfusionCooldown: 0,
    MaxHits: 0,
    },
    'Confusion Bomb 4': {
    Damage: 11,
    BurnDamage: 0,
    Cooldown: 0.75,
    TickRate: 0,
    BurnTime: 0,
    PoisonLength: 0,
    Range: 14,
    ExplosionRadius: 3,
    PoisonRadius: 0,
    SlowdownTime: 0,
    SlowdownPerHit: 0,
    MaxSlow: 0,
    DefenseMelt: 0,
    ConfusionTime: 2,
    ConfusionCooldown: 8,
    MaxHits: 5,
    },

    'Purple Track 0': {
        RangeBuff: true,
        DiscountBuff: false,
        DamageBuff: false,
        Active: 12.5,
        Inactive: 0,
        Damage: 0,
        Pulse: 0,
        MaxHits: 0,
        KnockbackForce: 0,
        SlowdownTime: 0,
        BaseSlowdown: 0,
        SlowdownPerTower: 0,
        MaxSlow: 0,
        BaseIncome: 0,
        IncomePerTower: 0,
        MaxIncome: 0,
        BaseDefenseMelt: 0,
        DefenseMeltPerTower: 0,
        MaxDefenseMelt: 0,
    },
    'Purple Track 1': {
        RangeBuff: true,
        DiscountBuff: false,
        DamageBuff: false,
        Active: 12.5,
        Inactive: 0,
        Damage: 0,
        Pulse: 0,
        MaxHits: 0,
        KnockbackForce: 0,
        SlowdownTime: 0,
        BaseSlowdown: 0,
        SlowdownPerTower: 0,
        MaxSlow: 0,
        BaseIncome: 0,
        IncomePerTower: 0,
        MaxIncome: 0,
        BaseDefenseMelt: 0,
        DefenseMeltPerTower: 0,
        MaxDefenseMelt: 0,
    },
    'Purple Track 2': {
        RangeBuff: true,
        DiscountBuff: false,
        DamageBuff: false,
        Active: 15,
        Inactive: 0,
        Damage: 0,
        Pulse: 0,
        MaxHits: 0,
        KnockbackForce: 0,
        SlowdownTime: 0,
        BaseSlowdown: 0,
        SlowdownPerTower: 0,
        MaxSlow: 0,
        BaseIncome: 0,
        IncomePerTower: 0,
        MaxIncome: 0,
        BaseDefenseMelt: 0,
        DefenseMeltPerTower: 0,
        MaxDefenseMelt: 0,
    },
    'Purple Track 3': {
        RangeBuff: true,
        DiscountBuff: false,
        DamageBuff: false,
        Active: 17.5,
        Inactive: 0,
        Damage: 0,
        Pulse: 3,
        MaxHits: 8,
        KnockbackForce: 20,
        SlowdownTime: 6,
        BaseSlowdown: 20,
        SlowdownPerTower: 1,
        MaxSlow: 40,
        BaseIncome: 0,
        IncomePerTower: 0,
        MaxIncome: 0,
        BaseDefenseMelt: 0,
        DefenseMeltPerTower: 0,
        MaxDefenseMelt: 0,
    },
    'Purple Track 4': {
        RangeBuff: true,
        DiscountBuff: false,
        DamageBuff: false,
        Active: 22.5,
        Inactive: 0,
        Damage: 0,
        Pulse: 3,
        MaxHits: 9,
        KnockbackForce: 22.5,
        SlowdownTime: 8,
        BaseSlowdown: 20,
        SlowdownPerTower: 1,
        MaxSlow: 40,
        BaseIncome: 0,
        IncomePerTower: 0,
        MaxIncome: 0,
        BaseDefenseMelt: 0,
        DefenseMeltPerTower: 0,
        MaxDefenseMelt: 0,
    },
    'Purple Track 5': {
        RangeBuff: true,
        DiscountBuff: false,
        DamageBuff: false,
        Active: 25,
        Inactive: 12.5,
        Damage: 0,
        Pulse: 4,
        MaxHits: 10,
        KnockbackForce: 20,
        SlowdownTime: 10,
        BaseSlowdown: 30,
        SlowdownPerTower: 1,
        MaxSlow: 50,
        BaseIncome: 0,
        IncomePerTower: 0,
        MaxIncome: 0,
        BaseDefenseMelt: 0,
        DefenseMeltPerTower: 0,
        MaxDefenseMelt: 0,
    },
    'Green Track 0': {
        RangeBuff: false,
        DiscountBuff: true,
        DamageBuff: false,
        Active: 5,
        Inactive: 0,
        Damage: 0,
        Pulse: 0,
        MaxHits: 0,
        KnockbackForce: 0,
        SlowdownTime: 0,
        BaseSlowdown: 0,
        SlowdownPerTower: 0,
        MaxSlow: 0,
        BaseIncome: 0,
        IncomePerTower: 0,
        MaxIncome: 0,
        BaseDefenseMelt: 0,
        DefenseMeltPerTower: 0,
        MaxDefenseMelt: 0,
    },
    'Green Track 1': {
        RangeBuff: false,
        DiscountBuff: true,
        DamageBuff: false,
        Active: 5,
        Inactive: 0,
        Damage: 0,
        Pulse: 0,
        MaxHits: 0,
        KnockbackForce: 0,
        SlowdownTime: 0,
        BaseSlowdown: 0,
        SlowdownPerTower: 0,
        MaxSlow: 0,
        BaseIncome: 0,
        IncomePerTower: 0,
        MaxIncome: 0,
        BaseDefenseMelt: 0,
        DefenseMeltPerTower: 0,
        MaxDefenseMelt: 0,
    },
    'Green Track 2': {
        RangeBuff: false,
        DiscountBuff: true,
        DamageBuff: false,
        Active: 7.5,
        Inactive: 0,
        Damage: 0,
        Pulse: 0,
        MaxHits: 0,
        KnockbackForce: 0,
        SlowdownTime: 0,
        BaseSlowdown: 0,
        SlowdownPerTower: 0,
        MaxSlow: 0,
        BaseIncome: 0,
        IncomePerTower: 0,
        MaxIncome: 0,
        BaseDefenseMelt: 0,
        DefenseMeltPerTower: 0,
        MaxDefenseMelt: 0,
    },
    'Green Track 3': {
        RangeBuff: false,
        DiscountBuff: true,
        DamageBuff: false,
        Active: 10,
        Inactive: 0,
        Damage: 0,
        Pulse: 0,
        MaxHits: 0,
        KnockbackForce: 0,
        SlowdownTime: 0,
        BaseSlowdown: 0,
        SlowdownPerTower: 0,
        MaxSlow: 0,
        BaseIncome: 250,
        IncomePerTower: 35,
        MaxIncome: 600,
        BaseDefenseMelt: 0,
        DefenseMeltPerTower: 0,
        MaxDefenseMelt: 0,
    },
    'Green Track 4': {
        RangeBuff: false,
        DiscountBuff: true,
        DamageBuff: false,
        Active: 12.5,
        Inactive: 0,
        Damage: 0,
        Pulse: 0,
        MaxHits: 0,
        KnockbackForce: 0,
        SlowdownTime: 0,
        BaseSlowdown: 0,
        SlowdownPerTower: 0,
        MaxSlow: 0,
        BaseIncome: 500,
        IncomePerTower: 50,
        MaxIncome: 1250,
        BaseDefenseMelt: 0,
        DefenseMeltPerTower: 0,
        MaxDefenseMelt: 0,
    },
    'Green Track 5': {
        RangeBuff: false,
        DiscountBuff: true,
        DamageBuff: false,
        Active: 15,
        Inactive: 7.5,
        Damage: 0,
        Pulse: 0,
        MaxHits: 0,
        KnockbackForce: 0,
        SlowdownTime: 0,
        BaseSlowdown: 0,
        SlowdownPerTower: 0,
        MaxSlow: 0,
        BaseIncome: 750,
        IncomePerTower: 75,
        MaxIncome: 2250,
        BaseDefenseMelt: 0,
        DefenseMeltPerTower: 0,
        MaxDefenseMelt: 0,
    },
    'Red Track 2': {
        RangeBuff: false,
        DiscountBuff: false,
        DamageBuff: true,
        Active: 10,
        Inactive: 0,
        Damage: 0,
        Pulse: 0,
        MaxHits: 0,
        KnockbackForce: 0,
        SlowdownTime: 0,
        BaseSlowdown: 0,
        SlowdownPerTower: 0,
        MaxSlow: 0,
        BaseIncome: 0,
        IncomePerTower: 0,
        MaxIncome: 0,
        BaseDefenseMelt: 0,
        DefenseMeltPerTower: 0,
        MaxDefenseMelt: 0,
    },
    'Red Track 3': {
        RangeBuff: false,
        DiscountBuff: false,
        DamageBuff: true,
        Active: 12.5,
        Inactive: 0,
        Damage: 15,
        Pulse: 3,
        MaxHits: 0,
        KnockbackForce: 0,
        SlowdownTime: 0,
        BaseSlowdown: 0,
        SlowdownPerTower: 0,
        MaxSlow: 0,
        BaseIncome: 0,
        IncomePerTower: 0,
        MaxIncome: 0,
        BaseDefenseMelt: 5,
        DefenseMeltPerTower: 1,
        MaxDefenseMelt: 25,
    },
    'Red Track 4': {
        RangeBuff: false,
        DiscountBuff: false,
        DamageBuff: true,
        Active: 15,
        Inactive: 0,
        Damage: 25,
        Pulse: 3,
        MaxHits: 0,
        KnockbackForce: 0,
        SlowdownTime: 0,
        BaseSlowdown: 0,
        SlowdownPerTower: 0,
        MaxSlow: 0,
        BaseIncome: 0,
        IncomePerTower: 0,
        MaxIncome: 0,
        BaseDefenseMelt: 7,
        DefenseMeltPerTower: 1,
        MaxDefenseMelt: 25,
    },
    'Red Track 5': {
        RangeBuff: false,
        DiscountBuff: false,
        DamageBuff: true,
        Active: 20,
        Inactive: 10,
        Damage: 50,
        Pulse: 4,
        MaxHits: 0,
        KnockbackForce: 0,
        SlowdownTime: 0,
        BaseSlowdown: 0,
        SlowdownPerTower: 0,
        MaxSlow: 0,
        BaseIncome: 0,
        IncomePerTower: 0,
        MaxIncome: 0,
        BaseDefenseMelt: 10,
        DefenseMeltPerTower: 1,
        MaxDefenseMelt: 25,
    },

    'Arrow 0': {
        Detections: { Flying: false, Hidden: false, Lead: false },
        BurnDamage: 0,
        ExplosionDamage: 0,
        TickRate: 0,
        BurnTime: 0,
        StunTime: 0,
        ExplosionRadius: 0,
        MaxHits: 2,
    },
    'Arrow 1': {
        Detections: { Flying: true, Hidden: false, Lead: false },
        BurnDamage: 0,
        ExplosionDamage: 0,
        TickRate: 0,
        BurnTime: 0,
        StunTime: 0,
        ExplosionRadius: 0,
        MaxHits: 2,
    },
    'Arrow 2': {
        Detections: { Flying: true, Hidden: true, Lead: false },
        BurnDamage: 0,
        ExplosionDamage: 0,
        TickRate: 0,
        BurnTime: 0,
        StunTime: 0,
        ExplosionRadius: 0,
        MaxHits: 3,
    },
    'Flame Arrow 3': {
        Detections: { Flying: true, Hidden: true, Lead: true },
        BurnDamage: 1,
        ExplosionDamage: 0,
        TickRate: 0.5,
        BurnTime: 2,
        StunTime: 0,
        ExplosionRadius: 0,
        MaxHits: 3,
    },
    'Flame Arrow 4': {
        Detections: { Flying: true, Hidden: true, Lead: true },
        BurnDamage: 2,
        ExplosionDamage: 0,
        TickRate: 0.5,
        BurnTime: 3,
        StunTime: 0,
        ExplosionRadius: 0,
        MaxHits: 4,
    },
    'Flame Arrow 5': {
        Detections: { Flying: true, Hidden: true, Lead: true },
        BurnDamage: 4,
        ExplosionDamage: 0,
        TickRate: 0.5,
        BurnTime: 4,
        StunTime: 0,
        ExplosionRadius: 0,
        MaxHits: 6,
    },
    'Shock Arrow 4': {
        Detections: { Flying: true, Hidden: true, Lead: false },
        BurnDamage: 0,
        ExplosionDamage: 0,
        TickRate: 0,
        BurnTime: 0,
        StunTime: 0.25,
        ExplosionRadius: 0,
        MaxHits: 3,
    },
    'Shock Arrow 5': {
        Detections: { Flying: true, Hidden: true, Lead: false },
        BurnDamage: 0,
        ExplosionDamage: 0,
        TickRate: 0,
        BurnTime: 0,
        StunTime: 0.3,
        ExplosionRadius: 0,
        MaxHits: 3,
    },
    'Explosive Arrow 5': {
        Detections: { Flying: true, Hidden: true, Lead: true },
        BurnDamage: 0,
        ExplosionDamage: 48,
        TickRate: 0,
        BurnTime: 0,
        StunTime: 0,
        ExplosionRadius: 5,
        MaxHits: 1,
    },

    'Elf 0': {
        Detections: { Flying: false, Hidden: true, Lead: false },
        Health: 8,
        Damage: 0,
        ExplosionDamage: 0,
        Burst: 0,
        Cooldown: 0,
        BurstCooldown: 0,
        ExplosionRadius: 0,
        Speed: 6,
        Spawnrate: 15,
        Range: 1.5,
        Limit: 10,
    },
    'Elf 1': {
        Detections: { Flying: false, Hidden: true, Lead: false },
        Health: 8,
        Damage: 0,
        ExplosionDamage: 0,
        Burst: 0,
        Cooldown: 0,
        BurstCooldown: 0,
        ExplosionRadius: 0,
        Speed: 6,
        Spawnrate: 12,
        Range: 1.5,
        Limit: 10,
    },
    'Snowball Elf': {
        Detections: { Flying: false, Hidden: true, Lead: false },
        Health: 12,
        Damage: 3,
        ExplosionDamage: 0,
        Burst: 0,
        Cooldown: 3,
        BurstCooldown: 0,
        ExplosionRadius: 0,
        Speed: 6,
        Spawnrate: 20,
        Range: 18,
        Limit: 4,
    },
    'Bomber Elf': {
        Detections: { Flying: false, Hidden: true, Lead: true },
        Health: 14,
        Damage: 0,
        ExplosionDamage: 35,
        Burst: 0,
        Cooldown: 0,
        BurstCooldown: 0,
        ExplosionRadius: 8,
        Speed: 6.35,
        Spawnrate: 25,
        Range: 1.5,
        Limit: 10,
    },
    'Cannoneer Elf': {
        Detections: { Flying: false, Hidden: true, Lead: false },
        Health: 20,
        Damage: 4,
        ExplosionDamage: 0,
        Burst: 0,
        Cooldown: 0.5,
        BurstCooldown: 0,
        ExplosionRadius: 0,
        Speed: 4,
        Spawnrate: 20,
        Range: 18,
        Limit: 4,
    },
    'Guardian Elf': {
        Detections: { Flying: false, Hidden: true, Lead: false },
        Health: 60,
        Damage: 15,
        ExplosionDamage: 0,
        Burst: 0,
        Cooldown: 0.5,
        BurstCooldown: 0,
        ExplosionRadius: 0,
        Speed: 6.25,
        Spawnrate: 25,
        Range: 6,
        Limit: 4,
    },
    'Gunner Elf': {
        Detections: { Flying: false, Hidden: true, Lead: false },
        Health: 25,
        Damage: 6,
        ExplosionDamage: 0,
        Burst: 6,
        Cooldown: 0.2,
        BurstCooldown: 1,
        ExplosionRadius: 0,
        Speed: 4,
        Spawnrate: 25,
        Range: 25,
        Limit: 4,
    },
    'Gift Bomber': {
        Detections: { Flying: false, Hidden: true, Lead: true },
        Health: 140,
        Damage: 0,
        ExplosionDamage: 40,
        Burst: 0,
        Cooldown: 2,
        BurstCooldown: 0,
        ExplosionRadius: 8,
        Speed: 3,
        Spawnrate: 50,
        Range: 14,
        Limit: 2,
    },
    'Ripped Elf':{
        Detections: { Flying: false, Hidden: true, Lead: true },
        Health: 800,
        Damage: 0,
        ExplosionDamage: 140,
        Burst: 0,
        Cooldown: 4,
        BurstCooldown: 0,
        ExplosionRadius: 12,
        Speed: 3,
        Spawnrate: 80,
        Range: 40,
        Limit: 2,
    },
};
