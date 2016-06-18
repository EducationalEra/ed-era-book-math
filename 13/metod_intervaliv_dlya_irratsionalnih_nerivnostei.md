# Метод iнтервалiв для iррацiональних нерiвностей

Для розв’язку багатьох видів нерівностей зручніше за все користуватись методом інтервалів. Ірраціональні нерівності не виняток. Звичайно, для кожного виду нерівностей цей метод дещо видозмінюється, але основна концепція залишається такою ж самою.

<div class="space">
<div class="alg-wrap">
<span class="alg">Алгоритм</span> <b>Метод інтервалів</b>
<div class="alg-text">
<ul>
<li>Виразити нерівність у вигляді $$f(x)>0$$ або $$f(x)<0$$, де $$f(x)$$ – ірраціональна функція.</li>
<li>Знайти ОДЗ функції $$f(x)$$ та зобразити її на числовій прямій. </li>
<li>Розв’язати рівняння $$f(x)=0$$, знайшовши <b>граничні точки</b>.</li>
<li>Зобразити граничні точки на числовій прямій, розбивши її на інтервали (в рамках ОДЗ).</li>
<li>Знайти знаки функції $$f(x)$$на кожному інтервалі.</li>
<li>Обрати ті інтервали, на яких знаки $$f(x)$$ задовольняють вихідну нерівність.</li> 
</ul>
</div>
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<b>Розв’язати нерівність $$\sqrt{x-1}>\sqrt{x-2}+\sqrt{3-x}.$$</b>
<p>
<ul class="nav-tab" id="mytab">
    <button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
    <button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
    <button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
    <div class="tab-pane" id="decision">
<p><b><i>Розв’язок.</i></b></p>
Дотримуємось алгоритму, описаного вище.
<ol>
<li>Зводимо нерівність до стандартного вигляду $$f(x)>0$$:
<p align="center">$$\sqrt{x-1}>\sqrt{x-2}+\sqrt{3-x}\Longleftrightarrow\sqrt{x-1}-\sqrt{x-2}-\sqrt{3-x}>0.$$</p> </li>
<li>Шукаємо ОДЗ функції в лівій частині нерівності. Пам’ятаємо, що для квадратного кореня підкореневий вираз завжди невід’ємний:
<p align="center">$$\begin{cases}
			x-1\geq0,\\
			x-2\geq0,\\
			3-x\geq0
			\end{cases} \Longleftrightarrow
			\begin{cases}
			x\geq1,\\
			x\geq2,\\
			x\leq3
			\end{cases}$$</p>
Зобразимо тепер чотири інтервали на числовій прямій, знайдемо їхній перетин і отримаємо ОДЗ:
<p>/*Картинка з інтервалами*/</p>
Таким чином ОДЗ: $$x \in \left[2;3\right].$$
</li>
<li>Розв’яжемо рівняння $$f(x)=0$$:
<p align="center">$$\sqrt{x-1}-\sqrt{x-2}-\sqrt{3-x}=0.$$</p>
Це – ірраціональне рівняння, тому скористаємось методом відокремлення квадратного кореня:

<table style="border: none;" class="none">
<tr>
<td align="center">$$\sqrt{x-1}-\sqrt{x-2}-\sqrt{3-x}=0$$</td>
<td><i class="expl">Вихідне рівняння</i> </td>
</tr>
<tr>
<td align="center">$$\sqrt{x-1}=\sqrt{x-2}+\sqrt{3-x}=0$$</td>
<td><i class="expl">В лівій частині залишаємо тільки доданок $$\sqrt{x-1}$$</i></td>
</tr>
<tr>
<td align="center"><i class="expl">$$($$</i>$$\sqrt{x-1}$$<i class="expl">$$)^2$$</i>=<i class="expl">$$($$</i>$$\sqrt{x-2}$$<i class="expl">$$)^2$$</i>$$+$$<i class="expl">$$2\cdot($$</i>$$\sqrt{x-2}$$<i class="expl">$$)($$</i>$$\sqrt{3-x}$$<i class="expl">$$)$$</i>$$+$$<i class="expl">$$($$</i>$$\sqrt{3-x}$$<i class="expl">$$)^2$$</i> </td>
<td><i class="expl">Підносимо до квадрата обидві частини</i></td>
</tr>
<tr>
<td align="center">$$x-1=x-2+2\sqrt{(x-2)(3-x)}+3-x$$</td>
<td><i class="expl">Спрощуємо</i></td>
</tr>
<tr>
<td align="center">$$x-1=2\sqrt(x-2)(3-x)+1$$</td>
<td><i class="expl">Спрощуємо</i></td>
</tr>
</table>
Знову отримали ірраціональне рівняння, застосовуємо метод відокремлення квадратного кореня:

