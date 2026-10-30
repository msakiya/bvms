// Tailwind Config with Exact Navy, Gold & Cream Brand Palette
tailwind.config = {
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: '#1B2A4A', /* Exact Logo Navy */
                    dark: '#121D34',
                    light: '#283C66',
                    soft: '#213358'
                },
                cream: {
                    DEFAULT: '#FAF8F5', /* Warm Editorial Cream */
                    soft: '#F4F0EA',
                    card: '#FFFFFF',
                    dark: '#EBE6DE'
                },
                gold: {
                    DEFAULT: '#C5A059', /* Logo Gold Accent */
                    dark: '#A3803E',
                    light: '#E2C78D'
                },
                concrete: {
                    light: '#F0ECE6',
                    DEFAULT: '#D3CDC3',
                    dark: '#5A5650'
                },
                botanical: {
                    DEFAULT: '#2D4A3E', /* Molle tree green */
                    light: '#3E6152'
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            }
        }
    }
}

// Array of 10 Apartments for Edificio Ema
const apartments = [
    { id: "101", type: "Garden Residence", dorms: "3 Dorms", baths: "3.5 Baños", total: "185 m²", techada: "145 m²", libre: "40 m²", detail: "Amplio jardín interior con vegetación nativa de molles, dormitorio principal con luz matutina." },
    { id: "102", type: "Duplex Boutique", dorms: "3 Dorms", baths: "3 Baños", total: "160 m²", techada: "138 m²", libre: "22 m²", detail: "Techos de gran altura, cocina integrada con acabados de cuarzo y terraza privada." },
    { id: "201", type: "Flat Vista Exterior", dorms: "3 Dorms", baths: "3 Baños", total: "128 m²", techada: "118 m²", libre: "10 m²", detail: "Balcón hacia Av. Buena Vista con cristales de aislamiento acústico y terrazos." },
    { id: "202", type: "Flat Vista Interna", dorms: "3 Dorms", baths: "2.5 Baños", total: "125 m²", techada: "115 m²", libre: "10 m²", detail: "Ambiente sereno, ventilación cruzada y acabados de madera estructurada viva." },
    { id: "301", type: "Flat Vista Exterior", dorms: "3 Dorms", baths: "3 Baños", total: "128 m²", techada: "118 m²", libre: "10 m²", detail: "Iluminación natural optimizada, estancia amplia adaptativa a tu estilo de vida." },
    { id: "302", type: "Flat Vista Interna", dorms: "3 Dorms", baths: "2.5 Baños", total: "125 m²", techada: "115 m²", libre: "10 m²", detail: "Dormitorios amplios con baño incorporado y lavandería independiente." },
    { id: "401", type: "Flat Vista Exterior", dorms: "3 Dorms", baths: "3 Baños", total: "128 m²", techada: "118 m²", libre: "10 m²", detail: "Vistas despejadas a la copa de las áreas verdes de Chacarilla del Estanque." },
    { id: "402", type: "Flat Vista Interna", dorms: "3 Dorms", baths: "2.5 Baños", total: "125 m²", techada: "115 m²", libre: "10 m²", detail: "Lienzo en blanco con plantas eficientes para proyectar tu hogar ideal." },
    { id: "501", type: "Penthouse Duplex Top", dorms: "4 Dorms", baths: "4.5 Baños", total: "240 m²", techada: "180 m²", libre: "60 m²", detail: "Penthouse exclusivo con terraza panorámica equipada para zona BBQ y descanso." },
    { id: "502", type: "Penthouse Duplex Top", dorms: "4 Dorms", baths: "4 Baños", total: "235 m²", techada: "175 m²", libre: "60 m²", detail: "Doble sala de estar, vistas superiores y el máximo estándar de materialidad." }
];

let selectedUnit = apartments[0];

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    menu.classList.toggle('hidden');
    if(menu.classList.contains('hidden')){
        icon.className = 'fa-solid fa-bars text-xl';
    } else {
        icon.className = 'fa-solid fa-xmark text-xl';
    }
}

function renderUnitsList() {
    const container = document.getElementById('units-list');
    container.innerHTML = '';

    apartments.forEach((u) => {
        const isCurrent = u.id === selectedUnit.id;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
            isCurrent 
            ? 'bg-gold text-navy border-gold font-semibold shadow-md' 
            : 'bg-navy/40 text-cream/80 border-cream/10 hover:border-gold hover:text-cream'
        }`;
        btn.onclick = () => selectUnit(u.id);

        btn.innerHTML = `
            <div class="flex items-center gap-3">
                <span class="w-7 h-7 rounded-md ${isCurrent ? 'bg-navy text-gold' : 'bg-navy-dark text-cream/60'} flex items-center justify-center text-xs font-bold font-mono">
                    ${u.id}
                </span>
                <div>
                    <div class="text-xs sm:text-sm font-medium">Dpto ${u.id} • ${u.type}</div>
                    <div class="text-[10px] ${isCurrent ? 'text-navy/80' : 'text-cream/50'}">${u.dorms} • Total: ${u.total}</div>
                </div>
            </div>
            <i class="fa-solid fa-chevron-right text-[10px]"></i>
        `;
        container.appendChild(btn);
    });
}

function selectUnit(id) {
    const unit = apartments.find(u => u.id === id);
    if(unit) {
        selectedUnit = unit;
        renderUnitsList();

        document.getElementById('unit-badge').innerText = `Piso ${unit.id.charAt(0)} • ${unit.type}`;
        document.getElementById('unit-title').innerText = `Departamento ${unit.id}`;
        document.getElementById('unit-area').innerText = unit.total;
        document.getElementById('unit-dorms').innerText = unit.dorms;
        document.getElementById('unit-baths').innerText = unit.baths;
        document.getElementById('unit-techada').innerText = unit.techada;
        document.getElementById('unit-libre').innerText = unit.libre;
        document.getElementById('unit-detail').innerText = `* ${unit.detail}`;
        document.getElementById('btn-unit-id').innerText = `Dpto ${unit.id}`;

        const selectEl = document.getElementById('dpto-select');
        for (let i = 0; i < selectEl.options.length; i++) {
            if (selectEl.options[i].value.includes(unit.id)) {
                selectEl.selectedIndex = i;
                break;
            }
        }
    }
}

function selectUnitForForm() {
    selectUnit(selectedUnit.id);
}

function submitForm(e) {
    e.preventDefault();
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const dpto = document.getElementById('dpto-select').value;
    const mensaje = document.getElementById('mensaje').value;

    const btn = document.getElementById('submit-btn');
    btn.disabled = true;
    btn.innerText = 'Enviando...';

    setTimeout(() => {
        btn.disabled = false;
        btn.innerText = 'Solicitar Cotización';

        const resp = document.getElementById('form-response');
        resp.classList.remove('hidden');
        resp.innerHTML = `¡Gracias ${nombres}! Tu solicitud para el <strong>${dpto}</strong> fue enviada con éxito. El asesor <strong>Oswaldo Salazar</strong> te enviará la brochure al ${telefono}.`;

        const waMessage = `Hola Oswaldo, me llamo ${nombres} ${apellidos}. Me interesa el Edificio Ema (${dpto}). Mi correo es ${email} y mi teléfono ${telefono}. Consulta: ${mensaje}`;
        const waUrl = `https://wa.me/51938389931?text=${encodeURIComponent(waMessage)}`;

        setTimeout(() => {
            window.open(waUrl, '_blank');
        }, 600);

    }, 800);
}

window.onload = function() {
    renderUnitsList();
};
