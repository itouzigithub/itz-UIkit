<template>
	<div class="g-holder">
		<section>
			<h3>Toast 提示</h3>
			<h4>两个参数，第一个为提示内容，默认为“操作成功”；第二个为样式类型，true 表示成功，false 表示失败，默认为 true</h4>
			<h4>提示框 z-index: 999</h4>
			<div class="btn btn-sub" @click="toast('操作成功', true)">成功</div>
			<div class="btn btn-sub" @click="toast('操作失败', false)">失败</div>
			<pre><code v-hl>itz.toast()
itz.toast('操作失败', false)</code></pre>
		</section>
	</div>
</template>

<script>
	export default {
		methods: {
			toast (text, type) {
				itz.toast(text, type)
			}
		}
	}
</script>