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

    let yearSection = document.createElement("div");

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
// SLIDER BUTTONS
// =====================

function slideLeft(index){

    document
    .getElementById(`slider-${index}`)
    .scrollBy({
        left:-500,
        behavior:"smooth"
    });

}

function slideRight(index){

    document
    .getElementById(`slider-${index}`)
    .scrollBy({
        left:500,
        behavior:"smooth"
    });

}

// =====================
// OPEN DESTINATION
// =====================

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

    // YOUTUBE VIDEOS

    let videos = "";

    place.videos.forEach(video => {

        videos += `

        <div class="video-card">

            <iframe
            src="${video}"
            title="Travel Reel"
            loading="lazy"
            allowfullscreen>
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

            <div class="video-slider">

                ${videos}

            </div>

            `
            :
            ""
        }

    `;

    document.getElementById(
    "destinationModal"
    ).style.display = "block";

}

// =====================
// CLOSE MODAL
// =====================

function closeModal(){

    document.getElementById(
    "destinationModal"
    ).style.display = "none";

}

// =====================
// IMAGE LIGHTBOX
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