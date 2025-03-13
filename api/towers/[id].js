import path from 'path';
import fs from 'fs';

const dataDirectory = path.join(process.cwd(), 'data', 'towers');

export default function handler(req, res) {
  const { id } = req.query;
  
  try {
    const fullPath = path.join(dataDirectory, `${id}.json`);
    
    if (!fs.existsSync(fullPath)) {
      return res.status(404).json({ error: 'Tower not found' });
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const towerData = JSON.parse(fileContents);
    
    res.status(200).json(towerData);
  } catch (error) {
    console.error(`Error loading tower data for ${id}:`, error);
    res.status(500).json({ error: 'Failed to load tower data' });
  }
}
