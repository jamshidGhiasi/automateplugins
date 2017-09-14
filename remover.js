var cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'dqb27ms4z', 
    api_key: '575921867132542', 
    api_secret: 'lGB4j4HlHXKRBBuMSojX1Rd3ItI' 
  });
cloudinary.uploader.upload('sample-photos/jimbo.jpg', function(result) {
    // Log out the result to get the URL of the image
    console.log(result);

    // Image url is: result.url / result.secure_url
}, {
    public_id: "jimbo",
    background_removal: "remove_the_background"
});