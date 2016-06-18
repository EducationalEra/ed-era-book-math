# Степенево-показникові рівняння

Існує ще один вид рівнянь, про які варто поговорити в цій лекції – це степенево-показникові рівняння: вони містять змінну як в основі, так і в показнику степеня. Наприклад: $$x^{2x}=3$$.
<p>В загальному вигляді такі рівняння можна записати як</p>        
<p align="center">$$(f(x))^{g(x)}=(f(x))^n$$</p>
Розв’язок таких рівнянь розбивають на чотири випадки, які розглядаємо окремо:     
<li>$$g(x)=n$$ при $$f(x)\ne \{−1;0;1\};$$</li>
<li>$$f(x)=-1;$$</li>
<li>$$f(x)=0;$$</li>
<li>$$f(x)=1.$$</li>      
<p>Після цього потрібно перевірити отримані корені.</p>       

<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">    
<b>Розв’язати рівняння $$(x^2+4x+4)^{2-3x}=1$$.</b>
<p>
<ul class="nav-tab" id="mytab">
    <button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
    <button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
    <button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
    <div class="tab-pane" id="decision">
<p><b><i>Розв’язок</i> </b> </p>
<p>Зведемо рівняння до загального вигляду: $$(x^2+4x+4)^{2-3x}=(x^2+4x+4)^{0}$$</p>
<ol>
<li>Розглянемо перший випадок:
<p align="center">$$(x^2+4x+4)^{2-3x}=(x^2+4x+4)^{0}\Longleftrightarrow 2−3𝑥=0$$ при $$x^2+4x+4\ne\{−1;0;1\}$$</p>
<p align="center">$$x=\dfrac{2}{3}.$$</p>
<p>Перевіримо, щоби при цьому значенні $$x$$ виконувалась умова $$x^2+4x+4\ne\{−1;0;1\}$$:</p>   
<p align="center">$$\left(\dfrac{2}{3}\right)^2+4\left(\dfrac{2}{3}\right)+4=\dfrac{4}{9}+\dfrac{24}{9}+\dfrac{36}{9}=\dfrac{64}{9}\ne\{−1;0;1\}.$$ </p> </li>
<li>Розв’яжемо рівняння $$x^2+4x+4=-1$$:     
<p align="center">$$x^2+4x+4=-1\Longleftrightarrow x^2+4x+5=0$$</p>     
<p align="center">$$D=4^2-4\cdot1\cdot5=-4< 0$$ </p>       
<p>Дискримінант від’ємний – рівняння не має коренів.</p> </li>
<li>Розв’яжемо рівняння $$x^2+4x+4=0$$:       
<p align="center">$$x^2+4x+4\Longleftrightarrow(x+2)^2=0$$</p>        
<p align="center">$$x=-2$$</p>
Проте цей корінь ми відкидаємо, $$0^6=0\ne1$$.</li>
<li>Розв’яжемо рівняння $$x^2+4x+4=1$$:     
<p align="center">$$x^2+4x+4=1\Longleftrightarrow x^2+4x+3=0$$</p>     
<p align="center">$$D=4^2-4\cdot1\cdot3=4>0$$</p>
<p align="center">$$x^{}_{1,2}=\dfrac{-4\pm\sqrt{4}}{2\cdot1}\Longleftrightarrow$$$$\left[ \begin{gathered}
	x=-1, \hfill \\
	x=-3 \hfill \\
	\end{gathered}
	\right. $$</p>       
	
Перевіряємо: $$1^{2-2(-1)}=1^4=1;1^{2-2(-3)}=1^8=1$$.</li>     
<p>В результаті ми отримали три корені: $$x \in \left\{-3;-1;\dfrac{2}{3}\right \}.$$</p> 
    </div>
    <div class="tab-pane" id="answer">
<p><b>Вiдповiдь.</b> $$x \in \left\{-3;-1;\dfrac{2}{3}\right \}.$$</p>
    </div>
    <div class="tab-pane" id="hide"></div>
</div>
</p>
</div>
</div>
<div class="space"></div>