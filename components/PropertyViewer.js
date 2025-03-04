import ToggleButton from './ToggleButton.js';
import CalculatedManager from '../TowerComponents/CalculatedManager.js';

export default class PropertyViewer {
    constructor(viewer, root) {
        this.viewer = viewer;
        this.root = root;
        this.liClasses = ['nav-item', 'position-relative', 'mb-1'];
        this.buttonClasses = ['btn', 'btn-sm', 'w-100', 'text-white'];
        this.activeButtonClass = 'btn-outline-secondary';
        this.inactiveButtonClass = 'btn-outline-dark';
        this.defaultDisabled = [
            'LimitDPS',
            'LimitNetCost',
            'Value',
            'Coverage',
            'BossPotential',
            'LimitBossPotential',
            'BossValue',
            'BookAim',
            'Summon_Debounce',
            'BookDebounce',
            'GraveCooldown',
            'MustAim',
            'AggregateUnitDPS',
            'EnemyBuff',
            'Velocity',
            'BleedCollaspeDamage (10HP)',
            'BleedCollaspeDamage (1000HP)',
            'BleedCollaspeDamage (10000HP)',
            'BleedCollaspeDamage (100000HP)',
            'BleedCollaspeDamage (1000000HP)',
            'BleedDamageTick (10HP)',
            'BleedDamageTick (1000HP)',
            'BleedDamageTick (10000HP)',
            'BleedDamageTick (100000HP)',
            'BleedDamageTick (1000000HP)',
            'AnimTimes',
            'SummonDebounce',
            'BookDebounce',
        ];
        this.disabled = [...this.defaultDisabled];
        this.hidden = [
            'NoTable',
            'SideLevel',
            'Abilities.0',
            'Abilities',
        ];
        this.baseProperties = [
            'Damage',
            'Cooldown',
            'Range',
            'Flying',
            'Lead',
            'Cost',
        ];

        this.allBtn = document.getElementById('property-all');
        this.baseBtn = document.getElementById('property-base');
        this.extraBtn = document.getElementById('property-extra');
        this.calcBtn = document.getElementById('property-calc');

        this.allBtn.addEventListener('click', this.toggleAll.bind(this));
        this.baseBtn.addEventListener('click', this.toggleBase.bind(this));
        this.extraBtn.addEventListener('click', this.toggleExtra.bind(this));
        this.calcBtn.addEventListener('click', this.toggleCalc.bind(this));
    }

    // check if the tower is farm
    isFarmTower() {
        const activeSkin = this.viewer.getActiveSkin();
        if (!activeSkin) return false;
        
        return activeSkin.tower.name === 'Farm';
    }

    // check tower milibase
    isMilitaryBaseTower() {
        const activeSkin = this.viewer.getActiveSkin();
        if (!activeSkin) return false;
        
        return activeSkin.tower.name === 'Military Base';
    }

    isMechaBaseTower() {
        const activeSkin = this.viewer.getActiveSkin();
        if (!activeSkin) return false;
        
        return activeSkin.tower.name === 'Mecha Base';
    }

    // check if the tower is trapper
    isTrapperTower() {
        const activeSkin = this.viewer.getActiveSkin();
        if (!activeSkin) return false;
        
        return activeSkin.tower.name === 'Trapper';
    }

    isMercenaryBaseTower() {
        const activeSkin = this.viewer.getActiveSkin();
        if (!activeSkin) return false;
        
        return activeSkin.tower.name === 'Mercenary Base';
    }

    isSwarmerTower() {
        const activeSkin = this.viewer.getActiveSkin();
        if (!activeSkin) return false;
        
        return activeSkin.tower.name === 'Swarmer';
    }
    
    isDJTower() {
        const activeSkin = this.viewer.getActiveSkin();
        if (!activeSkin) return false;
        
        return activeSkin.tower.name === 'DJ Booth';
    }

    isArcherTower() {
        const activeSkin = this.viewer.getActiveSkin();
        if (!activeSkin) return false;
        
        return activeSkin.tower.name === 'Archer';
    }

    isElfCampTower() {
        const activeSkin = this.viewer.getActiveSkin();
        if (!activeSkin) return false;
        
        return activeSkin.tower.name === 'Elf Camp';
    }

    getProperties() {
        const levelData = this.viewer.getActiveSkin().levels;
        return [...levelData.attributes, ...levelData.complexAttributes];
    }

    getExtraProperties() {
        return this.getProperties()
            .filter(((prop) => !this.baseProperties.includes(prop)).bind(this))
            .filter(
                ((prop) => !this.getCalculatedProperties().includes(prop)).bind(
                    this
                )
            )
            .filter((prop) => prop !== 'Level');
    }

    getCalculatedProperties() {
        return Object.keys(CalculatedManager.calculated).filter(
            (key) => CalculatedManager.calculated[key]?.Type !== 'Override'
        );
    }

    toggleAll() {
        if (this.disabled.length == 0) {
            this.getProperties().forEach(this.hide.bind(this));
        } else {
            this.disabled = [];
        }
        this.viewer.reload();
    }

