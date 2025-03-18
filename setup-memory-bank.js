const fs = require('fs');
const path = require('path');

async function setupMemoryBank() {
  try {
    const configData = fs.readFileSync('memory-bank-config.json', 'utf8');
    const config = JSON.parse(configData);

    for (const instruction of config.setupInstructions) {
      if (instruction.type === 'copy_file') {
        const sourcePath = path.join(__dirname, instruction.sourcePath); // Construct absolute source path
        const sourceContent = fs.readFileSync(sourcePath, 'utf8');
        fs.writeFileSync(instruction.destinationPath, sourceContent);
        console.log(`Copied file: ${instruction.destinationPath}`);
      } else if (instruction.type === 'create_directory') {
        fs.mkdirSync(instruction.path, { recursive: true });
        console.log(`Created directory: ${instruction.path}`);
      } else if (instruction.type === 'create_file') {
        fs.writeFileSync(instruction.path, instruction.content);
        console.log(`Created file: ${instruction.path}`);
      }
    }

    console.log('Memory bank setup complete.');
  } catch (error) {
    console.error('Error setting up memory bank:', error);
  }
}

setupMemoryBank();