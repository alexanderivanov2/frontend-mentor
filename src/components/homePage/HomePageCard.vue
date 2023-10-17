<template>
    <div class="home-page-card">
        <h6 class="home-page-card-title">QR Code Component</h6>
        <router-link :to="{ name: 'NewbieQRCode'}" class="home-page-card-link">QR Code &#187;</router-link>
    </div>
</template>

<style lang="scss">
    .home-page-card {
        max-width: 250px;
        max-height: 250px;
        border: 1px solid #D3D0CB;
        border-radius: 10px;

        .home-page-card-title {
            padding: 1rem;
            background-color: white;
            border-bottom: 3px solid #153A51;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            text-align: center;
            font-weight: bold;
        }

        .home-page-card-link {
            display: block;
            background-color: #016FB9;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            padding: 1rem;
            text-align: center;
            text-decoration: none;
            color: white;
            font-weight: bold;

            &:hover {
                background-color: #34ADFE;
                color: black;
                transition: all ease-in-out 500ms;
            }
        }

    }
</style>