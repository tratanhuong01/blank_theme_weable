$(document).ready(function () {
    let timeOutPopupContact;
    let timeOutError;
    const closePopupContact = () => {
        $('#popup__contact--footer--checkbox').prop('checked', false);
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

    const statusClickPopupContact = () => {
        $('.popup__contact--content a').each(function () {
            $(this).click((event) => {
                if (!$('#popup__contact--footer--checkbox').is(":checked")) {
                    event.preventDefault();
                    $('.popup__contact--footer').removeClass('active');
                    clearTimeout(timeOutError);
                    $('.popup__contact--footer').addClass('active');
                    timeOutError = setTimeout(() => {
                        $('.popup__contact--footer').removeClass('active');
                        clearTimeout(timeOutError);
                    }, 300);
                }
                else {
                    const attr = $(this).attr('href');
                    if (typeof attr === 'undefined' || attr === false) {
                        clearTimeout(timeOutPopupContact);
                        $('.popup__contact--get').addClass('hidden');
                        $('.popup__contact--loading').removeClass('hidden');
                        timeOutPopupContact = setTimeout(() => {
                            $(`.popup__contact--${$(this).data('type')}`).removeClass('hidden');
                            $('.popup__contact--loading').addClass('hidden');
                            clearTimeout(timeOutPopupContact);
                        }, 1000);
                    }
                }
            });
        });
    }

    statusClickPopupContact();

    $('#popup__contact--footer--checkbox').change(function (event) {
        statusClickPopupContact(event.target.value)
    });

    $('.popup__contact--top--close').click(function () {
        closePopupContact();
    })
})