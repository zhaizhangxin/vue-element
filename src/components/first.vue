<template>
	
	<div>
		<el-steps :space='200' :active='step' class='step'>
		<el-step title="活动信息" description=""></el-step>
		<el-step title="报名签到" description=""></el-step>
		<el-step title="分享设置" description=""></el-step>
		<el-step title="个性设置" description=""></el-step>
	</el-steps>
	</div>
</template>

<script>
	export default {
		'/first': 'first',
		data() {
			
		}
		
	}
</script>

<style scoped>
	.pin {
		text-align: center;
		color: #42B983;
	}
	
	h1,
	h2 {
		font-weight: normal;
	}
</style>