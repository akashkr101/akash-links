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

const socialIconPaths = {
    Facebook: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
    Instagram: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    Snapchat: "M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z",
    YouTube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
};

const socialsContainer = document.getElementById("socials");

profile.socials.forEach(social => {
    const group = document.createElement("div");
    group.className = "social-group";

    const heading = document.createElement("h3");
    heading.className = "social-group-heading";

    const iconPath = socialIconPaths[social.platform];
    if (!iconPath) {
        throw new Error(`Missing icon for social platform: ${social.platform}`);
    }

    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("class", `social-platform-icon social-platform-icon--${social.platform.toLowerCase()}`);
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("aria-hidden", "true");
    icon.setAttribute("focusable", "false");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", iconPath);
    path.setAttribute("fill", "currentColor");
    icon.appendChild(path);

    heading.append(icon, document.createTextNode(social.platform));
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
