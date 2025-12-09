const errorMsg1 = document.getElementById("errorMsg1");
const loadingBox = document.getElementById("cr");
const percentText = document.getElementById("percent");
const circle = document.getElementById("circle");
const resultSec = document.getElementById('resultSec');
const footer = document.getElementById('footer');
const containerTwo = document.getElementById('containerTwo');
const middleSideCon = document.getElementById('middleSideCon');
const ageL = document.getElementById('age');
const heightL = document.getElementById('height');
const weightL = document.getElementById('weight');
const body = document.querySelector('body');
const incLJ = document.getElementById('incLJ');
const legend = document.getElementById('legend');
const D2Image = document.getElementById('2DImage');
const copyBtn = document.getElementById('CopyBtn');
const tabbeAnd = document.getElementById('table-rutin-con-and-suggest');
const containerBBC = document.getElementById('containerBBC');
const InSuggestAdvice = document.getElementById('InSuggestAdvice');
const DropMenuBarSetting = document.getElementById('dropdown');
const nameUserX = document.getElementById('nameUserX');
const bmiStatas = document.getElementById('bmiStatas');



function detailsOpen(){
const YourdetailsL = document.getElementById('YourdetailsL');
  YourdetailsL.style.display = 'block';
    DropMenuBarSetting.style.opacity = '0';
    DropMenuBarSetting.style.zIndex = '-18';    
    DropMenuBarSetting.style.transform = 'translateY(-100%)';
}
function CloseDetailsDropD(){
  YourdetailsL.style.display = 'none';
}
function SettingOpenl(){
     DropMenuBarSetting.style.opacity = '1';
     DropMenuBarSetting.style.zIndex = '9999999999';
     YourdetailsL.style.display = 'none';
     DropMenuBarSetting.style.transform = 'translateY(0)';
}
function CrossBarToggle(){
    DropMenuBarSetting.style.opacity = '0';
    DropMenuBarSetting.style.zIndex = '-18';    
    DropMenuBarSetting.style.transform = 'translateY(-100%)';

}





function copyG(btn){
const text = 'Exercise regularly every day. Eat healthy and in proper portions. Sleep at least 7-8 hours daily. Avoid excessive sugar and fat.';
    







    // পুরান ব্রাউজার ও মোবাইল fallback
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      btn.innerHTML  = `<i class="fa-solid fa-check"></i>&nbsp;Copied!`;
    } catch (err) {
      btn.innerText = "Failed!";
    }

    document.body.removeChild(textarea);

    setTimeout(() => {
      btn.innerHTML = `<i class="fa-regular fa-copy"></i>&nbsp;Copy`;
    }, 4000);
}

const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const authorL = document.getElementById('authorL');
authorL.innerHTML= "Md Tuhin"

  function ThisLangBnBtn(){
    const enBtn = document.getElementById('enBtn');
   const bnBtn = document.getElementById('bnBtn');
   const languageOut = document.getElementById('language-out');
   languageOut.innerHTML = `<i class="fa-solid fa-globe"></i>&nbsp;Bangla`
   bnBtn.style.background ='white';
   bnBtn.style.color = 'black';
    enBtn.style.background ='black';
   enBtn.style.color = 'white';
  }
    function ThisLangEnBtn(){
  const enBtn = document.getElementById('enBtn');
  const bnBtn = document.getElementById('bnBtn');
  const languageOut = document.getElementById('language-out');
   languageOut.innerHTML = `<i class="fa-solid fa-globe"></i>&nbsp;English`;
   enBtn.style.background ='white';
   enBtn.style.color = 'black';
    bnBtn.style.background ='black';
   bnBtn.style.color = 'white';
  }
// Handle height type (cm or ft)
function toggleHeightInChange() {
  const heightSelect = document.getElementById('height-text').value;
  incLJ.style.transition = '0.3s';
  if (heightSelect === 'cm') {
    incLJ.style.opacity = '0';
  } else if (heightSelect === 'ft') {
    incLJ.style.opacity = '1';
  }
}

