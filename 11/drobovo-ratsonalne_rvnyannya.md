# Дробово-раціональне рівняння

<p>Повернемося до вихідного рівняння. Воно містило змінну в знаменнику дробу, і таке рівняння називається дробовим раціональним.</p>

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
<b>Дробово-раціональне рівняння</b> — це рівняння вигляду $$\dfrac{P(x)}{Q(x)} = 0$$, де $$P(x),Q(x)$$ – многочлени, а $$x$$ – змінна.
</div>
</div>
</div>

<p><i>Наприклад:</i> $$\dfrac{1}{x}=2;\quad \dfrac{x(x+3)}{x-1}=0;\quad \dfrac{5x^2+x+1}{3-x+x^3}-\dfrac{1}{x}=6.$$</p>

<p>Розв’язувати дробові раціональні рівняння не складніше, ніж звичайні раціональні. Головне – <b>пам’ятати про ОДЗ знаменника</b>.</p>

<div class="space">
<div class="alg-wrap">
<span class="alg">Алгоритм</span> <b>Дробове раціональне рівняння</b>
<div class="alg-text">
<ol>
<li>Виразити рівняння у вигляді $$\dfrac{P(x)}{Q(x)} = 0$$, де $$P(x),Q(x)$$ – многочлени.</li>
<li>Розв’язати рівняння $$P(x)=0$$.</li>
<li>Перевірити знайдені корені, щоб вони задовольняли ОДЗ знаменника: $$Q(x_i)\neq0$$.</li>
</ol>
</div>
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
Знайти корені рівняння $$\dfrac{x-3}{x^2+4x+3} + \dfrac{1}{x+1} = -\dfrac{x}{x+3}$$. 
<p>
<ul class="nav-tab" id="mytab">
    <button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
    <button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
    <button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
    <div class="tab-pane" id="decision">
<p><b><i>Розв’язок</i></b>.</p>
<p>Користуємося вищезазначеним алгоритмом.</p>
<ol>
<li>Перетворюємо рівняння до вигляду $$\dfrac{P(x)}{Q(x)} = 0$$:</li>

