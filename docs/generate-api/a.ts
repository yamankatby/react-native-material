import { readdir, readFile } from "fs/promises";
import * as path from "path";

const regExp = (fileName: string) => new RegExp(`(?<=export\\sinterface\\s${fileName}Props\\s)(.|\\n)*?(?=\\nconst)`, 'g')

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


    for (let j = 0; j < interfacePropsString.length; j++) {

      // check if prop has comment
      let comment = "";
      let defaultValue = null;
      let name = "";
      let type = "";
      let optional = false;

      if (interfacePropsString[j].includes('/**')) {
        // (interfacePropsString[j].match(/(?<=\/\*\*\n)(.|\n)*?(?=\*\/)/g) || [])[0]
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

      type = interfacePropsString[j].split(':').slice(1).join(':')


      console.log(`${name} ${type}`)
    }

  }

  // for (let i = 0; i < srcFiles.length; i++) {
  //
  //   const fileContent = await readFile(path.join(__dirname, "../../core/src/", srcFiles[0]), "utf8");
  //   const interfaceString = (fileContent.match(regExp(srcFiles[0].replace('.tsx', ''))) || [])[0];
  //
  //   let interfaces: any[] = [];
  //   if (interfaceString.includes('extends')) {
  //     interfaces = (interfaceString.match(/(?<=extends\s).*?(?=\s{)/g) || [])[0].split(', ');
  //   }
  // }


}

main().catch(e => console.error(e))
