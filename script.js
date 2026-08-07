// ==========================================
// COREUM TECH BUSINESS
// script.js
// ==========================================


// ==========================================
// EFEITO SUAVE NO FUNDO
// ==========================================

document.addEventListener("mousemove", (e) => {

    const bg = document.querySelector(".background-tech");

    if (!bg) return;

    const x = (e.clientX / window.innerWidth) * 8;
    const y = (e.clientY / window.innerHeight) * 8;

    bg.style.transform =
        `translate(${x}px, ${y}px) scale(1.08)`;

});


// ==========================================
// WHATSAPP PRINCIPAL
// ==========================================

// Número:
// (11) 91474-2246
//
// No link do WhatsApp precisamos usar:
// 55 + DDD + número

const WHATSAPP_NUMERO = "5511914742246";


// ==========================================
// ABRIR WHATSAPP
// ==========================================

function abrirWhatsApp(mensagem = "") {

    const texto = encodeURIComponent(
        mensagem ||
        "Olá! Vim pelo site da Coreum Tech Business e gostaria de mais informações."
    );

    const url =
        `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`;

    window.open(url, "_blank");

}


// ==========================================
// SERVIÇOS
// ==========================================

const servicos = {

    rede: {

        icone: "🌐",

        titulo: "Infraestrutura de Rede",

        itens: [
            "Projeto e cabeamento estruturado para escritórios e empresas",
            "Organização e identificação de racks, switches e pontos de rede",
            "Manutenção preventiva e correção de gargalos de desempenho",
            "Padronização da infraestrutura para futuras expansões"
        ]

    },


    wifi: {

        icone: "📡",

        titulo: "Wi-Fi Corporativo",

        itens: [
            "Projeto de cobertura Wi-Fi profissional",
            "Redes separadas para colaboradores e visitantes",
            "Autenticação segura e controle de acesso",
            "Equipamentos profissionais com gerenciamento centralizado"
        ]

    },


    m365: {

        icone: "☁️",

        titulo: "Microsoft 365",

        itens: [
            "Implantação de e-mail corporativo",
            "Configuração de Outlook, Teams, OneDrive e SharePoint",
            "Organização de arquivos e permissões",
            "Migração e suporte Microsoft 365"
        ]

    },


    workspace: {

        icone: "🔵",

        titulo: "Google Workspace",

        itens: [
            "Configuração de Gmail corporativo",
            "Google Drive e ferramentas colaborativas",
            "Organização e compartilhamento seguro de arquivos",
            "Migração de e-mails e dados"
        ]

    },


    monitoramento: {

        icone: "📊",

        titulo: "Monitoramento",

        itens: [
            "Monitoramento de servidores e computadores",
            "Alertas automáticos de indisponibilidade",
            "Monitoramento de links de internet",
            "Painéis e indicadores em tempo real"
        ]

    },


    backup: {

        icone: "💾",

        titulo: "Backup e Recuperação",

        itens: [
            "Backup automático local e em nuvem",
            "Proteção contra perda de arquivos",
            "Proteção contra falhas e ataques",
            "Testes periódicos de recuperação dos dados"
        ]

    },


    cftv: {

        icone: "📹",

        titulo: "CFTV e Segurança",

        itens: [
            "Instalação de câmeras internas e externas",
            "Gravação local ou em nuvem",
            "Acesso remoto pelo celular",
            "Manutenção e suporte técnico"
        ]

    },


    acesso: {

        icone: "🔐",

        titulo: "Controle de Acesso",

        itens: [
            "Controle de acesso por biometria",
            "Reconhecimento facial",
            "Controle de horários e usuários",
            "Integração com portas, catracas e fechaduras"
        ]

    },


    suporte: {

        icone: "🎧",

        titulo: "Suporte Técnico Especializado",

        itens: [
            "Atendimento remoto rápido",
            "Atendimento presencial quando necessário",
            "Manutenção preventiva",
            "Suporte para computadores, sistemas e infraestrutura"
        ]

    },


    consultoria: {

        icone: "👥",

        titulo: "Consultoria em TI",

        itens: [
            "Análise completa da infraestrutura",
            "Planejamento tecnológico",
            "Redução de custos e riscos",
            "Estratégias para melhorar produtividade e segurança"
        ]

    },


    impressoras: {

        icone: "🖨️",

        titulo: "Suporte a Impressoras",

        itens: [
            "Instalação e configuração de impressoras",
            "Configuração de impressoras em rede",
            "Manutenção preventiva",
            "Diagnóstico e correção de problemas"
        ]

    }

};


