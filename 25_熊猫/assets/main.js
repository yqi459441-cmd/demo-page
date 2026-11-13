(function () {
    let historyStore = [], popRunning = false,
        RouterHandle = (event) => {
            if (event && !popRunning) {
                let pos = event.oldURL.indexOf('#');
                if (event.oldURL.indexOf('#') > -1) {
                    historyStore.push(event.oldURL.substring(pos + 1))
                } else {
                    historyStore.push('#')
                }
            }
            popRunning = false;
            let router = location.hash.replace(/[/#/]/g, ""),
                selectorAll = document.querySelectorAll("div[routerName]"),
                hash = router.indexOf('?') > -1 ? router.substring(router.indexOf('?') + 1) : "",
                match = hash.match(/(^|&)id=([^&]*)(&|$)/),
                routerId = null
            if (router.length <= 0) {
                router = "index.html";
            }
            if (router.indexOf('?') > -1) {
                router = router.substring(0, router.indexOf('?'))
            }
            if (match != null) {
                routerId = unescape(match[2]);
            }

            console.log(selectorAll)
            for (let index = 0; index < selectorAll.length; index++) {
                const element = selectorAll[index];

                console.log(element.attributes["routerName"].nodeValue)
                if (element.attributes["routerName"].nodeValue !== router) {
                    element.style.display = "none";
                } else {
                    element.style.display = "block";
                    let elements = element.querySelectorAll("[v-router-id]");
                    for (let ele of elements) {
                        if (ele.getAttribute('v-router-id') == routerId) {
                            ele.style.display = "block";
                        } else {
                            ele.style.display = "none";
                        }
                    }
                    let elements2 = element.querySelectorAll("img[data-src]");
                    for (let ele of elements2) {
                        let src = ele.getAttribute('data-src');
                        ele.setAttribute('src', src)
                        ele.removeAttribute('data-src');
                    }
                }
            }
        }
    RouterHandle();
    window.addEventListener("hashchange", RouterHandle, false);
    for (let ele of document.querySelectorAll(".android_poisoning_left , .ios_poisoning_left")) {
        ele.addEventListener('click', () => {
            popRunning = true;
            let router = historyStore.pop();
            if (typeof (router) === "string") {
                location.hash = router;
            }
        }, false)
    }
})();