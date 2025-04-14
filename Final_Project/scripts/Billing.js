import { command } from "./command.js";

document.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(localStorage.getItem("cartitem")) || [];
    command(data);
})