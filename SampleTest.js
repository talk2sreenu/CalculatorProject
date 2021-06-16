const using = require("jasmine-data-provider");
var pgObject = require("./Calc_PO.js");
var d = require("./data.js");

describe('Super Calculator Test ', function(){    
    beforeEach(function(){
        pgObject.invokeApplication();
        //Common method to launch application everytime
    });

    afterEach(function(){
        pgObject.closeBrowser();
    });

    using(d.DataSets, function(data, description){
        it(description, function(){
            console.log("Running the test case using Dataprovider : "+ description);
            pgObject.firstText.sendKeys(data.firstInput);
            pgObject.operator.$('[value="'+data.operatorVal+'"]').click();
            pgObject.secondText.sendKeys(data.secondInput);
            pgObject.btn.click();
            
            expect(pgObject.resultVal.getText()).toBe(data.resultVal);
    
            let resVal = pgObject.resultVal.getText();
            resVal.then(function(txt){
                console.log("Value from Web Page is : "+ txt);
            });
        });
    });

});