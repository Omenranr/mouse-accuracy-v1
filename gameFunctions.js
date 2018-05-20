var settings = [100, 30];

function hideMenu() {
    $(".mainMenu").hide();
    $(".footer").show();
}

$("input:radio[name=speed]").click(function () {
    settings[0] = parseInt($("input:radio[name=speed]:checked").val());
    console.log(settings);
});
$("input:radio[name=size]").click(function () {
    settings[1] = parseInt($("input:radio[name=size]:checked").val());
    console.log(settings);
});

