# Показникові нерівності

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
<b> Показникова нерівність</b> – це нерівність, що містить змінну в показнику степеня.
</div>          
<p><i>Наприклад:<i> $$5^{𝑥−1} < 4$$; $$2^𝑥 > 3^𝑥 −5^x$$.</p>

Під час розв’язання показникових нерівностей користуються тими самими ж методами, що і для рівнянь. Але є одна відмінність. В момент позбавлення від показника степеня знак нерівності буде залежати від основи степеня, за яким відбувається логарифмування:
<li>якщо $$a>1$$, знак нерівності залишається таким самим</li>   
<li>якщо $$0<a<1$$, знак нерівності змінюється на протилежний.</li>

<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">    
<b>Розв’язати рівняння $$4^{2-x}>7^{2-x}$$.</b>
<p>
<ul class="nav-tab" id="mytab">
    <button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
    <button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
    <button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
    <div class="tab-pane" id="decision">
<p><b><i>Розв’язок</i></b></p>
<p>Розділимо обидві частини на $$7^{2-x}$$ та отримаємо $$\left(\dfrac{4}{7}\right)^{2-x}>1$$. Зводимо до спільної основи: $$\left(\dfrac{4}{7}\right)^{2-x}>\left(\dfrac{4}{7}\right)^{0}$$. Через те, що основа $$\dfrac{4}{7}< 1$$, отримуємо нерівність з протилежним знаком $$2-x< 0$$. Звідки маємо розв’язок: $$x>2.$$</p>
/*Картинка з інтервалами*/
    </div>
    <div class="tab-pane" id="answer">
<p><b>Вiдповiдь. </b>$$x > 2.$$</p>
    </div>
    <div class="tab-pane" id="hide"></div>
</div>
</p>
</div>
</div>
<div class="space"></div>

<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">    
<p><b>Розв’язати рівняння $$5^{6x-1}>2^{\frac{1}{x}}$$.</b>  </p>
<p>
<ul class="nav-tab" id="pr1">
<button class="btn" data-target="#decision1" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer1" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide1" data-toggle="tab">Приховати</button>
</ul>

<div id="pr1" class="tab-content">
  <div class="tab-pane" id="decision1">
<p><b><i>Розв’язок</i> </b> </p>
Розв’язуємо методом логарифмування:     

<table style="border: none;" class="none">
<tr>
<td align="center">$$5^{6x-1}>2^{\frac{1}{x}}$$ </td>
<td><i class="expl">Вихідна нерівність</i> </td>
</tr>
<tr>
<td align="center">$$log^{}_{5}5^{6x-1}>log^{}_{5}2^{\frac{1}{x}}$$</td>
<td><i class="expl">Логарифмуємо за основою 5 обидві частини, $$5>1,$$ тому знак нерівності лишається таким самим</i> </td>
</tr>
<tr>
<td align="center">$${(6x-1)}log^{}_{5}5>\dfrac{1}{x}\cdot log^{}_{5}2$$</td>
<td><i class="expl">Виписуємо показники степенів перед логарифми</i> </td>
</tr>
<tr>
<td align="center">$$6x-1-\dfrac{1}{x}\cdot log^{}_{5}2>0$$</td>
<td><i class="expl">Cпрощуємо та збираємо всі доданки в лівій частині нерівності</i></td>
</tr>
<tr>
<td align="center">$$\dfrac{6x^2-x-log^{}_{5}2}{x}>0$$ </td>
<td><i class="expl">Зводимо всі доданки до спільного знаменника</i> </td>
</tr>
</table>

<p>Отримали дробово-раціональну нерівність (див. <a href="https://study.ed-era.com/courses/EdEra/m102/M102/courseware/54554820f4534ac6a104d66974169b0a/e23c92f0df4b4bd89fd77aad302463ed/">Лекцію 10</a>) – розв’язуємо її методом інтервалів.</p>
<p>Ми вже маємо нерівність у загальному вигляді $$\dfrac{P(x)}{Q(x)}>0$$.</p>      
<p>Шукаємо граничні точки, розв’язавши рівняння $$P(x)=0$$ та $$Q(x)=0$$. Зі знаменника дістаємо граничну точку $$x=0$$. Розв’язуємо квадратне рівняння:</p>      
<p align="center">$$6x^2-x-log^{}_{5}2=0$$</p>
<p align="center">$$D=(-1)^2-4\cdot6\cdot log^{}_{5}2=1+24\cdot log^{}_{5}2$$</p> 
<p align="center">$$x^{}_{1,2}=\dfrac{1 \pm \sqrt{1+24\cdot log^{}_{5}2}}{12}.$$</p>
<p>Зобразимо ці точки на числовій прямій.</p>      
/*Картинка з інтервалами*/
<p>Шукаємо знак функції на правому інтервалі. Підставимо тестове значення $$\color{#0F5181}{\textit{мільярд}}$$:
<p align="center">$$\dfrac{P(\color{#0F5181}{\textit{мільярд}})}{Q(\color{#0F5181}{\textit{мільярд}})} = 6\left(\underbrace{ \color{#0F5181}{\textit{мільярд}}-\dfrac{1-\sqrt{1+24\cdot log^{}_{5}2}}{12})}_{>\thinspace\mbox{0}}\right) \, \left(\underbrace{ \color{#0F5181}{\textit{мільярд}}-\dfrac{1+\sqrt{1+24\cdot log^{}_{5}2}}{12})}_{>\thinspace\mbox{0}}\right) \, \underbrace{\dfrac{1}{\color{#0F5181}{\textit{мільярд}}}}_{>\thinspace\mbox{0}} \, >0$$
<p>Всі три множники додатні – функція на цьому інтервалі має додатний знак.       
Тепер проставляємо знаки на решті інтервалів справа наліво, чергуючи знаки:</p>
/*Картинка з інтервалами*/
<p>За умовою $$\dfrac{P(x)}{Q(x)}>0$$, тому обираємо інтервали, де функція додатна. Такими є інтервали $$\left(\dfrac{1-\sqrt{1+24\cdot log^{}_{5}2}}{12};0\right)$$ та $$\left(\dfrac{1+\sqrt{1+24\cdot log^{}_{5}2}}{12};\infty\right).$$ 
    </div>
  <div class="tab-pane" id="answer1">
<p><b>Вiдповiдь.</b> $$x \in \left(\dfrac{1-\sqrt{1+24\cdot log^{}_{5}2}}{12};0\right) \cup \left(\dfrac{1+\sqrt{1+24\cdot log^{}_{5}2}}{12};\infty\right).$$</p>
   </div>
  <div class="tab-pane" id="hide1"></div>
</div>
</p>    
</div>
</div>
<div class="space"></div>