# Показникові рівняння

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
<b>Показникове рівняння</b> — це рівняння, що містить змінну в показнику степеня.
</div>

<p><i>Наприклад,<i> $$2^𝑥 = 4; 3^{(𝑥−8)} = 5^𝑥; (2 − 𝑥)^{3𝑥} = 6^𝑥.$$</p>     
<p>Дуже часто використовують <b>метод зведення до однієї основи</b>.     
Розпочнемо з простого рівняння: $$ 5^{𝑥−1} = 125$$. Якщо уважно подивитись, то праву частину можна
переписати у вигляді $$ 5^3: 5^{𝑥−1} = 5^3$$. Тепер, як ми звели всі доданки до однієї основи можна
скористатись таким правилом: два степеневих вирази рівні тоді і тільки тоді, коли рівні їхні
основи та показники степеня. Основи вже є однаковими, тому можна записати рівність показників
степеня: $$𝑥 − 1 = 3,$$ звідки знаходимо $$x = 4.$$      
<p>Поглянемо на інше рівняння: $$9^{3𝑥−7} =\sqrt{13}.$$
Це рівняння можна звести до спільної основи $$3$$. Рівняння
можна переписати як $$ 3^{2(3𝑥−7)} = 3^{−1}$$. В результаті все спрощується за таким самим принципом,
прирівнюємо показники степеня виразів з однаковими основами: $$ 2(3𝑥 − 7) = −1 \Longleftrightarrow 3𝑥 − 7 =-\dfrac {1}{2}.$$
Звідки дістаємо відповідь $$x = \dfrac{13}{6}$$.       
Загальний принцип розв’язання показникових рівнянь полягає в <b>логарифмуванні</b> (див. <a href="https://study.ed-era.com/courses/EdEra/m102/M102/courseware/39ab5698abc64e859b629b9006c8a7cd/5992a8a56dbc4832a0e8a913fe62158d">Лекцію 5</a>) обох частин рівняння. Основу обирають такою, аби позбутися змінної в показнику степеня.        

<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">    
<b>Розв’язати рівняння $$2^{4x-3} = 5^x.$$</b>    
<p><b><i>Розв’язок</i></b></p>
Звести до однієї основи тут не вийде, тому застосовуємо логарифмування: 

<table style="border: none;" class="none">
<tr>
<td>$$2^{4x-3} = 5^x$$</td>
<td><i class="expl">Вихідне рівняння</font></i></td>
</tr>
<tr>
<td><i class="expl">$$log_{2}$$</i>$$2^{4𝑥−3} =$$ <i class="expl">$$log_{2}$$</i>$$5^{x}$$</td>
<td><i class="expl">Логарифмуємо обидві частини за основою $$2$$</i></td>
</tr>
<tr>
<td><i class="expl">$$(4𝑥−3)$$</i>$$log_{2} 2 =$$<i class="expl">$$x$$</i>$$ log_{2}5$$</td>
<td><i class="expl">Виписуємо показник підлогарифмічного виразу</i></td>
</tr>
<tr>
<td>$$4𝑥−3 =x log_{2}5$$</td>
<td><i class="expl">Cпрощуємо</i></td>
</tr>
<tr>
<td>$$4𝑥$$<i class="expl">$$- xlog_{2}5 $$</i>$$=$$<i class= "expl">$$3$$</i></td>
<td><i class="expl">Залишаємо всі доданки з $$x$$ в лівій частині</i></td>
</tr>
<tr>
<td><i class="expl">$$x$$</i>$$(4- log_{2}5) = 3$$</td>
<td><i class="expl">Виносимо $$x$$ за дужки</i></td>
</tr>
<tr>
<td>$$x=\dfrac{3}{4-log_{2}5}$$</td>
<td><i class="expl">Ділимо обидві частини на $$4-log^{2}5$$</i></td>
</tr>
</table>
<p><b>Вiдповiдь.</b>$$x = \dfrac{3}{4-log_{2}5}.$$</p>
</div>
</div>
</div>

