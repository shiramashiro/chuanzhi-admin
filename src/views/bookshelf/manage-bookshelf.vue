<template>
    <div class="manage-bookshelf">
        <div class="breadcrumb owl-margin-tb-md owl-border-radius-sm">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }"
                    >首页</el-breadcrumb-item
                >
                <el-breadcrumb-item>管理书籍</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container owl-margin-top-lg">
            <div class="owl-margin-bm-lg flex owl-float-right">
                <el-button
                    type="primary"
                    size="mini"
                    @click="$router.push('/append/bookshelf')"
                    >添加书籍</el-button
                >
            </div>
            <div class="container-wrap">
                <el-table :data="tableData" stripe border style="width: 100%">
                    <el-table-column type="index" width="60"> </el-table-column>
                    <el-table-column prop="title" width="300" label="书籍名">
                    </el-table-column>
                    <el-table-column
                        prop="press"
                        width="150"
                        label="出版社"
                    ></el-table-column>
                    <el-table-column
                        width="130"
                        prop="pressDate"
                        label="出版日期"
                    >
                    </el-table-column>
                    <el-table-column
                        sortable
                        width="100"
                        prop="price"
                        label="单价"
                    >
                    </el-table-column>
                    <el-table-column
                        sortable
                        width="100"
                        prop="discount"
                        label="折扣"
                    >
                    </el-table-column>
                    <el-table-column prop="types" width="150" label="分类">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作">
                        <template slot-scope="scope">
                            <el-button
                                @click="compile(scope.row)"
                                size="mini"
                                plain
                                icon="el-icon-search"
                                type="primary"
                                >编辑</el-button
                            >
                            <el-button
                                @click="cutoff(scope.row, scope.$index)"
                                type="danger"
                                plain
                                icon="el-icon-close"
                                size="mini"
                                >删除</el-button
                            >
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <el-pagination
            class="owl-margin-top-lg"
            layout="prev, pager, next"
            :total="1000"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'manage-bookshelf',
    data() {
        return {
            tableData: []
        }
    },
    /**
     * 初始化时，从后台获取所有书籍
     */
    mounted() {
        this.$axios
            .post('/get/bookshelf')
            .then(res => {
                if (res.data.code === 200) {
                    this.tableData = res.data.data
                } else {
                    this.$message({
                        type: 'error',
                        message: '获取数据失败，服务器错误!'
                    })
                }
            })
            .catch(err => {
                this.$message({
                    type: 'error',
                    message: '获取数据失败，服务器错误！'
                })
            })
    },
    methods: {
        /**
         * 编辑一行数据
         */
        compile(row) {
            this.$store.commit('setBookshelvesData', row) // 将这一行的数据临时存储早store
            this.$router.push('/compile/bookshelf') // 之后跳转到编辑视图进行编辑
        },
        /**
         * 删除一行数据
         */
        cutoff(row, index) {
            this.$confirm('是否删除？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.$axios
                        .post('/cutoff/bookshelf', { id: row.id })
                        .then(res => {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                            this.tableData.splice(index, 1) // 删除视图上的数据
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
    }
}
</script>

<style lang="css" scoped>
/deep/ .cell {
    display: -webkit-box;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
