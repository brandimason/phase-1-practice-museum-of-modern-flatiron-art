document.addEventListener("DOMContentLoaded", () => {
    fetchExhibit();
})

function fetchExhibit(){
fetch("http://localhost:3000/current-exhibits")
    .then(res => res.json())
    .then(data => {
        displayExhibit(data[0])
    })
   
}

function displayExhibit(exhibit){
    // console.log(exhibit)
    const titleUpdate = document.querySelector("#exhibit-title")
    titleUpdate.textContent = exhibit.title
    const imageUpdate = document.querySelector("#exhibit-image")
    imageUpdate.src = exhibit.image
    const descriptionUpdate = document.querySelector("#exhibit-description")
    descriptionUpdate.textContent = exhibit.description
    const ticketsBought = document.querySelector("#tickets-bought")
    ticketsBought.textContent = `${exhibit.tickets_bought} Tickets Bought`


    const commentArray = exhibit.comments;
    
    commentArray.forEach((index) => myFunc(index))

    function myFunc(index) {
        // console.log(index)
        const commentSection = document.querySelector("#comments-section")
        const newComment = document.createElement("p")
        newComment.textContent = index;
        commentSection.appendChild(newComment)

    }

// deliverable 2 - add a new comment to the page when you click the button
    const newCommentSection = document.querySelector("#comment-form");
    newCommentSection.addEventListener("submit", (e)=> {
        e.preventDefault();
        myFunc(e.target[0].value);
    })

// deliverable 3 - update tickets bought when button is clicked
    const ticketButton = document.querySelector('#buy-tickets-button')
    ticketButton.addEventListener('click', ()=>{
        exhibit.tickets_bought += 1
        console.log(exhibit.tickets_bought)
        ticketsBought.textContent = `${exhibit.tickets_bought} Tickets Bought`
    })



}








    // const newCommentSection = document.querySelector("#comment-form");
    //         newCommentSection.addEventListener("submit", (e)=> {
    //             e.preventDefault();
    //             console.log(e.target[0].value);
    //         })

// function addNewComment(comment){
    
// }






// const newCommentSection = document.querySelector("#comment-form")
//  newCommentSection.addEventListener("submit", (e)=> {
//     e.preventDefault()}
//  )

// newCommentSection.addEventListener('submit', (event)=> {
//     event.preventDefault(event)
   
// })




// const commentArray = exhibit.comments;
    
// commentArray.forEach((index) => myFunc(index))

// function myFunc(index) {
//     // console.log(index)
//     const commentSection = document.querySelector("#comments-section")
//     const newComment = document.createElement("p")
//     newComment.textContent = index;
//     commentSection.appendChild(newComment)

// }








// round two
// fetch("http://localhost:3000/current-exhibits")
// .then(res => res.json())
// .then(data => exhibitInfo(data[0]))

// //add the exhibits data to the page piece by piece
// function exhibitInfo(data){
//     const updateTitle = document.querySelector("#exhibit-title")
//     updateTitle.textContent = data.title
//     const updateTicketSales = document.querySelector("#tickets-bought")
//     updateTicketSales.textContent = (`${data.tickets_bought} Tickets Bought`)
//     const updateDescription = document.querySelector("#exhibit-description")
//     updateDescription.textContent = data.description
//     const updateImage = document.querySelector("#exhibit-image")
//     updateImage.src = data.image

//     // function to add each commment to the section - need to iterate through each one!
//     function showComments(data) {
//         const addComment = document.querySelector("#comments-section")
//         // console.log(addComment) this works!
//         const newComment = document.createElement("p")
//         // console.log(newComment) this works!


//     }
// }