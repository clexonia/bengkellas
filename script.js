const projects = [
  { title: "Pagar & Kanopi Rumah", desc: "Desain modern dan kokoh", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a26?w=800" },
  { title: "Struktur Gudang Baja", desc: "Rangka 12x30 meter", img: "https://images.unsplash.com/photo-1581092160607-8f0a7a5e8e5b?w=800" },
  { title: "Tralis Jendela Custom", desc: "Motif elegan", img: "https://images.unsplash.com/photo-1621905251189-1a2f8e9f5f5d?w=800" },
  { title: "Railing Tangga & Balkon", desc: "Kualitas premium", img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800" },
  { title: "Repair Mesin Pabrik", desc: "Pengelasan komponen mesin", img: "https://images.unsplash.com/photo-1581091226825-a6a9c8e4e5d3?w=800" },
  { title: "Gerbang Otomatis", desc: "Pemasangan lengkap", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a26?w=800" }
];

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;
  
  container.innerHTML = projects.map(p => `
    <div class="project-card bg-zinc-900 rounded-3xl overflow-hidden">
      <img src="${p.img}" alt="${p.title}" class="w-full h-64 object-cover">
      <div class="p-7">
        <h3 class="text-xl font-semibold mb-2">${p.title}</h3>
        <p class="text-gray-400">${p.desc}</p>
      </div>
    </div>
  `).join('');
}

window.onload = renderProjects;