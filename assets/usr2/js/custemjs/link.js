let lnkdt = window.location.href.split('/');

if(lnkdt[3] == 'beranda' || lnkdt[3] == 'berita' || lnkdt[3] == 'kategori' || lnkdt[3] == 'fokus' || lnkdt[3] == 'page') {

    var linkpage = '../';

} else if(lnkdt[3] == 'detail') {

    var linkpage = '../../';

}