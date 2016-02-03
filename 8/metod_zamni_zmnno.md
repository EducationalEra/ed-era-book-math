#Метод заміни змінної

<p>Інколи зручно зробити заміну змінних, але її вигляд залежить від конкретного прикладу.</p>

<p>Часто користуються заміною:</p>

<p align="center">$$\begin{cases}
x + y = u,\\
x\cdot y = v.
\end{cases}$$</p>

<div class="center"></div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Розв’язати систему рівнянь $$\begin{cases}
	x^2 + y^2 + x + y = 4,\\
	x + y + xy = 3.
	\end{cases}$$</p>
<p><b><i>Розв'язок.</i></b></p>
<p>Зробимо заміну змінних: $$\begin{cases}
		x + y = u,\\
		x\cdot y = v.
		\end{cases}.$$</p>
<p>Перетворимо вирази з лівої частини першого рівняння:</p>
<p align="center">$$x^2 + y^2 + x + y = x^2 + y^2 + 2xy - 2xy + x + y = (x + y)^2 + x + y - 2xy = u^2 + u - 2v.$$</p>
<p>Тепер можна записати:</p>
<p align="center">$$\begin{cases}
		u^2 + u - 2v = 4,\\
		u + v = 3.
		\end{cases}.$$</p>
<p>Скористаємось методом додавання: помножимо друге рівняння на $$2$$ та додамо до першого:</p>
<p>$$\begin{cases}
		u^2 + u - 2v = 4,\\
		u + v = 3;
		\end{cases} \Longleftrightarrow
		\begin{cases}
		u^2 + u - 2v + 2(u + v)= 4 + 2\cdot3,\\
		u + v = 3;
		\end{cases} \Longleftrightarrow
		\begin{cases}
		u^2 + 3u - 10= 0,\\
		u + v = 3.
		\end{cases}$$</p>
<p>Розв’яжемо перше рівняння та знайдемо $$u$$.</p>
<p>За т. Вієта $$u_1 + u_2 = -3; u_1u_2 = -10.$$</p>
<p>Ці умови задовольняють корені: $$u_1 = -5; u_2 = 2.$$</p>
<p>Тепер потрібно розв’язати дві системи рівнянь:</p>
<ol>
<li><p>$$u = -5: \begin{cases}
				u = -5,\\
				u + v = 3;
				\end{cases} \Longleftrightarrow
				\begin{cases}
				u = -5,\\
				v = 8;
				\end{cases} \Longleftrightarrow
				\begin{cases}
				x + y = -5,\\
				xy = 8.
				\end{cases}$$</p>
<p>Тут можна скористатись методом підстановки, але простіше — згадати т. Вієта. Нехай $$t = x$$ та $$t = y$$ — корені квадратного рівняння:</p>
<p align="center">$$t^2 + 5t + 8 = 0.$$</p>
<p>Шукаємо дискримінант: $$D = 5^2 - 4\cdot1\cdot8 = 25 - 32 = -7 < 0$$, отже, рівняння не має дійсних коренів: $$t \in \emptyset$$. Отже, така система є несумісною.</p>
</li>
<li><p>$$u = 2: \begin{cases}
			u = 2,\\
			u + v = 3;
			\end{cases} \Longleftrightarrow
			\begin{cases}
			u = 2,\\
			v = 1;
			\end{cases} \Longleftrightarrow
			\begin{cases}
			x + y = 2,\\
			xy = 1.
			\end{cases}$$</p>
<p>Тут також скористуємося т. Вієта, як і в попередньому випадку. Нехай $$t = x$$ та $$t = y$$ — корені квадратного рівняння:</p>
<p align="center">$$t^2 - 2t + 1 = 0 \Longleftrightarrow (t - 1)^2 = 0 \Longleftrightarrow t = 1.$$</p>
<p>Маємо два рівних корені: $$t = x = y = 1.$$</p>
</li>
</ol>
<p><b>Відповідь.</b>$$(1; 1).$$</p>
</div>
</div>
</div>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Розв’язати систему рівнянь: $$\begin{cases}
		x^4 + x^2 = 92 - y^4 - y^2,\\
		x\cdot y = 4.
		\end{cases}$$</p>
<p><b><i>Розв'язок.</i></b></p>
<p>Робимо рівносильні переходи:</p>
<p align="center">$$\begin{cases}
			x^4 + x^2 = 92 - y^4 - y^2,\\
			x\cdot y = 4;
			\end{cases} \Longleftrightarrow
			\begin{cases}
			x^4 + y^4 + x^2 + y^2 = 92,\\
			x\cdot y = 4.
			\end{cases}$$</p>
<p>Зробимо заміну змінних: $$\begin{cases}
			x^2 + y^2 = u,\\
			x\cdot y = v.
			\end{cases}$$</p>
<p>Перетворимо вирази з лівої частини першого рівняння:</p>
<p align="center">$$x^4 + 2x^2y^2 + y^4 - 2x^2y^2 = (x^2 + y^2)^2 - 2x^2y^2 = u^2 - 2v^2.$$</p>
<p>Тепер можна записати:</p>
<p align="center">$$\begin{cases}
			u^2 - 2v^2 + u = 92,\\
			v = 3.
			\end{cases}$$</p>
