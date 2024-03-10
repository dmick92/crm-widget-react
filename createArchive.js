import AdmZip from "adm-zip";
import fs from "fs";

const dist = "./zoho";

async function createZipArchive() {
  const zip = new AdmZip();

  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }

  const outputFile = "./zoho/app.zip";
  zip.addLocalFolder("./dist");
  zip.writeZip(outputFile);
  console.log(`Created ${outputFile} successfully`);
}

createZipArchive();
