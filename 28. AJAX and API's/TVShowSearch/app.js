const form = document.querySelector("#searchForm")
form.addEventListener("submit", async function (e) {
    const deleteImgs = function(){
        const imgs = document.querySelectorAll("IMG");
        for(let img of imgs){
            img.remove();
        }
    }
    deleteImgs();
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm, isFunny: "colt"}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImages(res.data);
    form.elements.query.value = "";
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}