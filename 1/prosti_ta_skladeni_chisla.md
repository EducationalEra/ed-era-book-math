# Простi та складенi числа

<div class="space">Тепер поговоримо про самi числа. У цiй частинi йде мова тiльки про натуральнi числа, тому далi це не вказується.</div>

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
<b>Простi числа</b> — тi числа, що дiляться тiльки на себе та на одиницю. Наприклад: $$2, 3, 5, 7, 13$$.
<p><b>Складенi числа</b> — тi числа, що мають бiльше нiж $$2$$ дiльники.</p>
</div>
</div>
</div>

<div class="space"><b>Розкладання складеного числа на простi множники</b> — це запис числа у виглядi добутку простих чисел, що є дiльниками цього числа:</div>

<p align="center">$$3276 = 2 \cdot 2 \cdot 3 \cdot 3 \cdot 7 \cdot 13.$$</p>

<div class="space">З iншого боку, запис буде простiшим, якщо звести однаковi множники та записати їх у степеневому виглядi:</div>

<p align="center">$$3276 = 2^2\cdot 3^2 \cdot 7^1 \cdot 13^1.$$</p>

<div class="fluidMedia">
<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/yX_KP2JlFg4" frameborder="0" allowfullscreen></iframe>
</div>
<div class="popup">
</div>

<div class="space"></div>

<b>Взаємно простi числа</b> — пара чисел, що не мають спiльних дiльникiв, крiм одиницi.

<div class="space">Часто стає у нагодi знання того, як знаходити найбiльший спiльний дiльник та найменше спiльне кратне.</div>

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
<b>Найбiльший спiльний дiльник (НСД) кiлькох чисел</b> — найбiльше число, на яке дiляться данi числа без остачi.
</div>
</div>
</div>

<div class="space">
<div class="alg-wrap">
<span class="alg">Алгоритм</span> <b>Знаходження НСД кiлькох чисел</b>
<div class="alg-text">
<ul>
<li>Записати розклад даних чисел на простi множники.</li>
<li>Записати степенi всiх простих множникiв.</li>
<li>Виписати всi простi множники.</li>
<li>Обрати найменший степiнь, що зустрiчається у розкладах.</li>
<li>Обчислити добуток цих степенiв.</li>
</ul>
</div>
</div>
</div>


<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">

<p>Обчислити НСД $$(504, 180)$$</p>

<p>
<ul class="nav-tab" id="mytab">
<button class="btn" data-target="#decision" data-toggle="pill">Розв’язок</button>
<button class="btn" data-target="#answer" data-toggle="pill">Вiдповiдь</button>
<button class="btn" data-target="#hide" data-toggle="pill">Приховати</button>
</ul>

<div id="mytab" class="tab-content">
  <div class="tab-pane" id="decision">
    <p>$$504 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 \cdot 7 = 2^3 \cdot 3^2 \cdot 7;$$</p>
    <p>$$180 = 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5 = 2^2 \cdot 3^2 \cdot 5.$$</p>
    <p>Виписуємо найменшi степенi спiльних множникiв та перемножимо:</p>
    <p>НСД $$(504,180) = 2^2 \cdot 3^2 = 6^2 = 36.$$</p>
  </div>
  <div class="tab-pane" id="answer"><p><b>Вiдповiдь.</b> $$36$$</p></div>
  <div class="tab-pane" id="hide"></div>
</div>
</p>

</div>
</div>
</div>


<br>


<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question text="">
        <p>Який НСД чисел $$460$$ і $$280$$?</p>
        <answer> $$8$$</answer>
        <answer> $$5$$</answer>
        <answer correct> $$20$$</answer>
        <answer> $$4$$</answer>
    <explanation>
    <p>Запишемо розклад даних чисел на простi множники:</p>
    <p>$$460=2\cdot2\cdot5\cdot23$$</p>
    <p>$$280=2\cdot2\cdot2\cdot5\cdot7$$</p>
    <p>Виписуємо найменшi степенi спiльних множникiв та перемножимо:</p>
    <p>НСД $$(460,280) = 2^2 \cdot 5^1 = 20.$$</p>
    </explanation>
    </question>
     <question text="">
        <p>Який НСД чисел $$16$$, $$20$$ і $$28$$?</p>
        <answer> $$2$$</answer>
        <answer correct> $$4$$</answer>
        <answer> $$8$$</answer>
        <answer> $$12$$</answer>
    <explanation>
    <p>Запишемо розклад даних чисел на простi множники:</p>
    <p>$$16=2\cdot2\cdot2\cdot2$$</p>
    <p>$$20=2\cdot2\cdot5$$</p>
    <p>$$28=2\cdot2\cdot7$$</p>
    <p>Виписуємо найменшi степенi спiльних множникiв та перемножимо:</p>
    <p>НСД $$(16,20,28) = 2^2 = 4.$$</p>
    </explanation>
        </question>
