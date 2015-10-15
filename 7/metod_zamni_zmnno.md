#Метод заміни змінної

<p>Цей метод вже використовували для розв’язання біквадратних рівнянь.</p>

<p>В загальному випадку метод заміни змінної полягає ось у чому:</p>

<ol>
<li>Для розв’язання рівняння $$P(x)=0$$ вводимо нову змінну $$t=f(x)$$.</li>
<li>Після цього $$P(x)$$ виражається через $$t$$, і в результаті записують нове рівняння $$Q(t)=0$$. Заміна повинна бути такою, щоб рівняння $$Q(t)=0$$ було простішим у розв’язанні за вихідне $$P(x)=0$$.</li>
<li>В результаті розв’язання нового рівняння $$Q(t)=0$$ знайдені корені $$t_1, t_2,\dots, t_m$$.</li>
<li>Тепер розв'язуємо сукупність рівнянь:$$\left[ \begin{gathered}
		f(x) = t_1, \hfill \\
		f(x) = t_2, \hfill \\
		\cdots \hfill \\
		f(x) = t_m. \hfill
		\end{gathered}
		\right.$$
</li>
<li>В результаті розв’язання всіх рівнянь сукупності знаходять множину розв’язків вихідного рівняння $$P(x)=0$$: $$x_1,x_2,\dots,x_n$$.</li>
</ol>

<p>Універсальних правил для відшукання заміни немає, все залежить від конкретного прикладу.</p>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Розв’язати рівняння $$(2x-5)^4-5(2x-5)^2+4=0$$.</p>
<p><b><i>Розв'язок.</i></b> Покладемо $$t=(2x-5)^2$$, тоді вихідне рівняння зводиться до:</p>
<p align="center">$$t^2-5t+4=0.$$</p>
<p>За т. Вієта, $$t_1 + t_2=5;t_1\cdot t_2=4$$. Ці умови задовольняють корені: $$t_1=1; t_2=4$$.</p>
<p>Тепер, повернувшись до вихідної змінної, потрібно розв’язати сукупність рівнянь:</p>
<p align="center">$$\left[ \begin{gathered}
			(2x-5)^2=1, \hfill \\
			(2x-5)^2=4; \hfill \\
			\end{gathered}
			\right. \Longleftrightarrow \left[ \begin{gathered}
			|2x-5|=1, \hfill \\
			|2x-5|=2; \hfill \\
			\end{gathered}
			\right. \Longleftrightarrow \left[ \begin{gathered}
			2x-5=1, \hfill \\
			2x-5=-1, \hfill \\
			2x-5=2, \hfill \\
			2x-5=-2; \hfill \\
			\end{gathered}
			\right. \Longleftrightarrow \left[ \begin{gathered}
			x=3, \hfill \\
			x=2, \hfill \\
			x=3,5, \hfill \\
			x=1,5. \hfill \\
			\end{gathered}
			\right.$$
</p>
<p><b>Відповідь.</b>$$\{1,5; 2; 3; 3,5\}.$$</p>
</div>
</div>
</div>

<div class="fluidMedia">
<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/PSqWe4i7WAM" frameborder="0" allowfullscreen></iframe>
</div>
<div class="popup">
</div>

<p>Якщо у рівняннях вигляду $$(x+a)(x+b)(x+c)(x+d)=e$$ виконується рівність $$a+b=c+d=k$$ або інших пар цих чисел, зручно розкрити дужки, згрупувавши множники попарно (при рівності $$a+b=c+d$$ — перший з другим, та третій з четвертим) та скористатись заміною вигляду: $$t=x^2+kx$$.</p>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Розв’язати рівняння $$(x-1)(x+2)(x+4)(x+1)=-5$$.</p>
<p><b><i>Розв'язок.</i></b> Розкриємо дужки, групуючи перший множник з третім та другий з останнім. Рівняння набуде вигляду:</p>
<p align="center">$$(x^2+3x-4)(x^2+3x+2)=-5.$$</p>
<p>Робимо заміну $$t=x^2+3x$$, отримуємо таке рівняння:</p>
<p align="center">$$(t-4)(t+2)=-5 \Longleftrightarrow t^2-2t-3=0.$$</p>
<p>За т. Вієта, $$t_1+t_2=2;t_1\cdot t_2=-3$$. Ці умови задовольняють корені: $$t_1=3; t_2=-1$$.</p>
<p>Тепер, повернувшись до вихідної змінної, потрібно розв’язати сукупність рівнянь:</p>
<p align="center">$$\left[ \begin{gathered}
			x^2+3x=2, \hfill \\
			x^2+3x=4. \hfill
			\end{gathered}
			\right.$$
</p>
<p>Розв’язуємо перше рівняння: $$x^2+3x-3=0$$.</p>
<p>Шукаємо дискримінант: $$D=(3)^2 - 4\cdot1\cdot(-3) = 21 > 0$$, отже, рівняння має два дійсних корені:</p>
<p align="center">$$x_1 = \dfrac{-3 + \sqrt{21}}{2}; x_2 = \dfrac{-3 - \sqrt{21}}{2}.$$</p>
<p>Переходимо до другого рівняння: $$x^2+3x+1=0$$.</p>
<p>Шукаємо дискримінант: $$D=(3)^2 - 4\cdot1\cdot1 = 5 > 0$$, отже, рівняння має два дійсних корені:</p>
<p>$$x_3 = \dfrac{-3 + \sqrt{5}}{2}; x_4 = \dfrac{-3 - \sqrt{5}}{2}.$$</p>
<p><b>Відповідь.</b>$$\{\dfrac{-3 \pm \sqrt{21}}{2};\dfrac{-3 \pm \sqrt{5}}{2}\}$$</p>
</div>
</div>
</div>


<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question text="">
        <p>Якою заміною скористатись при розв’язанні рівняння $$11x^4-12=4(9-3x^3)$$?</p>
        <answer correct>$$t=x^2$$</answer>
        <answer>$$t=−x$$</answer>
        <answer>$$t=x^4$$</answer>
        <answer>$$t=-2x^3$$</answer>
        </question>
<quiz>