<table style="border: none;" class="none">
<tr>
<td align="center">$$\dfrac{x-3}{x^2+4x+3} + \dfrac{1}{x+1} = - \dfrac{x}{x+3}$$</td>
<td><i><font color="1570bd">Вихідне рівняння</font></i></td>
</tr>
<tr>
<td align="center">$$\dfrac{x-3}{x^2+4x+3} + \dfrac{1}{x+1} + \dfrac{x}{x+3} = 0$$</td>
<td><font color="1570bd"><i>Додаємо $$\dfrac{x}{x+3}$$ до обох частин та спрощуємо</i></font></td>
</tr>
<tr>
<td align="center">$$\dfrac{x-3+x+3+(x+1)x}{\color{#1570bd}(\color{#1570bd}x\color{#1570bd}+\color{#1570bd}3\color{#1570bd})\color{#1570bd}(\color{#1570bd}x\color{#1570bd}+\color{#1570bd}1\color{#1570bd})} = 0$$</td>
<td><font color="1570bd"><i>Зводимо до спільного знаменника</i></font></td>
</tr>
<tr>
<td align="center">$$\dfrac{\color{#1570bd}x^\color{#1570bd}2\color{#1570bd}+\color{#1570bd}3\color{#1570bd}x}{(x+3)(x+1)} = 0$$</td>
<td><font color="1570bd"><i>Спрощуємо</i></font></td>
</tr>
<tr>
<td align="center">$$\dfrac{\color{#1570bd}x(x+3)}{(x+3)(x+1)} = 0$$</td>
<td><font color="1570bd"><i>Виносимо $$x$$ в чисельнику за дужки</i></font></td>
</tr>
</table>

<li>Розв’язуємо рівняння з чисельника:</li>

<table style="border: none;" class="none">
<tr>
<td align="center">$$x(x+3) = 0$$</td>
<td><i><font color="1570bd">Вихідне рівняння</font></i></td>
</tr>
<tr>
<td align="center">$$\left[
    \begin{array}{}
        x = 0 \\
        x + 3 = 0
    \end{array}
    \right.$$</td>
<td><font color="1570bd"><i>Добуток множників рівний нулю записати як сукупність множників, кожен з яких рівний нулю</i></font></td>
</tr>
<tr>
<td align="center">$$\left[
    \begin{array}{}
        x = 0 \\
        x + 3 \color{#1570bd}- \color{#1570bd}3 = 0 \color{#1570bd}- \color{#1570bd}3
    \end{array}
    \right.$$</td>
<td><font color="1570bd"><i>У другому рівнянні віднімемо $$3$$ від обох частин</i></font></td>
</tr>
<tr>
<td align="center">$$\left[
    \begin{array}{}
        x_1 = 0 \\
        x_2 = - 3
    \end{array}
    \right.$$</td>
<td><font color="1570bd"><i>Спрощуємо</i></font></td>
</tr>
</table>

<li>Тепер поглянемо на знаменник. ОДЗ такого дробу знаходимо з умови $$(x+3)(x+1)\neq0$$. Отже, отримуємо ОДЗ: $$x\neq-3;x\neq-1$$.</li>
<p>Серед знайдених двох коренів ОДЗ задовольняє лише один $$x=0$$.</p>
</ol>
    </div>
    <div class="tab-pane" id="answer">
<p><b>Вiдповiдь.</b> $$x=0$$.</p>
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
Знайти корені рівняння $$\dfrac{x^2-14x+2}{x^2+4x+2}+1=\dfrac{5x}{x^2-3x+2}.$$  
<p>
<ul class="nav-tab" id="pr1">
<button class="btn" data-target="#decision1" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer1" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide1" data-toggle="tab">Приховати</button>
</ul>

<div id="pr1" class="tab-content">
  <div class="tab-pane" id="decision1">
<p><b><i>Розв’язок</i></b>.</p>
<p>Перед нами дробове раціональне рівняння. Зводимо його до вигляду $$\dfrac{P(x)}{Q(x)} = 0$$.</p>
<p>Скористаємося одним трюком. Якщо уважно придивитися до коефіцієнтів квадратних тричленів у рівнянні, можна побачити, що деякі з них збігаються:</p>
<p>Якщо в такому рівняння поділити і чисельник, і знаменник на $$x$$ – можна буде зробити дуже вдалу заміну. Але спочатку треба перевірити, чи не є $$x=0$$ коренем рівняння, бо на $$0$$ ділити не можна:</p>
<p align="center">$$\dfrac{0^2-14 \cdot 0+2}{0^2+4\cdot0+2} +1 = \dfrac{5\cdot0}{0^2-3\cdot0+2}\Longleftrightarrow \dfrac{2}{2}+1=0$$</p>
<p>Така рівність не справджується, тому можна спокійно ділити і чисельник, і знаменник дробів на $$x$$:</p>

<table style="border: none;" class="none">
<tr>
<td align="center">$$\dfrac{\dfrac{x^2 - 14x + 2}{\color{#1570bd}x}}{\dfrac{x^2 + 4x + 2}{\color{#1570bd}x}} + 1 = \dfrac{\dfrac{5x}{\color{#1570bd}x}}{\dfrac{x^2-3x+2}{\color{#1570bd}x}}$$</td>
<td><i><font color="1570bd">Ділимо чисельник і знаменник дробів на $$x$$</font></i></td>
</tr>
<tr>
<td align="center">$$\dfrac{\color{#1570bd}x - 14 + \dfrac{\color{#1570bd}2}{\color{#1570bd}x}}{\color{#1570bd}x + 4 + \dfrac{\color{#1570bd}2}{\color{#1570bd}x}} + 1 = \dfrac{5}{\color{#1570bd}x-3+\dfrac{\color{#1570bd}2}{\color{#1570bd}x}}$$</td>
<td><font color="1570bd"><i>Спрощуємо</i></font></td>
</tr>
<tr>
<td align="center">$$\dfrac{t-14}{t+4} + 1 = \dfrac{5}{t-3}$$</td>
<td><font color="1570bd"><i>Робимо заміну $$t= x + \dfrac{2}{x}$$</i></font></td>
</tr>
<tr>
<td align="center">$$\dfrac{t-14}{t+4} + 1 - \dfrac{5}{t-3} = 0$$</td>
<td><font color="1570bd"><i>Збираємо всі доданки в лівій частині</i></font></td>
</tr>
<tr>
<td align="center">$$\dfrac{2t^2 - 21t + 10}{(t-3)(t+4)} = 0$$</td>
<td><font color="1570bd"><i>Зводимо до спільного знаменника та спрощуємо</i></font></td>
</tr>
</table>

<p>Розв’язуємо рівняння з чисельника:</p>

<table style="border: none;" class="none">
<tr>
<td align="center">$$2t^2 - 21t + 10 = 0$$</td>
<td><i><font color="1570bd">Вихідне рівняння</font></i></td>
</tr>
<tr>
<td align="center">$$D = (-21)^2 - 4 \cdot 2 \cdot 10 = 441 - 80 = 361$$</td>
<td><font color="1570bd"><i>Шукаємо дискримінант</i></font></td>
</tr>
<tr>
<td align="center">$$t_{1,2} = \dfrac{21 \pm \sqrt{361}}{2 \cdot 2} = \dfrac{21 \pm 19}{4}$$</td>
<td><font color="1570bd"><i>Дискримінант додатний, шукаємо корені</i></font></td>
</tr>
<tr>
<td align="center">$$\left[
    \begin{array}{}
        t_1 = 10, \\
        t_2 = \dfrac{1}{2}
    \end{array}
    \right.$$</td>
<td><font color="1570bd"><i>Спрощуємо та обчислюємо значення коренів</i></font></td>
</tr>
</table>

<p>Поглянемо на ОДЗ змінної, знаменник повинен бути відмінним від нуля: $$(t-3)(t+4)\neq0$$. Це дає два заборонених значення змінної: $$t\neq3;t\neq-4$$. Обидва знайдені значення задовольняють ОДЗ.</p>
<p>Повертаємося до вихідної змінної $$x$$ і отримуємо ще два дробових раціональних рівняння:</p>
<p align="center">$$\left[ \begin{gathered} 
x + \dfrac{2}{x} = 10, \hfill \\ 
x + \dfrac{2}{x} = \dfrac{1}{2} \hfill \\ 
\end{gathered} 
\right.$$</p>
<p>Оскільки раніше ми вже перевірили, що $$x\neq0$$ – можемо спокійно домножити обидві частини рівнянь на $$x$$ та розв’язати отримані квадратні рівняння:</p>
<table>
<tr>
<td align="center">$$\left(x + \dfrac{2}{x} \right)\cdot x=10\cdot x$$</td>
<td align="center">$$\left(x + \dfrac{2}{x} \right)\cdot x= \dfrac{1}{2}\cdot x$$</td>
</tr>
<tr>
<td align="center">$$x^2+2=10x$$</td>
<td align="center">$$x^2+2=\dfrac{x}{2}$$</td>
</tr>
<tr>
<td align="center">$$x^2-10x+2=0$$</td>
<td align="center">$$x^2-\dfrac{x}{2}+2=0$$</td>
</tr>
<tr>
<td align="center">$$D=(-10)^2-4\cdot1\cdot2=92>0$$</td>
<td align="center">$$D=\left(-\dfrac{1}{2} \right)^2-4\cdot1\cdot2=-\dfrac{31}{4}<0$$</td>
</tr>
<tr>
<td align="center">$$x_{1,2}=\dfrac{10\pm\sqrt{92}}{2}=5\pm\sqrt{23}$$</td>
<td align="center">$$x \in \emptyset$$</td>
</tr>
</table>
<p>Отже, вихідне рівняння має корені $$x_{1,2}=5\pm\sqrt{23}$$.</p>
    </div>
  <div class="tab-pane" id="answer1">
<p><b>Вiдповiдь. </b> $$x_{1,2}=5\pm\sqrt{23}$$.</p>
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
        <p>Розв’яжіть рівняння: $$\dfrac{7x-2}{2x-7}=1$$</p>
        <answer correct> $$x=-1$$</answer>
        <answer> $$x=7$$</answer>
        <answer> $$x=5$$</answer>
        <answer> $$x=-2$$</answer>
        <explanation>
        <p>Претворимо рівняння до вигляду: $$\dfrac{P(x)}{Q(x)}=0$$</p>
        <p>$$\dfrac{(7x-2)-(2x-7)}{2x-7}=0$$</p>
        <p>Розв’язуємо рівняння чисельника:</p>
        <p>$$7x-2-2x+7=0$$</p>
        <p>$$x=-1$$</p>
        <p>Звернемо увагу на знаменник: $$x\neq\dfrac{7}{2}$$.</p>
        <p>Отже, відповідь $$x=-1.$$</p>
        </explanation>
</question>
</quiz>