import * as STKJS from 'stkjs-core';
import * as JSDOM from 'jsdom';

JSDOM.JSDOM.fromFile('index.html', {}).then(dom =>
{
    console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
    STKJS.UTIL.log('stkjs-server loaded');
});
