const cp = require('child_process');

function getProc() {
  const proc = cp.spawn('npm', ['--version'], { shell: true });
  return new Promise((res, rej) => {
    proc.stdout.once('data', (message) => {
      res(message.toString('utf8'));
    });
    proc.stderr.on('data', (message) => {
      rej(message.toString('utf8'));
    });
  });
}

async function main() {
  try {
    const out = await getProc();
    console.log(out);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
