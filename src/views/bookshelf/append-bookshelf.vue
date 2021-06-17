<template>
    <div class="append-bookshelf">
        <div class="breadcrumb owl-margin-tb-md owl-border-radius-sm">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"
                    >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item :to="{ path: '/manage/bookshelf' }"
                    >管理书籍</el-breadcrumb-item
                >
                <el-breadcrumb-item>添加书籍</el-breadcrumb-item>
            </el-breadcrumb>
            <owl-bookshelf-form
                :form="form"
                @maintain="handleMaintain"
            ></owl-bookshelf-form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'append-bookshelf',
    data() {
        return {
            form: {
                previews: [],
                authors: ['']
            }
        }
    },
    methods: {
        handleMaintain(form) {
            this.$axios
                .post('/append/bookshelf', form)
                .then(res => {
                    this.$message({
                        type: 'success',
                        message: '添加书籍成功!'
                    })
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '添加书籍失败，服务器错误'
                    })
                })
        }
    }
}
</script>

<style lang="scss" scoped></style>