</quiz>

<div class="space">
<div class="eoz-wrap">
<span class="eoz">Визначення</span>
<div class="eoz-text">
<b>Найменше спiльне кратне (НСК) кiлькох чисел</b> — найменше число, яке дiлиться на данi числа без остачi.
</div>
</div>
</div>

<div class="space">
<div class="alg-wrap">
<span class="alg">Алгоритм</span> <b>Знаходження НСК кiлькох чисел</b>
<div class="alg-text">
<ul>
<li>Записати розклад даних чисел на простi множники.</li>
<li>Записати степенi всiх простих множникiв.</li>
<li>Виписати всi простi множники.</li>
<li>Обрати найбiльший степiнь, що зустрiчається у розкладах.</li>
<li>Обчислити добуток цих степенiв.</li>
</ul>
</div>
</div>
</div>


<div class="space">
<div class="task-wrap">
<span class="task">Приклад</span>
<div class="task-text">

<p>Обчислимо НСК $$(504, 180)$$</p>

<p>
<ul class="nav-tab" id="pr1">
<button class="btn" data-target="#decision1" data-toggle="tab">Розв’язок</button>
<button class="btn" data-target="#answer1" data-toggle="tab">Вiдповiдь</button>
<button class="btn" data-target="#hide1" data-toggle="tab">Приховати</button>
</ul>

<div id="pr1" class="tab-content">
  <div class="tab-pane" id="decision1">
<p>$$504 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 \cdot 7 = 2^3 \cdot 3^2 \cdot 7;$$</p>
<p>$$180 = 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5 = 2^2 \cdot 3^2 \cdot 5.$$</p>
<p>Виписуємо найбiльшi степенi всiх множникiв та перемножимо:</p>
<p>НСК $$(504,180) = 2^3 \cdot 3^2 \cdot 5 \cdot 7 = 2520.$$</p>
  </div>
  <div class="tab-pane" id="answer1"><p><b>Вiдповiдь.</b> $$2520.$$</p></div>
  <div class="tab-pane" id="hide1"></div>
</div>
</p>

</div>
</div>
</div>

<br>


<quiz correctLabel="correct" incorrectLabel="incorrect" checkLabel="check">
    <question text="">
        <p>Яке НСК чисел $$115$$ і $$920$$?</p>
        <answer>$$115$$</answer>
        <answer>$$23$$</answer>
        <answer correct>$$920$$</answer>
        <answer>$$1840$$</answer>
    <explanation>
    <p>Запишемо розклад даних чисел на простi множники:</p>
    <p>$$115 = 5\cdot23$$</p>
    <p>$$920 = 2\cdot2\cdot2\cdot5\cdot23$$</p>
    <p>Виписуємо найбiльшi степенi всiх множникiв та перемножимо:</p>
    <p>НСД $$(115,920) = 2^3 \cdot 5 \cdot 23 = 920.$$</p>
    </explanation>
        </question>
    <question text="">
    <p>Яке НСК чисел $$2$$, $$3$$ і $$4$$?</p>
        <answer>$$4$$</answer>
        <answer>$$8$$</answer>
        <answer correct>$$12$$</answer>
        <answer>$$24$$</answer>
    <explanation>
    <p>Запишемо розклад даних чисел на простi множники:</p>
    <p>$$4=2\cdot2$$</p>
    <p>Виписуємо найбiльшi степенi всiх множникiв та перемножимо:</p>
    <p>НСД $$(115,920) = 2 \cdot 2 \cdot 3 = 12.$$</p>
    </explanation>
        </question>
</quiz>

**Запис чисел за допомогою лiтер**. Будь-яке двозначне число можна записати у виглядi $$10a + b$$, де $$a$$ – цифра десяткiв $$(a\neq0)$$, а $$b$$ – цифра одиниць. Двозначне число, що складається з $$a$$ десяткiв та $$b$$ одиниць, записують $$(\overline{ab})$$ $$($$риска зверху говорить, що це не добуток двох змiнних $$a$$ i $$b)$$. Аналогiчно тризначне число $$(\overline{abc}) = 100a + 10b + c, a \neq 0.$$
