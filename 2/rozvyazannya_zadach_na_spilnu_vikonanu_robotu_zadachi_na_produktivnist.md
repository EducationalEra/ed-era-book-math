# Розв’язання задач на спiльну виконану роботу (задачi на продуктивнiсть)

<p>У ЗНО часто зустрiчаються задачi, в яких йде мова про виконання спiльної роботи: копання грядок, виготовлення деталей, заповнення басейну водою з декiлькох труб тощо.
</p>

<p>У всiх цих задачах використовуються однi й тi самi три параметри:</p>

* об’єм роботи: $$S;$$
* час виконання роботи: $$t;$$
* продуктивнiсть: $$v$$ (швидкiсть виконання).

<div class="space"><p>Цi параметри пов’язанi спiввiдношенням:</p>

<p align="center"><b>Об’єм роботи</b> = <b>продуктивність $$\times$$ час $$\Longleftrightarrow$$ $$\boldsymbol{S=v\cdot t}.$$</p></div>


<p>Якщо об’єм роботи не вказаний – його краще прийняти рівним одиниці для спрощення розрахунків.</p>

<div class="space"><p>Ключовим знанням для розв’язку задач на продуктивність є те, що <b>швидкість спільної роботи рівна сумі індивідуальних швидкостей виконання робіт:</b>

<p align="center">$$v_{\Sigma} = v_{1} + v_{2} = \dfrac{S}{t_{1}} + \dfrac{S}{t_{2}}.$$</p></div>

<div class="space">
<div class="fluidMedia">
<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/euXvbUuqIGA" frameborder="0" allowfullscreen></iframe>
</div>
<div class="popup">
</div>
</div>

<div class="space"></div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Двi труби заповнюють басейн за $$12$$ хвилин. Перша труба працюючи окремо може заповнити басейн за $$20$$ хвилин. За скiльки заповнить басейн друга труба?</p>
<p>
<ul class="nav-tab" id="mytab">
<button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
<button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
<button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
  <div class="tab-pane" id="decision">
<p>Приймаємо об'єм роботи  $$S=1$$ (наповнити повний басейн). Час заповнення басейну першою трубою - $$t_1 = 20$$ хвилин, отже її продуктивність рівна $$v_{1} = \dfrac{S}{t_{1}} = \dfrac{1}{20}$$. Нехай друга труба заповнює басейн за $$t_2 = x$$ хвилин, отже її продуктивність рівна $$v_{2} = \dfrac{S}{t_{2}} = \dfrac{1}{x}.$$</p>
<p>Час спільної роботи дорівнює $$t_{\Sigma} = 12$$ хвилин, тоді спільна продуктивність рівна $$v_{\Sigma} = \dfrac{S}{t_{\Sigma}} = \dfrac{1}{12}$$, звідки випливає наступне рівняння:</p>
<p align="center">$$v_{\Sigma} = v_{1} + v_{2} \Longrightarrow \dfrac{1}{12} = \dfrac{1}{20} + \dfrac{1}{x}.$$</p>
<p>Звідки $$x = 30.$$</p>
  </div>
  <div class="tab-pane" id="answer"><p><b>Вiдповiдь.</b> $$30$$ хвилин.</p> </div>
  <div class="tab-pane" id="hide"></div>
</div>
</p>
</div>
</div>
</div>

<div class="fluidMedia">
<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/2aWKX3qhCHs" frameborder="0" allowfullscreen></iframe>
</div>
<div class="popup">
</div>

<div class="space"></div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question text="">
        <p>За який час менша труба самостійно заповний весь резервуар? (відповідь округліть до найближчого цілого числа)</p>
        <answer>57 c</answer>
        <answer>109 c</answer>
        <answer>237 c</answer>
        <answer correct>119 c</answer>
        <answer>432 c</answer>
    <explanation>
    <p>Нехай $$V$$ — об'єм склянки. $$t$$ — час заповнення великою трубкою, який складає $$38,77$$ <i>с</i>, $$x$$ — час заповнення малою трубкою. Тоді $$S_B = \dfrac{V}{t}$$ — швидкість заповнення великою трубкою, а $$S_M = \dfrac{V}{x}$$ — швидкість заповнення малою трубкою.</p>
    <p>Мала трубка заповнює частину об'єму за час $$38,77$$ <i>с</i>, іншу частину цього об'єму трубки заповнюють разом за $$19,71$$ <i>с</i>.<br>З цих даних складаємо рівняння:</p>
    <p>$$V = 38,77\cdot S_M + 19,71\cdot(S_M+S_B)$$.</p>
    <p>$$V=38,77\cdot\dfrac{V}{x}+19,71\cdot(\dfrac{V}{x}+\dfrac{V}{38,77})$$</p>
    <p>$$1 = 38,77\cdot\dfrac{1}{x}+19,71\cdot(\dfrac{1}{x}+\dfrac{1}{38,77})$$</p>
    <p>$$1 - \dfrac{19,71}{38,77}= \dfrac{58,48}{x}$$</p>
    <p>$$\dfrac{19,06}{38,77}= \dfrac{58,48}{x}$$</p>
    <p>$$19,06\cdot x = 58,48\cdot38,77$$</p>
    <p>$$x = \dfrac{58,48\cdot38,77}{19,06}=118,95\approx119$$</p>
    </explanation>
        </question>
</quiz>


