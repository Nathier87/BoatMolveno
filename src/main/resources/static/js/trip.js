var triplist;
var boatlist;
var boatId;
var guestId;
var tripTdtoStop;
var tripIdTodelete;
$(document).ready(function () {
  $("#stop").click(stoptrip);
  $("#delete").click(deleteBoat);
  $("#delete1").click(deleteGuest);
  $("#add").click(addBoat);
  $("#addguest").click(addguest);
  $("#start").click(addTrip);
  boatlist = $("#boatform").DataTable();
  getBoats();

  triplist = $("#tripform").DataTable();
  getTrips();

   guestlist = $("#guestform").DataTable();
  getguests();
});

function getBoats() {
  $.get("api/boat", function (boats) {
    boatlist.clear();
    for (i = 0; i < boats.length; i++) {
      const boat = boats[i];
      boatlist.row.add(
        $(
          '<tr id="row' +
            boat.id +
            '"><td>' +
            boat.id +
            "</td>" +
            "<td>" +
            boat.type +
            "</td>" +
            "<td>" +
            boat.minimumprice +
            "</td>" +
            "<td>" +
            boat.actualprice +
            "</td>" +
            "<td>" +
            boat.boatnumber +
            "</td>" +
            "<td>" +
            boat.numberofseat +
            "</td>" +
            '<td><button class="tripn tripn-success" onclick="confirmdeleteBoats(' +
            boat.id +
            ');">Delete</button></td></tr>'
        )
      );
    }
    boatlist.draw();
  });
}

function getTrips() {
  $.get("api/trip", function (trips) {
    boatlist.clear();
    for (i = 0; i < trips.length; i++) {
      const trip = trips[i];
      triplist.row.add(
        $(
          '<tr id="row' +
            trip.id +
            '"><td>' +
            trip.id +
            "</td>" +
            "<td>" +
            trip.numberofperson +
            "</td>" +
            "<td>" +
            trip.boatnumber +
            "</td>" +
            "<td>" +
            trip.duration +
            "</td>" +
            '<td><button class="tripn tripn-success" onclick="confirmstoptrip(' +
            trip.id +
            ');">Stop Trip</button></td></tr>'
        )
      );
    }
    triplist.draw();
  });
}

function getguests() {
  $.get("api/guest", function (guests) {
     guestlist.clear();
    for (i = 0; i <guests.length; i++) {
      const guest =guests[i];
       guestlist.row.add(
        $(
          '<tr id="row' +
        guest.id +
            '"><td>' +
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
            '<td><button class="tripn tripn-success" onclick="confirmdelete guests(' +
        guest.id +
            ');">delete</button></td></tr>'
        )
      );
    }
    guestlist.draw();
  });
}

function confirmstoptrip(id) {
  $("#confirm1").modal("show");

  tripTdtoStop = id;
}

function confirmdeleteBoats(id) {
  $("#confirm").modal("show");
  boatId = id;
}

function confirmdeleteGuests(id) {
  $("#confirm2").modal("show");
guestId = id;
}

function deleteBoat() {
  $.ajax({
    url: "api/boat/" + boatId,
    type: "DELETE",
    success: function () {
      getBoats();
      $("#confirm").modal("hide");
    },
    error: function () {
      alert("Something went wrong!!");
    },
  });
}

function deleteGuest() {
  $.ajax({
    url: "api/guest"+guestId,
    type: "DELETE",
    success: function () {
      getguests();
      $("#confirm2").modal("hide");
    },
    error: function () {
      alert("Something went wrong!!");
    },
  });
}

function stoptrip() {
  $.ajax({
    url: "api/trip/" + tripTdtoStop,
    type: "PUT",
    success: function (trip) {
      trip.duration;
      $("#confirm1").modal("hide");
    },
    error: function () {
      alert("Something went wrong!!");
    },
  });
}

function addBoat() {
  var newboat = {
    type: $("#typeBoat").val(),
    minimumprice: $("#minimumPrice").val(),
    actualprice: $("#actualPrice").val(),
    boatnumber: $("#boatNumber").val(),
    numberofseat: $("#seatsNumber").val(),
  };

  var jsonObject = JSON.stringify(newboat);
  $.ajax({
    url: "api/boat",
    contentType: "application/json",
    type: "POST",
    data: jsonObject,

    success: function () {
      alert("doen successflly");
      getBoats();
    },
    error: function () {
      alert("doen not successflly");
    },
  });
}

function addTrip() {
  var newtrip = {
    numberofperson: $("#numberOfPersoon").val(),
    boatnumber: $("#numberOfBoat").val(),
    // boat:data[boatnumber].     // $("#numberOfBoat").val(),
    Duration: $("#duration").val(),
  };

  var jsonObject = JSON.stringify(newtrip);
  $.ajax({
    url: "api/trip",
    contentType: "application/json",
    type: "POST",
    data: jsonObject,

    success: function () {
      alert("doen successflly");
      getTrips();
    },
    error: function () {
      alert("doen not successflly");
    },
  });
}

function addguest() {
  var newguest = {
    name: $("#name").val(),
    idnumber: $("#idNumber").val(),
    phonenumber: $("#phone").val(),
  };

  var jsonObject = JSON.stringify(newguest);

  $.ajax({
    url: "api/guest",
    contentType: "application/json",
    type: "POST",
    data: jsonObject,

    success: function () {
      alert("doen successflly");
      getguests();
    },
    error: function () {
      alert("doen not successflly");
    },
  });
}
