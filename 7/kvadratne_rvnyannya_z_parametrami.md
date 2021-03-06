#Квадратне рівняння з параметрами

<p>Пригадаємо з попередньої лекції, що у квадратному рівнянні $$ax^2+bx+c=0$$ дискримінант визначено як:</p>

<p align="center">$$D=b^2-4ac.$$</p>

<ul>
<li>при $$D>0$$ рівняння має два дійсних корені: $$x=\dfrac{-b\pm\sqrt{D}}{2a}$$;</li>
<li>при $$D=0$$ рівняння має один дійсний корінь (два однакових): $$x=-\dfrac{b}{2a}$$;</li>
<li>при $$D<0$$ рівняння не має дійсних коренів: $$x\in\emptyset$$.</li>
</ul>

<p>У квадратних рівняннях з параметрами «<b>контрольними</b>» є значення параметра, яке дає <b>нульовий старший коефіцієнт</b> (при $$x^2$$), та <b>нульовий дискримінант</b> (від нього залежить кількість коренів).</p>

<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">
<p>Знайти значення параметра $$a$$, за яких рівняння $$(1-a)x^2+2ax+3-a=0$$ має тільки один корінь.</p>
<p>
<ul class="nav-tab" id="mytab">
    <button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
    <button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
    <button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>
<div id="mytab" class="tab-content">
    <div class="tab-pane" id="decision">
<p><b><i>Розв'язок.</i></b></p>
<p>Знайдемо «контрольні» значення параметра $$a$$, за яких коефіцієнт при $$x^2$$ стане рівним нулеві:</p>
<p align="center">$$1-a=0\Longleftrightarrow a=1.$$</p>
<p>Розв’яжемо рівняння при $$a=1$$. Рівняння стане лінійним і матиме один корінь:</p>
<p align="center">$$0x^2+2\cdot\dfrac{1}{2}\cdot x+3-\dfrac{1}{2}=0\Longleftrightarrow x=-\dfrac{5}{2}.$$</p>
<p>Якщо $$a\neq\dfrac{1}{2}$$, то рівняння є квадратним. Шукаємо дискримінант:</p>
<p align="center">$$D=(2a)^2-4\cdot(1-a)\cdot(3-a)= 4a^2-(3-3a-a+a^2)=4(4a-3).$$</p>
<p>Дискримінант рівний нулеві за іншого «контрольного» значення параметра $$a=\dfrac{3}{4}$$.</p>
<p>Саме коли $$D=0$$ рівняння теж має один корінь.</p>
    </div>
    <div class="tab-pane" id="answer">
<p><b>Відповідь.</b> $$a=\dfrac{3}{4}$$ або $$a=1$$.</p>
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
<p>Розв’язати рівняння $$(1-a^2)x^2-2(a+1)x=1$$.</p>
<p>
<ul class="nav-tab" id="pr1">
<button class="btn" data-target="#decision1" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer1" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide1" data-toggle="tab">Приховати</button>
</ul>

<div id="pr1" class="tab-content">
  <div class="tab-pane" id="decision1">
<p><b><i>Розв'язок.</i></b></p>
<p>Знайдемо «контрольні» значення параметра $$a$$, за яких коефіцієнт при $$x^2$$ стане рівним нулеві:</p>
<p align="center">$$1-a^2=0\Longleftrightarrow a=\pm1.$$</p>
<p>Розв’яжемо рівняння при $$a=-1$$:</p>
<p align="center">$$0x^2-2(-1+1)\cdot x=1\Longleftrightarrow0x=1\Longleftrightarrow x\in\emptyset.$$</p>
<p>Розв’яжемо рівняння при $$a=1$$:</p>
<p align="center">$$0x^2-2(1+1)\cdot x=1\Longleftrightarrow x=-\dfrac{1}{4}$$.</p>
<p>Тепер розглянемо випадок $$a\neq1$$ — рівняння є квадратним.</p>
<p>Шукаємо дискримінант:</p>
<p align="center">$$D=(-2(a+1))^2-4(1-a^2)\cdot(-1)=4(a^2+2a+1)+4(1-a^2)=$$</p>
<p align="center">$$=4(a^2+2a+1+1-a^2)=4(2a+2)=8(a+1).$$</p>
<p>Знаходимо «контрольну» точку з умови $$D=0$$:</p>
<p align="center">$$8(a+1)=0\Longleftrightarrow a=-1.$$</p>
<p>Але вже накладена умова $$a\neq\pm1$$, тому $$D\neq0$$.</p>
<p>Дискримінант може бути лише більшим або меншим від нуля (пам’ятаємо при цьому, що $$a\neq1$$):</p>
<ul>
<li><p>$$a>-1\Longrightarrow D>0$$, і рівняння має два дійсних корені:</p>
<p align="center">$$x_{1,2} = \dfrac{2(a+1)\pm\sqrt{8(a+1)}}{2(1-a^2)}=\dfrac{a+1\pm\sqrt{2(a+1)}}{1-a^2};$$</p></li>
<li><p>$$a<-1\Longrightarrow D<0$$, і рівняння дійсних коренів не має: $$x\in\emptyset$$.</p>
<p>У відповіді об’єднаємо це з випадком $$a=-1$$, де теж $$x\in\emptyset.$$</p></li>
</ul>
    </div>
  <div class="tab-pane" id="answer1">
<p><b>Відповідь.</b> при $$a\in(-\infty;-1]$$: $$x\in\emptyset;$$</p>
<p>при $$a\in\{1\}$$: $$x=\dfrac{1}{4};$$</p>
<p>при $$a\in(-1;1)\cup(1;+\infty)$$: $$x_{1,2}=\dfrac{a+1\pm\sqrt{2(a+1)}}{1-a^2}.$$</p>
   </div>
  <div class="tab-pane" id="hide1"></div>
</div>
</p>    
</div>
</div>
</div>
<div class="space"></div>