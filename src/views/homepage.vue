<template>
    <div class="homepage">
        <el-container>
            <el-aside width="200px">
                <owl-side-navigation />
            </el-aside>
            <el-container>
                <el-header class="flex align-center justify-between">
                    <div
                        class="header-left flex align-center owl-font-size-lg"
                        @click="handleClick"
                    >
                        <el-image
                            style="width: 120px"
                            src="https://generic-data.oss-cn-chengdu.aliyuncs.com/owl/img/logo.png"
                            class="owl-margin-rg-lg"
                        ></el-image>
                        后台管理系统
                    </div>
                    <div class="header-right flex align-center">
                        <el-image
                            style="width: 36px; height: 36px; border-radius: 100%"
                            :src="user.profilePhoto"
                        ></el-image>
                        <div class="username owl-font-size-sm owl-margin-le-md">
                            {{user.username}}
                        </div>
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
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        let user = sessionStorage.getItem('user')
        if (user === null) {
            this.$message({
                type: 'warning',
                message: '您没有登录，请先登录'
            })
            this.$router.push('/signin')
        } else {
            this.user = JSON.parse(user)
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
