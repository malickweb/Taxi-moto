var form = function() {
    
        var $form = $('#form'),
              $inputSuper = $form.find('input'),
              $innerForm = $('.inner-form'),
              foo = $('input[name="nom"], input[name="prenom"], input[name="email"], input[name="tel"], input[name="depart"], input[name="date"], input[name="time"], input[name="arrive"], input[name="comment"]'),
              valid = true;
    
    
        $form.on('submit', function(e) {
            e.preventDefault();
            checkName();
            checkEmail();
            checkNumb();
    
            function recup() {
                var tab = [];
    
                var objet = {};
                objet.elemNom = $('input[name="nom"]').val();
                objet.elemPrenom = $('input[name="prenom"]').val();
                objet.elemMail = $('input[name="email"]').val();
                objet.elemTel = $('input[name="tel"]').val();
                objet.elemDepart = $('input[name="depart"]').val();
                objet.elemDate = $('input[name="date"]').val();
                objet.elemTime = $('input[name="time"]').val();
                objet.elemArrive = $('input[name="arrive"]').val();
                objet.elemComment = $('textarea[name="comment"]').val();
                tab.push(objet);
                console.log(tab);
            }
    
            recup();
    
            nom = $('input[name="nom"]').val();
            prenom = $('input[name="prenom"]').val();
            mail = $('input[name="email"]').val();
            tel = $('input[name="tel"]').val();
            depart = $('input[name="depart"]').val();
            date = $('input[name="date"]').val();
            time = $('input[name="time"]').val();
            arrive = $('input[name="arrive"]').val();
            comment = $('textarea[name="comment"]').val();
    
            if(valid === false) {
                $.ajax({
                    method: "POST",
                    url: "php/form.php",
                    data: {
                        nom : $('input[name="nom"]').val(),
                        prenom : $('input[name="prenom"]').val(),
                        email : $('input[name="email"]').val(),
                        tel : $('input[name="tel"]').val(),
                        depart : $('input[name="depart"]').val(),
                        date : $('input[name="date"]').val(),
                        time : $('input[name="time"]').val(),
                        arrive : $('input[name="arrive"]').val(),
                        comment : $('textarea[name="comment"]').val()
                    }
                }, function (data) {
                }, "json")
                    .done(function (msg) {
                        alert('Votre réservation a été envoyer');
                        console.log("Data Saved: " + msg);
                        $innerForm.toggleClass('open-form');
                        $('.wrap-form').find('button').toggleClass('btn-form');
                        $inputSuper.val("");
                        $('textarea[name="comment"]').val("");
                    });
            }
            else {
                alert('Votre réservation n\'a pas était envoyée');
            }
            return false;
        });
    
        foo.on('blur',  function() {
            if ($(this).val() === "") {
                $(this).next().addClass('error-visible');
                valid = true;
            }
            else {
                $(this).next().removeClass('error-visible');
                valid = false;
            }
        });
        
        function checkName() {
            $('input[name="nom"], input[name="prenom"]').on('blur', function() {
    
                if ($(this).val().match(/^[a-zA-Z]+$/)) {
                    
                    $(this).next().removeClass('error-visible');
                    valid = true;
                }
                else {
                    $(this).next().addClass('error-visible');
                }
            });
        }
        
        function checkNumb() {
            $('input[name="tel"]').on('blur', function() {
            
                if ($(this).val().match(/^0[1-9][0-9]{8}$/i)) {
    
                    $(this).next().removeClass('error-visible');
                    valid = true;
                }
                else {
                    $(this).next().addClass('error-visible');
                }
            });
        }
    
        function checkEmail() {
            $('input[name="email"]').on('blur', function() {
            
                if ($(this).val().match(/^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i)) {
    
                    $(this).next().removeClass('error-visible');
                    valid = true;
                }
                else {
                    $(this).next().addClass('error-visible');
                }
            });
        }
    
        $('input[name="nom"], input[name="prenom"]').on('focusout', function() {
            checkName();
        });
    
        $(' input[name="email"]').on('focusout', function() {
            checkEmail();
        });
    
        $(' input[name="tel"]').on('focusout', function() {
            checkNumb();
        });
        
    };