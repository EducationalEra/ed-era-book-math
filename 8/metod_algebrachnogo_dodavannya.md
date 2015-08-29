#Метод алгебраїчного додавання

<p>Якщо замість одного рівняння записати лінійну комбінацію рівнянь (суму рівнянь, кожне з яких помножено на довільне число), а друге залишити незмінним, то отримана система рівнянь буде рівносильна вихідній:</p>

<div class="center"></div>

<p align="center">$$\begin{cases}
F_1(x, y) = 0,\\
F_2(x, y) = 0;
\end{cases} \Longleftrightarrow 
\begin{cases}
a\cdot F_1(x, y) + b\cdot F_2(x, y) = 0,\\
F_2(x, y) = 0;
\end{cases} \Longleftrightarrow 
\begin{cases}
F_1(x, y) = 0,\\
c\cdot F_1(x, y) + d\cdot F_2(x, y) = 0;
\end{cases}$$</p>

<div class="center"></div>

<p>де $$a, b, c, d \in \mathbb{R}$$.</p>

<p>Інколи зручно замість обох рівнянь записати різні їх лінійні комбінації (наприклад, суму та різницю рівнянь).</p>

<p>Після спрощення системи методом алгебраїчного додавання часто також потрібно застосовувати метод підстановки, розглянутий вище.</p>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Розв’язати систему рівнянь $$\begin{cases}
		3x + 5y = 7,\\
		x - 6y = 10.
		\end{cases}$$</p>
<p><b><i>Розв'язок.</i></b></p>
<p align="center"><b>Перший варіант.</b></p>
<p>Помножимо друге рівняння системи на $$-3$$ та додамо до нього перше (зверніть увагу: ліва частина додається до лівої, а права - до правої), тоді змінна $$x$$ у другому рівнянні знищиться:</p>
<p align="center">$$\begin{cases}
			3x + 5y = 7,\\
			x - 6y = 10;
			\end{cases} \Longleftrightarrow
			\begin{cases}
			3x + 5y = 7,\\
			-3x + 18y = -30;
			\end{cases} \Longleftrightarrow$$</p>
<p align="center">$$\Longleftrightarrow \begin{cases}
			3x + 5y = 7,\\
			-3x + 18y + 3x + 5y = -30 + 7;
			\end{cases} \Longleftrightarrow
			\begin{cases}
			3x + 5y = 7,\\
			23y = -23.
			\end{cases}$$</p>
<p>З другого рівняння знаходимо $$y_0 = -1.$$</p>
<p>Підставимо це значення у перше рівняння:</p>
<p align="center">$$3x_0 + 5\cdot(-1) = 7 \Longleftrightarrow x_0 = 4.$$</p>
<p align="center"><b>Другий варіант.</b></p>
<p>Помножимо друге рівняння системи на $$-3$$ та додамо до нього перше, і, в свою чергу, помножимо перше рівняння на $$\dfrac{6}{5}$$ та додамо до нього друге:</p>
<p align="center">$$\begin{cases}
			3x + 5y = 7,\\
			x - 6y = 10;
			\end{cases} \Longleftrightarrow
			\begin{cases}
			3x + 5y - 3(x - 6y)= 7 - 3\cdot10,\\
			x - 6y + \dfrac{6}{5}(3x + 5y) = 10 +\dfrac{6}{5}\cdot7.
			\end{cases}$$</p>
<p>Розкривши дужки та звівши подібні доданки бачимо, що в першому рівнянні зникає змінна $$x$$, а в другому - $$y$$:</p>
<p align="center">$$\begin{cases}
			3x + 5y - 3x + 18y= -23,\\
			x - 6y + \dfrac{6}{5}(3x + 5y) = 10 +\dfrac{6}{5}\cdot7;
			\end{cases} \Longleftrightarrow
			\begin{cases}
			23y= -23,\\
			\dfrac{23}{5}x = \dfrac{92}{5};
			\end{cases} \Longleftrightarrow
			\begin{cases}
			y_0= -1,\\
			x_0 = 4.
			\end{cases}$$</p>

<p><b>Відповідь.</b>$$(4; -1).$$</p>
</div>
</div>
</div>

