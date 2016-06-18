# Дробово-рацiональнi нерiвності

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
<b>Дробово-раціональна нерівність</b> — це нерівність вигляду $$\dfrac{P(x)}{Q(x)}>0$$ або $$\dfrac{P(x)}{Q(x)}< 0$$ або $$\dfrac{P(x)}{Q(x)}\geq0$$ або $$\dfrac{P(x)}{Q(x)}\leq0$$, де $$P(x)$$, $$Q(x)$$ – многочлени, а $$x$$ – змінна.
</div>
</div>
</div>

<p><i>Наприклад:</i> $$\dfrac{2}{x}< 5;\quad\dfrac{6-x}{x^2-9}>0;\quad\dfrac{x^2-3x+5}{x(3x-1)(2x-6)(x-2)}< x.$$</p>

<p>Для розв’язання дробово-раціональних нерівностей користуються тим самим методом інтервалів.</p>

<p>Основна думка в цьому варіанті полягає в тому, що <b>дробово-раціональна функція може змінювати знак лише у точках, в яких вона рівна нулеві або не існує.
</b> </p>

<p><b>Граничні точки</b> для дробово-раціональної функції можна знайти прирівнявши нулеві як чисельник: $$P(x)=0$$ (дробово-раціональна функція рівна нулю), так і знаменник: $$Q(x)=0$$ (дробово-раціональна функція не існує).</p>

<div class="space">
<div class="alg-wrap">
<span class="alg">Алгоритм</span> <b>Метод інтервалів</b>
<div class="alg-text">
<ol>
<li>Виразити нерівність у вигляді $$\dfrac{P(x)}{Q(x)}>0$$ або $$\dfrac{P(x)}{Q(x)}<0$$, де $$P(x)$$, $$Q(x)$$ – многочлени.</li>
<li>Розв’язати рівняння $$P(x)=0$$ та $$Q(x)=0$$, знайшовши <b>граничні точки</b>.</li>
<li>Зобразити граничні точки на числовій прямій, розбивши її на інтервали.</li>
<li>Знайти знаки функції $$\dfrac{P(x)}{Q(x)}$$ на кожному інтервалі.</li>
<li>Обрати ті інтервали, на яких знаки $$\dfrac{P(x)}{Q(x)}$$ задовольняють вихідній нерівності.</li>
</ol>
</div>
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Розв’язати нерівність $$\dfrac{5}{x}< x$$.</p>
<p>
<ul class="nav-tab" id="mytab">
    <button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
    <button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
    <button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
    <div class="tab-pane" id="decision"> 
<p><b><i>Розв’язок.</i> </b> </p>
<ol>
<li>Перетворюємо нерівність до вигляду $$\dfrac{P(x)}{Q(x)}< 0$$:</li>

<table style="border: none;" class="none">
<tr>
<td>$$
    \begin{align}
        \dfrac{5}{x} & \lt x \\
        \dfrac{5}{x} - x & \lt x - x \\
        \dfrac{5}{x} - x & \lt 0 \\
        \dfrac{5}{x} - x \cdot \dfrac{x}{x} & \lt 0 \\
        \dfrac{5 - x^2}{x} & \lt 0 
    \end{align}$$</td>
<td><font color="1570bd"><i>Вихідна нерівність<br><br>Віднімаємо $$x$$ від обох частин нерівності<br><br>Спрощуємо<br><br>Зводимо до спільного знаменника<br><br>Спрощуємо</i> </font> </td>
</tr>
</table>

<li>Многочлен в знаменнику $$5-x^2$$ можна розкласти на множники за допомогою формули різниці квадратів: $$5-x^2=(\sqrt{5}-x)(\sqrt{5}+x)$$. У результаті маємо:</li>
<br>
<p align="center">$$\dfrac{(\sqrt{5}-x)(\sqrt{5}+x)}{x}< 0$$</p>
<li>Граничні точки многочлена $$P(x)$$ в чисельнику: $$-\sqrt{5};\sqrt{5}$$, а граничні точки многочлена $$Q(x)$$ в знаменнику: $$0$$. Загальні граничні точки: $$-\sqrt{5};0;\sqrt{5}$$.</li>
<p>Зобразимо їх на числовій прямій:</p>
<div class="space"><p align="center"><img align="middle" width="75%" class="image" src="../pics/142/p24_13.png"/> </p> </div>
<li>Шукаємо знак функції на правому інтервалі $$(\sqrt{5};\infty)$$. Підставимо тестове значення «<font color="#0F5180"><i>мільярд</i></font>»:</li>
<br>
<div align="center">$$\dfrac{P({\text{мільярд}})}{Q({\text{мільярд}})} = \underbrace{\left( \sqrt{5} - \text{мільярд} \right)}_{\lt 0} \underbrace{\left( \sqrt{5} + \text{мільярд} \right)}_{\gt 0} \underbrace{\dfrac{1}{\text{мільярд}}}_{\gt 0} \lt 0$$</div>

