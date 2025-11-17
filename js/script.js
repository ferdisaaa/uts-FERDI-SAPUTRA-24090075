
//           DATA & CONFIG


const VALID_PASSWORD = "24090075"; 

const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000
};

let products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

function formatRupiah(num) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(num);
}

const path = location.pathname;


// =======================================
//              LOGIN PAGE
// =======================================

if (path.includes("index.html") || path.endsWith("/")) {
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("loginForm");
        const errorMessage = document.getElementById("error-message"); 
        
        if (!form || !errorMessage) return; 

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            errorMessage.style.display = "none";
            errorMessage.textContent = "";

            // Validasi Kekosongan [cite: 38]
            if (email === "" || password === "") {
                errorMessage.textContent = "Email dan password tidak boleh kosong!";
                errorMessage.style.display = "block";
                return;
            }
            
            // Validasi Password (Harus NIM 24090075) [cite: 35]
            if (password !== VALID_PASSWORD) {
                errorMessage.textContent = "Password salah! Harap masukkan NIM yang benar.";
                errorMessage.style.display = "block";
                return;
            }

            // Login Berhasil dan Redirect [cite: 40]
            alert("Login berhasil!");
            window.location.href = "dashboard.html";
        });
    });
}


// =======================================
//            DASHBOARD PAGE
// =======================================

else if (path.includes("dashboard.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        // Tampilkan Data Summary [cite: 59]
        document.getElementById("totalProducts").textContent = summary.totalProducts.toLocaleString('id-ID');
        document.getElementById("totalSales").textContent = summary.totalSales.toLocaleString('id-ID');
        document.getElementById("totalRevenue").textContent = formatRupiah(summary.totalRevenue);

        // Redirect Tombol Lihat Data Produk [cite: 67]
        const viewProductButton = document.getElementById("viewProductButton");
        viewProductButton?.addEventListener("click", () => {
            window.location.href = "product.html";
        });
        
        // Logout Button
        document.getElementById("logout-btn")?.addEventListener("click", (e) => {
            e.preventDefault();
            if (confirm("Yakin ingin logout?")) {
                window.location.href = "index.html";
            }
        });

        setupSidebarActiveState();
    });
}


// =======================================
//            PRODUCTS PAGE
// =======================================

else if (path.includes("product.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        renderProductTable();

        // Logout Button
        document.getElementById("logout-btn")?.addEventListener("click", (e) => {
            e.preventDefault();
            if (confirm("Yakin ingin logout?")) {
                window.location.href = "index.html";
            }
        });
        
        setupSidebarActiveState();
    });

    // Render Table
    function renderProductTable() {
        const tbody = document.getElementById("productTableBody");
        if (!tbody) return;
        
        tbody.innerHTML = "";

        products.forEach((item, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${formatRupiah(item.price)}</td>
                <td>${item.stock}</td>
                <td class="action-cell">
                    <a href="#" class="action-icon edit-icon" onclick="editProduct(${item.id})">
                        <i class="fas fa-pencil-alt"></i> 
                    </a>
                    <a href="#" class="action-icon delete-icon" onclick="deleteProduct(${item.id}, event)">
                        <i class="fas fa-trash"></i>
                    </a>
                </td>
            `;

            tbody.appendChild(row);
        });
    }

    // Edit Produk [cite: 86]
    window.editProduct = function(id) {
        const p = products.find(p => p.id === id);
        alert(`✏️ Edit produk: ${p.name}`);
    };

    // Delete Produk [cite: 87, 88]
    window.deleteProduct = function(id, event) {
        event.preventDefault();
        const p = products.find(p => p.id === id);
        
        if (confirm(`Yakin hapus produk "${p.name}" ini?`)) { // Konfirmasi hapus [cite: 89]
            products = products.filter(item => item.id !== id); // Hapus dari array
            renderProductTable(); // Render ulang
        }
    };
}


// =======================================
//       GLOBAL: SIDEBAR ACTIVE STATE
// =======================================

function setupSidebarActiveState() {
    const menuItems = document.querySelectorAll('.menu-item');
    const currentFile = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1) || 'dashboard.html';

    menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === currentFile) {
            item.classList.add('active');
        }
    });
}