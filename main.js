$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function(response) {
        $.each(response, function(i, item) {
        var $tr = $("<tr>").append(
            $("<td>").text(item.name),
            $("<td>").text(item.description),
            $("<td>").append(
            `<a href='https://www.google.com/maps?q=${item.location[0]},${item.location[1]}'>Directions</a>`
            )
        );
        $tr.appendTo("#dataTable");
        });
    });
    }); 





