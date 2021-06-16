var pgObject = require("./Calc_PO.js");

describe('Smoke Test for Calculator', function(){
    beforeEach(function(){
        pgObject.invokeApplication();
    });

    afterEach(function(){
        pgObject.closeBrowser();
    });
    it('To Verify common methods', () =>{
        pgObject.firstText.sendKeys("3");
        pgObject.secondText.sendKeys("5");
    });
});