    toggleBase() {
        const someBaseStatDisabled = this.baseProperties.some((prop) =>
            this.disabled.includes(prop)
        );

        if (someBaseStatDisabled) {
            this.show('Level');
            this.baseProperties.forEach(this.show.bind(this));
        } else {
            this.baseProperties.forEach(this.hide.bind(this));
        }

        this.viewer.reload();
    }

    toggleExtra() {
        const extraProps = this.getExtraProperties();

        const someExtraStatDisabled = extraProps.some((prop) =>
            this.disabled.includes(prop)
        );

        if (someExtraStatDisabled) {
            this.show('Level');
            extraProps.forEach(this.show.bind(this));
        } else {
            extraProps.forEach(this.hide.bind(this));
        }

        this.viewer.reload();
    }

    toggleCalc() {
        const calcProps = this.getCalculatedProperties();
        const someCalcStatDisabled = calcProps.some((prop) =>
            this.disabled.includes(prop)
        );

        if (someCalcStatDisabled) {
            this.show('Level');
            calcProps.forEach(this.show.bind(this));
        } else {
            calcProps.forEach(this.hide.bind(this));
        }

        this.viewer.reload();
    }

    isDisabled(property) {
        return this.disabled.includes(property);
    }

    isHidden(property) {
        if (this.isFarmTower() && (property === 'Damage' || property === 'Cooldown' || property === 'Hidden' || property === 'Flying' || property === 'Lead')) {
            return true;
        }
        
        if ((this.isMilitaryBaseTower() || this.isMechaBaseTower() || this.isElfCampTower()) && (property === 'Damage' || property === 'Cooldown' || property === 'Range' || property === 'Hidden' || property === 'Flying' || property === 'Lead')) {
            return true;
        }
        
        if ((this.isTrapperTower() || this.isSwarmerTower()) && property === 'Damage') {
            return true;
        }
        
        if (this.isMercenaryBaseTower() && (property === 'Damage' || property === 'Cooldown' || property === 'Hidden' || property === 'Flying' || property === 'Lead')) {
            return true;
        }

        if (this.isDJTower() && (property === 'Damage' || property === 'Cooldown')) {
            return true;
        }

        if (this.isArcherTower() && (property === 'Hidden' || property === 'Flying' || property === 'Lead')) {
            return true;
        }
        
        return this.hidden.includes(property);
    }

    hide(property) {
        if (!this.isDisabled(property)) {
            this.disabled.push(property);
        }
    }

    show(property) {
        // Don't show specific properties if the tower is a Farm
        if (this.isFarmTower() && (property === 'Damage' || property === 'Cooldown' || property === 'Hidden' || property === 'Flying' || property === 'Lead')) {
            this.hide(property);
            return;
        }
        
        // Don't show specific properties if the tower is Mili base
        if ((this.isMilitaryBaseTower() || this.isMechaBaseTower() || this.isElfCampTower()) && (property === 'Damage' || property === 'Cooldown' || property === 'Range' || property === 'Hidden' || property === 'Flying' || property === 'Lead')) {
            this.hide(property);
            return;
        }
        
        // Don't show damage property
        if ((this.isTrapperTower() || this.isSwarmerTower()) && property === 'Damage') {
            this.hide(property);
            return;
        }

        if (this.isMercenaryBaseTower() && (property === 'Damage' || property === 'Cooldown' || property === 'Hidden' || property === 'Flying' || property === 'Lead')) {
            this.hide(property);
            return;
        }

        if (this.isDJTower() && (property === 'Damage' || property === 'Cooldown')) {
            this.hide(property);
            return;
        }

        if (this.isArcherTower() && (property === 'Hidden' || property === 'Flying' || property === 'Lead')) {
            this.hide(property);
            return;
        }
        
        if (this.isDisabled(property)) {
            this.disabled = this.disabled.filter((v) => v !== property);
        }
    }

    createButton(innerText) {
        if (this.isHidden(innerText)) {
            this.hide(innerText);
            return null;
        }

        const listElement = document.createElement('li');
        const button = document.createElement('button');
        
        this.buttonClasses.forEach((className) =>
            button.classList.add(className)
        );
        
        const toggleButton = new ToggleButton(button, {
            state: !this.isDisabled(innerText),
            activeClass: this.activeButtonClass,
            inactiveClass: this.inactiveButtonClass,
        });

        toggleButton.element.addEventListener(
            'enabled',
            ((e) => {
                this.show(innerText);
                this.viewer.reload();
            }).bind(this)
        );
        
        toggleButton.element.addEventListener(
            'disabled', 
            ((e) => {
                this.hide(innerText);
                this.viewer.reload();
            }).bind(this)
        );

        this.liClasses.forEach((className) =>
            listElement.classList.add(className)
        );

        button.innerText = innerText;
        listElement.appendChild(button);
        return listElement;
    }

    createButtons(attributes) {
        this.disabled = [...this.defaultDisabled];
        this.root.innerHTML = '';

        attributes.forEach((attributeName) => {
            const button = this.createButton(attributeName);
            if (button) {
                this.root.appendChild(button);
            }
        });
    }