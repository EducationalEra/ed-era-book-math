# Дробово-рацiональнi вирази

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span> 
<div class="eoz-text">
<b>Дробово-раціональним</b> називають вираз вигляду $$\dfrac{M}{N}$$, де $$M, N$$ - многочлени.
</div>
</div>
</div>

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span> 
<div class="eoz-text">
<b>Область допустимих значень (ОДЗ)</b> – множина значень змінних виразу, при яких цей вираз визначений та має сенс. Розглянемо дріб $$\dfrac{M}{N}$$: многочлен $$N$$, що стоїть у знаменнику, не може дорівнювати нулеві (бо на нуль ділити не можна). Таким чином ОДЗ такого виразу — будь-які значення змінних, окрім тих, при яких $$N \neq 0$$.
</div>
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Знайти ОДЗ виразу $$\dfrac{\left(x-\dfrac{3}{x}\right)(x+5)(x-8)}{x^2-9}.$$</p>

<p>
<ul class="nav-tab" id="pr">
<button class="btn" data-target="#decision" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide" data-toggle="tab">Приховати</button>
</ul>

<div id="pr" class="tab-content">
  <div class="tab-pane" id="decision">
<p>Продивимось «проблемні» зони цього виразу – знаменники, вони не повинні бути рівними нулеві. Із першого множника чисельника $$\left(x-\dfrac{3}{x}\right)$$ знаходимо, що $$x\neq 0,$$ вносимо цей вираз до ОДЗ. Із загального знаменника бачимо, що $$x^2-9\neq 0.$$ Розкладаємо на множники: $$(x-3)(x+3)\neq 0.$$ Отже, $$x\neq \pm 3,$$ вносимо це до ОДЗ. Загалом, маємо ОДЗ: $$x\neq 0, \pm 3.$$</p>

  </div>
  <div class="tab-pane" id="answer"><p><b>Вiдповiдь.</b>$$x\neq 0, \pm 3.$$</p></div>
  <div class="tab-pane" id="hide"></div>
</div>
</p>

</div>
</div>
</div>

<p>Поняття ОДЗ будемо використовувати надалі при розгляді ірраціональних виразів, рівнянь та нерівностей.</p>

<p><b>Дії з дробово-раціональними виразами:</b></p>
* Зведення до спільного знаменника, додавання, віднімання, множення та ділення дробово-раціональних виразів підпорядковуються тим самим правилам, що й звичайні дроби.
* Множення/ділення чисельника і знаменника одночасно на одне й те саме число (скорочування спільних множників для чисельника і знаменника). При цьому важливо не забувати про ОДЗ після скорочення (воно лишається навіть у тому разі, коли вираз, який його давав, скоротився).

<div class="space">
</div>

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span> 
<div class="eoz-text">
<p><b>Рівність дробу нулеві.</b> Дріб $$\dfrac{M}{N}$$ дорівнює нулеві за умови, що вираз $$M$$ у чисельнику рівний нулеві, а вираз $$N$$ у знаменнику відмінний від нуля:</p>
<p align="center">$$\begin{cases}
	M=0;\\
	N\neq0;
	\end{cases}
	\Longrightarrow \dfrac{M}{N}=0.$$</p>
</div>
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Знайдемо, за яких значень $$x$$ виконується рівність $$\dfrac{(x-3)(x+5)(x-6)}{x^2-9}=0.$$</p>

<p>
<ul class="nav-tab" id="pr1">
<button class="btn" data-target="#decision1" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer1" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide1" data-toggle="tab">Приховати</button>
</ul>

<div id="pr1" class="tab-content">
  <div class="tab-pane" id="decision1">
<p>З умови рівності дробу нулеві прирівнюємо чисельник нулеві та перевіряємо, щоб знаменник був відмінний від нуля (це і є ОДЗ).</p>
<p>ОДЗ: $$x^2-9=(x-3)(x+3)\neq 0 \Longrightarrow x \neq \pm 3.$$ Чисельник рівний нулеві, якщо хоча б один з множників дорівнює нулю:</p>
<p align="center">$$(x-3)(x+5)(x-6)=0 \Longleftrightarrow
	\begin{cases}
	x-3=0;\\
	x+5=0;\\
	x-6=0;
	\end{cases}
	\Longleftrightarrow
	\begin{cases}
	x=3;\\
	x=-5;\\
	x=6.
	\end{cases}
	$$
</p>
<p>Перевіряємо, чи задовольняють знайдені значення ОДЗ. В результаті даний в умові дробово-раціональний вираз рівний нулеві лише при 
	$$\begin{cases}
	x=-5;\\
	x=6.
	\end{cases}$$</p>

  </div>
  <div class="tab-pane" id="answer1"><p><b>Вiдповiдь.</b>$$\begin{cases}
	x=-5;\\
	x=6.
	\end{cases}$$</p></div>
  <div class="tab-pane" id="hide1"></div>
</div>
</p>

</div>
</div>
</div>

<div class="space"></div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question text="">
        <p>Знайдіть ОДЗ виразу: $$\dfrac{(x+\dfrac{2}{x-2})(x-4)}{x^2-4}$$</p>
        <answer> $$x \neq -2$$</answer>
        <answer> $$x \neq 2$$</answer>
        <answer correct> $$x \neq \pm 2$$</answer>
        <answer> $$x \neq 4$$</answer>
        <answer> $$x \neq \pm 4$$</answer>
        <explanation>
         Із першого множника чисельника $$\dfrac{2}{x-2}$$ знаходимо, що $$x\neq2$$.<br>Із загального знаменника бачимо, що $$x^2-4\neq0$$.<br>Розкладаємо на множники: $$(x+2)(x-2)\neq0$$.<br>Отже, $$x\neq\pm2$$.
        </explanation>
    </question>
    <question text="">
        <p>При якому значенні $$x$$ справджується рівність: $$\dfrac{(x+3)(x-5)}{x^2-25}$$</p>
        <answer correct> $$x=-3$$</answer>
        <answer> $$x=-3,5$$</answer>
        <answer> $$x=5$$</answer>
        <answer> $$x=\pm5$$</answer>
        <answer> $$x=\pm3$$</answer>
        <explanation>
        Знайдемо ОДЗ: $$x\neq\pm5$$.<br>Рівність дробу нулю справджується при $$x=-3; 5$$.<br>Отже, єдиною відповіддю є $$x=-3$$.
        </explanation>
    </question>
</quiz>