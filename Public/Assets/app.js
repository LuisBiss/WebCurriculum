/* =========================================================
   Currículo — Luis Francisco Bissoli do Amparo
   i18n (pt / en / zh) + tema claro-escuro + exportação em PDF
   ========================================================= */
(function () {
    "use strict";

    /* ---------------------------------------------------------
       ATENÇÃO: as chaves marcadas com "TODO" abaixo precisam
       dos dados reais do cargo na Fass Advogados e do ano da
       certificação de drones.
       --------------------------------------------------------- */

    var I18N = {
        pt: {
            htmlLang: "pt-BR",
            docTitle: "Luis Francisco Bissoli do Amparo — Currículo",
            fileName: "Curriculo-Luis-Francisco-Bissoli-do-Amparo",

            "ui.pdf": "Baixar PDF",
            "ui.theme": "Alternar entre tema claro e escuro",

            "header.role": "Engenharia da Computação · Infraestrutura de Redes e Segurança da Informação",
            "header.location": "Vitória, Espírito Santo — Brasil",

            "about.title": "Perfil",
            "about.p1": "Estudante de Engenharia da Computação com quatro anos de atuação em tecnologia, da manutenção de eletrônicos à implementação e ao monitoramento de infraestrutura de redes. Direciono minha carreira para a Segurança da Informação, unindo uma base sólida em redes e sistemas Linux ao estudo contínuo de defesa e de testes de intrusão.",
            "about.p2": "Tenho experiência prática em configuração de equipamentos Mikrotik, administração de servidores, suporte a ambientes Microsoft 365 e automação em Bash. Programo em Python, C e C++, o que me permite entender a segurança desde o firmware até a aplicação.",

            "exp.title": "Experiência Profissional",

            "exp.fassRole": "[TODO — cargo na Fass Advogados]",
            "exp.fassPeriod": "jun/2025 — atual",
            "exp.fassB1": "[TODO — principal responsabilidade]",
            "exp.fassB2": "[TODO — segunda responsabilidade]",
            "exp.fassB3": "[TODO — resultado ou entrega de destaque]",

            "exp.tceesRole": "Estágio em Tecnologia da Informação",
            "exp.tceesPeriod": "2024 — fev/2025",
            "exp.tceesB1": "Suporte técnico aos sistemas internos da instituição e ao ambiente Microsoft 365.",
            "exp.tceesB2": "Manutenção preventiva e corretiva dos equipamentos de tecnologia do tribunal.",

            "exp.sinales2Role": "Auxiliar Eletrotécnico",
            "exp.sinales2Period": "2023 — 2024",
            "exp.sinales2B1": "Implementação e configuração de redes com equipamentos Mikrotik em ambientes de clientes.",
            "exp.sinales2B2": "Desenvolvimento e implantação de sistemas de monitoramento de servidores, com comunicação direta com clientes e fornecedores.",

            "exp.sinales1Role": "Estágio em Eletrônica",
            "exp.sinales1Period": "2022 — 2023",
            "exp.sinales1B1": "Produção e manutenção de dispositivos eletrônicos em placas de circuito impresso (PCI).",

            "proj.title": "Projetos",
            "proj.ctmc": "Simulador didático de reação em cadeia de nêutrons por CTMC/Gillespie: motor de cálculo em C exposto por uma API FastAPI, com site de apresentação em Flask.",
            "proj.shell": "Coleção de scripts de automação em Shell para tarefas de administração e rotina em Linux.",
            "proj.uart": "Comunicação serial UART entre duas placas Arduino, desenvolvida na disciplina de Microprocessadores e Microcontroladores.",
            "proj.recomendai": "Rede neural Multilayer Perceptron que gera recomendações nutricionais a partir de dados de exame de sangue.",

            "skills.title": "Competências",
            "skills.net": "Redes e Infraestrutura",
            "skills.sec": "Segurança da Informação",
            "skills.sys": "Sistemas",
            "skills.dev": "Desenvolvimento",
            "skills.data": "Dados",
            "skills.tagRouting": "Roteamento e VLANs",
            "skills.tagMonitor": "Monitoramento de servidores",
            "skills.tagHardening": "Hardening de sistemas",
            "skills.tagNetsec": "Segurança de redes",
            "skills.tagPentest": "Pentest em laboratório",

            "edu.title": "Formação",
            "edu.bsc": "Bacharelado em Engenharia da Computação",
            "edu.bscWhen": "2021 — dez/2026 (previsão)",
            "edu.drone": "Levantamento Topográfico com Drones",
            "edu.droneOrg": "Certificação",
            "edu.droneWhen": "[TODO — instituição e ano]",
            "edu.mysql": "Banco de Dados MySQL",
            "edu.hs": "Ensino Médio Completo",

            "lang.title": "Idiomas",
            "lang.pt": "Português",
            "lang.ptLevel": "Nativo",
            "lang.en": "Inglês",
            "lang.enLevel": "B2 — Fisk",

            "practice.title": "Prática Contínua",

            "foot.updated": "Atualizado em",
            "foot.date": "julho de 2026"
        },

        en: {
            htmlLang: "en",
            docTitle: "Luis Francisco Bissoli do Amparo — Resume",
            fileName: "Resume-Luis-Francisco-Bissoli-do-Amparo",

            "ui.pdf": "Download PDF",
            "ui.theme": "Toggle light and dark theme",

            "header.role": "Computer Engineering · Network Infrastructure and Information Security",
            "header.location": "Vitória, Espírito Santo — Brazil",

            "about.title": "Profile",
            "about.p1": "Computer Engineering student with four years in technology, from electronics maintenance to deploying and monitoring network infrastructure. I am steering my career toward Information Security, combining a solid foundation in networking and Linux systems with continuous study of defence and penetration testing.",
            "about.p2": "I have hands-on experience configuring Mikrotik equipment, administering servers, supporting Microsoft 365 environments and automating tasks in Bash. I program in Python, C and C++, which lets me reason about security from firmware up to the application layer.",

            "exp.title": "Professional Experience",

            "exp.fassRole": "[TODO — job title at Fass Advogados]",
            "exp.fassPeriod": "Jun 2025 — present",
            "exp.fassB1": "[TODO — main responsibility]",
            "exp.fassB2": "[TODO — second responsibility]",
            "exp.fassB3": "[TODO — key result or delivery]",

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
            "proj.recomendai": "Multilayer Perceptron neural network that produces nutritional recommendations from blood-test data.",

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
            "edu.droneOrg": "Certification",
            "edu.droneWhen": "[TODO — issuer and year]",
            "edu.mysql": "MySQL Databases",
            "edu.hs": "High School Diploma",

            "lang.title": "Languages",
            "lang.pt": "Portuguese",
            "lang.ptLevel": "Native",
            "lang.en": "English",
            "lang.enLevel": "B2 — Fisk",

            "practice.title": "Ongoing Practice",

            "foot.updated": "Last updated",
            "foot.date": "July 2026"
        },

        zh: {
            htmlLang: "zh-Hans",
            docTitle: "Luis Francisco Bissoli do Amparo — 简历",
            fileName: "Jianli-Luis-Francisco-Bissoli-do-Amparo",

            "ui.pdf": "下载 PDF",
            "ui.theme": "切换浅色与深色主题",

            "header.role": "计算机工程 · 网络基础设施与信息安全",
            "header.location": "巴西 圣埃斯皮里图州 维多利亚市",

            "about.title": "个人简介",
            "about.p1": "计算机工程专业学生，拥有四年技术工作经验，涵盖电子设备维护到网络基础设施的部署与监控。目前将职业方向聚焦于信息安全，把扎实的网络与 Linux 系统基础同持续的防御及渗透测试学习相结合。",
            "about.p2": "具备配置 Mikrotik 设备、管理服务器、支持 Microsoft 365 环境以及使用 Bash 实现自动化的实操经验。熟练使用 Python、C 与 C++ 编程，因此能够从固件层到应用层理解安全问题。",

            "exp.title": "工作经历",

            "exp.fassRole": "[待补充 — Fass Advogados 的职位名称]",
            "exp.fassPeriod": "2025年6月 — 至今",
            "exp.fassB1": "[待补充 — 主要职责]",
            "exp.fassB2": "[待补充 — 次要职责]",
            "exp.fassB3": "[待补充 — 重点成果]",

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
            "proj.recomendai": "基于多层感知机（MLP）神经网络，依据血液检验数据生成营养建议。",

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
            "edu.droneOrg": "认证",
            "edu.droneWhen": "[待补充 — 发证机构与年份]",
            "edu.mysql": "MySQL 数据库",
            "edu.hs": "高中毕业",

            "lang.title": "语言能力",
            "lang.pt": "葡萄牙语",
            "lang.ptLevel": "母语",
            "lang.en": "英语",
            "lang.enLevel": "B2 — Fisk",

            "practice.title": "持续实践",

            "foot.updated": "更新于",
            "foot.date": "2026年7月"
        }
    };

    var STORE_LANG = "cv-lang";
    var STORE_THEME = "cv-theme";
    var root = document.documentElement;

    /* localStorage pode lançar em modo restrito / iframe sandbox */
    function store(key, value) {
        try {
            if (value === undefined) return localStorage.getItem(key);
            localStorage.setItem(key, value);
        } catch (e) { /* ignora */ }
        return null;
    }

    /* ---------------- Idioma ---------------- */
    var currentLang = "pt";

    function pickInitialLang() {
        var fromUrl = new URLSearchParams(location.search).get("lang");
        if (fromUrl && I18N[fromUrl]) return fromUrl;

        var saved = store(STORE_LANG);
        if (saved && I18N[saved]) return saved;

        var tags = navigator.languages || [navigator.language || "pt"];
        for (var i = 0; i < tags.length; i++) {
            var tag = String(tags[i]).toLowerCase();
            if (tag.indexOf("zh") === 0) return "zh";
            if (tag.indexOf("pt") === 0) return "pt";
            if (tag.indexOf("en") === 0) return "en";
        }
        return "pt";
    }

    function applyLang(lang) {
        var dict = I18N[lang];
        if (!dict) return;
        currentLang = lang;

        root.lang = dict.htmlLang;
        document.title = dict.docTitle;

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var value = dict[el.getAttribute("data-i18n")];
            if (typeof value === "string") el.textContent = value;
        });

        document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
            var value = dict[el.getAttribute("data-i18n-aria")];
            if (typeof value === "string") {
                el.setAttribute("aria-label", value);
                el.title = value;
            }
        });

        document.querySelectorAll("[data-lang-set]").forEach(function (btn) {
            btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang-set") === lang));
        });

        store(STORE_LANG, lang);
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
            document.title = I18N[currentLang].fileName;

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
        photo.addEventListener("error", function () {
            photo.hidden = true;
        });
        if (photo.complete && photo.naturalWidth === 0) photo.hidden = true;
    }

    /* ---------------- Início ---------------- */
    applyLang(pickInitialLang());
})();
