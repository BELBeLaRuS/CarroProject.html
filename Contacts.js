document.addEventListener('DOMContentLoaded', function() {
    let inputs = {
        name: document.getElementById('name'),
        surname: document.getElementById('surname'),
        phone: document.getElementById('phone'),
        message: document.getElementById('message')
    };
    
    let submitBtn = document.querySelector('.btn-primary');
    let modal = new bootstrap.Modal(document.getElementById('exampleModal'));

    function isFormValid() {
        let valid = true;
        for(let field of Object.values(inputs)) {
            if(!field.value.trim()) {
                field.classList.add('is-invalid');
                valid = false;
            }
        }
        return valid;
    }

    function resetForm() {
        for(let field of Object.values(inputs)) {
            field.value = '';
            field.classList.remove('is-invalid');
        }
    }

    submitBtn.addEventListener('click', function() {
        if(isFormValid()) {
            modal.show();
            resetForm();
        }
    });

    Object.values(inputs).forEach(function(field) {
        field.addEventListener('input', function() {
            field.classList.toggle('is-invalid', !field.value.trim());
        });
    });
});

document.getElementById('acceptButton').addEventListener('click', function() {
    document.getElementById('cookieCard').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
});

window.onload = function() {
    if(localStorage.getItem('cookiesAccepted') === 'true') {
        document.getElementById('cookieCard').style.display = 'none';
    }
};

document.getElementById('submitBtn').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var phone = document.getElementById('phone').value;

    var nameRegex = /^[A-Za-zА-Яа-я\s]+$/;
    var phoneRegex = /^(\+375|80)\s?\(?\d{2}\)?\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

    if (!nameRegex.test(name)) {
        alert('Пожалуйста, введите корректное имя.');
        return false;
    }

    if (!nameRegex.test(surname)) {
        alert('Пожалуйста, введите корректную фамилию.');
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert('Пожалуйста, введите корректный номер телефона.');
        return false;
    }

    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false,
    });
    myModal.show();
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('header .cont').classList.toggle('active');
});