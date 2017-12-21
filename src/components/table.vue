<template>
  <div class="g-holder">
    <section>
      <h3>表格样式规范</h3>
      <h4>1. 表头需与内容一 一对应，且保持词语完整不过行。不允许出现无内容的空表头</h4>
      <h4>2. 所有内容左对齐</h4>

      <table class="table">
        <thead>
          <tr>
            <th width="40%">项目名称</th>
            <th width="20%">收益</th>
            <th width="20%">还款方式</th>
            <th width="20%">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>省心计划</td>
            <td>9.00%</td>
            <td>按月付息</td>
            <td>
              <div class="btn btn-main btn-sm">立即投资</div>
            </td>
          </tr>
          <tr>
            <td>省心计划</td>
            <td>9.00%</td>
            <td>按月付息</td>
            <td>
              <div class="btn btn-main btn-sm">立即投资</div>
            </td>
          </tr>
          <tr>
            <td>省心计划</td>
            <td>9.00%</td>
            <td>按月付息</td>
            <td>
              <div class="btn btn-main btn-sm">立即投资</div>
            </td>
          </tr>
        </tbody>
      </table>

      <pre><code class="html" v-hl>&lt;table class="table">
    &lt;thead>
      &lt;tr>
        &lt;th width="40%">项目名称&lt;/th>
        &lt;th width="20%">收益&lt;/th>
        &lt;th width="20%">还款方式&lt;/th>
        &lt;th width="20%">操作&lt;/th>
      &lt;/tr>
    &lt;/thead>
    &lt;tbody>
      &lt;tr>
        &lt;td>省心计划&lt;/td>
        &lt;td>9.00%&lt;/td>
        &lt;td>按月付息&lt;/td>
        &lt;td>
          &lt;div class="btn btn-main btn-sm">立即投资&lt;/div>
        &lt;/td>
      &lt;/tr>
    &lt;/tbody>
  &lt;/table></code></pre>
    </section>

    <section>
    	<h3>筛选状态</h3>
    	<img src="../assets/table.jpg" width="100%">
    </section>
  </div>
</template>