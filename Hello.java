var bool = java.instanceOf(json, "org.json.simple.JSONObject");
console.log(bool);

var jsonObj = {};
function readJSonTestCase(jsonFile) {
    fs.readFile(jsonFile, 'utf8',readJson)
    readJson(jsonFile);

}
function readJson(err,data) {
    if (err) {
        return err;
    }
    return data;
}

try {
    jagacyObj.setUpSession();
} catch (Exception) {
}

var parser = java.newInstanceSync("esi.automation.home.parser.Parser");
//var jagacyObj = java.newInstanceSync("Jagacy");


try {

    java.callMethodSync(javaParser, "parse", JSONObject,  function(err, results) {
        if(err) { console.error(err); return; }
        console.log(results);
    });

} catch (Exception ) {

}

var result = java.callMethodSync(javaParser, "parse", JSONObject);
console.log(result);

