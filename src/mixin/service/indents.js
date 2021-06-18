/**
 * 抽取订单管理的公共业务
 *
 * @author 郑人滏
 * @version 1.0
 * @since 2021年6月18日10:39:50
 */
export const indentsService = {
    data() {
        return {
            indents: []
        }
    },
    methods: {
        getIndents(statusType) {
            this.$axios
                .post('/get/indents', { statusType: statusType })
                .then(res => {
                    if (res.data.code === 200) {
                        this.indents = res.data.data
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
        cutoff(row, index) {
            this.$confirm('是否删除？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.$axios
                        .post('/cutoff/indent', { id: row.id })
                        .then(res => {
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                            this.indents.splice(index, 1) // 删除视图上的数据
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
        },
        /**
         * 编辑一行数据
         */
        compile(row, push) {
            this.$store.commit('setIndentData', row) // 将这一行的数据临时存储早store
            this.$router.push(push) // 之后跳转到编辑视图进行编辑
        }
    }
}
