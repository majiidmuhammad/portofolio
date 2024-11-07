// const certificates = document.querySelectorAll('.certificate');
//         const itemsPerPage = 2;
//         let currentPage = 1;

//         function showPage(page) {
//             const start = (page - 1) * itemsPerPage;
//             const end = start + itemsPerPage;

//             certificates.forEach((certificate, index) => {
//                 if (index >= start && index < end) {
//                     certificate.style.display = 'block';
//                 } else {
//                     certificate.style.display = 'none';
//                 }
//             });

//             document.getElementById('prevBtn').disabled = page === 1;
//             document.getElementById('nextBtn').disabled = end >= certificates.length;
//         }

//         function nextPage() {
//             currentPage++;
//             showPage(currentPage);
//         }

//         function prevPage() {
//             currentPage--;
//             showPage(currentPage);
//         }

//         showPage(currentPage);