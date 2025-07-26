const fs = require('fs');
const path = require('path');

const notesDir = path.join(__dirname, 'notes');
const outputFile = path.join(notesDir, 'index.json');

fs.readdir(notesDir, (err, files) => {
  if (err) throw err;
  const htmlFiles = files.filter(f => f.endsWith('.html'));
  fs.writeFileSync(outputFile, JSON.stringify(htmlFiles, null, 2));
  console.log(`index.json created with ${htmlFiles.length} notes.`);
});