import TowerManager from './TowerComponents/TowerManager.js';
import Dropdown from './components/Dropdown.js';
import Viewer from './components/Viewer/index.js';
import UpdateLog from './UpdateLog.js';

class App {
    constructor() {
        this.towerManager = new TowerManager('New');

        window.state = {
            boosts: {
                tower: {
                    RateOfFireBug: 0,
                    extraCooldown: 0,
                    firerateBuff: 0,
                    damageBuff: 0,
                    rangeBuff: 0,
                    discount: 0,
                },
                unit: {
                    RateOfFireBug: 0,
                    extraCooldown: 0,
                    firerateBuff: 0,
                    damageBuff: 0,
                    rangeBuff: 0,
                    healthBuff: 0,
                    spawnrateBuff: 0,
                },
            },
            cache: {},
        };

        this.towerToSelect = null;

        // checks tower parameter in URL
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('tower')) {
            this.towerToSelect = urlParams.get('tower');
        }
    }

    addTowerOption(name) {
        this.dropdown.options.push(name);
        
        this.dropdown.setOptions(this.dropdown.options);
        
        if (window.setupSearch) {
            window.setupSearch();
        }
    }

    start() {
        this.dropdown = new Dropdown(
            document.querySelector('#Tower-Selector input'),
            document.querySelector('#Tower-Selector .dropdown-menu'),
            this.towerManager.towerNames
        );

        const viewer = new Viewer(this);

        // attach event listener
        this.dropdown.textForm.addEventListener('submit', (e) => {
            viewer.load(this.towerManager.towers[e.detail]);

            // update url with the selected tower for shareable links
            const towerName = e.detail || e.target?.value;
            if (towerName) {
                const url = new URL(window.location);
                url.searchParams.set('tower', towerName);
                window.history.replaceState({}, '', url);
            }
        });

        if (this.towerToSelect) {
            const towerName = this.findClosestTowerName(this.towerToSelect);
            if (towerName) {
                
                const event = new CustomEvent('submit', { detail: towerName });
                this.dropdown.textForm.dispatchEvent(event);
                
                // clear the search box after tower is selected
                setTimeout(() => {
                    this.dropdown.textForm.value = '';
                }, 10);
            }
        } else {
            // default page if no URL parameter (likely accel)
            viewer.load(this.towerManager.towers[this.towerManager.towerNames[0]]);
        }
    }
    
    // find closest tower name match (case insensitive)
    findClosestTowerName(searchName) {
        searchName = searchName.toLowerCase();
        
        // try exact match
        const exactMatch = this.towerManager.towerNames.find(name => 
            name.toLowerCase() === searchName
        );
        
        if (exactMatch) return exactMatch;
        
        // try starts with
        const startsWithMatch = this.towerManager.towerNames.find(name => 
            name.toLowerCase().startsWith(searchName)
        );
        
        if (startsWithMatch) return startsWithMatch;
        
        // check if any tower contains the search term
        const containsMatch = this.towerManager.towerNames.find(name => 
            name.toLowerCase().includes(searchName)
        );
        
        return containsMatch || null;
    }
}

const app = new App();
app.start();

document.addEventListener('DOMContentLoaded', () => {
    new UpdateLog();
});