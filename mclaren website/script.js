var currentImage = document.getElementById("current-image");
var imageThumbs = document.getElementById("image-thumbs");

for (var i = 1; i <= 10; i++) {
    var thumb = document.createElement("img");
    thumb.src = "acheivements/image" + i + ".jpg";
    thumb.alt = "Image " + i;
    thumb.classList.add("thumb");
    imageThumbs.appendChild(thumb);

    thumb.addEventListener("click", changeImage.bind(null, thumb.src, thumb.alt));
}

function changeImage(src, alt) {
    currentImage.src = src;
    currentImage.alt = alt;
}
