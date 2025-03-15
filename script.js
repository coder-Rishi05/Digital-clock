  const hrs = document.querySelector("#hrs");
        const min = document.querySelector("#min");
        const sec = document.querySelector("#sec");


        //    var a= currentTime.getHours()
        //    var b= currentTime.getMinutes()
        //    var c= currentTime.getSeconds()

        setInterval(() => {
            let currentTime = new Date();
            hrs.innerHTML = (currentTime.getHours()<10?"0":"")+currentTime.getHours();
            min.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
            sec.innerHTML =  (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
        }, 1000)
