#Повне квадратне рівняння та дискримiнант

<p>Скористаємось процедурою виділення повного квадрата з тричлена, яку ви можете знайти у розділі <a href="http://math.ed-era.com/3/rozkladannya_mnogochlena_na_mnozhniki.html">Розкладання многочлена на множники</a>:</p>

<p align="center">$$ax^2 + bx + c = 0.$$</p>

<p>Перед цим домножимо повне квадратне рівняння $$ax^2 + bx + c = 0$$ на $$4a$$:</p>

<p align="center">$$4a^2x^2 + 4abx + 4ac = 0.$$</p>

<p>Представляємо перший доданок у вигляді квадрата деякого виразу $$X$$:</p>

<p align="center">$$(2ax)^2 + 4abx + 4ac = 0.$$</p>

<p>Отже, вираз $$X = 2ax$$.</p>

<p>Другий доданок переписуємо так, щоб він мав вигляд $$2XY$$:</p> 

<p align="center">$$(2ax)^2 + 2\cdot2ax\cdot b + 4ac = 0.$$</p>

<p>Звідки вираз $$Y = b$$.</p>

<p>Додаємо та віднімаємо $$Y^2 = b^2$$:</p>

<p align="center">$$(2ax)^2 + 2\cdot2ax\cdot b + b^2 - b^2 + 4ac = 0.$$</p>

<p>Виділяємо повний квадрат $$(X + Y)^2$$ з отриманого виразу:</p>

<p align="center">$$(2ax + b)^2 - b^2 + 4ac =0,$$</p>

<p align="center">$$(2ax + b)^2 = b^2 - 4ac.$$</p>

<p>Для зручності позначимо $$b^2 - 4ac = D$$. Тоді тотожність матиме вигляд:</p>

<p align="center">$$(2ax + b)^2 = D.$$</p>

<p>Можливі три випадки: $$D > 0, D = 0$$ та $$D < 0$$. Розглянемо їх окремо.</p>

<ol>
<li>$$D > 0$$. В такому випадку з $$D$$ можна добути корінь: $$D = (\sqrt{D})^2$$.</li>
<p>Тоді після заміни та застосування формули різниці квадратів маємо рівняння:</p>
<p align="center">$$(2ax + b)^2 = (\sqrt{D})^2 \Longleftrightarrow (2ax + b)^2 - (\sqrt{D})^2 = 0 \Longleftrightarrow (2ax + b - \sqrt{D})(2ax + b + \sqrt{D}) = 0.$$</p>
<p>За однією з властивостей рівносильних перетворень добуток множників рівний нулеві, якщо хоча б один з множників рівний нулеві. Тоді отримуємо:</p>
<p align="center">	$$\left[ \begin{gathered}
	2ax + b - \sqrt{D} = 0 \hfill \\
	2ax + b + \sqrt{D} = 0 \hfill \\
	\end{gathered}
	\right. \Longrightarrow \begin{cases}
	x_1 = \dfrac{-b + \sqrt{D}}{2a},\\
	x_2 = \dfrac{-b - \sqrt{D}}{2a}.
	\end{cases}$$</p>
<p>Таким чином, <b>при</b> $$D > 0$$ <b>рівняння має два корені</b>, що відрізняються лише знаком при $$\sqrt{D}$$. Коротко їх записують у такий спосіб:</p>
<p align="center">$$x_{1,2} = \dfrac{-b \pm \sqrt{D}}{2a} = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}.$$</p>
<li>$$D = 0$$. В такому випадку маємо $$(2ax + b)^2 = 0 \Longleftrightarrow 2ax + b = 0 \Longleftrightarrow x = -\dfrac{b}{2a}$$.</li>
<p>Цей корінь можна також отримати і з вищенаведеної формули для коренів $$x_{1,2}$$, поклавши в ній $$D = 0$$.</p>
<p>Таким чином, <b>при</b> $$D = 0$$ <b>рівняння має один корінь</b> (а точніше, два однакових корені).</p>
<li>$$D < 0$$. В такому випадку рівняння $$(2ax + b)^2 = D < 0$$ не матиме дійсних коренів, бо будь-який вираз у квадраті завжди є невід’ємним.</li>
</ol>

<div class="space"></div>

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
За знаком виразу $$D = b^2 - 4ac$$ можна визначити, скільки дійсних коренів матиме рівняння $$ax^2 + bx + c = 0$$. Цей вираз $$D$$ називають <b>дискримінантом</b>.
</div>
</div>
</div>

<ul>
<li>при $$D > 0$$ рівняння має два дійсних корені;</li>
<li>при $$D = 0$$ рівняння має один дійсний корінь (два однакових);</li>
<li>при $$D < 0$$ рівняння не має дійсних коренів.</li>
</ul>

