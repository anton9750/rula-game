import fs from 'fs';
import path from 'path';

// Define the root of the project
const projectRoot = path.join(process.cwd(), 'my-project', 'game-core');

// 1. Define all folders to create
const folders = [
  path.join(projectRoot, 'src', 'main', 'java', 'com', 'rune3d', 'core', 'tests'),
  path.join(projectRoot, 'src', 'main', 'resources', 'configs'),
  path.join(projectRoot, 'src', 'main', 'resources', 'fonts'),
  path.join(projectRoot, 'src', 'main', 'resources', 'models'),
  path.join(projectRoot, 'src', 'main', 'resources', 'assets', 'shaders'),
  path.join(projectRoot, 'src', 'main', 'resources', 'assets', 'textures'),
  path.join(projectRoot, 'docs'),
];

// 2. Create the folders
folders.forEach(folder => {
  fs.mkdirSync(folder, { recursive: true });
  console.log(`✅ Created: ${folder}`);
});

// 3. Create the placeholder files
const placeholders = [
  { name: 'app-config.json', folder: 'configs' },
  { name: 'README.md', folder: 'docs' },
];

placeholders.forEach(({ name, folder }) => {
  const filePath = path.join(projectRoot, 'src', 'main', 'resources', folder, name);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '// Placeholder - add your data here\n');
    console.log(`📄 Created placeholder: ${filePath}`);
  }
});

console.log('\n🎉 Project structure initialized successfully!');