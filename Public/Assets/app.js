/* =========================================================
   Currículo — Luis Francisco Bissoli do Amparo
   i18n (pt / en / zh) + tema claro-escuro + exportação em PDF

   ARQUITETURA DO i18n
   O português é o idioma base e vive **apenas no HTML**, já
   renderizado. Este script o colhe do DOM no boot, então não
   existe cópia duplicada do texto em português aqui — uma só
   fonte de verdade por idioma. Consequência importante: sem
   JavaScript a página continua completa em português.
   ========================================================= */
(function () {
    "use strict";

    var BASE_LANG = "pt";

    var META = {
        pt: {
            htmlLang: "pt-BR",
            fileName: "Curriculo-Luis-Francisco-Bissoli-do-Amparo"
        },
        en: {
            htmlLang: "en",
            docTitle: "Luis Francisco Bissoli do Amparo — Resume",
            fileName: "Resume-Luis-Francisco-Bissoli-do-Amparo"
        },
        zh: {
            htmlLang: "zh-Hans",
            docTitle: "Luis Francisco Bissoli do Amparo — 简历",
            fileName: "Jianli-Luis-Francisco-Bissoli-do-Amparo"
        }
    };

    var TRANSLATIONS = {
        en: {
            "ui.pdf": "Download PDF",
            "ui.theme": "Toggle light and dark theme",

            "header.role": "Computer Engineering · Network Infrastructure and Information Security",
            "header.location": "Vitória, Espírito Santo — Brazil",

            "about.title": "Profile",
            "about.p1": "Computer Engineering student with four years in technology, from electronics maintenance to deploying and monitoring network infrastructure. I am steering my career toward Information Security, combining a solid foundation in networking and Linux systems with continuous study of defence and penetration testing.",
            "about.p2": "I have hands-on experience configuring Mikrotik equipment, administering servers, supporting Microsoft 365 environments and automating tasks in Bash. I program in multiple programming languages, which lets me reason about security from firmware up to the application layer.",

            "exp.title": "Professional Experience",

            "exp.thesis": "From the circuit board to the application: four years climbing the stack, one layer at a time.",
            "exp.fassLayer": "Application and network",
            "exp.tceesLayer": "Systems and support",
            "exp.sinales2Layer": "Network and servers",
            "exp.sinales1Layer": "Firmware and PCB",
            "exp.fassRole": "Software Development and API Integration",
            "exp.fassPeriod": "Jun 2025 — present",
            "exp.fassB1": "Development and maintenance of software services integrating multiple APIs, using spec-driven development supported by AI tooling.",
            "exp.fassB2": "Improved network speed and security through load balancing, log monitoring and IPsec.",
            "exp.fassB3": "Reduced spending on management and data-analysis services, and improved network speed.",

            "exp.tceesRole": "Information Technology Intern",
            "exp.tceesPeriod": "2024 — Feb 2025",
            "exp.tceesB1": "Technical support for the institution's internal systems and its Microsoft 365 environment.",
            "exp.tceesB2": "Preventive and corrective maintenance of the court's technology equipment.",

            "exp.sinales2Role": "Electrotechnical Assistant",
            "exp.sinales2Period": "2023 — 2024",
            "exp.sinales2B1": "Deployed and configured networks using Mikrotik equipment in client environments.",
            "exp.sinales2B2": "Built and rolled out server monitoring systems, working directly with clients and suppliers.",

            "exp.sinales1Role": "Electronics Intern",
            "exp.sinales1Period": "2022 — 2023",
            "exp.sinales1B1": "Production and maintenance of electronic devices on printed circuit boards (PCB).",

            "proj.title": "Projects",
            "proj.ctmc": "Didactic neutron chain-reaction simulator based on CTMC/Gillespie: a C computation engine exposed through a FastAPI service, with a Flask presentation site.",
            "proj.shell": "Collection of Shell automation scripts for Linux administration and routine tasks.",
            "proj.uart": "UART serial communication between two Arduino boards, built for the Microprocessors and Microcontrollers course.",
            "proj.coffeeTag1": "Neural Networks",
            "proj.coffeeTag2": "Computer Vision",
            "proj.coffee": "Coffee leaf disease classification with neural networks, covering image preprocessing, selectable architectures and confusion-matrix evaluation.",

            "skills.title": "Skills",
            "skills.net": "Networking and Infrastructure",
            "skills.sec": "Information Security",
            "skills.sys": "Systems",
            "skills.dev": "Development",
            "skills.data": "Data",
            "skills.tagRouting": "Routing and VLANs",
            "skills.tagMonitor": "Server monitoring",
            "skills.tagHardening": "System hardening",
            "skills.tagNetsec": "Network security",
            "skills.tagPentest": "Lab penetration testing",

            "edu.title": "Education",
            "edu.bsc": "B.Sc. in Computer Engineering",
            "edu.bscWhen": "2021 — Dec 2026 (expected)",
            "edu.drone": "Drone Topographic Surveying",
            "edu.droneOrg": "CREA",
            "edu.mysql": "MySQL Databases",
            "edu.hs": "High School Diploma",

            "lang.title": "Languages",
            "lang.pt": "Portuguese",
            "lang.ptLevel": "Native",
            "lang.en": "English",
            "lang.enLevel": "B2 — Fisk",

            "practice.title": "Ongoing Practice",

            "foot.source": "Source code of this page",
            "foot.updated": "Last updated",
            "foot.date": "July 2026"
        },

        zh: {
            "ui.pdf": "下载 PDF",
            "ui.theme": "切换浅色与深色主题",

            "header.role": "计算机工程 · 网络基础设施与信息安全",
            "header.location": "巴西 圣埃斯皮里图州 维多利亚市",

            "about.title": "个人简介",
            "about.p1": "计算机工程专业学生，拥有四年技术工作经验，涵盖电子设备维护到网络基础设施的部署与监控。目前将职业方向聚焦于信息安全，把扎实的网络与 Linux 系统基础同持续的防御及渗透测试学习相结合。",
            "about.p2": "具备配置 Mikrotik 设备、管理服务器、支持 Microsoft 365 环境以及使用 Bash 实现自动化的实操经验。熟练使用多种编程语言，因此能够从固件层到应用层理解安全问题。",

            "exp.title": "工作经历",

            "exp.thesis": "从电路板到应用层：四年时间，一层一层向上走。",
            "exp.fassLayer": "应用与网络",
            "exp.tceesLayer": "系统与支持",
            "exp.sinales2Layer": "网络与服务器",
            "exp.sinales1Layer": "固件与电路板",
            "exp.fassRole": "软件开发与 API 集成",
            "exp.fassPeriod": "2025年6月 — 至今",
            "exp.fassB1": "开发与维护集成多个 API 的软件服务，采用规格驱动开发（spec-driven development）并借助 AI 工具链。",
            "exp.fassB2": "通过负载均衡、日志监控与 IPsec 提升网络速度与安全性。",
            "exp.fassB3": "降低管理与数据分析服务的成本，并提升网络速度。",

            "exp.tceesRole": "信息技术实习生",
            "exp.tceesPeriod": "2024 — 2025年2月",
            "exp.tceesB1": "为机构内部系统及 Microsoft 365 环境提供技术支持。",
            "exp.tceesB2": "负责审计法院技术设备的预防性与修复性维护。",

            "exp.sinales2Role": "电气技术助理",
            "exp.sinales2Period": "2023 — 2024",
            "exp.sinales2B1": "在客户现场使用 Mikrotik 设备部署与配置网络。",
            "exp.sinales2B2": "开发并上线服务器监控系统，直接与客户及供应商沟通协作。",

            "exp.sinales1Role": "电子技术实习生",
            "exp.sinales1Period": "2022 — 2023",
            "exp.sinales1B1": "负责印刷电路板（PCB）电子设备的生产与维护。",

            "proj.title": "项目",
            "proj.ctmc": "基于 CTMC/Gillespie 算法的中子链式反应教学模拟器：C 语言计算引擎通过 FastAPI 接口对外提供服务，并配有 Flask 展示站点。",
            "proj.shell": "用于 Linux 系统管理与日常任务的 Shell 自动化脚本集合。",
            "proj.uart": "两块 Arduino 开发板之间的 UART 串行通信，为《微处理器与微控制器》课程开发。",
            "proj.coffeeTag1": "神经网络",
            "proj.coffeeTag2": "计算机视觉",
            "proj.coffee": "使用神经网络对咖啡叶片病害进行分类，涵盖图像预处理、可选网络架构与混淆矩阵评估。",

            "skills.title": "专业技能",
            "skills.net": "网络与基础设施",
            "skills.sec": "信息安全",
            "skills.sys": "系统",
            "skills.dev": "开发",
            "skills.data": "数据库",
            "skills.tagRouting": "路由与 VLAN",
            "skills.tagMonitor": "服务器监控",
            "skills.tagHardening": "系统加固",
            "skills.tagNetsec": "网络安全",
            "skills.tagPentest": "实验环境渗透测试",

            "edu.title": "教育背景",
            "edu.bsc": "计算机工程学士",
            "edu.bscWhen": "2021 — 2026年12月（预计）",
            "edu.drone": "无人机地形测绘",
            "edu.droneOrg": "CREA（巴西工程与农学委员会）",
            "edu.mysql": "MySQL 数据库",
            "edu.hs": "高中毕业",

            "lang.title": "语言能力",
            "lang.pt": "葡萄牙语",
            "lang.ptLevel": "母语",
            "lang.en": "英语",
            "lang.enLevel": "B2 — Fisk",

            "practice.title": "持续实践",

            "foot.source": "本页面的源代码",
            "foot.updated": "更新于",
            "foot.date": "2026年7月"
        }
    };

    var STORE_LANG = "cv-lang";
    var STORE_THEME = "cv-theme";
    var root = document.documentElement;

    var textNodes = document.querySelectorAll("[data-i18n]");
    var ariaNodes = document.querySelectorAll("[data-i18n-aria]");

    /* ---------- Colheita do idioma base ----------
       O português publicado no HTML vira o dicionário `pt`. Nada
       de texto em português duplicado neste arquivo. */
    (function harvestBaseLang() {
        var base = {};

        textNodes.forEach(function (el) {
            base[el.getAttribute("data-i18n")] = el.textContent.replace(/\s+/g, " ").trim();
        });

        ariaNodes.forEach(function (el) {
            base[el.getAttribute("data-i18n-aria")] = el.getAttribute("aria-label") || "";
        });

        TRANSLATIONS[BASE_LANG] = base;
        META[BASE_LANG].docTitle = document.title;
    })();

    /* localStorage pode lançar em modo restrito / iframe sandbox */
    function store(key, value) {
        try {
            if (value === undefined) return localStorage.getItem(key);
            localStorage.setItem(key, value);
        } catch (e) { /* ignora */ }
        return null;
    }

    /* ---------------- Idioma ---------------- */
    var currentLang = BASE_LANG;

    function pickInitialLang() {
        var fromUrl = new URLSearchParams(location.search).get("lang");
        if (fromUrl && TRANSLATIONS[fromUrl]) return fromUrl;

        var saved = store(STORE_LANG);
        if (saved && TRANSLATIONS[saved]) return saved;

        var tags = navigator.languages || [navigator.language || BASE_LANG];
        for (var i = 0; i < tags.length; i++) {
            var tag = String(tags[i]).toLowerCase();
            if (tag.indexOf("zh") === 0) return "zh";
            if (tag.indexOf("pt") === 0) return "pt";
            if (tag.indexOf("en") === 0) return "en";
        }
        return BASE_LANG;
    }

    function applyLang(lang) {
        var dict = TRANSLATIONS[lang];
        var meta = META[lang];
        if (!dict || !meta) return;
        currentLang = lang;

        root.lang = meta.htmlLang;
        document.title = meta.docTitle;

        textNodes.forEach(function (el) {
            var value = dict[el.getAttribute("data-i18n")];
            if (typeof value === "string") el.textContent = value;
        });

        ariaNodes.forEach(function (el) {
            var value = dict[el.getAttribute("data-i18n-aria")];
            if (typeof value === "string" && value) {
                el.setAttribute("aria-label", value);
                el.title = value;
            }
        });

        document.querySelectorAll("[data-lang-set]").forEach(function (btn) {
            btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang-set") === lang));
        });

        store(STORE_LANG, lang);

        /* Sem isto, quem trocasse de idioma e encaminhasse o link
           enviaria a versão errada: o parâmetro era lido, nunca escrito. */
        try {
            var url = new URL(location.href);
            url.searchParams.set("lang", lang);
            history.replaceState(null, "", url);
        } catch (e) { /* ignora */ }
    }

    document.querySelectorAll("[data-lang-set]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            applyLang(btn.getAttribute("data-lang-set"));
        });
    });

    /* ---------------- Tema ---------------- */
    var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);
        /* Botão de estado binário: sem aria-pressed, um leitor de tela
           não conseguia saber em que tema a página estava. */
        var toggle = document.getElementById("theme-toggle");
        if (toggle) toggle.setAttribute("aria-pressed", String(theme === "dark"));
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute("content", theme === "dark" ? "#0a0e12" : "#eef0f2");
    }

    function pickInitialTheme() {
        var fromUrl = new URLSearchParams(location.search).get("theme");
        if (fromUrl === "dark" || fromUrl === "light") return fromUrl;
        return store(STORE_THEME) || (systemDark.matches ? "dark" : "light");
    }

    applyTheme(pickInitialTheme());

    systemDark.addEventListener("change", function (event) {
        if (!store(STORE_THEME)) applyTheme(event.matches ? "dark" : "light");
    });

    var themeButton = document.getElementById("theme-toggle");
    if (themeButton) {
        themeButton.addEventListener("click", function () {
            var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            applyTheme(next);
            store(STORE_THEME, next);
        });
    }

    /* ---------------- PDF ----------------
       O nome sugerido do arquivo vem do <title>, então trocamos
       o título para o do idioma ativo, imprimimos, e restauramos. */
    var pdfButton = document.getElementById("pdf-button");
    if (pdfButton) {
        pdfButton.addEventListener("click", function () {
            var previous = document.title;
            document.title = META[currentLang].fileName;

            function restore() {
                document.title = previous;
                window.removeEventListener("afterprint", restore);
            }
            window.addEventListener("afterprint", restore);

            window.print();
            /* Rede de segurança: navegadores sem afterprint confiável */
            setTimeout(restore, 3000);
        });
    }

    /* ---------------- Foto de perfil ----------------
       Se Assets/img/profile.jpg não existir, ficam as iniciais. */
    var photo = document.getElementById("profile-photo");
    if (photo) {
        var moldura = photo.closest(".head__photo");

        function marcarFoto(ok) {
            photo.hidden = !ok;
            if (moldura) moldura.setAttribute("data-photo", ok ? "ok" : "fallback");
        }

        photo.addEventListener("error", function () { marcarFoto(false); });
        photo.addEventListener("load", function () { marcarFoto(true); });
        if (photo.complete) marcarFoto(photo.naturalWidth > 0);
    }

    /* ---------------- Início ---------------- */
    applyLang(pickInitialLang());
})();
