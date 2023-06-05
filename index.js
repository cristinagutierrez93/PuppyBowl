// Step 1: We need to fetch data from API and render it on the DOM. The client needs to make a request of our middleman (API) to get puppy data that we need for documentation purposes (our website)
const Base_URL= "https://fsa-puppy-bowl.herokuapp.com/api/2304-FTB-ET-WEB-FT"

async function fetchPuppyData (){
    try {
        // (a)---Tell API (aka middleman) to fetch data itself.
        let response= await fetch (`${Base_URL}/players`);

        // (b)---We need to translate the data from its original language to a language that we understand. Think that the language is in puppy form.
        let translatedData= await response.json();

        // (c)---Sometimes promise object that gets returned is in a specific format. This line of code includes translated data plus the object name and arrayname.
        let acutalPuppyData= translatedData.data.players
        // console.log(acutalPuppyData);

        // (d)---We want to give our puppy data to client.
        return acutalPuppyData;
    } catch (error){
        console.error(error);
    }
}

// Step 2: We need to use the puppy data and render it on the DOM.

async function renderPuppiesOntoTheDOM(){
    // We have to have all the HTML "ingredients" we need for this exercise.
    let puppiesContainerElement= document.getElementById("puppy-container")

    // (a) We need get the data to actually use it and render it on the website.
    const myPlayerData= await fetchPuppyData();
    
    // (b) Ok we have the data now. I want to be able to do something for each element in the player array.

    for (let i= 0; i< myPlayerData.length; i++ ) {
        // We are going to create a helper variable to make my life easier. This refers the current data element we want to use.
        let currentPuppyPlayerElement= myPlayerData[i];
        // We are creating a new "ingredient" for each element in our dataset. This is a new HTML element for each player object in the array.  
        // I'm going to add CSS using classes. I'm also going to add a CSS selector rule that targets the class name in my style.css file. 
        let newPuppyPlayerElement= document.createElement ("div");

        newPuppyPlayerElement.innerText= `Player Name: ${currentPuppyPlayerElement.name}`
        newPuppyPlayerElement.classList.add("puppy-list")

        // Puppy Cards
       
        // let newPuppyPlayerElement= document.createElement ("div");
        // newPuppyPlayerElement.innerText= `Player Name: ${currentPuppyPlayerElement.name}`
        // newPuppyPlayerElement.classList.add("puppy-cards")
       
        
        // Images
        let imageElement= document.createElement("image")
        imageElement.src= currentPuppyPlayerElement.imageUrl
        imageElement.classList.add ("puppy-images")

        // We need to have our users navigate to another page to get further information/details. We are going to include/use event listeners. This is where our button comes into play.

        let newButton= document.createElement("button")
        newButton.classList.add("details-button")
        newButton.innerText="See Details"

        newButton.addEventListener("click", () => {
            // We have our event listener when we click. We want to be able to get specific player's info onto our browser using localStorage. Remember to add data to localStorage we need to include: localStorage.setItem("nameOfYourKey", theActualDataYouWantToStore)

            localStorage.setItem("playerName", currentPuppyPlayerElement.name)
            localStorage.setItem("playerBreed", currentPuppyPlayerElement.breed)
            localStorage.setItem("playerStatus", currentPuppyPlayerElement.status)
            localStorage.setItem("playerImageUrl", currentPuppyPlayerElement.imageUrl)
            localStorage.setItem("teamId", currentPuppyPlayerElement.teamId)

            // We have cached the data on our browswer, we want to navigate to the details page. This is how we navigate to different pages using vanilla DOM: windows.location.href= "newPathUrl"
            window.location.href= "player-details.html"
        })
        
        
    // We need to append the button to the element we want.
    newPuppyPlayerElement.appendChild(newButton)

    // Don't forget that this new element is still floating around. This is how we fix it.

    puppiesContainerElement.appendChild(newPuppyPlayerElement);


    }
}
// const init= async () =>{
//     try{
//         const puppyData= await fetchPuppyData ();
//         // console.log (puppyData)
//         await renderPuppiesOntoTheDOM(puppyData);
//     } catch (error){
//         console.log(error);
//     }
// };

// init();

// ALWAYS REMEMBER TO INVOKE YOUR FUNCTION THAT RENDERS YOUR DOM!
renderPuppiesOntoTheDOM();