<div class="space"></div>

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
Формула коренів квадратного рівняння:
<p align="center">$$x_{1,2} = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}.$$</p>
</div>
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<ol>
<li>Розв’язати рівняння: $$x^2 - 5x + 6 = 0$$.</li>


<p>
<ul class="nav-tab" id="mytab">
    <button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
    <button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
    <button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
    <div class="tab-pane" id="decision">
<br> 
<p>Шукаємо дискримінант: $$D = (-5)^2 - 4\cdot1\cdot6 = 25 - 24 = 1 > 0$$, отже рівняння має два дійсних корені:</p>
<p align="center">$$x_1 = \dfrac{5 + \sqrt{1}}{2} = 3$$; $$x_2 = \dfrac{5 - \sqrt{1}}{2} = 2.$$</p>
    </div>
    <div class="tab-pane" id="answer"> 
<p><b>Відповідь.<b> $$x_1 = 3$$, $$x_2 = 2.$$</p>
    </div>
    <div class="tab-pane" id="hide"></div>
</div>
</p>


<li>Розв’язати рівняння: $$x^2 + 4x + 4 = 0$$.</li>

<p>
<ul class="nav-tab" id="pr1">
<button class="btn" data-target="#decision1" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer1" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide1" data-toggle="tab">Приховати</button>
</ul>

<div id="pr1" class="tab-content">
  <div class="tab-pane" id="decision1">
<br>
<p>Шукаємо дискримінант: $$D = (4)^2 - 4\cdot1\cdot4 = 16 - 16 = 0$$, отже, рівняння має один дійсний корінь:</p>
<p align="center">$$x = \dfrac{-4}{2\cdot1} = -2.$$</p>
    </div>
  <div class="tab-pane" id="answer1"> 
<p><b>Відповідь.<b> $$x = -2.$$</p>
    </div>
  <div class="tab-pane" id="hide1"></div>
</div>
</p>

<li>Розв’язати рівняння: $$3x^2 + 2x + 1 = 0$$.</li>

<p>
<ul class="nav-tab" id="pr2">
<button class="btn" data-target="#decision2" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer2" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide2" data-toggle="tab">Приховати</button>
</ul>

<div id="pr2" class="tab-content">
    <div class="tab-pane" id="decision2">
<br>
<p>Шукаємо дискримінант: $$D = (2)^2 - 4\cdot3\cdot1 = 4 - 12 = -8 < 0$$, отже, рівняння не має дійсних коренів.</p>
    </div>
    <div class="tab-pane" id="answer2"> 
<p><b>Відповідь.<b> $$x \in \emptyset.$$</p>
    </div>
  <div class="tab-pane" id="hide2"></div>
</div>
</p>
</ol>
</div>
</div>
</div>
<div class="space"></div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question  multiple>
        <p>Розв'язати рівняння: $$x^2+3x-3=7$$</p>
        <answer correct> $$x=2$$</answer>
        <answer> $$x=0$$</answer>
        <answer> $$x=-2$$</answer>
        <answer> $$x=5$$</answer>
        <answer correct> $$x=-5$$</answer>
        <answer> $$x=7$$</answer>
        <answer> $$x=-4$$</answer>
        <explanation>
        <p>Перенесемо доданки з правої частини рівняння в ліву:</p>
        <p>$$x^2+3x-3-7=0$$</p>
        <p>$$x^2+3x-10=0$$</p>
        <p>Знайдемо дискримінант квадратного рівняння:</p>
        <p>$$D=(3)^2-4\cdot1\cdot(-10)=9+40=49$$</p>
        <p>Через те, що дискримінант більше нуля, квадратне рівняння має два дійсних кореня:</p>
        <p>$$x_{1,2}=\dfrac{-3\pm7}{2\cdot1}=\{2,-5\}$$</p>
        </explanation>
        </question>
    <question text="">
    <p>Розв'язати рівняння: $$5x^2-5x=x-5$$</p>
        <answer correct> $$x \in \emptyset$$</answer>
        <answer> $$x=0$$</answer>
        <answer> $$x=1$$</answer>
        <answer> $$x=-1$$</answer>
        <answer> $$x=-5$$</answer>
        <answer> $$x=7$$</answer>
        <answer> $$x=-4$$</answer>
        <explanation>
        <p>Перенесемо доданки з правої частини рівняння в ліву:</p>
        <p>$$5x^2-5x-x+5=0$$</p>
        <p>$$5x^2-6x+5=0$$</p>
        <p>Знайдемо дискримінант квадратного рівняння:</p>
        <p>$$D=(6)^2-4\cdot5\cdot5=36-100=-64$$</p>
        <p>Через те, що дискримінант менше нуля, квадратне рівняння не має дійсних коренів.</p>
        <p>$$x \in \emptyset$$</p>
        </explanation>
        </question>
</quiz>