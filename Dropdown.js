const hamburger = document.querySelector(".hamburger")

const dropdown =  document.querySelector(".dropdown")





$(".hamburger").click(function(){

$(".dropdown").css({

opacity: "1",
zIndex: "1"

})



$(".dropdown a").css({

display: "block"
    
    })
    

})

$("#overlay").click(() => {

    $(".dropdown a").css({

        display: "none"
            
            })

            $(".dropdown").css({

               
opacity: "0",
zIndex: "-1"

                    
                    })


})