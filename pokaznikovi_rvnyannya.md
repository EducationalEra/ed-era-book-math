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
Загальний принцип розв’язання показникових рівнянь полягає в <b>логарифмуванні</b> (див. [Лекцію 5](https://study.ed-era.com/courses/EdEra/m102/M102/courseware/39ab5698abc64e859b629b9006c8a7cd/5992a8a56dbc4832a0e8a913fe62158d/)) обох частин рівняння. Основу обирають такою, аби позбутися змінної в показнику степеня.        

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
         
<p><b>Вiдповiдь.</b>Відповідь: $$x=\dfrac{1+ 4log^{}_{7}(\dfrac{1}{2})}{5 + log^{}_{7}(\dfrac{1}{2})}$$.
</div>
</div>
</div>

<p>Разом зі зведенням до спільної основи дуже часто користуються <b>методом заміни змінної</b>.
Рівняння зводять до спільної основи, яку замінюють на іншу змінну. Далі рівняння вже не є
показниковим і легко розв’язується. 

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

$$5∙9^x+3∙25^x=\dfrac{8}{15^{-x}}$$  *Вихідне рівняння*   
$$5∙3^{2x}+3∙5^{2x}={8}∙{15^{x}}$$   *Перепишемо в іншому вигляді*
$$5∙3^{2x}+3∙5^{2x}={8}∙5^{x}∙3^{x}$$  *Ділимо обидві частини на*
$$5∙\dfrac{3^{2x}}{5^{2x}}+3∙\dfrac{5^{2x}}{5^{2x}}={8}∙\dfrac{5^{x}∙3^{x}}{5^{2x}}$$     *спрощуємо*          
$$5∙{(\dfrac{3}{5})}^{2x}+3={8}∙{(\dfrac{3}{5})}^{x}$$      
$$5t^2+3=8t$$  ** 
$$5t^2-8t+3=0$$     
$$D={(-8)}^2-4∙3∙5=4$$    
$$x^{}_{1,2}=\dfrac{8 ± √4}{2∙5}=\left[ \begin{gathered}
	1 \hfill \\
	3/5 \hfill \\
	\end{gathered}
	\right. $$  
	$$\left[ \begin{gathered}
	{(\dfrac{3}{5})}^{x}=1 \hfill \\
	{(\dfrac{3}{5})}^{x}=3/5 \hfill \\
	\end{gathered}
	\right. $$          
	$$\left[ \begin{gathered}
	{(\dfrac{3}{5})}^{x}=(\dfrac{3}{5})^{0} \hfill \\
	{(\dfrac{3}{5})}^{x}=(\dfrac{3}{5})^1 \hfill \\
	\end{gathered}
	\right. $$    
	$$x=0$$; 
	$$x=1$$     
Відповідь: 𝑥 = {0; 1}.     


<b>Приклад </b>

Розв’язати рівняння $$4^{\dfrac{x+2}{2x}}-33∙2^{\dfrac{1}{x}}+16=0$$     
Розв’язок       
$$4^{\dfrac{x+2}{2x}}-33∙2^{\dfrac{1}{x}}+16=0$$        
$$2^{\dfrac{x+2}{x}}-33∙2^{\dfrac{1}{x}}+16=0$$     
$$2^{\dfrac{2}{x}+1}-33∙2^{\dfrac{1}{x}}+16=0$$     
$$2∙2^{\dfrac{2}{x}}-33∙2^{\dfrac{1}{x}}+16=0$$     
$$2∙t^2-33∙t+16=0$$     
$$D=(-33)^2-4∙2∙16=961$$        
$$x^{}_{1,2}=\dfrac{33 ± √{961}}{2∙2}=\dfrac{33 ± 31}{4}=\left[ \begin{gathered}
	1/2 \hfill \\
	16 \hfill \\
	\end{gathered}
	\right. $$          
$$\left[ \begin{gathered}
	{2}^{1/x}=(\dfrac{1}{2}) \hfill \\
	{2}^{1/x}=16 \hfill \\
	\end{gathered}
	\right. $$          
$$\left[ \begin{gathered}
	{2}^{1/x}=2^{-1} \hfill \\
	{2}^{1/x}=2^4 \hfill \\
	\end{gathered}
	\right. $$          
$$\left[ \begin{gathered}
	1/x={-1} \hfill \\
	1/x=4 \hfill \\
	\end{gathered}
	\right. $$          
$$\left[ \begin{gathered}
	1/x={-1} \hfill \\
	1/x=4 \hfill \\
	\end{gathered}
	\right. $$      
$$\left[ \begin{gathered}
	x={-1} \hfill \\
	x=1/4 \hfill \\
	\end{gathered}
	\right. $$      
	Відповідь: x={-1;1/4}
	
	
	


