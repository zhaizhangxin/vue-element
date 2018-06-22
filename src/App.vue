<template>
	<div id="app">
		<el-row :gutter="20" class="head">
			<el-col :span="6" style="margin-top: 8px;">
				<div class="grid-content">
					<img src="./assets/binder.jpg" class="logo" />
				</div>
			</el-col>
			<el-col :span="14">
				<el-menu :default-active="activeIndex2" router class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#101010" text-color="#d7d7d7" active-text-color="#fff">
					<el-menu-item index="1">课程中心</el-menu-item>
					<el-menu-item index="2">数据中心</el-menu-item>
					<el-menu-item index="3" :route="{path: '/certifiedStudents'}">校管中心</el-menu-item>
					<el-menu-item index="4">系统设置</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="4">
				<div class="grid-content" style="margin-top: 12px;">
					<img src="./assets/addr.png" class="headPic" />
					<el-dropdown trigger="click" placement="bottom">
						<span class="el-dropdown-link">
							{{username}}<i class="el-icon-arrow-down el-icon--right"></i>
      					</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>黄金糕</el-dropdown-item>
							<el-dropdown-item>狮子头</el-dropdown-item>
							<el-dropdown-item>螺蛳粉</el-dropdown-item>
							<el-dropdown-item>双皮奶</el-dropdown-item>
							<el-dropdown-item>蚵仔煎</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</el-col>
		</el-row>

		<el-container>
			<el-aside width="200px">
				<el-col :span="12" style="width: 100%;">
					<el-menu :default-openeds="['1', '3']" router background-color="#262d55" text-color="rgba(181,192,255,0.5)" active-text-color="#3dc1ff"> 
						<el-submenu index="1">
							<template slot="title"><i class="el-icon-message"></i>用户管理</template>
							<el-menu-item-group>
								<el-menu-item index="1-1" :route="{path:'/certifiedStudents'}">学生管理</el-menu-item>
								<el-menu-item index="1-2">教师管理</el-menu-item>
								<el-menu-item index="1-3">班次管理</el-menu-item>
								<el-menu-item index="1-4">选课管理</el-menu-item>
								<el-menu-item index="1-5">文档管理</el-menu-item>
								<el-menu-item index="1-6">标签管理</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title"><i class="el-icon-menu"></i>权限管理</template>
							<el-menu-item-group>
								<el-menu-item index="2-1">菜单管理</el-menu-item>
								<el-menu-item index="2-2">角色管理</el-menu-item>
								<el-menu-item index="2-3">权限管理</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title"><i class="el-icon-setting"></i>门户页面管理</template>
							<el-menu-item-group>
								<el-menu-item index="3-1">页面内容</el-menu-item>
								<el-menu-item index="3-2">学校管理</el-menu-item>
								<el-menu-item index="3-3">公告</el-menu-item>
								<el-menu-item index="3-4">新闻</el-menu-item>
								<el-menu-item index="3-5">课程推荐</el-menu-item>
								<el-menu-item index="3-6">课程分类</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="4">
							<template slot="title" class="temp"><i class="el-icon-menu"></i>问题管理</template>
							<el-menu-item-group>
								<el-menu-item index="4-1">帮助中心</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-col>
			</el-aside>
			<el-main style="margin-top: 2%;">
				<router-view></router-view>
			</el-main>
		</el-container>

	</div>
</template>

<script scoped>
	export default {
		name: 'app',
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1',
				username: '钱多多'
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style>
	body{
		overflow: hidden;
		background-color: rgba(237,239,251,0.5);
	}
	html,
	body,
	div,
	ul,
	li,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	dl,
	dt,
	dd,
	ol,
	form,
	input,
	textarea,
	th,
	td,
	select {
		margin: 0;
		padding: 0;
		font-family: "Microsoft YaHei";
		font-size: 14px;
		color: #333;
		list-style: none;
	}
	
	html,
	body {
		height: 100%;
	}
	
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: normal;
	}
	
	ul,
	ol {
		list-style: none;
	}
	
	input,
	textarea {
		outline: none;
		border: none;
	}
	
	img {
		border: none;
		vertical-align: middle;
	}
	
	a {
		text-decoration: none;
		/*color: #232323*/
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		height: 100%;
	}
	
	.head {
		background-color: #101010;
	}
	.logo {
		width: 270px;
		height: 42px;
	}
	
	.el-dropdown-link {
		color: #E5E5E5;
		cursor: pointer;
	}
	
	.headPic {
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}
</style>