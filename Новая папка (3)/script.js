// ======================================
// LOADER
// ======================================

const loader =
    document.getElementById("loader");

const bar =
    document.getElementById("loaderBar");

const percent =
    document.getElementById("loaderPercent");

let progress = 0;


const timer = setInterval(() => {

    progress +=
        Math.floor(Math.random() * 8) + 3;


    if(progress >= 100){

        progress = 100;

        clearInterval(timer);

    }


    bar.style.width =
        progress + "%";


    percent.textContent =
        String(progress).padStart(2,"0");

},85);


window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("open");


        setTimeout(() => {

            loader.classList.add("hide");

            document.body.classList.remove(
                "loading"
            );

            initReveal();

        },1250);


        setTimeout(() => {

            loader.remove();

        },2600);

    },2200);

});


// ======================================
// HEADER
// ======================================

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    () => {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 25
        );

    },
    {
        passive:true
    }
);


// ======================================
// MOBILE MENU
// ======================================

const menuBtn =
    document.getElementById("menuBtn");

const mobileNav =
    document.getElementById("mobileNav");


menuBtn.addEventListener(
    "click",
    () => {

        mobileNav.classList.toggle(
            "open"
        );

    }
);


// ======================================
// SCROLL REVEAL
// ======================================

function initReveal(){

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if(entry.isIntersecting){

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold:.12
            }
        );


    document
        .querySelectorAll(
            ".reveal,.reveal-card"
        )
        .forEach(el => {

            observer.observe(el);

        });

}


// ======================================
// CURSOR
// ======================================

const dot =
    document.querySelector(".cursor-dot");

const ring =
    document.querySelector(".cursor-ring");


let mx =
    window.innerWidth / 2;

let my =
    window.innerHeight / 2;

let rx = mx;
let ry = my;


window.addEventListener(
    "mousemove",
    event => {

        mx = event.clientX;

        my = event.clientY;


        dot.style.left =
            mx + "px";

        dot.style.top =
            my + "px";

    }
);


(function cursor(){

    rx +=
        (mx - rx) * .14;

    ry +=
        (my - ry) * .14;


    ring.style.left =
        rx + "px";

    ring.style.top =
        ry + "px";


    requestAnimationFrame(
        cursor
    );

})();


document
    .querySelectorAll(
        "a,button,input,select,textarea,.product"
    )
    .forEach(el => {

        el.addEventListener(
            "mouseenter",
            () => {

                ring.classList.add(
                    "active"
                );

            }
        );


        el.addEventListener(
            "mouseleave",
            () => {

                ring.classList.remove(
                    "active"
                );

            }
        );

    });


// ======================================
// MAGNETIC BUTTONS
// ======================================

document
    .querySelectorAll(".magnetic")
    .forEach(btn => {

        btn.addEventListener(
            "mousemove",
            event => {

                const r =
                    btn.getBoundingClientRect();


                const x =
                    event.clientX -
                    r.left -
                    r.width / 2;


                const y =
                    event.clientY -
                    r.top -
                    r.height / 2;


                btn.style.transform =
                    `
                    translate(
                        ${x * .08}px,
                        ${y * .08}px
                    )
                    `;

            }
        );


        btn.addEventListener(
            "mouseleave",
            () => {

                btn.style.transform = "";

            }
        );

    });


// ======================================
// 3D CARDS
// ======================================

