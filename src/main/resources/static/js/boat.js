var boatId;
var boatTable;
function getBoats() {
  $("#tableshowboat").dataTable().fnDestroy();
  $("#tableInputBoat").hide();
  $("#boat").hide();
  $("#tableshowboat").show();
  boatTable = $('#tableshowboat').DataTable({
    ajax: {
      url: "api/boat",
      dataSrc: function (json) {
        var return_data = new Array();
        for (var i = 0; i < json.length; i++) {
          return_data.push({
            id: json[i].id,
            'actualprice': json[i].actualprice,
            'minimumprice': json[i].minimumprice,
            'type': json[i].type,
            'deleteBtn': "<button class='btn btn-danger deleteButton' boatId=' " + json[i].id + " ' >delete</button>",
            'editBtn':"<button class='btn btn-primary editBtn' boatId=' " +json[i].id + " '> edit </button>",
            'boatnumber': json[i].boatnumber,
            'numberofseat': json[i].numberofseat,
            
          });
        }
        return return_data;
      },
    },
    "columns": [
      { "data": "boatnumber" },
      { "data": "numberofseat" },
      { "data": "actualprice" },
      { "data": "minimumprice" },
      { "data": "type" },
      { "data": "editBtn" },
      { "data": "deleteBtn" }
    ],
    dom: "Bfrtip",
    buttons: [
      {
        text: "Create a boat",
        action: function (e, dt, node, config) {
          var content = $("#boat").html();
          $("#exampleModal .modal-body").html(content);
          $("#exampleModal .modal-title").text("boat Registration Form");
          $("#exampleModal").modal("show");
          $("#okDelModalBtn").hide();
          $("#saveEdtModalBtn").hide();
          $("#saveCrtModalBtn").show();
        },
      },
    ],
  });
  $("#saveCrtModalBtn").click(function () {
    postBoat();
    $("#exampleModal").modal("hide");
  });

  $("#tableshowboat tbody")
    .off()
    .on("click", "button.deleteButton", function () {
      $("#exampleModal").modal("show");
      $("#exampleModal .modal-body").text("Are you sure to delete this boat?");
      $("#exampleModal .modal-title").text("Delete Confirmation!");
      $("#okDelModalBtn").show();
      $("#saveEdtModalBtn").hide();
      $("#saveCrtModalBtn").hide();
      boatId = $(this).attr("boatId");
    });
  $("#okDelModalBtn").click(function () {
    console.log(boatId);
    deleteBoat(boatId);
    $("#exampleModal").modal("hide");
  });

    $("#tableshowboat")
        .off()
        .on('click','button.editBtn', function () {
      console.log(boatTable.row($(this).parents('tr')));
      var data1 = boatTable.row($(this).parents('tr')).data();

      $("#exampleModal").modal("show");
      var content = $("#boat").html();
      $("#exampleModal .modal-body").html(content);
      $("#exampleModal .modal-title").text("boat Modification Form");
      $("#okDelModalBtn").hide();
      $("#saveEdtModalBtn").show();
      $("#saveCrtModalBtn").hide();
      document.getElementById("boatnumber").value = data1.boatnumber;
      document.getElementById("seat").value = data1.numberofseat;
      document.getElementById("actualprice").value = data1.actualprice;
      document.getElementById("minimumprice").value = data1.minimumprice;
      document.getElementById("boattype").value = data1.type;
      boatEditId = data1.id;
    });
  $("#saveEdtModalBtn").click(function () {
    changeBoat(boatEditId);
    $("#exampleModal").modal("hide");
  });
}

function postBoat() {
  var boat = {
    boatnumber: $("#boatnumber").val(),
    numberofseat: $("#seat").val(),
    actualprice: Number($("#actualprice").val()),
    minimumprice: Number($("#minimumprice").val()),
    type: $("#boattype").val()
  };

  var jsonObject = JSON.stringify(boat);

  $.ajax({
    url: "api/boat",
    type: "POST",
    contentType: "application/json",
    data: jsonObject,
    success: function (message) {
      //           alert('The boat has created!');
      alert(message);
      $("#boatnumber").val("");
      $("#seat").val("");
      $("#actualprice").val("");
      $("#minimumprice").val("");
      $("#boattype").val("");

      boatTable.ajax.reload();
    },
    error: function () {
      alert("try again");
    },
  });
}

function deleteBoat(boatId) {
  $.ajax({
    url: "api/boat/" + boatId,
    type: "DELETE",
    success: function () {
      alert("The boat has deleted!");
      boatTable.ajax.reload();
    },
  });
}

function changeBoat(boatId) {
  var boat = {
    boatnumber: $("#boatnumber").val(),
    numberofseat: $("#seat").val(),
    actualprice: Number($("#actualprice").val()),
    minimumprice: Number($("#minimumprice").val()),
    type: $("#boattype").val()
  };
  var jsonObject = JSON.stringify(boat);

  $.ajax({
    url: "api/boat/" + boatId,
    type: "PUT",
    contentType: "application/json",
    data: jsonObject,
    success: function () {
      alert("The boat has modified!");
      //         $("#boat").hide();
      boatTable.ajax.reload();
    },
    error: function () {
      alert("try again");
    },
  });
}
$(document).ready(function () {
  getBoats();
});
