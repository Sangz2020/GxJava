#!/usr/bin/env node
'use strict'
var java = require('java');
var path = require('path');
var fs = require("fs");

java.classpath.push("Jagacy.java");

var javaLangSystem = java.import('java.lang.System');
var JavaJagacy = java.import("Jagacy");
var javaJagacy = java.newInstanceSync("Jagacy");
//console.log("JavaJagacy"+ JavaJagacy);
javaLangSystem.out.printlnSync("javaLangSystem");
//var JagacyException{1,"JagacyException","JagacyException"} = java.newInstanceSync("com.jagacy.util.JagacyException");
try {

    JavaJagacy.setUpSession();
} catch (Exception) {
    throw new Exception("Could not set up Session3270");
}