<div class="space">
<div class="ebio-wrap">
<span class="ebio"> Рівносильний перехід</span>
<div class="ebio-text">      
В загальному випадку можна записати такий рівносильний перехід: 
<p align="center">$$a^{f(x)} = b^{g(x)} \Longleftrightarrow f(x) = g(x)\cdot log_ab,$$</p>
при цьому потрібно пам’ятати, що $$𝑎 > 0, 𝑎\ne 1, 𝑏 > 0, 𝑏 \ne 1$$, інакше перехід не можна назвати рівносильним і таке рівняння не матиме коренів.
</div>
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<b>Розв’язати рівняння $$ 7^{5𝑥−1} = \left(\dfrac{1}{2}\right)^{4-x}$$.</b>
<p><b><i>Розв’язок.</i></b></p>        
Звести до однієї основи, тому скористаємось рівносильним переходом:
<p align="center">$$ 7^{5𝑥−1} =\left(\dfrac{1}{2}\right)^{4-x} \Longleftrightarrow 5𝑥 − 1 = (4 − 𝑥)log^{}_{7}\dfrac{1}{2}$$       

<table style="border: none;" class="none">
<tr>
<td>$$ 5𝑥 − 1 = (4 − 𝑥)log^{}_{7}\dfrac{1}{2}$$</td>
<td><i class="expl">Вихідне рівняння</font></i></td>
</tr>
<tr>
<td>$$5𝑥 − 1 = 4log^{}_{7}\dfrac{1}{2}-xlog^{}_{7}\dfrac{1}{2}$$</td>
<td><i class="expl">Розкриємо дужки в правій частині рівняння</i></td>
</tr>
<tr>
<td>$$5x + xlog^{}_{7}\dfrac{1}{2}=1+ 4log^{}_{7}\dfrac{1}{2}$$</td>
<td><i class="expl">Залишаємо всі доданки з 𝑥 в лівій частині</i></td>
</tr>
<tr>
<td>$$x\left(5 + log^{}_{7}\dfrac{1}{2}\right)=1+ 4log^{}_{7}\dfrac{1}{2}$$</td>
<td><i class="expl">Виносимо 𝑥 за дужки</i></td>
</tr>
<tr>
<td>$$x=\dfrac{1+ 4log^{}_{7}\dfrac{1}{2}}{5 + log^{}_{7}\dfrac{1}{2}}$$</td>
<td><i class="expl">Ділимо обидві частини на $$5+log^{}_{7}\dfrac{1}{2}$$</i></td>
</tr>
</table>        
<p><b>Вiдповiдь.</b> $$x=\dfrac{1+ 4log^{}_{7}(\dfrac{1}{2})}{5 + log^{}_{7}(\dfrac{1}{2})}$$.</p>
</div>
</div>
</div>

<p>Разом зі зведенням до спільної основи дуже часто користуються <b>методом заміни змінної</b>.
Рівняння зводять до спільної основи, яку замінюють на іншу змінну. Далі рівняння вже не є показниковим і легко розв’язується.</p> 

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<b>Розв’язати рівняння $$5\cdot9^x+3\cdot25^x=\dfrac{8}{15^{-x}}.$$</b>
<p><b><i>Розв’язок.</i></b></p>

