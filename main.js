'use strict'
var java = require('java');
var path = require('path');
var fs = require("fs");

java.classpath.push("jagacy3270.jar");
java.classpath.push("java/test/commons-lang3-3.1.jar");
java.classpath.push("json-simple-1.1.1.jar");
java.classpath.push("test-automation-app.jar");
java.classpath.push("log4j-1.2.16.jar");
java.classpath.push("commons-io-2.2");



var javaLangSystem = java.import('java.lang.System');
var Session3270 = java.import("com.jagacy.Session3270");
var JagacyException = java.import("com.jagacy.util.JagacyException");
var Props = java.import("com.jagacy.util.JagacyProperties");
var JavaUtil = java.import("com.jagacy.util.Util");
var JavaParser = java.import("esi.automation.home.parser.Parser");
var  JavaMainframeTestcase = java.import("esi.automation.home.model.MainframeTestCase");

//var jsonObj = java.import("org.json.simple.JSONObject");
var json  = java.newInstanceSync("org.json.simple.JSONObject");

javaLangSystem.out.printlnSync('Hello World');
/*function getData(srcPath) {
    fs.readFile(srcPath, 'utf8', function (err, data) {
            if (err) throw err;
            return data;
        }
    );
}*/

fs.readFile('testcase.json', 'utf8', function (err,data) {
    if (err) {
        return err;
    }
    return data;
});

json = fs.readFileSync('testcase.json','utf8');
//console.log("json " + json);

var parser  = java.newInstanceSync("esi.automation.home.parser.Parser");
JavaMainframeTestcase = java.newInstanceSync("esi.automation.home.model.MainframeTestCase");

var output = {};
JavaMainframeTestcase = parser.parse(json, function(err, output) {
    console.log(json)
});
console.log("output is " + JavaMainframeTestcase);
//console.log(Session3270.hasOwnProperty("JagacyProperties"));

/*
props.set("window", "true");
props.set("jagacy.host", "mcfl1g05.medco.com");
props.set("jagacy.port", "23");

*/



/*
public class HomeScreen {

    private Session session;
    private String screenCrc = "0xb0c10358";

    // Screen fields
    private LabelField waitForLabel =
        new LabelField(17, 6, "TEXAS A & M UNIVERSITY");
    private EntryField applicationEntryField = new EntryField(23, 1);

    public HomeScreen(final Session s) throws JagacyException {
    this.session = s;
    if (!session.waitForTextLabel(waitForLabel)) {
    throw new IllegalStateException("Not Home screen!");
}

if (session.getCrc32() != Long.decode(screenCrc)) {
    throw new IllegalStateException("Home Screen has been changed!");
}
}
*/

/*
 private Executer(MainframeTestCase testCase) throws JagacyException, IOException {

 super("Test Execution");
 // log.info("Begin loading properties");
 this.testCase = testCase;

 props = getProperties();
 loadProps();
 Enumeration<?> e = configuration.getKeys();
 while (e.hasMoreElements()) {
 String key = (String) e.nextElement();
 String value = configuration.getString(key);
 props.set(key, value);
 }

 if (testCase.getScreenshot() != null && testCase.getScreenshot().equalsIgnoreCase("on")) {
 props.set("window", "true");
 } else {
 props.set("window", "false");
 }

 if (testCase.getHost() != null) {
 props.set("jagacy.host", testCase.getHost());
 } else {
 throw new JagacyException("Error Processing JSON Data, Host information incorrect !.");
 }

 if (testCase.getPort() != null) {
 props.set("jagacy.port", testCase.getPort());
 } else {
 throw new JagacyException("Error Processing JSON Data, Port information incorrect !.");
 }

 // log.info("Get Property window - " + props.get("window"));
 // log.info("End loading properties");
 }

*/

/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen('2000', 'localhost');
console.log('Server running!');*/
console.log('Server running!');