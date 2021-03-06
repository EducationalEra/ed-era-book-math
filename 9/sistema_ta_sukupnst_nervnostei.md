# Система та сукупність нерівностей

<p>Розглянемо таку життєву ситуацію. Михайло вчиться на соціолога. Нещодавно він провів опитування сімейних пар на вулицях Києва. Він поставив два питання: «Чи маєте Ви хлопчика?» та «Чи маєте Ви дівчинку?». Загалом було $$100$$ сімейних пар. Результати можна представити у вигляді такої діаграми:</p>

<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_12.png"/></p></div>

<p>З діаграми випливає, що $$72$$ пари має хлопчиків <b>або</b> дівчаток. Крім того, $$21$$ пара мають хлопчиків <b>і</b> дівчаток одночасно. Слова «<b>або</b>» та «<b>і</b>» тут вжиті не випадково, вони представляють логічні операції об’єднання та перетину множин «пара має хлопчиків» та «пара має дівчат».</p>

<p>Аналогічно, при розв’язанні нерівностей часто потрібно користуватись <b>операціями об’єднання та перетину</b> інтервалів.</p>

<div class="space">
<div class="alg-wrap">
<span class="alg">Алгоритм</span> <b>Об’єднання та перетин інтервалів</b>
<div class="alg-text">
<ol>
<li>Зобразити інтервали на числовій прямій.</li>
<li>Для знаходження <b>об’єднання</b> потрібно взяти ті частини прямої, що належать <b>хоча б одному інтервалу</b>. Об’єднання, як і в теорії множин, позначається значком $$\cup$$.</li>
<li>Для знаходження <b>перетину</b> потрібно взяти ті частини прямої, що належать <b>обом інтервалам одночасно</b>. Перетин, як і в теорії множин, позначається значком $$\cap$$.</li>
</ol>
</div>
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<b>Знайти об’єднання та перетин інтервалів $$[1;7]$$ і $$(5;9)$$.</b>
<p>
<ul class="nav-tab" id="mytab">
    <button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
    <button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
    <button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
    <div class="tab-pane" id="decision">
<p><b><i>Розв’язок.</i></b></p>
<p>Зобразимо інтервали на числовій прямій:</p>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_13.png"/></p></div>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_14.png"/></p></div>
<p>Для знаходження об’єднання потрібно взяти ті частини прямої, які належать першому <b>або</b> другому (хоча б одному) інтервалам.</p>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_15.png"/></p></div>
<p>Отже, $$[1;7] \cup (5;9) = [1;9)$$.</p>
<p>Для знаходження перетину потрібно взяти ті частини прямої, які належать першому <b>i</b> другому (обом одночасно) інтервалам.</p>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_16.png"/></p></div>
<p>Отже, $$[1;7] \cap (5;9) = (5;7]$$.</p>
    </div>
    <div class="tab-pane" id="answer">
<p><b>Вiдповiдь.</b> $$[1;9), (5;7].$$</p>
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
<b>Знайти значення змінної $$x$$, якщо вона повинна задовольняти умови: $$\begin{eqnarray}\dfrac{x}{2} - 1 > 0 & або & -\dfrac{1}{4}(x+1) > 0 \nonumber \end{eqnarray}$$</b>
<p>
<ul class="nav-tab" id="pr1">
<button class="btn" data-target="#decision1" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer1" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide1" data-toggle="tab">Приховати</button>
</ul>

<div id="pr1" class="tab-content">
  <div class="tab-pane" id="decision1">
<p><b><i>Розв’язок.</i></b></p>
<p>Розв’яжемо окремо два рівняння з умови, а потім знайдемо об’єднання (<b>або</b>) отриманих розв’язків.</p>
<p align="center">$$\begin{eqnarray} 
			\dfrac{x}{2} - 1 > 0 & або & -\dfrac{1}{4}(x+1) > 0 \nonumber \\
			\dfrac{x}{2} > 1 & & x + 1 < 0 \nonumber \\
			x > 2 & & x < -1 \nonumber
			\end{eqnarray}$$</p>
<p>Отже, маємо такі умови для змінної:  $$x>2$$ або $$x<-1$$.</p>
<p>Зобразимо ці розв’язки на числовій прямій та знайдемо їхнє об’єднання:</p>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_17.png"/></p></div>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_18.png"/></p></div>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_19.png"/></p></div>
<p>Отже, значення змінної $$x$$ повинно лежати у межах $$(-\infty,-1) \cup (2,\infty)$$ щоб задовольнити умови.</p>
    </div>
  <div class="tab-pane" id="answer1">
<p><b>Вiдповiдь.</b> $$(-\infty,-1) \cup (2,\infty).$$</p>
   </div>
  <div class="tab-pane" id="hide1"></div>
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
<b>Знайти значення змінної $$x$$, якщо вона повинна задовольняти умови:</b> $$\begin{eqnarray} -3(x-5)\leq 6 & i & x-2<5 \nonumber \end{eqnarray}$$</p>
<p>
<ul class="nav-tab" id="pr2">
<button class="btn" data-target="#decision2" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer2" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide2" data-toggle="tab">Приховати</button>
</ul>

