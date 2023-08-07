// ------------------------------------------

// // ------------------------------------------

// const eventsOrders = () => {
//     // variables
//     const cartBtn = document.querySelectorAll(".cart-btn"),
//         sidebar = document.querySelector(".sidebar");
//     // ------------
//     // open cart
//     const openCart = () => {
//         cartBtn.forEach((btn) => {
//             btn.addEventListener("click", () => {
//                 if (sidebar.classList.contains("translate-x-[100%]")) {
//                     sidebar.classList.replace("translate-x-[100%]", "translate-x-0");
//                 } else {
//                     sidebar.classList.replace("translate-x-0", "translate-x-[100%]");
//                 }
//             });
//         })
//         document.addEventListener("click", (e) => {
//             if (e.target.classList.contains("close")) {
//                 sidebar.classList.replace("translate-x-0", "translate-x-[100%]");
//             }
//         })
        
//     };
//     openCart();

//     const numOrder = () => {
//         const eleCart = document.querySelectorAll(".items__list .cart-item"),
//             numOrders = document.querySelector(".number__orders"),
//             howOrder = document.querySelector(".how__orders"),
//             apprOrder = document.querySelector(".appr_order"),
//             delEleme = document.querySelectorAll(".del-item"),
//             overlay = document.querySelector(".overlay");
        
//         eleCart.forEach((ele) => {
//             ele.addEventListener("click", () => {
//                 if (overlay.classList.contains("hidden")) {
//                     overlay.classList.replace("hidden", "flex");
//                     numOrders.classList.replace("hidden", "block");
//                 } else {
//                     overlay.classList.replace("flex", "hidden");
//                     numOrders.classList.replace("block", "hidden");
//                 }
//             })
//         })

//         document.addEventListener("click", (e) => {
//             if (e.target.classList.contains("appr")) {
//                 overlay.classList.replace("flex", "hidden");
//                 numOrders.classList.replace("block", "hidden");
//             }
//         })
        
        
        
//         apprOrder.addEventListener("click", () => {
//             if (overlay.classList.contains("hidden")) {
//                 overlay.classList.replace("hidden", "flex");
//                 howOrder.classList.replace("hidden", "block");
//             } else {
//                 overlay.classList.replace("flex", "hidden");
//                 howOrder.classList.replace("block", "hidden");
//             } 
//         })


//         delEleme.forEach((del) => {
//             del.addEventListener("click", () => {
//                 del.parentElement.remove();
//             })
//         })
        
//     }
//     numOrder();
    
// };
// eventsOrders();


// Initialization for ES Users
import {
    Collapse,
    Dropdown,
    Carousel,
    initTE,
} from "../node_modules/tw-elements/dist/js/tw-elements.es.min.js";

initTE({ Collapse, Dropdown, Carousel });

// --------------------------
