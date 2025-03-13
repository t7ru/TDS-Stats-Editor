import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const dataDirectory = path.join(process.cwd(), 'data', 'towers');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { 
      towerName,
      description,
      author,
      imageUrl,
      towerData,
      tag = 'New',
      verified = false // New uploads start unverified
    } = req.body;

    // Validate required fields
    if (!towerName || !description || !author || !towerData) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Generate a unique ID based on name and author
    const id = `${towerName.toLowerCase().replace(/\s+/g, '-')}-${uuidv4().slice(0, 8)}`;
    const timestamp = new Date();

    // Create tower data object
    const tower = {
      id,
      name: towerName,
      description,
      image: imageUrl || 'https://static.wikia.nocookie.net/tower-defense-sim/images/4/4a/Site-favicon.ico',
      author,
      featured: false,
      verified,
      unverified: !verified,
      grandfathered: false,
      tag,
      uploadDate: timestamp.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      data: towerData
    };

    // Save the file
    const filePath = path.join(dataDirectory, `${id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(tower, null, 2));
    
    res.status(201).json({ success: true, id });
  } catch (error) {
    console.error('Error uploading tower:', error);
    res.status(500).json({ error: 'Failed to upload tower' });
  }
}