// Main function
function userDataPost() {

  const name = document.getElementById('userName').value.trim();
  const age = parseFloat(document.getElementById('age').value.trim());
  const gender = document.getElementById('gender-select').value;
  const heightSelect = document.getElementById('height-text').value;
  const height = parseFloat(document.getElementById('height').value.trim());
  const inc = parseFloat(document.getElementById('inc').value.trim());
  const weight = parseFloat(document.getElementById('weight').value.trim());
  const nameu = name.toLowerCase();
  const nameC = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  // Validation
  if (!isNaN(name) || isNaN(age) || isNaN(height) || isNaN(weight) || !gender) {
    errorMsg1.innerHTML = `<div class="warningg-error"><i class="ri-error-warning-line"></i> please fill in all required fields!</div>`;
    errorMsg1.style.background = "rgba(255,255,255,0.1)";
       return;
  }

  let heightM = 0;
  // Hide or show inch input field
  if (heightSelect === 'cm') {
    incLJ.style.display = 'none';
          const cm = parseFloat(document.getElementById('height').value);
          heightM = cm / 100;
  } 
  else if(heightSelect === 'ft') {
    incLJ.style.display = 'inline-block';
      const ft = parseFloat(document.getElementById('height').value) || 0;
      const inC = parseFloat(document.getElementById('inc').value) || 0;
      heightM = ((ft * 12) + inC) * 0.0254;
  }

 if(!weight || weight <= 0 || isNaN(weight)){
    alert("Please enter a valid weight !");
    return;
 }


 const BMI = weight / (heightM * heightM);
 let cetagory = "";
 let tagClass = "";
 let advice = "";
 let idealRange = "";
 let imageS = ``;

 //ADVICE FOR BOYES  AND GIRLS
 let adviceHeader ='';

 //this is advice title section
 let adviceTitle1 = '';
 let adviceTitle2 = '';
 let adviceTitle3 = '';
 let adviceTitle4 = '';
 let adviceTitle5 = '';

 //this is advice small title section
 let adviceSmalltitle1 = '';
 let adviceSmalltitle2 = '';
 let adviceSmalltitle3 = '';
 let adviceSmalltitle4 = '';
 let adviceSmalltitle5 = '';

 let adviceSmalltitle6 = '';
 let adviceSmalltitle7 = '';
 let adviceSmalltitle8 = '';
 let adviceSmalltitle9 = '';
 let adviceSmalltitle10 = '';

 let adviceSmalltitle11 = '';
 let adviceSmalltitle12 = '';
 let adviceSmalltitle13 = '';
 let adviceSmalltitle14 = '';
 let adviceSmalltitle15 = '';

 let adviceSmalltitle16 = '';
 let adviceSmalltitle17 = '';
 let adviceSmalltitle18 = '';
 let adviceSmalltitle19 = '';
 let adviceSmalltitle20 = '';

 let adviceSmalltitle21 = '';
 let adviceSmalltitle22 = '';
 let adviceSmalltitle23 = '';
 let adviceSmalltitle24 = '';
 let adviceSmalltitle25 = '';


// this is advice paragraph section
 let advice1 = '';
 let advice2 = '';
 let advice3 = '';
 let advice4 = '';
 let advice5 = '';

 let advice6 = '';
 let advice7 = '';
 let advice8 = '';
 let advice9 = '';
 let advice10 = '';

 let advice11 = '';
 let advice12 = '';
 let advice13 = '';
 let advice14 = '';
 let advice15 = '';

 let advice16 = '';
 let advice17 = '';
 let advice18 = '';
 let advice19 = '';
 let advice20 = '';

 let advice21 = '';
 let advice22 = '';
 let advice23 = '';
 let advice24 = '';
 let advice25 = '';


if( BMI < 18.5){
    cetagory = "Underweight";
    tagClass = "underweight";
    if(gender === 'male'){
    imageS = `/img/man1.png`;
    //THIS PLACE IS ADVICE SECTIONS 
   adviceHeader = 'Underweight body to Normal weight for Girl';
        adviceTitle1 = '';
        adviceTitle2 = '';
        adviceTitle3 = '';
        adviceTitle4 = '';
        adviceTitle5 = '';

        adviceSmalltitle1 = '';
        adviceSmalltitle2 = '';
        adviceSmalltitle3 = '';
        adviceSmalltitle4 = '';
        adviceSmalltitle5 = '';

        adviceSmalltitle6 = '';
        adviceSmalltitle7 = '';
        adviceSmalltitle8 = '';
        adviceSmalltitle9 = '';
        adviceSmalltitle10 = '';

        adviceSmalltitle11 = '';
        adviceSmalltitle12 = '';
        adviceSmalltitle13 = '';
        adviceSmalltitle14 = '';
        adviceSmalltitle15 = '';

        adviceSmalltitle16 = '';
        adviceSmalltitle17 = '';
        adviceSmalltitle18 = '';
        adviceSmalltitle19 = '';
        adviceSmalltitle20 = '';
        
        adviceSmalltitle21 = '';
        adviceSmalltitle22 = '';
        adviceSmalltitle23 = '';
        adviceSmalltitle24 = '';
        adviceSmalltitle25 = '';

        advice1 = '';
        advice2 = '';
        advice3 = '';
        advice4 = '';
        advice5 = '';

        advice6 = '';
        advice7 = '';
        advice8 = '';
        advice9 = '';
        advice10 = '';

        advice11 = '';
        advice12 = '';
        advice13 = '';
        advice14 = '';
        advice15 = '';

        advice16 = '';
        advice17 = '';
        advice18 = '';
        advice19 = '';
        advice20 = '';

        advice21 = '';
        advice22 = '';
        advice23 = '';
        advice24 = '';
        advice25 = '';

    }
  else{
        imageS = `/img/girl1.png`;
      adviceHeader = 'Underweight body to Normal weight for Girl';
        adviceTitle1 = '';
        adviceTitle2 = '';
        adviceTitle3 = '';
        adviceTitle4 = '';
        adviceTitle5 = '';

        adviceSmalltitle1 = '';
        adviceSmalltitle2 = '';
        adviceSmalltitle3 = '';
        adviceSmalltitle4 = '';
        adviceSmalltitle5 = '';

        adviceSmalltitle6 = '';
        adviceSmalltitle7 = '';
        adviceSmalltitle8 = '';
        adviceSmalltitle9 = '';
        adviceSmalltitle10 = '';

        adviceSmalltitle11 = '';
        adviceSmalltitle12 = '';
        adviceSmalltitle13 = '';
        adviceSmalltitle14 = '';
        adviceSmalltitle15 = '';

        adviceSmalltitle16 = '';
        adviceSmalltitle17 = '';
        adviceSmalltitle18 = '';
        adviceSmalltitle19 = '';
        adviceSmalltitle20 = '';
        
        adviceSmalltitle21 = '';
        adviceSmalltitle22 = '';
        adviceSmalltitle23 = '';
        adviceSmalltitle24 = '';
        adviceSmalltitle25 = '';

        advice1 = '';
        advice2 = '';
        advice3 = '';
        advice4 = '';
        advice5 = '';

        advice6 = '';
        advice7 = '';
        advice8 = '';
        advice9 = '';
        advice10 = '';

        advice11 = '';
        advice12 = '';
        advice13 = '';
        advice14 = '';
        advice15 = '';

        advice16 = '';
        advice17 = '';
        advice18 = '';
        advice19 = '';
        advice20 = '';

        advice21 = '';
        advice22 = '';
        advice23 = '';
        advice24 = '';
        advice25 = '';     

             
  }

}
else if( BMI < 25){
    cetagory = "Normal";
    tagClass = "normal";
    if(gender === 'male'){
    imageS = `/img/man2.png`;
    adviceHeader = ' Normal weight for Boy';
        adviceTitle1 = 'Eat a balanced deit';
        adviceTitle2 = 'Reguler Exarcise';
        adviceTitle3 = 'Hydration';
        adviceTitle4 = 'Mental health';
        adviceTitle5 = 'Regular Health Check-ups';

        adviceSmalltitle1 = 'Protein';
        adviceSmalltitle2 = 'Fruits & Vegetables';
        adviceSmalltitle3 = 'Whole Grains';
        adviceSmalltitle4 = 'Avoid';
        adviceSmalltitle5 = '';

        adviceSmalltitle6 = 'Cardio';
        adviceSmalltitle7 = 'Strength Training';
        adviceSmalltitle8 = 'Flexibility';
        adviceSmalltitle9 = 'runing';
        adviceSmalltitle10 = '';

        adviceSmalltitle11 = 'Drink';
        adviceSmalltitle12 = 'Other';
        adviceSmalltitle13 = '';
        adviceSmalltitle14 = '';
        adviceSmalltitle15 = '';

        adviceSmalltitle16 = 'Stress menagement';
        adviceSmalltitle17 = 'Social Connections';
        adviceSmalltitle18 = 'Sleep';
        adviceSmalltitle19 = '';
        adviceSmalltitle20 = '';

        adviceSmalltitle21 = 'Blood Suger and Vitamin';
        adviceSmalltitle22 = 'vitamin D';
        adviceSmalltitle23 = '';
        adviceSmalltitle24 = '';
        adviceSmalltitle25 = '';

        advice1 = 'Eat - fish , chicken , eggs , lentils, and nuts help in muscle repire.';
        advice2 = 'Aim for 5 servings/day (e.g., 1 apple + 1 cup spinach) for vitamins and fiber.';
        advice3 = 'Brown rice, oats ,and whole wheat provide sustained energy.';
        advice4 = 'Fried foods, sugary drings , and processed snacks(e.g., chips, instant noodles).';
        advice5 = '';

        advice6 = '150 mins/week of brisk walking , cycling , or swimming improves heart health.';
        advice7 = 'Lift weights or do push-ups 2-3 days/week to build muscle.';
        advice8 = 'Yoga or stretching enhances joint mobility.';
        advice9 = '30 mins/day runing or jogging improves cardiovascular health.';
        advice10 = '';

        advice11 = 'Drink **8-10 glasses of water** daily. Dehydration causes fatigue and headaches.';
        advice12 = 'Herbal tea or coconut water are good alternatives.';
        advice13 = '';
        advice14 = '';
        advice15 = '';

        advice16 = 'Practice 10 mins of meditation/day to reduce stress.';
        advice17 = 'Spend time with loved ones.';
        advice18 = 'Sleep 7-8 hours/day by 10:00 - 11:00 PM';
        advice19 = '';
        advice20 = '';

        advice21 = 'Get annual tests for BP , cholesterol , blood suger , and vitamin D to detect hidden issues (e.g., thyroid, anemia).';
        advice22 = '';
        advice23 = '';
        advice24 = '';
        advice25 = '';

    }
  else{
        imageS = `img/girl2.png`;
  }

}
else if( BMI < 30){
    cetagory = "Overweight";
    tagClass = "overweight"
    if(gender === 'male'){
    imageS = `img/man3.png`;
    }
  else{
        imageS = `img/girl3.png`;
  }

}
else if( BMI < 35){
    cetagory = "Obase I";
    tagClass ="obese1"
    if(gender === 'male'){
    imageS = `img/man4.png`;
    }
  else{
        imageS = `img/girl4.png`;
  }

}
else{
    cetagory = "Obase II+";
    tagClass = "obese2";
    if(gender === 'male'){
    imageS = `img/man5.png`;
    }
  else{
        imageS = `img/girl5.png`;
  }
    

}






//Idea BMI by age 
if (age < 18){
    idealRange = "16.5 - 23";
}
else{
    idealRange = "18.5 - 24.9";
}
// GENDER CONTROLLER SECTION 

if(gender === 'male'){
    advice = cetagory === "Normal" ? " Great job! Maintain it with exarcise.": "  bro , focus on your diet and exercise to get to normal weight";
    
}
else{
    advice = cetagory === "Normal" ? " Perfact! Main tain your shape." : 
    "Dear , try light cardio & healthy meals ";

}


  // Reset error and styles
  errorMsg1.textContent = "";
  errorMsg1.style.background = "transparent";

  // Show loader
  loadingBox.style.display = 'block';
  resultSec.style.display = 'none';

  let percent = 0;

  let interval = setInterval(() => {
    if (percent >= 100) {
      clearInterval(interval);
      percentText.textContent = "Complete";

      setTimeout(() => {
        loadingBox.style.display = 'none';
        footer.style.position = 'relative';
        middleSideCon.style.display = "none";
        body.style.overflow = 'auto';
        resultSec.style.display = 'block';
        containerTwo.style.display = 'flex';
        footer.style.display ="block";
        tabbeAnd.style.display ='block';
        resultSec.innerHTML = `
        <div id="YourdetailsL"class="Yourdetails">
        <button onclick="CloseDetailsDropD()"id="CloseDetailsDropD"><i class="fa-solid fa-xmark"></i></button>
        <h2> Your Details&nbsp;<i class="fa-solid fa-circle-info"></i></h2>
        <p>Your name <span class="bolds-textC">${nameu}</span></p>
        <p>Age <span class="bolds-textC">${age}</span></p>
        <p>You are <span class="bolds-textC">${cetagory}</span></p>
        <p>you are in the range of <span class="bolds-textC">${idealRange}</span></p>
        <p>your advice is <span class="bolds-textC">${advice}</span></p>
        <p>your BMI is <span class="bolds-textC">${BMI.toFixed(2)}</span></p>
        <p>gender <span class="bolds-textC">${gender}</span></p>
        <a href="#bmiChart">Go to BMI Chart&nbsp;<i class="ri-donut-chart-fill"></i></a>
        </div>
                    <div class="Ai-suggetion">
                <div class="class-common ww1">
                    <a href="index.html"class="arrow-back">
                        <i class="fas fa-arrow-left"></i>
                    </a>
                    <div class="class-common ww2">
                <span class="text1"><i class="ri-user-search-fill"></i>&nbsp;${nameC}'s Body Result</span>
             <span class="Ai-text">with AI Suggestion</span>
             </div>
             <div class="gender-viwe">
               <div class="gender-viwe-sec">
                <i class="ri-user-fill"></i>&nbsp;${gender}
                </div>
             </div>
             </div>
             <div class="class-common ww3">
                <div class="class-common ww4">
                    <div class="body-small-info">
                        <i class="fa-solid fa-hashtag"></i>
                        Your Body ${cetagory}
                    </div>
                    <div class="body-small-info-details">
                        <button  onclick="detailsOpen()"id="details-info-body">Details <i class="fa-regular fa-circle-question"></i></button>
                </div>
             </div>
                <div class="class-common ww6">
                    <div class="name-with">
                        <div class="language">
                            <div class="lang-btnTwo">
                            <button id="bnBtn"onclick="ThisLangBnBtn()">BN</button>
                            <button id="enBtn"onclick="ThisLangEnBtn()"class="select-lang">EN</button>
                            </div>
                            <div id="language-out"><i class="fa-solid fa-globe"></i>&nbsp;English</div>
                        </div>
                       
                           <div class="name-with-output"> <i class="fa-regular fa-lightbulb"></i>Hallo ${nameu} ${advice}</div> 
                          
                    </div>
                </div>
               <div class="class-common ww5">
               <div class="btn-copy-container"><button onclick="copyG(this)"id="CopyBtn"><i class="fa-regular fa-copy"></i>&nbsp;Copy</button></div>
                        <ul id="respons-ul">
                            <li><i class="fa-solid fa-circle"></i>&nbsp;Exercise regularly every day.</li>
                            <li><i class="fa-solid fa-circle"></i>&nbsp;Eat healthy and in proper portions.</li>
                            <li><i class="fa-solid fa-circle"></i>&nbsp;Sleep at least 7-8 hours daily.</li>
                            <li><i class="fa-solid fa-circle"></i>&nbsp;Avoid excessive sugar and fat.</li>
                        </ul>
                </div>
                </div>
              </div>`;
            legend.innerHTML = `
             <div class="flex"> <div class="legend-item"><div class="color-box" style="background:#00b894;"></div> Normal (18.5 - 24.9)</div><div id="displayFlex1"class="flex"><div style="display:${tagClass === "normal" ? "normal": "none"}"class="massage"id="massage1"></div><div style="display:${tagClass === "normal" ? "normal": "none"}"class="select-you"id="select-you1">${nameC}</div></div></div>
   <div class="flex">  <div class="legend-item"><div class="color-box" style="background:#ffeaa7;"></div> Underweight (17.0 - 18.4)</div><div class="flex"><div style="display:${tagClass === "underweight" ? "underweight": "none"}"class="massage"id="massage2"></div><div style="display:${tagClass === "underweight" ? "underweight": "none"}"class="select-you"id="select-you2">${nameC}</div></div></div>
   <div class="flex">  <div class="legend-item"><div class="color-box" style="background:#fab1a0;"></div> Overweight (25 - 29.9)</div><div class="flex"><div style="display:${tagClass === "overweight" ? "overweight": "none"}"class="massage"id="massage3"></div><div style="display:${tagClass === "overweight" ? "overweight": "none"}"class="select-you"id="select-you3">${nameC}</div></div></div>
   <div class="flex">  <div class="legend-item"><div class="color-box" style="background:#ff7675;"></div> Obese I (30 - 34.9)</div><div class="flex"><div style="display:${tagClass === "obese1" ? "obese1": "none"}"class="massage"id="massage4"></div><div style="display:${tagClass === "obese1" ? "obese1": "none"}"class="select-you"id="select-you4">${nameC}</div></div></div>
   <div class="flex">  <div class="legend-item"><div class="color-box" style="background:#a29bfe;"></div> Obese II+ (35+)</div><div class="flex"><div style="display:${tagClass === "obese2" ? "obese2": "none"}"class="massage"id="massage5"></div><div style="display:${tagClass === "obese2" ? "obese2": "none"}"class="select-you" id="select-you5">${nameC}</div></div></div>
            `;
           D2Image.innerHTML = `
                        <div id="LikeYouCall"class="class-common ww7">
                <div class="you-like">You like <i class="ri-arrow-up-down-line"></i></div>
                <div class="class-common ww9">
               <img class="img-common"src="${imageS}" alt="3">
               <div class="class-common ww8">
                <ul>
                    <li id="bmi-list">Your BMI is : <span id="BMI-li">${BMI.toFixed(2)}</span></li>
                    <li>Avoid excessive sugar and fat.</li>
                    <li>Exercise regularly every day.</li>
                    <li>Drink at least 8 glasses of water every day.</li>
                    <li>Get 7-8 hours of sleep regularly to recharge your body.</li>
                    <li>Avoid junk food and sugary drinks to maintain good health.</li>
                </ul>
              
               </div>
                
               </div>
               <div class="arrow-right-you-info">
                <div class="arrow-and-you">
                   <i class="fa-solid fa-arrow-down-long"></i>
                    <div id="Your-name">It's <span id="user-name">${nameu}</span> and you are <span id="data-bmi"> ${cetagory} </span></div>
                </div>
               </div>
              </div>
              <div class="class-common ww10">
               <button id="diet"><i class="fa-solid fa-circle-plus"></i>&nbsp;Join Diet</button>
               <a id="Rutin"class="link-go-routine" href="/pages/RoutineGenerator.html"><i class="fa-regular fa-calendar-check"></i>&nbsp;Make Routine</a>
               </div>`;

               const ChartLI = document.getElementById('ChartLI');
               ChartLI.innerHTML = `<i class="ri-pie-chart-2-fill"></i>`;

  
   InSuggestAdvice.innerHTML = `       <div id="suggestCon1"class="suggestCon">
            <div class="suggest-header">
                <div class="suggest-icon"><i class="fa-solid fa-utensils"></i>&nbsp;${adviceTitle1}</div>
               
                <div class="btn-cons-h">
                <button class="copy-text-con1-class"id="copy-text-con1"><i class="fa-solid fa-copy"></i></button>
                <button class="edit-text-con-class"><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
            </div>
            <div class="suggest-body">
                 <a class="btnConMakeR"href="pages/RoutineGenerator.html"><i class="fa-solid fa-plus"></i>&nbsp;Make Rutin</a>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <ul class="suggest-list">
                <li><span class="bold-text">${adviceSmalltitle1}</span>${advice1}</li>
                <li><span class="bold-text">${adviceSmalltitle2}</span>${advice2}</li>
                <li><span class="bold-text">${adviceSmalltitle3}</span>${advice3}</li>
                <li><span class="bold-text">${adviceSmalltitle4}</span>${advice4}</li>
                <li><span class="bold-text">${adviceSmalltitle5}</span>${advice5}</li>
                <li><span class="bold-text">${adviceSmalltitle3}</span>${advice1}</li>
                <li><span class="bold-text">${adviceSmalltitle2}</span>${advice1}</li>
            </ul>
        </div>
        <div id="suggestCon1"class="suggestCon">
            <div class="suggest-header">
                <div class="suggest-icon"><i class="fa-solid fa-utensils"></i>&nbsp;${adviceTitle2}</i></div>
               
                <div class="btn-cons-h">
                <button class="copy-text-con1-class"id="copy-text-con1"><i class="fa-solid fa-copy"></i></button>
                <button class="edit-text-con-class"><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
            </div>
            <div class="suggest-body">
                 <a class="btnConMakeR"href="pages/RoutineGenerator.html"><i class="fa-solid fa-plus"></i>&nbsp;Make Rutin</a>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <ul class="suggest-list">
                <li><span class="bold-text">${adviceSmalltitle6}</span>${advice6}</li>
                <li><span class="bold-text">${adviceSmalltitle7}</span>${advice7}</li>
                <li><span class="bold-text">${adviceSmalltitle8}</span>${advice8}</li>
                <li><span class="bold-text">${adviceSmalltitle9}</span>${advice9}</li>
                <li><span class="bold-text">${adviceSmalltitle10}</span>${advice10}</li>
                <li><span class="bold-text"></span></li>
                <li><span class="bold-text"></span></li>
            </ul>
        </div>
        <div id="suggestCon1"class="suggestCon">
            <div class="suggest-header">
                <div class="suggest-icon"><i class="fa-solid fa-utensils"></i>&nbsp;${adviceTitle3}</i></div>
               
                <div class="btn-cons-h">
                <button class="copy-text-con1-class"id="copy-text-con1"><i class="fa-solid fa-copy"></i></button>
                <button class="edit-text-con-class"><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
            </div>
            <div class="suggest-body">
                 <a class="btnConMakeR"href="pages/RoutineGenerator.html"><i class="fa-solid fa-plus"></i>&nbsp;Make Rutin</a>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <ul class="suggest-list">
                <li><span class="bold-text">${adviceSmalltitle11}</span>${advice11}</li>
                <li><span class="bold-text">${adviceSmalltitle12}</span>${advice12}</li>
                <li><span class="bold-text">${adviceSmalltitle13}</span>${advice13}</li>
                <li><span class="bold-text">${adviceSmalltitle14}</span>${advice14}</li>
                <li><span class="bold-text">${adviceSmalltitle15}</span>${advice15}</li>
                <li><span class="bold-text"></span></li>
                <li><span class="bold-text"></span></li>
            </ul>
        </div>
        <div id="suggestCon1"class="suggestCon">
            <div class="suggest-header">
                <div class="suggest-icon"><i class="fa-solid fa-utensils"></i>&nbsp;${adviceTitle4}</i></div>
               
                <div class="btn-cons-h">
                <button class="copy-text-con1-class"id="copy-text-con1"><i class="fa-solid fa-copy"></i></button>
                <button class="edit-text-con-class"><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
            </div>
            <div class="suggest-body">
                 <a class="btnConMakeR"href="pages/RoutineGenerator.html"><i class="fa-solid fa-plus"></i>&nbsp;Make Rutin</a>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <ul class="suggest-list">
                <li><span class="bold-text">${adviceSmalltitle16}</span>${advice16}</li>
                <li><span class="bold-text">${adviceSmalltitle17}</span>${advice17}</li>
                <li><span class="bold-text">${adviceSmalltitle18}</span>${advice18}</li>
                <li><span class="bold-text">${adviceSmalltitle19}</span>${advice19}</li>
                <li><span class="bold-text">${adviceSmalltitle20}</span>${advice20}</li>
                <li><span class="bold-text"></span></li>
                <li><span class="bold-text"></span></li>
            </ul>
        </div>
        <div id="suggestCon1"class="suggestCon">
            <div class="suggest-header">
                <div class="suggest-icon"><i class="fa-solid fa-utensils"></i>&nbsp;${adviceTitle5}</i></div>
               
                <div class="btn-cons-h">
                <button class="copy-text-con1-class"id="copy-text-con1"><i class="fa-solid fa-copy"></i></button>
                <button class="edit-text-con-class"><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
            </div>
            <div class="suggest-body">
                 <a class="btnConMakeR"href="pages/RoutineGenerator.html"><i class="fa-solid fa-plus"></i>&nbsp;Make Rutin</a>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <ul class="suggest-list">
                <li><span class="bold-text">${adviceSmalltitle21}</span>${advice21}</li>
                <li><span class="bold-text">${adviceSmalltitle22}</span>${advice22}</li>
                <li><span class="bold-text">${adviceSmalltitle23}</span>${advice23}</li>
                <li><span class="bold-text">${adviceSmalltitle24}</span>${advice24}</li>
                <li><span class="bold-text">${adviceSmalltitle25}</span>${advice25}</li>
                <li><span class="bold-text"></span></li>
                <li><span class="bold-text"></span></li>
            </ul>
        </div>
      </div>`;

     nameUserX.innerHTML = gender;
     bmiStatas.innerHTML = cetagory;
      }, 500);
    } else {
      percent++;

      percentText.textContent = percent + "%";
      circle.style.background = `conic-gradient(rgb(7, 162, 252) ${percent * 3.6}deg, black ${percent * 3.6}deg)`;
    }
  }, 25);
}


