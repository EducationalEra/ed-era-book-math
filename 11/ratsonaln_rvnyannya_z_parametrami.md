# Раціональні рівняння з параметрами

<p>Точно так само, як і для інших видів рівнянь з параметрами, основна концепція при розв’язанні полягає в такому: </p>

<ol>
<li>Знайти «контрольнi» значення параметрiв, при яких у рівнянні вiдбуваються якiснi змiни, наприклад, вираз у знаменнику обертається на нуль.</li>
<li>Знайти всi вирази для коренiв рiвняння при рiзних значеннях параметрiв.</li>
</ol>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
Розв’язати рівняння $$\dfrac{x+5}{ax+2}-\dfrac{ax+4}{1-x}=0$$. 
<p>
<ul class="nav-tab" id="pr1">
<button class="btn" data-target="#decision1" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer1" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide1" data-toggle="tab">Приховати</button>
</ul>

<div id="pr1" class="tab-content">
  <div class="tab-pane" id="decision1">
<p><b><i>Розв’язок</i></b>.</p>
<p>Маємо дробове раціональне рівняння.</p>
<p><div class="fluidMedia">
<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/mbOe51sfq7o" frameborder="0" allowfullscreen></iframe>
</div>
<div class="popup">
</div>
</p>
<p>Зводимо його до стандратного вигляду $$\dfrac{P(x)}{Q(x)} = 0$$:</p>
<p align="center">$$\dfrac{x+5}{ax+2}-\dfrac{ax+4}{1-x}=0$$</p>
<p align="center">$$\dfrac{1-x}{1-x}\cdot\dfrac{x+5}{ax+2}-\dfrac{ax+2}{ax+2}\cdot\dfrac{ax+4}{1-x}=0$$</p>
<p align="center">$$\dfrac{(1-x)(x+5)+(ax+2)(ax-4)}{(ax+2)(1-x)}=0$$</p>
<p align="center">$$\dfrac{x+5-x^2-5x+(ax)^2-4ax+2ax-8}{(ax+2)(1-x)}=0$$</p>
<p align="center">$$\dfrac{({a^2}-1)x^2-(2a+4)x-3}{(ax+2)(1-x)}=0$$</p>
<p align="center">$$(a^2-1) x^2-(2a+4)x-3=0$$</p>
<p>По-перше, розглянемо «контрольні» значення параметра $$a=\pm1$$. Рівняння стане лінійним та матиме один корінь:</p>
<p>При $$a=1$$:</p>
<p align="center">$$-(6\cdot1+2)x-3=0$$</p>
<p align="center">$$-2x-9=0$$</p>
<p align="center">$$x=-\dfrac{9}{2}$$</p>
<p>При $$a=-1$$:</p>
<p align="center">$$-(6\cdot(-1)+2)x-3=0$$</p>
<p align="center">$$-2x+3=0$$</p>
<p align="center">$$x=-\dfrac{3}{2}$$</p>
<p>Якщо $$a\neq\pm1$$, то рівняння є квадратним. Шукаємо дискримінант:</p>
<p align="center">$$D=(2a+4)^2-4\cdot(a^2-1)\cdot(-3)=4a^2+16a+16+12a^2-12=$$</p>
<p align="center">$$=16a^2+16a+4=4(4a^2+4a+1)=4(2a+1)^2\geq0$$</p>
<p>Наступну контрольну точку шукаємо з умови $$D=0$$:</p>
<p align="center">$$4(2a+1)^2=0 \Longleftrightarrow 2a+1=0 \Longleftrightarrow a=-\dfrac{1}{2}$$</p>
<p>Шукаємо розв’язок при $$a=-\dfrac{1}{2}$$:</p>
<p align="center">$$x=\dfrac{2\left(-\dfrac{1}{2} \right)+4}{2\left( \left(-\dfrac{1}{2} \right)^2-1 \right)}=-2$$</p>
<p>В решті випадків, коли $$a \notin \left\{-1;-\dfrac{1}{2};1 \right\}$$, рівняння має два корені:</p>
<p align="center">$$x_{1,2} = \dfrac{2a+4\pm\sqrt{4(2a+1)^2}}{2(a^2-1)}=\dfrac{a+2\pm|2a+1|}{a^2-1}$$</p>
<p>Розглянемо два випадки для позбавлення значка модуля:</p>
<p>При $$a>-\dfrac{1}{2}$$:</p>
<p align="center">$$x_1=\dfrac{a+2+(2a+1)}{a^2-1}=\dfrac{3a+3}{(a+1)(a-1)}=\dfrac{3(a+1)}{(a+1)(a-1)}=\dfrac{3}{a-1}$$</p>
<p align="center">$$x_2=\dfrac{a+2-(2a+1)}{a^2-1}=\dfrac{-a+1}{(a+1)(a-1)}=\dfrac{-1}{a+1}$$</p>
<p>При $$a<-\dfrac{1}{2}$$:</p>
<p align="center">$$x_1=\dfrac{a+2-(2a+1)}{a^2-1}=\dfrac{-a+1}{(a+1)(a-1)}=\dfrac{-1}{a+1}$$</p>
<p align="center">$$x_2=\dfrac{a+2+(2a+1)}{a^2-1}=\dfrac{3a+3}{(a+1)(a-1)}=\dfrac{3(a+1)}{(a+1)(a-1)}=\dfrac{3}{a-1}$$</p>
<p>Бачимо, що корені на цих двох проміжках однакові, тому у відповіді будемо це записувати спільним інтервалом для параметра $$a$$:</p>
<p>При $$a \notin \left\{-1;-\dfrac{1}{2};1 \right\}$$:</p>
<p align="center">$$x_1=\dfrac{-1}{a+1}$$</p>
<p align="center">$$x_2=\dfrac{3}{a-1}$$</p>
<p>Єдине, що залишилось, – відкинути ті корені, які не входять в ОДЗ. Зі знаменника вихідного дробового рівняння</p>
<p align="center">$$\dfrac{(a^2-1) x^2-(2a+4)x-3}{(ax+2)(1-x)}=0$$</p>
<p>отримуємо умову $$(ax+2)(1-x)\neq0$$. Отже, ОДЗ: $$x\neq1;x\neq-\dfrac{2}{a},a\neq0$$.</p>
<p>Тепер головне – не заплутатись при відборі коренів. Для одного значення параметра $$a$$ квадратне рівняння дає нам два корені. Маючи ОДЗ для змінної $$x$$ та вирази для коренів, ми можемо знайти саме ті значення параметра $$a$$, які дають заборонені значення змінної $$x$$. Такі значення параметра $$a$$ теж будуть «контрольними». Але при цих «контрольних» значеннях один корінь є точно заборонений (звідки ми й знайшли це значення параметра), а ось другий скоріше за все – ні (це треба перевірити).</p>
<p>В результаті для більшості значень параметра $$a$$ у відповіді буде два корені, а для таких «контрольних» значень – лише один (або жодного).</p>
<p>Зараз виконуємо таку послідовність дій:</p>
<ol>
<li>Шукаємо «контрольні» значеннях параметра, що дають заборонені значення $$x$$.</li>
<li>Шукаємо дозволені значення другого (іншого з двох) кореня при «контрольних» значення параметра $$a$$.</li>
</ol>
<p>Вперед!</p>
<ol>
<li>Шукаємо «контрольні» значення параметра $$a$$. Для цього прирівняємо знайдені вирази для коренів по черзі до заборонених значень $$x$$, та звідти виразимо $$a$$:</li>
<p align="center">$$x_1(a) = 1:  \quad \dfrac{-1}{a+1} = 1 \Longleftrightarrow a = -2$$<p>
<p align="center">$$x_2(a) = 1:  \quad \dfrac{3}{a-1} = 1 \Longleftrightarrow a = 4$$<p>
<p align="center">$$x_1(a) = -\dfrac{2}{a}, a\neq0:  \quad \dfrac{-1}{a+1} = -\dfrac{2}{a} \Longleftrightarrow a = 2(a+1)\Longleftrightarrow a = -2$$<p>
<p align="center">$$x_2(a) = -\dfrac{2}{a}, a\neq0:  \quad \dfrac{3}{a-1} = -\dfrac{2}{a} \Longleftrightarrow 3a = -2(a-1)\Longleftrightarrow a = \dfrac {2}{5}$$<p>
<p>Знайшли три «контрольних» значення параметра $$a: -2;4;\dfrac{2}{5}$$.</p>
<li>Шукаємо тепер дозволені значення $$x$$ при «контрольних» значення параметра:</li>
<ul>
<li>При $$a=-2$$:</li>
<p>$$x_1 (-2)=1$$ – заборонене значення, шукаємо $$x_2$$:</p>
<p>$$x_2 (-2)=\dfrac{3}{-2-1}=-1\neq1$$ – дозволене значення.</p>
<li>При $$a=4$$:</li>
<p>$$x_2 (4)=1$$ – заборонене значення, шукаємо $$x_1$$:</p>
<p>$$x_1 (4)=\dfrac{-1}{4+1}=-\dfrac{1}{5}\neq1$$ – дозволене значення.</p>
<li>При $$a=\dfrac{2}{5}$$:</li>
<p>$$x_2 \left(\dfrac{2}{5}\right)=\dfrac{3}{\dfrac{2}{5}-1}=-5$$ – заборонене значення, шукаємо $$x_1$$:</p>
<p>$$x_1 \left(\dfrac{2}{5}\right)=\dfrac{-1}{\dfrac{2}{5}+1}=-\dfrac{5}{7}\neq-5$$ – дозволене значення.</p>
</ul>
</ol>
<p>Тепер головне не заплутатись і перерахувати всі розглянуті випадки:</p>
    </div>
  <div class="tab-pane" id="answer1">
