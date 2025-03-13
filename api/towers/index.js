import path from 'path';
import fs from 'fs';

const dataDirectory = path.join(process.cwd(), 'data', 'towers');

export default function handler(req, res) {
  try {
    // Read all tower files from the data directory
    const fileNames = fs.readdirSync(dataDirectory);
    const towers = fileNames
      .filter(filename => filename.endsWith('.json'))
      .map(filename => {
        // Remove .json extension and read the file
        const id = filename.replace(/\.json$/, '');
        const fullPath = path.join(dataDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const towerData = JSON.parse(fileContents);
        
        // Return a simplified version for the listing
        return {
          id,
          name: towerData.name,
          description: towerData.description,
          image: towerData.image,
          author: towerData.author,
          featured: towerData.featured || false,
          verified: towerData.verified || false,
          unverified: towerData.unverified || false,
          grandfathered: towerData.grandfathered || false,
          tag: towerData.tag || 'New',
          uploadDate: towerData.uploadDate || 'Recently'
        };
      });

    res.status(200).json(towers);
  } catch (error) {
    console.error('Error loading tower data:', error);
    res.status(500).json({ error: 'Failed to load tower data' });
  }
}
