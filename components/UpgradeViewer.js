import ButtonSelection from './ButtonSelection.js';
import ImageLoader from './ImageLoader.js';
import AbilityManager from './AbilityManager.js';
import ExtrasManager from './ExtrasManager.js';

export default class UpgradeViewer {
    constructor(viewer) {
        this.viewer = viewer;
        this.levelPanel = document.getElementById('side-upgrade-levels');
        this.levelButtons = new ButtonSelection(this.levelPanel);
        this.levelButtons.activeClass = 'btn-dark';
        this.levelButtons.inactiveClass = 'btn-outline-dark';

        this.imageInput = document.getElementById('side-upgrade-image');
        this.imageInput.addEventListener(
            'focusout',
            (() => {
                this.#onTextChanged('Image', this.imageInput.value);
                this.#loadImage();
                this.viewer.reload();
            }).bind(this)
        );

        this.titleInput = document.getElementById('side-upgrade-title');
        this.titleInput.addEventListener(
            'focusout',
            (() => {
                this.#onTextChanged('Title', this.titleInput.value);
                this.viewer.reload();
            }).bind(this)
        );

        // Initialize extras manager
        this.extrasInput = document.getElementById('side-upgrade-extras');
        this.addExtraButton = document.getElementById('side-upgrade-extras-add');
        this.addGroupButton = document.getElementById('side-upgrade-extras-add-group');
        this.upgradeChanges = document.getElementById('side-upgrade-extras-output');
        this.extrasManager = new ExtrasManager(
            this.viewer,
            this.extrasInput,
            this.addExtraButton,
            this.addGroupButton
        );
        
        // Initialize ability manager
        this.abilityContainer = document.getElementById('side-ability-container');
        this.abilityManager = new AbilityManager(
            this.viewer,
            this.abilityContainer
        );
    }

    // this checks if any level name is a custom string (ex "4T", "5B")
    async load(skinData) {
        if (skinData.upgrades.length === 0) {
            document.getElementById('level-view').classList.add('d-none');
        } else if (this.skinData === skinData) {
            this.loadUpgrade(this.levelButtons.getSelectedName() - 1);
        } else {
            this.skinData = skinData;
            this.#loadLevelHeader(skinData);
        }
    }

    #loadLevelHeader(skinData) {
        const levelNames = skinData.upgrades.map((upgrade, index) => {
            return upgrade.upgradeData.Stats?.Attributes?.SideLevel ?? index + 1;
        });
    
        this.levelButtons.setButtons(levelNames);
        this.levelButtons.root.addEventListener(
            'submit',
            ((e) => {
                const selectedName = e.detail;
                const index = levelNames.indexOf(selectedName);
                this.loadUpgrade(index);
            }).bind(this)
        );
        if (skinData.upgrades.length > 0) {
            this.loadUpgrade(0);
        }
    }
    
    loadUpgrade(index) {
        if (!this.skinData?.upgrades || index < 0 || index >= this.skinData.upgrades.length) {
            return;
        }
    
        this.index = index;
        this.upgrade = this.skinData.upgrades[index];
    
        if (!this.upgrade) {
            return;
        }
    
        this.imageInput.value = this.upgrade.upgradeData.Image || '';
        this.titleInput.value = this.upgrade.upgradeData.Title || '';
        
        // Update managers with new upgrade
        this.extrasManager.setUpgradeIndex(index);
        this.extrasManager.loadExtras(this.upgrade);
        this.extrasManager.renderUpgradeChanges();
        
        this.#loadImage();
        this.abilityManager.loadAbilities();
    }    

    async #loadImage() {
        const imageId = this.imageInput.value.trim();
        const imgElement = document.getElementById('upgrade-image');

        if (!imgElement) return;

        imgElement.alt = "No Upgrade Image";
        // Clear previous error handler and state
        imgElement.onerror = null;
        imgElement.removeAttribute('data-load-attempted');

        if (!imageId) {
            imgElement.src = '';
            return;
        }

        const tryLoadImage = async (src, isFromCache) => {
            if (!src) {
                imgElement.src = '';
                return;
            }

            imgElement.onerror = async () => {
                // attempt refetch
                if (imgElement.getAttribute('data-load-attempted')) {
                    console.error(`Failed to load image even after re-fetch: ${imageId}`);
                    imgElement.src = '';
                    imgElement.onerror = null;
                    return;
                }

                console.warn(`Image failed to load${isFromCache ? ' from cache' : ''}: ${src}. Clearing cache and re-fetching for ID: ${imageId}`);
                ImageLoader.clearCacheEntry(imageId);
                imgElement.setAttribute('data-load-attempted', 'true'); // mark as attempted

                const freshImageLocation = await ImageLoader.fetchImage(imageId);
                tryLoadImage(freshImageLocation, false);
            };

            imgElement.src = src;
        };

        let imageLocation = ImageLoader.getFromCache(imageId);

        if (imageLocation) {
            // attempt to load from cache
            tryLoadImage(imageLocation, true);
        } else {
            // not in cache so fetch it
            imageLocation = await ImageLoader.fetchImage(imageId);
            tryLoadImage(imageLocation, false);
        }
    }

    #onTextChanged(property, value) {
        this.skinData.set(this.index + 1, property, value);
    }

    // backwards compatibility
    getAbilityCooldownValue(abilityIndex) {
        return this.abilityManager.getAbilityCooldownValue(abilityIndex);
    }

    getAbilityLevelValue(abilityIndex) {
        return this.abilityManager.getAbilityLevelValue(abilityIndex);
    }
}