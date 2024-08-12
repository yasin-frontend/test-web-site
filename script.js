let menu_list = document.querySelector(".menu-list");
let menu_list_img = document.querySelector(".menu-list img");
let menu_list_h3 = document.querySelector(".menu-list h3");
let headers = document.querySelector(".headers");
let nav = document.querySelector(".nav");
let num = true;
let alert_div = document.querySelector(".alert-div");
let menu_divs = document.querySelectorAll(".menu-divs");
let buttons = document.querySelectorAll('.btns button');
let create_btn = document.querySelector(".create-btn");
let span = document.querySelector(".span");
let img = document.querySelector(".search-menu img");
let btn = document.querySelector(".search-menu button");
let radius = document.querySelectorAll(".radius");
let none = document.querySelector(".none");
let none1 = document.querySelector(".none1");
let done1 = document.querySelector(".done1")
let locations_div = document.querySelector(".locations-div");
let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let inp3 = document.querySelector(".inp3");
let inp4 = document.querySelector(".inp4");
let add_div = document.querySelector(".add-div")
let remene_div = document.querySelector(".remene-div")
let name_span = document.querySelector(".name-span")

menu_list.addEventListener("click", () => {
    if (num) {
        nav.style.width = "58px";
        menu_list_h3.style.opacity = "0";
        menu_list_img.style.transform = "scale(-1)";
        headers.style.width = "94%";
        setTimeout(() => {
            menu_list_h3.style.display = "none";
        }, 100);
        menu_divs.forEach(divs => {
            divs.style.gap = "25px";
        });
    } else {
        nav.style.width = "270px";
        menu_list_img.style.transform = "scale(1)";
        menu_list_h3.style.display = "block";
        setTimeout(() => {
            menu_list_h3.style.opacity = "1";
        }, 100);
        menu_divs.forEach(divs => {
            divs.style.gap = "15px";
        });
        headers.style.width = "78%";
    }
    num = !num;
});

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        button.classList.add("btn-animation");
        setTimeout(() => {
            button.classList.remove("btn-animation");
        }, 300);
    });
});

menu_divs.forEach(menu_div => {
    menu_div.addEventListener("click", () => {
        menu_divs.forEach(menu => menu.classList.remove('active-div'));
        menu_div.classList.add('active-div');
    });
});

create_btn.addEventListener("click", () => {
    create_btn.classList.add("btn-animation");
    setTimeout(() => {
        create_btn.classList.remove("btn-animation");
    }, 300);
    alert_div.style.display = "flex";
    add_div.style.display = "flex"
    remene_div.style.display = "none"
    Delete()
});

function updateDateTime() {
    const now = new Date();
    const localDate = now.toLocaleDateString();
    const localTime = now.toLocaleTimeString();
    span.textContent = `(${localDate}  ${localTime})`;
}
updateDateTime();

btn.addEventListener("click", () => {
    updateDateTime();
    btn.classList.add("btn-animation");
    img.classList.add("img-anim");
    setTimeout(() => {
        btn.classList.remove("btn-animation");
    }, 300);
    setTimeout(() => {
        img.classList.remove("img-anim");
    }, 500);
});

radius.forEach(item => {
    item.dataset.son = "true";
    item.addEventListener("click", () => {
        if (item.dataset.son === "true") {
            item.style.left = "48%";
            item.dataset.son = "false";
        } else {
            item.style.left = "5%";
            item.dataset.son = "true";
        }
    });
});

none.addEventListener("click", () => {
    alert_div.style.display = "none";
    Delete()
});

let done = document.querySelector(".done")
function addDeleteFunctionality() {
    document.querySelectorAll(".big-one .set2 button:last-of-type").forEach(btn => {
        btn.addEventListener("click", (event) => {
            const bigOneElement = event.target.closest(".very-big");
            if (bigOneElement) {
                bigOneElement.remove();
            }
        });
    });
}
let depthLimit = 3;

