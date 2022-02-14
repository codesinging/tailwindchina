<template>
    <div class="contact">
        <div class="contact-item">
            <h3>微信交流群</h3>
            <img src="/images/wechat.png" alt="微信交流群">
            <p>请添加备注：tailwindcss</p>
        </div>
        <div class="contact-item">
            <h3>QQ 交流群</h3>
            <img src="/images/qq.png" alt="QQ 交流群">
            <p>请添加备注：tailwindcss</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.contact {
    display: flex;
    justify-content: space-evenly;
}

.contact-item{
    text-align: center;
}

.contact img {
    width: 240px;
    height: 240px;
}
</style>
