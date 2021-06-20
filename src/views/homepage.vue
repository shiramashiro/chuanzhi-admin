<template>
    <div class="homepage">
        <el-container>
            <el-aside width="200px">
                <owl-side-navigation />
            </el-aside>
            <el-container>
                <el-header class="flex align-center">
                    <div
                        class="header-left flex align-center owl-font-size-lg"
                        @click="handleClick"
                    >
                        <el-image
                            style="width: 120px"
                            src="https://owl-town.oss-cn-chengdu.aliyuncs.com/img/logo/logo.png"
                            class="owl-margin-rg-lg"
                        ></el-image>
                        后台管理系统
                    </div>
                </el-header>
                <el-main>
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
        <owl-cust-footer />
    </div>
</template>

<script>
import owlCustFooter from '@/components/owl-cust-footer.vue'
import owlSideNavigation from '@/components/owl-side-navigation.vue'

export default {
    name: 'homepage',
    components: { owlCustFooter, owlSideNavigation },
    mounted() {
        let user = sessionStorage.getItem('user')
        if (user === null) {
            this.$message({
                type: 'warning',
                message: '您没有登录，请先登录'
            })
            this.$router.push('/signin')
        }
    },
    methods: {
        handleClick() {
            this.$router.push('/index')
        }
    }
}
</script>

<style lang="scss" scoped></style>
