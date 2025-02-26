import SkinData from './SkinData.js';
import UnitManager from './UnitManager.js';
import UpgradeViewer from '../components/UpgradeViewer.js';

class CalculatedManager {
    constructor(unitKey) {
        this.unitManager = new UnitManager(unitKey);
        this.unitManager.load();
        this.upgradeViewer = new UpgradeViewer();
    }

    calculated = {
        LaserDPS: {
            Default: {
                For: ['Accelerator'],
                Requires: ['Damage', 'Cooldown'],
                Value: (level) => level.Damage / level.Cooldown,
            },
        },
        TowerDPS: {
            Default: {
                For: ['Engineer'],
                Requires: ['Damage', 'Cooldown'],
                Value: (level) => level.Damage / level.Cooldown,
            },      
            Crook: {
                For: ['Crook Boss'],
                Requires: [
                    'Damage',
                    'Cooldown',
                    'PistolCrookSpawnTime',
                    'TommyCrookSpawnTime',
                    'BackupCallTime',
                ],
                Value: (level) => {
                    const pistolDelayPerMinute =
                        level.PistolCrookSpawnTime > 0
                            ? level.BackupCallTime *
                              (60 / level.PistolCrookSpawnTime)
                            : 0;
                    const tommyDelayPerMinute =
                        level.TommyCrookSpawnTime > 0
                            ? level.BackupCallTime *
                              (60 / level.TommyCrookSpawnTime)
                            : 0;

                    const dpm =
                        (level.Damage *
                            (60 - pistolDelayPerMinute - tommyDelayPerMinute)) /
                        level.Cooldown;

                    return dpm / 60;
                },
            },
        },
        RamDPS: {
            Default: {
                Exclude: ['Engineer'],
                Requires: ['UnitToSend', 'SpawnTime'],
                Value: (level) => {
                    this.unitManager.load();

                    if (!this.unitManager.hasUnit(level.UnitToSend)) return 0;
                    const unit = this.unitManager.unitData[level.UnitToSend];

                    return unit.attributes.Health / level.SpawnTime;
                },
            },
            Crook: {
                For: ['Crook Boss'],
                Requires: [
                    'PistolCrookSpawnTime',
                    'DoublePistolCrooks',
                    'TommyCrookSpawnTime',
                    'TommyDrum',
                ],
                Value: (level) => {
                    const skin = level.levels.skinData.name;
                    this.unitManager.load();

                    const goldText = skin == 'Golden' ? 'Golden' : '';
                    const goon1 = this.unitManager.unitData[`${goldText}Goon1`];
                    const goon2 = this.unitManager.unitData[`${goldText}Goon2`];
                    const goon3 = this.unitManager.unitData[`${goldText}Goon3`];

                    let goon1Ram =
                        level.PistolCrookSpawnTime &&
                        goon1.attributes.Health / level.PistolCrookSpawnTime;
                    if (level.DoublePistolCrooks) goon1Ram *= 2;

                    let goon2Ram =
                        level.TommyCrookSpawnTime &&
                        goon2.attributes.Health / level.TommyCrookSpawnTime;
                    if (level.TommyDrum)
                        goon2Ram =
                            goon3.attributes.Health / level.TommyCrookSpawnTime;

                    return goon1Ram + goon2Ram;
                },
            },
        },
        UnitDPS: {
            Default: {
                Requires: ['UnitToSend'],
                Value: (level) => {
                    this.unitManager.load();

                    const unitName = level.UnitToSend;
                    if (!this.unitManager.hasUnit(unitName)) return 0;

                    const unitData = this.unitManager.unitData[unitName];

                    return unitData.attributes.DPS;
                },
            },
            Engineer: {
                For: ['Engineer'],
                Requires: ['UnitToSend', 'MaxUnits'],
                Value: (level) => {
                    this.unitManager.load();
                    if (!this.unitManager.hasUnit(level.UnitToSend)) return 0;

                    const unit = this.unitManager.unitData[level.UnitToSend];

                    return unit.attributes.DPS * level.MaxUnits;
                },
            },
            Crook: {
                For: ['Crook Boss'],
                Requires: [
                    'PistolCrookSpawnTime',
                    'DoublePistolCrooks',
                    'TommyCrookSpawnTime',
                    'TommyDrum',
                ],
                Value: (level) => {
                    const skin = level.levels.skinData.name;
                    this.unitManager.load();

                    const goldText = skin == 'Golden' ? 'Golden' : '';
                    const goon1 = this.unitManager.unitData[`${goldText}Goon1`];
                    const goon2 = this.unitManager.unitData[`${goldText}Goon2`];
                    const goon3 = this.unitManager.unitData[`${goldText}Goon3`];

                    let goon1DPS =
                        level.PistolCrookSpawnTime && goon1.attributes.DPS;
                    if (level.DoublePistolCrooks) goon1DPS *= 2;

                    let goon2DPS =
                        level.TommyCrookSpawnTime && goon2.attributes.DPS;
                    if (level.TommyDrum) goon2DPS = goon3.attributes.DPS;

                    return goon1DPS + goon2DPS;
                },
            },
        },
        AggregateUnitDPS: {
            Default: {
                Requires: ['UnitDPS', 'SpawnTime'],
                Value: (level) => {
                    let damage = 0;
                    let remainingTime = 60;

                    if (level.SpawnTime <= 0.1) {
                        return Infinity;
                    }

                    while (remainingTime > 0) {
                        damage += level.UnitDPS * remainingTime;

                        remainingTime -= level.SpawnTime;
                    }

                    return damage / 60;
                },
            },
            Crook: {
                For: ['Crook Boss'],
                Requires: [
                    'PistolCrookSpawnTime',
                    'TommyCrookSpawnTime',
                    'DoublePistolCrooks',
                    'TommyDrum',
                ],
                Value: (level) => {
                    const skin = level.levels.skinData.name;
                    this.unitManager.load();

                    const goldText = skin == 'Golden' ? 'Golden' : '';
                    const goon1 = this.unitManager.unitData[`${goldText}Goon1`];
                    const goon2 = this.unitManager.unitData[`${goldText}Goon2`];
                    const goon3 = this.unitManager.unitData[`${goldText}Goon3`];

                    let goon1DPS =
                        level.PistolCrookSpawnTime && goon1.attributes.DPS;
                    if (level.DoublePistolCrooks) goon1DPS *= 2;

                    let goon2DPS =
                        level.TommyCrookSpawnTime && goon2.attributes.DPS;
                    if (level.TommyDrum) goon2DPS = goon3.attributes.DPS;

                    let damage = 0;
                    let remainingTime = 60;

                    if (level.PistolCrookSpawnTime > 0.1) {
                        while (remainingTime > 0) {
                            damage += goon1DPS * remainingTime;

                            remainingTime -= level.PistolCrookSpawnTime;
                        }
                    }

                    remainingTime = 60;

                    if (level.TommyCrookSpawnTime > 0.1) {
                        while (remainingTime > 0) {
                            damage += goon2DPS * remainingTime;

                            remainingTime -= level.TommyCrookSpawnTime;
                        }
                    }

                    return damage / 60;
                },
            },
        },
        SpikeMaxDamage: {
            Default: {
                For: ['Trapper'],
                Value: (level) => {
                    this.unitManager.load();
                    
                    // map tower level to spike level
                    const spikeLevel = Math.min(level.Level, 4);
                    const spikeName = `Spike ${spikeLevel}`;
                    
                    if (!this.unitManager.hasUnit(spikeName)) {
                        return 0;
                    }
                    
                    const spikeUnit = this.unitManager.unitData[spikeName];
                    const damage = spikeUnit.attributes.Damage || 0;
                    
                    const result = damage * level.MaxTraps;
                    return result;
                    },
                },
        },
        LandmineMaxDamage: {
            Default: {
                For: ['Trapper'],
                Value: (level) => {
                    this.unitManager.load();
                    
                    // landmine only available at levels 2+
                    if (level.Level < 2) {
                        return NaN;
                    }
                    
                    const landmineLevel = Math.min(level.Level, 4);
                    const landmineName = `Landmine ${landmineLevel}`;
                    
                    if (!this.unitManager.hasUnit(landmineName)) {
                        return 0;
                    }
                    
                    const landmineUnit = this.unitManager.unitData[landmineName];
                    const damage = landmineUnit.attributes.Damage || 0;
                    
                    const result = damage * level.MaxTraps;
                    return result;
                },
            },
        },
        BearTrapMaxDamage: {
            Default: {
                For: ['Trapper'],
                Value: (level) => {
                    this.unitManager.load();
                    
                    // beartrap only available at levels 4+
                    if (level.Level < 4) {
                        return NaN;
                    }
                    
                    const beartrapLevel = Math.min(level.Level, 4);
                    const beartrapName = `Bear Trap ${beartrapLevel}`;
                    
                    if (!this.unitManager.hasUnit(beartrapName)) {
                        return 0;
                    }
                    
                    const beartrapUnit = this.unitManager.unitData[beartrapName];
                    const damage = beartrapUnit.attributes.Damage || 0;
                    
                    const result = damage * level.MaxTraps;
                    return result;
                },
            },
        },
        LaserTime: {
            Default: {
                For: ['Accelerator'],
                Requires: ['MaxAmmo', 'LaserDPS'],
                Value: (level) => level.MaxAmmo / level.LaserDPS,
            },
        },
        FireTime: {
            Default: {
                For: ['Gatling Gun'],
                Requires: ['Ammo', 'Cooldown'],
                Value: (level) => level.Ammo * level.Cooldown,
            },
        },

        MaxDPS: {
            Default: {
                For: ['Paintballer'],
                Requires: ['DPS', 'MaxHits'],
                Value: (level) => level.DPS * level.MaxHits,
            },

            Trapper: {
                For: ['Trapper'],
                Value: (level) => {
                    this.unitManager.load();
                    
                    let beartrapDPS = 0;
                    let landmineDPS = 0;
                    let spikeDPS = 0;
                    
                    if (level.Level >= 4) {
                        const beartrapName = `Bear Trap ${Math.min(level.Level, 4)}`;
                        if (this.unitManager.hasUnit(beartrapName)) {
                            beartrapDPS = this.unitManager.unitData[beartrapName].attributes.DPS || 0;
                        }
                    }
                    
                    if (level.Level >= 2) {
                        const landmineName = `Landmine ${Math.min(level.Level, 4)}`;
                        if (this.unitManager.hasUnit(landmineName)) {
                            landmineDPS = this.unitManager.unitData[landmineName].attributes.DPS || 0;
                        }
                    }
                    
                    const spikeName = `Spike ${Math.min(level.Level, 4)}`;
                    if (this.unitManager.hasUnit(spikeName)) {
                        spikeDPS = this.unitManager.unitData[spikeName].attributes.DPS || 0;
                    }

                    return Math.max(spikeDPS, landmineDPS, beartrapDPS);
                },
            },
        },

        BeeDps: {
            Default: {
                For: ['Swarmer'],
                Requires: ['StingTime', 'BeeDamage', 'TickRate'],
                Value: (level) => level.BeeDamage / level.TickRate,
            },
        },
        KnifeSingleDPS: {
            Default: {
                For: ['Slasher'],
                Requires: ['KnifeCooldown', 'Damage'],
                Value: (level) => {
                    const knifeMultiplier = level?.KnifeMultiplier ?? 1;
                    const knives = level?.Knives ?? 1;

                    return (
                        knives *
                        knifeMultiplier *
                        (level.Damage / level.KnifeCooldown)
                    );
                },
            },
        },
        TotalElapsedDamage: {
            Default: {
                Requires: ['BurnDamage', 'BurnTime', 'TickRate'],
                Value: (level) => level.BurnDamage * level.BurnTime / level.TickRate,
            },
            Cryomancer: {
                For: ['Cryomancer'],
                Value: (level) => level.DebuffDamage * level.DebuffLength / level.TickRate,
            },
            Swarmer: {
                For: ['Swarmer'],
                Requires: ['StingTime', 'BeeDamage', 'TickRate'],
                Value: (level) =>
                (level.StingTime * level.BeeDamage) / level.TickRate,
            },
            ToxicGunner: {
                For: ['Toxic Gunner'],
                Value: (level) =>
                (level.PoisonDamage * level.SlowdownTime) / level.TickRate,
            },
        },
        DPS: {
            Default: {
                Requires: ['Damage', 'Cooldown'],
                Exclude: [
                    'Farm',
                    'DJ Booth',
                    'Elf Camp',
                    'Military Base',
                    'Mecha Base',
                    'Firework Technician',
                    'Commander',
                    'Trapper',
                ],
                Value: (level) => level.Damage / level.Cooldown,
            },
            Ranger: {
                For: ['Ranger'],
                Value: (level) =>
                    (level.Damage + level.ExplosionDamage * level.MaxHits) /
                    level.Cooldown,
            },
            Cowboy: {
                For: ['Cowboy'],
                Value: (level) => (level.Damage * level.MaxAmmo) / (level.SpinDuration + (level.Cooldown * (level.MaxAmmo -1))), // prettier-ignore
            },
            Slasher: {
                For: ['Slasher'],
                Value: (level) =>
                    level.Damage / level.Cooldown + level?.KnifeSingleDPS ?? 0,
            },
            Rocketeer: {
                For: ['Rocketeer'],
                Requires: ['Damage', 'Cooldown', 'MissileAmount'],
                Value: (level) => level.MissileAmount > 0 
                    ? (level.Damage * level.MissileAmount) / level.Cooldown 
                    : level.Damage / level.Cooldown,
            },
            ElementalistF: {
                For: ['Elementalist (Fire)'],
                Value: (level) =>
                    level.Damage * level.Burst / ((level.Burst - 1) * level.Cooldown + level.BurstCooldown) + level.BurnDamage / level.TickRate,
            },
            ElementalistFrost: {
                For: ['Elementalist (Frost)'],
                Value: (level) =>
                    level.Damage * level.Burst / ((level.Burst - 1) * level.Cooldown + level.BurstCooldown)
            },
            Ace: {
                For: ['Ace Pilot'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    const bombDps = level.BombDropping
                        ? level.ExplosionDamage / level.BombTime
                        : 0;

                    return dps + bombDps;
                },
            },
            Accel: {
                For: ['Accelerator'],
                Requires: ['MaxAmmo', 'ChargeTime', 'Cooldown', 'LaserTime'],
                Value: (level) => {
                    const totalDamage = level.MaxAmmo;

                    const burstCool =
                        level.ChargeTime + level.LaserCooldown;

                    return totalDamage / (level.LaserTime + burstCool);
                },
            },
            Brawler: {
                For: ['Brawler'],
                Value: (level) => {
                    if (level.ComboLength == 1) {
                        return level.Damage / level.Cooldown;
                    }

                    const totalNormalHits = level.ComboLength - 1;
                    const totalDamage =
                        totalNormalHits * level.Damage + level.FinalHitDamage;

                    const comboLength =
                        totalNormalHits * level.Cooldown + level.ComboCooldown;

                    return totalDamage / comboLength;
                },
            },
            BurnTower: {
                For: ['Pyromancer', 'Archer'],
                Requires: ['Damage', 'Cooldown', 'BurnDamage', 'TickRate'],
                Value: (level) => 
                    (level.Damage / level.Cooldown) + (level.BurnDamage / level.TickRate)
            },
            AmmoTower: {
                For: ['Gatling Gun'],
                Requires: [
                    'Damage',
                    'Cooldown',
                    'FireTime',
                    'ReloadTime',
                    'WindUpTime',
                ],
                Value: (level) => {
                    const totalDamage =
                        (level.Damage / level.Cooldown) * level.FireTime;
                    const totalTime =
                        level.FireTime + level.ReloadTime + level.WindUpTime;

                    return totalDamage / totalTime;
                },
            },
//            MultiHit: {
//                For: ['Electroshocker'],
//                Requires: ['Damage', 'Cooldown', 'MaxHits'],
//                Value: (level) => {
//                    const dps = level.Damage / level.Cooldown;

//                    return dps * level.MaxHits;
//                },
//            },
            Missiles: {
                For: ['Pursuit'],
                Requires: [
                    'Damage',
                    'Cooldown',
                    'ExplosionDamage',
                    'MissileAmount',
                    'MissileCooldown',
                    'Ammo',
                    'ReloadTime',
                    'BurstCooldown',
                ],
                Value: (level) => {
                    let baseDamage = (level.Damage * level.Ammo) / (level.ReloadTime + (level.Cooldown * level.Ammo));
                    let explosionDamage = (level.ExplosionDamage && (level.MissileCooldown + level.BurstCooldown * level.MissileAmount) > 0)
                        ? ((level.ExplosionDamage * level.MissileAmount) / (level.MissileCooldown + level.BurstCooldown * level.MissileAmount))
                        : 0;
                    return baseDamage + explosionDamage;
                }
            },
            Swarmer: {
                For: ['Swarmer'],
                Requires: ['TotalElapsedDamage', 'Cooldown'],
                Value: (level) => level.TotalElapsedDamage / level.Cooldown,
            },
            Burst: {
                For: ['Freezer'],
                Requires: ['Damage', 'Cooldown', 'Burst', 'BurstCooldown' ],
                Value: (level) =>
                    (level.Damage * level.Burst) / (level.BurstCooldown + (level.Cooldown * level.Burst)),
            },
            Cryomancer: {
                For: ['Cryomancer'],
                Value: (level) => {
                    const magDamage = level.Damage * level.MaxAmmo;
                    const magTime =
                        level.Cooldown * level.MaxAmmo + level.ReloadTime;

                    const gunDPS = magDamage / magTime;
                    const dotDPS = level.DebuffDamage / level.TickRate;

                    return gunDPS + dotDPS;
                },
            },
            SoldierBurst: {
                For: ['Soldier'],
                Value: (level) => {
                    const totalDamage = level.Damage * level.Burst;
                    const totalTime =
                        level.Cooldown * level.Burst + level.BurstCooldown;

                    return totalDamage / totalTime;
                },
            },
            ToxicGunner: {
                For: ['Toxic Gunner'],
                Value: (level) => {
                    const totalDamage = level.Damage * level.Burst;
                    const totalReload =
                        level.ReloadTime + level.Cooldown * level.Burst

                    const burstDPS = totalDamage / totalReload;
                    const poisonDPS = level.PoisonDamage / level.TickRate;

                    return burstDPS + poisonDPS;
                },
            },
            WarMachine: {
                For: ['War Machine'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    const missileDPS =
                        level.ExplosionDamage / level.MissileTime;

                    return dps + missileDPS;
                },
            },
            Shotgun: {
                For: ['Shotgunner'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    return dps * level.ShotSize;
                },
            },
            Spawner: {
                For: ['Engineer', 'Crook Boss', 'Military Base', 'Mecha Base'],
                Value: (level) => {
                    const unitDPS = level.UnitDPS ?? 0;
                    const towerDPS = level.TowerDPS ?? 0;
                    const ramDPS = level.RamDPS ?? 0;

                    return unitDPS + towerDPS + ramDPS;
                },
            },
            HallowPunk: {
                For: ['Hallow Punk'],
                Value: (level) => {
                    const dps = level.Damage / level.Cooldown;
                    const burnDPS = (level.BurnDamage && level.TickRate) ? level.BurnDamage / level.TickRate : 0;
                    return dps + burnDPS;
                },
            },
        },
        CallToArmsDPS: {
            Default: {
            For: ['Commander'],
            Value: (level) => {
                const abilitycd = this.upgradeViewer.getAbilityCooldownValue(0);
                return ((level.Damage / level.Cooldown) * level.AttackTime) / abilitycd;
                },
            },
        },
        CaravanDPS: {
            Default: {
                For: ['Commander'],
                Value: (level) => {
                    const abilitylvl = this.upgradeViewer.getAbilityLevelValue(1);
                    if (level.Level < abilitylvl) {
                        return NaN;
                    }
                    const abilitycd = this.upgradeViewer.getAbilityCooldownValue(1);
                    return ((level.Damage / level.Cooldown) * level.AttackTime) / abilitycd;
                },
            },
        },

        LimitDPS: {
            Default: {
                Requires: ['DPS', 'Limit'],

                Value: (level) => level.DPS * level.Limit,
            },
        },
        NetCost: {
            Default: {
                Value: (level) => (level.levels.levels.reduce(
					(total, nextLevel) => nextLevel.Level > level.Level ? total : total + nextLevel.Cost, 0)), // prettier-ignore
            },
        },
        LimitNetCost: {
            Default: {
                Requires: ['NetCost', 'Limit'],
                Value: (level) => level.NetCost * level.Limit,
            },
        },
        CostEfficiency: {
            Default: {
                Requires: ['NetCost', 'DPS'],
                Value: (level) => {
                    const efficiency = level.NetCost / level.DPS;
                    return isFinite(efficiency) ? efficiency : NaN;
                },
            },
            Commander: {
                For: ['Commander'],
                Value: (level) => {
                    const efficiency = level.NetCost / level.CallToArmsDPS;
                    return isFinite(efficiency) ? efficiency : NaN;
                },
            },
        },
        Coverage: {
            Default: {
                Requires: ['Range'],
                Value: (level) => {
                    let x = level.Range;
                    const a = -0.00229008361916565;
                    const b = 0.165383660474954;
                    const c = 0.234910819904625;
                    const d = 2.62040766713282;

                    if (x > 45) {
                        x = 45;
                    }

                    return a * x ** 3 + b * x ** 2 + c * x + d;
                },
            },
        },
        BossPotential: {
            Default: {
                Requires: ['Coverage', 'DPS'],
                Value: (level) => level.Coverage * level.DPS,
            },
        },
        LimitBossPotential: {
            Default: {
                Requires: ['BossPotential', 'Limit'],
                Value: (level) => level.BossPotential * level.Limit,
            },
        },
        BossValue: {
            Default: {
                Requires: ['BossPotential', 'NetCost'],
                Value: (level) => (60 * level.BossPotential) / level.NetCost,
            },
        },
        Value: {
            Default: {
                Requires: ['NetCost', 'DPS', 'Range'],
                Value: (level) =>
                    (1000 * level.DPS * level.Range ** 0.4) / level.NetCost,
            },
        },
        IncomeEfficiency: {
            Default: {
                Requires: ['NetCost', 'DPS'],
                For: ['Cowboy'],
                Value: (level) => (level.Income + level.MaxAmmo * level.Damage) / (level.MaxAmmo * level.Damage),
            },
        },
        IncomePerSecond: {
            Default: {
                Requires: ['Income', 'MaxAmmo', 'SpinDuration'],
                For: ['Cowboy'],
                Value: (level) =>
                    level.Income /
                    (level.SpinDuration + (level.Cooldown * (level.MaxAmmo - 1))),
            },
        },
        TotalIncomePerSecond: {
            Default: {
                Requires: ['IncomePerSecond', 'DPS'],
                For: ['Cowboy'],
                Value: (level) => level.IncomePerSecond + level.DPS,
            },
        },
        WavesUntilNetProfit: {
            Default: {
                Requires: ['Income', 'NetCost'],
                For: ['Farm'],
                Value: (level) => level.NetCost / level.Income,
            },
        },
        WavesUntilUpgradeProfit: {
            Default: {
                Requires: ['Income', 'NetCost'],
                For: ['Farm'],
                Value: (level) => {
                    const lastLevelIncome =
                        level.Level === 0
                            ? 0
                            : level.levels.levels[level.Level - 1].Income;
                    return level.Cost / (level.Income - lastLevelIncome);
                },
            },
        },
        NetPriceToIncomeRatio: {
            Default: {
                Requires: ['Income', 'NetCost'],
                For: ['Farm'],
                Value: (level) => {
                    const ratio = level.NetCost / level.Income;
                    const roundedRatio = Math.round(ratio * 100) / 100;
                    const formattedRatio = String(roundedRatio).replace(/\.?0+$/, '');
                    return `${formattedRatio}:1`;
                },
            },
        },
        Cooldown: {
            Type: 'Override',

            Default: {
                Requires: ['Cooldown'],
                Value: (cooldown) => {
                    const { extraCooldown, firerateBuff, RateOfFireBug } = window.state.boosts.tower; // prettier-ignore

                    return cooldown / (firerateBuff + 1) + extraCooldown + RateOfFireBug;
                },
            },
        },
        Damage: {
            Type: 'Override',

            Default: {
                Requires: ['Damage'],
                Value: (damage) => {
                    const { damageBuff } = window.state.boosts.tower; // prettier-ignore

                    return damage * (damageBuff + 1);
                },
            },
        },
        Range: {
            Type: 'Override',

            Default: {
                Requires: ['Range'],
                Value: (range) => {
                    const { rangeBuff } = window.state.boosts.tower; // prettier-ignore

                    return range * (rangeBuff + 1);
                },
            },
        },
        Cost: {
            Type: 'Override',

            Default: {
                Requires: ['Cost'],
                Value: (cost, level) => {
                    const { discount } = window.state.boosts.tower; // prettier-ignore

                    return level.Level == 0 && discount > 0
                        ? cost
                        : cost * (-discount + 1);
                },
            },
        },
        SpawnTime: {
            Type: 'Override',

            Default: {
                Requires: ['SpawnTime'],
                Value: (spawnTime) => {
                    const { spawnrateBuff } = window.state.boosts.unit; // prettier-ignore

                    return spawnTime / (spawnrateBuff + 1);
                },
            },
        },
    };

