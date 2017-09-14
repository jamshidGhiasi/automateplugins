var webshot = require('webshot');
var fs = require('fs');

var test = ['woolworths.com.au/shop/browse/household/cleaning-goods/paper-towels','woolworths.com.au/shop/search/products?searchTerm=pies'];
var options = {
    screenSize: {
        width: 1024,
        height: 768
    },
    shotSize: {
        width: 1024,
        height: 'all'
    }

};

test.forEach(function(entry) {
    var afterSlashChars = entry.match(/\/([^\/]+)\/?$/)[1];
    webshot(entry, afterSlashChars+'.jpeg', options, function (err) {
        // screenshot now saved to flickr.jpeg
    });
});






// function jimbo(webUrl) {
//     var fName =  webUrl.match(/\/([^\/]+)\/?$/)[1];
//     var renderStream = webshot(webUrl);
//     var file = fs.createWriteStream(fName+'.png', {encoding: 'binary'});

//     renderStream.on('data', function(data) {
//       file.write(data.toString('binary'), 'binary');
//     });
// }

// jimbo('woolworths.com.au/shop/browse/household/cleaning-goods/paper-towels');