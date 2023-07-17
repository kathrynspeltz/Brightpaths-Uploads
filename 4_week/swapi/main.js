const resBtn = document.querySelector("button")

const newH3 = (resName) => {
    let newheader = document.createElement('h3')
    newheader.textContent = resName
    btnMsg.appendChild(newheader)

}

function btnClick(dataFetch) {
    let alderaanObj = {}
    let worldData = dataFetch
    console.log(worldData)
    alderaanObj = dataFetch.results[0]
    console.log(alderaanObj)

    let residents = alderaanObj.residents
    console.log(residents)
    for (let i = 0; i < residents.length; i++) {
        axios.get(residents[i]).then(res => newH3(res.data.name))
    }
}


resBtn.addEventListener("click", () => {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
        .then(res => btnClick(res.data))
})

