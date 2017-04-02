/**
 * Created by sangz-pc on 4/1/2017.
 */
'use strict'
var java = require('java');
var path = require('path');
var fs = require("fs");
var js2java = require('js-to-java');

java.classpath.push("jagacy3270.jar");
java.classpath.push("java/test/commons-lang3-3.1.jar");
java.classpath.push("json-simple-1.1.1.jar");
java.classpath.push("test-automation-app.jar");
java.classpath.push("log4j-1.2.16.jar");
java.classpath.push("rt.jar");

var javaLangSystem = java.import('java.lang.System');
var Session3270 = java.import("com.jagacy.Session3270");
var Exception = java.import("com.jagacy.util.JagacyException");

var Props = java.import("com.jagacy.util.JagacyProperties");
var JSONObject = java.import("org.json.simple.JSONObject");
var JavaParser = java.import("esi.automation.home.parser.Parser");
var Executer = java.import("esi.automation.home.parser.Executer");
var JavaMainframeTestcase = java.import("esi.automation.home.model.MainframeTestCase");


var javaParser = java.newInstanceSync("esi.automation.home.parser.Parser");
var jagacyException = new Exception("JagacyException");
var Javafile =  java.import('java.io.File');
var javafile = new Javafile('testcase.json');

String.prototype.escapeSpecialChars = function() {
    return this.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "")
        .replace(/\\"/g, '')
        .replace(/\\&/g, "")
        .replace(/\\r/g, "")
        .replace(/\\t/g, "")
        .replace(/\\b/g, "")
        .replace(/\\f/g, "")
        .replace(/\\n/g, "");
};
var json = fs.readFileSync('testcase.json', "utf8");
var jsonString = JSON.stringify(json);
var ecapedJSONString = jsonString.escapeSpecialChars();

var jSONObject = new JSONObject();
//{ $class: 'com.test.Object', { 'foo': 'bar' } };

jSONObject = js2java('org.json.simple.JSONObject', ecapedJSONString );

//console.log(js2java('org.json.simple.JSONObject', ecapedJSONString ));
//JSONObject = java.newInstanceSync('org.json.simple.JSONObject');

//console.log(JSONObject);
var result = java.callMethodSync(javaParser, "parse",javafile);
var result2 = java.callStaticMethodSync("esi.automation.home.parser.Executer", "getInstance",result );
var result3 = java.callMethodSync(result2, "execute");
/*
Executer.execute();
Executer.getInstance(result,function (err,data) {
    if (err) {
        return err;
    }
    return data;
});
*/

console.log(result);
console.log(result2);
// Invoking parser to parse






//
// function Executer() {
//
//     try{
//         Session3270 = new Session3270("NodeToJagacy");
//         console.log("Jagacy session"+Session3270);
//         Session3270.open();
//     } catch (Exception) {
//         throw new Exception("Could not set up Session3270");
//     }
// }


