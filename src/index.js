import fs from 'fs'
import { promisify } from 'util'
import enquirer from 'enquirer'
import degit from 'degit'

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

export const init = async () =>  {
  const response = await enquirer.prompt([
    {
      type: 'input',
      name: 'humanProjectName',
      message: 'What is the name of your project? (e.g. Svelte)'
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the npm project name? (e.g. svelte-js)'
    },
    {
      type: 'input',
      name: 'repository',
      message: 'What is your repository (<username>/<repo>)? (e.g. FullHuman/tosin)'
    },
    {
      type: 'input',
      name: 'developerName',
      message: 'What is your name (used for the licence)?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email to be use for the code of conduct?'
    }
  ])
  // clone the template library
  const emitter = degit('FullHuman/tosin-template-library', {
    cache: true,
    force: true,
    verbose: false
  })

  await emitter.clone('.')

  const replaceSets = [
    ['{% project name %}', response.projectName],
    ['{% human project name %}', response.humanProjectName],
    ['{% developer name %}', response.developerName],
    ['{% email %}', response.email],
    ['{% repository %}', response.repository],
    ['{% lowercase repository %}', response.repository.toLowerCase()]
  ]

  const filesToModify = [
    '.github/ISSUE_TEMPLATE/BUG_REPORT.md',
    '.github/CODE_OF_CONDUCT.md',
    '.github/PULL_REQUEST_TEMPLATE.md',
    'scripts/deploy_docs.sh',
    'CONTRIBUTING.md',
    'LICENSE',
    'package.json',
    'README.md',
    'rollup.config.js',
    // docs
    'docs/.vuepress/config.js',
    'docs/Guide.md',
    'docs/README.md'
  ]

  for (const file of filesToModify) {
    await replaceInFile(file, replaceSets)
  }
}

export const replaceInFile = async (filePath, replaceSets) => {
  const fileContent = await readFile(filePath, 'utf-8')
  let result = fileContent
  replaceSets.forEach(([toReplace, value]) => {
    result = result.replace(new RegExp(toReplace, 'g'), value)
  })
  await writeFile(filePath, result, 'utf8')
}