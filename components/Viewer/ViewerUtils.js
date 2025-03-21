import Alert from '../Alert.js';

const ViewerUtils = {
    methods: {
        // sets up the variant buttons
        setVariantButtons() {
            this.towerVariants.setButtons(this.tower.skinNames);
            this.towerVariants.root.addEventListener('submit', () => this.loadBody());
        },

        // clears json display
        clearJSON() {
            document.querySelector('#json').innerHTML = '';
        },

        // loads json view
        loadJSON() {
            document.querySelector('#json').appendChild(this.jsonViewer.getContainer());
            if (this.showCombinedJSON && this.showCombinedJSONActive) {
                this.jsonViewer.showJSON(this._getCombinedData());
            } else {
                this.jsonViewer.showJSON(this.tower.json);
            }
        },

        // handles copying json to clipboard
        onCopyJSON() {
            const data = (this.showCombinedJSON && this.showCombinedJSONActive)
                ? this._getCombinedData()
                : this.tower.json;
            navigator.clipboard.writeText(JSON.stringify(data));
            const alert = new Alert('JSON Copied!', {
                alertStyle: 'alert-success',
            });
            alert.fire();
        },

        // reusable file download helper
        downloadFile(content, filename, type = 'json') {
            const file = new Blob([content], { type });
            
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(file, filename);
            } else {
                const a = document.createElement('a');
                const url = URL.createObjectURL(file);
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                setTimeout(function() {
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                }, 0);
            }
        },

        populateActiveUnits() {
            const towerName = this.tower.name;
            const skinName = this.getActiveSkin().name;
            
            const registeredUnits = this.unitManager.populate(towerName, skinName);
            
            const customUnits = {};
            Object.entries(this.unitManager.baseData).forEach(([unitName, unitData]) => {
                if (unitData._towerName === towerName && unitData._skinName === skinName) {
                    if (this.unitManager.unitData[unitName]) {
                        customUnits[unitName] = this.unitManager.unitData[unitName];

                    } else {
                        const Unit = require('../../TowerComponents/Unit.js').default;
                        const newUnit = new Unit(unitName, unitData);
                        this.unitManager.unitData[unitName] = newUnit; 
                        customUnits[unitName] = newUnit;
                    }
                }
            });
            
            return {...registeredUnits, ...customUnits};
        }
    }
};

export default ViewerUtils;
