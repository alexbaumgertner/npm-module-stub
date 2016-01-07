/**
 * Load script
 *
 * Load script as html tag `script` into `head`
 *
 * @param {Object} document
 * @param {String} path
 * @param {Function} callback
 */
function __loader__(document, path, callback) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');

    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = (location.protocol === 'file:' && !path.indexOf('//') ? 'http:' : '') + path;

    if ('onload' in script) {
        script.onload = script.onerror = function () {
            script.onload = script.onerror = null;
            callback();
        };

    } else {
        script.onreadystatechange = function () {
            var readyState = this.readyState;

            if (readyState === 'loaded' || readyState === 'complete') {
                script.onreadystatechange = null;
                callback();
            }
        };
    }

    head.insertBefore(script, head.lastChild);
}
