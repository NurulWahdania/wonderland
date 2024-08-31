let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Event listener untuk tombol "Next"
next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

// Event listener untuk tombol "Previous"
prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

// // Tambahkan event listener untuk setiap gambar
// let items = document.querySelectorAll('.item');
// items.forEach(function(item) {
//     item.addEventListener('click', function() {
//         let slide = document.querySelector('.slide');
//         let allItems = document.querySelectorAll('.item');

//         // Jika gambar yang diklik adalah gambar pertama
//         if (item === allItems[0]) {
//             slide.appendChild(item); // Sama dengan tombol "Next"
//         } 
//         // Jika gambar yang diklik adalah gambar terakhir
//         else if (item === allItems[allItems.length - 1]) {
//             slide.prepend(item); // Sama dengan tombol "Previous"
//         } 
//         else {
//             // Logika lain jika diperlukan
//             slide.appendChild(allItems[0]); // Memindahkan gambar pertama ke belakang
//         }
//     });
// });
