<!-- https://www.bootcdn.cn/botui/ -->
<link href="https://cdn.bootcss.com/botui/0.3.9/botui-theme-default.css" rel="stylesheet">
<link href="https://cdn.bootcss.com/botui/0.3.9/botui.min.css" rel="stylesheet">

{% raw %}
<!-- 因为vue和botui更新导至bug,现将对话移至js下的botui中配置 -->
<div class="entry-content">
  <div class="moe-cungudafa" style="text-align:center; font-size: 50px; margin-bottom: 20px;">姑的小屋</div>
  <div id="hello-cungudafa" class="popcontainer" style="min-height: 300px; padding: 2px 6px 4px; background-color: rgb(36, 200, 255); border-radius: 10px;">
    <center>
    <p>
    </p>
    <h4>
    与&nbsp;<ruby>
    cungduafa&nbsp;<rp>
    （</rp>
    <rt>
    真（ま）白（しろ）</rt>
    <rp>
    ）</rp>
    </ruby>
    对话中...</h4>
    <p>
    </p>
    </center>
    <bot-ui></botui>
  </div>
</div>
<script src="/js/botui.js"></script>
<script>
 bot_ui_ini()
</script>
{% endraw %}