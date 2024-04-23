document.addEventListener("DOMContentLoaded", function() {
    // Получение данных из Local Storage

    var order = JSON.parse(localStorage.getItem("order"));

    // Вывод данных в блоке на странице "oder.html"
    var outputBlock = document.getElementById("result");
    outputBlock.innerHTML = `Dear customer, your order

                            ${"<br>RoomName: " + order.setName +
                            "<br>Quantity: " + order.setQuantity +
                            "<br>Name: " + order.user +
                            "<br>Address: " + order.address +
                            "<br>Date: " + order.date +
                            "<br>Comment: " + order.comment}

                            <br>Thank for order`

    // Очистка Local Storage после получения данных

    localStorage.removeItem("order");
});