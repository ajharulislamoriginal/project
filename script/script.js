const callButtons = document.querySelectorAll(".btn-call");

   callButtons.forEach(button => {
       button.addEventListener("click", function () {
           
            
           const serviceName = this.closest(".all-service").querySelector(".text-section h2").innerText;


           const serviceNumber = this.closest(".all-service").querySelector(".number").innerText;
           const now = new Date();
           const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
           const historyDiv = document.createElement("div");






           historyDiv.classList.add("single-history");
            historyDiv.style.marginTop = "10px";
            historyDiv.style.padding = "10px";
            historyDiv.style.borderRadius = "10px"
            historyDiv.style.fontSize = "30px"
            historyDiv.style.border = "3px solid #ddd";
            historyDiv.innerHTML = `
              <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                  <strong>${serviceName}</strong> <br>
                   ${serviceNumber}
            </div>
            <div style="font-size: 25px; color: #555;">
                    ${time}
             </div>
             </div>`;
        

           document.querySelector(".item-history").appendChild(historyDiv);
       });
   });

   document.querySelector(".history-clear p").addEventListener("click", function () {
       const histories = document.querySelectorAll(".single-history");
       histories.forEach(h => h.remove());
   });



let heartCounter = document.querySelector(".heading_item_2 ul li:first-child");

let heartCount = parseInt(heartCounter.childNodes[0].textContent.trim()) || 0;

let allHearts = document.querySelectorAll(".heart-img i");

allHearts.forEach(heart => {
    heart.addEventListener("click", () => {
        heartCount++;
        heartCounter.childNodes[0].textContent = heartCount + " ";
    });
});
 

 
let copyCounter = document.querySelector(".copy-class");

let copyButtons = document.querySelectorAll(".btn-copy");

let copyCount = parseInt(copyCounter.textContent) || 0;

copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let number = btn.closest(".all-service").querySelector(".number").textContent.trim();

        navigator.clipboard.writeText(number).then(() => {
            console.log(number + " copied!");
        });

        copyCount++;
        copyCounter.textContent = copyCount + " copy";
    });
});
 


    let coinElement = document.querySelector(".heading_item_2 ul li:nth-child(2)");
    let coin = 100;
    let callButton = document.querySelectorAll(".btn-call");

    callButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            let serviceBox = btn.closest(".all-service");
            let serviceName = serviceBox.querySelector(".text-section h2").innerText;
            let serviceNumber = serviceBox.querySelector(".number-section .number").innerText;

            if (coin > 0) {
                alert("Calling-" + serviceName + "-" + serviceNumber);

                coin -= 20;
                if (coin < 0) coin = 0;
                coinElement.innerHTML = coin + '  <img src="../assets/coin.png" alt="">';
            } else {
                alert("আপনার একাউন্টে পর্যাপ্ত কয়েন নেই");
            }
        });
    });
 
 