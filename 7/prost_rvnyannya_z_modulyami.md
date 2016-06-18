#Рiвняння з модулями
#Прості рівняння з модулями

<p>Під час розв’язання рівнянь, що містять знаки модуля, потрібно пам’ятати означення модуля (див. пункт 1.5 <a href="http://math.ed-era.com/1/modul_chisla.html">Модуль числа</a>)</p>

<div class="fluidMedia">
<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/ikfzkBjvq3k" frameborder="0" allowfullscreen></iframe>
</div>
<div class="popup">
</div>

<br>
<p>Розглянемо загальний вигляд простого рівняння зі знаком модуля $$|f(x)|=g(x)$$. За означенням, якщо $$g(x)<0$$, таке рівняння коренів не матиме (значення модуля завжди невід’ємне). Якщо $$g(x)\geq0$$, то рівняння $$|f(x)|=g(x)$$ зводиться до сукупності двох рівнянь: $$|f(x)|\pm g(x)$$.</p>

<p>Саме тому можна користуватися рівносильним переходом:</p>

<p align="center">$$|f(x)|=g(x) \Longleftrightarrow \begin{cases}
\left[ \begin{gathered}
f(x)=g(x), \hfill \\
f(x)=-g(x), \hfill
\end{gathered}
\right.\\
g(x)\geq0.
\end{cases}$$
</p>

<p>Таким чином, потрібно розв’язати два рівняння $$f(x)=g(x)$$ та $$f(x)=-g(x)$$, після чого залишити лише ті корені, які задовольняють умову $$g(x)\geq0$$.</p>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Розв’язати рівняння $$|3x-5|=8x-1$$.</p>
<p>
<ul class="nav-tab" id="mytab">
    <button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
    <button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
    <button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
    <div class="tab-pane" id="decision">
<p><b><i>Розв’язок.</i> </b> </p>
<p>Скористаємось ланцюжком рівносильних переходів:</p>
<p align="center">$$|3x-5|=8x-1 \Longleftrightarrow \begin{cases}
			\left[ \begin{gathered}
			3x-5=8x-1, \hfill \\
			3x-5=-(8x-1), \hfill
			\end{gathered}
			\right.\\
			8x-1\geq0;
			\end{cases} \Longleftrightarrow \begin{cases}
			\left[ \begin{gathered}
			-5x=4, \hfill \\
			11x=6, \hfill
			\end{gathered}
			\right.\\
			x\geq\dfrac{1}{8};
			\end{cases} \Longleftrightarrow$$
</p>
<p align="center">$$\Longleftrightarrow \begin{cases}
			\left[ \begin{gathered}
			x=-\dfrac{4}{5}, \hfill \\
			x=\dfrac{6}{11}, \hfill
			\end{gathered}
			\right.\\
			x\geq\dfrac{1}{8};
			\end{cases} \Longleftrightarrow  x=\dfrac{6}{11}.$$
</p>
<p>Було розв’язано два рівняння та знайдено їхні корені $$x_1=-\dfrac{4}{5};x_2=\dfrac{6}{11}$$. Після цього був відібраний лише один корінь $$x=\dfrac{6}{11}$$, щоб задовольнити означення модуля.</p>
    </div>
    <div class="tab-pane" id="answer">
<p><b>Відповідь.</b> $$\dfrac{6}{11}$$.</p>
    </div>
    <div class="tab-pane" id="hide"></div>
</div>
</p>
</div>
</div>
</div>
<div class="space"></div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question text="">
        <p>Яке з чисел є коренем рівняння $$|x-3|=4x+6$$?</p>
        <answer> $$x=0$$</answer>
        <answer> $$x=\dfrac{2}{3}$$</answer>
        <answer> $$x=-1$$</answer>
        <answer correct> $$x=-\dfrac{3}{5}$$</answer>
        </question>
</quiz>