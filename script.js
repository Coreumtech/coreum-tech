document.addEventListener("mousemove", (e) => {
    const bg = document.querySelector(".background-tech");
    if (!bg) return;

    const x = (e.clientX / window.innerWidth) * 10;
    const y = (e.clientY / window.innerHeight) * 10;

    bg.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
});

const WHATSAPP_PRINCIPAL = "5511914742246";

const servicos = {
    rede: {
        icone: "🖧",
        titulo: "Infraestrutura de Rede",
        itens: [
            "Projeto e cabeamento estruturado para escritórios e empresas",
            "Organização e identificação de racks, switches e pontos de rede",
            "Manutenção preventiva e correção de gargalos de desempenho",
            "Padronização para facilitar expansões futuras"
        ]
    },
    wifi: {
        icone: "📶",
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
            <svg viewBox="0 0 64 64" aria-hidden="true">
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
            <svg viewBox="0 0 64 64" aria-hidden="true">
                <path d="M56 33.5c0-1.7-.2-3.3-.5-4.9H32v9.2h13.5c-.6 3.1-2.4 5.7-5.1 7.5v6.2h8.2c4.8-4.4 7.4-10.8 7.4-18z" fill="#4285f4"></path>
                <path d="M32 58c6.9 0 12.7-2.3 16.9-6.2l-8.2-6.2c-2.3 1.5-5.2 2.4-8.7 2.4-6.7 0-12.4-4.5-14.5-10.5h-8.5v6.4C12.9 52.1 21.8 58 32 58z" fill="#34a853"></path>
                <path d="M17.5 37.5c-.6-1.8-1-3.7-1-5.7s.4-3.9 1-5.7v-6.4h-8.5C7.4 24 6 27.8 6 31.8S7.4 39.6 9 43.7l8.5-6.2z" fill="#fbbc05"></path>
                <path d="M32 16.7c3.8 0 7.2 1.3 9.9 3.9l7.4-7.4C44.6 8.9 38.8 6.4 32 6.4 21.8 6.4 12.9 12.3 8.5 21.1l8.5 6.4c2.1-6 7.8-10.8 14.5-10.8z" fill="#4285f4"></path>
            </svg>
        `,
        titulo: "Google Workspace",
        itens: [
            "Configuração de Gmail corporativo, Drive e Agenda",
            "Ferramentas colaborativas para equipes remotas ou híbridas",
            "Organização de arquivos e compartilhamento seguro",
            "Migração de e-mails e dados de outras plataformas"
        ]
    },
    backup: {
        icone: "🗄️",
        titulo: "Backup e Recuperação",
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
            <svg viewBox="0 0 64 64" aria-hidden="true">
                <rect x="10" y="14" width="44" height="28" rx="4" fill="#4a8cff"></rect>
                <rect x="14" y="18" width="36" height="20" rx="2" fill="#0c1320"></rect>
                <rect x="24" y="44" width="16" height="4" rx="2" fill="#4a8cff"></rect>
                <rect x="18" y="50" width="28" height="4" rx="2" fill="#4a8cff"></rect>
                <circle cx="41" cy="28" r="8" fill="#6ea8ff"></circle>
                <circle cx="41" cy="28" r="4" fill="#0c1320"></circle>
                <g fill="#4a8cff">
                    <rect x="39.8" y="19.5" width="2.4" height="6.2" rx="1.2"></rect>
                    <rect x="39.8" y="30.3" width="2.4" height="6.2" rx="1.2"></rect>
                    <rect x="32.8" y="27" width="6.2" height="2.4" rx="1.2"></rect>
                    <rect x="42.9" y="27" width="6.2" height="2.4" rx="1.2"></rect>
                </g>
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
        icone: "👥",
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

    modalCta.href = `https://wa.me/${WHATSAPP_PRINCIPAL}?text=${mensagem}`;
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
        if (e.target === modalOverlay) {
            fecharModal();
        }
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        fecharModal();
    }
});
