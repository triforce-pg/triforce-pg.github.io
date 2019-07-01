var typed;

$(document).ready(function(){

    // $(".email-copy-to-clipboard").click(function(){
    //     copyTextToClipboard();
    // });
    //
    // var options = {
    //     strings: ["triforce.pg@gmail.com"],
    //     typeSpeed: 60,
    //     backDelay:  1000,
    //     backSpeed: 50,
    //     loop: true,
    //     showCursor: true,
    //     cursorChar: '|',
    //     smartBackspace: false,
    // };
    //
    // typed = new Typed(".email-value", options);


    let links = {
        'fa-github' : 'https://github.com/triforce-pg' ,
        'fa-instagram' : '#' ,
        'fa-google' : 'mailto:triforce.pg@gmail.com' ,
        // 'fa-linkedin' : '#' ,
        'fa-telegram' : 'https://t.me/Triforce_PG' ,
        // 'fa-stack-overflow' : '#' ,

    };

    for( let lnk in links){
        $('.' + lnk ).click(function(){

            console.log("click on " + lnk);

            openUrlInNewTab(links[lnk]);
        });
    }

});

function openUrlInNewTab(url) {
    window.open(url, '_blank');
}
