module.exports = {
  testConcurrency: 20,
  queryParams: [
    {name: 'contexts', value: 'Themes=Light Theme,Language=English'},
    {name: 'contexts', value: 'Themes=Dark Theme,Language=English'},
    {name: 'contexts', value: 'Themes=Light Theme,Language=German'},
    {name: 'contexts', value: 'Themes=Dark Theme,Language=German'},
  ]
}