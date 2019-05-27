import fs from 'fs'
import { promisify } from 'util'
import { init, replaceInFile } from './../src/index'
import enquirer from 'enquirer'

jest.mock('enquirer', () => {
  return {
    prompt: jest.fn().mockImplementation(() => {
      return {
        humanProject: 'Awesome Tosin',
        projectName: 'tosin',
        repository: 'FullHuman/tosin',
        developerName: 'Floriel Fedry',
        email: 'truc@gmail.com'
      }
    })
  }
})

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

describe('test the library', () => {

  const replaceSets = [
    ['{% project name %}', 'tosin-cli'],
    ['{% human project name %}', 'Awesome Tosin'],
    ['{% developer name %}', 'Floriel Fedry'],
    ['{% email %}', 'truc@gmail.com'],
    ['{% repository %}', 'FullHuman/tosin'],
    ['{% lowercase repository %}', 'fullhuman/tosin']
  ]

  it('replace the text with the values', async () => {
    const testFilePath = '__tests__/fixtures/filesReplacement/test.md'
    
    const fileReadme = await readFile('__tests__/fixtures/filesReplacement/README.md', 'utf-8')
    await writeFile(testFilePath, fileReadme, 'utf-8')
    
    const fileReadmeExpected = await readFile('__tests__/fixtures/filesReplacement/README_EXPECTED.md', 'utf-8')
    await replaceInFile(testFilePath, replaceSets)
    const actualFile = await readFile(testFilePath, 'utf-8')

    expect(actualFile).toBe(fileReadmeExpected)
  })

  it('initialize a project with tosin successfully', async () => {
    enquirer.prompt = jest.fn().mockImplementation(() => {
      return {
        humanProject: 'Awesome Tosin',
        projectName: 'tosin',
        repository: 'FullHuman/tosin',
        developerName: 'Floriel Fedry',
        email: 'truc@gmail.com'
      }
    })

    // change the directory
    process.chdir('__tests__/integration_result/')

    // await init()
    // check if Readme file exists and does not contain template variable

  })
})