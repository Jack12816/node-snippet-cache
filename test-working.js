/**
 * Cache Test
 */

var cache = require('memory-cache');
var fs    = require('fs');

var memoryUsage = function(prefix)
{
    if (prefix) {
        prefix = prefix + ' ';
    } else {
        prefix = '';
    }

    // Improvement - Call V8-GC manually
    global.gc();
    console.log('Manually called GC.');

    console.log('[' + Date() + '] ' + prefix + 'Memory usage:');
    console.log(process.memoryUsage());
    console.log('Cache size: ' + cache.size());
    console.log('Cache memsize: ' + cache.memsize());
    console.log();
    console.log('---');
    console.log();
}

memoryUsage('Initial');

// Read the 700mb file
fs.readFile(process.cwd() + '/fixtures/random.dump', function(err, data) {

    if (err) {
        console.log(err);
        process.exit(1);
    }

    var buffers = [];

    console.log('Readed file into buffer.');
    memoryUsage('After File Loading');

    for (var i = 1; i <= 1024; i++) {

        // Copy the original buffer
        if (0 == i) {
            buffers[i] = data;
        } else {
            buffers[i] = new Buffer(data.length);
            data.copy(buffers[i]);
        }

        cache.put('cache-' + i, buffers[i], 10000);
    }

    console.log('Cached the buffer 15 times for 10 seconds.');
    memoryUsage('After Cache Loading');
});

// After 20 secs
setTimeout(memoryUsage, 20000, 'After 20 Seconds');

// After 1 minute
setTimeout(memoryUsage, 60000, 'After 1 Minute');

