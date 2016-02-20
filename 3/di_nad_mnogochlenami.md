# Дії над многочленами

<ul>
<li><p><b>Додавання/віднімання</b>. Потрібно розкрити дужки та звести подібні доданки. Якщо перед дужками стоїть знак «+», то знаки дужок лишаються незмінними; якщо  «-», то знаки всередині дужок слід замінити на протилежні.</p></li>
<div class="space"></div>
<p><i>Наприклад:</i> $$(4x^2 y + xy) + (x - 6 - xy) = 4x^2 y + xy + x - 6 - xy = 4x^2 y + x - 6.$$<br>$$(4x^2 y + xy) - (x - 6 - xy) = 4x^2 y + xy - x + 6 + xy = 4x^2 y + 2xy + x + 6.$$</p>
<div class="space"></div>
<li><p><b>Множення одночлена на многочлен</b>. Потрiбно одночлен помножити на кожний доданок многочлена i додати отриманi добутки.</p></li>
<div class="space"></div>
<p><i>Наприклад:</i> $$(4x^2 y - xy)\cdot(-3y^3)=4x^2 y\cdot(-3y^3) + (-xy)\cdot(-3y^3 ) = -12x^2 y^4 + 3xy^4.$$</p>
<div class="space"></div>
<li><p><b>Множення многочлена на многочлен</b>. Потрiбно кожен доданок одного многочлена помножити на кожен доданок другого многочлена i додати отриманi добутки.</p></li>
<div class="space"></div>
<p><i>Наприклад:</i> $$(4x^2 y-xy)\cdot(x-6-xy)=4x^2 y\cdot x+(-xy)\cdot x+4x^2 y\cdot(-6)+(-xy)\cdot$$<br>$$\cdot(-6)+4x^2 y\cdot(-xy)+(-xy)\cdot(-xy)=4x^3 y-x^2 y-24x^2 y+6xy-4x^3 y^2+x^2 y^2=$$<br>$$=-4x^3 y^2+4x^3 y+x^2 y^2-25x^2 y+6xy.$$</p>
<div class="space"></div>
<li><p><b>Ділення многочлена на одночлен.</b> Потрібно кожен доданок многочлена поділити на одночлен і додати отримані частки.</p></li>
<div class="space"></div>
<p><i>Наприклад:</i> $$(4x^5y-2x^3y^3+8xy^2+6xy):(2xy) = (4x^5y):(2xy) - (2x^3y^3):(2xy)+$$<br>$$+ (8xy^2):(2xy) + (6xy):(2xy) = 2x^4 - x^2y^2 + 4y + 3.$$</p>
<div class="space"></div>
<li><p><b>Ділення многочлена на многочлен</b>. Потрібно виконати ділення за правилом кута:</p>
    <p>1. Привести многочлени до стандартного вигляду.</p>
    <p>2. Поділити старший додаток діленого на старший додаток дільника.</p>
    <p>3. Записати отриманий одночлен як доданок у результат.</p>
    <p>4. Помножити дільник на отриманий одночлен та відняти цей добуток від діленого.</p>
    <p>5. Повторювати кроки $$1-4$$ доки не залишиться в остачі нуль або степінь остачі не стане меншим від степеня дільника.</p>
    <div class="space"></div>
    <p><i>Наприклад:</i> $$3x^5+7x^4-8x^3-13x^2+4x-2$$ на многочлен $$x^2 - 2$$:</p></li>
</ul>
<div class="space">
</div>

<!--$$\begin{tabular}{cccccc|cccc}
		\dropsign{-}$3x^{\text{\tiny{5}}}$ & $+7x^{\text{\tiny{4}}}$ & $-8x^{\text{\tiny{3}}}$ & $-13x^{\text{\tiny{2}}}$ &$+4x$   & $-2$ 	 & $x^{\text{\tiny{2}}}$ 		& $-2$    &		  &      \\
		\cline{7-10}
		$3x^{\text{\tiny{5}}}$ & $+0x^{\text{\tiny{4}}}$  &  $-6x^{\text{\tiny{3}}}$&                 &        & 		     & $3x^{\text{\tiny{3}}}$  	    & $+7x^{\text{\tiny{2}}}$ & $-2x$ & $+1$  \\
		\cline{1-3}
		&\dropsign{-}$7x^{\text{\tiny{4}}}$  &$-2x^{\text{\tiny{3}}}$    & $-13x^{\text{\tiny{2}}}$ 	    & \multicolumn{6}{l}{} \\
		&   $7x^{\text{\tiny{4}}}$  &$+0x^{\text{\tiny{3}}}$     & $-14x^{\text{\tiny{2}}}$      & \multicolumn{6}{l}{}\\
		\cline{2-4}
		&           &\dropsign{-}$-2x^{\text{\tiny{3}}}$    & $+x^{\text{\tiny{2}}}$         & $+4x$  & \multicolumn{5}{l}{}\\
		&           &$-2x^{\text{\tiny{3}}}$    & $+0x^{\text{\tiny{2}}}$        & $+4x$  & \multicolumn{5}{l}{}\\
		\cline{3-5}	 
		&           &			&\dropsign{-}$x^{\text{\tiny{2}}}$          & $+0x$          & \multicolumn{5}{l}{$-2$ }\\
		&           &			& $x^{\text{\tiny{2}}}$         & $+0x$          & \multicolumn{5}{l}{$-2$}\\
		\cline{4-6}
		&           &          & 				& 			&  \multicolumn{5}{l}{$\text{\color{white}---}0$}\\ 
	\end{tabular}
