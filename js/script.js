function clickMenu() {
    var btn = document.querySelector('.js_menu-open'),
        menuList = document.getElementsByClassName('js_menu-list');

    btn.onclick = function () {
        if (btn.checked) {
            menuList[0].classList.add("active");
            console.log("Флажок установлен");
        } else {
            menuList[0].classList.remove("active");
            console.log("Флажок не установлен")
        }
    }
}

clickMenu();

// window.onscroll = function() {
//     myFunc()
// };
//
// function myFunc() {
//     var top = document.querySelector(".js_header-menu-block").getBoundingClientRect().top;
//     var btm = 60;
//
//     if (top <= 0) {
//         document.querySelector(".js_header-menu-block").classList.add("stick");
//         console.log('moikka')
//     }
//
//     if (btm > 1) {
//         document.querySelector(".js_header-menu-block").classList.remove("stick");
//         console.log('moikka ei')
//     }
//
// }


function submitForm(e, form) {
    e.preventDefault();
    var modalWindow = document.querySelector('.modal-window'),
        selectElement = form.querySelectorAll('.js_text-area-form');
    var count = 1;
    for (var i = 0; i < selectElement.length; i++) {
        if (selectElement[i].value === '') {
            selectElement[i].classList.add("error-class");
            count = 1;
            console.log(count);

        } else {
            count = 0;
            console.log(count);
            selectElement[i].classList.remove("error-class");
        }
    }
    if (count !== 1) {
        fetch(window.location.href).then(function (response) {
            var dataFor = {
                name: form.forName.value,
                contacts: form.forContacts.value,
                email: form.forMail.value,
                city: form.forCity.value,
                message: form.forMessage.value
            };
            console.log('Имя: '.concat(dataFor.name) + ' \n' + 'Контактный номер: '.concat(dataFor.contacts) + ' \n' + 'Почта: '.concat(dataFor.email) + ' \n' + 'Город: '.concat(dataFor.city) + ' \n' + 'Сообщение: '.concat(dataFor.message));
            modalWindow.classList.add('active');
            setTimeout(function () {
                modalWindow.classList.remove('active');
            }, 3000);
            emptyForm();
        }).catch(function(err) {
            alert('Error')
        });
    }
    function emptyForm() {
        for (var i=0; i<selectElement.length; i++) {
            if (selectElement[i].type !== '') {
                selectElement[i].value = '';

            }
        }

    }
}