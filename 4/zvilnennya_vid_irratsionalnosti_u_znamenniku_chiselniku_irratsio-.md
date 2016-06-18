# Звільнення від ірраціональності у знаменнику (чисельнику) ірраціонального дробу

<p>Часто виникає необхідність звільнитись від ірраціональності у знаменнику (чисельнику) дробово-ірраціонального виразу.</p>

<p>Це можна забезпечити, скориставшись основною властивістю дробу, – <b>помножити чисельник та знаменник на доповнюючий множник</b> для знаменника (чисельника):</p>
<div class="space"></div>
<p align="center">$$\dfrac{\overbrace{M(x)}^\text{ірраціональний вираз}}{\underbrace{N(x)}_\text{ірраціональний вираз}}=\dfrac{\overbrace{M(x)\cdot\bar N(x)}^\text{ірраціональний вираз}}{\underbrace{N(x)\cdot\bar N(x)}_\text{раціональний вираз}}=\dfrac{\overbrace{M(x)\cdot\bar M(x)}^\text{раціональний вираз}}{\underbrace{N(x)\cdot\bar M(x)}_\text{ірраціональний вираз}}.$$</p>
<div class="space"></div>

<div class="fluidMedia">
<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/xRrjEfFLwGo" frameborder="0" allowfullscreen></iframe>
</div>
<div class="popup">
</div>



<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">

<p>Звільнитися від ірраціональності у знаменниках виразу $$\dfrac{1}{\sqrt7}+\dfrac{25}{\sqrt[3]{10}}.$$</p>

<p>
<ul class="nav-tab" id="mytab">
<button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
<button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
<button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>

<div id="mytab" class="tab-content">
  <div class="tab-pane" id="decision">
<p><b><i>Розв’язок.</i> </b> </p>
<p>Для першого знаменника $$\sqrt{7}$$ доповнюючим виразом буде $$\sqrt{7}$$, бо $$\sqrt{7}\cdot\sqrt{7}=7$$ — раціональний вираз. Для другого знаменника $$\sqrt[3]{10}$$ доповнюючим виразом буде $$\sqrt[3]{10^2}$$, бо  $$\sqrt[3]{10}\cdot\sqrt[3]{10^2}=10$$ — раціональний вираз.</p>
<p>Таким чином:</p>
<p align="center">$$\dfrac{1}{\sqrt7}+\dfrac{25}{\sqrt[3]{10}}=\dfrac{1\cdot\sqrt7}{\sqrt7\cdot\sqrt7}+\dfrac{25\cdot\sqrt[3]{10^2}}{\sqrt[3]{10}\cdot\sqrt[3]{10^2}}=\dfrac{\sqrt7}{7}+\dfrac{5\sqrt[3]{10^2}}{10}.$$</p>
  </div>
  <div class="tab-pane" id="answer"><p><b>Вiдповiдь.</b> $$\dfrac{\sqrt7}{7}+\dfrac{5\sqrt[3]{10^2}}{10}.$$</p>
  </div>
  <div class="tab-pane" id="hide"></div>
</div>
</p>
</div>
</div>
</div>

<div class="space"></div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question text="">
        <p>Звільніться від ірраціональності у знаменнику дробу: $$\dfrac{1}{\sqrt{7}-2}$$</p>
        <answer> $$\dfrac{-\sqrt{7}-2}{4}$$</answer>
        <answer correct> $$\dfrac{\sqrt{7}+2}{3}$$</answer>
        <answer> $$\dfrac{\sqrt{7}+2}{2}$$</answer>
        <answer> $$1$$</answer>
        <explanation>
        Домножимо знаменник дробу на доповнюючий множник: $$\dfrac{\sqrt{7}+2}{(\sqrt{7}-2)(\sqrt{7}+2)}=\dfrac{\sqrt{7}+2}{3}.$$
        </explanation>
    </question>
    <question text="">
        <p>Звільніться від ірраціональності у знаменнику дробу: $$\dfrac{14}{\sqrt[5]{(x^3+1)^2}}$$</p>
        <answer correct> $$\dfrac{14\sqrt[5]{(x^3+1)^3}}{x^3+1}$$</answer>
        <answer> $$\dfrac{14\sqrt[5]{(x^3+1)^2}}{x^3+1}$$</answer>
        <answer> $$\dfrac{14\sqrt[3]{(x^3+1)^3}}{x^3+1}$$</answer>
        <answer> $$\dfrac{14\sqrt[5]{(x^3+1)^4}}{x^3+1}$$</answer>
        <explanation>
         Домножимо знаменник дробу на доповнюючий множник: $$\dfrac{14}{\sqrt[5]{(x^3+1)^2}} = \dfrac{14\sqrt[5]{(x^3+1)^3}}{\sqrt[5]{(x^3+1)^2}\sqrt[5]{(x^3+1)^3}} = \dfrac{14\sqrt[5]{(x^3+1)^3}}{x^3+1}.$$
        </explanation>
    </question>
</quiz>