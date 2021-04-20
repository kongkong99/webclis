const execa = require('execa');
const path = require('path');
const log = require('../log');

// 上传至npm时，会将每个cli中到.gitignore变为.npmigonre, 所以上传之前需要重命名gitignore, 安装时，在转化为.gitignore
// 删除clis下面项目中的.git文件
(async function gitignoreInit() {
  const { stdout } = await execa('ls', { cwd: path.join(__dirname, '../clis') });
  const clisName = stdout.split('\n')

  // new Promise((resolve) => {
  //   resolve()
  // })

  clisName.forEach(dirName => {
    const targetDir = path.join(__dirname, '../clis', dirName);
    execa('mv', ['gitignore', '.gitignore'], { cwd: targetDir });
  })
  log.success('gitignoreInit action success!')
})()







