# Instructions for Adding Images to the Gallery
To add an image all you have to do is upload it to *this* directory.

**IT IS IMPORTANT THAT YOU ONLY UPLOAD TO THE `public/gallery` DIRECTORY**

## How to Set the Image Name

To change the display name upload an image with the name you want.

For example, if you want the display name to be `A Really Pretty Flower` make the image name `A_Really_Pretty_Flower.jpg`.

It's important to note that the file extension eg. .jpg, .png, .jpeg, .webp doesn't matter as long as it's a supported image format. It will be removed when the display name appears.

**Additionally** it is important to note that the `_` symbol turns into a space when the display name gets converted from the file name.

## How to Disable an Image
Any image starting with an underscore `_` symbol will be omitted from the gallery. This means that you don't have to delete them but they won't be displayed.

## How to Not Put an Image Name
To not have an image name just prefix the filepath with the `~` symbol. This will cause it to not display with a display name at all. The image will still be on the site it just won't have a display name when hovered or clicked on.