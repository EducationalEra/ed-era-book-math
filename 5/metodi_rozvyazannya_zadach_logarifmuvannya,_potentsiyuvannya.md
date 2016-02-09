# Логарифмування та потенцiювання

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Означення</span> 
<div class="eoz-text">
<b>Логарифмування</b> — це операція знаходження логарифмів заданих чисел чи виразів.
</div>
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Знайти логарифм $$x=25a\dfrac{b^2}{c}$$ за основою $$a$$.</p>
<p><b><i>Розв’язок.</i></b></p>
<p>Логарифмуємо обидві частини рівності та користуємось основними тотожностями:</p>
<p align="center">$$\log_{a}x=\log_{a}25a\dfrac{b^2}{c}=\log_{a}25 + \log_{a}a + \log_{a}{b^2} - \log_{a}c=2\log_{a}5+2\log_{a}b-\log_{a}c + 1.$$</p>
<p><b>Вiдповiдь.</b> $$\log_{a}x=2\log_{a}5+2\log_{a}b-\log_{a}c + 1.$$</p>
</div>
</div>
</div>

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Означення</span> 
<div class="eoz-text">
<b>Потенціювання</b> — це операція знаходження чисел чи виразів за заданим логарифмом числа (виразу).
</div>
</div>
</div>

<div class="fluidMedia">
<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/S2PqSiV5gW0" frameborder="0" allowfullscreen></iframe>
</div>
<div class="popup">
</div>

<br>
<p>Якщо по обидві сторони рівності стоять логарифми без коефіцієнтів з однаковими основами, то при потенціюванні значки логарифмів прибирають:</p> <p align="center">$$\log_{a}{b(x)}=\log_{a}{c(x)} \Leftrightarrow \begin{cases}
b(x)=c(x);\\
b(x)>0.
\end{cases}$$</p>
<p>Якщо ж основи різні чи є коефіцієнти, то значки логарифмів прибирати неможна. Треба скористатись основними тотожностями для перетворення виразу.</p>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Пропотенціювати вираз $$2\log_{2}x=\ln24-3\ln a+6\ln b$$.</p>
<p><b><i>Розв’язок.</i></b></p>
<p>Зводимо праву частину, щоб уся була під знаком логарифма:</p>
<p align="center">$$2\log_{2}x=\ln24-3\ln a+6\ln b \Rightarrow \log_{2}x=\dfrac{1}{2}\ln24-\dfrac{3}{2}\ln a+\dfrac{6}{2}\ln b;$$</p>
<p align="center">$$\log_{2}x=\ln{\sqrt{24}}-\ln{a^{\frac{3}{2}}}+\ln{b^3} \Rightarrow \log_{2}x=\ln{b^3}\sqrt{\dfrac{24}{a^3}}.$$</p>
<p>Переходимо до однієї основи:</p>
<p align="center">$$\log_{2}x=\ln {b^3}\sqrt{\dfrac{24}{a^3}} \Leftrightarrow \log_{2}x=\dfrac{\log_{2}{b^3}\sqrt{\dfrac{24}{a^3}}}{\log_{2}e} \Leftrightarrow x=\dfrac{b^3}{\log_{2}e}\sqrt{\dfrac{24}{a^3}}.$$</p>
<p><b>Вiдповiдь.</b> $$x=\dfrac{b^3}{\log_{2}e}\sqrt{\dfrac{24}{a^3}}.$$</p>
</div>
</div>
</div>

<div class="space"></div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question text="">
        <p>Знайти логарифм виразу $$3a^2\dfrac{c^3}{b^4}$$ за основою $$b$$</p>
        <answer>$$log_{b}3+log_{b}a+log_{b}c-4$$</answer>
        <answer>$$-4$$</answer>
        <answer correct>$$log_{b}3+2log_{b}a+3log_{b}c-4$$</answer>
        <answer>$$log_{b}c-4$$</answer>
        <answer>$$2log_{b}a+3log_{b}c$$</answer>
        <explanation>
         <p>$$3a^2\dfrac{c^3}{b^4} = log_{b}3 + log_{b}a^2 + log_{b}c^3 - log_{b}b^4 = log_{b}3 + 2log_{b}a + 3log_{b}c -4log_{b}b =$$</p> <p>$$= log_{b}3+2log_{b}a+3log_{b}c-4$$</p>
        </explanation>
    </question>
    <question text="">
        <p>Пропотенціюйте вираз $$2log_{2}x = ln a^{\frac{4}{3}}$$</p>
        <answer>$$x=a^{\frac{2}{3}}$$</answer>
        <answer>$$x=a^{\frac{3}{2}}\dfrac{1}{log_{2}e}$$</answer>
        <answer correct>$$x=a^{\frac{2}{3}}\dfrac{1}{log_{2}e}$$</answer>
        <explanation>
        $$log_{2} x=\dfrac{1}{2}ln a^{\frac{4}{3}}$$ <br>
        $$log_{2} x=lna^{\frac{2}{3}}$$ <br>
        $$log_{2} x = \dfrac{log_{2}a^{\frac{2}{3}}}{log_{2}e}$$<br>
        $$x=a^{\frac{2}{3}}\dfrac{1}{log_{2}e}$$
        </explanation>
    </question>
</quiz>