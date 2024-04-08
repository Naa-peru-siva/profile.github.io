$(document).ready(function(){
            $(".showItem").click(function(){
                var toShow = $(this).data("item");
                $(".item").hide();
                $("#" + toShow).show();
            });
        });