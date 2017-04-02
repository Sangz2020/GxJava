var js2java = require('js-to-java');

// Java: com.java.Object o = new com.java.Object();
js2java('com.java.Object', { foo: 'bar' });
// => {$class: 'com.java.Object', $: { foo: 'bar' }}

js2java.Class('com.java.Object');
// => { $class: 'com.java.Object', $: { name: 'java.lang.String' } }