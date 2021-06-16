function Calc_PO(){
    this.firstText = element(by.model('first'));
    this.secondText = element(by.model('second'));
    this.btn = element(by.css('#gobutton'));
    this.resultVal = element(by.css('h2.ng-binding'));
    this.operator = element(by.model('operator'));
    
    this.invokeApplication = function(){
        browser.get("https://juliemr.github.io/protractor-demo/");
        console.log("Browser is Launched");
    };

    this.closeBrowser = function(){
        //browser.close();
        console.log("Browser is Closed");
    };
};

module.exports = new Calc_PO();