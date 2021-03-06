# Метод відокремлення кореня

Спробуємо застосувати **метод відокремлення кореня** для нерівності $$2x+\sqrt{4x^2-1}>3.$$

Спочатку залишаємо доданок з коренем на самоті в лівій частині рівняння:

<table style="border: none;" class="none">
<tr>
<td align="center">$$2x+\sqrt{4x^2-1}>3$$</td>
<td><i class="expl">Вихідна нерівність</i></td>
</tr>
<tr>
<td align="center">$$2x+\sqrt{4x^2-1}$$ <i class="expl">$$-2x$$</i> $$\gt 3$$ <i class="expl">$$-2x$$</i></td>
<td><i class="expl">Віднімаємо $$2x$$ від обох частин</i></td>
</tr>
<tr>
<td align="center">$$\sqrt{4x^2-1}>3-2x$$</td>
<td><i class="expl">Спрощуємо</i></td>
</tr>
</table>


Поглянемо на отриману нерівність $$\sqrt{4x^2-1}>3-2x$$. За визначенням арифметичного кореня підкореневий вираз та значення кореня є завжди невід’ємними. Тоді область допустимих значень буде визначатись ось такою системою:

<p align="center">$$\begin{cases}
	4x^2-1\geq0,\\
	3-2x\geq0.
	\end{cases}$$
</p>

Точно так само, як і в рівняннях, ми тепер можемо підносити обидві частини до квадрата, і в результаті отримаємо систему з трьох нерівностей:

<p align="center">$$\begin{cases}
	4x^2-1\geq0,\\
	3-2x\geq0,\\
	(\sqrt{4x^2-1})^2>(3-2x)^2.
	\end{cases}$$
</p>