<table style="border: none;" class="none">
<tr>
<td>$$5\cdot9^x+3\cdot25^x=\dfrac{8}{15^{-x}}$$</td>
<td><i class="expl">Вихідне рівняння</font></i></td>
</tr>
<tr>
<td>$$5\cdot3^{2x}+3\cdot5^{2x}={8}\cdot{15^{x}}$$
$$5\cdot3^{2x}+3\cdot5^{2x}={8}\cdot3^{x}\cdot5^{x}$$</td>
<td><i class="expl">Перепишемо в іншому вигляді</i></td>
</tr>
<tr>
<td>$$5\cdot\dfrac{3^{2x}}{5^{2x}}+3\cdot\dfrac{5^{2x}}{5^{2x}}={8}\cdot\dfrac{3^{x}\cdot5^{x}}{5^{2x}}$$</td>
<td><i class="expl">Ділимо обидві частини на $$5^{2x}$$</i></td>
</tr>
<tr>
<td>$$5\cdot{\left(\dfrac{3}{5}\right)}^{2x}+3={8}\cdot{\left(\dfrac{3}{5}\right)}^{x}$$</td>
<td><i class="expl">Спрощуємо</i></td>
</tr>
<tr>
<td>$$5t^2+3=8t$$</td>
<td><i class="expl">Робимо заміну $${\left(\dfrac{3}{5}\right)}^x=t$$ </i></td>
</tr>
<tr>
<td>$$5t^2-8t+3=0$$ </td>
<td><i class="expl">Перепишем всі доданки з однієї сторони</i></td>
</tr>
<tr>
<td>$$D={(-8)}^2-4\cdot3\cdot5=4$$ 
<p>$$x^{}_{1,2}=\dfrac{8 ± \sqrt{4}}{2\cdot5}=\left[ \begin{gathered}
	1, \hfill \\
	\dfrac{3}{5} \hfill \\
	\end{gathered}
	\right. $$  </td>
<td><i class="expl">Розв’язуємо квадратне рівняння</i></td>
</tr>
<tr>
<td>$$\left[ \begin{gathered}
	{\left(\dfrac{3}{5}\right)}^{x}=1, \hfill \\
	{\left(\dfrac{3}{5}\right)}^{x}=\dfrac{3}{5} \hfill \\
	\end{gathered}
	\right. $$</td>
<td><i class="expl">Повертаємось до попередньої змінної</i></td>
</tr>
<tr>
<td>
$$\left[ \begin{gathered}
	{\left(\dfrac{3}{5}\right)}^{x}=\left(\dfrac{3}{5}\right)^{0}, \hfill \\
	{\left(\dfrac{3}{5}\right)}^{x}=\left(\dfrac{3}{5}\right)^1 \hfill \\
	\end{gathered}
	\right. $$</td>
<td><i class="expl">Зводимо до спільної основи</i></td>
</tr> 
<tr>
<td>$$x=0,$$ 
<p>$$x=1$$</p>  </td>
<td><i class="expl">Позбуваємось показника степеня</i></td>
</tr>
</table>

<p><b>Вiдповiдь.</b> $$x$$ = {0;1}.</p> 
</div>
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<b>Розв’язати рівняння $$4^{\frac{x+2}{2x}}-33\cdot2^{\frac{1}{x}}+16=0$$</b>    
<p><b><i>Розв’язок</i></b></p>
<table style="border: none;" class="none">
<tr>
<td>$$4^{\frac{x+2}{2x}}-33\cdot2^{\frac{1}{x}}+16=0$$</td>
<td><i class="expl">Вихідне рівняння</font></i></td>
</tr>
<tr>
<td>$$2^{\frac{x+2}{x}}-33\cdot2^{\frac{1}{x}}+16=0$$
$$2^{\frac{2}{x}+1}-33\cdot2^{\frac{1}{x}}+16=0$$
$$2\cdot2^{\frac{2}{x}}-33\cdot2^{\frac{1}{x}}+16=0$$</td>
<td><i class="expl">Перепишемо в іншому вигляді</i></td>
</tr>
<tr>
<td>$$2\cdot t^2-33\cdot t+16=0$$</td>
<td><i class="expl">Робимо заміну $$2^{\frac{1}{x}}=t$$ </i></td>
</tr>
<tr>
<td>$$D=(-33)^2-4\cdot2\cdot16=961$$
$$x_{1,2}=\dfrac{33±\sqrt{961}}{2\cdot2}=\dfrac{33±31}{4}= \left[ \begin{gathered}
	\dfrac{1}{2}, \hfill \\
	16 \hfill \\
	\end{gathered}
	\right. $$</td>
<td><i class="expl">Розв’язуємо квадратне рівняння </i></td>
</tr>
<tr>
<td>$$\left[ \begin{gathered}
	{2}^{\frac{1}{x}}=\dfrac{1}{2}, \hfill \\
	{2}^{\frac{1}{x}}=16 \hfill \\
	\end{gathered}
	\right.$$</td>
<td><i class="expl">Повертаємось до попередньої змінної </i></td>
</tr>
<tr>
<td>$$\left[ \begin{gathered}
	{2}^{\frac{1}{x}}=2^{-1}, \hfill \\
	{2}^{\frac{1}{x}}=2^4 \hfill \\
	\end{gathered}
	\right.$$</td>
<td><i class="expl">Зводимо до спільної основи </i></td>
</tr>
<tr>
<td>$$\left[ \begin{gathered}
	\dfrac{1}{x}=-1, \hfill \\
	\dfrac{1}{x}=4 \hfill \\
	\end{gathered}
	\right. \Longleftrightarrow \left[ \begin{gathered}
	x=-1, \hfill \\
	x=\dfrac{1}{4} \hfill \\
	\end{gathered}
	\right.$$</td>
<td><i class="expl">Позбуваємось показника степеня та розв’язуємо дробово-раціональні рівняння</i></td>
</tr>
<p><b>Вiдповiдь.</b> $$x$$ = {0;1}.</p>
</div>
</div>
</div>