done.addEventListener("click", () => {
    if (inp1.value.trim() === "" || inp3.value.trim() === "") {
        alert("Заполните все обязательные поля");
        return;
    }

    let duplicateFound = false;
    document.querySelectorAll(".big-one h3").forEach(h3 => {
        if (h3.textContent.trim().toLowerCase() === inp1.value.trim().toLowerCase()) {
            duplicateFound = true;
        }
    });

    if (duplicateFound) {
        alert("Локация с таким именем уже существует. Пожалуйста, используйте другое имя.");
        return;
    }

    let random = Math.floor(Math.random() * 700 + 1);
    let big_one_found = null;
    let currentDepth = 0;

    if (inp4.value.trim() !== "") {
        document.querySelectorAll(".big-one h3").forEach(h3 => {
            if (h3.textContent === inp4.value) {
                big_one_found = h3.parentElement.parentElement;
                currentDepth = (parseFloat(big_one_found.style.marginLeft) || 0) / 3 + 1;
            }
        });

        if (!big_one_found) {
            alert("Такой локации ещё не добавили");
            alert_div.style.display = "flex";
            return;
        }

        if (currentDepth >= depthLimit) {
            alert("Вы достигли предела вложенности");
            return;
        }
    }

    let very_big = document.createElement("div");
    let big_one = document.createElement("div");
    let set = document.createElement("div");
    let set2 = document.createElement("div");
    let p = document.createElement("p");
    let rad = document.createElement("div");
    let img_img = document.createElement("img");
    let img_img1 = document.createElement("img");
    let h3 = document.createElement("h3");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    let btn1_img = document.createElement("img");
    let btn2_img = document.createElement("img");
    let coniform_div = document.createElement("div");


    h3.textContent = inp1.value;
    img_img.src = "img/Group532.svg";
    img_img1.src = "img/Плюс.svg";
    btn1_img.src = "img/change.svg";
    btn2_img.src = "img/remove.svg";
    btn1.textContent = "Редактировать";
    btn2.textContent = "Удалить";
    btn1.style.cursor = "pointer";
    btn2.style.cursor = "pointer";

    very_big.classList.add("very-big");
    big_one.classList.add("big-one");
    set.classList.add("set");
    set2.classList.add("set2");
    rad.classList.add("rad");
    coniform_div.classList.add("coniform-div");

    set.appendChild(rad);
    set.appendChild(img_img);
    set.appendChild(h3);
    big_one.appendChild(set);
    big_one.appendChild(p);
    p.textContent = random;

    let isVirtualActive = document.querySelector('.settings .one .radius').dataset.son === "false";
    let isLossActive = document.querySelector('.settings .two .radius').dataset.son === "false";

    if (isLossActive || isVirtualActive || inp2.value == "") {
        big_one.appendChild(coniform_div);
    }

    if (isVirtualActive) {
        let p_virtual = document.createElement("p");
        p_virtual.textContent = "Виртуальная";
        coniform_div.appendChild(p_virtual);
    }
    if (isLossActive) {
        let p_loss = document.createElement("p");
        p_loss.textContent = "Для утерь";
        coniform_div.appendChild(p_loss);
    }
    if (inp2.value === "") {
        let p_kod = document.createElement("p");
        p_kod.textContent = "Без штрихкода";
        p_kod.classList.add("p-kod");
        coniform_div.appendChild(p_kod);
    }

    big_one.appendChild(set2);
    set2.appendChild(btn1);
    set2.appendChild(btn2);
    btn1.appendChild(btn1_img);
    btn2.appendChild(btn2_img);
    rad.appendChild(img_img1);
    very_big.appendChild(big_one);

    btn1.addEventListener("click", () => {
        alert_div.style.display = "flex";
        remene_div.style.display = "flex";
        add_div.style.display = "none";
    
        name_span.textContent = h3.textContent

        done1.addEventListener("click", ()=>{
            addDeleteFunctionality()
        })
    
        none1.addEventListener("click", () => {
            alert_div.style.display = "none";
        });

        done1.addEventListener("click", ()=>{
            addDeleteFunctionality();
        })
    
        // Save the changes
        document.querySelector(".save").addEventListener("click", () => {
            bigOneElement.querySelector("h3").textContent = document.querySelector(".inp1").value;
            if (document.querySelector(".inp2").value.trim() === "") {
                bigOneElement.querySelector("p").textContent = "Без штрихкода";
            } else {
                bigOneElement.querySelector("p").textContent = document.querySelector(".inp2").value;
            }
            if (document.querySelector(".inp3").value.trim() !== "") {
                let rfidElement = bigOneElement.querySelector(".p-rfid");
                if (!rfidElement) {
                    rfidElement = document.createElement("p");
                    rfidElement.classList.add("p-rfid");
                    bigOneElement.querySelector(".coniform-div").appendChild(rfidElement);
                }
                rfidElement.textContent = document.querySelector(".inp3").value;
            }
        });
    });
    
    

    
    if (big_one_found) {
        big_one_found.insertAdjacentElement('afterend', very_big);
        let currentMarginLeft = parseFloat(big_one_found.style.marginLeft) || 0;

        if (currentDepth + 1 === depthLimit) {
            big_one.style.marginLeft = `${currentMarginLeft + 6}%`;
            rad.remove();
        } else {
            big_one.style.marginLeft = `${currentMarginLeft + 3}%`;
        }
    } else {
        locations_div.appendChild(very_big);
        big_one.style.marginLeft = "0%";
    }

    very_big.style.marginTop = "2px";
    very_big.style.marginBottom = "2px";

    alert_div.style.display = "none";
    Delete();
    addDeleteFunctionality();
});

