<template>
    <div class="owl-manage-indents">
        <div class="container owl-margin-top-lg">
            <div class="container-wrap">
                <el-table :data="data" stripe border style="width: 100%">
                    <el-table-column type="expand" label="展开" width="60">
                        <template slot-scope="props">
                            <div class="owl-font-size-lg owl-margin-tb-sm">
                                订单详细
                            </div>
                            <div
                                class="profile-info owl-card owl-padding-sm owl-border-radius-sm"
                            >
                                <el-form
                                    label-position="left"
                                    inline
                                    class="demo-table-expand"
                                >
                                    <el-form-item label="用户ID：">
                                        <span>{{ props.row.userId }}</span>
                                    </el-form-item>
                                    <el-form-item label="下单日期：">
                                        <span>{{ props.row.date }}</span>
                                    </el-form-item>
                                    <el-form-item label="总价：">
                                        <span>{{ props.row.total }}</span>
                                    </el-form-item>
                                    <el-form-item label="收货地址：">
                                        <span>
                                            {{ props.row.receiveLocation }}
                                        </span>
                                    </el-form-item>
                                    <el-form-item label="手机号：">
                                        <span>
                                            {{ props.row.receivePhone }}
                                        </span>
                                    </el-form-item>
                                    <el-form-item label="收货人：">
                                        <span>{{ props.row.receiveName }}</span>
                                    </el-form-item>
                                    <el-form-item label="订单状态：">
                                        <el-tag
                                            :type="
                                                props.row.statusType ==
                                                'processing'
                                                    ? 'warning'
                                                    : 'success'
                                            "
                                            size="mini"
                                        >
                                            {{ props.row.status }}
                                        </el-tag>
                                    </el-form-item>
                                    <el-form-item label="支付方式：">
                                        <span>{{ props.row.payWay }}</span>
                                    </el-form-item>
                                    <el-form-item label="状态类型：">
                                        <span>{{ props.row.statusType }}</span>
                                    </el-form-item>
                                </el-form>
                            </div>
                            <div class="owl-font-size-lg owl-margin-tb-sm">
                                购物车商品
                            </div>
                            <div
                                class="owl-card owl-padding-sm owl-border-radius-sm"
                            >
                                <el-table
                                    :header-cell-style="{
                                        fontSize: '11px',
                                        padding: '5px 0'
                                    }"
                                    :cell-style="{
                                        fontSize: '11px',
                                        padding: '5px 0'
                                    }"
                                    border
                                    :data="props.row.trolley"
                                    style="width: 100%"
                                >
                                    <el-table-column
                                        prop="title"
                                        label="书籍名"
                                    ></el-table-column>
                                    <el-table-column
                                        prop="price"
                                        label="单价"
                                    ></el-table-column>
                                    <el-table-column
                                        prop="num"
                                        label="数量"
                                    ></el-table-column>
                                    <el-table-column
                                        prop="total"
                                        label="总价"
                                    ></el-table-column>
                                </el-table>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="userId"
                        label="用户ID"
                        width="180"
                    ></el-table-column>
                    <el-table-column
                        label="下单日期"
                        prop="date"
                        width="150"
                    ></el-table-column>
                    <el-table-column
                        prop="total"
                        label="总价"
                        sortable
                        width="85"
                    ></el-table-column>
                    <el-table-column
                        prop="receiveLocation"
                        label="收货地址"
                        width="180"
                    ></el-table-column>
                    <el-table-column
                        prop="receivePhone"
                        label="手机号"
                        width="120"
                    ></el-table-column>
                    <el-table-column
                        prop="receiveName"
                        label="收货人"
                        width="100"
                    ></el-table-column>
                    <el-table-column
                        prop="payWay"
                        label="支付方式"
                        width="100"
                    ></el-table-column>
                    <el-table-column label="订单状态" prop="status" width="100">
                        <template slot-scope="scope">
                            <el-tag
                                :type="
                                    scope.row.statusType == 'processing'
                                        ? 'warning'
                                        : 'success'
                                "
                                size="mini"
                            >
                                {{ scope.row.status }}
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                                @click="handleCompile(scope.row, compileRouter)"
                                size="mini"
                                plain
                                icon="el-icon-search"
                                type="primary"
                                >编辑</el-button
                            >
                            <el-button
                                @click="handleCutoff(scope.row, scope.$index)"
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
    </div>
</template>

<script>
export default {
    name: 'owl-manage-indents',
    props: {
        data: {
            type: Array,
            required: true
        },
        compileRouter: {
            type: String,
            required: true
        }
    },
    methods: {
        handleCompile(row, router) {
            this.$emit('handle-compile', {
                row: row,
                router: router
            })
        },
        handleCutoff(row, index) {
            this.$emit('handle-cutoff', {
                row: row,
                index: index
            })
        }
    }
}
</script>

<style scoped>
/deep/ .cell {
    display: -webkit-box;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
}

.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
</style>
