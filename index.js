const cp = require('child_process');

const out = cp.spawnSync('npm', ['--version']);
if (out.error) {
  console.error(out.error);
  process.exit(1);
}
console.log(out.stdout.toString('utf8'));
