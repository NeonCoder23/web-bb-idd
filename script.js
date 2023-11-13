function order() {
    let giftCell = document.querySelectorAll(".cell");
    let btns = document.querySelectorAll("#giftBtn");
    for (let i = 0; i < giftCell.length; i++) {
        let rNum = Math.floor(Math.random() * 20);
        giftCell[i].style.order = rNum;
        btns[i].style.order = rNum;
    }
    
}
function disableButtons() {
    let buttons = document.querySelectorAll("#giftBtn")
    for (let i = 0; i < buttons.length; i++){
        buttons[i].disabled = true;
    }
}
function enableButtons() {
    let buttons = document.querySelectorAll("#giftBtn")
    for (let i = 0; i < buttons.length; i++){
        buttons[i].disabled = false;
    }
}
order()
let pressedButtons = [];
function game() {
    let btns = document.querySelectorAll("#giftBtn");
    let giftsCell = document.querySelectorAll(".cellGift");
    let cell = document.querySelectorAll(".cell");
    let gifts = document.querySelectorAll(".gift");
    let btnGo = document.querySelector("#davom");
    btns.forEach(e => {
        e.disabled = true;
    })
    document.querySelector("#start").addEventListener("click", () => {
        btns.forEach(e => {
            e.disabled = false;
        })
    })
    let numberRandom=2;

    btnGo.onclick = () => {
        
        numberRandom = Math.floor(Math.random() * (giftsCell.length / 6) + 1);  
        document.querySelector("span").textContent = `${numberRandom} ta tugmacha bosing!`;
        // setTimeout(output, 4200)
    }
    let clickedBtn = []
    btns.forEach((e, i) => {
        function output() {
            enableButtons()
        }
        e.addEventListener("click", () => {
            clickedBtn.push(e)
            
            
            pressedButtons.push(e);
            if (pressedButtons.length===numberRandom) {
                disableButtons()
                setTimeout(output, 4200)

            }
            setTimeout(() => {
                giftsCell[i].className = "animo";
            },3800)
            setTimeout(() => {
                document.querySelector("#content").innerHTML = `${gifts[i].innerHTML} chiqib ketdi!`;
                pressedButtons = []
            }, 4000)
            setTimeout(() => {
                gifts[i].className = "delete";
            }, 6000);

            cell[i].style.boxShadow = "0 0 10px 4px white"
            
            e.style.background = 'red';
            e.disabled = true;
        });
        
    });
    
// alert("salom")
}
game()

function qoida() {
    document.querySelector("#qoida").onclick = () => {
        alert("Boriga Baraka Web o'yini. 24 ta katak, 24ta tugmacha, 24ta sovg'a. Agar tanlash tugmasini bossangiz, nechta tugma bosishingiz aytiladi va shu tartibda davom etadi. Faqatgina bu variantda nechta bosishingizni aniqlashingiz uchun har safar tanlash tugmasini bosishingiz kerak bo'ladi hamda oxirida nechta tugma bosing deyishidan qat'iy nazar, 2ta tugmani qoldirishingiz shart! Agar tanlash tugmasini bosmay, o'ynasangiz, unda standart 2tadan tugmachani bosa olasiz! Oxirida qolgan ikkita tugmachadan tanlagan sovg'a sizniki! Omad!!!")
    }    
}
qoida()
function musicStart() {
    
    window.addEventListener('DOMContentLoaded', function() {
        var audio = document.querySelector('#audio');
        audio.play();
      
        setTimeout(function() {
          audio.pause();
        }, 12000); // Change the value to the desired duration in milliseconds (e.g., 5000 for 5 seconds)
      });
      
      window.addEventListener('beforeunload', function() {
        var audio = document.querySelector('#audio');
          audio.pause();
      });
      
}
// musicStart()

function header() {
    let img = document.querySelector(".img")
    let head = document.querySelector(".header")
    let h2 = document.querySelector("h2")
    let btn = document.querySelector("#Come")

    btn.addEventListener("click", () => {
        img.classList.add("noneScreen")
        h2.classList.add("noneScreen")
        head.classList.add("noneScreen")
        let audio = document.querySelector('#audio');
        audio.play();
      
        setTimeout(function() {
          audio.pause();
        }, 12000);
    })


}
header()
function repeat() {
    document.querySelector("#repeat").addEventListener("click", () => {
        location.reload()
    })
}
repeat()