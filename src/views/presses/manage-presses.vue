<template>
    <div class="manage-presses">
        <div class="breadcrumb owl-margin-tb-md owl-border-radius-sm">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/index' }"
                    >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item>管理出版社</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container owl-margin-top-lg">
            <div class="owl-margin-bm-lg flex owl-float-right">
                <el-button
                    type="primary"
                    size="mini"
                    @click="$router.push('/append/press')"
                    >添加出版社</el-button
                >
            </div>
            <div class="table">
                <el-table :data="presses">
                    <el-table-column label="出版社" prop="name">
                    </el-table-column>
                    <el-table-column label="封面地址" prop="cover">
                    </el-table-column>
                    <el-table-column label="简介" prop="profile">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                plain
                                icon="el-icon-search"
                                type="primary"
                                @click="compile(scope.row)"
                                >编辑</el-button
                            >
                            <el-button
                                size="mini"
                                plain
                                icon="el-icon-close"
                                type="danger"
                                @click="cutoff(scope.row, scope.$index)"
                                >删除</el-button
                            >
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-pagination
                class="owl-margin-top-lg"
                layout="prev, pager, next"
                :total="1000"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'manage-presses',
    data() {
        return {
            presses: []
        }
    },
    methods: {
        compile(row) {
            this.$store.commit('setPressData', row) // 将这一行的数据临时存储到store
            this.$router.push('/compile/press') // 跳转到编辑视图进行编辑
        },
        cutoff(row, index) {
            this.$confirm('是否删除？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.$axios
                        .post('/cutoff/press', { id: row.id })
                        .then(res => {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                            this.presses.splice(index, 1) // 删除视图上的数据
                        })
                        .catch(err => {
                            this.$message({
                                type: 'error',
                                message: '删除失败，服务器错误'
                            })
                        })
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消删除'
                    })
                })
        }
    },
    mounted() {
        this.$axios
            .post('/get/presses')
            .then(res => {
                this.presses = res.data.data
            })
            .catch(err => {
                this.$message({
                    type: 'error',
                    message: '获取数据失败，服务器错误!'
                })
            })
    }
}
</script>

<style scoped></style>
