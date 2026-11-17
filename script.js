/* =====================
PROFILE
===================== */

document.getElementById("brand").innerText = profile.brand;
document.getElementById("name").innerText = profile.name;
document.getElementById("tagline").innerText = profile.tagline;
document.getElementById("profileImage").src = profile.image;
document.getElementById("profileImage").decoding = "async";

/* =====================
SOCIAL LINKS
===================== */

const socialsContainer = document.getElementById("socials");

profile.socials.forEach(social => {
    const group = document.createElement("div");
    group.className = "social-group";

    const heading = document.createElement("h3");
    heading.textContent = social.platform;
    group.appendChild(heading);

    const links = document.createElement("div");
    links.className = "social-group-links";

    social.accounts.forEach(account => {
        const link = document.createElement("a");
        link.href = account.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = account.label;
        links.appendChild(link);
    });

    group.appendChild(links);
    socialsContainer.appendChild(group);
});

/* =====================
STATS
===================== */

let totalDestinations = 0;
let totalPhotos = 0;
let totalVideos = 0;
let activeDestinationImages = [];
let activeDestinationName = "";
let currentLightboxIndex = 0;
let lightboxReturnFocus = null;
let modalReturnFocus = null;
let previousBodyOverflow = "";
let previousBodyBackground = "";

/* =====================
TIMELINE GENERATION
===================== */

const journeyContainer =
document.getElementById("journeyContainer");

journeys.forEach((yearData, yearIndex) => {


const yearSection =
document.createElement("div");

yearSection.className =
"year-section";

yearSection.innerHTML = `

    <h2 class="year-title">
        ${yearData.year} Journey
    </h2>

    <div class="slider-wrapper">

        <button
        class="slider-btn"
        type="button"
        aria-label="Scroll ${yearData.year} destinations left"
        onclick="slideLeft(${yearIndex})">
        ❮
        </button>

        <div
        class="destination-slider"
        id="slider-${yearIndex}">
        </div>

        <button
        class="slider-btn"
        type="button"
        aria-label="Scroll ${yearData.year} destinations right"
        onclick="slideRight(${yearIndex})">
        ❯
        </button>

    </div>

`;

journeyContainer.appendChild(
    yearSection
);

const slider =
document.getElementById(
    `slider-${yearIndex}`
);

yearData.destinations.forEach(place => {

    totalDestinations++;
    totalPhotos += place.images.length;
    totalVideos += place.videos.length;

    const card = document.createElement("button");
    card.type = "button";
    card.className = "destination-card";
    card.setAttribute("aria-label", `Open ${place.name} photo gallery`);

    const image = document.createElement("img");
    image.src = place.hero;
    image.alt = `${place.name} destination`;
    image.loading = "lazy";
    image.decoding = "async";
    card.appendChild(image);

    const content = document.createElement("span");
    content.className = "destination-content";

    const title = document.createElement("span");
    title.className = "destination-title";
    title.setAttribute("role", "heading");
    title.setAttribute("aria-level", "3");
    title.textContent = `📍 ${place.name}`;
    content.appendChild(title);

    const description = document.createElement("span");
    description.className = "destination-description";
    description.textContent = place.description;
    content.appendChild(description);

    const stats = document.createElement("span");
    stats.className = "destination-stats";
    stats.innerHTML = `
        <span>📸 ${place.images.length}</span>
        <span>🎥 ${place.videos.length}</span>
    `;
    content.appendChild(stats);
    card.appendChild(content);
    card.addEventListener("click", () => openDestination(place, card));
    slider.appendChild(card);

});

});

/* =====================
COUNTERS
===================== */

document.getElementById(
"yearCount"
).innerText = journeys.length;

document.getElementById(
"destinationCount"
).innerText = totalDestinations;

document.getElementById(
"photoCount"
).innerText = totalPhotos;

document.getElementById(
"videoCount"
).innerText = totalVideos;

document.getElementById("currentYear").textContent =
    new Date().getFullYear();

/* =====================
BUCKET LIST
===================== */

bucketList.forEach(item => {


document.getElementById(
"bucketList"
).innerHTML +=
`<li>✈ ${item}</li>`;


});

/* =====================
DESTINATION CAROUSEL
===================== */

function slideLeft(index) {
    document.getElementById(`slider-${index}`).scrollBy({
        left: -360,
        behavior: "smooth"
    });
}

function slideRight(index) {
    document.getElementById(`slider-${index}`).scrollBy({
        left: 360,
        behavior: "smooth"
    });
}

/* =====================
DESTINATION MODAL
===================== */

