# Нерiвностi з параметрами

<p>Точно так само, як і для рівнянь з параметрами, основна концепція при розв’язанні нерівностей з параметрами полягає в наступному:</p>

<ol>
<li>Знайти «контрольнi» значення параметрiв, при яких у нерівності вiдбуваються якiснi змiни, наприклад, зміна знака на протилежний.</li>
<li>Знайти всi вирази для коренiв нерівності при рiзних значеннях параметрiв.</li>
</ol>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
Розв’язати нерівність $$\dfrac{x^2+3}{3-ax}>1$$. 
<p>
<ul class="nav-tab" id="mytab">
    <button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
    <button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
    <button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
    <div class="tab-pane" id="decision">
<p><b><i>Розв’язок</i></b>.</p>
<p>Перше «контрольне» значення параметра: $$a=0$$.</p>
<p>В такому випадку нерівність перетворюється на раціональну: $$\dfrac{x^2+3}{3}>1$$. Розв’яжемо її:</p>

<table style="border: none;" class="none">
<tr>
<td>$$
    \begin{align}
        \dfrac{x^2 + 3}{3} & \gt 1 \\
        3 \cdot \dfrac{x^2 + 3}{3} & \gt 3 \cdot 1 \\
        x^2 + 3 & \gt 3 \\
        x^2 + 3 - 3 & \gt 3 - 3 \\
        x^2 & \gt 0 \\
        \sqrt{x^2} & \gt \sqrt{0} \\
        |x| & \gt 0 \\
        x & \in (-\infty;0)\cup(0;+\infty)
    \end{align}$$</td>
<td><font color="1570bd"><i>Вихідна нерівність<br><br>Множимо обидві частини на $$3$$<br><br>Спрощуємо<br>Віднімаємо $$3$$ від обох частин<br>Спрощуємо<br>Знаходимо квадратні корені обох частин<br>Спрощуємо<br>Записуємо розв'язок у інтервальному вигляді</i></font></td>
</tr>
</table>

<p>Зображуємо розв’язок на числовій осі: </p>
<div class="space"><p align="center"><img align="middle" width="75%" class="image" src="../pics/142/p24_19.png"/></p></div>
<p>Отже, при $$a=0$$ маємо $$x\in(-\infty;0)\cup(0;\infty)$$.</p>
<p>Розглядаємо тепер інші випадки, коли $$a\neq0$$.</p>
<p>У загальному випадку застосуємо метод інтервалів.</p>
<ol>
<li>Зводимо нерівність до стандартного вигляду $$\dfrac{P(x)}{Q(x)}>0$$ або $$\dfrac{P(x)}{Q(x)}<0$$:</li>

<table style="border: none;" class="none">
<tr>
<td>$$
    \begin{align}
        \dfrac{x^2+3}{3 - ax} & \gt 1 \\
        \dfrac{x^2+3}{3-ax} - 1 & \gt 0 \\
        \dfrac{x^2+3}{3-ax} - \dfrac{3-ax}{3-ax} & \gt 0 \\
        \dfrac{x^2 + ax}{3-ax} & \gt 0
    \end{align}$$</td>
</tr>
</table>

<li>Шукаємо граничні точки, для цього розкладаємо многочлени з чисельника і знаменника на множники.</li>
<p>В знаменнику все просто: $$3-ax = a\left(\dfrac{3}{a}-x\right)$$, в чисельнику: $$x^2+ax=x(x+a)$$.</p>
<p>Отже, нерівність можна переписати у вигляді:</p>
<p align="center">$$\dfrac{P(x)}{Q(x)}=\dfrac{x(x+a)}{a\left(\dfrac{3}{a}-x\right)}>0$$</p>
<li>Граничні точки чисельника: $$x=0,x=-a$$; знаменника: $$x=\dfrac{3}{a}$$</li>
<p>Для того, щоб зобразити ці точки на числовій прямій, розглядаємо два випадки: </p>
<ul>
<li>$$a>0$$: тоді має місце співвідношення $$-a<0<\dfrac{3}{a}$$.</li>
<li>$$a<0$$: тоді має місце співвідношення $$\dfrac{3}{a}<0<-a$$.</li>
</ul>
<li>Шукаємо знак функції на правому інтервалі і потім проставляємо знаки решти інтервалів:</li>
<ul>
<li>$$a>0$$: підставляємо тестове значення з правого інтервалу $$\left(\dfrac{3}{a};\infty \right)$$ - «<font color="#0F5180"><i>мільярд</i></font>»</li>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/142/p24_e9.png"/></p></div>
<p>Три множники додатні, один від’ємний – функція на цьому інтервалі має від’ємний знак.</p>
<p>Все, що потрібно зробити, – проставити знаки на решті інтервалів справа наліво, почергово змінюючи знак на протилежний:</p>
<div class="space"><p align="center"><img align="middle" width="75%" class="image" src="../pics/142/p24_20.png"/></p></div>
<li>$$a<0$$: підставляємо тестове значення з правого інтервалу $$(-a;\infty)$$ - «<font color="#0F5180"><i>мільярд</i></font>»</li>
<div class="space"><p align="center"><img align="middle" width="70%" height="70%" class="image" src="../pics/142/p24_e10.png"/></p></div>
<p>Два множники додатні, два від’ємні – функція на цьому інтервалі має додатний знак.</p>
<p>Все, що потрібно зробити, – проставити знаки на решті інтервалів справа наліво, почергово змінюючи знак на протилежний:</p>
<div class="space"><p align="center"><img align="middle" width="75%" class="image" src="../pics/142/p24_21.png"/></p></div>
</ul>
<li>Залишилось обрати інтервали, де функція додатна, бо за умовою $$\dfrac{P(x)}{Q(x)}>0$$</li>
<ul>
<li>$$a>0$$: обираємо інтервали $$(-\infty;-a)$$ та $$\left(0;\dfrac{3}{a}\right)$$.</li>
<li>$$a<0$$: обираємо інтервали $$\left(\dfrac{3}{a};0\right)$$ та $$(-a;\infty)$$.</li>
</ul>
</ol>
    </div>
    <div class="tab-pane" id="answer">
<b>Вiдповiдь.</b> <p>Запишемо загальний результат:</p>
<ul>
<li>при $$a=0: x \in (-\infty;0) \cup (0;\infty);$$</li>
<li>при $$a>0: x \in (-\infty;-a) \cup \left(0;\dfrac{3}{a}\right)$$;</li>
<li>при $$a<0: x \in \left(\dfrac{3}{a};0\right) \cup (-a;\infty)$$.</li>
</ul>
    </div>
    <div class="tab-pane" id="hide"></div>
</div>
</p>
</div>
</div>
</div>
<div class="space"></div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
 <question multiple>
        <p>Які типи критичних значень параметра зустрінуться під час розв'язання нерівності $$\dfrac{(a-1)x^2-5x+10}{5(a-2)}>0$$?</p>
        <answer correct> перетворення квадратичного виразу на лінійний</answer>
        <answer correct> рівність дискримінанту нулеві</answer>
        <answer correct> рівність знаменнику нулеві</answer>
        <answer> рівність підмодульного виразу нулеві</answer>
</question>
</quiz>