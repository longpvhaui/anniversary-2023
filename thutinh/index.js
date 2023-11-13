const contentLetterStart_actived = "Hãy nói gì đó ở đây trước khi người ấy mở bức thư nhé." //Lời mở đầu cho bức thư
const mainContentLetter = "Gửi lời nhắn nhủ đến người bạn bạn yêu thương." //Nội dung của bức thư
const checked = false;
// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "../image/cute-young-boy-kid-wearing-vest-and-hat-free-png.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "../image/b4bbdb54b7152338d7143cb444a77f09.png"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết


// phần mở đầu
document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterStart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterStart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

 //click vào hộp quà
 document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            // let getTypeDevice = document.documentElement.clientWidth;
            // if (getTypeDevice <= 768) {
            //     createHeart(20)
            // } else {
            //     createHeart(40)
            // }

        }, 500)
    }, 500)
})



//tách chữ
const splitContentLetterStart_actived = contentLetterStart_actived.split("");

document.querySelector(".designBox").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    this.checked = !this.checked;
    if (this.checked == true) {
       
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                    document.querySelector(".button-next").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
        document.querySelector(".button-next").setAttribute("style", "opacity: 0; transition: .5s")
    }
})
document.querySelector(".button-next").addEventListener("click", function () {

    setTimeout(()=>{

        window.location.href = "../love/love.html"
    },200)
 });



