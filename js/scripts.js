$(document).ready(function () {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});
