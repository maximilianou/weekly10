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
    path: '../../../app05/coronavirus-cases/src/app/app.component.css',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/app-routing.module.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/cases/cases.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/cases/cases.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/add-cases/add-cases.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/add-cases/add-cases.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/edit-cases/edit-cases.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/edit-cases/edit-cases.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/cases-details/cases-details.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/cases-details/cases-details.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/cases-stat/cases-stat.component.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/cases-stat/cases-stat.component.html',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/cases.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/statistic.ts',
    mark: '\n```\n',
  },
  {
    path: '../../../app05/coronavirus-cases/src/app/api.service.ts',
    mark: '\n```\n',
  },
];
const publish = (cmd) => {
  remove({ fileOut: cmd.fileOut });
  console.log('removed.');
  cmd.filesIn.forEach((file) => {
    console.log('each file.');
    append({ fileIn: file.path, fileOut, mark: file.mark });
  });
};

publish({ fileOut, filesIn });

console.log('created README.md');
