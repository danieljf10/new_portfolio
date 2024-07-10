document.getElementById('nav-button').addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle the 'active' class on button click

    const nav = document.getElementById("nav-links");

    if(nav.style.display === 'flex'){
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
});


document.getElementById('contact-button').onclick = function(){
    alert("Email me at dn426420@dal.ca");
}

function showPage(index){
    if(index == 0){
        const aboutpage = document.getElementById("aboutpage");
        aboutpage.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    } else if(index == 1){
        const softdev = document.getElementById("softdev");
        softdev.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    } else if(index == 2){
        const photopage = document.getElementById("photographypage");
        photopage.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
}


