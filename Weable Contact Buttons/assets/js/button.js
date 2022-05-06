$(document).ready(function () {
    const timeOutPopupContact = () => {
        $('.popup__contact--content').removeClass('hidden');
        $('.popup__contact--loading').addClass('hidden');
        clearTimeout(timeOutPopupContact);
    }
    const closePopupContact = () => {
        $('.button-fixed-comment').removeClass('hidden');
        $('.button-fixed-close').addClass('hidden');
        $('.popup__contact').removeClass('active');
        $('.popup__contact--content').addClass('hidden');
        $('.popup__contact--loading').removeClass('hidden');
        clearTimeout(timeOutPopupContact);
    }

    $('.button-fixed').click(function (event) {
        const $target = $(event.target);
        if (!$target.closest('.popup__contact').length) {
            if ($('.button-fixed-close').hasClass('hidden')) {
                $('.button-fixed-close').removeClass('hidden');
                $('.button-fixed-comment').addClass('hidden');
                $('.popup__contact').addClass('active');
                setTimeout(timeOutPopupContact, 1000);
            }
            else {
                closePopupContact();
            }
        }
    });

    $('.popup__contact--top--close').click(function () {
        closePopupContact();
    })
})