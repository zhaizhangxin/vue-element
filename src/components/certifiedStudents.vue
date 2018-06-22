<template>
	<el-container>
		<el-header>
			<el-row :gutter="20">
				<el-col :span="6" style="text-align: left;">
					<p class="grid-content">学生管理</p>
				</el-col>
				<el-col :span="18" style="text-align: right;">
					<span class="grid-content grid" style="color: #001380;">导出所有学生</span>
					<span class="grid-content grid" style="color: #3dc1ff;margin-left: 20px;margin-right: 20px;">＋导入学生</span>
					<div class="active">
						<el-input placeholder="学号/姓名" prefix-icon="el-icon-search"></el-input><el-button type="primary">搜索</el-button>
					</div>
				</el-col>
			</el-row>
		</el-header>

		<el-main>
			<el-tabs v-model="activeName">
				<el-tab-pane label="全部" name="first">
					<el-table :data="tableData" stripe border style="width: 100%">
						<el-table-column prop="username" label="姓名"> </el-table-column>
						<el-table-column prop="scholar" label="学号"> </el-table-column>
						<el-table-column prop="phone" label="手机号"> </el-table-column>
						<el-table-column prop="course" label="所选课程"> </el-table-column>
						<el-table-column prop="type" label="类型"> </el-table-column>
						<el-table-column prop="file" label="文件大小"> </el-table-column>
						<el-table-column prop="time" label="倒入时间"> </el-table-column>
						<el-table-column prop="status" label="状态"> </el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<el-button type="text" size="small">编辑</el-button>
							</template>
						</el-table-column>
					</el-table>
				</el-tab-pane>
				<el-tab-pane label="已认证" name="second">
					<el-table :data="verified" stripe border style="width: 100%">
						<el-table-column prop="username" label="姓名"> </el-table-column>
						<el-table-column prop="scholar" label="学号"> </el-table-column>
						<el-table-column prop="phone" label="手机号"> </el-table-column>
						<el-table-column prop="course" label="所选课程"> </el-table-column>
						<el-table-column prop="type" label="类型"> </el-table-column>
						<el-table-column prop="file" label="文件大小"> </el-table-column>
						<el-table-column prop="time" label="倒入时间"> </el-table-column>
						<el-table-column prop="status" label="状态"> </el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<el-button type="text" size="small">编辑</el-button>
							</template>
						</el-table-column>
					</el-table>
				</el-tab-pane>
				<el-tab-pane label="未认证" name="third">
					<el-table :data="certified" stripe border style="width: 100%">
						<el-table-column prop="username" label="姓名"> </el-table-column>
						<el-table-column prop="scholar" label="学号"> </el-table-column>
						<el-table-column prop="phone" label="手机号"> </el-table-column>
						<el-table-column prop="course" label="所选课程"> </el-table-column>
						<el-table-column prop="type" label="类型"> </el-table-column>
						<el-table-column prop="file" label="文件大小"> </el-table-column>
						<el-table-column prop="time" label="倒入时间"> </el-table-column>
						<el-table-column prop="status" label="状态"> </el-table-column>
						<el-table-column label="操作">
							<template slot-scope="scope">
								<el-button type="text" size="small">编辑</el-button>
							</template>
						</el-table-column>
					</el-table>
				</el-tab-pane>
			</el-tabs>
		</el-main>

	</el-container>

</template>

<script>
	export default {
		'/certifiedStudents': 'certifiedStudents',
		data() {
			return {
				num: '421',
				activeName: 'first',
				tableData: [{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '已认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					}
				],
				verified: [{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '已认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					}
				],
				certified: [{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '已认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					},
					{
						username: '张宁宁',
						scholar: '18610105535',
						phone: '18615929080',
						course: '12',
						type: '视频',
						file: '562.6M',
						time: '2018.05.06',
						status: '未认证',
						operating: '编辑'
					}
				]
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
	
	.grid-content {
		line-height: 30px;
	}
	
	.el-container.is-vertical {
		margin-top: 4%;
		margin: auto;
		width: 80%;
	}
	
	.el-input {
		width: 74%;
	}
	
	.active {
		display: inline-block;
		/*width: 30%;*/
	}
	
	.el-button--primary {
		background-color: #ff9800;
		border-color: #ff9800;
	}
	
	.has-gutter {
		text-align: center;
	}
	
	.el-table_1_column_1 {
		color: #3dc1ff;
	}
</style>