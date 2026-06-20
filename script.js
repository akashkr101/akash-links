// =====================
// PROFILE
// =====================

document.getElementById("brand").innerText = profile.brand;
document.getElementById("name").innerText = profile.name;
document.getElementById("tagline").innerText = profile.tagline;
document.getElementById("profileImage").src = profile.image;

// =====================
// SOCIALS
// =====================

document.getElementById("socials").innerHTML = `
<a href="${profile.socials.instagram}" target="_blank">Instagram</a>
<a href="${profile.socials.youtube}" target="_blank">YouTube</a>
<a href="${profile.socials.facebook}" target="_blank">Facebook</a>
<a href="${profile.socials.snapchat}" target="_blank">Snapchat</a>
`;

// =====================
// STATS
// =====================

let totalDestinations = 0;
let totalPhotos = 0;
let totalVideos = 0;

// =====================
// TIMELINE
// =====================

const journeyContainer =
document.getElementById("journeyContainer");

journeys.forEach((yearData, yearIndex) => {

    const yearSection = document.createElement("div");

    yearSection.className = "year-section";

    yearSection.innerHTML = `

        <h2 class="year-title">
            ${yearData.year} Journey
        </h2>

        <div class="slider-wrapper">

            <button
            class="slider-btn"
            onclick="slideLeft(${yearIndex})">
            ❮
            </button>

            <div
            class="destination-slider"
            id="slider-${yearIndex}">
            </div>

            <button
            class="slider-btn"
            onclick="slideRight(${yearIndex})">
            ❯
            </button>

        </div>

    `;

    journeyContainer.appendChild(yearSection);

    const slider =
    document.getElementById(`slider-${yearIndex}`);

    yearData.destinations.forEach(place => {

        totalDestinations++;
        totalPhotos += place.images.length;
        totalVideos += place.videos.length;

        slider.innerHTML += `

        <div
        class="destination-card"
        onclick='openDestination(${JSON.stringify(place)})'>

            <img src="${place.hero}">

            <div class="destination-content">

                <h3>
                    📍 ${place.name}
                </h3>

                <p>
                    ${place.description}
                </p>

                <div class="destination-stats">

                    <span>
                        📸 ${place.images.length}
                    </span>

                    <span>
                        🎥 ${place.videos.length}
                    </span>

                </div>

            </div>

        </div>

        `;
    });

    startDestinationAutoScroll(slider);

});

// =====================
// COUNTERS
// =====================

document.getElementById("yearCount").innerText =
journeys.length;

document.getElementById("destinationCount").innerText =
totalDestinations;

document.getElementById("photoCount").innerText =
totalPhotos;

document.getElementById("videoCount").innerText =
totalVideos;

// =====================
// BUCKET LIST
// =====================

bucketList.forEach(item => {

    document.getElementById("bucketList").innerHTML +=
    `<li>✈ ${item}</li>`;

});

// =====================
// DESTINATION SLIDER
// =====================

function slideLeft(index){

    const slider =
    document.getElementById(`slider-${index}`);

    slider.scrollBy({
        left:-360,
        behavior:"smooth"
    });

}

function slideRight(index){

    const slider =
    document.getElementById(`slider-${index}`);

    slider.scrollBy({
        left:360,
        behavior:"smooth"
    });

}

function startDestinationAutoScroll(slider){

    let autoScroll = setInterval(() => {

        if(
            slider.scrollLeft + slider.clientWidth >=
            slider.scrollWidth - 20
        ){

            slider.scrollTo({
                left:0,
                behavior:"smooth"
            });

        }
        else{

            slider.scrollBy({
                left:360,
                behavior:"smooth"
            });

        }

    },1500);

    slider.addEventListener("mouseenter",()=>{

        clearInterval(autoScroll);

    });

    slider.addEventListener("mouseleave",()=>{

        startDestinationAutoScroll(slider);

    });

}

// =====================
// OPEN DESTINATION
// =====================

let currentVideoInterval = null;

function openDestination(place){

    document.body.style.backgroundImage =
    `
    linear-gradient(
    rgba(0,0,0,.75),
    rgba(0,0,0,.85)
    ),
    url('${place.hero}')
    `;

    // IMAGES

    let gallery = "";

    place.images.forEach(img => {

        gallery += `

        <img
        src="${img}"
        onclick="openImage('${img}')">

        `;

    });

    // VIDEOS

    let videos = "";

    place.videos.forEach(video => {

        videos += `

        <div class="video-card">

            <iframe
                src="${video}"
                title="Travel Reel"
                loading="lazy"
                allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>

        </div>

        `;

    });

    document.getElementById(
    "modalContent"
    ).innerHTML = `

        <div style="padding:30px">

            <h1>
                ${place.name}
            </h1>

            <p style="margin-top:10px">
                ${place.description}
            </p>

        </div>

        <h2 style="padding:20px">
            Photo Gallery
        </h2>

        <div class="gallery">

            ${gallery}

        </div>

        ${
            place.videos.length > 0
            ?
            `

            <h2 style="padding:20px">
                Travel Reels
            </h2>

            <div class="slider-wrapper">

                <button
                class="slider-btn"
                onclick="videoSlideLeft()">
                ❮
                </button>

                <div
                class="video-slider"
                id="videoSlider">

                    ${videos}

                </div>

                <button
                class="slider-btn"
                onclick="videoSlideRight()">
                ❯
                </button>

            </div>

            `
            :
            ""
        }

    `;

    document.getElementById(
    "destinationModal"
    ).style.display = "block";

    startVideoAutoScroll();

}

// =====================
// VIDEO CAROUSEL
// =====================

function videoSlideLeft(){

    const slider =
    document.getElementById("videoSlider");

    if(!slider) return;

    slider.scrollBy({
        left:-210,
        behavior:"smooth"
    });

}

function videoSlideRight(){

    const slider =
    document.getElementById("videoSlider");

    if(!slider) return;

    slider.scrollBy({
        left:210,
        behavior:"smooth"
    });

}

function startVideoAutoScroll(){

    const slider =
    document.getElementById("videoSlider");

    if(!slider) return;

    if(currentVideoInterval){

        clearInterval(currentVideoInterval);

    }

    currentVideoInterval = setInterval(() => {

        if(
            slider.scrollLeft + slider.clientWidth >=
            slider.scrollWidth - 20
        ){

            slider.scrollTo({
                left:0,
                behavior:"smooth"
            });

        }
        else{

            slider.scrollBy({
                left:210,
                behavior:"smooth"
            });

        }

    },3500);

    slider.addEventListener("mouseenter",()=>{

        clearInterval(currentVideoInterval);

    });

    slider.addEventListener("mouseleave",()=>{

        startVideoAutoScroll();

    });

}

// =====================
// CLOSE MODAL
// =====================

function closeModal(){

    if(currentVideoInterval){

        clearInterval(currentVideoInterval);

    }

    document.getElementById(
    "destinationModal"
    ).style.display = "none";

}

// =====================
// LIGHTBOX
// =====================

function openImage(src){

    document.getElementById(
    "lightbox"
    ).style.display = "flex";

    document.getElementById(
    "lightboxImg"
    ).src = src;

}

document.getElementById(
"lightbox"
).onclick = () => {

    document.getElementById(
    "lightbox"
    ).style.display = "none";

};

// =====================
// CLOSE MODAL ON OUTSIDE CLICK
// =====================

window.onclick = function(event){

    const modal =
    document.getElementById("destinationModal");

    if(event.target === modal){

        closeModal();

    }

};