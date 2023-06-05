// This js file will include what to do when we get navigated to the player-details page. Remember we want to access the cached data from the localStorage. We need to include a tool that will get triggered as soon as we navigate to this specific page.

// We are going to use Anonymous Fucntion Expression.
window.onload = () => {
    // (a)---We need to have access to the data that we currently have cached in our localStorage. We need to fetch the data from the localStorage. We use this Skeleton Syntax: localStorage.getItem("nameOfTheKeyYouWant")

    let playerName= localStorage.getItem("playerName")
    let playerBreed= localStorage.getItem ("playerBreed")
    let playerStatus= localStorage.getItem("playerStatus")
    let playerImgUrl= localStorage.getItem("playerImageUrl")
    let teamId= localStorage.getItem ("teamId")

    // (b)---Let's make sure we have access to the HTML ingredients we need to "append" these new elements we are about to make.
    let playerNameContainer= document.getElementById ("player-name-container")
    let playerDetailsContainer= document.getElementById ("player-details-container")
    let imageDetailsContainer= document.getElementById ("image-details-container")
   

    // (c)---Let's make new elements to show all this player data.

        // Player Name first:
    let newPlayerNameEle= document.createElement ("h3")
    newPlayerNameEle.innerText= `Player Name: ${playerName}`
    // Important! Don't forget to append this new element to your container. So it can show up.
    playerNameContainer.appendChild(newPlayerNameEle)

// Player Breed next:
let newPlayerBreedEle= document.createElement ("p")
newPlayerBreedEle.innerText= `Player Breed: ${playerBreed}`
// Important! Don't forget to append this new element to your container. So it can show up.
playerDetailsContainer.appendChild(newPlayerBreedEle)

// Player Status finally:
let newPlayerStatusEle= document.createElement ("p")
newPlayerStatusEle.innerText= `Player Status: ${playerStatus}`
// Important! Don't forget to append this new element to your container. So it can show up.
playerDetailsContainer.appendChild(newPlayerStatusEle)

let playerImageUrl= document.createElement ("img")
playerImageUrl.src= playerImgUrl
playerImageUrl.classList.add ("puppy-image")
// Important! Don't forget to append this new element to your container. So it can show up.
imageDetailsContainer.appendChild(playerImageUrl)

}