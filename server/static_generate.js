// @flow
import fs from "fs";
import path from "path";

export const copyStaticFiles = () /*: void */ => {
  const copyDir = function (src, dest = "./") {
    let publicDest /*: string */ = "";
    const files = fs.readdirSync(src);
    for (let i = 0; i < files.length; i++) {
      const current = fs.lstatSync(path.join(src, files[i]));
      publicDest = "./" + path.join(dest, files[i]);
      if (!fs.existsSync(path.dirname(publicDest))) {
        fs.mkdirSync(path.dirname(publicDest), { recursive: true });
      }
      if (current.isDirectory()) {
        copyDir(path.join(src, files[i]), publicDest);
      } else {
        fs.copyFileSync(path.join(src, files[i]), publicDest);
      }
    }
  };

  if (!fs.existsSync("./public")) {
    fs.mkdirSync("./public");
  }
  // Copy in the static files
  fs.copyFileSync("site.webmanifest", "./public/site.webmanifest");

  copyDir("js", "./public/js");
  copyDir("web_modules", "./public/web_modules");
};
