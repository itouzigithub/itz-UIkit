<template>
	<div class="g-holder">
		<section>
			<h3>通用图标</h3>
			<h4>通用图标位于 src/assets 文件夹，采用 svg 格式，兼顾 PC 和移动端，同时可以升级为字体图标</h4>
			<h4>可以直接通过 img 标签引用图片，也可以通过 className 引入，className 与下列图标名称一致</h4>
			<h4>采用 className 时，图片已经以 base64 的形式写入了 background-image</h4>
			<h4>采用 className 时，约定用 i 标签，宽高默认为 20px</h4>
			<h4>并非所有图标都是通用图标，比如弹框的白色关闭按钮</h4>
			<div class="flex" style="margin-bottom: 20px">
			  <div class="item">
					<i class="icon-angle-left"></i>
					<span>icon-angle-left</span>
				</div>
				<div class="item">
					<i class="icon-angle-right"></i>
					<span>icon-angle-right</span>
				</div>
				<div class="item">
					<i class="icon-angle-down"></i>
					<span>icon-angle-down</span>
				</div>
				<div class="item">
					<i class="icon-angle-up"></i>
					<span>icon-angle-up</span>
				</div>
				<div class="item">
					<i class="icon-spinner"></i>
					<span>icon-spinner</span>
				</div>
			</div>
			<div class="flex">
				<div class="item">
					<i class="icon-times"></i>
					<span>icon-times</span>
				</div>
			</div>
			<pre><code class="html" v-hl>&lt;img src="icon-angle-down.svg" width="20px">
&lt;i class="icon-angle-down" style="width: 20px; height: 20px">&lt;/i></code></pre>

			<pre><code class="css" v-hl>// 源码参考
i {
  display: inline-block;
  display: none\9;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 20px;
  height: 20px;
}</code></pre>
		</section>

		<section>
			<h3>开发注意</h3>
			<h4>icon 是以 base64 形式写在 itz-ui.css 文件中的，请勿随意添加非通用的图标，避免 itz-ui.css 体积膨胀</h4>
			<h4>如果有其他公用图标也需要采用 className 的方式引用，建议额外写在单独的 CSS 文件中，以便于按需引用</h4>
		</section>
	</div>
</template>

<style scoped>
	.item {
		width: 20%;
		height: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
</style>