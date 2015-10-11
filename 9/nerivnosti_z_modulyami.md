# Нерiвностi з модулями

<p>Розглянемо простеньку нерівність:</p>

<p align="center">$$|x|<3.$$</p>

<p>Розкриємо знак модуля за означенням:</p>

<p>Для додатних значень $$x$$ значок модуля прибираємо: $$x<3$$.</p>

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

<p>Можна піти простішим шляхом: нерівність $$|x|<3$$ задовольняють значення $$x$$, що лежать на відстані менше $$3$$ від $$0$$ на числовій прямій:</p>

<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_30.png"/></p></div>

<p>Тобто, можна переписати таку нерівність у вигляді: $$-3<x<3$$. Отримали таку ж відповідь. Одне рівняння з модулем еквівалентне системі двох нерівностей без значків модуля.</p>

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
<p>Всі нерівності зі значками можна звести до таких трьох випадків:</p>
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
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_e16.png"/></p></div>
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
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_e17.png"/></p></div>
<p>Зобразимо ці розв’язки на числовій прямій та знайдемо їхнє об’єднання:</p>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_35.png"/></p></div>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_36.png"/></p></div>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_37.png"/></p></div>
<p><b>Вiдповiдь.</b>$$x \in \left(-\infty;\dfrac{4}{3}\right)\cup(2;\infty).$$</p>
</div>
</div>
</div>