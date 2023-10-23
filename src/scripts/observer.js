export default (function {
    let options = {
        root: document.querySelector("body"),
        rootMargin: "0px",
        threshold: 1.0,
    }

    function callback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return // guard-clause

            if (entry.intersectionRatio >= 0.75) {
                alert("BØH!");
            }
        })
    }

    let observer = new IntersectionObserver(callback, options)

    observer.observe(document.querySelector(".dims"))
})()