Остання нерівність спрощується до $$4x^2-1>(3-2x)^2$$. З властивостей парного степеня (див. [Лекцію 3](https://study.ed-era.com/courses/EdEra/m102/M102/courseware/a1d5d759fc724c8fbc07068c8ba57912/9194da7f20984aeb9b55d6f314afa615/)) ми знаємо, що число у парному степені завжди невід’ємне.<br>Тому $$4x^2-1>(3-2x)^2\geq0$$. 
<p>Умова з першої нерівності системи автоматично міститься у третій, тому її можна забрати:

<p align="center">$$\begin{cases}
	3-2x\geq0,\\
	4x^2-1>(3-2x)^2.
	\end{cases}$$
</p>

Далі ця система рівнянь розв’язується легко і швидко (див. [Лекцію 9](https://study.ed-era.com/courses/EdEra/m102/M102/courseware/54554820f4534ac6a104d66974169b0a/f822671bcc834b78a597f9fd0112c324/)).<br>Розв’язуємо кожну з нерівностей окремо:

<table>
<td align="center">
$$\begin{eqnarray} 
3-2x &\geq& 0 \nonumber\\ 
-2x &\geq& -3 \nonumber\\ 
x &\leq& \dfrac{3}{2} \nonumber
\end{eqnarray}$$
</td>
<td align="center">
$$\begin{eqnarray} 
4x^2-1 &>& (3-2x)^2 \nonumber\\ 
4x^2-1 &>& 9-12x+4x^2\nonumber\\ 
12x &>& 10 \nonumber\\
x &>& \dfrac{5}{6}
\end{eqnarray}$$
</td>
</table>

Зобразимо ці розв’язки на числовій прямій:
/*Картинка з інтервалами*/

В результаті перетину двох множин розв’язків отримаємо $$x \in \left(\dfrac{5}{6};\dfrac{3}{2}\right].$$

Але існує ще **один випадок (!)** який ми не розглянули, де можуть міститися розв’язки системи. 

Ми виходили з припущення про те, що значення кореня є невід’ємним, так з’явилась нерівність $$3-2x\geq0$$. А що ж буде з нерівністю, якщо вираз $$3-2x$$ буде від’ємним? З’ясуймо це. 
<p>Значення кореня $$\sqrt{4x^2-1}$$ за визначенням є завжди невід’ємним. Тому якщо праворуч стоїть від’ємний вираз, нерівність все одно справдиться, бо значення кореня завжди більше від будь-якого від’ємного числа:

<p align="center">$$\sqrt{4x^2-1}\geq0>3-2x.$$</p>

Якщо ж поглянути на нерівність $$\sqrt{4x^2-1}\geq0,$$ то вона справджується за будь-яких значень, коли підкореневий вираз задовольняє ОДЗ: $$4x^2-1\geq0.$$

В результаті маємо систему нерівностей:

<p align="center">$$\begin{cases}
	3-2x<0,\\
	4x^2-1\geq0.
	\end{cases}$$
</p>

Розв’язуємо кожну з нерівностей окремо:

<table>
<td align="center">
$$\begin{eqnarray} 
3-2x &<& 0 \nonumber\\ 
-2x &<& -3 \nonumber\\ 
x &>& \dfrac{3}{2} \nonumber
\end{eqnarray}$$
</td>
<td align="center">
$$\begin{eqnarray} 
4x^2-1 &\geq& 0 \nonumber\\ 
4x^2-1 &\geq& 0 \nonumber\\ 
(x-\dfrac{1}{2})(x+\dfrac{1}{2}) &\geq& 0 \nonumber\\
x \geq \dfrac{1}{2} \cup x &\leq& -\dfrac{1}{2}
\end{eqnarray}$$
</td>
</table>

Зобразимо ці розв’язки на числовій прямій:
/*Картинка з інтервалами*/

В результаті перетину двох множин розв'язків маємо $$x \in \left(\dfrac{3}{2};\infty\right).$$

Розглянувши два випадки, ми отримали дві множини розв’язків: $$x \in \left(\dfrac{5}{6};\dfrac{3}{2}\right]$$ та $$x \in \left(\dfrac{3}{2};\infty\right).$$ Після об’єднання отримуємо відповідь.

/*Картинка з інтервалами*/

<p><b>Вiдповiдь.</b> $$x \in \left(\dfrac{5}{6};\infty\right).$$</p>






Тепер давайте розглянемо нерівність: $$\sqrt{5-4x+x^2}< x+8.$$

Застосуємо метод відокремлення кореня. За визначенням арифметичного кореня підкореневий вираз та значення кореня є завжди невід’ємними. Через останню умову вираз в правій частині повинен бути додатним (нулем він бути не може, бо нерівність є строгою). Тоді область допустимих значень буде визначатись ось такою системою:

<p align="center">$$\begin{cases}
	5-4x+x^2\geq0,\\
	x+8>0.
	\end{cases}$$
</p>

Точно так само, як і в рівняннях ми тепер можемо підносити обидві частини до квадрата, і в результаті отримаємо систему з трьох нерівностей:

<p align="center">$$\begin{cases}
	5-4x+x^2\geq0,\\
	x+8>0,\\
	5-4x+x^2<(x+8)^2.
	\end{cases}$$
</p>

Розв’яжемо кожну з нерівностей окремо. 

Спочатку першу: $$5-4x+x^2\geq0.$$ 
<p>Знайдемо дискримінант квадратного рівняння: $$D=(-4)^2-4⋅5⋅1=16-20=-4<0.$$ </p>
<p>Дискримінант від’ємний – рівняння не має коренів. З урахуванням того, що коефіцієнт при $$x^2$$ додатний, ця нерівність справджуватиметься завжди.<p>

Продовжуємо розв’язувати другу та третю нерівності:

<table>
<td align="center">
$$\begin{eqnarray} 
x+8 &>& 0 \nonumber\\ 
x &>& -8 \nonumber
\end{eqnarray}$$
</td>
<td align="center">
$$\begin{eqnarray} 
5-4x+x^2 &<& (x+8)^2 \nonumber\\ 
5-4x+x^2 &<& x^2+16x+64 \nonumber\\ 
-20x &<& 59 \nonumber\\
x &>& -\dfrac{59}{20}
\end{eqnarray}$$
</td>
</table>

<!--<table style="border: none;" class="none">
<tr>
<td align="center">$$ x+8 &>& 0 \nonumber<br>x &>& -8 \nonumber$$</td>
<td align="center">$$5-4x+x^2 &<& (x+8)^2 \nonumber<br> 
5-4x+x^2 &<& x^2+16x+64 \nonumber<br> 
-20x &<& 59 \nonumber<br>
x &>& -\dfrac{59}{20}$$</td>
</tr>
</table>-->

Зобразимо ці розв’язки на числовій прямій:
/*Картинка з інтервалами*/

<p>Знаходимо перетин множин розв’язків та отримуємо відповідь.</p>

<p><b>Вiдповiдь.</b> $$x \in \left(-\dfrac{59}{20};\infty\right).$$</p>



Наостанку, спробуємо розв’язати нерівність з кубічним коренем: $$x+\sqrt[3]{3x^2-3x-7}>1.$$

Починаємо відокремлювати корінь:

<table style="border: none;" class="none">
<tr>
<td align="center">$$x+\sqrt[3]{3x^2-3x-7}>1$$</td>
<td><i class="expl">Вихідна нерівність</font></i></td>
</tr>
<tr>
<td align="center">$$x+\sqrt[3]{3x^2-3x-7}\color{#0F5180}{-x}>1\color{#0F5180}{-x}$$</td>
<td><i class="expl">Віднімаємо $$x$$ від обох частин</i></td>
</tr>
<tr>
<td align="center">$$\sqrt[3]{3x^2-3x-7}>1-x$$</td>
<td><i class="expl">Спрощуємо</i></td>
</tr>
<tr>
<td align="center">$$(\sqrt[3]{3x^2-3x-7})^3>(1-x)^3$$</td>
<td><i class="expl">Підносимо до куба обидві частини. Ніяких обмежень ОДЗ немає, бо це корінь непарного степеня</i></td>
</tr>
<tr>
<td align="center">$$3x^2-3x-7>1-3x+3x^2-x^3$$</td>
<td><i class="expl">Спрощуємо</i></td>
</tr>
<tr>
<td align="center">$$x^3-8>0$$</td>
<td><i class="expl">Збираємо всі доданки в лівій частині нерівності та спрощуємо</i></td>
</tr>
</table>

Розв’яжемо отриману нерівність методом інтервалів.

Шукаємо нулі функції $$P(x)=x^3-8,$$ для цього розв'яжемо кубічне рівняння $$x^3-8=0$$<br>(див. [Лекцію 7](https://study.ed-era.com/courses/EdEra/m102/M102/courseware/fd401ba328cc459681b42723a51edd78/ca62c80e92cf4c329e3fe0d34a5ddb29/)). Можливими коренями можуть бути дільники вільного доданка $$-8:$$ $$±1,±2,±4,±8.$$ Згадаємо теорему Безу, та по черзі підставимо можливі значення кореня в рівняння. Таким коренем буде $$x=2.$$

Тепер за схемою Горнера розділимо $$x^3-8$$ на $$x+2.$$ Для цього запишемо табличку з коефіцієнтами. Перший коефіцієнт копіюємо:

<table>
<tr>
<td></td>
<td align="center">$$1$$</td>
<td align="center">$$0$$</td>
<td align="center">$$0$$</td>
<td align="center">$$-8$$</td>
</tr>
<td align="center">$$-2$$</td>
<td align="center">$$1$$</td>
<td align="center"></td>
<td align="center"></td>
<td align="center"></td>
</tr>
</td>
</table>

І починаємо заповнювати табличку за правилом: крайнє справа число множиться на $$-2$$ та додається до числа, що стоїть над порожньою клітинкою:

<table>
<tr>
<td></td>
<td align="center">$$1$$</td>
<td align="center">$$0$$</td>
<td align="center">$$0$$</td>
<td align="center">$$-8$$</td>
</tr>
<td align="center">$$2$$</td>
<td align="center">$$1$$</td>
<td align="center">$$2$$</td>
<td align="center">$$4$$</td>
<td align="center">$$0$$</td>
</tr>
</td>
</table>

В результаті ми отримали розклад на множники багаточлена $$x^3-8=(x-2)(x^2-2x+4).$$

Спробуємо тепер знайти розв’язки рівняння $$x^2-2x+4=0.$$ Шукаємо дискримінант $$D=(-2)^2-4⋅1⋅4=4-16=-12<0$$ – отже, рівняння коренів не має.

Отже, функція $$x^3-8$$ має єдиний нуль у точці $$x=2.$$ Відкладемо це значення на числовій осі та шукаємо знак функції на правому інтервалі $$(2;∞).$$

/*Картинка з інтервалами*/

Беремо наше тестове значення $$\color{#0F5181}{\textit{мільярд}}$$.

<p align="center">$$P(\color{#0F5181}{\textit{мільярд}}) = (\underbrace{ \color{#0F5181}{\textit{мільярд}}-2}_{>\thinspace\mbox{0}}) \, (\underbrace{ \color{#0F5181}{\textit{мільярд}^2}-2⋅\color{#0F5181}{\textit{мільярд}}+4}_{>\thinspace\mbox{0}}) \, >0$$</p>

/*Картинка з інтервалами*/

Обидва множники додатні, функція на цьому інтервалі має додатний знак. На іншому інтервалі буде, відповідно, протилежний знак. Отже, відповіддю буде інтервал $$x \in \left(2;\infty\right).$$

/*Картинка з інтервалами*/

<p><b>Вiдповiдь.</b> $$x \in \left(2;\infty\right).$$</p>

<div class="space">
<div class="ebio-wrap">
<span class="ebio"> Рівносильні переходи</span>
<div class="ebio-text">
<p>Тепер трошки поговоримо про рівносильні переходи – те, що ми використуємо під час розв’язку будь-яких нерівностей. Узагальнимо наш метод розв’язку з попереднього прикладу.</p>
<p>Для ірраціональних нерівностей парного степеня вигляду
<ul>
<li>$$\sqrt[2k]{f(x)}>g(x)$$ справедливий рівносильний перехід:
<p align="center">$$\sqrt[2k]{f(x)}>g(x)\Longleftrightarrow\quad \left[\begin{gathered} 
\quad \begin{cases} 
g (x)\geq0,\\ 
f (x)>g^{2k}(x),
\end{cases}\\ 
\quad \begin{cases} 
g (x)<0,\\ 
f (x)\geq0;
\end{cases}\\ 
\end{gathered}\right.$$</p>
</li>
<li>$$\sqrt[2k]{f(x)}<g(x)$$ справедливий рівносильний перехід:
<p align="center">$$\sqrt[2k]{f(x)}<g(x)\Longleftrightarrow\quad 
\quad \begin{cases} 
f (x)\geq0,\\ 
g (x)>0,\\
f(x)<g^{2k}(x);
\end{cases}\\ $$</p>
</li>
<li>$$\sqrt[2k]{f(x)}>\sqrt[2k]{g(x)}$$ справедливий рівносильний перехід:
<p align="center">$$\sqrt[2k]{f(x)}>\sqrt[2k]{g(x)}\Longleftrightarrow\quad 
\quad \begin{cases} 
g (x)>0,\\
f(x)>g(x).
\end{cases}\\ $$</p>
</li>
</ul>
</p>
<p>Для ірраціональних нерівностей непарного степеня ніяких обмежень ОДЗ наявність ірраціональності не додає, тому можна користуватись рівносильними переходами:
<p align="center">$$\sqrt[2k+1]{f(x)}≶g(x)\Longleftrightarrow\quad f(x)≶g^{2k+1}(x).$$</p>
<p>Ці види рівносильних переходів краще не запам’ятовувати за формою, а зрозуміти як вони з’явились – і тоді їх можна буде вивести самостійно – як ми це зробили у трьох прикладах вище.</p>
</div>
</div>
</div>

Закріпимо описану концепцію в пам’яті декількома прикладами.

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<b>Розв’язати нерівність $$\sqrt{16-x^2}\geq4-x.$$</b>
<p>
<ul class="nav-tab" id="mytab">
    <button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
    <button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
    <button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
    <div class="tab-pane" id="decision">
<p><b><i>Розв’язок.</i></b></p>
Скористаємось рівносильним переходом: <p align="center">$$\sqrt[2k]{f(x)}\geq g(x)\Longleftrightarrow\quad \left[\begin{gathered} 
\quad \begin{cases} 
g (x)\geq0,\\ 
f (x)\geq g^{2k}(x),
\end{cases}\\ 
\quad \begin{cases} 
g (x)<0,\\ 
f (x)\geq0.
\end{cases}\\ 
\end{gathered}\right.$$</p>
Тоді нерівність перетвориться на таку систему нерівностей:
<p align="center">$$\sqrt{16-x^2}\geq 4-x\Longleftrightarrow\quad \left[\begin{gathered} 
\quad \begin{cases} 
4-x\geq0,\\ 
16-x^2\geq (4-x)^2,
\end{cases}\\ 
\quad \begin{cases} 
4-x<0,\\ 
16-x^2\geq0.
\end{cases}\\ 
\end{gathered}\right.$$</p>
Розглянемо кожну з двох систем нерівностей окремо, а потім <i>об’єднаємо</i> їхні розв’язки.
<p>Почнемо з першої системи $$\quad \begin{cases} 
4-x\geq0,\\ 
16-x^2\geq (4-x)^2,
\end{cases}$$ де є дві нерівності, що розв’язуються таким чином:

<table>
<td align="center">
$$\begin{eqnarray} 
4-x &\geq& 0 \nonumber\\ 
4 &\geq& x \nonumber
\end{eqnarray}$$
</td>
<td align="center">
$$\begin{eqnarray} 
16-x^2 &\geq& (4-x)^2 \nonumber\\ 
16-x^2-(4-x)^2 &\geq& 0 \nonumber\\ 
16-x^2-(16-8x+x^2) &\geq& 0 \nonumber\\
16-x^2-16+8x-x^2 &\geq& 0 \nonumber\\
-2x^2+8x &\geq& 0 \nonumber\\
x^2-4x &\leq& 0 \nonumber\\
x(x-4) &\leq& 0 \nonumber\\
0 &\leq& x \leq 4\nonumber
\end{eqnarray}$$
</td>
</table>
<p>Тепер зобразимо ці два розв’язки на числовій прямій та шукаємо їхній перетин:</p>
/*Картинка з інтервалами*/
<p>Отримали розв’язок $$x \in \left[0;4\right].$$</p>
Тепер розв’язуємо другу систему $$\quad \begin{cases} 
4-x<0,\\ 
16-x^2\geq 0; 
\end{cases}$$ точно так само:

<table>
<td align="center">
$$\begin{eqnarray} 
4-x &<& 0 \nonumber\\ 
4 &<& x \nonumber
\end{eqnarray}$$
</td>
<td align="center">
$$\begin{eqnarray} 
16-x^2 &\geq& 0 \nonumber\\ 
x^2-16 &\leq& 0 \nonumber\\ 
(x-4)(x+4) &\leq& 0 \nonumber\\ 
-4 &\leq& x \leq 4\nonumber
\end{eqnarray}$$
</td>
</table>

<p>Тепер зобразимо ці два розв’язки на числовій прямій та шукаємо їхній перетин:</p>
/*Картинка з інтервалами*/
<p>Ці інтервали не перетинаються, ми отримали порожню множину $$x \in ∅$$. </p>
<p>Об’єднавши розв’язки двох систем, отримаємо відповідь:</p>
/*Картинка з інтервалами*/
    </div>
    <div class="tab-pane" id="answer">
<p><b>Вiдповiдь.</b> $$x \in \left[0;4\right].$$</p>
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
<b>Розв’язати нерівність $$\sqrt{3x-2}\leq3(2x-1).$$</b>
<p>
<ul class="nav-tab" id="pr1">
<button class="btn" data-target="#decision1" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer1" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide1" data-toggle="tab">Приховати</button>
</ul>

<div id="pr1" class="tab-content">
  <div class="tab-pane" id="decision1">
<p><b><i>Розв’язок.</i></b></p>
Скористаємось рівносильним переходом <p align="center">$$\sqrt[2k]{f(x)}< g(x)\Longleftrightarrow\
\quad \begin{cases} 
f (x)\geq0,\\ 
g (x)> 0,\\
f (x)< g^{2k}x.
\end{cases}$$</p>

Тоді нерівність перетвориться на таку систему нерівностей:

<p align="center">$$\sqrt{3x-2}\leq3(2x-1)\Longleftrightarrow\
\quad \begin{cases} 
3x-2\geq0,\\ 
3(2x-1)\geq0,\\
3x-2\leq9(2x-1)^2.
\end{cases}$$</p>
Розглянемо кожну з нерівностей окремо, а потім знайдемо <i>перетин</i> їхніх розв’язків. Перша нерівність системи перетворюється на $$x\geq\dfrac{2}{3}$$. Розглянемо окремо другу і третю нерівності:

<table>
<td align="center">
$$\begin{eqnarray} 
3(2x-1) &\geq& 0 \nonumber\\ 
2x-1 &\geq& 0 \nonumber\\
x &\geq& \dfrac{1}{2}
\end{eqnarray}$$
</td>
<td align="center">
$$\begin{eqnarray} 
3x-2 &\leq& 9(2x-1)^2 \nonumber\\ 
3x-2 &\leq& 9(4x^2-4x+1) \nonumber\\ 
3x-2-36x^2+36x-9 &\leq& 0 \nonumber\\
36x^2-39x+11 &\geq& 0 \nonumber\\
12x^2-13x+1 &\geq& 0 \nonumber\\
D=(-39)^2-4⋅36⋅11=-63\nonumber\\
x \in \mathbb{R}
\end{eqnarray}$$
</td>
</table>
<p>Тепер зобразимо всі розв’язки на числовій прямій та шукаємо їхній перетин:</p>
/*Картинка з інтервалами*/
<p>Отримали розв’язок $$x \in \left[\dfrac{2}{3};\infty\right).$$</p>
    </div>
  <div class="tab-pane" id="answer1">
<p><b>Вiдповiдь.</b> $$x \in \left[\dfrac{2}{3};\infty\right).$$</p>
   </div>
  <div class="tab-pane" id="hide1"></div>
</div>
</p>    
</div>
</div>
</div>
<div class="space"></div>