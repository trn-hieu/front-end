$(document).ready(function () {
    $('.nav-icon').click(function (e) {
        e.preventDefault();
        $('.nav-bar').addClass('active');
        $('.cover').addClass('active');
    });
    
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.nav-bar').removeClass('active');
        $('.cover').removeClass('active');
    });
    // product filter
    $('.category').click(function (e) { 
        e.preventDefault();
        $(this).addClass('clicked');
        $(this).siblings().removeClass('clicked');
    });

    $('#topsale').click(function (e) { 
        e.preventDefault();
        $('#product-1,#product-2,#product-3,#product-4,#product-5,#product-6,#product-7,#product-8').show(1000);
    });

    $('#featured').click(function (e) { 
        e.preventDefault();
        $('#product-1,#product-3,#product-4,#product-6,#product-7').hide(1000);
        $('#product-2,#product-5,#product-8').show(1000);
    });

    $('#reviews').click(function (e) { 
        e.preventDefault();
        $('#product-3,#product-5,#product-6').hide(1000);
        $('#product-1,#product-2,#product-8,#product-4,#product-7').show(1000);
    });
    
    $('.product-action-icon').click(function (e) { 
        e.preventDefault();
        if($(this).hasClass('clicked')) $(this).removeClass('clicked');
        else $(this).addClass('clicked');
    });
});