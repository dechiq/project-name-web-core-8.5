
const sidebarContactBtn = document.getElementById("footer__contact-btn");
const hiddenSidebarContact = document.getElementById ("hidden-contact__sidebar");
const hiddenOverlay = document.getElementById("hidden-overlay__sidebar");
const closeSidebarContactBtn = document.getElementById("sidebar-close-btn");
const sidebarCallBtn = document.getElementById("footer__call-btn");
const hiddenSidebarCall = document.getElementById ("hidden-call__sidebar");
const mainsidebar = document.getElementById("main-sidebar");
const mainsidebarMenuBtn = document.getElementById("menu-sidebar-btn");
const mainsidebarCloseBtn = document.getElementById("sidebar-burgerX-btn");
const contactSideBarClosebtn =document.getElementById("contact-sidebar__close-btn");
const closeSidebarCallBtn = document.getElementById("call-sidebar__close-btn");
const overlayCallCloseBtn = document.getElementById("sidebar-call__close-btn");


sidebarContactBtn.addEventListener("click", () => { 
    hiddenSidebarContact.style.display = "block";
    hiddenOverlay.style.display = "block";
    hiddenSidebarCall.style.display = "none";

}
);
closeSidebarContactBtn.addEventListener("click", () => { 
    hiddenSidebarContact.style.display = "none";
    hiddenOverlay.style.display = "none";
}
);


sidebarCallBtn.addEventListener("click", () => {
    hiddenSidebarCall.style.display = "block";
    hiddenOverlay.style.display = "block";
    hiddenSidebarContact.style.display = "none";
}
);
closeSidebarContactBtn.addEventListener("click", () => { 
    hiddenSidebarCall.style.display = "none";
    hiddenOverlay.style.display = "none";
}
);

mainsidebarMenuBtn.addEventListener("click", () => {
    mainsidebar.style.display = "block";
}
);
mainsidebarCloseBtn.addEventListener("click", () => {
    mainsidebar.style.display = "none";
}
);
contactSideBarClosebtn.addEventListener("click", () => {
    hiddenSidebarContact.style.display = "none";
}
);
closeSidebarCallBtn.addEventListener("click", () => {
    hiddenSidebarCall.style.display = "none";
}
);
overlayCallCloseBtn.addEventListener("click", () => {
    hiddenSidebarCall.style.display = "none";
    hiddenOverlay.style.display = "none";
}
);


