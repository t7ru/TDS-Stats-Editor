const ViewerUI = {
    methods: {
        // loads the main content
        loadBody() {
            this.app.towerManager.saveTower(this.tower);
            this.deltaTowerManager.saveTower(this.deltaTower);
            this.unitManager.save();
            this.unitDeltaManager.save();

            this.boostPanel.reload();

            this.loadName();

            this.hideJSON();
            this.hideTable();
            this.hideLua();
            this.hideWikitable();

            this.sidePanel.onUpdate();
            this.upgradeViewer.load(this.getActiveSkin());

            switch (this.tableView.getSelectedName()) {
                case 'Table':
                    this.loadTable();
                    this.tableManagement.renderButtonOutlines();
                    this.removeAttributeForm.load();
                    document.querySelector('.btn-toolbar.mb-2.mb-md-0.mt-0').classList.remove('d-none');
                    break;
                case 'JSON':
                    this.showJSON();
                    this.clearJSON();
                    this.loadJSON();
                    document.querySelector('.btn-toolbar.mb-2.mb-md-0.mt-0').classList.add('d-none');
                    break;
                case 'Wikitable':
                    this.showWikitable();
                    this.loadWikitableContent();
                    document.querySelector('.btn-toolbar.mb-2.mb-md-0.mt-0').classList.add('d-none');
                    break;
            }
        },

        // updates the tower name display
        loadName() {
            const towerName = this.tower.name;
            const activeVariant = this.towerVariants.getSelectedName();
            const displayedVariant =
                activeVariant === 'Default' ? '' : `${activeVariant} `;

            this.towerNameH1.innerText = displayedVariant + towerName;
        },

        // hides json panel
        hideJSON() {
            document.querySelector('#json-panel').classList.add('d-none');
        },

        // hides lua panel
        hideLua() {
            document.querySelector('#lua-panel').classList.add('d-none');
        },

        // shows json panel
        showJSON() {
            document.querySelector('#json-panel').classList.remove('d-none');
        },

        // hides the table
        hideTable() {
            this.towerTable.root.parentElement.classList.add('d-none');
        },

        // shows table
        showTable() {
            this.towerTable.root.parentElement.classList.remove('d-none');
        },

        // hides wikitable panel
        hideWikitable() {
            this.wikitablePanel.classList.add('d-none');
        },

        // shows wikitable panel
        showWikitable() {
            this.wikitablePanel.classList.remove('d-none');
        },
    }
};

export default ViewerUI;
