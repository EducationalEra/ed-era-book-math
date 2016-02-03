#Метод підстановки

<p>Якщо з одного рівняння системи можна виразити одну змінну через іншу (наприклад, $$y = f(x)$$, або навпаки), то після підстановки отриманого виразу в друге рівняння отримана система рівнянь рівносильна вихідній:</p>

<p align="center">$$\begin{cases}
F(x, y) = 0,\\
y = f(x);
\end{cases} \Longleftrightarrow 
\begin{cases}
F(x, f(x)) = 0,\\
y = f(x).
\end{cases}$$
</p>

<p>Після цього розв’язуємо рівняння $$F(x, f(x)) = 0$$ з однією змінною $$x$$. Для отримання значень $$y$$ знайдені значення $$x$$ підставляємо у рівняння $$y = f(x)$$.</p>

<p>Цей метод зручно використовувати, коли хоча б одна зі змінних присутня лише в першому степені.</p>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Розв’язати систему рівнянь $$\begin{cases}
		x + y = 1,\\
		x^2 - y^2 = 2y.
		\end{cases}$$</p>
<p><b><i>Розв'язок.</i></b></p>
<p>З першого рівняння виражаємо $$x$$ через $$y$$: $$x + y = 1 \Longleftrightarrow x = 1 - y.$$</p>
<p>Підставляємо цей вираз у друге рівняння:</p>
<p align="center">$$(1 - y)^2 - y^2 = 2y \Longleftrightarrow 1 - 2y + y^2 - y^2 = 2y \Longleftrightarrow 1 - 2y = 2y \Longleftrightarrow y = \dfrac{1}{4}.$$</p>
<p>Отже, $$y_0 = \dfrac{1}{4}.$$</p>
<p>Знаходимо значення $$x_0$$, підставиши $$y_0$$ в перше рівняння:</p>
<p align="center">$$x_0 = 1 - y_0 = 1 - \dfrac{1}{4} = \dfrac{3}{4}.$$ </p>
<p><b>Відповідь.</b>$$\left(\dfrac{3}{4}; \dfrac{1}{4}\right).$$</p>
</div>
</div>
</div>

<div class="fluidMedia">
<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/p6HdBYv4s_4" frameborder="0" allowfullscreen></iframe>
</div>
<div class="popup">
</div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question text="">
        <p>Розв'язати систему рівнянь: 
        $$\begin{cases}
        x+y=1\\
        x-y=7
        \end{cases}$$</p>
        <answer correct>$$(4;-3)$$</answer>
        <answer>$$(4;3)$$</answer>
        <answer>$$(-4;-3)$$</answer>
        <answer>$$(-4;3)$$</answer>
        <explanation>
        <p>Виразимо $$x$$ через $$y$$:</p>
        <p>$$\begin{cases}
        x=1-y\\
        x-y=7
        \end{cases}$$</p>
        <p>Підставимо у друге рівняння $$x$$ і спростимо систему:</p>
        <p>$$\begin{cases}
        x=1-y\\
        1-y-y=7
        \end{cases}$$</p>
        <p>$$\begin{cases}
        x=1-y\\
        -2y=6
        \end{cases}$$</p>
        <p>Помножимо друге рівняння системи на $$-\dfrac{1}{2}$$:</p>
        <p>$$\begin{cases}
        x=1-y\\
        y=-3
        \end{cases}$$</p>
        <p>Тепер, знаючи значення $$y$$, знайдемо значення $$x$$:</p>
        <p>$$\begin{cases}
        x=1-(-3)\\
        y=-3
        \end{cases}$$</p>
        <p>$$\begin{cases}
        x=4\\
        y=-3
        \end{cases}$$</p>
        </explanation>
        </question>
    <question text="">
    <p>Розв'язати систему рівнянь:
    $$\begin{cases}
    3x+5y=21\\
    8x-3y=7
    \end{cases}$$</p>
        <answer>$$(2;-3)$$</answer>
        <answer>$$(-2;3)$$</answer>
        <answer correct>$$(2;3)$$</answer>
        <answer>$$(-2;-3)$$</answer>
        <explanation>
        <p>Перше рівняння помножимо на $$\dfrac{1}{3}$$, і виразимо $$x$$ через $$y$$:</p>
        <p>$$\begin{cases}
        x=-\dfrac{5}{3}y+7\\
        8x-3y=7
        \end{cases}$$</p></p>
        <p>Підставимо у друге рівняння $$x$$ і спростимо систему:</p>
        <p>$$\begin{cases}
        x=-\dfrac{5}{3}y+7\\
        8(-\dfrac{5}{3}y+7)-3y=7
        \end{cases}$$</p>
        <p>$$\begin{cases}
        x=-\dfrac{5}{3}y+7\\
        -\dfrac{49}{3}y=-49
        \end{cases}$$</p>
        Помножимо друге рівняння системи на $$-\dfrac{3}{49}$$:</p>
        <p>$$\begin{cases}
        x=-\dfrac{5}{3}y+7\\
        y=3
        \end{cases}$$</p>
        <p>Тепер, знаючи значення $$y$$, знайдемо значення $$x$$:</p>
        <p>$$\begin{cases}
        x=-\dfrac{5}{3}\cdot3+7\\
        y=3
        \end{cases}$$</p>
        <p>$$\begin{cases}
        x=2\\
        y=3
        \end{cases}$$</p>
        </explanation>
        </question>
</quiz>