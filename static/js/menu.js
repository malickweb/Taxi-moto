var menu = function() {

    var main = $("[data-event-js = 'main']"),
          btnMain = $("[data-event-js = 'main-mobile']"),
          btnPlus = $('[data-event-js="info"], [data-event-js="form"], [data-event-js="tarif"]'),
          btnResa = $('[data-event-js="reservation"], [title="Réservation"]'),
          btnInfo = $('[title="Info-pratique"]'),
          btnTarif = $('[title="Tarif"]');

    btnMain.on('click', function(){
        $(this).toggleClass('main-burger');
        if (!main.hasClass('open-nav')) {
            main.addClass('open-nav').fadeIn(300);
        }
        else {
            main.removeClass('open-nav').fadeOut(300);
        }
    });

    btnPlus.on('click', function(){
        $(this).toggleClass('btn-form');
        $(this).next().toggleClass('open-form');
    });

    btnResa.on('click', function() {
        btnMenu();

        $('[data-event-js="form"]').addClass('btn-form');
        $('[data-event-js="form"]').next().addClass('open-form');
    });

    btnInfo.on('click', function() {
        btnMenu();

        $('[data-event-js="info"]').addClass('btn-form');
        $('[data-event-js="info"]').next().addClass('open-form');
    });

    btnTarif.on('click', function() {
        btnMenu();

        $('[data-event-js="tarif"]').addClass('btn-form');
        $('[data-event-js="tarif"]').next().addClass('open-form');
    });

    function btnMenu() {
        btnMain.toggleClass('main-burger');
        main.removeClass('open-nav').fadeOut(300);
    }
};
