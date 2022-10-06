$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('about-rotate-icon');
    $(this).parent('.about-items').toggleClass('change-color')
    $(this).next('.about-text').slideToggle(300);
})




$('.features-selektor--1 > div').on('click', function(){
    $(this).children('.seach_icon').toggleClass('features-rotate-icon');
        $(this).next('.features-selektor--text').slideToggle(300);
})