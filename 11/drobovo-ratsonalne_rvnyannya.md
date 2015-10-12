# Дробово-раціональне рівняння

<p>Повернемося до вихідного рівняння. Воно містило змінну в знаменнику дробу, і таке рівняння називається дробовим раціональним.</p>

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Означення</span>
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
<p><b><i>Розв’язок</i></b>.</p>
<p>Користуємося вищезазначеним алгоритмом.</p>
<ol>
<li>Перетворюємо рівняння до вигляду $$\dfrac{P(x)}{Q(x)} = 0$$:</li>
<div class="space"><p align="center"><img align="middle" width="80%" height="80%" class="image" src="../pics/143/p34_e4.png"/></p></div>
<li>Розв’язуємо рівняння з чисельника:</li>
<div class="space"><p align="center"><img align="middle" width="80%" height="80%" class="image" src="../pics/143/p34_e5.png"/></p></div>
<li>Тепер поглянемо на знаменник. ОДЗ такого дробу знаходимо з умови\\ $$(x+3)(x+1)\neq0$$. Отже, отримуємо ОДЗ: $$x\neq-3;x\neq-1$$.</li>
<p>Серед знайдених двох коренів ОДЗ задовольняє лише один $$x=0$$.</p>
</ol>
<b>Вiдповiдь.</b> $$x=0$$.
</div>
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
Знайти корені рівняння $\dfrac{x^2-14x+2}{x^2+4x+2}+1=\dfrac{5x}{x^2-3x+2}$  
<p><b><i>Розв’язок</i></b>.</p>
<p>Перед нами дробове раціональне рівняння. Зводимо його до вигляду $$\dfrac{P(x)}{Q(x)} = 0$$.</p>
<p>Скористаємося одним трюком. Якщо уважно придивитися до коефіцієнтів квадратних тричленів у рівнянні, можна побачити, що деякі з них збігаються:</p>
<p>Якщо в такому рівняння поділити і чисельник, і знаменник на $$x$$ – можна буде зробити дуже вдалу заміну. Але спочатку треба перевірити, чи не є $$x=0$$ коренем рівняння, бо на $$0$$ ділити не можна:</p>
<p align="center">$$\dfrac{0^2-14\cdot0+2}{0^2+4\cdot0+2} +1 = \dfrac{5\cdot0}{0^2-3\cdot0+2}\Longleftrightarrow \dfrac{2}{2}+1=0$$</p>
<p>Така рівність не справджується, тому можна спокійно ділити і чисельник, і знаменник дробів на $$x$$:</p>
<div class="space"><p align="center"><img align="middle" width="80%" height="80%" class="image" src="../pics/143/p34_e6.png"/></p></div>
<p>Розв’язуємо рівняння з чисельника:</p>
<div class="space"><p align="center"><img align="middle" width="80%" height="80%" class="image" src="../pics/143/p34_e7.png"/></p></div>
<p>Поглянемо на ОДЗ змінної, знаменник повинен бути відмінним від нуля: $$(t-3)(t+4)\neq0$$. Це дає два заборонених значення змінної: $$t\neq3;t\neq-4$$. Обидва знайдені значення задовольняють ОДЗ.</p>
<p>Повертаємося до вихідної змінної $$x$$ і отримуємо ще два дробових раціональних рівняння:</p>
<p align="center">$$\left[ \begin{gathered} 
x + \dfrac{2}{x} = 10, \hfill \\ 
x + \dfrac{2}{x} = \dfrac{1}{2} \hfill \\ 
\end{gathered} 
\right.$$</p>
<p>Оскільки раніше ми вже перевірили, що $$x\neq0$$ – можемо спокійно домножити обидві частини рівнянь на $$x$$ та розв'язати отримані квадратні рівняння:</p>
<table>
<tr>
<td>$$\left(x + \dfrac{2}{x} \right)\cdot x=10\cdot x$$</td>
<td>$$\left(x + \dfrac{2}{x} \right)\cdot x= \dfrac{1}{2}\cdot x$$</td>
</tr>
<tr>
<td>$$x^2+2=10x$$</td>
<td>$$x^2+2=\dfrac{x}{2}$$</td>
</tr>
<tr>
<td>$$x^2-10x+2=0$$</td>
<td>$$x^2-\dfrac{x}{2}+2=0$$</td>
</tr>
<tr>
<td>$$D=(-10)^2-4\cdot1\cdot2=92>0$$</td>
<td>$$D=\left(-\dfrac{1}{2} \right)^2-4\cdot1\cdot2=-\dfrac{31}{4}<0$$</td>
</tr>
<tr>
<td>$$x_{1,2}=\dfrac{10\pm\sqrt{92}}{2}=5\pm\sqrt{23}$$</td>
<td>$$x \in \emptyset$$</td>
</tr>
</table>
<p>Отже, вихідне рівняння має корені $$x_{1,2}=5\pm\sqrt{23}$$.</p>
<b>Вiдповiдь.</b> $$x_{1,2}=5\pm\sqrt{23}$$.
</div>
</div>
</div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
 <question text="">
        <p>Розв'яжіть рівняння: $$\dfrac{7x-2}{2x-7}=1$$</p>
        <answer correct>$$x=-1$$</answer>
        <answer>$$x=7$$</answer>
        <answer>$$x=5$$</answer>
        <answer>$$x=-2$$</answer>
        <explanation>
        <p>Претворимо рівняння до вигляду $$\dfrac{P(x)}{Q(x)}=0$$</p>
        <p>$$\dfrac{(7x-2)-(2x-7)}{2x-7}=0$$</p>
        <p>Розв'язуємо рівняння чисельника:</p>
        <p>$$7x-2-2x+7=0$$</p>
        <p>$$x=-1$$</p>
        <p>Звернемо увагу на знаменник: $$x\neq\dfrac{7}{2}$$</p>
        <p>отже, відповідь $$x=-1$$</p>
        </explanation>
</question>
</quiz>