function Delete() {
    inp1.value = "";
    inp2.value = "";
    inp3.value = "";
    inp4.value = "";
}

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.inputs input[type="text"]');
    const exactMatchCheckbox = document.querySelector('.inputs input[type="checkbox"]');
    const locationsDiv = document.querySelector('.locations-div');

    function collectAllLocations(container) {
        let locations = [];
        container.querySelectorAll('.very-big').forEach(el => {
            locations.push(el);
            locations = locations.concat(collectAllLocations(el));
        });
        return locations;
    }

    function filterLocations() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const exactMatch = exactMatchCheckbox.checked;

        const allLocations = collectAllLocations(locationsDiv);

        if (searchTerm === "") {
            allLocations.forEach(element => {
                element.style.display = '';
            });
        } else {
            let elementsToShow = new Set();
            allLocations.forEach(el => {
                const name = el.querySelector('.big-one h3').textContent.trim().toLowerCase();
                const matches = exactMatch ? name === searchTerm : name.includes(searchTerm);

                if (matches) {
                    elementsToShow.add(el);
                    let parent = el.parentElement;
                    while (parent && parent.classList.contains('very-big')) {
                        elementsToShow.add(parent);
                        parent = parent.parentElement;
                    }
                }
            });

            allLocations.forEach(element => {
                if (elementsToShow.has(element)) {
                    element.style.display = '';
                } else {
                    element.style.display = 'none';
                }
            });
        }
    }

    searchInput.addEventListener('input', filterLocations);
    exactMatchCheckbox.addEventListener('change', filterLocations);
});

let notFound_page = document.querySelector(".not-found");
let header1 = document.querySelector(".header1");
let body = document.querySelector("body");
let rootStyles = getComputedStyle(document.documentElement);
let BgColor = rootStyles.getPropertyValue('--bg-color').trim();
let BgColor_404 = rootStyles.getPropertyValue('--bg-color404').trim();

header1.style.display = "flex";
notFound_page.style.display = "none";

menu_divs.forEach(item => {
    item.addEventListener("click", () => {
        let h3 = item.querySelector("h3");

        if (h3.textContent.trim() === "Локации") {
            header1.style.display = "flex";
            notFound_page.style.display = "none";
            body.style.backgroundColor = BgColor;
        } else {
            header1.style.display = "none";
            notFound_page.style.display = "flex";
            body.style.backgroundColor = BgColor_404;
        }
    });
});
