/**
 * TDSWikiFetcher.js
 * gets tower data from our Vercel API instead of the TDS wiki
 */

class TDSWikiFetcher {
    constructor() {
        this.apiBaseUrl = '/api';
        
        // get featured towers
        this.featuredTowers = window.featuredTowers || [];
    }

    /**
     * gets towers from our API
     */
    async fetchTowers() {
        try {
            console.log("fetching towers from API...");
            
            const response = await fetch(`${this.apiBaseUrl}/towers`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const towers = await response.json();
            console.log(`loaded ${towers.length} towers from API`);
            
            if (towers.length === 0) {
                console.warn("no towers found, using defaults");
                return this.getFallbackTowers();
            }
            
            return towers;
        } catch (error) {
            console.error('failed to get towers from API:', error);
            return this.getFallbackTowers();
        }
    }
    
    /**
     * gets more info for a tower
     */
    async enrichTowerData(tower) {
        try {
            console.log(`getting full data for tower: ${tower.name}`);
            
            // Only fetch full data if we don't already have it
            if (!tower.data) {
                const response = await fetch(`${this.apiBaseUrl}/towers/${tower.id}`);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const fullTowerData = await response.json();
                
                // Merge the full data with our tower object
                if (fullTowerData.data) {
                    tower.data = fullTowerData.data;
                    
                    // get tower name from json
                    const firstKey = Object.keys(tower.data)[0];
                    if (firstKey && typeof firstKey === 'string') {
                        tower.jsonName = firstKey;
                    }
                }
            }
            
            return tower;
        } catch (error) {
            console.warn(`failed to get info for ${tower.name}:`, error);
            return tower;
        }
    }
    
    /**
     * fallback towers if API fails 
     */
    getFallbackTowers() {
        console.log("using fallback towers");
        return [
            {
                name: "GAIA",
                description: "GAIA is an Earth Simulator developed by the GAI Computer Corporation.",
                image: "https://static.wikia.nocookie.net/tower-defense-sim/images/2/23/SlasherReworkUpgrade4.png",
                author: "Nishijou",
            },
            {
                name: "Noah II",
                description: "Noah II is a second-generation artificial Gigalomaniac device developed by N.O.Z.O.M.I.",
                image: "https://static.wikia.nocookie.net/tower-defense-sim/images/a/ab/MiniLevel4.png",
                author: "Takumi",
            },
            {
                name: "Pyro Mage",
                description: "Deals fire damage over time to enemies in a wide area.",
                image: "https://static.wikia.nocookie.net/tower-defense-sim/images/9/92/MinigunnerUpgradeLevel3.png",
                author: "Takuru",
            },
            {
                name: "Shadow Assassin",
                description: "Stealthy tower with high critical damage and hidden detection.",
                image: "https://static.wikia.nocookie.net/tower-defense-sim/images/c/c4/MinigunnerUpgradeLevel2.png",
                author: "Miyashiro",
            }
        ];
    }
}