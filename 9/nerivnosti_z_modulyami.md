# Нерiвностi з модулями

<p>Розглянемо простеньку нерівність:</p>

<p align="center">$$|x|<3.$$</p>

<p>Розкриємо знак модуля за означенням:</p>

<p>Для додатних значень $$x$$ значок модуля забираємо: $$x<3$$.</p>

<p>Для від’ємних значень $$x$$ при розкритті модуля потрібно помножити підмодульний вираз на $$-1$$:</p>

<p align="center">$$\begin{eqnarray} 
-x &<& 3 \nonumber \\ 
x &>& -3 \nonumber 
\end{eqnarray}$$</p>

<p>В результаті маємо дві умови, що повинні виконуватися одночасно:</p>

<p align="center">$$ 
x<3 \quad i \quad x>-3 \quad \Longleftrightarrow \quad \begin{cases} 
x<3,\\ 
x>-3. 
\end{cases}$$</p>

<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_27.png"/></p></div>

<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_28.png"/></p></div>

<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_29.png"/></p></div>

<div class="fluidMedia">
<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/DdlJOHgJIls" frameborder="0" allowfullscreen></iframe>
</div>
<div class="popup">
</div>

<br>

<p>Можна піти простішим шляхом: нерівність $$|x|<3$$ задовольняють значення $$x$$, що лежать на відстані менше $$3$$ від $$0$$ на числовій прямій:</p>

<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_30.png"/></p></div>

<p>Тобто можна переписати таку нерівність у вигляді: $$-3<x<3$$. Отримали таку саму відповідь. Одне рівняння з модулем еквівалентне системі двох нерівностей без значків модуля.</p>

<p>Тепер розглянемо іншу нерівність: </p>

<p align="center">$$|x|\geq2.$$</p>

<p>Розв’язком такого рівняння будуть ті значення $$x$$, що лежать на відстані $$2$$ і більше від $$0$$:</p>

<p>Аналогічно, таке рівняння можна представити у вигляді сукупності двох рівнянь без значків модуля:</p>

