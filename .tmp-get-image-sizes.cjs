const fs = require('fs');
const path = require('path');
const images = [
  'b9d1d8e3cafe403b5c78bbd6bb876f3c00b61d87.png',
  '812c92bf95d713238535e5f0f3f6905f8a4e0329.png',
  '578ff8498ab295a0883b5a51131fbb4503850479.png',
  '25a0582c9eb9f9ab3d862f2dd56fd4e54b115759.png',
  '7fda8fabb10e04f2d737ed1bb4ed7a706ea430.png',
  '70d49e9702302b0f6497c31c9a0d1b66430d4e6e.png'
];
const base = path.join(__dirname, 'src', 'imports', 'HomepageDhanvantiValley');
for (const name of images) {
  const file = path.join(base, name);
  try {
    const buf = fs.readFileSync(file);
    if (buf.readUInt32BE(0) !== 0x89504e47) {
      console.error(name, 'not png');
      continue;
    }
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    console.log(`${name}: ${width}x${height} (${(width / height).toFixed(3)})`);
  } catch (err) {
    console.error(name, err.message);
  }
}