document
    .querySelectorAll(".tilt")
    .forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const r =
                    card.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        r.left
                    ) / r.width;


                const y =
                    (
                        event.clientY -
                        r.top
                    ) / r.height;


                const rotateX =
                    (0.5 - y) * 4.5;


                const rotateY =
                    (x - 0.5) * 6;


                card.style.transform =
                    `
                    perspective(1100px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    `
                    perspective(1100px)
                    rotateX(0)
                    rotateY(0)
                    translateY(0)
                    `;

            }
        );

    });


// ======================================
// LANGUAGE
// ======================================

const language =
    document.getElementById(
        "language"
    );


const translations = {

    ru:{
        dir:"ltr",

        loaderLabel:"ПАРКЕТНЫЙ ПОЛ",

        navCollections:"Коллекции",
        navFloor:"О полу",
        navAdvantages:"Преимущества",
        navOrder:"Заказ",

        orderBtn:"Оставить заявку",

        eyebrow:
            "МАРВЕЛПОЛ / ПАРКЕТНЫЙ ПОЛ",

        hero1:
            "Пол, который",

        hero2:
            "сразу видно.",

        heroText:
            "Паркетный пол с выразительной геометрией, натуральной фактурой и глубокими оттенками дерева.",

        look:
            "Смотреть пол",

        stat1:
            "Натуральная фактура",

        stat2:
            "Премиальная геометрия",

        stat3:
            "Подбор под площадь",

        bottomText:
            "ДЕРЕВЯННЫЙ ПОЛ / ПАРКЕТ",

        floorLabel:
            "ПОЛ",

        statement1:
            "Не интерьер вокруг пола.",

        statement2:
            "Сам пол — главный акцент.",

        statementText:
            "Марвелпол показывает паркет как главный материал пола: рисунок, направление планок, оттенок, масштаб и фактуру. В центре внимания только дерево и поверхность пола.",

        collectionsLabel:
            "КОЛЛЕКЦИИ ПОЛА",

        collections1:
            "Три рисунка.",

        collections2:
            "Один сильный материал.",

        collectionsText:
            "Выберите рисунок паркета и оставьте заявку на расчёт.",

        parquetFloor:
            "ПАРКЕТНЫЙ ПОЛ",

        textureLabel:
            "ФАКТУРА ПОЛА",

        texture1:
            "Рисунок планок.",

        texture2:
            "Глубина дерева.",

        textureText:
            "Соединение планок, естественные волокна, мягкие переходы оттенков и отражение света — именно эти детали делают паркетный пол выразительным.",

        geo:
            "Геометрия",

        geoText:
            "ёлка / модульный рисунок",

        texture:
            "Фактура",

        textureSpec:
            "естественный рисунок дерева",

        tone:
            "Оттенок",

        toneText:
            "от светлого дуба до глубокого ореха",

        whyLabel:
            "ПОЧЕМУ МАРВЕЛПОЛ",

        why1:
            "Внимание",

        why2:
            "к самому полу.",

        adv1Title:
            "Выразительный рисунок",

        adv1Text:
            "Паркет становится самостоятельным визуальным элементом.",

        adv2Title:
            "Глубокая фактура",

        adv2Text:
            "Каждая планка работает на общий рисунок деревянного пола.",

        adv3Title:
            "Профессиональный подбор",

        adv3Text:
            "Можно указать площадь и выбранную коллекцию для расчёта.",

        processLabel:
            "КАК ЗАКАЗАТЬ",

        process1:
            "Просто.",

        process2:
            "По делу.",

        step1:
            "Выбираете пол",

        step1Text:
            "Нажимаете «Заказать» на понравившейся коллекции.",

        step2:
            "Заполняете заявку",

        step2Text:
            "Имя, телефон, площадь и комментарий.",

        step3:
            "Связываемся",

        step3Text:
            "Заявка открывает WhatsApp с готовым сообщением.",

        orderLabel:
            "ЗАКАЗ",

        order1:
            "Выберите",

        order2:
            "свой паркетный пол.",

        consult:
            "Телефон для консультации:",

        footer:
            "Паркетный пол · Ташкент",

        modalTitle:
            "Заказать паркетный пол",

        modalText:
            "Заполните данные. После отправки откроется WhatsApp с готовой заявкой.",

        name:
            "Имя",

        phoneLabel:
            "Телефон",

        collectionLabel:
            "Коллекция",

        notSelected:
            "Не определился",

        areaLabel:
            "Площадь пола",

        commentLabel:
            "Комментарий",

        send:
            "Отправить заявку в WhatsApp"
    },


    uz:{
        dir:"ltr",

        loaderLabel:
            "PARKET POL",

        navCollections:
            "Kolleksiyalar",

        navFloor:
            "Pol haqida",

        navAdvantages:
            "Afzalliklar",

        navOrder:
            "Buyurtma",

        orderBtn:
            "Ariza qoldirish",

        eyebrow:
            "MARVELPOL / PARKET POL",

        hero1:
            "Pol, uni",

        hero2:
            "darhol ko‘rasiz.",

        heroText:
            "Aniq geometriya, tabiiy tekstura va chuqur yog‘och ranglariga ega parket pol.",

        look:
            "Polni ko‘rish",

        stat1:
            "Tabiiy tekstura",

        stat2:
            "Premium geometriya",

        stat3:
            "Maydonga mos tanlov",

        bottomText:
            "YOG‘OCH POL / PARKET",

        floorLabel:
            "POL",

        statement1:
            "Interyer pol atrofida emas.",

        statement2:
            "Asosiy urg‘u — polning o‘zida.",

        statementText:
            "Marvelpol parketni aynan pol materiali sifatida ko‘rsatadi: naqsh, plankalar yo‘nalishi, rang, o‘lcham va tekstura.",

        collectionsLabel:
            "POL KOLLEKSIYALARI",

        collections1:
            "Uch xil naqsh.",

        collections2:
            "Bitta kuchli material.",

        collectionsText:
            "Parket naqshini tanlang va hisob-kitob uchun ariza qoldiring.",

        parquetFloor:
            "PARKET POL",

        textureLabel:
            "POL TEKSTURASI",

        texture1:
            "Plankalar naqshi.",

        texture2:
            "Yog‘och chuqurligi.",

        textureText:
            "Plankalar tutashuvi, yog‘och tolalari, rang o‘tishlari va yorug‘lik bilan o‘yin parket polga xarakter beradi.",

        geo:
            "Geometriya",

        geoText:
            "yolka / modul naqsh",

        texture:
            "Tekstura",

        textureSpec:
            "yog‘ochning tabiiy naqshi",

        tone:
            "Rang",

        toneText:
            "och eman rangidan chuqur yong‘oqqacha",

        whyLabel:
            "NEGA MARVELPOL",

        why1:
            "E’tibor",

        why2:
            "polning o‘ziga.",

        adv1Title:
            "Ifodali naqsh",

        adv1Text:
            "Parket mustaqil vizual elementga aylanadi.",

        adv2Title:
            "Chuqur tekstura",

        adv2Text:
            "Har bir planka umumiy yog‘och pol naqshini yaratadi.",

        adv3Title:
            "Professional tanlov",

        adv3Text:
            "Maydon va kolleksiyani ko‘rsatib hisob-kitob olish mumkin.",

        processLabel:
            "QANDAY BUYURTMA QILISH",

        process1:
            "Oddiy.",

        process2:
            "Aniq.",

        step1:
            "Polni tanlaysiz",

        step1Text:
            "Yoqtirgan kolleksiyangizdagi «Buyurtma» tugmasini bosing.",

        step2:
            "Arizani to‘ldirasiz",

        step2Text:
            "Ism, telefon, maydon va izoh.",

        step3:
            "Bog‘lanamiz",

        step3Text:
            "Ariza tayyor xabar bilan WhatsApp'ni ochadi.",

        orderLabel:
            "BUYURTMA",

        order1:
            "O‘zingizga",

        order2:
            "mos parket polni tanlang.",

        consult:
            "Maslahat uchun telefon:",

        footer:
            "Parket pol · Toshkent",

        modalTitle:
            "Parket polga buyurtma berish",

        modalText:
            "Ma’lumotlarni to‘ldiring. Yuborgandan so‘ng WhatsApp ochiladi.",

        name:
            "Ism",

        phoneLabel:
            "Telefon",

        collectionLabel:
            "Kolleksiya",

        notSelected:
            "Tanlanmagan",

        areaLabel:
            "Pol maydoni",

        commentLabel:
            "Izoh",

        send:
            "WhatsApp orqali ariza yuborish"
    },


    en:{
        dir:"ltr",

        loaderLabel:
            "PARQUET FLOOR",

        navCollections:
            "Collections",

        navFloor:
            "The floor",

        navAdvantages:
            "Advantages",

        navOrder:
            "Order",

        orderBtn:
            "Request a quote",

        eyebrow:
            "MARVELPOL / PARQUET FLOOR",

        hero1:
            "A floor you",

        hero2:
            "notice immediately.",

        heroText:
            "Parquet flooring with precise geometry, natural texture and deep wood tones.",

        look:
            "Explore flooring",

        stat1:
            "Natural texture",

        stat2:
            "Premium geometry",

        stat3:
            "Measured to your area",

        bottomText:
            "WOOD FLOOR / PARQUET",

        floorLabel:
            "FLOOR",

        statement1:
            "Not the interior around the floor.",

        statement2:
            "The floor itself is the accent.",

        statementText:
            "Marvelpol presents parquet as the main flooring material: pattern, plank direction, tone, scale and texture.",

        collectionsLabel:
            "FLOOR COLLECTIONS",

        collections1:
            "Three patterns.",

        collections2:
            "One strong material.",

        collectionsText:
            "Choose a parquet pattern and request a calculation.",

        parquetFloor:
            "PARQUET FLOOR",

        textureLabel:
            "FLOOR TEXTURE",

        texture1:
            "Plank pattern.",

        texture2:
            "Depth of wood.",

        textureText:
            "Plank joints, natural grain, subtle tone shifts and light reflection are what make parquet flooring expressive.",

        geo:
            "Geometry",

        geoText:
            "herringbone / modular pattern",

        texture:
            "Texture",

        textureSpec:
            "natural wood grain",

        tone:
            "Tone",

        toneText:
            "from light oak to deep walnut",

        whyLabel:
            "WHY MARVELPOL",

        why1:
            "Attention",

        why2:
            "to the floor itself.",

        adv1Title:
            "Expressive pattern",

        adv1Text:
            "The parquet becomes a visual element in its own right.",

        adv2Title:
            "Deep texture",

        adv2Text:
            "Every plank contributes to the overall wood floor pattern.",

        adv3Title:
            "Professional selection",

        adv3Text:
            "Add your area and chosen collection to get a calculation.",

        processLabel:
            "HOW TO ORDER",

        process1:
            "Simple.",

        process2:
            "Precise.",

        step1:
            "Choose your floor",

        step1Text:
            "Press “Order” on the collection you like.",

        step2:
            "Fill the request",

        step2Text:
            "Name, phone, area and comment.",

        step3:
            "We contact you",

        step3Text:
            "The request opens WhatsApp with a ready message.",

        orderLabel:
            "ORDER",

        order1:
            "Choose",

        order2:
            "your parquet floor.",

        consult:
            "Consultation phone:",

        footer:
            "Parquet floor · Tashkent",

        modalTitle:
            "Order parquet flooring",

        modalText:
            "Fill in your details. WhatsApp will open with your ready request.",

        name:
            "Name",

        phoneLabel:
            "Phone",

        collectionLabel:
            "Collection",

        notSelected:
            "Not selected",

        areaLabel:
            "Floor area",

        commentLabel:
            "Comment",

        send:
            "Send request via WhatsApp"
    },


    fr:{
        dir:"ltr",

        loaderLabel:
            "PARQUET",

        navCollections:
            "Collections",

        navFloor:
            "Le sol",

        navAdvantages:
            "Avantages",

        navOrder:
            "Commander",

        orderBtn:
            "Demander un devis",

        eyebrow:
            "MARVELPOL / PARQUET",

        hero1:
            "Un sol que l’on",

        hero2:
            "remarque tout de suite.",

        heroText:
            "Parquet aux géométries précises, à la texture naturelle et aux teintes de bois profondes.",

        look:
            "Voir les parquets",

        stat1:
            "Texture naturelle",

        stat2:
            "Géométrie premium",

        stat3:
            "Adapté à votre surface",

        bottomText:
            "SOL EN BOIS / PARQUET",

        floorLabel:
            "SOL",

        statement1:
            "Pas un intérieur autour du sol.",

        statement2:
            "Le sol lui-même devient l’accent.",

        statementText:
            "Marvelpol présente le parquet comme matériau principal : motif, direction des lames, teinte, échelle et texture.",

        collectionsLabel:
            "COLLECTIONS DE SOL",

        collections1:
            "Trois motifs.",

        collections2:
            "Un matériau fort.",

        collectionsText:
            "Choisissez un motif de parquet et demandez un calcul.",

        parquetFloor:
            "PARQUET",

        textureLabel:
            "TEXTURE DU SOL",

        texture1:
            "Motif des lames.",

        texture2:
            "Profondeur du bois.",

        textureText:
            "Assemblage des lames, veinage naturel, transitions de teintes et lumière rendent le parquet expressif.",

        geo:
            "Géométrie",

        geoText:
            "chevrons / motif modulaire",

        texture:
            "Texture",

        textureSpec:
            "grain naturel du bois",

        tone:
            "Teinte",

        toneText:
            "du chêne clair au noyer profond",

        whyLabel:
            "POURQUOI MARVELPOL",

        why1:
            "Attention",

        why2:
            "au sol lui-même.",

        adv1Title:
            "Motif expressif",

        adv1Text:
            "Le parquet devient un élément visuel à part entière.",

        adv2Title:
            "Texture profonde",

        adv2Text:
            "Chaque lame participe au motif général du sol.",

        adv3Title:
            "Sélection professionnelle",

        adv3Text:
            "Indiquez la surface et la collection pour obtenir un calcul.",

        processLabel:
            "COMMENT COMMANDER",

        process1:
            "Simple.",

        process2:
            "Précis.",

        step1:
            "Choisissez le sol",

        step1Text:
            "Cliquez sur « Commander » pour la collection choisie.",

        step2:
            "Remplissez la demande",

        step2Text:
            "Nom, téléphone, surface et commentaire.",

        step3:
            "Nous vous contactons",

        step3Text:
            "La demande ouvre WhatsApp avec un message prêt.",

        orderLabel:
            "COMMANDE",

        order1:
            "Choisissez",

        order2:
            "votre parquet.",

        consult:
            "Téléphone de consultation :",

        footer:
            "Parquet · Tachkent",

        modalTitle:
            "Commander du parquet",

        modalText:
            "Remplissez vos informations. WhatsApp s’ouvrira avec votre demande.",

        name:
            "Nom",

        phoneLabel:
            "Téléphone",

        collectionLabel:
            "Collection",

        notSelected:
            "Non sélectionné",

        areaLabel:
            "Surface du sol",

        commentLabel:
            "Commentaire",

        send:
            "Envoyer la demande sur WhatsApp"
    },


    ar:{
        dir:"rtl",

        loaderLabel:
            "أرضيات باركيه",

        navCollections:
            "المجموعات",

        navFloor:
            "الأرضية",

        navAdvantages:
            "المزايا",

        navOrder:
            "الطلب",

        orderBtn:
            "طلب عرض",

        eyebrow:
            "مارفلبول / أرضيات باركيه",

        hero1:
            "أرضية",

        hero2:
            "تلفت النظر فوراً.",

        heroText:
            "أرضيات باركيه بتفاصيل هندسية دقيقة وملمس خشبي طبيعي ودرجات أنيقة.",

        look:
            "استعرض الأرضيات",

        stat1:
            "ملمس طبيعي",

        stat2:
            "هندسة فاخرة",

        stat3:
            "اختيار حسب المساحة",

        bottomText:
            "أرضية خشبية / باركيه",

        floorLabel:
            "الأرضية",

        statement1:
            "ليست الغرفة حول الأرضية.",

        statement2:
            "الأرضية نفسها هي العنصر الرئيسي.",

        statementText:
            "مارفلبول يقدّم الباركيه كعنصر أرضية بحد ذاته: النقشة والاتجاه واللون والمقاس والملمس.",

        collectionsLabel:
            "مجموعات الأرضيات",

        collections1:
            "ثلاث نقوش.",

        collections2:
            "مادة واحدة قوية.",

        collectionsText:
            "اختر نقشة الباركيه وأرسل طلباً للحساب.",

        parquetFloor:
            "أرضيات باركيه",

        textureLabel:
            "ملمس الأرضية",

        texture1:
            "نقشة الألواح.",

        texture2:
            "عمق الخشب.",

        textureText:
            "وصلات الألواح وعروق الخشب وتدرجات اللون وانعكاس الضوء هي ما يمنح أرضية الباركيه شخصيتها.",

        geo:
            "الهندسة",

        geoText:
            "متعرج / نقش معياري",

        texture:
            "الملمس",

        textureSpec:
            "عروق الخشب الطبيعية",

        tone:
            "اللون",

        toneText:
            "من البلوط الفاتح إلى الجوز الداكن",

        whyLabel:
            "لماذا مارفلبول",

        why1:
            "الاهتمام",

        why2:
            "بالأرضية نفسها.",

        adv1Title:
            "نقشة مميزة",

        adv1Text:
            "تصبح أرضية الباركيه عنصراً بصرياً مستقلاً.",

        adv2Title:
            "ملمس عميق",

        adv2Text:
            "كل لوح يساهم في الشكل العام للأرضية الخشبية.",

        adv3Title:
            "اختيار احترافي",

        adv3Text:
            "أدخل المساحة والمجموعة المطلوبة للحصول على الحساب.",

        processLabel:
            "كيفية الطلب",

        process1:
            "بسيط.",

        process2:
            "دقيق.",

        step1:
            "اختر الأرضية",

        step1Text:
            "اضغط على «اطلب الآن» في المجموعة التي تعجبك.",

        step2:
            "املأ الطلب",

        step2Text:
            "الاسم والهاتف والمساحة والملاحظة.",

        step3:
            "نتواصل معك",

        step3Text:
            "يفتح الطلب واتساب مع رسالة جاهزة.",

        orderLabel:
            "الطلب",

        order1:
            "اختر",

        order2:
            "أرضية الباركيه الخاصة بك.",

        consult:
            "هاتف الاستشارة:",

        footer:
            "أرضيات باركيه · طشقند",

        modalTitle:
            "طلب أرضيات باركيه",

        modalText:
            "املأ بياناتك، وبعد الإرسال سيفتح واتساب بطلب جاهز.",

        name:
            "الاسم",

        phoneLabel:
            "الهاتف",

        collectionLabel:
            "المجموعة",

        notSelected:
            "غير محدد",

        areaLabel:
            "مساحة الأرضية",

        commentLabel:
            "ملاحظة",

        send:
            "إرسال الطلب عبر واتساب"
    }

};


function setLanguage(value){

    const t =
        translations[value] ||
        translations.ru;


    document.documentElement.lang =
        value;


    document.documentElement.dir =
        t.dir;


    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(element => {

            const key =
                element.dataset.i18n;


            if(t[key] != null){

                element.textContent =
                    t[key];

            }

        });


    localStorage.setItem(
        "marvelLang",
        value
    );

}


language.value =
    localStorage.getItem(
        "marvelLang"
    ) || "ru";


setLanguage(
    language.value
);


language.addEventListener(
    "change",
    event => {

        setLanguage(
            event.target.value
        );

    }
);


// ======================================
// THEME
// ======================================

const theme =
    document.getElementById(
        "theme"
    );


if(
    localStorage.getItem(
        "marvelTheme"
    ) === "light"
){

    document.body.classList.add(
        "light"
    );

    theme.textContent =
        "☾";

}


theme.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        const light =
            document.body.classList.contains(
                "light"
            );


        theme.textContent =
            light
                ? "☾"
                : "☼";


        localStorage.setItem(
            "marvelTheme",
            light
                ? "light"
                : "dark"
        );

    }
);


// ======================================
// MODAL
// ======================================

const modal =
    document.getElementById(
        "modal"
    );


const collection =
    document.getElementById(
        "collection"
    );


function openModal(
    product = "Не определился"
){

    collection.value =
        product;


    modal.classList.add(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


function closeModal(){

    modal.classList.remove(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


document
    .querySelectorAll(
        ".order-open"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const card =
                    button.closest(
                        ".product"
                    );


                openModal(
                    card?.dataset.product ||
                    "Не определился"
                );

            }
        );

    });


document
    .getElementById(
        "modalClose"
    )
    .addEventListener(
        "click",
        closeModal
    );


modal.addEventListener(
    "click",
    event => {

        if(
            event.target.hasAttribute(
                "data-close"
            )
        ){

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if(event.key === "Escape"){

            closeModal();

        }

    }
);


// ======================================
// WHATSAPP ORDER
// ======================================

document
    .getElementById(
        "orderForm"
    )
    .addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const form =
                new FormData(
                    event.currentTarget
                );


            const langNow =
                language.value;


            const textStart = {

                ru:
                    "Здравствуйте! Хочу заказать паркетный пол Марвелпол.",

                uz:
                    "Assalomu alaykum! Marvelpol parket poliga buyurtma bermoqchiman.",

                en:
                    "Hello! I would like to order Marvelpol parquet flooring.",

                fr:
                    "Bonjour ! Je souhaite commander un parquet Marvelpol.",

                ar:
                    "مرحباً! أريد طلب أرضيات باركيه من مارفلبول."

            }[langNow];


            const labels = {

                ru:[
                    "Имя",
                    "Телефон",
                    "Коллекция",
                    "Площадь пола",
                    "Комментарий"
                ],

                uz:[
                    "Ism",
                    "Telefon",
                    "Kolleksiya",
                    "Pol maydoni",
                    "Izoh"
                ],

                en:[
                    "Name",
                    "Phone",
                    "Collection",
                    "Floor area",
                    "Comment"
                ],

                fr:[
                    "Nom",
                    "Téléphone",
                    "Collection",
                    "Surface",
                    "Commentaire"
                ],

                ar:[
                    "الاسم",
                    "الهاتف",
                    "المجموعة",
                    "المساحة",
                    "الملاحظة"
                ]

            }[langNow];


            const values = [

                form.get("name"),

                form.get("phone"),

                form.get("collection"),

                form.get("area") ||
                    "-",

                form.get("comment") ||
                    "-"

            ];


            const message =
                textStart +
                "\n\n" +
                values
                    .map(
                        (value,index) =>
                            labels[index] +
                            ": " +
                            value
                    )
                    .join("\n");


            const url =
                "https://wa.me/998909999935?text=" +
                encodeURIComponent(
                    message
                );


            window.open(
                url,
                "_blank"
            );


            closeModal();

        }
    );


// ======================================
// SMOOTH ANCHORS
// ======================================

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            event => {

                const target =
                    document.querySelector(
                        anchor.getAttribute(
                            "href"
                        )
                    );


                if(!target){
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior:"smooth"
                });


                mobileNav.classList.remove(
                    "open"
                );

            }
        );

    });