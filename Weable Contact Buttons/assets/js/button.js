$(document).ready(function () {
    let timeOutPopupContact;
    const closePopupContact = () => {
        if ($('.popup__contact--content').hasClass('hidden')) {
            $('.popup__contact--get').addClass('hidden');
            $('.popup__contact--content').removeClass('hidden');
        }
        else {
            $('#popup__contact--footer--checkbox').prop('checked', false);
            $('.button-fixed-comment').removeClass('hidden');
            $('.button-fixed-close').addClass('hidden');
            $('.popup__contact').removeClass('active');
            $('.popup__contact--loading').removeClass('hidden');
            $('.popup__contact--content').addClass('hidden');
        };

        clearTimeout(timeOutPopupContact);
    }

    $('.button-fixed').click(function (event) {
        const $target = $(event.target);
        if (!$target.closest('.popup__contact').length) {
            if ($('.button-fixed-close').hasClass('hidden')) {
                $('.popup__contact--get').addClass('hidden');
                $('.button-fixed-close').removeClass('hidden');
                $('.button-fixed-comment').addClass('hidden');
                $('.popup__contact').addClass('active');
                timeOutPopupContact = setTimeout(() => {
                    $('.popup__contact--content').removeClass('hidden');
                    $('.popup__contact--loading').addClass('hidden');
                    clearTimeout(timeOutPopupContact);
                }, 1000);
            }
            else {
                closePopupContact();
            }
        }
    });

    const addEventOpenForm = (type) => {
        $(`.popup__contact--content a[data-type="${type}"]`).click(function () {
            clearTimeout(timeOutPopupContact);
            $('.popup__contact--get').addClass('hidden');
            $('.popup__contact--loading').removeClass('hidden');
            timeOutPopupContact = setTimeout(() => {
                $(`.popup__contact--${type}`).removeClass('hidden');
                $('.popup__contact--loading').addClass('hidden');
                clearTimeout(timeOutPopupContact);
            }, 1000);
        });
    };

    addEventOpenForm('callback');
    addEventOpenForm('email');

    $('.popup__contact--top--close').click(function () {
        closePopupContact();
    })
})