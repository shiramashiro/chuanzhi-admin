<template>
    <div class="owl-indents-form owl-margin-top-lg owl-font-size-md">
        <el-form
            size="mini"
            :label-position="'left'"
            :model="form"
            :rules="rules"
            label-width="85px"
        >
            <el-form-item label="用户ID">
                <el-input
                    v-model="form.userId"
                    placeholder="该订单属于哪个用户"
                ></el-input>
            </el-form-item>
            <el-form-item label="订单日期">
                <el-date-picker
                    value-format="yyyy-MM-dd HH:mm:ss"
                    format="yyyy-MM-dd HH:mm:ss"
                    v-model="form.date"
                    type="datetime"
                    placeholder="选择出版日期"
                >
                </el-date-picker>
            </el-form-item>
            <el-form-item label="总价">
                <el-input v-model="form.total"></el-input>
            </el-form-item>
            <el-form-item label="收货地址">
                <el-input v-model="form.receiveLocation"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="form.receivePhone"></el-input>
            </el-form-item>
            <el-form-item label="接收人">
                <el-input v-model="form.receiveName"></el-input>
            </el-form-item>
            <el-form-item label="订单状态">
                <el-select v-model="form.status">
                    <el-option
                        v-for="item in statusOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="状态类型">
                <el-select v-model="form.statusType">
                    <el-option
                        v-for="item in statusTypeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="支付方式">
                <el-select v-model="form.payWay" placeholder="请选择">
                    <el-option
                        v-for="item in payWayOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div class="submit-btn flex align-center justify-center">
            <el-button type="primary" size="mini" @click="handleClick">
                提交表单
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'owl-indents-form',
    props: {
        form: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            rules: {},
            payWayOptions: [
                {
                    value: '支付宝支付',
                    label: '支付宝支付'
                },
                {
                    value: '微信支付',
                    label: '微信支付'
                },
                {
                    value: '银行卡支付',
                    label: '银行卡支付'
                },
                {
                    value: '货到付款',
                    label: '货到付款'
                }
            ],
            statusOptions: [
                {
                    value: '正在处理',
                    label: '正在处理'
                },
                {
                    value: '正在运输',
                    label: '正在运输'
                }
            ],
            statusTypeOptions: [
                {
                    value: 'processing',
                    label: 'processing'
                },
                {
                    value: 'delivering',
                    label: 'delivering'
                }
            ]
        }
    },
    methods: {
        handleClick() {
            this.$emit('maintain', this.form)
        }
    }
}
</script>

<style scoped></style>
