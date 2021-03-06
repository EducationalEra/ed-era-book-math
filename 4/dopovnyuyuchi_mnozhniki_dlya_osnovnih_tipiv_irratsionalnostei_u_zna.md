# Доповнюючі множники для основних типів ірраціональностей у знаменнику (чисельнику)

<p>Перший рядок – доповнюючий множник знаходимо шляхом доповнення до цілого степеня, а наступні три виводимо з формул скороченого множення.</p>
<div class="space"></div>

<!--<style type="text/css">
.tg  {border: 1px solid #FAAF00;border-spacing:0;}
.tg td{border: 1px solid #FAAF00;font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{border: 1px solid #FAAF00;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-yw4l{vertical-align:center}
</style>-->
<table class="tg">
  <tr>
    <th class="tg-yw4l">Вираз</th>
    <th class="tg-yw4l">Доповнюючий множник</th>
    <th class="tg-yw4l">Результат множення</th>
    <th class="tg-yw4l">Чому саме такий вигляд доповнюючого множника?</th>
  </tr>
  <tr>
    <td class="tg-yw4l">$$\sqrt[n]{a^m} = a^{\frac{m}{n}} $$</td>
    <td class="tg-yw4l">$$\sqrt[n]{a^{kn-m}} = a^{\frac{kn-m}{n}}, \\ k \gt \dfrac{m}{n}, k \in \mathbb{N} $$</td>
    <td class="tg-yw4l">$$a^k, \thinspace k \in \mathbb{N} $$</td>
    <td class="tg-yw4l">Доповнення до цілого степеня</td>
  </tr>
  <tr>
    <td class="tg-yw4l">$$\sqrt{a} + \sqrt{b} $$</td>
    <td class="tg-yw4l">$$\sqrt{a} - \sqrt{b}$$</td>
    <td class="tg-yw4l">$$a-b$$</td>
    <td class="tg-yw4l">Формула різниці квадратів</td>
  </tr>
  <tr>
    <td class="tg-yw4l">$$\sqrt[3]{a} + \sqrt[3]{b} $$</td>
    <td class="tg-yw4l">$$\sqrt[3]{a^2} - \sqrt[3]{ab} + \sqrt[3]{b^2} $$</td>
    <td class="tg-yw4l">$$a+b$$</td>
    <td class="tg-yw4l">Формула суми кубів</td>
  </tr>
  <tr>
    <td class="tg-yw4l">$$\sqrt[3]{a} - \sqrt[3]{b} $$</td>
    <td class="tg-yw4l">$$\sqrt[3]{a^2} + \sqrt[3]{ab} + \sqrt[3]{b^2} $$</td>
    <td class="tg-yw4l">$$a-b$$</td>
    <td class="tg-yw4l">Формула різниці кубів</td>
  </tr>
</table>

<!--<div class="space"><p align="center"><img align="middle" class="image" src="../pics/m212.png"/></p></div>-->

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Звільнитися від ірраціональності у знаменнику дробу:<br>a) $$\dfrac{25}{\sqrt[6]{x^2+x+1}}$$; б) $$\dfrac{\sqrt x}{\sqrt{x}+1}$$; в) $$\dfrac{x}{\sqrt[3]{2x+5}+3}$$.</p>

<p>
<ul class="nav-tab" id="mytab">
    <button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
    <button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
    <button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
    <div class="tab-pane" id="decision">
<p><b><i>Розв’язок.</i> </b> </p>
<p>a) $$\dfrac{25}{\sqrt[6]{x^2+x+1}}=\dfrac{25\cdot\sqrt[6]{(x^2+x+1)^5}}{\sqrt[6]{x^2+x+1}\cdot\sqrt[6]{(x^2+x+1)^5}}=\dfrac{25\cdot\sqrt[6]{(x^2+x+1)^5}}{x^2+x+1}$$;</p>
<p>б) $$\dfrac{\sqrt x}{\sqrt{x}+1}=\dfrac{\sqrt{x}\cdot(\sqrt{x}-1)}{(\sqrt{x}+1)\cdot(\sqrt{x}-1)}=\dfrac{\sqrt{x}\cdot(\sqrt{x}-1)}{x-1}$$;</p>
<p>в) $$\dfrac{x}{\sqrt[3]{2x+5}+3} = \dfrac{x}{\sqrt[3]{2x+5}+\sqrt[3]{27}}=</p> 
<p>= \dfrac{x\cdot(\sqrt[3]{(2x+5)^2}-\sqrt[3]{27(2x+5)}+\sqrt[3]{27^2})}{(\sqrt[3]{2x+5}+\sqrt[3]{27})\cdot(\sqrt[3]{(2x+5)^2}-\sqrt[3]{27(2x+5)}+\sqrt[3]{27^2})} =$$</p>
<p>$$= \dfrac{x\cdot(\sqrt[3]{(2x+5)^2}-3\sqrt[3]{(2x+5)}+9)}{2x+5+27} = \dfrac{x\cdot(\sqrt[3]{(2x+5)^2}-3\sqrt[3]{(2x+5)}+9)}{2x+32}$$.</p>
    </div>
    <div class="tab-pane" id="answer"><p><b>Вiдповiдь.</b><br>a)  $$\dfrac{25\cdot\sqrt[6]{(x^2+x+1)^5}}{x^2+x+1}$$;  б) $$\dfrac{\sqrt{x}\cdot(\sqrt{x}-1)}{x-1}$$;  в) $$\dfrac{x\cdot(\sqrt[3]{(2x+5)^2}-3\sqrt[3]{(2x+5)}+9)}{2x+32}$$.</p>
    </div>
    <div class="tab-pane" id="hide"></div>
</div>
</p>
</div>
</div>
</div>
<div class="space"></div>