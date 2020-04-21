$(document).ready(function () {
    $("#getPaymentsButton").click(getPayment);
    $("#postButton").click(postPayment);
    getPayment();

});

function getPayment() {
    $.get("/api/payment", function (payments) {
        $("#paymentes-list").empty();
        for (var i = 0; i < payments.length; i++) {
            const payment = payments[i];
            $("#paymentes-list").append(
                "<tr><td>" +
                payment.name +
                "</td>" +
                "<td>" +
                payment.cardNumber +
                "</td>" +
                "<td>" +
                payment.billAddress +
                "</td>" +
                "<td>" +
                payment.cardExpiryDate +
                "</td>" +
                // "<td>" +
                // payment.pay_Type +
                // "</td>" +
                "<td>" +
                payment.tel +
                "</td>" +
                // "<td>" +
                // payment.reservation.totalPrice +
                // "</td>" +
                "<td> <button class='remove-button' paymentId='" +
                payment.id +
                "'>Delete</button></td><tr>"
            );
        }

        $("#paymentes-list .remove-button").click(deletePayment);
    });
}

// function displayPhoneCodeSelect(payments) {
//     var PhoneNumberSelect = $("#PhoneNumberSelect");
//     PhoneNumberSelect.empty();
//     $.each(payments, function (index, payment) {
//         $("#PhoneNumberSelect").append(
//             ' <option value="">' + payment.tel + " </option>"
//         );
//     });
// }

function postPayment() {
    var payment = {
        name: $("#nameInput").val(),
        cardNumber: $("#NOInput").val(),
        billAddress: $("#BillInput").val(),
        cardExpiryDate: $("#expiryInput").val(),
        
        // reservation: { id: Number($("#reserInput").val()) }

    };

    var jsonObject = JSON.stringify(payment);

    $.ajax({
        url: "/api/payment",
        type: "POST",
        contentType: "application/json",
        data: jsonObject,
        success: function () {
            alert("We succeeded!");
            $("#nameInput").val("");
            $("#NOInput").val("");
            $("#BillInput").val("");
            $("#expiryInput").val("");
            // $("#reserInput").val("");
            // $("#telf").val("");
            // $("#PayType").val('');
            getPayment();
        },
        error: function () {
            alert("Error:Try Again");
        }
    });
}

function deletePayment() {
    var paymentId = $(this).attr("paymentId");
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true
    }).then(willDelete => {
        if (willDelete) {
            $.ajax({
                url: "api/payment/" + paymentId,
                type: "DELEtE",
                success: function (data) {
                    swal({
                        title: "Delete Done!",
                        text: "You Clicked The Button!",
                        icon: "Success",
                        buttons: "Done"
                    });
                    getPayment();
                },
                error: function () {
                    swal({
                        title: 'Oop....',
                        text: data.message,
                        type: 'Error',
                        timer: '1500'
                    });
                }
            });
        } else {
            swal("Your imaginary file is safe!");
        }
    });
}


