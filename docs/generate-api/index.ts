import { readdir, readFile, writeFile } from "fs/promises";
import * as path from "path";
import * as fs from "fs";

const prettier = require("prettier");

const regExp = (fileName: string) => new RegExp(`(?<=export\\sinterface\\s${fileName}Props\\s)(.|\\n)*?(?=\\nconst)`, 'g')

const kebabize = (str: string) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())

const main = async () => {
  const srcFiles = (await readdir(path.join(__dirname, "../../core/src/"))).filter(f => f.includes('.tsx'));

  for (let i = 0; i < srcFiles.length; i++) {
    const fileContent = await readFile(path.join(__dirname, "../../core/src/", srcFiles[i]), 'utf8');

    let interfaceString = (fileContent.match(regExp(srcFiles[i].replace('.tsx', ''))) || [])[0];

    if (!interfaceString) continue;

    let interfaces: any[] = [];
    if (interfaceString.includes('extends')) {
      interfaces = (interfaceString.match(/\w+Props/g) || []).map(x => x.startsWith("RN") ? x.replace("RN", "") : x);
    }

    let interfacePropsString = interfaceString.split('\n').slice(1, -2).join("\n").split('\n\n');

    let interfaceProps: any[] = [];

    for (let j = 0; j < interfacePropsString.length; j++) {

      // check if prop has comment
      let comment = "";
      let defaultValue = null;
      let name = "";
      let type = "";
      let optional = false;

      if (interfacePropsString[j].includes('/**')) {
        const x = (interfacePropsString[j].match(/(?<=\/\*\*\n)(.|\n)*?(?=\*\/)/g) || [])[0]
        const xx = x.replaceAll('*', '').trim().split(' @default ');
        comment = xx[0];
        defaultValue = xx[1];
        interfacePropsString[j] = interfacePropsString[j].split('*/')[1]
      }

      interfacePropsString[j] = interfacePropsString[j].trim()
      let zname = interfacePropsString[j].split(':')[0]
      if (zname.includes('?')) {
        optional = true;
        name = zname.replace('?', '')
      } else {
        name = zname
      }

      type = interfacePropsString[j].split(':').slice(1).join(':').trim()

      interfaceProps.push({ name, type, optional, comment, defaultValue })
    }


    const desPath = '../docs/components/'
    const p = `${kebabize(srcFiles[i].split('.')[0])}.md`;

    if (!fs.existsSync(path.join(desPath, p))) continue;
    const current = (await readFile(path.join(desPath, p), 'utf8')).split('## Props')[0]

    let str = ''
    str += current + '## Props\n\n'
    str += interfaceProps.map(x => {
      let val = ''
      val += "`" + x.name + "`\n\n"
      if (x.comment) {
        val += x.comment + "\n\n"
      }

      val += "Type: " + x.type.replaceAll('>', '\\>') + "\n\n"
      if (x.defaultValue) {
        val += "Default: " + x.defaultValue + "\n\n"
      }
      val += "Optional: " + (x.optional ? "Yes" : "No") + "\n\n"

      val += '---\n\n'

      return val
    }).join('\n')

    str += '\n\n'
    str += interfaces.map(x => {
      return ` \`...${x}\``
    })

    const x = prettier.format(str, { parser: "markdown", arrowParens: "avoid" })


    writeFile(path.join(desPath, p), x).then()

    console.table(srcFiles[i])

  }

}

main().catch(e => console.error(e))
