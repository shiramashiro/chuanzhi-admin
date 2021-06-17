<template>
    <div class="owl-side-navigation" style="height: 100%">
        <el-menu
            style="height: 100%"
            default-active="1"
            @open="handleClick"
            @select="handleClick"
        >
            <el-menu-item index="/manage/bookshelf">
                <i class="el-icon-notebook-1"></i>
                <span slot="title">管理书籍</span>
            </el-menu-item>
            <el-menu-item index="/manage/collection">
                <i class="el-icon-collection-tag"></i>
                <span slot="title">管理收藏</span>
            </el-menu-item>
            <el-submenu index="empty">
                <template slot="title">
                    <i class="el-icon-tickets"></i>
                    <span>管理订单</span>
                </template>
                <el-menu-item index="/manage/delivering/indents"
                    >已发货</el-menu-item
                >
                <el-menu-item index="/manage/processing/indents"
                    >未发货</el-menu-item
                >
            </el-submenu>
            <el-menu-item index="/manage/users">
                <i class="el-icon-user"></i>
                <span slot="title">管理用户</span>
            </el-menu-item>
            <el-menu-item index="/manage/comments">
                <i class="el-icon-chat-round"></i>
                <span slot="title">管理评论</span>
            </el-menu-item>
            <el-menu-item index="/manage/trolleies">
                <i class="el-icon-shopping-cart-1"></i>
                <span slot="title">管理购物车</span>
            </el-menu-item>
            <el-menu-item index="/manage/presses">
                <i class="el-icon-position"></i>
                <span slot="title">管理出版社</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'owl-side-navigation',
    data() {
        return {
            lastIndex: '/manage/bookshelf',
            menuItems: [{}]
        }
    },
    methods: {
        handleClick(index, keyPath) {
            if (index === 'empty') {
                return
            } else if (index === this.lastIndex) {
                return
            } else {
                this.lastIndex = index
                this.$router.push(index)
            }
        }
    }
}
</script>

<style scoped></style>