    getValue(calculatedField, skinData) {
        for (let [_, value] of Object.entries(calculatedField)) {
            if (value?.For?.includes(skinData.tower.name)) return value;
        }

        return calculatedField.Default;
    }

    /**
     *
     * @param {SkinData} skinData
     */
    validate(calculatedField, skinData) {
        let valid = true;

        if (calculatedField.Exclude) {
            valid &= !calculatedField.Exclude.includes(skinData.tower.name);
        }
        if (calculatedField.Requires) {
            valid &= calculatedField.Requires.reduce((a, v) => {
                return a && skinData.levels.attributes.includes(v);
            }, true);
        }

        if (calculatedField.For) {
            valid &= calculatedField.For.includes(skinData.tower.name);
        }

        return valid;
    }

    /**
     * @param {SkinData} skinData
     */
    #add(name, skinData) {
        const dpsValue = this.getValue(this.calculated[name], skinData);
        if (this.validate(dpsValue, skinData))
            skinData.levels.addCalculated(name, dpsValue.Value);
    }

    addCalculate(skinData) {
        this.unitManager.load();

        this.#add('Cooldown', skinData);
        this.#add('Damage', skinData);
        this.#add('Range', skinData);
        this.#add('Cost', skinData);
        this.#add('SpawnTime', skinData);
        this.#add('LaserDPS', skinData);
        this.#add('TotalElapsedDamage', skinData);
        this.#add('KnifeSingleDPS', skinData);
        this.#add('FireTime', skinData);
        this.#add('SpikeMaxDamage', skinData);
        this.#add('LandmineMaxDamage', skinData);
        this.#add('BearTrapMaxDamage', skinData);
        this.#add('TowerDPS', skinData);
        this.#add('UnitDPS', skinData);
        this.#add('AggregateUnitDPS', skinData);
        this.#add('RamDPS', skinData);
        this.#add('LaserTime', skinData);
        this.#add('BeeDps', skinData);
        this.#add('DPS', skinData);
        this.#add('CallToArmsDPS', skinData);
        this.#add('CaravanDPS', skinData);
        this.#add('LimitDPS', skinData);
        this.#add('MaxDPS', skinData);
        this.#add('NetCost', skinData);
        this.#add('LimitNetCost', skinData);
        this.#add('CostEfficiency', skinData);
        this.#add('Coverage', skinData);
        this.#add('BossPotential', skinData);
        this.#add('LimitBossPotential', skinData);
        this.#add('BossValue', skinData);
        this.#add('Value', skinData);
        this.#add('IncomeEfficiency', skinData);
        this.#add('IncomePerSecond', skinData);
        this.#add('TotalIncomePerSecond', skinData);
        this.#add('WavesUntilNetProfit', skinData);
        this.#add('WavesUntilUpgradeProfit', skinData);
        this.#add('NetPriceToIncomeRatio', skinData);
    }
}

export default CalculatedManager;