<!--<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/142/p24_e6.png"/></p></div>-->
<p>Два множники додатні, один від’ємний – функція на цьому інтервалі має від’ємний знак.</p>
<p>Все, що потрібно зробити, – проставити знаки на решті інтервалів справа наліво, почергово змінюючи знак на протилежний:</p>
<div class="space"><p align="center"><img align="middle" width="75%" class="image" src="../pics/142/p24_14.png"/></p></div>
<li>Залишилось обрати інтервали, де функція додатна, бо за умовою $$\dfrac{P(x)}{Q(x)}< 0$$. Такими є інтервали $$(-\sqrt{5};0)$$ та $$(0;\sqrt{5})$$.</li>
<div class="space"><p align="center"><img align="middle" width="75%" class="image" src="../pics/142/p24_15.png"/></p> </div>
</ol>
    </div>
    <div class="tab-pane" id="answer">
<p><b>Вiдповiдь.</b> Отже, $$x \in (-\sqrt{5};0) \cup (0;\sqrt{5})$$.</p>
    </div>
    <div class="tab-pane" id="hide"></div>
</div>
</p>
</div>
</div>
</div>
<div class="space"></div>


<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
Розв’язати нерівність $$\dfrac{(x+2)^3(x+3)}{x^2-9}< 0$$.
<p>
<ul class="nav-tab" id="pr1">
<button class="btn" data-target="#decision1" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer1" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide1" data-toggle="tab">Приховати</button>
</ul>

<div id="pr1" class="tab-content">
  <div class="tab-pane" id="decision1">
<p><b><i>Розв’язок.</i> </b> </p>
<p>Многочлен в знаменнику $$x^2-9$$ можна розкласти на множники за допомогою формули різниці квадратів: $$x^2-9=(x+3)(x-3)$$. В результаті маємо:</p>
<p align="center">$$\dfrac{(x+2)^3(x+3)}{(x-3)(x+3)}< 0$$</p>
<ol start="3">
<li>Граничні точки многочлена $$P(x)$$ в чисельнику: $$-3;-2$$, а граничні точки многочлена $$Q(x)$$ в знаменнику: $$-3;3$$. Загальні граничні точки: $$-3;-2;3$$.</li>
<p>Зобразимо їх на числовій прямій. Точка $$x=-3$$ має кратність «$$2$$» — малюємо одну «пелюстку» на числовій осі. Точка $$x=-2$$ має кратність «$$3$$» — малюємо дві «пелюстки»:</p>
<div class="space"><p align="center"><img align="middle" width="75%" class="image" src="../pics/142/p24_16.png"/></p> </div>
<li>Шукаємо знак функції на правому інтервалі $$(3;\infty)$$. Підставимо тестове значення «<font color="#0F5180"><i>мільярд</i> </font>».</li>

<!--<div class="space"><p align="center"><img align="middle" width="80%" height="80%" class="image" src="../pics/142/p24_e7.png"/></p></div>-->

<div align="center">$$\dfrac{P({\text{мільярд}})}{Q({\text{мільярд}})} = \underbrace{\left( \text{мільярд} + 2 \right)^2}_{\gt 0} \underbrace{\left( \text{мільярд} + 3 \right)}_{\gt 0} \underbrace{\dfrac{1}{\text{мільярд} + 3}}_{\gt 0} \underbrace{\dfrac{1}{\text{мільярд} - 3}}_{\gt 0}  \gt 0$$</div>

<p>Всі чотири множники додатні, функція на цьому інтервалі має додатний знак.</p>
<p>Все, що потрібно зробити, – проставити знаки на решті інтервалів справа наліво, почергово змінюючи знак на протилежний:</p>
<div class="space"><p align="center"><img align="middle" width="75%" class="image" src="../pics/142/p24_17.png"/></p> </div>
<li>Залишилось обрати інтервали, де функція додатна, бо за умовою $$\dfrac{P(x)}{Q(x)}< 0$$. Таким є інтервал $$(-2;3)$$.</li>
<div class="space"><p align="center"><img align="middle" width="75%" class="image" src="../pics/142/p24_18.png"/></p></div>
</ol>
    </div>
  <div class="tab-pane" id="answer1">
<p><b>Вiдповiдь.</b> Отже, $$x \in (-2;3)$$.</p>
   </div>
  <div class="tab-pane" id="hide1"></div>
</div>
</p>    
</div>
</div>
</div>
<div class="space"></div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
 <question text="">
        <p>Скільки граничних точок має нерівність: $$\dfrac{(x-5)(x+1)(x-2)}{x^2-25}>0?$$</p>
        <answer correct> $$4$$</answer>
        <answer> $$5$$</answer>
        <answer> $$6$$</answer>
        <answer> $$7$$</answer>
</question>
<question text="">
        <p>На скільки інтервалів розбивається числова пряма для нерівності: $$\dfrac{(x-5)(x+3)(x-3)}{x^2+9}<0?$$</p>
        <answer> $$2$$</answer>
        <answer> $$3$$</answer>
        <answer correct> $$4$$</answer>
        <answer> $$5$$</answer>
</question>
</quiz>