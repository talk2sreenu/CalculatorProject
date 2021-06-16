var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework:  'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['SampleTest.js'],
  //resultJsonOutputFile:'./result.json',
  onPrepare: function(){
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: './test/reports/',
        screenshotsFolder: 'images',
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: false,
        fileNameDateSuffix: true,
        fileName: 'MyReportName',
        cleanDestination: false,
        fileNameSeparator: '_'
      })
    );
    //pre requisite to execute before every test
    //It will execute for all specs mentioned in the file
    browser.driver.manage().window().maximize();  
  },
  suites:{
    Smoke : ['SmokeTest.js'],
    Regression : ['SampleTest.js']
  },
  jasmineNodeOpts: {
    showColors: true, 
  }

};