<table style="border: none;" class="none">
<tr>
<td align="center">$$2\sqrt{(x-2)(3-x)}=x-2$$</td>
<td><i class="expl">В лівій частині залишаємо тільки доданок $$2\sqrt{(x-2)(3-x)}$$</i> </td>
</tr>
<tr>
<td align="center"><i class="expl">$$($$</i>$$2\sqrt{(x-2)(3-x)}$$<i class="expl">$$)^2$$</i>$$=$$<i class="expl">$$($$</i>$$x-2$$<i class="expl">$$)^2$$</i></td>
<td><i class="expl">Підносимо до квадрата обидві частини</i></td>
</tr>
<tr>
<td align="center">$$4(x-2)(3-x)=x^2-4x+4$$</td>
<td><i class="expl">Спрощуємо</i></td>
</tr>
<tr>
<td align="center">$$-4x^2+20x-24=x^2-4x+4$$</td>
<td><i class="expl">Спрощуємо</i></td>
</tr>
<tr>
<td align="center">$$-5x^2+24x-28=0$$</td>
<td><i class="expl">Збираємо всі доданки в лівій частині</i></td>
</tr>
<tr>
<td align="center">$$D=24^2-4\cdot(-5)\cdot(-28)=16$$</td>
<td><i class="expl">Шукаємо дискримінант</i></td>
</tr>
<tr>
<td align="center">$$x_{1,2}=\dfrac{-24±\sqrt{16}}{2\cdot(-5)}\Longleftrightarrow\quad \left[
    \begin{array}{}
        x_1 = 2, \\
        x_2 = \dfrac{14}{5}
    \end{array}
    \right.$$</td>
<td><i class="expl">Знаходимо корені рівняння</i></td>
</tr>
</table>

Отже граничні точки: $$2$$; $$\dfrac{14}{5}.$$ Зобразимо їх на числовій прямій.
<p>/*Картинка з інтервалами*/</p>
</li>
<li>
Шукаємо знак функції на правому інтервалі $$\left(\dfrac{14}{5};3\right].$$ Нашим улюбленим «мільярдом» вже користуватись не можна (не входить в ОДЗ), візьмемо якусь точку з інтервалу,<br>наприклад $$\dfrac{29}{10}.$$
<p align="center">$$f(\dfrac{29}{10})=\sqrt{\dfrac{29}{10}-1}-\sqrt{\dfrac{29}{10}-2}-\sqrt{3-\dfrac{29}{10}}=\sqrt{1.9}-\sqrt{0.9}-\sqrt{0.1}>0$$</p>
Функція на цьому інтервалі має додатний знак:
<p>/*Картинка з інтервалами*/</p>
Все, що потрібно зробити, – проставити знаки на решті інтервалах справа наліво, почергово змінюючи знак на протилежний:
<p>/*Картинка з інтервалами*/</p>
</li>
<li>
Залишилось обрати інтервали, де функція додатна, бо за умовою $$f(x)>0.$$<br>Таким є інтервал $$\left(\dfrac{14}{5};3\right].$$
</li>
Отже, $$x \in \left(\dfrac{14}{5};3\right].$$
    </div>
    <div class="tab-pane" id="answer">
<p><b>Вiдповiдь.</b> $$x \in \left(\dfrac{14}{5};3\right].$$</p>
    </div>
    <div class="tab-pane" id="hide"></div>
</div>
</p>
</div>
</div>
</div>
<div class="space"></div>