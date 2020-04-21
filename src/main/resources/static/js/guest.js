$(document).ready(function () {
  $("#postButton").click(postguest);
  getguests();
});

function getguests() {
  $.get("/api/guest", function (guests) {
    $("#guests-list").empty();
    for (var i = 0; i < guests.length; i++) {
      const guest = guests[i];
      $("#guests-list").append(
        "<tr><td>" +
          guest.name +
          "</td>" +
          "<td>" +
          guest.idtype +
          "</td>" +
          "<td>" +
          guest.idnumber +
          "</td>" +
          "<td>" +
          guest.phonenumber +
          "</td>" +
          "<td> <button class='remove-button' guestId='" +
          guest.id +
          "'>Delete</button></td><tr>"
      );
    }

    $("#guests-list .remove-button").click(deleteGuest);
  });
}

function postguest() {
  var guest = {
    name: $("#name").val(),
    idtype: $("#idtype").val(),
    idnumber: $("#idnumber").val(),
    phonenumber: $("#phone").val(),
  };

  var jsonObject = JSON.stringify(guest);

  $.ajax({
    url: "/api/guest",
    type: "POST",
    contentType: "application/json",
    data: jsonObject,
    success: function () {
      alert("We succeeded!");
      $("#name").val("");
      $("#idtype").val("");
      $("#idnumber").val("");
      $("#phonenumber").val("");

      getguests();
    },
    error: function () {
      alert("Error:Try Again");
    },
  });
}

function deleteGuest() {
  var guestId = $(this).attr("guestId");
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      $.ajax({
        url: "api/guest/" + guestId,
        type: "DELEtE",
        success: function (data) {
          swal({
            title: "Delete Done!",
            text: "You Clicked The Button!",
            icon: "Success",
            buttons: "Done",
          });
          getguests();
        },
        error: function () {
          swal({
            title: "Oop....",
            text: data.message,
            type: "Error",
            timer: "1500",
          });
        },
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}

