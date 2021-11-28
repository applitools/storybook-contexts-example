module.exports = {
  testConcurrency: 20,
  batchName: 'addon-contexts demo',
  queryParams: [
    {name: 'contexts', value: 'Themes=Light Theme,Language=English'},
    {name: 'contexts', value: 'Themes=Dark Theme,Language=English'},
    {name: 'contexts', value: 'Themes=Light Theme,Language=Japanese'},
    {name: 'contexts', value: 'Themes=Dark Theme,Language=Japanese'},
  ]
}