const carusel = document.querySelector('.carousel');
const text = document.querySelectorAll('.text');
const tittle = document.querySelectorAll('.tittle');
const push = document.querySelectorAll('.push');
const setNameInput = document.getElementById('setName');
const conteiner = document.querySelectorAll('.conteiner')
const price = document.querySelectorAll('.price');






conteiner.forEach(button => {
button.addEventListener('mouseover', (e) => {
    if (e.target.closest("img")) {
        let name = e.target.getAttribute("alt");
    
    text.forEach(elem => {
        if (name == elem.getAttribute("id")) {
        elem.classList.remove('hidden');
        }
    }); 
}
    });

});
    conteiner.forEach(button => {
    button.addEventListener('mouseout', (e) => {
        if (e.target.closest("img")) {
            let name = e.target.getAttribute("alt");
        
        text.forEach(elem => {
            if (name == elem.getAttribute("id")) {
            elem.classList.add('hidden');
            }
        }); 
    }
        });

    });
        



push.forEach(button => {
    button.addEventListener("click", (event) => {
    
        const text = event.target.closest(".text");
        const setName = text.querySelector(".tittle").innerText;
        
       
        setNameInput.value = setName
        
        
        
    });
});


    document.getElementById("formButton").addEventListener("click", function(event) {
        event.preventDefault(); // Чтобы форма не отправлялась
    
    
        // Получение значений из формы
    
        var setName = document.getElementById("setName").value;
        var setQuantity = document.getElementById("setQuantity").value;
        var user = document.getElementById("user").value;
        var address = document.getElementById("addres").value;
        var date = document.getElementById("date").value;
        var comment = document.getElementById("comment").value;
    
        // Создание объекта с данными
    
        var order = {
            setName: setName,
            setQuantity: setQuantity,
            user: user,
            address: address,
            date: date,
            comment: comment
    
        };
    
        // Сохранение данных в Local Storage
    
        localStorage.setItem("order", JSON.stringify(order));
    
        // Перенаправление на другую страницу
    
        window.location.href = "oder.html";
    });
