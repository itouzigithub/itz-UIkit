<template>
	<div class="g-holder">
		<section>
			<h3>提示气泡框</h3>
			<h4>依赖 <mark>itz-ui.css</mark> 和 <mark>itz-ui.js</mark></h4>
			<h4>只需给需要 hover 提示的节点添加 tooltip 属性即可</h4>
			<div class="btn btn-sm" tooltip="提示内容">hover</div>
			<div class="btn btn-sm ml30" tooltip="宽度自适应，好棒">hover</div>
			<pre><code class="html" v-hl>&lt;div class="btn btn-sm" tooltip="提示内容">hover&lt;/div></code></pre>
		</section>
	</div>
</template>