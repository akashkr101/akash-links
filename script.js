document.getElementById("brand").innerText = profile.brand;
document.getElementById("name").innerText = profile.name;
document.getElementById("tagline").innerText = profile.tagline;

document.getElementById("profileImage").src =
profile.image;

const socials = document.getElementById("socials");

socials.innerHTML = `
<a href="${profile.socials.instagram}" target="_blank">Instagram</a>
<a href="${profile.socials.youtube}" target="_blank">YouTube</a>
<a href="${profile.socials.facebook}" target="_blank">Facebook</a>
<a href="${profile.socials.snapchat}" target="_blank">Snapchat</a>
`;

let totalPhotos = 0;
let totalVideos = 0;

const grid =
document.getElementById("destinationGrid");

destinations.forEach((place,index)=>{

totalPhotos += place.images.length;
totalVideos += place.videos.length;

grid.innerHTML += `
<div class="card" onclick="openDestination(${index})">

<img src="${place.hero}">

<div class="overlay">

<h3>${place.name}</h3>

<p>${place.description}</p>

</div>

</div>
`;

});

document.getElementById("destinationCount").innerText =
destinations.length;

document.getElementById("photoCount").innerText =
totalPhotos;

document.getElementById("videoCount").innerText =
totalVideos;

bucketList.forEach(item=>{

document.getElementById("bucketList").innerHTML +=
`<li>✈ ${item}</li>`;

});

function openDestination(index){

const place = destinations[index];

let gallery = "";

place.images.forEach(img=>{

gallery += `
<img src="${img}" onclick="openImage('${img}')">
`;

});

let videos = "";

place.videos.forEach(video=>{

videos += `
<video controls>
<source src="${video}" type="video/mp4">
</video>
`;

});

document.getElementById("modalContent").innerHTML = `

<div class="hero-destination">

<img src="${place.hero}">

<div class="hero-text">

<h1>${place.name}</h1>

<p>${place.description}</p>

</div>

</div>

<h2>Gallery</h2>

<div class="gallery">

${gallery}

</div>

${
place.videos.length
?
`
<h2>Travel Reels</h2>

<div class="video-grid">

${videos}

</div>
`
:
""
}

`;

document.getElementById("destinationModal").style.display =
"block";

}

function closeModal(){

document.getElementById("destinationModal").style.display =
"none";

}

function openImage(src){

document.getElementById("lightbox").style.display =
"flex";

document.getElementById("lightboxImg").src = src;

}

document.getElementById("lightbox").onclick = () => {

document.getElementById("lightbox").style.display =
"none";

};