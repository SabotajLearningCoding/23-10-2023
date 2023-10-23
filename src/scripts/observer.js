export default (function {
    let options = {
        root: document.querySelector("body"),
        rootMargin: "0px",
        threshold: 1.0,
    }

    function callback() {
        alert("BØH!")
    }

    let observer = new IntersectionObserver(callback, options)

    observer.observe(document.querySelector(".dims"))
})()