<div id="pr2" class="tab-content">
  <div class="tab-pane" id="decision2">
<p><b><i>Розв’язок.</i></b></p>
<p>Розв’яжемо окремо два рівняння з умови, а потім знайдемо перетин (<b>i</b>) отриманих розв’язків.</p>
<p align="center">$$\begin{eqnarray} -3(x-5)\leq 6 & i & x-2<5 \nonumber \\
			-3x+15 \leq 6 && x<7 \nonumber \\
			-3x \leq -9 && x<7 \nonumber \\
			x \geq 3 && x<7 \nonumber
			\end{eqnarray}$$</p>
<p>Отже, маємо такі умови для змінної:  $$x\geq3$$ або $$x<7$$.</p>
<p>Іншим чином це запишемо так: $$3\leq x<7$$.</p>
<p>Зобразимо ці розв’язки на числовій прямій та знайдемо їхнє об’єднання:</p>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_20.png"/></p></div>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_21.png"/></p></div>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_22.png"/></p></div>
<p>Отже, значення змінної $$x$$ повинно лежати в межах $$[3,7)$$, щоб задовольнити умови.</p>
    </div>
  <div class="tab-pane" id="answer2">
<p><b>Вiдповiдь.</b> $$[3,7).$$</p>
   </div>
  <div class="tab-pane" id="hide2"></div>
</div>
</p>    
</div>
</div>
</div>
<div class="space"></div>

<div class="space">
<div class="ebio-wrap">
<span class="ebio">Скорочений запис перетину нерівностей</span>
<div class="ebio-text">
<p>Якщо $$a<b$$ і має місце перетин нерівностей:</p>
<p align="center">$$a<x$$$$\quad$$ і $$\quad$$ $$x<b$$</p>
<p>то це можна записати у скороченій формі як</p>
<p align="center">$$a<x<b.$$</p>
</div>
</div>
</div>

<p>Всі операції в такому записі проводять одночасно над всіма трьома сторонами нерівності. Під час розв’язання метою є <b>залишити змінну $$x$$ «на самоті» в центральній частині</b> нерівності.</p>

<p>Насправді, ми вже навчились розв’язувати найпростіші системи та сукупності нерівностей.</p>

<div class="space">
<div class="ebio-wrap">
<span class="ebio">Система нерівностей</span>
<div class="ebio-text">
<p>Якщо між двома нерівностями стоїть слово «<b>і</b>» — тобто мається на увазі <b>перетин розв’язків нерівностей</b> – це значить, що змінна повинна <b>задовольнити обидві нерівності</b> одночасно. Перед нами ніщо інше, як <b>система нерівностей</b>. Такі нерівності записують одна під іншою з <b>великою фігурною дужкою зліва</b>. Умова попереднього прикладу тоді виглядатиме як:</p>
<p align="center">$$-3(x-5)\leq 6 \quad i \quad x-2<5 \quad \Longleftrightarrow \quad \begin{cases} 
-3(x-5)\leq 6,\\ 
x-2<5. 
\end{cases}$$</p>
<p align="center">спростивши, маємо:</p>
<p align="center">$$ 
x \geq 3 \quad i \quad x<7 \quad\Longleftrightarrow\quad3\leq x<7\quad\Longleftrightarrow\quad \begin{cases} 
x \geq 3,\\ 
x<7. 
\end{cases}  
$$</p>
</div>
</div>
</div>

