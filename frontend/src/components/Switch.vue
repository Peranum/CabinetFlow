<template>
    <nav>
        <ul class="nav-wrapper">
            <li class="nav-item">
                <router-link :to="{ path: '/summary-cabinet' }" active-class="active-link">Сводка кабинета</router-link>
                <router-link :to="{ path: '/summary-article' }" active-class="active-link">Сводка
                    артикулов</router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);

    .nav-wrapper {
        background-color: #fff;
        border-radius: 8px;
        margin: 4vh 0;
        padding: 15px 0;

        .nav-item {
            
            a {
                padding: 15px 10px;
                border-radius: 8px;
            }

            .active-link {
                background-color: violet;
                color: white;
            }
        }
    }
}
</style>