// Funkcja zmieniająca tło nagłówka przy przewijaniu strony
window.addEventListener("scroll", function() {
    const header = document.querySelector("header"); 
    if (window.scrollY > 0) {  // Sprawdza, czy strona jest przewinięta
        header.classList.add("scrolled"); 
    } else {
        header.classList.remove("scrolled"); 
    }
});



jQuery(function($){
    $.scrollTo(0);

    $('#linkStronaGlowna').click(function() { 
        $.scrollTo($('body'), 500);
        footerUpHandling(false);
    });
    $('#linkOferty').click(function() { $.scrollTo($('#oferty'), 500, { offset: -59 }); });
    $('#linkAboutMe').click(function() { $.scrollTo($('#aboutMe'), 500); });

    $('#linkPortfolio').click(function() { $.scrollTo($('#portfolio'), 500); });
    
    $('#scrollUp').click(function() { $.scrollTo($('body'), 1000); });
});

// funkcja dla pojawienia się przycisku o id scrollUp
$(window).scroll(function(){
    if($(this).scrollTop()>300) $('#scrollUp').fadeIn();
    else $('#scrollUp').fadeOut();
})




$('#footerUp').click(function() {
    if($('#footerUp').hasClass('icon-up-big')){
        footerUpHandling(true);
    }else{
        footerUpHandling(false);
    }
});

// $(window).scroll(function() {
//     if ($(window).scrollTop() + $(window).height() == $(document).height()) {
//         if ($('#footerUp').hasClass('icon-up-big')) {
//             footerUpHandling(true);
//         }
//     }
// });

function footerUpHandling(itsUp) {
    if(itsUp){
        $('footer').css('bottom', '0px');
        $('#footerUp').css('bottom', $('footer').height());
        $('#footerUp').removeClass('icon-up-big').addClass('icon-down-big');
    }
    else{
        FixIfTooDeepFooter();
        $('footer').css('bottom', -$('footer').height());
        $('#footerUp').css('bottom', '0px');
        $('#footerUp').removeClass('icon-down-big').addClass('icon-up-big');
    }
}
function FixIfTooDeepFooter(){
    if($(document).height()-$(window).height()-$(window).scrollTop() < $('footer').height()){
        $.scrollTo($('footer'), 200, { offset: -$(window).height() });
    }
}



// Funkcja do obsługi zdarzenia kliknięcia
function copyTextToClipboard(divElement) {
    // Znajdź pierwszy element span wewnątrz klikniętego diva
    const spanElement = divElement.querySelector('span');

    // Pobierz tekst z tego spana
    const textToCopy = spanElement.textContent;

    // Kopiowanie tekstu do schowka
    navigator.clipboard.writeText(textToCopy).then(function() {
        printAlertMessage(divElement);
    }).catch(function(error) {
        alert('Błąd przy kopiowaniu tekstu: ' + error);
    });
}

function printAlertMessage(divElement){
    const message = document.createElement('div');
    message.id = 'alertMessage';
    message.textContent = 'Tekst skopiowany do schowka!';

    divElement.appendChild(message);

    setTimeout(function() {
        message.style.opacity = '0';
        setTimeout(function() {
            message.style.display = 'none';
        }, 1000);
    }, 1000);
}


// rozszerzona funckja dla filmów
// Pobierz wszystkie divy z klasą "ownWayOfVideoPlaying" (w których znajdują się elementy video)
//const videoContainers = document.querySelectorAll(".ownWayOfVideoPlaying");

// Pętla przez każdy div

// videoContainers.forEach(function(container) {
//     // Pobierz element video wewnątrz kontenera
//     const video = container.querySelector("video");

//     // Dodaj nasłuchiwacz na kliknięcie w kontener
//     container.addEventListener("click", function () {
//         if (video.paused) {
//             video.play(); // Rozpocznij odtwarzanie
//             video.style.cursor = "url('img/pauseCursor.png') 14 16, pointer"; // Zmień kursor na "pause"
//         } else {
//             video.pause(); // Zatrzymaj odtwarzanie
//             video.style.cursor = "url('img/playCursor.png') 14 16, pointer"; // Zmień kursor na "play"
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("promoVideo");
    video.volume = 0.3; // Ustawienie głośności na 30%
});