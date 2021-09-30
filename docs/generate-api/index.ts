import * as fs from 'fs/promises'
import * as path from "path";

const mainPath = '../../core/src/'
const desPath = '../docs/api/'

const kebabize = (str: string) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())
const kebabizee = (str: string) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? " " : "") + $)

const regExp = new RegExp('(?<=export\\s)(.|\\n)*?(?=\\nconst)', 'g')

const main = async () => {
  // delete current files
  await (async () => {
    const filesNames = (await fs.readdir(desPath)).filter(x => !x.includes('.json'))
    await Promise.all(filesNames.map(x => fs.unlink(path.join(desPath, x))))
  })()

  // create new files
  const filesNames = await fs.readdir(mainPath)
  const componentsFilesNames = filesNames.filter(x => x.includes('.tsx'))

  await Promise.all(componentsFilesNames.map(async (x) => {
    const p = `${kebabize(x.split('.')[0])}.md`;
    await fs.writeFile(path.join(desPath, p), `# ${x.replace('.tsx', '')}

API documentation for the React Native ${x.replace('.tsx', '')} component. Learn about the available props.

## Import
 
\`\`\`js
import { ${x.replace('.tsx', '')} } from "@react-native-material/core";
// or
import ${x.replace('.tsx', '')} from "@react-native-material/core/${x.replace('.tsx', '')}";
\`\`\`

## Props

\`\`\`ts
${(await fs.readFile(path.join(mainPath, x), 'utf-8')).match(regExp)}
\`\`\`
`)
  }))
}

main()