function openDestination(place, trigger = document.activeElement) {
    const modal = document.getElementById("destinationModal");
    const content = document.getElementById("modalContent");
    const heading = document.createElement("h1");
    const description = document.createElement("p");
    const galleryTitle = document.createElement("h2");
    const gallery = document.createElement("div");

    modalReturnFocus = trigger;
    activeDestinationImages = place.images;
    activeDestinationName = place.name;
    previousBodyOverflow = document.body.style.overflow;
    previousBodyBackground = document.body.style.backgroundImage;

    document.body.style.overflow = "hidden";
    document.body.style.backgroundImage =
        `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.85)), url('${place.hero}')`;

    heading.id = "modalTitle";
    heading.textContent = place.name;
    description.textContent = place.description;
    galleryTitle.className = "modal-section-title";
    galleryTitle.textContent = "Photo Gallery";
    gallery.className = "gallery";
    gallery.setAttribute("aria-label", `${place.name} photo gallery`);

    place.images.forEach((src, index) => {
        const button = document.createElement("button");
        const image = document.createElement("img");

        button.className = "gallery-item";
        button.type = "button";
        button.setAttribute("aria-label", `Open ${place.name} photo ${index + 1}`);
        button.addEventListener("click", () => openImage(index, button));

        image.src = src;
        image.alt = `${place.name} travel photo ${index + 1}`;
        image.loading = "lazy";
        image.decoding = "async";
        button.appendChild(image);
        gallery.appendChild(button);
    });

    content.replaceChildren();

    const introduction = document.createElement("div");
    introduction.className = "modal-heading";
    introduction.append(heading, description);
    content.append(introduction, galleryTitle, gallery);

    if (place.videos.length > 0) {
        const videoTitle = document.createElement("h2");
        const videoWrapper = document.createElement("div");
        const videoSlider = document.createElement("div");
        const previousButton = document.createElement("button");
        const nextButton = document.createElement("button");

        videoTitle.className = "modal-section-title";
        videoTitle.textContent = "Travel Reels";
        videoWrapper.className = "slider-wrapper";
        videoSlider.className = "video-slider";
        videoSlider.id = "videoSlider";

        previousButton.className = "slider-btn";
        previousButton.type = "button";
        previousButton.setAttribute("aria-label", "Scroll reels left");
        previousButton.textContent = "❮";
        previousButton.addEventListener("click", videoSlideLeft);

        nextButton.className = "slider-btn";
        nextButton.type = "button";
        nextButton.setAttribute("aria-label", "Scroll reels right");
        nextButton.textContent = "❯";
        nextButton.addEventListener("click", videoSlideRight);

        place.videos.forEach((video, index) => {
            const card = document.createElement("div");
            const iframe = document.createElement("iframe");

            card.className = "video-card";
            iframe.src = video;
            iframe.title = `${place.name} travel reel ${index + 1}`;
            iframe.loading = "lazy";
            iframe.allowFullscreen = true;
            iframe.allow =
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            card.appendChild(iframe);
            videoSlider.appendChild(card);
        });

        videoWrapper.append(previousButton, videoSlider, nextButton);
        content.append(videoTitle, videoWrapper);
    }

    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    modal.scrollTop = 0;
    document.getElementById("modalClose").focus();
}

/* =====================
VIDEO CAROUSEL
===================== */

function videoSlideLeft() {
    const slider = document.getElementById("videoSlider");
    if (!slider) return;
    slider.scrollBy({ left: -220, behavior: "smooth" });
}

function videoSlideRight() {
    const slider = document.getElementById("videoSlider");
    if (!slider) return;
    slider.scrollBy({ left: 220, behavior: "smooth" });
}

/* =====================
CLOSE MODAL
===================== */

function closeModal() {
    const modal = document.getElementById("destinationModal");
    if (document.getElementById("lightbox").style.display === "flex") {
        closeImage(false);
    }

    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = previousBodyOverflow;
    document.body.style.backgroundImage = previousBodyBackground;

    if (modalReturnFocus && typeof modalReturnFocus.focus === "function") {
        modalReturnFocus.focus();
    }
}

/* =====================
LIGHTBOX
===================== */

function openImage(index, trigger) {
    currentLightboxIndex = index;
    lightboxReturnFocus = trigger;
    updateLightbox();

    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "flex";
    lightbox.setAttribute("aria-hidden", "false");
    document.getElementById("lightboxClose").focus();
}

function updateLightbox() {
    const image = document.getElementById("lightboxImg");
    const place = activeDestinationImages[currentLightboxIndex];

    image.src = place;
    image.alt =
        `${activeDestinationName} travel photo ${currentLightboxIndex + 1} of ${activeDestinationImages.length}`;
    document.getElementById("lightboxCaption").textContent =
        `${activeDestinationName} · ${currentLightboxIndex + 1} of ${activeDestinationImages.length}`;
}

function changeLightboxImage(direction) {
    currentLightboxIndex =
        (currentLightboxIndex + direction + activeDestinationImages.length) %
        activeDestinationImages.length;
    updateLightbox();
}

function closeImage(restoreFocus = true) {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
    lightbox.setAttribute("aria-hidden", "true");

    if (restoreFocus && lightboxReturnFocus) {
        lightboxReturnFocus.focus();
    }
}

function trapFocus(container, event) {
    const focusable = Array.from(container.querySelectorAll(
        'button:not([disabled]), a[href], iframe, [tabindex]:not([tabindex="-1"])'
    )).filter(element => element.getClientRects().length > 0);

    if (focusable.length === 0) {
        event.preventDefault();
        container.focus();
        return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && (document.activeElement === first || !container.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !container.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
    }
}

/* =====================
CLOSE MODAL ON OUTSIDE CLICK
===================== */

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("destinationModal").addEventListener("click", event => {
    if (event.target === event.currentTarget) closeModal();
});

document.getElementById("lightboxClose").addEventListener("click", () => closeImage());
document.getElementById("lightboxPrevious").addEventListener("click", () => changeLightboxImage(-1));
document.getElementById("lightboxNext").addEventListener("click", () => changeLightboxImage(1));
document.getElementById("lightbox").addEventListener("click", event => {
    if (event.target === event.currentTarget) closeImage();
});

document.addEventListener("keydown", event => {
    const lightbox = document.getElementById("lightbox");
    const modal = document.getElementById("destinationModal");

    if (lightbox.style.display === "flex") {
        if (event.key === "Escape") {
            event.preventDefault();
            closeImage();
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            changeLightboxImage(-1);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            changeLightboxImage(1);
        } else if (event.key === "Tab") {
            trapFocus(lightbox, event);
        }
        return;
    }

    if (modal.style.display === "block") {
        if (event.key === "Escape") {
            event.preventDefault();
            closeModal();
        } else if (event.key === "Tab") {
            trapFocus(modal, event);
        }
    }
});
