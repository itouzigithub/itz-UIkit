<template>
	<div class="g-holder">
		<section>
			<h3>通用图标</h3>
			<h4>通用图标位于 src/assets 文件夹，采用 svg 格式，兼顾 PC 和移动端</h4>
			<h4>可以直接通过 img 标签使用，也可以通过 class 名称引入，class 名与图标名称一致。如使用后者，约定用 i 标签，勿用其它标签，同时需要给 i 标签设置宽高且宽高需相等。另外，以 i 标签 + class 图标名称引用的图标不支持 IE8，会直接不显示，因此只有那些去掉图标也不会对用户体验造成重大影响的地方才采用这种方式</h4>
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
			<pre><code class="css" v-hl>i {
  display: inline-block;
  display: none\9;
  background-repeat: no-repeat;
  background-size: 100%;
}</code></pre>
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
	i {
		width: 20px;
		height: 20px;
	}
</style>