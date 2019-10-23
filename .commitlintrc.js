module.exports = {
	parserPreset: {
		parserOpts: {
			headerPattern: /^(\w*)(?:\((.*)\))?:\s(.*)$/,
			headerCorrespondence: ['type', 'scope', 'subject'],
		},
	},
	// 0:disable 1:warning 2:error
	rules: {
		'type-empty': [2, 'never'],
		'type-case': [2, 'always', 'lower-case'],//首字母必须小写
		'subject-empty': [2, 'never'],
		//提交类型限制：
		//feat:新功能feature，fix:修复bug,update:更新，docs:仅仅修改了文档，如readme.md,style:仅仅是样式没有改变diamante逻辑
		//refactor:代码重构，或者修复bug,没有增加新功能，test:测试用例，单元测试，集成测试等等
		//chore:构建配置相关改变构建流程，或者增加依赖库，工具
		// revert:回滚到某一个版本
		// pref:性能相关
		'type-enum': [
			2,
			'always',
			['feat', 'fix', 'update', 'docs', 'pref', 'style', 'refactor', 'test', 'chore', 'release', 'revert'],
		],
	},
};
