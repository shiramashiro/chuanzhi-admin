<template>
    <div class="compile-bookshelf">
        <div class="breadcrumb owl-margin-tb-md owl-border-radius-sm">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">
                    首页
                </el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/manage/bookshelf' }">
                    管理书籍
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    编辑书籍
                </el-breadcrumb-item>
            </el-breadcrumb>
            <owl-bookshelf-form
                :form="$store.state.bookshelvesData"
                @maintain="handleMaintain"
            ></owl-bookshelf-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'compile-bookshelft',
    methods: {
        handleMaintain(form) {
            this.$confirm('是否保存？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.$axios.post('/update/bookshelf', form).then(res => {
                        this.$message({
                            type: 'success',
                            message: '保存成功!'
                        })
                    })
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消编辑'
                    })
                })
        }
    }
}
</script>

<style lang="scss" scoped></style>
