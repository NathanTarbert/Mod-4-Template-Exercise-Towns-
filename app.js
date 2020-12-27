function attachEvents(){

    let button = document.getElementById("btnLoadTowns");
    button.addEventListener("click", (event) => {
        let input = document.getElementById("towns").value;
        let towns = input.split(", ");
        var templateInfo = document.getElementById("townsList").innerHTML;
        var templateX = Handlebars.compile(templateInfo);
        var templateData = templateX({towns});
        let list = document.getElementsByTagName("ul")[0];
        list.innerHTML += templateData;
    });   
}
attachEvents();