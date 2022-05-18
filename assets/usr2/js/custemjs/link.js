let lnkdt = window.location.href.split('/');
if(lnkdt[5] == 'beranda' || lnkdt[5] == 'berita' || lnkdt[5] == 'kategori' || lnkdt[5] == 'fokus' || lnkdt[5] == 'page') {
    var linkpage = '../';
} else if(lnkdt[5] == 'detail') {
    var linkpage = '../../';
}