<p align="center">$$x\geq2 \quad або \quad x\leq-2 \quad\Longleftrightarrow\quad \left[\begin{gathered} 
x\geq2,\\ 
x\leq-2. 
\end{gathered}\right.$$</p>

<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_31.png"/></p></div>

<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_32.png"/></p></div>

<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_33.png"/></p></div>


<div class="space">
<div class="alg-wrap">
<span class="alg">Алгоритм</span>
<div class="alg-text">
<p>Всі нерівності з модулями можна звести до таких трьох випадків:</p>
<ol>
<li>$$|f(x)|<g(x) \Longleftrightarrow \begin{cases} 
f(x)<g(x),\\ 
f(x)>-g(x). 
\end{cases}$$</li>
<li>$$|f(x)|>g(x) \Longleftrightarrow \begin{cases} 
f(x)>g(x),\\ 
f(x)<-g(x). 
\end{cases}$$</li>
<li>$$|f(x)|>|g(x)| \Longleftrightarrow f^2(x) > g^2(x).$$</li>
</ol>
</div>
</div>
</div>

<p>Для нестрогих нерівностей все працює точно так само.</p>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<b>Межі коливання середньої місячної температури повітря за $$2013$$ рік в м. Києві описуються такою нерівністю: $$|T-8,65|\leq 12,95$$. Знайдіть максимальне та мінімальне значення середньої місячної температури у $$2013$$ році.</b>
<p><b><i>Розв’язок.</i></b></p>
<p>Позбавляємося значка модуля:</p>
<p align="center">$$|T-8,65|\leq 12,95\Longleftrightarrow-12,95\leq T-8,65\leq 12,95$$</p>
<p>Розв'язуємо отриману нерівність:</p>

<table style="border: none;" class="none">
<tr>
<td>$$
    \begin{align}
        -12,95 && \le && T - 8,65 && \le && 12,95 \\
        \\
        -12,95 \color{#1570bd}+ \color{#1570bd}8\color{#1570bd},\color{#1570bd}6\color{#1570bd}5 && \le && T -8,65 \color{#1570bd}+ \color{#1570bd}8\color{#1570bd},\color{#1570bd}6\color{#1570bd}5 && \le && 12,95 \color{#1570bd}+ \color{#1570bd}8\color{#1570bd},\color{#1570bd}6\color{#1570bd}5 \\
        \\
        -4,3 && \le && T && \le && 21,6
    \end{align}$$</td>
<td><font color="1570bd"><i>Вихідна нерівність<br>Додаємо $$8,65$$ до всіх трьох частин<br>Спрощуємо</i></font></td>
</tr>
</table>

<p>Зображаємо це на числовій прямій:</p>
<p align="center">$$T \in [-4,3;21,6]$$</p>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_34.png"/></p></div>
<p><b>Вiдповiдь.</b>$$T_{min}=-4,3; T_{max}=21,6.$$</p>
</div>
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<b>Розв’язати нерівність: $$|5-2(x+1)|>x-1$$.</b>
<p><b><i>Розв’язок.</i></b></p>
<p>Позбавляємося значка модуля:</p>
<p align="center">$$|5-2(x+1)|>x-1\Longleftrightarrow\left[\begin{gathered} 
\hspace{-0.65cm}5-2(x+1)>x-1,\\ 
5-2(x+1)<-(x-1). 
\end{gathered}\right.$$</p>
<p>Розв’язуємо два рівняння сукупності окремо:</p>

<table style="border: none;" class="none">
<tr>
<td>$$
    \begin{align}
        5 - 2(x+1) & \gt x-1 \\
        5 \color{#1570bd}- \color{#1570bd}2\color{#1570bd}x \color{#1570bd}- \color{#1570bd}2 & \gt x-1 \\
        3 - 2x & \gt x-1 \\
        3 - 2x \color{#1570bd}+ \color{#1570bd}(\color{#1570bd}2\color{#1570bd}x\color{#1570bd}+\color{#1570bd}1\color{#1570bd}) & \gt x - 1 \color{#1570bd}+ \color{#1570bd}(\color{#1570bd}2\color{#1570bd}x \color{#1570bd}+ \color{#1570bd}1\color{#1570bd}) \\
        4 & \gt 3x \\
        \dfrac{4}{\color{#1570bd}3} & \gt \dfrac{3}{\color{#1570bd}3}x \\
        \dfrac{4}{3} & \gt x
    \end{align}$$</td>
<td><font color="1570bd"><i>Вихідний вираз<br>Розкриваємо дужки<br>Спрощуємо<br>Додаємо $$2x+1$$ до обох частин<br>Спрощуємо<br>Ділимо обидві частини на $$3$$<br>Спрощуємо</i></font></td>
</tr>
</table>

<table style="border: none;" class="none">
<tr>
<td>$$
    \begin{align}
        5 - 2(x+1) & \lt -(x-1) \\
        5 \color{#1570bd}- \color{#1570bd}2\color{#1570bd}x \color{#1570bd}- \color{#1570bd}2 & \lt \color{#1570bd}1 \color{#1570bd}- \color{#1570bd}x \\
        3 - 2x & \lt 1 - x \\
        3 - 2x \color{#1570bd}+ \color{#1570bd}(\color{#1570bd}2\color{#1570bd}x\color{#1570bd}-\color{#1570bd}1\color{#1570bd}) & \lt 1 - x \color{#1570bd}+ \color{#1570bd}(\color{#1570bd}2\color{#1570bd}x\color{#1570bd}-\color{#1570bd}1\color{#1570bd}) \\
        2 & \lt x
    \end{align}$$</td>
<td><font color="1570bd"><i>Вихідний вираз<br>Розкриваємо дужки<br>Спрощуємо<br>Додаємо $$2x-1$$ до обох частин<br>Спрощуємо</i></font></td>
</tr>
</table>

<p>Зобразимо ці розв’язки на числовій прямій та знайдемо їхнє об’єднання:</p>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_35.png"/></p></div>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_36.png"/></p></div>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_37.png"/></p></div>
<p><b>Вiдповiдь.</b>$$x \in \left(-\infty;\dfrac{4}{3}\right)\cup(2;\infty).$$</p>
</div>
</div>
</div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
 <question text="">
        <p>Розв'яжіть нерівність: $$|x−5|>4$$</p>
        <answer correct>$$(-\infty;1)\cup(9;\infty)$$</answer>
        <answer>$$(-\infty;1)\cap(9;\infty)$$</answer>
        <answer>$$(1;9)$$</answer>
        <answer>$$(-\infty;\infty)$$</answer>
        <explanation>
        <p>Розкриємо модуль з додатним знаком:</p>
        <p>$$x-5>4$$</p>
        <p>$$x>9$$</p>
        <p>Розкриємо модуль з від'ємним знаком:</p>
        <p>$$-x+5>4$$</p>
        <p>$$x<1$$</p>
        <p>Об'єднання інтервалів і буде розв'яззком: $$(-\infty;1)\cup(9;\infty)$$</p>
        </explanation>
</question>
</quiz>