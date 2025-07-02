let main = document.getElementById("main");
let i = 0;
let correct = 0;
let incorrect = 0;
let unattempted = 0;
let sum = 0;
let arry = [
  "https://i.pinimg.com/736x/1b/c5/30/1bc5307bcb417a99a999f57991e8268e.jpg",
  "https://i.pinimg.com/736x/26/60/32/266032e59b8568b60d740ddd13a0daa7.jpg",
  "https://i.pinimg.com/736x/5c/15/19/5c151966d35447bff2e103fcf38feab0.jpg",
  "https://i.pinimg.com/736x/47/ec/84/47ec84cdd2727e1b02f6fbc303fe457c.jpg",
  "https://i.pinimg.com/736x/60/64/3c/60643c9f92347ad27fc68a851a3fa7fd.jpg",
  "https://i.pinimg.com/736x/c5/6f/5c/c56f5c3520404a6c37fe6b8d88ab641e.jpg",
  "https://i.pinimg.com/736x/dc/d7/9f/dcd79f0cccff42f9554d386addecd905.jpg",
  "https://i.pinimg.com/736x/b2/8f/2a/b28f2ab2ceef54a5808568d0e6c8cc2a.jpg",
  "https://i.pinimg.com/736x/60/1c/e9/601ce96a23a111777717721cf159e6fd.jpg",
  "https://i.pinimg.com/736x/e5/2f/96/e52f96173a709d50fb94c46c0f49ca7a.jpg",
  "https://i.pinimg.com/736x/e6/06/01/e606018e3d0815d8c29133a3dca04c3c.jpg",
  "https://i.pinimg.com/736x/70/78/e1/7078e13f2a95bd4a262f8499e695acb4.jpg",
  "https://i.pinimg.com/736x/59/c2/e3/59c2e39a32b15213d5b761778eaac23f.jpg",
  "https://i.pinimg.com/736x/9c/2c/a0/9c2ca00ff9fb9f46deb7dc68d1d7f984.jpg",
  "https://i.pinimg.com/736x/29/29/37/292937449e39488d5849ca724457336d.jpg",
  "https://i.pinimg.com/736x/f0/00/69/f0006970eb95f8f2367d2505ab0e7f65.jpg",
  "https://i.pinimg.com/736x/75/69/c9/7569c9b1b793dc719bbd00d89928b700.jpg",
  "https://i.pinimg.com/736x/49/06/5d/49065ddb3df011f50668d2754e142209.jpg",
  "https://i.pinimg.com/736x/bf/df/d2/bfdfd2e454507c1b7132ca6eaa43898b.jpg",
  "https://i.pinimg.com/736x/c9/d8/7f/c9d87ff2773d332ef9715e58058085bb.jpg",
];
let arr = [
  "https://i.pinimg.com/736x/1b/c5/30/1bc5307bcb417a99a999f57991e8268e.jpg",
  "https://i.pinimg.com/736x/3f/90/5f/3f905fad80fd4242fb5e543984b4cdfa.jpg",
  "https://i.pinimg.com/736x/5c/15/19/5c151966d35447bff2e103fcf38feab0.jpg",
  "https://i.pinimg.com/736x/47/ec/84/47ec84cdd2727e1b02f6fbc303fe457c.jpg",
  "https://i.pinimg.com/736x/60/64/3c/60643c9f92347ad27fc68a851a3fa7fd.jpg",
  "https://i.pinimg.com/736x/c5/6f/5c/c56f5c3520404a6c37fe6b8d88ab641e.jpg",
  "https://i.pinimg.com/736x/cf/1d/ed/cf1dedab8af0be5930f68d067a126cdb.jpg",
  "https://i.pinimg.com/736x/b2/8f/2a/b28f2ab2ceef54a5808568d0e6c8cc2a.jpg",
  "https://i.pinimg.com/736x/60/1c/e9/601ce96a23a111777717721cf159e6fd.jpg",
  "https://i.pinimg.com/736x/e5/2f/96/e52f96173a709d50fb94c46c0f49ca7a.jpg",
  "https://i.pinimg.com/736x/e6/06/01/e606018e3d0815d8c29133a3dca04c3c.jpg",
  "https://i.pinimg.com/736x/70/78/e1/7078e13f2a95bd4a262f8499e695acb4.jpg",
  "https://i.pinimg.com/736x/59/c2/e3/59c2e39a32b15213d5b761778eaac23f.jpg",
  "https://i.pinimg.com/736x/9c/2c/a0/9c2ca00ff9fb9f46deb7dc68d1d7f984.jpg",
  "https://i.pinimg.com/736x/29/29/37/292937449e39488d5849ca724457336d.jpg",
  "https://i.pinimg.com/736x/f0/00/69/f0006970eb95f8f2367d2505ab0e7f65.jpg",
  "https://i.pinimg.com/736x/75/69/c9/7569c9b1b793dc719bbd00d89928b700.jpg",
  "https://i.pinimg.com/736x/49/06/5d/49065ddb3df011f50668d2754e142209.jpg",
  "https://i.pinimg.com/736x/bf/df/d2/bfdfd2e454507c1b7132ca6eaa43898b.jpg",
  "https://i.pinimg.com/736x/5a/0f/60/5a0f6013af4a4247cbc9db1565c11598.jpg",
];
let ar = [
  "rgba(58, 31, 0, 0.7)",
  "transparent",
  "rgba(225, 255, 255, 0.2)",
  "rgba(8, 0, 58, 0.7)",
  "rgba(228, 143, 45, 0.2)",
  "rgba(28, 51, 42, 0.6)",
  "transparent",
  "rgba(0, 26, 56, 0.2)",
  "rgba(68, 68, 68, 0.2)",
  "rgba(35, 0, 58, 0.7)",
  "rgba(255, 255, 255, 0.1)",
  "rgba(68, 68, 68, 0.2)",
  "rgba(51, 49, 28, 0.6)",
  "transparent",
  "rgba(228, 143, 45, 0.1)",
  "rgba(28, 51, 42, 0.6)",
  "transparent",
  "rgba(10, 4, 83, 0.1)",
  "rgba(255,255,255,0.2)",
  "transparent",
];
let a = [
  "center",
  "bottom",
  "center",
  "top",
  "center",
  "center",
  "center",
  "center",
  "bottom",
  "center",
  "center",
  "center",
  "center",
  "center",
  "center",
  "center",
  "top",
  "center",
  "center",
  "bottom",
];
let qst = [
  `Which Indian spice is nicknamed "Devil's Dung"?`,
  "Which song from Mulan was also nominated for a Golden Globe Award in 1999?",
  "What happened to popcorn sales during the rise of television in the 1950s?",
  "According to some baristas, what is the bad luck in a coffee shop?",
  "From the vertical, Qutub Minar tilts just over...",
  "What's the world's most stolen food?",
  'Which Mexican state inspired the design of the Land of the Dead in "Coco"?',
  "In Japanese folklore, glowing mushrooms are linked to...",
  "What is the full form of Army?",
  "What's the strangest thing scientists have successfully done with a soap bubble?",
  'What happens if you search "do the Harlem shake" on Youtube and wait?',
  "What is the name of Apple’s programming language introduced in 2014?",
  "What's the biggest library fine ever recorded?",
  "What wacky item has been deep-fried at U.S. state fairs?",
  "What's unique about the 24 wheels carved around the Konark temple?",
  "What eerie event happens when an entire population of a bamboo species flowers at the same time, no matter where they are in the world?",
  "How many cups do Starbucks use around the world per year?",
  "Which Indian fashion designer is widely credited with dominating the luxury bridal market, particularly known for opulent lehengas worn by celebrities?",
  "What unusual job was once officially listed on the Indian Railways payroll?",
  "What iconic phrase is commonly shouted by tea vendors on Indian trains?",
];
let ansop = [
  ["Ajwain", "Asafoetida (Hing)", "Dry Mango Powder", "Cloves"],
  [
    "Reflection",
    "I'll Make a man Out of You",
    "True to Your Heart",
    "Honour to us All",
  ],
  ["They exploded", "They vanished", "Finished up", "Only dogs ate it"],
  [
    "Spilling the first espresso of the day",
    "Using decaf before noon",
    "Naming your espresso machine",
    "Running out of oat milk",
  ],
  ["40 centimeter", "65 centimeter", "80 centimeter", "37 centimeter"],
  ["Bread", "Tomato", "Green veggies", "Cheese"],
  ["Guanajuato", "Baja California", "Puebla", "	Coahuila"],
  ["Lost souls", "Ghost foxes", "Forest spirits called yokai", "Mush-gicians"],
  [
    "Alert Regular Mobility Young",
    "Alert Regular Mobility Youth",
    "Alert Regular Manage Young",
    "Alert Rifle Mobility Young",
  ],
  [
    "Balanced it on cactus needle",
    "Made it last over a year without popping",
    "sent it through a laser maze",
    "Turned it into a musical instrument",
  ],
  [
    "Your screen starts dancing",
    "Rick Astley appears",
    "Nothing-it's a myth",
    "YouTube auto-sings",
  ],
  ["Pearl", "Swift", "Flavors", "DinkC"],
  ["$100", "$2500", "$345.14", "A goat and a bushle of apples"],
  ["Butter", "Coca-Cola", "Bubble gum", "All of the above"],
  [
    "Glow at night",
    "Function as sundials",
    "Spin in the wind",
    "Shaped like donuts",
  ],
  [
    "Emit a glowing mist",
    "Relese popping sound",
    "All die after flowering",
    "Pandas migrate",
  ],
  ["1 billion", "4 billion", "6 billion", "7 billion"],
  ["Sabyasachi Mukherjee", "Ritu Kumar", "Tarun Tahiliani", "Manish Arora"],
  [
    "Monkey chasers",
    "Sleep testers",
    "Track singers (folk musicians)",
    "Passenger dream interpreters",
  ],
  [
    "Garam chai, thanda dil!",
    "Masala chai, lelo bhai!",
    "Chai garam! Chaiiiiii!",
    "Desi chai for desi dil!",
  ],
];
let winpattern = [
  "Asafoetida (Hing)",
  "Reflection",
  "They vanished",
  "Spilling the first espresso of the day",
  "65 centimeter",
  "Cheese",
  "Guanajuato",
  "Forest spirits called yokai",
  "Alert Regular Mobility Young",
  "Made it last over a year without popping",
  "Your screen starts dancing",
  "Swift",
  "$345.14",
  "All of the above",
  "Function as sundials",
  "All die after flowering",
  "4 billion",
  "Sabyasachi Mukherjee",
  "Monkey chasers",
  "Chai garam! Chaiiiiii!",
];
function add_mark(val) {
  sum += val;
}
function perform_track(sum){
  if(sum >=90){
    return "outstanding performance";
  }else if(sum>= 70){
    return "Good performance";
  }else if(sum>= 50){
    return "Scope of Improvement";
  }else{
    return "Need Improvement";
  }
}
function loadquestion() {
  if (i >= arry.length) {
    main.innerHTML = `<div class="topic">
    <div>
    <div class = "complete">
    <h1>${perform_track(sum)}</h1>
    </div>
    <div class="z crt">Correct: ${correct}</div>
    <div class="z incrt">Incorrect: ${incorrect}</div>
    <div class="z unatmpt">Skipped: ${unattempted}</div>
    <div class= "z atmpt">Attempted: ${correct+incorrect}</div>
    <div class = "z scor">Your Score: ${5*correct+(-1)*incorrect}</div>
    <div class="z tlscor">Total Score: ${5*arry.length}</div>
    <div class="z accry">Accuracy: ${((5*correct+(-1)*incorrect)/(5*arry.length))*100}%</div>
    <div class="end">
    <button><a href="index.html">Home</a></button>
    <button><a href="index@R.html">Replay</a></button>
    </div>
    </div>
    </div>`;
    return;
  }
let s = "";
s = `<div class="container">
        <img src=${arry[i]}>
        <div class="text">
            <div>
                <h2 class="number">${i + 1}</h2>
                <h1 class="quest">${qst[i]}</h1>
                <p class="options">
                    <button class = "a"><h2>${ansop[i][0]}</h2></button>
                    <button class = "a"><h2>${ansop[i][1]}</h2></button>
                    <button class = "a"><h2>${ansop[i][2]}</h2></button>
                    <button class = "a"><h2>${ansop[i][3]}</h2></button>
                </p>
                <div class="tillnow">
                  <p>${i + 1} of ${arry.length} Questions</p>
                  <p>
                      <button class = "b">Skip</button>
                      <button class = "b">Next</button>
                  </p>
                </div>
            </div>
        </div>
    </div>`;
main.innerHTML = s;
main.style.backgroundImage = `linear-gradient(${ar[i]}),url(${arr[i]})`;
main.style.backgroundPosition = `${a[i]}`;
setTimeout(() => {
  requestAnimationFrame(() => {
  let clicked_ans = "";
  let boxes = document.querySelectorAll(".a");
  let skipbtn = document.querySelector(".b:nth-Child(1)");
  let nextbtn = document.querySelector(".b:nth-Child(2)");
  
  nextbtn.disabled = true;
  nextbtn.style.opacity = "0.5";

  boxes.forEach(box => {
    box.addEventListener("click", function () {

      nextbtn.disabled = false;
      nextbtn.style.opacity = "1";

      clicked_ans = this.innerText;
      boxes.forEach(opt => {
        if (opt !== this) {
          opt.style.pointerEvents = "none";
        }
      });
      skipbtn.disabled = true;
      skipbtn.style.opacity = "0.5";
      if (clicked_ans === `${winpattern[i]}`) {
        this.disabled = true;
        this.style.color = "green";
        correct++;
        add_mark(5);
      } else {
        this.style.color = "rgba(255, 0, 0, 0.91)";
        incorrect++;
        add_mark(-1);
      }
    });
  });
  if(i==arry.length-1){
     nextbtn.innerText = "End";
  }
   nextbtn.addEventListener("click",function() {
    i++;
    loadquestion();
   });
   skipbtn.addEventListener("click", function(){
    unattempted++;
    add_mark(0);
    i++;
    loadquestion();
   })
},0);
})
}
loadquestion();
