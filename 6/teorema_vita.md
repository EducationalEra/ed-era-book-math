#Теорема Вiєта

<p>Можна поділити всі коефіцієнти квадратного рівняння $$ax^2 + bx + c = 0$$ на старший коефіцієнт $$a$$: $$x^2 + \dfrac{b}{a}x + \dfrac{c}{a} = 0$$. Таке рівняння називають <b>зведеним</b>.</p>
<div class="space"></div>
<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
<b>Зведене квадратне рівняння</b> — квадратне рівняння, у якого коефіцієнт при $$x^2$$ рівний одиниці, тобто $$a = 1$$.
</div>
</div>
</div>

<p><i>Наприклад:</i>$$x^2 - 2x + 1 =0; x^2 - x =0.$$</p>
<div class="space"></div>
<p>У пункті 6.3.4 <a  href="http://math.ed-era.com/6/faktorizatsya_kvadratnogo_rvnyannya_rozkladannya_na_mnozhniki.html">Факторизацiя квадратного рiвняння (розкладання на множники)</a> було виведено тотожність $$x^2 + \dfrac{b}{a}x + \dfrac{c}{a} = (x - x_1)(x - x_2)$$.</p>

<p>Якщо розкрити дужки у правій частині тотожності:</p>

<p align="center">$$x^2 + \dfrac{b}{a}x + \dfrac{c}{a} = x^2 - x_2x - x_1x +x_1x_2 = x^2 - (x_1 + x_2)x + x_1x_2.$$</p>

<p>Прирівнявши коефіцієнти при однакових степенях $$x$$, отримуємо такі співвідношення:</p>

<p align="center">$$x_1 + x_2 = -\dfrac{b}{a},$$</p>
<p align="center">$$x_1x_2 = \dfrac{c}{a}.$$</p>

<p>Ці тотожності вперше отримав Франсуа Вієт у XVI ст., вони лежать в основі теореми Вієта.</p>
<div class="space"></div>
<div class="space">
<div class="ebio-wrap">
<span class="ebio">Теорема Вієта</span>
<div class="ebio-text">
Сума коренів квадратного рівняння рівна коефіцієнту при $$x$$, взятому з протилежним знаком та поділеному на коефіцієнт при  $$x^2$$; добуток коренів рівний вільному доданку, поділеному на коефіцієнт при  $$x^2$$:
<p align="center">$$x_1 + x_2 = -\dfrac{b}{a},$$</p>
<p align="center">$$x_1x_2 = \dfrac{c}{a}.$$</p>
</div>
</div>
</div>

<div class="space">
<div class="ebio-wrap">
<span class="ebio">Теорема (обернена до т. Вієта)</span>
<div class="ebio-text">
<p>Якщо для двох чисел $$x_1$$ та $$x_2$$ виконуються рівності:</p>
<p align="center">$$x_1 + x_2 = -\dfrac{b}{a}, x_1x_2 = \dfrac{c}{a},$$</p>
<p>то числа $$x_1$$ та $$x_2$$ є коренями квадратного рівняння $$ax^2 + bx + c = 0$$.</p>
</div>
</div>
</div>

<div class="fluidMedia">
<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/aiKMbzTJVB0" frameborder="0" allowfullscreen></iframe>
</div>
<div class="popup">
</div>

<p><div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Знайти $$|x_1 - x_2|$$, де $$x_{1,2}$$ — корені рівняння $$2x^2 + 2x - 12$$.</p>
<p><b><i>Розв'язок.</i></b>За теоремою Вієта: $$x_1 + x_2 = -1; x_1x_2 = -6$$.</p>
<p>Запишемо з формул скороченого множення рівність $$(x_1 - x_2)^2 = {x_1}^2 - 2x_1x_2 + {x_2}^2$$. Якщо додати та відняти $$2x_1x_2$$ та скористатися формулою квадрату суми, маємо:</p>
<p align="center">$$(x_1 - x_2)^2 = {x_1}^2 - 2x_1x_2 + {x_2}^2 + 2x_1x_2 - 2x_1x_2 = ({x_1}^2 + 2x_1x_2 + {x_2}^2) - 4x_1x_2 = (x_1 + x_2)^2 - 4x_1x_2.$$</p>
<p>Підставивши числа, знайдені за т. Вієта, маємо $$(x_1 - x_2)^2 = (-1)^2 - 4\cdot(-6) = 25.$$</p>
<p>Таким чином, $$|x_1 - x_2| = 5$$.</p>
<p><b>Відповідь.</b>5.</p>
</div>
</div>
</div>
</p>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question text="">
    <p>Чому дорівнює модуль різниці коренів рівняння $$x^2 - 4x + 4 = 1$$?</p>
        <answer>$$4$$</answer>
        <answer>$$3$$</answer>
        <answer correct>$$2$$</answer>
        <answer>$$1$$</answer>
        <explanation>
        <p>Перенесемо всі доданки у ліву частину рівняння:</p>
        <p>$$x^2-4x+3=0$$</p>
        <p>За теоремою Вієта знаходимо корені рівняння: $$x_{1,2} = {1; 3}$$</p>
        <p>Тоді модуль різниці коренів дорівнює: $$|3-1|= 2$$</p>
        </explanation>
        </question>
</quiz>