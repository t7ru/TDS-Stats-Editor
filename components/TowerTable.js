import Table from './Table.js';
import SkinData from '../TowerComponents/SkinData.js';

import TableInput from './TableInput.js';

export default class TowerTable extends Table {
    constructor(root, viewer) {
        super(root);
        this.viewer = viewer;
    }

    removeTable() {
        super.removeTable();
    }

    #createBaseTable() {
        this.header = this.createHeader();
        this.body = this.createBody();

        this.root.appendChild(this.header);
        this.root.appendChild(this.body);
    }

    #addHeader(elements) {
        const headerRow = this.createRow();
        elements.forEach((element) => {
            const headerCell = this.createHeaderCell(element);
            headerRow.appendChild(headerCell);
        });
        this.header.appendChild(headerRow);
    }

    #addBody(levels) {
        const deltaLevels =
            this.viewer.deltaTower.skins[
                this.viewer.towerVariants.getSelectedName()
            ].levels;

        levels.levels.forEach((_, level) => {
            const tr = this.createRow();

            levels.attributes
                .filter((attribute) => !this.ignore.includes(attribute))
                .forEach((attribute, column) => {
                    const tableInput = new TableInput({
                        level: level,
                        attribute: attribute,
                        towerLevels: levels,
                        referenceLevels: deltaLevels,
                        useDelta: this.viewer.buttonDeltaButton.state,
                        viewer: this.viewer,
                    });

                    tableInput.createInput();

                    tr.appendChild(tableInput.base);
                });

            this.body.appendChild(tr);
        });
    }

    /**
     * @param {SkinData} data
     */
    load(data, options) {
        options = options ?? {};
        this.ignore = options.ignore ?? [];

        this.removeTable();
        this.#createBaseTable();

        this.#addHeader(
            data.levels.attributes.filter(
                (attribute) => !this.ignore.includes(attribute)
            )
        );
        this.#addBody(data.levels);
    }
}