$$-->

$$\begin{table}[]
\centering
\caption{My caption}
\label{my-label}
\begin{tabular}{llllllllllllllllllllll}
 & 3x &  & +7x &  & -8x &  & -13x &  & +4x &  & \multicolumn{1}{l|}{-2} & x  & -2 &     &    &  &  &  &  &  &  \\ \cline{1-1} \cline{13-16}
 & 3x &  & 0x  &  & -6x &  &      &  &     &  & \multicolumn{1}{l|}{}   & 3x & 7x & -2x & +1 &  &  &  &  &  &  \\ \cline{2-6}
 &    &  & 7x  &  & -2x &  & -13x &  &     &  &                         &    &    &     &    &  &  &  &  &  &  \\ \cline{3-3}
 &    &  & 7x  &  & +0x &  & -14x &  &     &  &                         &    &    &     &    &  &  &  &  &  &  \\ \cline{4-9}
 &    &  &     &  & -2x &  & +x   &  & +4x &  &                         &    &    &     &    &  &  &  &  &  &  \\ \cline{5-5}
 &    &  &     &  & -2x &  & +0x  &  & +4x &  &                         &    &    &     &    &  &  &  &  &  &  \\ \cline{6-10}
 &    &  &     &  &     &  & x    &  & +0x &  & -2                      &    &    &     &    &  &  &  &  &  &  \\ \cline{7-7}
 &    &  &     &  &     &  & x    &  & +0x &  & -2                      &    &    &     &    &  &  &  &  &  &  \\ \cline{8-12}
 &    &  &     &  &     &  &      &  &     &  & 0                       &    &    &     &    &  &  &  &  &  & 
\end{tabular}
\end{table}$$

<div class="space"><p align="center"><img align="middle" class="image" src="../pics/m1_3_1.png"/></p></div>

<div class="space"></div>

<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question text="">
        <p>Знайдіть суму двох многочленів: $$(-3a^2b + 4ab + a) - (-3a^2b + 18ab + a - 5b)$$</p>
        <answer>$$2a + b$$</answer>
        <answer>$$-14ab + 2a + 5b$$</answer>
        <answer correct>$$-14ab + 5b$$</answer>
        <answer>$$2a + 5b + 6a^b$$</answer>
        <answer>$$6a^2b + 5b$$</answer>
        <explanation>
        <p>$$(-3a^2b + 4ab + a) -$$$$ (-3a^2b +18ab + a - 5b) =$$$$ -3a^2b + 4ab + a +$$$$ 3a^2b - 18ab - a +$$$$ 5b = -14ab + 5b$$</p>
        </explanation>
    </question>
    <question text="">
        <p>Знайдіть добуток двох многочленів: $$(xy^2 - x + y)\cdot(x^2y + 2x - 5y)$$</p>
        <answer>$$x^3y^3-5xy^3-x^3y-2x^2-5y^2$$</answer>
        <answer correct>$$x^3y^3+3x^2y^2+7xy-5xy^3-x^3y-2x^2-5y^2$$</answer>
        <answer>$$x^3y^3+3x^2y^2+7xy-5xy^3-x^3y-2x^2$$</answer>
        <answer>$$5x^3y^3+3x^2y^2-7xy-5xy^3-x^3y-2x^2-5y^2$$</answer>
        <answer>$$x^3y^3+3x^2y^2+7xy-5xy^3+x^3y-2x^2+y^2$$</answer>
        <explanation>
        <p>$$(xy^2 - x + y)\cdot(x^2y + 2x - 5y) = xy^2\cdot x^2y + xy^2\cdot2x + xy^2\cdot(-5y) - x\cdot x^2y - x\cdot2x -$$</p><p>$$- x\cdot(-5y) + y\cdot x^2y + y\cdot2x + y\cdot(-5y) = x^3y^3 + 2x^2y^2 - 5xy^3 - x^3y - 2x^2 + 5xy +$$</p> <p>$$+ x^2y^2+ 2xy - 5y^2 = x^3y^3 + 3x^2y^2 + 7xy - 5xy^3 - x^3y - 2x^2 - 5y^2$$</p>
        </explanation>
    </question>
</quiz>