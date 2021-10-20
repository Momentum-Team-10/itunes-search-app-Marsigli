
const url = 'https://proxy-itunes-api.glitch.me/search?term='

const root = document.getElementById('root')

const form = document.getElementById('song-form')

const input = document.getElementById('song-field')

const songCards = document.getElementById('song-cards')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(input.value)
    fetch(url + input.value)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            const songs = data.results
            for (let song of songs) {
                let artistCard = document.createElement('div')
                artistCard.className = 'artist-card'
                songCards.appendChild(artistCard)   
                artistCard.innerHTML = `
                <img src='${song.artworkUrl100}'></img>
                <h1>${song.artistName}</h1>
                <p>${song.collectionName}</p>
                <p>${song.trackName}</p>
                <audio controls src='${song.previewUrl}'></audio>
                ` 
            }
        })
})










// function createArtist(searchInput) {
//     const searchUrl = `${url}${searchInput}`
//     fetch(searchUrl, 
//         {
//         method: 'GET',
//         headers: { 'content-type': 'application/json' },
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             for (let result of data.results) {
//                 renderArtist(result)
//             }
//         });      
// }


// function renderArtist(result) {
//     const searchResultsContainer = document.querySelector("#artist-card")
//     console.log(result) 
//     const card = document.createElement('div')
//     searchResultsContainer.appendChild(card)


//     const name = document.createElement('div')
//     name.innerHTML = result.artistName
//     name.classList.add("artist-name")
//     card.appendChild(name)
    

//     const trackName = document.createElement('div')
//     trackName.innerHTML = result.trackName
//     card.appendChild(trackName)
    
    
// }   


// searchButton.addEventlistener('submit', (e) => {        
//         e.preventDefault();
//         const searchInput = document.getElementById('song-field').value;
//         createArtist(searchInput);
//         Form.reset();
// })  

