


//TARGETING ELEMENTS IN DOCUMENT



//THIS WILL GRAB THE ENTIRE ELEMENT BY THE ID NAME - 
//EX: 
let serviceHeading = document.getElementById("serviceAmazing");
console.log(serviceHeading);

//GRAB THE ID BY MULTIPLE ELEMENTS BY CLASS NAME
//MAKES AN ARRAY WITH ALL THE ELEMENTS WITH THE SPECIFIED CLASS NAME
let serviceElements= document.getElementsByClassName("serviceIcons");
console.log(serviceElements);

//GRABBING THE ELEMENT BY CSS SELECTION METHOD
let serviceSupport = document.querySelector(".amazingTextSpace p");
console.log(serviceSupport);

//GRABBING ALL ELEMENTS BY CSS SELCTION METHOD
let serviceColumns = document.querySelectorAll(".featureButtons p");
console.log(serviceColumns);



//MODIFYING ELEMENTS SECTION

//USING VARIABLE 
serviceHeading.innerHTML = "AMAZING";

//CHANGING THE TEXT FOR A SPECIFIC INDEX IN A NODE COLLECTION 
serviceColumns[3].innerHTML = "Pizza";



//STYLING ELEMENTS 
//W3 schools element styling list https://www.w3schools.com/jsref/dom_obj_style.asp
serviceSupport.style.color = "green";
serviceSupport.style.fontSize = "60px";


let serviceImageOne = document.querySelector(".amazing img");
console.log(serviceImageOne);

//serviceImageOne.addEventListener("click", onImagePress)

function onImagePress(){
    console.log("you clicked me")
}

let servicesText= document.querySelectorAll(".featureButtons p");
console.log(servicesText);

serviceImageOne.addEventListener("click", stylingText);

function stylingText(){

    for (let i = 0; i < servicesText.length; i++) {
        const element = servicesText[i];

        if(element % 2 != 0){
            element.style.color = "green"; 
            element.style.fontSize= "60px";
        }//END IF
        
    }//END FOR

}//END FUNCTION



//PRACTICE: 

//1. GOAL: IF MOBILE IMG IS CLICKED CHANGE NAV BAR LIST TO BLUE

//TARGET NAV BAR LIST AND SAVE TO A VARIABLE
let navList= document.querySelectorAll(".navBar li");
console.log(navList);

//TARGET IMAGE FOR EVENT 
let mobileImg = document.querySelector(".development img");

//ATTACH EVENT TO TARGET IMAGE 
mobileImg.addEventListener("click", navToBlue);

//CREATE FUNCTION TO HANDLE COLOR CHANGE
function navToBlue(){
    for (let i = 0; i < navList.length; i++) {
        const element = navList[i];

        element.style.color = "blue";
        
    }
}


//2. GOAL: IF HOVING OVER PORTFOLIO HEADER CONSOLE.LOG "IMA MR.PORTFOLIO"

//TARGET ELEMENT FOR EVENT
let portfolioSpan = document.querySelector(".portfolio span");

//CREATE FUNCTION FOR EVENT 
function consolePortfolio(){
    console.log("Ima Mr.Portfolio");
}

//ATTACH EVENT TO TARGET ELEMENT
portfolioSpan.addEventListener("mouseover", consolePortfolio)


//3. GOAL REVERT PIZZA TEXT BACK TO ORIGINAL WORD IN JAVASCRIPT

let wordRevert= document.querySelector(".amazingTextSpace p")

serviceColumns[3].innerHTML= wordRevert.innerText
 



//4. GOAL CHANGE ALL PORTFOLIO BUTTONS FROM GREEN TO PURPLE

//TARGET ELEMENTS
let portButtons= document.querySelectorAll(".portfolio button");
console.log(portButtons)

//CALL FUNCTION
changeButtonColor();

//CREATE FUNCTION 
function changeButtonColor(){
    for (let i = 0; i < portButtons.length; i++) {
        const element = portButtons[i];
        
        element.style.backgroundColor = "purple";
    }
}



//5. GOAL CHANGE PORTFOLIO SUBHEADINGS TO 60PX WHEN STACKED CARD IMG IS CLICKED

//TARGET EVENT ELEMENT
let clickImg= document.querySelector(".miniCards img"); 

//TARGET ELEMENTS TO MODIFY
let subheaderChange = document.querySelectorAll(".portfolio h3");
console.log(subheaderChange)

//CREATE FUNCTION 
function changeFontSize(){
    for (let i = 0; i < subheaderChange.length; i++) {
        const element = subheaderChange[i];

        element.style.fontSize= "60px";
        
    }
}

//ADD EVENT TO ELEMENT
clickImg.addEventListener("click", changeFontSize);

//#region HIDE 
/*
//INPUT BOCES:

//TARGET INPUT BOX FOR NAME
let inputName = document.getElementById("name");

//CREATE VARIABLE TO SAVE TEXT BOX INFO
let savedInfo="";


console.log(inputName)

//EVENT LISTENER - WHEN INPUT CHANGES - EVENT IS TRIGGERED TO GRAB THE VALUE - BUFFER IS USED TO HOLD THE UPDATED 
inputName.addEventListener("change" , ()=> {
    let currentInput= inputName.value;
    savedInfo = currentInput;
    console.log(savedInfo);
})

let inputEmail= document.querySelector("#email");

let subscribeButton= document.querySelector(".subscribe input");

let savedEmailInfo="";

subscribeButton.addEventListener("click", ()=> {
    savedEmailInfo=inputEmail.value;

    inputEmail.value = "";
    console.log(sasvedEmailInfo);
})


//SAVING A LIST OF PERSONAL INFORMATION
*/
//#endregion


// SAVING A LIST OF INFORMATION 

//THIS WILL HOLD DETAILED OBJECT OF INFO
let subscribeList = []

//THIS IS AN OBJECT TEMPLATE TO PUSH INTO THE ARRAY 
let personInfo = {
    name: "",
    email: ""
};

//USED TO GRAB THE INPUT FOR NAME - JUST THE VALUE

//USED TO GRAB THE INPUT FOR EMAIL - JUST THE VALUE

//EVENT LISTENER VARIABLE
let subscribeButton = document.querySelector(".subscribe button");

console.log(subscribeButton); 

subscribeButton.addEventListener("click", grabNewsLetterInfo);

function grabNewsLetterInfo(){
    let inputName= document.querySelector("#name");
    let inputEmail= document.querySelector("#email");
    
    personInfo.name= inputName.value; 
    personInfo.email = inputEmail.value;
    console.log(personInfo)

    subscribeList.push(personInfo);
    console.log(subscribeList); 

    inputName.value="";
    inputEmail.value="";


}

