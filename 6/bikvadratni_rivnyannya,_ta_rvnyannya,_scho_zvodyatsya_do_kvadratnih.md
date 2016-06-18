#Бiквадратнi рiвняння та рівняння, що зводяться до квадратних

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
<b>Біквадратне рівняння</b> — це рівняння вигляду $$ax^4 + bx^2 + c = 0$$, де $$x$$ — змінна, а числа $$a$$, $$b$$ та $$c$$ — відомі, при чому $$a \neq 0$$.
</div>
</div>
</div>

<div class="fluidMedia">
<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/PTxIbXj0iYE" frameborder="0" allowfullscreen></iframe>
</div>
<div class="popup">
</div>

<p>Взагалі будь-яке рівняння вигляду $$ax^{2n} + bx^n + c =0$$ (в тому числі і біквадратне) можна звести до квадратного заміною $$x^n = t$$ (для біквадратного $$x^2 = t$$).</p>
<div class="space"></div>
<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>$$2x^4 + 4x^2 - 48 = 0$$.</p>
<p>
<ul class="nav-tab" id="mytab">
    <button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
    <button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
    <button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
    <div class="tab-pane" id="decision">
<p><b><i>Розв'язок.</i> </b> </p>
<p>Зробимо заміну $$x^2 = t$$:</p>
<p align="center">$$2t^2 + 4t - 48 = 0.$$</p>
<p>Шукаємо дискримінант: $$D = (4)^2 - 4\cdot2\cdot(-48) = 16 + 384 = 400 > 0$$, отже, рівняння має два дійсних коренів:</p>
<p align="center">$$t_1 = \dfrac{-4 + \sqrt{400}}{2\cdot2} = 4; t_2 = \dfrac{-4 - \sqrt{400}}{2\cdot2} = -6.$$</p>
<p>Повертаємось до змінної $$x$$:</p>
<p align="center">$$x^2 = 4;$$</p>
<p align="center">$$x^2 = -6.$$</p>
<p>З першого рівняння маємо $$x_{1,2} = \pm 2$$, а з другого — $$x \in \emptyset$$.</p>
    </div>
    <div class="tab-pane" id="answer">
<p><b>Відповідь.</b> $$x_{1,2} = \pm 2$$.</p>
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
<p>$$x^8 - 17x^4 + 16 = 0$$.</p>
<p>
<ul class="nav-tab" id="pr1">
<button class="btn" data-target="#decision1" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer1" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide1" data-toggle="tab">Приховати</button>
</ul>

<div id="pr1" class="tab-content">
  <div class="tab-pane" id="decision1">
<p><b><i>Розв'язок.</i></p>
<p></b>Зробимо заміну $$x^4 = t$$:</p>
<p align="center">$$t^2 - 17t + 16 = 0.$$</p>
<p>Шукаємо дискримінант: $$D = (-17)^2 - 4\cdot1\cdot16 = 289 - 64 = 225 > 0$$, отже, рівняння має два дійсних коренів:</p>
<p align="center">$$t_1 = \dfrac{17 + \sqrt{225}}{2\cdot1} = 16; t_2 = \dfrac{17 - \sqrt{225}}{2\cdot1} = 1.$$</p>
<p>Повертаємось до змінної $$x$$:</p>
<p align="center">$$x^4 = 16;$$</p>
<p align="center">$$x^4 = 1.$$</p>
<p>З першого рівняння маємо $$x_{1,2} = \pm 2$$, а з другого — $$x_{3,4} = \pm 1$$.</p>
    </div>
  <div class="tab-pane" id="answer1"> 
<p><b>Відповідь.</b> $$x \in \{\pm 1; \pm2\}$$.</p>
    </div>
  <div class="tab-pane" id="hide1"></div>
</div>
</p>    
</div>
</div>
</div>
<div class="space"></div>


<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question  multiple>
        <p>Розв'язати рівняння: $$x^4-16x^2-225=0$$</p>
        <answer correct> $$x=5$$</answer>
        <answer correct> $$x=-5$$</answer>
        <answer> $$x=0$$</answer>
        <answer> $$x=1$$</answer>
        <answer> $$x=-1$$</answer>
        <answer> $$x=3$$</answer>
        <answer> $$x=-3$$</answer>
        <explanation>
        <p>Зробимо заміну $$y = x^2$$, тоді біквадратне рівняння матиме вигляд:</p> 
        <p>$$y^2-16y-225=0$$</p>
        <p>Знайдемо дискримінант квадратного рівняння:</p>
        <p>$$D=(-16)^2-4\cdot1\cdot(-225)=256+900=1156$$</p>
        <p>Через те, що дискримінант більше нуля, квадратне рівняння має два дійсних кореня:</p>
        <p>$$y_{1,2}=\dfrac{16\pm34}{2\cdot1}={25,-9}$$</p>
        <p>Маємо два квадратних рівняння:</p>
        <p>$$(1) x^2=-9$$</p>
        <p>$$(2) x^2=25$$</p>
        <p>Перше квадратне рівняння не має дійсних коренів. Друге квадратне рівняння має два дійсних кореня:</p>
        <p>$$x_{1,2}=\pm5$$</p>
        </explanation>
        </question>
    <question  multiple>
    <p>Розв'язати рівняння: $$x^4+97x^2+1296=0$$</p>
        <answer correct> $$x \in \emptyset$$</answer>
        <answer> $$x=0$$</answer>
        <answer> $$x=4$$</answer>
        <answer> $$x=-4$$</answer>
        <answer> $$x=-5$$</answer>
        <answer> $$x=7$$</answer>
        <answer> $$x=-7$$</answer>
        <explanation>
        <p>Зробимо заміну \(y = x^2\), тоді біквадратне рівняння матиме вигляд:</p>
        <p>$$y^2+97y+1296=0$$</p>
        <p>Знайдемо дискримінант квадратного рівняння:</p>
        <p>$$D=(97)^2-4\cdot1\cdot1296=9409-5184=4225$$</p>
        <p>Через те, що дискримінант більше нуля, квадратне рівняння має два дійсних кореня:</p>
        <p>$$y_{1,2}=\dfrac{-97\pm65}{2\cdot1}={-81,-16}$$</p>
        <p>Маємо два квадратних рівняння:</p>
        <p>$$(1) x^2=-81$$</p>
        <p>$$(2) x^2=-16$$</p>
        <p>Перше і друге квадратні рівняння не мають дійсних коренів.</p>
        <p>$$x \in \emptyset$$</p>
        </explanation>
        </question>
</quiz>