<b>Вiдповiдь.</b> 
<p>При $$a = -2: \quad x = -1;$$</p>
<p>при $$a = -1: \quad x = -\dfrac{3}{2};$$</p>
<p>при $$a = -\dfrac{1}{2}: \quad x = -2;$$</p>
<p>при $$a = \dfrac{2}{5}: \quad x = -\dfrac{5}{7};$$</p>
<p>при $$a = 1: \quad x = -\dfrac{9}{2};$$</p>
<p>при $$a = 4: \quad x = -\dfrac{1}{5};$$</p>
<p>при $$a \notin \left\{-2;-1;-\dfrac{1}{2};\dfrac{2}{4};1;4 \right\}: \quad x_1 = \dfrac{-1}{a+1}, x_2 = \dfrac{3}{a-1}.$$</p> 
  </div>
  <div class="tab-pane" id="hide1"></div>
</div>
</p>    
</div>
</div>
</div>
<div class="space"></div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
 <question multiple>
        <p>За яких значень параметра $$a$$ рівняння $$\dfrac{a-x}{x^2+x-72}=0$$ не матиме коренів?</p>
        <answer correct> $$-9$$</answer>
        <answer> $$-5$$</answer>
        <answer> $$0$$</answer>
        <answer correct> $$8$$</answer>
        <answer> $$10$$</answer>
        <answer> $$14$$</answer>
</question>
</quiz>