const download = require('image-downloader');

// Download to a directory and save with the original filename
const options = {
  url: 'https://cdn0.woolworths.media/content/wowproductimages/medium/306343.jpg',
  dest: 'downloads'                  // Save to /path/to/dest/image.jpg
}

download.image(options)
  .then(({ filename, image }) => {
    console.log('File saved to', filename)
  }).catch((err) => {
    throw err
  })

// // Download to a directory and save with an another filename
// options = {
//   url: 'http://someurl.com/image2.jpg',
//   dest: '/path/to/dest/photo.jpg'        // Save to /path/to/dest/photo.jpg
// }

// download.image(options)
//   .then(({ filename, image }) => {
//     console.log('File saved to', filename)
//   }).catch((err) => {
//     throw err
//   })