

window.onload = function(){

    alert("☕ Welcome to Brew & Beyond!");

};




document.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', function(){

        console.log("Navigating...");
    });

});