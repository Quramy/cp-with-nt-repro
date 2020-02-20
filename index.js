const cp = require('child_process');

const out = cp.spawnSync('npm', ['--version']);
console.log(out.stdout.toString('utf8'));
