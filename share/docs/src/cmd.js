const { append, remove } = require('./readmes.js');

console.log('createing README.md');

const fileOut = '../../../README.md';
const filesIn = [
  { path: '../../../app05/Makefile', mark: '\n```\n' },
  { path: '../../../app05/coronavirus-cases/src/index.html', mark: '\n```\n' },
  { path: '../../../app05/coronavirus-cases/src/main.ts', mark: '\n```\n' },
  {
    path: '../../../app05/coronavirus-cases/src/app/app.module.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/app.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/app.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/app-routing.module.ts',
    mark: '\n```\n',
  },
  /* {
    path: '../../../app05/coronavirus-cases/src/app/home/home.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/home/home.component.html',
    mark: '\n```\n',
  }, */
];
const publish = (cmd) => {
  remove({ fileOut: cmd.fileOut });
  console.log('removed.');
  cmd.filesIn.forEach((file) => {
    console.log('each file.');
    append({ fileIn: file.path, fileOut, mark: file.mark });
  });
};

/*
const publish = async () => {
  await remove({ fileOut });
  await Promise.all(fileIn.map(async (file) => {
    await append({ fileIn: file, fileOut, mark: '```' });
  }));
};
*/
publish({ fileOut, filesIn });

console.log('created README.md');
