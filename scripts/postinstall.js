const fs = require('fs');
const path = require('path');

const scriptDir = __dirname;
const projectRoot = path.dirname(scriptDir);

const settingsGradlePath = path.join(projectRoot, 'android', 'settings.gradle');
const buildGradlePath = path.join(projectRoot, 'android', 'app', 'build.gradle');

const linesToAddSettingsGradle = `
include ':react-native-vector-icons'
project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')
`;

// Line to append to build.gradle
const lineToAddBuildGradle = 'apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")';
console.log("script is running");
// Function to append lines if not already present
const appendIfNotExists = (filePath, lineToAdd) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.error(`Failed to read ${filePath}:`, err);
    }

    if (!data.includes(lineToAdd.trim())) {
      // Append the line if it doesn't already exist
      fs.appendFile(filePath, `\n${lineToAdd}\n`, (err) => {
        if (err) {
          return console.error(`Failed to write to ${filePath}:`, err);
        }
        console.log(`Successfully added to ${path.basename(filePath)}`);
      });
    } else {
      console.log(`${lineToAdd.trim()} is already included in ${path.basename(filePath)}`);
    }
  });
};

// Append lines to settings.gradle
appendIfNotExists(settingsGradlePath, linesToAddSettingsGradle);

// Append line to build.gradle
appendIfNotExists(buildGradlePath, lineToAddBuildGradle);
