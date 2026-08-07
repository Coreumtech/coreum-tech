// script.js

document.addEventListener("mousemove", (e) => {
    const bg = document.querySelector(".background-tech");
    if (!bg) return;

    const x = (e.clientX / window.innerWidth) * 10;
    const y = (e.clientY / window.innerHeight) * 10;

    bg.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
});

const WHATSAPP_NUMERO_PRINCIPAL = "5511914742246";
const WHATSAPP_NUMERO_SECUNDARIO = "5511925079059";

const servicos = {
    rede: {
        icone: "🌐",
        titulo: "Infraestrutura de Rede",
        itens: [
            "Projeto e cabeamento estruturado para escritórios e empresas",
            "Organização e identificação de racks, switches e pontos de rede",
            "Manutenção preventiva e correção de gargalos de desempenho",
            "Padronização para facilitar expansões futuras"
        ]
    },
    wifi: {
        icone: "📡",
        titulo: "Wi-Fi Corporativo",
        itens: [
            "Projeto de cobertura sem pontos cegos, mesmo em áreas grandes",
            "Redes separadas para colaboradores, visitantes e equipamentos",
            "Autenticação segura e controle de acesso à rede",
            "Equipamentos profissionais com gerenciamento centralizado"
        ]
    },
    m365: {
        icone: `
            <svg class="svc-icon-svg" viewBox="0 0 64 64" aria-hidden="true">
                <rect x="4" y="4" width="26" height="26" fill="#f25022"></rect>
                <rect x="34" y="4" width="26" height="26" fill="#7fba00"></rect>
                <rect x="4" y="34" width="26" height="26" fill="#00a4ef"></rect>
                <rect x="34" y="34" width="26" height="26" fill="#ffb900"></rect>
            </svg>
        `,
        titulo: "Microsoft 365",
        itens: [
            "Implantação de e-mail corporativo e domínio próprio",
            "Configuração de Outlook, Teams, OneDrive e SharePoint",
            "Organização de arquivos e permissões por equipe",
            "Suporte contínuo para dúvidas e novos usuários"
        ]
    },
    workspace: {
        icone: `
            <span class="svc-google-letter">G</span>
        `,
        titulo: "Google Workspace",
        itens: [
            "Configuração de Gmail corporativo, Drive e Agenda",
            "Ferramentas colaborativas para equipes remotas ou híbridas",
            "Organização de arquivos e compartilhamento seguro",
            "Migração de e-mails e dados de outras plataformas"
        ]
    },
    monitoramento: {
        icone: "📊",
        titulo: "Monitoramento Grafana",
        itens: [
            "Painéis em tempo real de servidores e computadores",
            "Alertas automáticos antes que um problema afete a operação",
            "Acompanhamento de links de internet e disponibilidade",
            "Indicadores visuais para tomada de decisão rápida"
        ]
    },
    backup: {
        icone: "💾",
        titulo: "Backup",
        itens: [
            "Rotinas automáticas de backup local e em nuvem",
            "Proteção contra falhas de hardware, erros humanos e ataques",
            "Testes periódicos para garantir que a restauração funciona",
            "Política de retenção adequada ao volume da empresa"
        ]
    },
    cftv: {
        icone: "📹",
        titulo: "CFTV e Segurança",
        itens: [
            "Instalação de câmeras internas e externas",
            "Gravação em nuvem ou local, com acesso remoto pelo celular",
            "Projeto de posicionamento para cobrir pontos estratégicos",
            "Manutenção e suporte técnico contínuo"
        ]
    },
    acesso: {
        icone: "🔐",
        titulo: "Controle de Acesso",
        itens: [
            "Reconhecimento facial e biometria para entrada de colaboradores",
            "Controle de horários e relatórios de acesso",
            "Integração com portas, catracas e fechaduras eletrônicas",
            "Aumento da segurança física da empresa"
        ]
    },
    suporte: {
        icone: `
            <svg class="svc-icon-svg" viewBox="0 0 64 64" aria-hidden="true">
                <rect x="10" y="12" width="44" height="30" rx="4" fill="#4a8cff"></rect>
                <rect x="14" y="16" width="36" height="22" rx="2" fill="#0c1320"></rect>
                <rect x="26" y="46" width="12" height="4" rx="2" fill="#4a8cff"></rect>
                <rect x="20" y="50" width="24" height="4" rx="2" fill="#4a8cff"></rect>
                <circle cx="42" cy="28" r="8" fill="#6ea8ff"></circle>
                <circle cx="42" cy="28" r="4" fill="#0c1320"></circle>
                <rect x="40.5" y="20" width="3" height="6" rx="1.5" fill="#4a8cff"></rect>
                <rect x="40.5" y="30" width="3" height="6" rx="1.5" fill="#4a8cff"></rect>
                <rect x="34" y="26.5" width="6" height="3" rx="1.5" fill="#4a8cff"></rect>
                <rect x="44" y="26.5" width="6" height="3" rx="1.5" fill="#4a8cff"></rect>
            </svg>
        `,
        titulo: "Suporte Técnico Especializado",
        itens: [
            "Atendimento remoto para resolver problemas rapidamente",
            "Visitas presenciais quando necessário",
            "Manutenção preventiva de computadores e servidores",
            "Suporte para colaboradores em caso de falhas ou dúvidas"
        ]
    },
    consultoria: {
        icone: "💡",
        titulo: "Consultoria em TI",
        itens: [
            "Diagnóstico completo da estrutura de TI atual",
            "Plano de ação para reduzir custos e riscos",
            "Recomendação de ferramentas e fornecedores adequados",
            "Acompanhamento na implementação das melhorias"
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

const modalOverlay = document.getElementById("modalOverlay");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalList = document.getElementById("modalList");
const modalCta = document.getElementById("modalCta");
const modalClose = document.getElementById("modalClose");

function abrirModal(chave) {
    const dados = servicos[chave];
    if (!dados || !modalOverlay || !modalIcon || !modalTitle || !modalList || !modalCta) return;

    modalIcon.innerHTML = dados.icone;
    modalTitle.textContent = dados.titulo;
    modalList.innerHTML = "";

    dados.itens.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        modalList.appendChild(li);
    });

    const mensagem = encodeURIComponent(
        `Olá! Tenho interesse na solução de ${dados.titulo}. Podem me passar mais informações?`
    );

    modalCta.href = `https://wa.me/${WHATSAPP_NUMERO_PRINCIPAL}?text=${mensagem}`;
    modalOverlay.classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove("ativo");
    document.body.style.overflow = "";
}

document.querySelectorAll(".card-link").forEach((botao) => {
    botao.addEventListener("click", () => {
        abrirModal(botao.dataset.service);
    });
});

if (modalClose) {
    modalClose.addEventListener("click", fecharModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) fecharModal();
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharModal();
});

document.querySelectorAll(".whatsapp-link").forEach((botao) => {
    botao.addEventListener("click", () => {
        const href = botao.getAttribute("href");
        if (href) window.open(href, "_blank");
    });
});
