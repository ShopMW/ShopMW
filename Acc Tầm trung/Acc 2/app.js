const image = document.getElementById( 'productImg' );
const btn = document.getElementsByClassName( 'btn' );

btn[0].addEventListener( 'click', function(){
    image.src = 'https://github.com/Alamin407/Single-Product-Page/blob/main/img/1.png?raw=true';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );
btn[1].addEventListener( 'click', function(){
    image.src = 'https://github.com/Alamin407/Single-Product-Page/blob/main/img/2.png?raw=true';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );
btn[2].addEventListener( 'click', function(){
    image.src = 'https://github.com/Alamin407/Single-Product-Page/blob/main/img/3.png?raw=true';
    for( bt of btn ){
        bt.classList.remove( 'active' );
    }
    this.classList.add( 'active' );
} );