// ==========================================
// MODAL
// ==========================================

const modalOverlay =
    document.getElementById("modalOverlay");

const modalIcon =
    document.getElementById("modalIcon");

const modalTitle =
    document.getElementById("modalTitle");

const modalList =
    document.getElementById("modalList");

const modalCta =
    document.getElementById("modalCta");

const modalClose =
    document.getElementById("modalClose");


// ==========================================
// ABRIR MODAL
// ==========================================

function abrirModal(chave) {

    const dados = servicos[chave];

    if (!dados) return;

    if (
        !modalOverlay ||
        !modalIcon ||
        !modalTitle ||
        !modalList ||
        !modalCta
    ) {
        return;
    }


    // Ícone

    modalIcon.textContent = dados.icone;


    // Título

    modalTitle.textContent = dados.titulo;


    // Limpa lista

    modalList.innerHTML = "";


    // Adiciona informações

    dados.itens.forEach((item) => {

        const li =
            document.createElement("li");

        li.textContent = item;

        modalList.appendChild(li);

    });


    // ======================================
    // LINK DO WHATSAPP DO SERVIÇO
    // ======================================

    const mensagem = encodeURIComponent(

        `Olá! Vim pelo site da Coreum Tech Business e tenho interesse na solução de ${dados.titulo}. Gostaria de mais informações.`

    );


    modalCta.href =
        `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;


    // Abre modal

    modalOverlay.classList.add("ativo");

    document.body.style.overflow = "hidden";

}


// ==========================================
// FECHAR MODAL
// ==========================================

function fecharModal() {

    if (!modalOverlay) return;

    modalOverlay.classList.remove("ativo");

    document.body.style.overflow = "";

}


// ==========================================
// BOTÕES "CONHECER SOLUÇÃO"
// ==========================================

document
    .querySelectorAll(".card-link")
    .forEach((botao) => {

        botao.addEventListener("click", () => {

            const servico =
                botao.dataset.service;

            abrirModal(servico);

        });

    });


// ==========================================
// BOTÃO X DO MODAL
// ==========================================

if (modalClose) {

    modalClose.addEventListener(
        "click",
        fecharModal
    );

}


// ==========================================
// CLICAR FORA DO MODAL
// ==========================================

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        (e) => {

            if (e.target === modalOverlay) {

                fecharModal();

            }

        }
    );

}


// ==========================================
// TECLA ESC FECHA MODAL
// ==========================================

document.addEventListener(
    "keydown",
    (e) => {

        if (e.key === "Escape") {

            fecharModal();

        }

    }
);


// ==========================================
// LINKS/BOTÕES DE WHATSAPP
// ==========================================

// Você pode colocar no HTML:
//
// class="whatsapp-link"
//
// em qualquer botão que quiser transformar
// em botão do WhatsApp.

document
    .querySelectorAll(".whatsapp-link")
    .forEach((botao) => {

        botao.addEventListener(
            "click",
            (e) => {

                e.preventDefault();

                abrirWhatsApp();

            }
        );

    });


// ==========================================
// ANO AUTOMÁTICO NO RODAPÉ
// ==========================================

const anoAtual =
    document.getElementById("anoAtual");

if (anoAtual) {

    anoAtual.textContent =
        new Date().getFullYear();

}