<div class="space">
<div class="ebio-wrap">
<span class="ebio">Сукупність нерівностей</span>
<div class="ebio-text">
<p>Якщо між двома нерівностями стоїть слово «<b>або</b>» - тобто мається на увазі <b>об’єднання розв’язків нерівностей</b> – це значить, що змінна повинна <b>задовольнити хоча б одну з нерівностей</b>. Таке об’єднання називається сукупністю нерівностей. В цьому випадку нерівності записуються одна під іншою з <b>великою квадратною скобкою зліва</b>. Умова попереднього прикладу тоді виглядатиме як:</p>
<p align="center">$$ 
\dfrac{x}{2} - 1 > 0 \quad або \quad -\dfrac{1}{4}(x+1) > 0 \quad\Longleftrightarrow\quad \left[\begin{gathered} 
\hspace{-0.25cm}\dfrac{x}{2} - 1 > 0,\\ 
-\dfrac{1}{4}(x+1) > 0. 
\end{gathered}\right. 
$$</p>
<p align="center">спростивши, маємо:</p>
<p align="center">$$ 
x > 2 \quad або \quad x<-1 \quad\Longleftrightarrow\quad\left[\begin{gathered} 
\hspace{-0.25cm}x>2,\\ 
x<-1. 
\end{gathered}\right. 
$$</p>
</div>
</div>
</div>

<p>Системи і сукупності нерівностей дуже просто та наочно розв’язують за допомогою інтервального представлення розв’язків.</p>

<p>Надалі ми будемо користуватись поняттями системи і сукупності нерівностей для розв’язання нерівностей з модулями. </p>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<b>Розв’язати систему нерівностей: $$\begin{cases} 
5x+2(1-x) \geq x+5,\\ 
\dfrac{x}{2}+5>-2(5+x). 
\end{cases}$$</b>
<p>
<ul class="nav-tab" id="pr3">
<button class="btn" data-target="#decision3" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer3" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide3" data-toggle="tab">Приховати</button>
</ul>

<div id="pr3" class="tab-content">
  <div class="tab-pane" id="decision3">
<p><b><i>Розв’язок.</i></b></p>
<p>Розв’язуємо кожну з нерівностей окремо:</p>
<table>
<td align="center">
$$\begin{eqnarray} 
5x+2(1-x) &\geq& x+5 \nonumber\\ 
5x+2-2x &\geq& x+5 \nonumber\\ 
2x &\geq& 3 \nonumber\\ 
x &\geq& \dfrac{3}{2} \nonumber 
\end{eqnarray}$$
</td>
<td align="center">
$$\begin{eqnarray} 
\dfrac{x}{2}+5 &>& -2(5+x)\nonumber\\ 
\dfrac{x}{2}+5 &>& -10-2x\nonumber\\ 
\dfrac{5x}{2} &>& -15\nonumber\\ 
x &>& -6\nonumber 
\end{eqnarray}$$
</td>
</table>
<p>Залишилося зобразити розв’язки на числовій прямій та знайти їхній перетин.</p>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_23.png"/></p></div>
    </div>
  <div class="tab-pane" id="answer3">
<p><b>Вiдповiдь.</b> $$x \in \left[\dfrac{3}{2};\infty\right).$$</p>
   </div>
  <div class="tab-pane" id="hide3"></div>
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
<b>Розв’язати сукупність нерівностей: $$\left[\begin{gathered} 
x+2\leq8-3(x+1),\\ 
5x-2>1-x. 
\end{gathered}\right.$$</b>
<p>
<ul class="nav-tab" id="pr4">
<button class="btn" data-target="#decision4" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer4" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide4" data-toggle="tab">Приховати</button>
</ul>

<div id="pr4" class="tab-content">
  <div class="tab-pane" id="decision4">
<p><b><i>Розв’язок.</i></b></p>
<p>Розв’язуємо кожну з нерівностей окремо:</p>
<table>
<td align="center">
$$\begin{eqnarray} 
x+2 &\leq& 8-3(x+1) \nonumber\\ 
x+2 &\leq& 8-3x-3 \nonumber\\ 
4x &\leq& 3 \nonumber\\ 
x &\leq& \dfrac{3}{4} \nonumber 
\end{eqnarray}$$
</td>
<td align="center">
$$\begin{eqnarray} 
5x-2 &>& 1-x\nonumber\\ 
6x &>& 3\nonumber\\ 
x &>& \dfrac{1}{2}\nonumber
\end{eqnarray}$$
</td>
</table>
<p>Залишилося зобразити розв’язки на числовій прямій та знайти їхнє об'єднання.</p>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_24.png"/></p></div>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_25.png"/></p></div>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/p14_26.png"/></p></div>
    </div>
  <div class="tab-pane" id="answer4">
<p><b>Вiдповiдь.</b> $$x \in \mathbb{R}.$$</p>
   </div>
  <div class="tab-pane" id="hide4"></div>
</div>
</p>    
</div>
</div>
</div>
<div class="space"></div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
 <question text="">
        <p>Розв'язати систему нерівностей:
$$\begin{cases}
4x-6(x-1)<2x+3\\
6(x-1)-x>4
\end{cases}$$</p>
        <answer correct> $$x>\dfrac{9}{4}$$</answer>
        <answer> $$x>2$$</answer>
        <answer> $$x<-2$$</answer>
        <answer> $$x<0$$</answer>
        <explanation>
        <p>Спростимо систему нерівностей:</p>
        <p>$$\begin{cases}
4x-6x-6<2x+3\\
6x-6-x>4
\end{cases}$$</p>
<p>$$\begin{cases}
-4x<9\\
5x>10
\end{cases}$$</p>
<p>$$\begin{cases}
x>\dfrac{9}{4}\\
x>2
\end{cases}$$</p>
<p>Спільний інтервал для цих двох нерівностей:</p>
<p>$$x>\dfrac{9}{4}$$</p>
        </explanation>
</question>
<question text="">
        <p>Розв'язати систему нерівностей:
$$\begin{cases}
x<4-3x-2(1-x)\\
7x+4>1+x-3(4x-1)
\end{cases}$$</p>
        <answer> $$x \in [0;1]$$</answer>
        <answer> $$x \in (0;-1)$$</answer>
        <answer> $$x >0$$</answer>
        <answer correct> $$x \in (0;1)$$</answer>
        <explanation>
        <p>Спростимо систему нерівностей:</p>
        <p>$$\begin{cases}
x<4-3x-2+2x\\
7x+4>1+x-12x+3
\end{cases}$$</p>
<p>$$\begin{cases}
2x<2\\
18x>0
\end{cases}$$</p>
<p>$$\begin{cases}
x<1\\
x>0
\end{cases}$$</p>
<p>Спільний інтервал для цих двох нерівностей:</p>
<p>$$x \in (0;1)$$</p>
        </explanation>
</question>
</quiz>