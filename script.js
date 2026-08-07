// script.js

// ==========================================
// EFEITO SUAVE NO FUNDO (PLACA MÃE)
// ==========================================

document.addEventListener("mousemove", (e) => {
    const bg = document.querySelector(".background-tech");
    if (!bg) return;

    const x = (e.clientX / window.innerWidth) * 10;
    const y = (e.clientY / window.innerHeight) * 10;

    bg.style.transform = `translate(${x}px, ${y}px) scale(1.08)`;
});

// ==========================================
// CONTATOS DE WHATSAPP
// ==========================================

const WHATSAPP_CONTATOS = [
    "5511925079059",
    "5511914742246"
];

// ==========================================
// CONTEÚDO DOS SERVIÇOS
// ==========================================

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
        icone: "☁",
        titulo: "Microsoft 365",
        itens: [
            "Implantação de e-mail corporativo e domínio próprio",
            "Configuração de Outlook, Teams, OneDrive e SharePoint",
            "Organização de arquivos e permissões por equipe",
            "Suporte contínuo para dúvidas e novos usuários"
        ]
    },
    workspace: {
        icone: "🔵",
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
        titulo: "CFTV",
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
    suporte: {
        icone: "🖥",
        titulo: "Suporte Técnico",
        itens: [
            "Atendimento remoto para resolver problemas rapidamente",
            "Visitas presenciais quando necessário",
            "Manutenção preventiva de computadores e servidores",
            "Suporte para colaboradores em caso de falhas ou dúvidas"
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

const modalOverlay = document.getElementById("modalOverlay");
const modalIcon = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalList = document.getElementById("modalList");
const modalCta = document.getElementById("modalCta");
const modalClose = document.getElementById("modalClose");

function abrirModal(chave) {
    const dados = servicos[chave];
    if (!dados || !modalOverlay || !modalIcon || !modalTitle || !modalList || !modalCta) return;

    modalIcon.textContent = dados.icone;
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

    modalCta.href = `https://wa.me/${WHATSAPP_CONTATOS[0]}?text=${mensagem}`;
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
