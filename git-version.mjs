import { execSync } from "child_process"
import { dirname } from 'path';
import { fileURLToPath } from 'url'
import * as fs from 'fs';



const gitCommand = "git rev-parse HEAD"
const __dirname = dirname(fileURLToPath(import.meta.url))
const gitHash = execSync(gitCommand).toString().trim()
console.log(gitHash, __dirname)

const params = `{
    "git_hash": "${gitHash}"
  }`

  fs.writeFileSync(__dirname + '/src/git.json', params, () => {
  console.log('Prebuild finished');
});


