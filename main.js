var textWrapper = document.querySelector('.txt');

function nextSubject() {
    textWrapper.innerHTML = shuffledSubjects();
}

function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function () {
        if (copy.length < 1) { copy = array.slice(0); }
        var index = Math.floor(Math.random() * copy.length);
        var item = copy[index];
        copy.splice(index, 1);
        return item;
    };
}

var subjects = [
    'Опыт в поиске спонсора',
    'Одержимость ума',
    'Что мне дают шаги?',
    'Что мне дало служение в АА?',
    'Эгоцентризм – корень моих проблем',
    'Страх (Что я с ним делаю? Как я его переступаю?)',
    'Возвращение в сообщество (опыт)',
    'Суицидальные мысли в чистоте',
    'Недопонимания со спонсором (что делать?)',
    'Как часто я хожу на собрания? Для чего они мне нужны?',
    'Что я делаю с внутренней пустотой?',
    'Границы безопасности. Есть ли они у меня?',
    'Что такое болезнь зависимость?',
    'Практическое применение 1&#8209;го шага ',
    'Дно в чистоте',
    'Как справиться с ЖКС?',
    'Отношения с противоположным полом в выздоровлении ',
    'Что мне дал 4&#8209;й шаг?',
    'Моя Высшая Сила. Какая она?',
    'Есть ли для меня разница между наркоманией и зависимостью?',
    'Единство в АН, что я для этого делаю?',
    'Как я бываю полезным? ',
    '3&#8209;й шаг (опыт применения)',
    'Как я капитулирую перед программой?',
    'Какой я настоящий?',
    'Зачем я манипулирую людьми?',
    'Как я манипулирую программой?',
    'Приоритеты в финансах',
    'Отношение с родственниками',
    'Негативное отношения к критике',
    'Как я проверяю любовь?',
    '12&#8209;й шаг',
    'Кто для меня друг?',
    'Как я объединяю программу с целями/мечтами/планами?',
    'Есть ли у меня пятое колесо?',
    '11&#8209;й шаг',
    'Одержимость едой',
    'Мое отношения к чаям и энергетикам',
    'Отличие желания от готовности',
    'Как я отдыхаю?',
    'Доверие к Высшей Силе',
    'Духовный принцип непредубежденности',
    'Уверененность в себе (как я развиваю?)',
    'Слушаю ли я тяговую музыку?',
    'Как я развиваю физическую (биологическую) сферу?',
    'Что для меня духовность?',
    'Стал ли я активным членом общества? (Социализация)',
    'Применение традиций в жизни',
    'Конструктивные решения конфликтных ситуаций',
    'Трезвый я или чистый?',
    'Опыт служения в комитете',
    'Готов ли я стать спонсором?',
    'Дети',
    'К чему меня приводит нечестность?',
    '10&#8209;й шаг',
    'Что мне дает боль?',
    'Эмоциональное выгорание',
    'Предвзятое отношение на группе',
    'Как я отношусь к новичкам?',
    'Как у меня получилось зацепиться за сообщество?',
    'Что для меня мужество?',
    'Как Бог работает в моих страхах?',
    '9&#8209;й шаг',
    'Как Бог со мной общается ',
    'Что для меня ущерб?',
    'Бывает ли зло во благо?',
    'Часто ли я испытываю благодарность?',
    '7&#8209;я традиция ',
    '8&#8209;й шаг',
    'Как возвращаюсь в реальность от иллюзий? ',
    'Мои достоинства',
    'Трудности первого года чистоты',
    'Соблюдение режима дня (Как питаюсь? Как сплю?)',
    'Душевный покой ',
    'Мои ценности ',
    'Верность своим принципам',
    'Что для меня смысл жизни?',
    'Моя главная радость в жизни ',
    'Что меня отталкивает в сообществе?',
    'Как я начинаю верить?',
    '6&#8209;й шаг ',
    'Забота ',
    'Как я молюсь?',
    'Испытал ли я облегчение после 5&#8209;й шага?',
    'Как я отстаиваю границы?',
    'Есть ли у меня группа поддержки?',
    'Работа в выздоровлении',
    'Опыт расставания с партнером в выздоровлении',
    'Полезно ли мне одиночество?',
    'Проживание грусти/тоски в выздоровлении',
    '7&#8209;й шаг',
    'Почему я избегаю реальности?',
    'Признаю ли я свою слабость?',
    'Я или Мы?',
    'Мои духовные поступки',
    'Бегаю ли я за престижем/властью/авторитетом?',
    'Есть для меня лидеры в сообществе?',
    'Озабочен ли я собой?',
    'Как распознать срыв?',
    'Оцениваю ли я как служат другие?',
    'Что для меня означает вера?',
    'Что значит для меня выздоравливать?',
    'Какие положительные качества мне стоит развивать?',
    'Эмоциональные качели во время работы по 4&#8209;му шагу',
    'В каких ситуациях я чувствовал себя жертвой? ',
    'За что мне бывает стыдно и перед кем?',
    'Перфекционизм – как у меня проявляется?',
    'Лень — как у меня проявляется?',
    'Какие качества у моей Высшей Силы?',
    'Чувство вины — перед кем ощущаю, как с ним работаю, что с ним делаю?',
    'Чувство стыда — как проявляется, как с ним работаю, что с ним делаю?',
    'Какие «положняки» программы делаю ежедневно (регулярно)?',
    'Чувство юмора',
    'Мои цели и желания – помогают быть счастливым или разрушают меня?',
    'Отношение к религии',
    'Проживание негативных чувств',
    'Смирение — как я его понимаю?',
    'Честность перед собой',
    'Эгоцентризм и одержимость собой',
    'Эмоциональное равновесие',
    'Мои достоинства',
    'Своекорыстие — как у меня проявляется?',
    'Я больше отдаю или беру?',
    'Страх оценки',
    'Размышления/медитация по 11&#8209;му шагу (опыт)',
    'Мотивы моей честности и нечестности',
    'Грань между здоровыми личными границами и обидчивостью, злопамятностью ',
    'Воля ВС — как ее различаю в сложных ситуациях?',
    'Все ли инструменты выздоровления я использую сегодня?',
    'В чем и к кому у меня проявляется предубежденность?',
    'Готовность — как ее развиваю и использую?',
    'Как я укрепляю свою веру?',
    'Равнодушие – как у меня проявляется?',
    'Проявляются ли у меня злопамятность и мстительность?',
    'Что влияет на мою самооценку?',
    'Чем я делюсь на собрании? Мотивы моего высказывания',
    'Плюсы и минусы служения (опыт)',
    'Эмоциональная усталость (эмоциональное выгорание)',
    'Может ли вредить честность? (опыт)',
    'Отошение к себе в чистоте',
    'В каких ситуациях у меня проявляются уныние и жалость к себе?',
    'Праздники в чистоте',
    'Эмоциональное похмелье',
    'Доверие Высшей Силе',
    'В каких ситуациях я ощущаю гнев?',
    'Недовольство собой (самобичевание)',
    'Благодарность в действии',
    'Высокомерие — как у меня проявляется?',
    'Страх будущего (страх неизвестности)',
    'Как я реагирую на агрессию?',
    'Принятие чужого мнения (отличающегося от моего)',
    'Грань между доверием и доверчивостью',
    'Как я выражаю любовь?',
    'Бывает ли у меня обида на Высшую Силу?',
    'Прогресс, а не совершенство в выздоровлении — как я это понимаю?',
    'Баланс в жизненных сферах',
    'Навешиваю ли я ярлыки?',
    'Страх осуждения',
    'Принципы 6&#8209;го и 7&#8209;го шагов в повседневной жизни',
    'Что мешает мне выздоравливать?',
    'Какие инструменты программы я не пробовал? Или пробовал, но мне не очень подошли?',
    'Обесценивание в чистоте',
    'Отличие эгоизма и настоящей любви к себе',
    'Чему меня научила (учит) боль?',
    'Насколько я завишу от других людей?',
    'Предубеждения в программе',
    'Управляла ли сегодня моей жизнью болезнь?',
    'Проживание грусти',
    'Зависть — в чем и к кому у меня проявляется сегодня?',
    'Насколько для меня важна эмоциональная атмосфера на собрании (группе)?',
    'Грань между границами безопасности и самоизоляцией',
    'Качество моей трезвости (чистоты)',
    'Что важнее — работа по шагам или собрания? Или это одинаково важно для меня?',
    'Инструменты программы, которые мне действительно помогают (какие именно?)',
    '«Принципы, а не личности» – насколько для меня важно поступать по духовным принципам, не взирая на авторитетность других людей?',
    'Дефекты характера и мое внутреннее состояние',
    'Изменилось ли у меня понимание счастья в процессе выздоровления?',
    'Смирение в действии – как у меня проявляется?',
    'Насколько сегодня я себя идентифицирую с другими выздоравливающими?',
    'В чем у меня до сих пор есть предубеждения?',
    'Выражение благодарности — насколько для меня важно?',
    'Как я полезен другим?',
    'Опыт спонсирования',
    'Прощение (когда я прощаю обидчиков) – насколько для меня важно?',
    'Принимаю ли себя таким, как есть? Как выражается и что этому мешает?',
    'Одержимость результатом',
    'Принцип 5&#8209;го шага в повседневной жизни',
    'Страх быть непринятым',
    '«Праведный» гнев – может ли гнев быть справедливым?',
    'Практика служения (личный опыт)',
    'Оценивание других и страх оценки',
    'Откладывание важных дел на потом (прокрастинация)',
    'Недоверие Высшей Силе',
    'Возмещение ущерба самому себе — как я это понимаю?',
    'Отношения с родителями и родственниками',
    'Перфекционизм в работе по программе',
    'Тщеславие — как у меня проявляется?',
    'Мотивы моей помощи другим',
    'Страх бедности',
    'Принцип «как будто» — когда мне помогает и когда вредит?',
];

var shuffledSubjects = randomNoRepeats(subjects);