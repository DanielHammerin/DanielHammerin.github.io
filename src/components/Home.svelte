<script>

</script>

<main>
    <h1>Home</h1>
    <h2>Welcome to my github pages.</h2>
</main>

<style>
    main {
        opacity: 0;
        padding: 1em;
        background-color: rgba(196, 196, 196, 0.5);
        margin-top: 1em;
        border-radius: 1em;
        animation: slide-up-fade-in 1s;
        animation-delay: 5s;
        animation-fill-mode: forwards;
    }

    @keyframes slide-up-fade-in{
    0% {
        opacity:0;
        transform:  translate(0px,40px)  ;
    }
    100% {
        opacity:1;
        transform:  translate(0px,0px)  ;
    }
}
</style>