<p>Підставляємо $$v = 3$$ в перше рівняння:</p>
<p align="center">$$u^2 - 18 + u = 92 \Longleftrightarrow u^2 + u - 100 = 0.$$</p>
<p>Шукаємо дискримінант: $$D = 1^2 - 4\cdot1\cdot(-110) = 441 > 0$$, отже, рівняння має два дійсних корені:</p>
<p align="center">$$u_1 = \dfrac{-1 + \sqrt{441}}{2} = 10; u_2 = \dfrac{-1 - \sqrt{441}}{2} = -11.$$</p>
<p>Від’ємний корінь відкидаємо, бо $$u = x^2 + y^2 \geq 0$$ — завжди невід’ємна величина.</p>
<p>В результаті:</p>
<p align="center">$$\begin{cases}
			u = 10,\\
			v = 3;
			\end{cases} \Longleftrightarrow
			\begin{cases}
			x^2 + y^2 = 10,\\
			xy = 3.
			\end{cases}$$</p>
<p>Скористаємось методом додавання: помножимо друге рівняння на $$2$$, а тоді додамо і віднімемо від першого рівняння:</p>
<p align="center">$$\begin{cases}
			x^2 + y^2 = 10,\\
			xy = 3;
			\end{cases} \Longleftrightarrow 
			\begin{cases}
			x^2 + y^2 + 2xy = 10 + 2\cdot3,\\
			x^2 + y^2 - 2xy = 10 - 2\cdot3;
			\end{cases} \Longleftrightarrow
			\begin{cases}
			(x + y)^2 = 16,\\
			(x - y)^2 = 4;
			\end{cases} \Longleftrightarrow
			\begin{cases}
			|x + y| = 4,\\
			|x - y| = 2.
			\end{cases}$$</p>
<p>Потрібно розглянути чотири випадки:</p>
<ol>
<li><p>$$x + y > 0, x - y > 0$$: $$\begin{cases}
					x + y = 4,\\
					x - y = 2.
					\end{cases}$$</p>
<p>Складаємо та віднімаємо рівняння:</p>
<p align="center">$$\begin{cases}
				x + y = 4,\\
				x - y = 2;
				\end{cases} \Longleftrightarrow 
				\begin{cases}
				2x = 6,\\
				2y = 2;
				\end{cases} \Longleftrightarrow
				\begin{cases}
				x_1 = 3,\\
				y_1 = 1.
				\end{cases}$$
</p></li>
<li><p>$$x + y > 0, x - y < 0$$: $$\begin{cases}
		x + y = 4,\\
		-(x - y) = 2.
		\end{cases}$$
</p>
<p>Складаємо та віднімаємо рівняння:</p>
<p align="center">$$\begin{cases}
	x + y = 4,\\
	-x + y = 2;
	\end{cases} \Longleftrightarrow 
	\begin{cases}
	2x = 2,\\
	2y = 6;
	\end{cases} \Longleftrightarrow
	\begin{cases}
	x_2 = 1,\\
	y_2 = 3.
	\end{cases}$$</p></li>
<li><p>$$x + y < 0, x - y < 0$$: $$\begin{cases}
		-(x + y) = 4,\\
		-(x - y) = 2.
		\end{cases}$$
</p>
<p>Складаємо та віднімаємо рівняння:</p>
<p align="center">$$\begin{cases}
	-x - y = 4,\\
	-x + y = 2;
	\end{cases} \Longleftrightarrow 
	\begin{cases}
	-2x = 6,\\
	-2y = 2;
	\end{cases} \Longleftrightarrow
	\begin{cases}
	x_3 = -3,\\
	y_3 = -1.
	\end{cases}$$</p></li>
<li><p>$$x + y < 0, x - y > 0$$: $$\begin{cases}
		-(x + y) = 4,\\
		x - y = 2.
		\end{cases}$$
</p>
<p>Складаємо та віднімаємо рівняння:</p>
<p align="center">$$\begin{cases}
	-x - y = 4,\\
	x - y = 2;
	\end{cases} \Longleftrightarrow 
	\begin{cases}
	-2x = 2,\\
	-2y = 6;
	\end{cases} \Longleftrightarrow
	\begin{cases}
	x_4 = -1,\\
	y_4 = -3.
	\end{cases}$$</p></li>	
</ol>
<p><b>Відповідь.</b> $$\{(3; 1), (1; 3), (-3; -1), (-1; -3)\}.$$</p>
</div>
</div>
</div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question text="">
        <p>Якою заміною доречно скористатись під час розв’язання системи рівнянь? $$\begin{cases}x^2-y^2=1, \\ x^2+y^2-2xy=1. \end{cases}$$</p>
        <answer>$$u=x^2, v=y^2$$</answer>
        <answer>$$u=x^2-y^2, v=x^2+y^2$$</answer>
        <answer correct>$$u=x+y, v=x-y$$</answer>
        <answer>$$u=x^2+xy, v=y^2+xy$$</answer>
        </question>
</quiz>
